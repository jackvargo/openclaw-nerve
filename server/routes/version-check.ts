/**
 * GET /api/version/check — Check if a newer version is available.
 *
 * Runs `git ls-remote --tags origin` (same logic as the updater's
 * release-resolver), caches the result for 1 hour, and returns:
 *   { current, latest, updateAvailable }
 */

import { Hono } from 'hono';
import { execSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { rateLimitGeneral } from '../middleware/rate-limit.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pkg = JSON.parse(readFileSync(resolve(__dirname, '../../package.json'), 'utf-8')) as {
  version: string;
};

interface VersionCache {
  latest: string;
  checkedAt: number;
}

const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour
let cache: VersionCache | null = null;

function compareSemver(a: string, b: string): number {
  const pa = a.split('.').map(Number);
  const pb = b.split('.').map(Number);
  for (let i = 0; i < 3; i++) {
    if (pa[i] !== pb[i]) return pa[i] - pb[i];
  }
  return 0;
}

function fetchLatestTag(cwd: string): string | null {
  const semverRegex = /v?(\d+\.\d+\.\d+)$/;
  const versions: string[] = [];

  // Try remote first
  try {
    const output = execSync('git ls-remote --tags origin', {
      cwd,
      stdio: 'pipe',
      timeout: 10_000,
    }).toString();

    for (const line of output.split('\n')) {
      const match = semverRegex.exec(line.trim());
      if (match && !versions.includes(match[1])) {
        versions.push(match[1]);
      }
    }
  } catch {
    // Remote unreachable — try local tags
  }

  if (versions.length === 0) {
    try {
      const output = execSync('git tag -l', {
        cwd,
        stdio: 'pipe',
        timeout: 5_000,
      }).toString();

      for (const line of output.split('\n')) {
        const match = semverRegex.exec(line.trim());
        if (match && !versions.includes(match[1])) {
          versions.push(match[1]);
        }
      }
    } catch {
      return null;
    }
  }

  if (versions.length === 0) return null;
  versions.sort(compareSemver);
  return versions[versions.length - 1];
}

const app = new Hono();

app.get('/api/version/check', rateLimitGeneral, (c) => {
  const now = Date.now();
  const cwd = resolve(__dirname, '../..');

  // Serve from cache if fresh
  if (cache && now - cache.checkedAt < CACHE_TTL_MS) {
    return c.json({
      current: pkg.version,
      latest: cache.latest,
      updateAvailable: compareSemver(cache.latest, pkg.version) > 0,
    });
  }

  // Resolve latest tag
  const latest = fetchLatestTag(cwd);
  if (!latest) {
    return c.json({
      current: pkg.version,
      latest: null,
      updateAvailable: false,
      error: 'Could not fetch remote tags',
    });
  }

  cache = { latest, checkedAt: now };

  return c.json({
    current: pkg.version,
    latest,
    updateAvailable: compareSemver(latest, pkg.version) > 0,
  });
});

export default app;

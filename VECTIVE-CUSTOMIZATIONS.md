# Vective AI Customizations for OpenClaw Nerve

This fork (`jackvargo/openclaw-nerve`) applies Vective AI branding on top of
the upstream OpenClaw Nerve UI (`daggerhashimoto/openclaw-nerve`).

## Customized Files

| File | Change |
|------|--------|
| `index.html` | Title → "Zoie — Vective AI Nerve", Space Grotesk font, Vective favicon |
| `public/favicon.svg` | Vective hex-V mark |
| `public/favicon-32.png` | Vective favicon 32px |
| `public/favicon-256.png` | Vective favicon 256px |
| `public/apple-touch-icon.png` | Vective apple touch icon |
| `src/components/VectiveMark.tsx` | New: Vective logo mark SVG component |
| `src/components/TopBar.tsx` | VectiveMark + "VECTIVE AI" wordmark (Space Grotesk) |
| `src/features/auth/LoginPage.tsx` | VectiveMark + "Vective AI" branding on login |
| `src/lib/themes.ts` | nerve-dark + nerve-light themes (default: nerve-dark) |
| `src/contexts/SettingsContext.tsx` | Default theme → nerve-dark |

## Syncing with Upstream

### Quick sync (most common)
```bash
git fetch upstream
git rebase upstream/master
# Resolve any conflicts in the files listed above
git push origin master --force-with-lease
```

### If rebase has conflicts
The customizations are isolated to specific files. Conflicts will only happen if
upstream modifies the same files. Resolution strategy:
- `themes.ts` — Keep our themes at the top, accept upstream theme changes below
- `TopBar.tsx` — Keep VectiveMark import + usage, accept upstream layout changes
- `LoginPage.tsx` — Keep VectiveMark import + usage, accept upstream form changes
- `index.html` — Keep our title + font link, accept upstream meta/script changes
- `SettingsContext.tsx` — Keep nerve-dark default, accept other upstream changes

### Generate a patch (for applying to a clean upstream clone)
```bash
# From this repo, generate patch files for all Vective commits
git format-patch upstream/master --stdout > vective-branding.patch

# Apply to a fresh upstream clone
cd /path/to/fresh-nerve-clone
git am < /path/to/vective-branding.patch
```

### Nuclear option (re-apply from scratch)
If upstream diverges too far:
```bash
git checkout upstream/master
git checkout -b vective-rebrand
# Copy the customized files from this repo's artifacts
# Commit and force-push
```

## Setup (one-time)
```bash
git remote add upstream https://github.com/daggerhashimoto/openclaw-nerve.git
git remote add origin https://github.com/jackvargo/openclaw-nerve.git
```

## Deployment
On homelab docker-host:
```bash
cd ~/stacks/apps/nerve
docker compose build --no-cache
docker compose up -d
```
The Dockerfile clones from `jackvargo/openclaw-nerve` and builds.

/** Vective AI logo mark — hex-breach V in brand cyan. */
export default function VectiveMark({ size = 28 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      role="img"
      aria-label="Vective AI"
    >
      {/* Hexagonal border with gaps for V breach */}
      <line x1="74" y1="362" x2="74" y2="158" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
      <line x1="74" y1="158" x2="120" y2="132" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
      <line x1="392" y1="132" x2="438" y2="158" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
      <line x1="438" y1="158" x2="438" y2="362" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
      <line x1="438" y1="362" x2="256" y2="468" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
      <line x1="256" y1="468" x2="74" y2="362" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
      <line x1="155" y1="112" x2="256" y2="52" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
      <line x1="256" y1="52" x2="358" y2="112" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
      {/* Thick V that extends beyond hex */}
      <path
        d="M 100 108 L 256 392 L 412 108"
        fill="none"
        stroke="currentColor"
        strokeWidth="48"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
      />
    </svg>
  );
}

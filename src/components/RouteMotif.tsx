export function RouteMotif() {
  return (
    <svg
      viewBox="0 0 320 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-full"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <line
        x1="34"
        y1="20"
        x2="286"
        y2="20"
        stroke="var(--border)"
        strokeWidth="1"
        strokeDasharray="2 6"
        strokeLinecap="round"
      />
      <circle cx="30" cy="20" r="3" fill="var(--accent)" />
      <circle cx="290" cy="20" r="3" fill="var(--accent)" />
      <text x="0" y="12" className="font-mono-tight" fontSize="10" fill="var(--muted)" letterSpacing="0.08em">
        BLR
      </text>
      <text x="271" y="12" className="font-mono-tight" fontSize="10" fill="var(--muted)" letterSpacing="0.08em">
        NEXT
      </text>
      <g transform="translate(160, 20) rotate(90)">
        <path
          d="M0 -5 L1.6 0 L0 5 L-1.6 3 L-4.5 3.6 L-3 0 L-4.5 -3.6 L-1.6 -3 Z"
          fill="var(--accent)"
        />
      </g>
    </svg>
  );
}

interface LogoMarkProps {
  size?: number;
  variant?: "dark" | "teal" | "amber" | "circle";
}

export function LogoMark({ size = 64, variant = "dark" }: LogoMarkProps) {
  const bgColor = variant === "teal" ? "#1D9E75" : variant === "amber" ? "#EF9F27" : "#1A1A1A";
  const heartStroke = variant === "dark" || variant === "circle" ? "#F1EFE8" : "#1A1A1A";
  const ecgStroke = variant === "amber" ? "#1A1A1A" : "#EF9F27";
  const playCircleFill = variant === "teal" ? "#1A1A1A" : "#1D9E75";
  const playArrowFill = variant === "dark" || variant === "circle" ? "#1A1A1A" : variant === "amber" ? "#EF9F27" : "#F1EFE8";

  const bg =
    variant === "circle" ? (
      <circle cx="32" cy="32" r="32" fill="#1A1A1A" />
    ) : (
      <rect width="64" height="64" rx="14" fill={bgColor} />
    );

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Cutherapy"
    >
      <title>Cutherapy</title>
      {bg}
      <g transform="translate(3,5) scale(1.95)">
        <path
          d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
          stroke={heartStroke}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"
          stroke={ecgStroke}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <circle cx="49" cy="49" r="10" fill={playCircleFill} />
      <polygon points="45.5,44.5 45.5,53.5 55,49" fill={playArrowFill} />
    </svg>
  );
}

interface LogoNavProps {
  variant?: "dark" | "sand";
  width?: number;
}

export function LogoNav({ variant = "dark", width = 190 }: LogoNavProps) {
  const heartStroke = variant === "dark" ? "#F1EFE8" : "#1A1A1A";
  const textFill = variant === "dark" ? "#F1EFE8" : "#1A1A1A";
  const baselineStroke = variant === "dark" ? "#2C2C2A" : "#D3D1C7";
  const playArrowFill = variant === "dark" ? "#1A1A1A" : "#F1EFE8";
  const height = Math.round(width * (50 / 230));

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 230 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Cutherapy"
    >
      <title>Cutherapy</title>
      <g transform="translate(0,2) scale(1.7)">
        <path
          d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
          stroke={heartStroke}
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"
          stroke="#EF9F27"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <circle cx="44" cy="23" r="9" fill="#1D9E75" />
      <polygon points="40.5,18.5 40.5,27.5 49.5,23" fill={playArrowFill} />
      <text
        x="58"
        y="27"
        fontFamily="'DM Serif Display', 'Georgia', serif"
        fontSize="20"
        fill={textFill}
        letterSpacing="-0.4"
      >
        Cutherapy
      </text>
      <line x1="58" y1="33" x2="228" y2="33" stroke={baselineStroke} strokeWidth="0.5" />
      <text
        x="59"
        y="44"
        fontFamily="'DM Mono', 'Courier New', monospace"
        fontSize="9"
        fill="#1D9E75"
        letterSpacing="1.6"
      >
        MONTAGE MÉDICAL
      </text>
    </svg>
  );
}

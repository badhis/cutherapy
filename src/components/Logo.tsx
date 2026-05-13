interface LogoMarkProps {
  size?: number;
  variant?: "teal" | "amber";
  bgColor?: string;
}

export function LogoMark({ size = 44, variant = "teal", bgColor = "#1A1A1A" }: LogoMarkProps) {
  const shearColor = variant === "amber" ? "#EF9F27" : "#1D9E75";
  const radius = Math.round(size * 0.2);
  const iconSize = Math.round(size * 0.52);

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: radius,
        background: bgColor,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: shearColor,
          clipPath: "polygon(0 0, 56% 0, 44% 100%, 0 100%)",
        }}
      />
      <svg
        style={{ position: "relative", zIndex: 1 }}
        xmlns="http://www.w3.org/2000/svg"
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#EF9F27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
        <path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
      </svg>
    </div>
  );
}

import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 7,
          background: "#1A1A1A",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Teal shear */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "#1D9E75",
            clipPath: "polygon(0 0, 56% 0, 44% 100%, 0 100%)",
          }}
        />
        {/* HeartPulse SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={17}
          height={17}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#F1EFE8"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ position: "relative", zIndex: 1 }}
        >
          <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
          <path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
        </svg>
      </div>
    ),
    { ...size }
  );
}

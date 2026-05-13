import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-5"
      style={{ background: "#1A1A1A" }}
    >
      <p
        className="text-8xl font-bold mb-4"
        style={{ fontFamily: "var(--font-mono)", color: "#1D9E75" }}
      >
        404
      </p>
      <h1
        className="text-3xl mb-4"
        style={{ fontFamily: "var(--font-serif)", color: "#F1EFE8" }}
      >
        Page introuvable
      </h1>
      <p className="text-sm mb-8" style={{ color: "#888780" }}>
        Cette page n&apos;existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200"
        style={{ background: "#1D9E75", color: "#F1EFE8" }}
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}

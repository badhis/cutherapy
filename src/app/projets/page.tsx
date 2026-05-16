import FadeIn from "@/components/FadeIn";

export default function ProjetsPage() {
  return (
    <div className="pt-24">
      <section className="max-w-6xl mx-auto px-5 py-16 min-h-[60vh] flex flex-col items-center justify-center text-center">
        <FadeIn>
          <p
            className="text-xs font-semibold mb-6 uppercase tracking-widest"
            style={{ color: "#1D9E75", fontFamily: "var(--font-mono)" }}
          >
            Projets
          </p>
          <h1
            className="text-4xl md:text-5xl mb-4"
            style={{ fontFamily: "var(--font-serif)", color: "#F1EFE8", letterSpacing: "-0.02em" }}
          >
            Cas d&apos;études à venir cette semaine
          </h1>
          <p className="text-sm" style={{ color: "#888780", fontFamily: "var(--font-mono)" }}>
            — en cours de préparation —
          </p>
        </FadeIn>
      </section>
    </div>
  );
}

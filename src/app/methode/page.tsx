"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const steps = [
  {
    number: "01",
    title: "Brief",
    subtitle: "Comprendre votre univers",
    description:
      "On commence par un appel de 20 minutes. Vous m'expliquez votre activité, votre cible et ce que vous voulez transmettre. Je note tout, je pose les bonnes questions. Pas de jargon, pas de formulaires interminables.",
    duration: "20 min",
    deliverable: "Fiche brief validée",
    color: "#1D9E75",
  },
  {
    number: "02",
    title: "Réception des rushes",
    subtitle: "Vous filmez, j'organise",
    description:
      "Vous m'envoyez vos fichiers bruts via un lien de partage (WeTransfer, Drive, etc.). Je réceptionne, classe et analyse chaque séquence avant de commencer le montage.",
    duration: "24h",
    deliverable: "Confirmation de réception",
    color: "#EF9F27",
  },
  {
    number: "03",
    title: "Montage",
    subtitle: "Le travail commence",
    description:
      "Je monte votre vidéo en respectant le brief : rythme, ton, structure. Sous-titres, colorimétrie, transitions — chaque détail est travaillé pour que le résultat soit professionnel et efficace.",
    duration: "48–72h",
    deliverable: "Version 1 à valider",
    color: "#1D9E75",
  },
  {
    number: "04",
    title: "Révisions",
    subtitle: "On affine ensemble",
    description:
      "Vous regardez la V1 et me faites vos retours. Je les intègre rapidement. Le nombre d'allers-retours dépend de votre pack. En général, un ou deux suffit pour atteindre le résultat attendu.",
    duration: "24h par retour",
    deliverable: "Version finale approuvée",
    color: "#EF9F27",
  },
  {
    number: "05",
    title: "Livraison",
    subtitle: "Prêt à publier",
    description:
      "Je vous livre les fichiers finaux dans tous les formats demandés (MP4 HD, formats verticaux/horizontaux, miniatures si incluses). Tout est prêt à publier, sans aucune retouche supplémentaire.",
    duration: "Immédiate",
    deliverable: "Fichiers livrés + archivage 30j",
    color: "#1D9E75",
  },
];

export default function MethodePage() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-5 py-16">
        <FadeIn>
          <p
            className="text-xs font-semibold mb-4 uppercase tracking-widest"
            style={{ color: "#1D9E75", fontFamily: "var(--font-mono)" }}
          >
            Ma méthode
          </p>
          <h1
            className="text-5xl md:text-6xl mb-5"
            style={{ fontFamily: "var(--font-serif)", color: "#F1EFE8", letterSpacing: "-0.02em" }}
          >
            Du brief
            <br />
            <em style={{ color: "#1D9E75" }}>à la livraison</em>
          </h1>
          <p className="text-base max-w-xl" style={{ color: "#888780" }}>
            5 étapes claires, un seul interlocuteur, zéro surprise.
            Voici exactement comment je travaille avec chaque client.
          </p>
        </FadeIn>
      </section>

      {/* Steps */}
      <section className="max-w-4xl mx-auto px-5 pb-20">
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-7 top-8 hidden md:block"
            style={{
              width: 1,
              bottom: 40,
              background: "linear-gradient(to bottom, #1D9E75, rgba(29,158,117,0.1))",
            }}
          />

          <div className="flex flex-col gap-5">
            {steps.map((step, i) => (
              <FadeIn key={step.number} delay={i * 0.1}>
                <div className="flex gap-6 md:gap-10">
                  {/* Number */}
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center text-sm font-bold z-10 relative"
                      style={{
                        fontFamily: "var(--font-mono)",
                        background: step.color === "#EF9F27"
                          ? "rgba(239,159,39,0.12)"
                          : "rgba(29,158,117,0.12)",
                        color: step.color,
                        border: `1px solid ${step.color === "#EF9F27" ? "rgba(239,159,39,0.3)" : "rgba(29,158,117,0.3)"}`,
                      }}
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className="flex-1 rounded-2xl p-6 mb-2"
                    style={{
                      background: "#2C2C2A",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h2
                          className="text-2xl"
                          style={{ fontFamily: "var(--font-serif)", color: "#F1EFE8" }}
                        >
                          {step.title}
                        </h2>
                        <p
                          className="text-sm font-semibold"
                          style={{ color: step.color, fontFamily: "var(--font-sans)" }}
                        >
                          {step.subtitle}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span
                          className="px-3 py-1 rounded-full text-xs"
                          style={{
                            background: "rgba(255,255,255,0.05)",
                            color: "#888780",
                            fontFamily: "var(--font-mono)",
                            border: "1px solid rgba(255,255,255,0.08)",
                          }}
                        >
                          ⏱ {step.duration}
                        </span>
                        <span
                          className="px-3 py-1 rounded-full text-xs"
                          style={{
                            background: "rgba(29,158,117,0.1)",
                            color: "#1D9E75",
                            fontFamily: "var(--font-sans)",
                          }}
                        >
                          ✓ {step.deliverable}
                        </span>
                      </div>
                    </div>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#888780", fontFamily: "var(--font-sans)" }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <FadeIn>
        <section
          className="py-20"
          style={{ background: "#2C2C2A", borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div className="max-w-2xl mx-auto px-5 text-center">
            <h2
              className="text-4xl mb-4"
              style={{ fontFamily: "var(--font-serif)", color: "#F1EFE8" }}
            >
              Prêt à commencer ?
            </h2>
            <p className="text-base mb-8" style={{ color: "#888780" }}>
              L&apos;étape 1 commence avec vous. Remplissez le formulaire et je
              reviens sous 24h pour planifier le brief.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold transition-all duration-200"
              style={{ background: "#1D9E75", color: "#F1EFE8" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#0F6E56";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(29,158,117,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#1D9E75";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Démarrer le processus <ArrowRight size={15} />
            </Link>
          </div>
        </section>
      </FadeIn>
    </div>
  );
}

"use client";

import Link from "next/link";
import { Check, ArrowRight, Zap, Star, Crown } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const packs = [
  {
    id: "starter",
    icon: <Zap size={20} />,
    name: "Starter",
    tagline: "Pour commencer à construire votre présence",
    price: "290",
    period: "/ vidéo",
    highlight: false,
    features: [
      "1 vidéo montée (jusqu'à 90s)",
      "Sous-titres incrustés",
      "1 aller-retour inclus",
      "Format vertical & horizontal",
      "Livraison en 5 jours ouvrés",
    ],
    cta: "Choisir Starter",
  },
  {
    id: "pro",
    icon: <Star size={20} />,
    name: "Pro",
    tagline: "Pour une communication régulière et impactante",
    price: "590",
    period: "/ mois",
    highlight: true,
    badge: "Le plus demandé",
    features: [
      "4 vidéos / mois (jusqu'à 90s chacune)",
      "Sous-titres animés",
      "2 allers-retours / vidéo",
      "Formats multiples (Reel, Short, Story)",
      "Livraison en 72h",
      "Brief mensuel stratégique",
    ],
    cta: "Choisir Pro",
  },
  {
    id: "premium",
    icon: <Crown size={20} />,
    name: "Premium",
    tagline: "Pour une présence vidéo complète et professionnelle",
    price: "990",
    period: "/ mois",
    highlight: false,
    badge: "Premium",
    features: [
      "8 vidéos / mois (jusqu'à 3 min)",
      "Motion design & animations",
      "Révisions illimitées",
      "Formats multiples + miniatures",
      "Livraison en 48h",
      "Stratégie de contenu incluse",
      "Accès prioritaire",
    ],
    cta: "Choisir Premium",
  },
];

const faqs = [
  {
    q: "Comment se passe la commande ?",
    a: "Vous remplissez le formulaire de contact, je vous recontacte sous 24h pour un brief rapide, puis je commence le montage dès validation.",
  },
  {
    q: "Que dois-je vous fournir ?",
    a: "Vos fichiers bruts (vidéo, audio), une direction éditoriale et vos préférences visuelles. Je m'occupe du reste.",
  },
  {
    q: "Puis-je commander une vidéo unique sans abonnement ?",
    a: "Oui, le pack Starter est conçu pour ça. Pour des besoins ponctuels, c'est la meilleure option.",
  },
  {
    q: "Les sous-titres sont-ils inclus ?",
    a: "Oui dans tous les packs. Pack Pro et Premium, ils sont animés et synchronisés mot par mot.",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-5 py-16 text-center">
        <FadeIn>
          <p
            className="text-xs font-semibold mb-4 uppercase tracking-widest"
            style={{ color: "#1D9E75", fontFamily: "var(--font-mono)" }}
          >
            Tarifs
          </p>
          <h1
            className="text-5xl md:text-6xl mb-5"
            style={{ fontFamily: "var(--font-serif)", color: "#F1EFE8", letterSpacing: "-0.02em" }}
          >
            Des formules
            <br />
            <em style={{ color: "#1D9E75" }}>sans surprise</em>
          </h1>
          <p className="text-base max-w-xl mx-auto" style={{ color: "#888780" }}>
            Trois packs pensés pour les professionnels de santé. Choisissez celui
            qui correspond à votre rythme de publication.
          </p>
        </FadeIn>
      </section>

      {/* Pricing */}
      <section className="max-w-6xl mx-auto px-5 pb-24">
        <div className="grid md:grid-cols-3 gap-5">
          {packs.map((pack, i) => (
            <FadeIn key={pack.id} delay={i * 0.1}>
              <div
                className="relative rounded-2xl p-7 h-full flex flex-col transition-all duration-300"
                style={{
                  background: pack.highlight ? "#04342C" : "#2C2C2A",
                  border: pack.highlight
                    ? "1px solid rgba(29,158,117,0.5)"
                    : "1px solid rgba(255,255,255,0.07)",
                }}
                onMouseEnter={(e) => {
                  if (!pack.highlight) {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(29,158,117,0.3)";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!pack.highlight) {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  }
                }}
              >
                {pack.badge && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold"
                    style={{
                      background: pack.highlight ? "#1D9E75" : "#FAEEDA",
                      color: pack.highlight ? "#F1EFE8" : "#633806",
                      fontFamily: "var(--font-mono)",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {pack.badge}
                  </div>
                )}

                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: "rgba(29,158,117,0.15)",
                    color: "#1D9E75",
                  }}
                >
                  {pack.icon}
                </div>

                <h2
                  className="text-2xl mb-1"
                  style={{ fontFamily: "var(--font-serif)", color: "#F1EFE8" }}
                >
                  {pack.name}
                </h2>
                <p className="text-sm mb-6" style={{ color: "#888780" }}>
                  {pack.tagline}
                </p>

                {/* Price */}
                <div className="mb-7 flex items-end gap-1">
                  <span
                    className="text-4xl font-bold leading-none"
                    style={{ fontFamily: "var(--font-mono)", color: "#EF9F27" }}
                  >
                    {pack.price}€
                  </span>
                  <span
                    className="text-sm pb-0.5"
                    style={{ color: "#888780", fontFamily: "var(--font-sans)" }}
                  >
                    {pack.period}
                  </span>
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {pack.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm">
                      <Check size={14} className="mt-0.5 flex-shrink-0" style={{ color: "#1D9E75" }} />
                      <span style={{ color: "#D3D1C7", fontFamily: "var(--font-sans)" }}>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full text-sm font-semibold transition-all duration-200"
                  style={{
                    background: pack.highlight ? "#1D9E75" : "transparent",
                    color: pack.highlight ? "#F1EFE8" : "#1D9E75",
                    border: pack.highlight ? "none" : "1px solid rgba(29,158,117,0.4)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#0F6E56";
                    e.currentTarget.style.color = "#F1EFE8";
                    e.currentTarget.style.border = "1px solid transparent";
                  }}
                  onMouseLeave={(e) => {
                    if (pack.highlight) {
                      e.currentTarget.style.background = "#1D9E75";
                      e.currentTarget.style.border = "none";
                    } else {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "#1D9E75";
                      e.currentTarget.style.border = "1px solid rgba(29,158,117,0.4)";
                    }
                  }}
                >
                  {pack.cta} <ArrowRight size={14} />
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section
        className="py-20"
        style={{ background: "#2C2C2A", borderTop: "1px solid rgba(255,255,255,0.07)" }}
      >
        <div className="max-w-3xl mx-auto px-5">
          <FadeIn>
            <p
              className="text-xs font-semibold mb-3 uppercase tracking-widest text-center"
              style={{ color: "#1D9E75", fontFamily: "var(--font-mono)" }}
            >
              FAQ
            </p>
            <h2
              className="text-4xl mb-12 text-center"
              style={{ fontFamily: "var(--font-serif)", color: "#F1EFE8" }}
            >
              Questions fréquentes
            </h2>
          </FadeIn>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div
                  className="rounded-xl p-6"
                  style={{
                    background: "#363633",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <h3
                    className="font-semibold mb-2 text-sm"
                    style={{ fontFamily: "var(--font-sans)", color: "#F1EFE8" }}
                  >
                    {faq.q}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#888780" }}>
                    {faq.a}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

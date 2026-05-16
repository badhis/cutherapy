"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle2, Scissors, Clock } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/>
        <path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/>
      </svg>
    ),
    title: "Contenu social media",
    desc: "Reels, Shorts et clips optimisés pour capter l'attention en moins de 3 secondes.",
    tag: "Instagram · TikTok · YouTube",
  },
  {
    icon: <Scissors size={20} />,
    title: "Vidéos de présentation",
    desc: "Présentez votre cabinet, votre expertise et vos valeurs avec un format soigné.",
    tag: "Cabinet · Site web",
  },
  {
    icon: <Clock size={20} />,
    title: "Témoignages patients",
    desc: "Montages percutants pour renforcer votre crédibilité et rassurer vos futurs patients.",
    tag: "Confiance · Autorité",
  },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        {/* Ambient glows */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-10%", right: "-5%",
            width: 700, height: 700,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(29,158,117,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: "5%", left: "-10%",
            width: 500, height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(239,159,39,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-6xl mx-auto px-5 w-full py-20 md:py-32 grid md:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-8"
              style={{
                background: "rgba(29,158,117,0.12)",
                border: "1px solid rgba(29,158,117,0.3)",
                color: "#1D9E75",
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.06em",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#1D9E75" }} />
              INFIRMIER DE · MONTEUR VIDÉO
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-5xl lg:text-[56px] leading-[1.08] mb-5"
              style={{ fontFamily: "var(--font-serif)", color: "#F1EFE8", letterSpacing: "-0.02em" }}
            >
              Le seul monteur vidéo
              <br />
              qui{" "}
              <em style={{ color: "#1D9E75", fontStyle: "italic" }}>comprend</em>
              <br />
              ce que vous dites.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35 }}
              className="text-lg leading-relaxed mb-3 max-w-md"
              style={{ color: "#888780", fontFamily: "var(--font-sans)" }}
            >
              Infirmier certains jours et monteur vidéo le reste du temps.
              Je transforme votre brut en contenu propre, sous-titré et prêt
              à publier — en 48h. Sans allers-retours inutiles.
              Vos termes, vos enjeux de crédibilité, vos contraintes
              déontologiques — je les connais.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.42 }}
              className="text-base font-medium mb-8 italic"
              style={{ fontFamily: "var(--font-serif)", color: "#EF9F27" }}
            >
              Vous soignez. Je m&apos;occupe de votre image.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold transition-all duration-200"
                style={{ background: "#1D9E75", color: "#F1EFE8" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#0F6E56";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(29,158,117,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#1D9E75";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Voir les offres <ArrowRight size={15} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold border transition-all duration-200"
                style={{ borderColor: "rgba(255,255,255,0.15)", color: "#888780" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
                  e.currentTarget.style.color = "#F1EFE8";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                  e.currentTarget.style.color = "#888780";
                }}
              >
                Prendre contact
              </Link>
            </motion.div>
          </div>

          {/* Right – video mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden md:block"
          >
            <div
              className="rounded-2xl overflow-hidden aspect-[4/3]"
              style={{ background: "#2C2C2A", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <div className="h-full flex flex-col">
                {/* Mock video bar */}
                <div
                  className="flex items-center gap-1.5 px-4 py-3 border-b"
                  style={{ borderColor: "rgba(255,255,255,0.07)" }}
                >
                  {["#FF5F57", "#FEBC2E", "#28C840"].map((c) => (
                    <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
                  ))}
                  <div
                    className="ml-2 flex-1 h-5 rounded"
                    style={{ background: "rgba(255,255,255,0.05)", maxWidth: 160 }}
                  />
                </div>
                {/* Video area */}
                <div className="flex-1 flex items-center justify-center relative">
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "radial-gradient(ellipse at center, rgba(29,158,117,0.08) 0%, transparent 70%)",
                    }}
                  />
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-110"
                    style={{
                      background: "rgba(29,158,117,0.15)",
                      border: "1px solid rgba(29,158,117,0.4)",
                    }}
                  >
                    <Play size={28} fill="#1D9E75" color="#1D9E75" />
                  </div>
                </div>
                {/* Mock timeline */}
                <div className="px-4 py-3 border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
                  <div className="h-1.5 rounded-full mb-2" style={{ background: "rgba(255,255,255,0.08)" }}>
                    <div className="h-full w-[42%] rounded-full" style={{ background: "#1D9E75" }} />
                  </div>
                  <div className="flex justify-between text-xs" style={{ fontFamily: "var(--font-mono)", color: "#888780" }}>
                    <span>0:51</span><span>2:00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute -bottom-5 -left-5 flex items-center gap-2.5 px-4 py-2.5 rounded-xl"
              style={{
                background: "#2C2C2A",
                border: "1px solid rgba(29,158,117,0.3)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              }}
            >
              <CheckCircle2 size={15} color="#1D9E75" />
              <span
                className="text-xs font-medium"
                style={{ fontFamily: "var(--font-sans)", color: "#F1EFE8" }}
              >
                Livré en 48h
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="max-w-6xl mx-auto px-5 py-20">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p
                className="text-xs font-semibold mb-3 uppercase tracking-widest"
                style={{ color: "#1D9E75", fontFamily: "var(--font-mono)" }}
              >
                Prestations
              </p>
              <h2
                className="text-4xl md:text-5xl"
                style={{ fontFamily: "var(--font-serif)", color: "#F1EFE8" }}
              >
                Ce que je fais
                <br />
                <em style={{ color: "#1D9E75" }}>pour vous</em>
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-medium self-start md:self-auto transition-colors"
              style={{ color: "#888780" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#1D9E75")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#888780")}
            >
              Voir les tarifs <ArrowRight size={14} />
            </Link>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div
                className="rounded-2xl p-6 h-full transition-all duration-300 group cursor-default"
                style={{
                  background: "#2C2C2A",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(29,158,117,0.4)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 40px rgba(0,0,0,0.3)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "rgba(29,158,117,0.15)", color: "#1D9E75" }}
                >
                  {s.icon}
                </div>
                <h3
                  className="text-xl mb-2"
                  style={{ fontFamily: "var(--font-serif)", color: "#F1EFE8" }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "#888780", fontFamily: "var(--font-sans)" }}
                >
                  {s.desc}
                </p>
                <span
                  className="text-xs px-2.5 py-1 rounded-full"
                  style={{
                    background: "rgba(29,158,117,0.1)",
                    color: "#1D9E75",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {s.tag}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <FadeIn>
        <section className="max-w-6xl mx-auto px-5 pb-24">
          <div
            className="rounded-2xl px-8 py-16 md:py-24 text-center relative overflow-hidden"
            style={{ background: "#04342C", border: "1px solid rgba(29,158,117,0.25)" }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at 60% 0%, rgba(29,158,117,0.2) 0%, transparent 60%)",
              }}
            />
            <p
              className="text-xs font-semibold mb-4 uppercase tracking-widest relative z-10"
              style={{ color: "#1D9E75", fontFamily: "var(--font-mono)" }}
            >
              Consultation gratuite
            </p>
            <h2
              className="text-4xl md:text-5xl mb-4 relative z-10"
              style={{ fontFamily: "var(--font-serif)", color: "#F1EFE8", letterSpacing: "-0.02em" }}
            >
              Prêt à soigner
              <br />
              votre image ?
            </h2>
            <p
              className="text-sm mb-10 relative z-10"
              style={{ color: "rgba(241,239,232,0.5)" }}
            >
              Premier appel de cadrage sans engagement · Devis sous 24h
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold transition-all duration-200 relative z-10"
              style={{ background: "#1D9E75", color: "#F1EFE8" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#0F6E56";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(29,158,117,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#1D9E75";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Discutons de votre projet <ArrowRight size={15} />
            </Link>
          </div>
        </section>
      </FadeIn>
    </>
  );
}

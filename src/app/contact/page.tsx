"use client";

import { useState } from "react";
import { Send, CheckCircle2, Clock, MessageSquare } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const infos = [
  {
    icon: <Clock size={17} />,
    title: "Réponse rapide",
    desc: "Je réponds sous 24h, jours ouvrés.",
  },
  {
    icon: <MessageSquare size={17} />,
    title: "Brief gratuit",
    desc: "Premier appel de cadrage sans engagement.",
  },
  {
    icon: <CheckCircle2 size={17} />,
    title: "Devis sous 24h",
    desc: "Une proposition adaptée à votre projet.",
  },
];

const packOptions = [
  "— Ads statiques Meta —",
  "Le Test Clinique — Ads (490 € / mois)",
  "La Campagne Complète — Ads (790 € / mois)",
  "Le Protocole Autorité — Ads (1 200 € / mois)",
  "— Pack Reels montés —",
  "La Dose Hebdomadaire — Reels (590 € / mois)",
  "Le Traitement de Fond — Reels (990 € / mois)",
  "La Prise en Charge Globale — Reels (1 500 € / mois)",
  "Je ne sais pas encore",
];

const inputBase: React.CSSProperties = {
  background: "#363633",
  border: "1px solid rgba(255,255,255,0.1)",
  color: "#F1EFE8",
  fontFamily: "var(--font-sans)",
  borderRadius: "0.75rem",
  padding: "0.75rem 1rem",
  width: "100%",
  outline: "none",
  fontSize: "0.875rem",
  transition: "border-color 0.2s",
};

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    profession: "",
    pack: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-5 py-16">
        <FadeIn>
          <p
            className="text-xs font-semibold mb-4 uppercase tracking-widest"
            style={{ color: "#1D9E75", fontFamily: "var(--font-mono)" }}
          >
            Contact
          </p>
          <h1
            className="text-5xl md:text-6xl mb-5"
            style={{ fontFamily: "var(--font-serif)", color: "#F1EFE8", letterSpacing: "-0.02em" }}
          >
            Parlons de
            <br />
            <em style={{ color: "#1D9E75" }}>votre projet</em>
          </h1>
        </FadeIn>
      </section>

      <section className="max-w-6xl mx-auto px-5 pb-24 grid md:grid-cols-[1fr_1.8fr] gap-10">
        {/* Left */}
        <FadeIn direction="left">
          <div className="flex flex-col gap-4">
            {infos.map((info, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-2xl"
                style={{
                  background: "#2C2C2A",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(29,158,117,0.15)", color: "#1D9E75" }}
                >
                  {info.icon}
                </div>
                <div>
                  <p
                    className="font-semibold text-sm mb-0.5"
                    style={{ fontFamily: "var(--font-sans)", color: "#F1EFE8" }}
                  >
                    {info.title}
                  </p>
                  <p className="text-xs" style={{ color: "#888780" }}>
                    {info.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Email badge */}
            <div
              className="p-5 rounded-2xl mt-1"
              style={{
                background: "rgba(239,159,39,0.08)",
                border: "1px solid rgba(239,159,39,0.2)",
              }}
            >
              <p
                className="text-xs font-semibold mb-1.5 uppercase tracking-wider"
                style={{ color: "#EF9F27", fontFamily: "var(--font-mono)" }}
              >
                Email direct
              </p>
              <p
                className="text-sm"
                style={{ fontFamily: "var(--font-mono)", color: "#D3D1C7" }}
              >
                badhispro@gmail.com
              </p>
            </div>

            {/* Do/Don't card */}
            <div
              className="p-5 rounded-2xl"
              style={{
                background: "rgba(29,158,117,0.05)",
                border: "1px solid rgba(29,158,117,0.2)",
              }}
            >
              <p
                className="text-xs font-semibold mb-3 uppercase tracking-wider"
                style={{ color: "#1D9E75", fontFamily: "var(--font-mono)" }}
              >
                Comment je travaille
              </p>
              <p
                className="text-xs leading-relaxed italic"
                style={{ fontFamily: "var(--font-serif)", color: "#D3D1C7", fontSize: "0.85rem" }}
              >
                &ldquo;Vous filmez entre deux consultations.
                Je monte et livre en 48h.&rdquo;
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Right – Form */}
        <FadeIn direction="right">
          {submitted ? (
            <div
              className="rounded-2xl p-10 flex flex-col items-center justify-center text-center h-full min-h-[400px]"
              style={{
                background: "#2C2C2A",
                border: "1px solid rgba(29,158,117,0.3)",
              }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                style={{ background: "rgba(29,158,117,0.12)", border: "1px solid rgba(29,158,117,0.3)" }}
              >
                <CheckCircle2 size={28} color="#1D9E75" />
              </div>
              <h2
                className="text-3xl mb-3"
                style={{ fontFamily: "var(--font-serif)", color: "#F1EFE8" }}
              >
                Message envoyé !
              </h2>
              <p className="text-sm" style={{ color: "#888780" }}>
                Je vous recontacte dans les 24h pour planifier le brief.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl p-7 flex flex-col gap-5"
              style={{
                background: "#2C2C2A",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-xs font-medium mb-1.5"
                    style={{ color: "#888780", fontFamily: "var(--font-sans)" }}
                  >
                    Nom complet *
                  </label>
                  <input
                    name="name"
                    required
                    placeholder="Dr. Jean Dupont"
                    value={form.name}
                    onChange={handleChange}
                    style={inputBase}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(29,158,117,0.6)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </div>
                <div>
                  <label
                    className="block text-xs font-medium mb-1.5"
                    style={{ color: "#888780", fontFamily: "var(--font-sans)" }}
                  >
                    Email *
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="jean@cabinet.fr"
                    value={form.email}
                    onChange={handleChange}
                    style={inputBase}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(29,158,117,0.6)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-xs font-medium mb-1.5"
                    style={{ color: "#888780", fontFamily: "var(--font-sans)" }}
                  >
                    Profession
                  </label>
                  <input
                    name="profession"
                    placeholder="Médecin généraliste…"
                    value={form.profession}
                    onChange={handleChange}
                    style={inputBase}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(29,158,117,0.6)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </div>
                <div>
                  <label
                    className="block text-xs font-medium mb-1.5"
                    style={{ color: "#888780", fontFamily: "var(--font-sans)" }}
                  >
                    Pack envisagé
                  </label>
                  <select
                    name="pack"
                    value={form.pack}
                    onChange={handleChange}
                    style={{ ...inputBase, appearance: "auto" }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(29,158,117,0.6)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                  >
                    <option value="" style={{ background: "#363633" }}>
                      Choisir un pack
                    </option>
                    {packOptions.map((p) => {
                      const isSep = p.startsWith("—");
                      return (
                        <option key={p} value={isSep ? "" : p} disabled={isSep} style={{ background: "#363633", color: isSep ? "#888780" : "#F1EFE8" }}>
                          {p}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <div>
                <label
                  className="block text-xs font-medium mb-1.5"
                  style={{ color: "#888780", fontFamily: "var(--font-sans)" }}
                >
                  Décrivez votre projet *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Quel type de vidéo ? Pour quel réseau ? Avez-vous déjà des rushs ?"
                  value={form.message}
                  onChange={handleChange}
                  style={{ ...inputBase, resize: "vertical" }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(29,158,117,0.6)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 mt-1"
                style={{
                  background: loading ? "#2C2C2A" : "#1D9E75",
                  color: loading ? "#888780" : "#F1EFE8",
                  fontFamily: "var(--font-sans)",
                  cursor: loading ? "not-allowed" : "pointer",
                  border: loading ? "1px solid rgba(255,255,255,0.1)" : "none",
                }}
                onMouseEnter={(e) => {
                  if (!loading) {
                    e.currentTarget.style.background = "#0F6E56";
                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(29,158,117,0.25)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!loading) {
                    e.currentTarget.style.background = "#1D9E75";
                    e.currentTarget.style.boxShadow = "none";
                  }
                }}
              >
                {loading ? "Envoi en cours…" : <><Send size={14} /> Envoyer le message</>}
              </button>
            </form>
          )}
        </FadeIn>
      </section>

      <FadeIn delay={0.2}>
        <p
          className="flex items-center justify-center gap-2 pb-16 text-xs"
          style={{ fontFamily: "var(--font-mono)", color: "#888780", letterSpacing: "0.04em" }}
        >
          <span
            className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ background: "#1D9E75", boxShadow: "0 0 6px rgba(29,158,117,0.6)" }}
          />
          Le nombre de clients suivis chaque mois est volontairement limité — pour garantir une prise en charge à la hauteur de votre image.
        </p>
      </FadeIn>
    </div>
  );
}

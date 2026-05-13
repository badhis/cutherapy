"use client";

import { useState, useRef } from "react";
import { Play, ExternalLink } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const categories = ["Tous", "Social media", "Présentation", "Témoignage", "Formation"];

const projects = [
  {
    id: 1,
    title: "Dr. Martin — Cabinet de cardiologie",
    category: "Présentation",
    tags: ["Présentation", "Cabinet"],
    duration: "1:45",
    videoUrl: "",
    accentColor: "#0F6E56",
    bgGlow: "rgba(29,158,117,0.15)",
  },
  {
    id: 2,
    title: "Reel Instagram — Dermatologue Paris",
    category: "Social media",
    tags: ["Social media", "Reel"],
    duration: "0:28",
    videoUrl: "",
    accentColor: "#1D9E75",
    bgGlow: "rgba(29,158,117,0.1)",
  },
  {
    id: 3,
    title: "Témoignage patient — Kinésithérapie",
    category: "Témoignage",
    tags: ["Témoignage"],
    duration: "2:10",
    videoUrl: "",
    accentColor: "#EF9F27",
    bgGlow: "rgba(239,159,39,0.12)",
  },
  {
    id: 4,
    title: "Formation gestes premiers secours",
    category: "Formation",
    tags: ["Formation", "Éducatif"],
    duration: "4:30",
    videoUrl: "",
    accentColor: "#888780",
    bgGlow: "rgba(136,135,128,0.1)",
  },
  {
    id: 5,
    title: "Short YouTube — Médecin généraliste",
    category: "Social media",
    tags: ["Social media", "Short"],
    duration: "0:55",
    videoUrl: "",
    accentColor: "#1D9E75",
    bgGlow: "rgba(29,158,117,0.12)",
  },
  {
    id: 6,
    title: "Présentation cabinet dentaire",
    category: "Présentation",
    tags: ["Présentation", "Cabinet"],
    duration: "2:00",
    videoUrl: "",
    accentColor: "#0F6E56",
    bgGlow: "rgba(15,110,86,0.15)",
  },
];

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);

  const handleEnter = () => {
    setHovered(true);
    if (videoRef.current && project.videoUrl) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleLeave = () => {
    setHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="group rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
      style={{ border: "1px solid rgba(255,255,255,0.07)", background: "#2C2C2A" }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <div
          className="absolute inset-0 transition-transform duration-500"
          style={{
            background: `radial-gradient(ellipse at center, ${project.bgGlow} 0%, #1A1A1A 80%)`,
            transform: hovered ? "scale(1.04)" : "scale(1)",
          }}
        />
        {/* Grid lines overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {project.videoUrl && (
          <video
            ref={videoRef}
            src={project.videoUrl}
            muted
            playsInline
            loop
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
            style={{ opacity: hovered ? 1 : 0 }}
          />
        )}
        {/* Play overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center transition-all duration-300"
          style={{ opacity: hovered ? 0 : 1 }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-300"
            style={{
              background: "rgba(29,158,117,0.2)",
              border: "1px solid rgba(29,158,117,0.5)",
              transform: hovered ? "scale(1.1)" : "scale(1)",
            }}
          >
            <Play size={18} fill="#1D9E75" color="#1D9E75" />
          </div>
        </div>
        {/* Duration */}
        <div
          className="absolute bottom-3 right-3 px-2 py-0.5 rounded text-xs"
          style={{
            background: "rgba(26,26,26,0.85)",
            color: "#D3D1C7",
            fontFamily: "var(--font-mono)",
          }}
        >
          {project.duration}
        </div>
      </div>

      {/* Info */}
      <div className="p-4 border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
        <div className="flex items-start justify-between gap-2">
          <h3
            className="text-sm font-medium leading-snug"
            style={{ fontFamily: "var(--font-sans)", color: "#F1EFE8" }}
          >
            {project.title}
          </h3>
          <ExternalLink
            size={13}
            className="flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ color: "#1D9E75" }}
          />
        </div>
        <div className="flex flex-wrap gap-1.5 mt-2.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-full text-xs"
              style={{
                background: "rgba(29,158,117,0.1)",
                color: "#1D9E75",
                fontFamily: "var(--font-mono)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProjetsPage() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filtered =
    activeCategory === "Tous"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-5 py-16">
        <FadeIn>
          <p
            className="text-xs font-semibold mb-4 uppercase tracking-widest"
            style={{ color: "#1D9E75", fontFamily: "var(--font-mono)" }}
          >
            Projets
          </p>
          <h1
            className="text-5xl md:text-6xl mb-5"
            style={{ fontFamily: "var(--font-serif)", color: "#F1EFE8", letterSpacing: "-0.02em" }}
          >
            Mes réalisations
          </h1>
          <p className="text-base max-w-xl" style={{ color: "#888780" }}>
            Survolez une vidéo pour la voir en action. Chaque projet est conçu
            pour renforcer la présence en ligne de professionnels de santé.
          </p>
        </FadeIn>

        {/* Filter */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200"
                style={{
                  background: activeCategory === cat ? "#1D9E75" : "transparent",
                  color: activeCategory === cat ? "#F1EFE8" : "#888780",
                  fontFamily: "var(--font-mono)",
                  border:
                    activeCategory === cat
                      ? "1px solid transparent"
                      : "1px solid rgba(255,255,255,0.12)",
                  letterSpacing: "0.04em",
                }}
                onMouseEnter={(e) => {
                  if (activeCategory !== cat) {
                    e.currentTarget.style.borderColor = "rgba(29,158,117,0.4)";
                    e.currentTarget.style.color = "#F1EFE8";
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeCategory !== cat) {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                    e.currentTarget.style.color = "#888780";
                  }
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Grid */}
      <section className="max-w-6xl mx-auto px-5 pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.07}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}

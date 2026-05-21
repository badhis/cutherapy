"use client";

import Link from "next/link";
import { LogoMark } from "./Logo";

export default function Footer() {
  return (
    <footer
      className="mt-24 border-t"
      style={{ borderColor: "rgba(255,255,255,0.07)", background: "#2C2C2A" }}
    >
      <div className="max-w-6xl mx-auto px-5 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <LogoMark size={36} variant="dark" />
          <div>
            <p
              className="font-semibold text-base"
              style={{ fontFamily: "var(--font-sans)", color: "#F1EFE8", letterSpacing: "-0.01em" }}
            >
              Cutherapy
            </p>
            <p
              className="text-xs italic"
              style={{ fontFamily: "var(--font-serif)", color: "#888780" }}
            >
              Votre image mérite du soin
            </p>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {[
            { href: "/services", label: "Services" },
            { href: "/projets", label: "Projets" },
            { href: "/methode", label: "Méthode" },
            { href: "/contact", label: "Contact" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm transition-colors duration-200"
              style={{ color: "#888780", fontFamily: "var(--font-sans)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F1EFE8")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#888780")}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col items-start md:items-end gap-1">
          <p
            className="text-xs"
            style={{ fontFamily: "var(--font-mono)", color: "#888780" }}
          >
            © {new Date().getFullYear()} Cutherapy
          </p>
          <p className="text-xs" style={{ color: "#888780" }}>
            Tous droits réservés.
          </p>
        </div>
      </div>

    </footer>
  );
}

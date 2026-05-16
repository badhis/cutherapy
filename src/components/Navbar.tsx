"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { LogoNav } from "./Logo";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/projets", label: "Projets" },
  { href: "/methode", label: "Méthode" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(26,26,26,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "none",
      }}
    >
      <nav className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <LogoNav variant="dark" width={240} />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm font-medium transition-colors duration-200 relative"
                style={{
                  fontFamily: "var(--font-sans)",
                  color: pathname === l.href ? "#1D9E75" : "#888780",
                }}
                onMouseEnter={(e) => {
                  if (pathname !== l.href) e.currentTarget.style.color = "#F1EFE8";
                }}
                onMouseLeave={(e) => {
                  if (pathname !== l.href) e.currentTarget.style.color = "#888780";
                }}
              >
                {l.label}
                {pathname === l.href && (
                  <span
                    className="absolute -bottom-0.5 left-0 right-0 h-px"
                    style={{ background: "#1D9E75" }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
          style={{ background: "#1D9E75", color: "#F1EFE8", fontFamily: "var(--font-sans)" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#0F6E56";
            e.currentTarget.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#1D9E75";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Démarrer un projet
        </Link>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          style={{ color: "#F1EFE8" }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t"
            style={{ background: "#1A1A1A", borderColor: "rgba(255,255,255,0.07)" }}
          >
            <ul className="px-5 py-5 flex flex-col gap-4">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block text-base font-medium py-1"
                    style={{ color: pathname === l.href ? "#1D9E75" : "#F1EFE8" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold"
                  style={{ background: "#1D9E75", color: "#F1EFE8" }}
                >
                  Démarrer un projet
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

import type { Metadata } from "next";
import { DM_Serif_Display, Syne, DM_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dmSerif = DM_Serif_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
});

const syne = Syne({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Cutherapy — Montage vidéo pour professionnels de santé",
  description:
    "Cutherapy crée des vidéos professionnelles pour médecins et professionnels de santé. Du brief à la livraison, votre image mérite du soin.",
  keywords: ["montage vidéo", "médecin", "professionnel santé", "freelance", "vidéo médicale"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${dmSerif.variable} ${syne.variable} ${dmMono.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

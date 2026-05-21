import { type ReactNode } from "react";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import "./services.css";

type Variant = "light" | "dark" | "deep";

const Check = ({ stroke }: { stroke: string }) => (
  <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
    <path d="M1 3L3 5 7 1" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PackIcon = ({ variant }: { variant: Variant }) => {
  const heartStroke = variant === "light" ? "#1A1A1A" : variant === "dark" ? "#F1EFE8" : "#9FE1CB";
  const rectFill   = variant === "light" ? "#F1EFE8" : variant === "dark" ? "#363633" : "rgba(29,158,117,0.15)";
  return (
    <svg className="pack-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect width="24" height="24" rx="5" fill={rectFill} />
      <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
            stroke={heartStroke} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"
            stroke="#EF9F27" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

function FeatItem({ v, sub, children }: { v: Variant; sub?: string; children: ReactNode }) {
  const stroke = v === "light" ? "#0F6E56" : v === "dark" ? "#1D9E75" : "#5DCAA5";
  return (
    <div className="feat-item">
      <div className={`feat-check fc--${v}`}><Check stroke={stroke} /></div>
      <div className="feat-text">
        <span className={`feat-main fm--${v}`}>{children}</span>
        {sub && <span className={`feat-note fn--${v}`}>{sub}</span>}
      </div>
    </div>
  );
}

function OpsItem({ v, children }: { v: Variant; children: ReactNode }) {
  return (
    <div className="ops-chip">
      <div className="ops-dot" />
      <span className={`feat-main fm--${v}`}>{children}</span>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="pt-24">
      <section className="services-section">

        {/* ── INTRO ── */}
        <FadeIn>
          <div className="intro">
            <div>
              <p className="intro-eyebrow">Protocoles de soin</p>
              <h1 className="intro-title">Deux services.<br />Six <em>protocoles</em>.</h1>
              <p className="intro-sub">
                Ads statiques Meta ou pack de Reels montés — choisissez le niveau qui correspond
                à vos objectifs. Livraison garantie, sans allers-retours inutiles.
              </p>
            </div>
            <div className="intro-ide">
              <div className="ide-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
                        stroke="#F1EFE8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  <path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"
                        stroke="#EF9F27" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>
              <p className="ide-label">Votre monteur est</p>
              <p className="ide-value">Infirmier DE<br />&amp; Spécialiste santé</p>
            </div>
          </div>
        </FadeIn>

        {/* ════════════ SERVICE 01 — ADS STATIQUES META ════════════ */}
        <div className="service-block">
          <FadeIn>
            <div className="service-label-row">
              <span className="service-num">01</span>
              <div className="service-title-wrap">
                <h2 className="service-title">Ads statiques Meta</h2>
                <p className="service-title-sub">Facebook &amp; Instagram · Feed · Story · Carrousel · Copywriting inclus</p>
              </div>
              <div className="service-line" />
            </div>
          </FadeIn>

          <div className="packs">

            {/* ADS 1 — Essentiel / light */}
            <FadeIn delay={0.1}>
              <div className="pack pack--light">
                <div className="pack-head">
                  <span className="pack-badge badge--gray">Essentiel</span>
                  <PackIcon variant="light" />
                  <p className="pack-name pack-name--light">Le Test Clinique</p>
                  <p className="pack-pitch pack-pitch--light">Tester deux angles créatifs sur Meta avant de scaler.</p>
                  <div className="price-row price-row--light">
                    <span className="price-amount price--light">490 €</span>
                    <span className="price-period period--light">/ mois</span>
                  </div>
                  <span className="delay-tag delay--light">⏱ 5 jours ouvrés</span>
                </div>
                <div className="pack-body">
                  <div className="feature-group">
                    <p className="group-label gl--light">Créations</p>
                    <div className="feat-list">
                      <FeatItem v="light" sub="2 concepts × 3 formats Meta"><strong>6 visuels statiques</strong></FeatItem>
                      <FeatItem v="light" sub="Registre médical adapté grand public"><strong>Copywriting</strong> headline + CTA</FeatItem>
                      <FeatItem v="light"><strong>Formats</strong> Feed · Story · 1.91:1</FeatItem>
                    </div>
                  </div>
                  <div className="feature-group">
                    <p className="group-label gl--light">Opérationnel</p>
                    <div className="feat-list">
                      <OpsItem v="light">1 révision / visuel · Livraison Drive</OpsItem>
                    </div>
                  </div>
                  <div className="result-box rb--light">2 angles créatifs prêts à tester en A/B dès réception.</div>
                  <Link href="/contact" className="pack-cta cta--light">
                    <span>Démarrer</span><span className="cta-arrow">→</span>
                  </Link>
                </div>
              </div>
            </FadeIn>

            {/* ADS 2 — Recommandé / dark featured */}
            <FadeIn delay={0.2}>
              <div className="pack pack--dark pack--featured">
                <div className="pack-head">
                  <span className="pack-badge badge--amber">⭐ Recommandé</span>
                  <PackIcon variant="dark" />
                  <p className="pack-name pack-name--dark">La Campagne Complète</p>
                  <p className="pack-pitch pack-pitch--dark">Des créas qui convertissent, renouvelées chaque mois.</p>
                  <div className="price-row price-row--dark">
                    <span className="price-amount price--featured">790 €</span>
                    <span className="price-period period--dark">/ mois</span>
                  </div>
                  <span className="delay-tag delay--dark">⏱ 5 jours ouvrés</span>
                </div>
                <div className="pack-body">
                  <div className="feature-group">
                    <p className="group-label gl--dark">Créations</p>
                    <div className="feat-list">
                      <FeatItem v="dark" sub="4 concepts × 3 formats Meta"><strong>12 visuels statiques</strong></FeatItem>
                      <FeatItem v="dark"><strong>1 carrousel</strong> 5 slides pédagogique</FeatItem>
                      <FeatItem v="dark" sub="Headline · Corps · CTA · Texte du post"><strong>Copywriting complet</strong></FeatItem>
                      <FeatItem v="dark" sub="Sans logo pour tests retargeting"><strong>Version Dark Post</strong></FeatItem>
                    </div>
                  </div>
                  <div className="feature-group">
                    <p className="group-label gl--dark">Opérationnel</p>
                    <div className="feat-list">
                      <OpsItem v="dark">2 révisions / concept · Livraison Drive</OpsItem>
                    </div>
                  </div>
                  <div className="result-box rb--dark">4 angles créatifs pour alimenter une campagne Meta 30 jours sans répétition.</div>
                  <Link href="/contact" className="pack-cta cta--featured">
                    <span>Choisir ce pack</span><span className="cta-arrow">→</span>
                  </Link>
                </div>
              </div>
            </FadeIn>

            {/* ADS 3 — Premium / deep */}
            <FadeIn delay={0.3}>
              <div className="pack pack--deep">
                <div className="pack-head">
                  <span className="pack-badge badge--teal">Premium</span>
                  <PackIcon variant="deep" />
                  <p className="pack-name pack-name--deep">Le Protocole Autorité</p>
                  <p className="pack-pitch pack-pitch--deep">Image de marque forte sur Meta. Convertir en RDV ou formation.</p>
                  <div className="price-row price-row--deep">
                    <span className="price-amount price--deep">1 200 €</span>
                    <span className="price-period period--deep">/ mois</span>
                  </div>
                  <span className="delay-tag delay--deep">⏱ 5 jours · Prioritaire</span>
                </div>
                <div className="pack-body">
                  <div className="feature-group">
                    <p className="group-label gl--deep">Créations</p>
                    <div className="feat-list">
                      <FeatItem v="deep"><strong>20 visuels</strong> · 5 concepts × 4 formats</FeatItem>
                      <FeatItem v="deep" sub="Pédagogique + social proof"><strong>2 carrousels</strong> 5 slides</FeatItem>
                      <FeatItem v="deep"><strong>Habillage profil</strong> Facebook &amp; Instagram</FeatItem>
                      <FeatItem v="deep"><strong>Copywriting A/B</strong> · 2 versions / concept</FeatItem>
                    </div>
                  </div>
                  <div className="feature-group">
                    <p className="group-label gl--deep">Opérationnel</p>
                    <div className="feat-list">
                      <OpsItem v="deep">Révisions illimitées · Charte créative templates</OpsItem>
                    </div>
                  </div>
                  <div className="result-box rb--deep">Présence Meta cohérente et différenciée. Prêt pour des campagnes de génération de leads qualifiés.</div>
                  <Link href="/contact" className="pack-cta cta--deep">
                    <span>Me contacter</span><span className="cta-arrow">→</span>
                  </Link>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>

        {/* ── SEPARATOR ── */}
        <div className="service-separator">
          <div className="sep-line" />
          <svg className="sep-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
                  stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"
                  stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="sep-line" />
        </div>

        {/* ════════════ SERVICE 02 — PACK REELS ════════════ */}
        <div className="service-block">
          <FadeIn>
            <div className="service-label-row">
              <span className="service-num">02</span>
              <div className="service-title-wrap">
                <h2 className="service-title">Pack de Reels montés</h2>
                <p className="service-title-sub">Instagram · TikTok · YouTube Shorts · Sous-titres · Hook · Livraison 48h</p>
              </div>
              <div className="service-line" />
            </div>
          </FadeIn>

          <div className="packs">

            {/* REELS 1 — Essentiel / light */}
            <FadeIn delay={0.1}>
              <div className="pack pack--light">
                <div className="pack-head">
                  <span className="pack-badge badge--gray">Essentiel</span>
                  <PackIcon variant="light" />
                  <p className="pack-name pack-name--light">La Dose Hebdomadaire</p>
                  <p className="pack-pitch pack-pitch--light">1 publication par semaine, régulière, sans logiciel.</p>
                  <div className="price-row price-row--light">
                    <span className="price-amount price--light">590 €</span>
                    <span className="price-period period--light">/ mois</span>
                  </div>
                  <span className="delay-tag delay--light">⏱ 48h / Reel</span>
                </div>
                <div className="pack-body">
                  <div className="feature-group">
                    <p className="group-label gl--light">Montage</p>
                    <div className="feat-list">
                      <FeatItem v="light" sub="Instagram · TikTok · YouTube Shorts"><strong>4 Reels</strong> montés · 60–90 s</FeatItem>
                      <FeatItem v="light"><strong>Sous-titres dynamiques</strong></FeatItem>
                      <FeatItem v="light"><strong>Musique</strong> libre de droits</FeatItem>
                      <FeatItem v="light"><strong>1 aller-retour</strong> de correction</FeatItem>
                    </div>
                  </div>
                  <div className="feature-group">
                    <p className="group-label gl--light">Opérationnel</p>
                    <div className="feat-list">
                      <OpsItem v="light">Dossier Drive · fichiers prêts à publier</OpsItem>
                    </div>
                  </div>
                  <div className="result-box rb--light">4 Reels livrés propres. Régularité garantie sans toucher un logiciel.</div>
                  <Link href="/contact" className="pack-cta cta--light">
                    <span>Démarrer</span><span className="cta-arrow">→</span>
                  </Link>
                </div>
              </div>
            </FadeIn>

            {/* REELS 2 — Recommandé / dark featured */}
            <FadeIn delay={0.2}>
              <div className="pack pack--dark pack--featured">
                <div className="pack-head">
                  <span className="pack-badge badge--amber">⭐ Recommandé</span>
                  <PackIcon variant="dark" />
                  <p className="pack-name pack-name--dark">Le Traitement de Fond</p>
                  <p className="pack-pitch pack-pitch--dark">Le volume qui fait travailler l&apos;algorithme pour vous.</p>
                  <div className="price-row price-row--dark">
                    <span className="price-amount price--featured">990 €</span>
                    <span className="price-period period--dark">/ mois</span>
                  </div>
                  <span className="delay-tag delay--dark">⏱ 48h garanti</span>
                </div>
                <div className="pack-body">
                  <div className="feature-group">
                    <p className="group-label gl--dark">Montage</p>
                    <div className="feat-list">
                      <FeatItem v="dark"><strong>8 Reels</strong> · courts + 1–2 formats 3–5 min</FeatItem>
                      <FeatItem v="dark"><strong>Sous-titres animés</strong> + hook 3s travaillé</FeatItem>
                      <FeatItem v="dark"><strong>B-roll santé</strong> intégré</FeatItem>
                      <FeatItem v="dark"><strong>Déclinaison auto</strong> · long format → Short</FeatItem>
                      <FeatItem v="dark"><strong>2 allers-retours</strong> de correction</FeatItem>
                    </div>
                  </div>
                  <div className="feature-group">
                    <p className="group-label gl--dark">Opérationnel</p>
                    <div className="feat-list">
                      <OpsItem v="dark">Calendrier éditorial mensuel · Drive versioning</OpsItem>
                    </div>
                  </div>
                  <div className="result-box rb--dark">2 publications/semaine. Croissance visible en 60 jours. Algorithme alimenté en continu.</div>
                  <Link href="/contact" className="pack-cta cta--featured">
                    <span>Choisir ce pack</span><span className="cta-arrow">→</span>
                  </Link>
                </div>
              </div>
            </FadeIn>

            {/* REELS 3 — Premium / deep */}
            <FadeIn delay={0.3}>
              <div className="pack pack--deep">
                <div className="pack-head">
                  <span className="pack-badge badge--teal">Premium</span>
                  <PackIcon variant="deep" />
                  <p className="pack-name pack-name--deep">La Prise en Charge Globale</p>
                  <p className="pack-pitch pack-pitch--deep">Vous filmez. Je dirige le contenu.</p>
                  <div className="price-row price-row--deep">
                    <span className="price-amount price--deep">1 500 €</span>
                    <span className="price-period period--deep">/ mois</span>
                  </div>
                  <span className="delay-tag delay--deep">⏱ 24–48h · Prioritaire</span>
                </div>
                <div className="pack-body">
                  <div className="feature-group">
                    <p className="group-label gl--deep">Montage</p>
                    <div className="feat-list">
                      <FeatItem v="deep" sub="Instagram · TikTok · YT Shorts · LinkedIn"><strong>12 Reels</strong> · tous formats</FeatItem>
                      <FeatItem v="deep" sub="Intro · Outro · Lower-thirds"><strong>Habillage graphique</strong> à vos couleurs</FeatItem>
                      <FeatItem v="deep"><strong>Vignette YouTube</strong> optimisée CTR</FeatItem>
                      <FeatItem v="deep"><strong>Révisions illimitées</strong></FeatItem>
                    </div>
                  </div>
                  <div className="feature-group">
                    <p className="group-label gl--deep">Opérationnel</p>
                    <div className="feat-list">
                      <OpsItem v="deep">Calendrier + brief tournage · Réunion 30 min/mois</OpsItem>
                    </div>
                  </div>
                  <div className="result-box rb--deep">Médecin reconnu dans sa spécialité en 6 mois. Base solide pour lancer une formation.</div>
                  <Link href="/contact" className="pack-cta cta--deep">
                    <span>Me contacter</span><span className="cta-arrow">→</span>
                  </Link>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>

        {/* ── REASSURANCE ── */}
        <div className="reassurance">
          <FadeIn delay={0.1}>
            <div className="reassurance-item">
              <div className="ri-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0F6E56" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
                  <path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
                </svg>
              </div>
              <div>
                <p className="ri-title">Infirmier DE</p>
                <p className="ri-desc">Vos termes médicaux et contraintes déontologiques — compris sans brief technique.</p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="reassurance-item">
              <div className="ri-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0F6E56" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <p className="ri-title">Livraison garantie</p>
                <p className="ri-desc">48h à 5 jours selon le service. Jamais de retard qui décale votre planning.</p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="reassurance-item">
              <div className="ri-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0F6E56" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <p className="ri-title">Satisfaction ou refait</p>
                <p className="ri-desc">Première livraison non satisfaisante ? Je recommence sans surcoût.</p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* ── DISPONIBILITÉ ── */}
        <FadeIn delay={0.2}>
          <p className="availability-note">
            <span className="availability-dot" />
            Le nombre de clients suivis chaque mois est volontairement limité — pour garantir une prise en charge à la hauteur de votre image.
          </p>
        </FadeIn>

      </section>
    </div>
  );
}

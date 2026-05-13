import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import "./services.css";

const checkSvg = (stroke: string) => (
  <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
    <path d="M1 3.5L3.5 6 8 1" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function ServicesPage() {
  return (
    <div className="pt-24">
      <section className="services-section">

        {/* ── INTRO ── */}
        <FadeIn>
          <div className="section-intro">
            <p className="eyebrow">Protocoles de soin</p>
            <h1 className="section-title">
              Choisissez votre<br />
              <em>protocole de soin</em> image.
            </h1>
            <p className="section-sub">
              Trois formules. Un seul engagement : vos vidéos sont livrées propres,
              sous-titrées et prêtes à publier — sans que vous touchiez un logiciel.
            </p>
          </div>
        </FadeIn>

        {/* ── CARDS ── */}
        <div className="cards-grid">

          {/* ── CARD 1 : BILAN INITIAL ── */}
          <FadeIn delay={0.1}>
            <div className="card card--essential">
              <div className="card-header">
                <span className="card-badge badge--essential">Consultation</span>

                <svg className="card-pulse" viewBox="0 0 44 44" fill="none" aria-hidden="true">
                  <rect width="44" height="44" rx="9" fill="rgba(29,158,117,0.12)" />
                  <path d="M6 22h7l2-3.5 4 9 4-13 3 7h6" stroke="#0F6E56" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                <h2 className="card-title title--light">Le Bilan Initial</h2>
                <p className="card-sub sub--light">
                  Pour tester la collaboration avant de s&apos;engager. Un mois, 4 vidéos,
                  zéro friction — comme une première consultation.
                </p>

                <div className="card-price-row price-row--light">
                  <span className="price-amount">600 €</span>
                  <span className="price-period period--light">/ mois</span>
                </div>
                <span className="delay-pill delay--light">⏱ Livraison 72h</span>
              </div>

              <div className="card-body">
                <div className="feature-group">
                  <p className="feature-group-label fgl--light">Montage</p>
                  <div className="feature-list">
                    <div className="feature-item">
                      <div className="feature-check check--light">{checkSvg("#0F6E56")}</div>
                      <div className="feature-text">
                        <span className="feature-main fmain--light"><strong>4 vidéos courtes</strong> montées (60–90 s)</span>
                        <span className="feature-note fnote--light">Reels · TikTok · YouTube Shorts</span>
                      </div>
                    </div>
                    <div className="feature-item">
                      <div className="feature-check check--light">{checkSvg("#0F6E56")}</div>
                      <div className="feature-text">
                        <span className="feature-main fmain--light"><strong>Sous-titres</strong> adaptés grand public</span>
                        <span className="feature-note fnote--light">Termes médicaux reformulés</span>
                      </div>
                    </div>
                    <div className="feature-item">
                      <div className="feature-check check--light">{checkSvg("#0F6E56")}</div>
                      <div className="feature-text">
                        <span className="feature-main fmain--light"><strong>Musique</strong> libre de droits</span>
                        <span className="feature-note fnote--light">1 aller-retour de correction inclus</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="feature-group">
                  <p className="feature-group-label fgl--light">Suivi</p>
                  <div className="feature-list">
                    <div className="feature-item">
                      <div className="feature-check check--light">{checkSvg("#0F6E56")}</div>
                      <div className="feature-text">
                        <span className="feature-main fmain--light"><strong>Dossier Drive</strong> partagé &amp; organisé</span>
                      </div>
                    </div>
                    <div className="feature-item">
                      <div className="feature-check check--light">{checkSvg("#0F6E56")}</div>
                      <div className="feature-text">
                        <span className="feature-main fmain--light"><strong>Checklist de tournage</strong> PDF</span>
                        <span className="feature-note fnote--light">Filmer seul, efficacement, au smartphone</span>
                      </div>
                    </div>
                  </div>
                </div>
                <Link href="/contact" className="card-cta cta--light">
                  <span>Démarrer le bilan</span>
                  <span className="cta-arrow">→</span>
                </Link>
              </div>
            </div>
          </FadeIn>

          {/* ── CARD 2 : TRAITEMENT DE FOND (FEATURED) ── */}
          <FadeIn delay={0.2}>
            <div className="card card--featured card--featured-inner">
              <div className="card-header">
                <span className="card-badge badge--featured">⭐ Traitement recommandé</span>

                <svg className="card-pulse" viewBox="0 0 44 44" fill="none" aria-hidden="true">
                  <rect width="44" height="44" rx="9" fill="rgba(29,158,117,0.2)" />
                  <path d="M2 18.5a11 11 0 0 1 19.18-7.35.56.56 0 0 0 .82 0A11 11 0 0 1 42 18.5c0 4.58-3 8-6 11L27 40.63a4 4 0 0 1-6 .04L10 29.5C7 26.5 4 23.08 4 18.5z" stroke="#1D9E75" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" transform="scale(0.92) translate(2,2)" />
                  <path d="M6.44 26H18l1-2 4 9 4-14 3 7h10.54" stroke="#1D9E75" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                <h2 className="card-title title--dark">Le Traitement de Fond</h2>
                <p className="card-sub sub--dark">
                  Régularité, croissance, présence. Comme un traitement chronique —
                  on met en place le protocole et les résultats suivent.
                </p>

                <div className="card-price-row price-row--dark">
                  <span className="price-amount">1 000 €</span>
                  <span className="price-period period--dark">/ mois</span>
                </div>
                <span className="delay-pill delay--dark">⏱ Livraison 48h</span>
              </div>

              <div className="card-body">
                <div className="feature-group">
                  <p className="feature-group-label fgl--dark">Montage</p>
                  <div className="feature-list">
                    <div className="feature-item">
                      <div className="feature-check check--dark">{checkSvg("#1D9E75")}</div>
                      <div className="feature-text">
                        <span className="feature-main fmain--dark"><strong>8 vidéos</strong> / mois</span>
                        <span className="feature-note fnote--dark">Shorts + 1–2 longs formats YouTube</span>
                      </div>
                    </div>
                    <div className="feature-item">
                      <div className="feature-check check--dark">{checkSvg("#1D9E75")}</div>
                      <div className="feature-text">
                        <span className="feature-main fmain--dark"><strong>Sous-titres animés</strong> + hook travaillé</span>
                        <span className="feature-note fnote--dark">3 premières secondes optimisées</span>
                      </div>
                    </div>
                    <div className="feature-item">
                      <div className="feature-check check--dark">{checkSvg("#1D9E75")}</div>
                      <div className="feature-text">
                        <span className="feature-main fmain--dark"><strong>B-roll santé</strong> intégré</span>
                        <span className="feature-note fnote--dark">Images libres de droits soignées</span>
                      </div>
                    </div>
                    <div className="feature-item">
                      <div className="feature-check check--dark">{checkSvg("#1D9E75")}</div>
                      <div className="feature-text">
                        <span className="feature-main fmain--dark"><strong>Déclinaison automatique</strong></span>
                        <span className="feature-note fnote--dark">Long format → Short extrait inclus</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="feature-group">
                  <p className="feature-group-label fgl--dark">Pilotage</p>
                  <div className="feature-list">
                    <div className="feature-item">
                      <div className="feature-check check--dark">{checkSvg("#1D9E75")}</div>
                      <div className="feature-text">
                        <span className="feature-main fmain--dark"><strong>Calendrier éditorial</strong> mensuel</span>
                        <span className="feature-note fnote--dark">Thèmes · formats · jours de publication</span>
                      </div>
                    </div>
                    <div className="feature-item">
                      <div className="feature-check check--dark">{checkSvg("#1D9E75")}</div>
                      <div className="feature-text">
                        <span className="feature-main fmain--dark"><strong>Relances automatisées</strong></span>
                        <span className="feature-note fnote--dark">Rappel si le brut n&apos;est pas reçu à J-2</span>
                      </div>
                    </div>
                    <div className="feature-item">
                      <div className="feature-check check--dark">{checkSvg("#1D9E75")}</div>
                      <div className="feature-text">
                        <span className="feature-main fmain--dark"><strong>Rapport mensuel</strong> 1 page</span>
                        <span className="feature-note fnote--dark">Ce qui performe + recommandations M+1</span>
                      </div>
                    </div>
                  </div>
                </div>
                <Link href="/contact" className="card-cta cta--dark">
                  <span>Commencer le traitement</span>
                  <span className="cta-arrow">→</span>
                </Link>
              </div>
            </div>
          </FadeIn>

          {/* ── CARD 3 : PRISE EN CHARGE GLOBALE ── */}
          <FadeIn delay={0.3}>
            <div className="card card--premium">
              <div className="card-header">
                <span className="card-badge badge--premium">Prise en charge complète</span>

                <svg className="card-pulse" viewBox="0 0 44 44" fill="none" aria-hidden="true">
                  <rect width="44" height="44" rx="9" fill="rgba(29,158,117,0.15)" />
                  <circle cx="22" cy="22" r="12" stroke="#1D9E75" strokeWidth="1.5" strokeDasharray="3 2" />
                  <path d="M16 22h12M22 16v12" stroke="#5DCAA5" strokeWidth="2" strokeLinecap="round" />
                </svg>

                <h2 className="card-title title--teal">La Prise en Charge Globale</h2>
                <p className="card-sub sub--teal">
                  Pour le médecin qui veut externaliser son pôle contenu entièrement.
                  Vous filmez. Je prends en charge tout le reste.
                </p>

                <div className="card-price-row price-row--teal">
                  <span className="price-amount">1 500 €</span>
                  <span className="price-period period--teal">/ mois</span>
                </div>
                <span className="delay-pill delay--premium">⏱ Livraison 24–48h · prioritaire</span>
              </div>

              <div className="card-body">
                <div className="feature-group">
                  <p className="feature-group-label fgl--teal">Montage</p>
                  <div className="feature-list">
                    <div className="feature-item">
                      <div className="feature-check check--premium">{checkSvg("#5DCAA5")}</div>
                      <div className="feature-text">
                        <span className="feature-main fmain--teal"><strong>12 vidéos</strong> / mois · tous formats</span>
                        <span className="feature-note fnote--teal">YT long · Shorts · Reels · LinkedIn</span>
                      </div>
                    </div>
                    <div className="feature-item">
                      <div className="feature-check check--premium">{checkSvg("#5DCAA5")}</div>
                      <div className="feature-text">
                        <span className="feature-main fmain--teal"><strong>Habillage graphique</strong> à vos couleurs</span>
                        <span className="feature-note fnote--teal">Intro · Outro · Lower-thirds personnalisés</span>
                      </div>
                    </div>
                    <div className="feature-item">
                      <div className="feature-check check--premium">{checkSvg("#5DCAA5")}</div>
                      <div className="feature-text">
                        <span className="feature-main fmain--teal"><strong>Révisions illimitées</strong></span>
                        <span className="feature-note fnote--teal">Jusqu&apos;à validation complète</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="feature-group">
                  <p className="feature-group-label fgl--teal">Direction de contenu</p>
                  <div className="feature-list">
                    <div className="feature-item">
                      <div className="feature-check check--premium">{checkSvg("#5DCAA5")}</div>
                      <div className="feature-text">
                        <span className="feature-main fmain--teal"><strong>Stratégie éditoriale</strong> trimestrielle</span>
                        <span className="feature-note fnote--teal">Plan 90 jours aligné sur vos objectifs</span>
                      </div>
                    </div>
                    <div className="feature-item">
                      <div className="feature-check check--premium">{checkSvg("#5DCAA5")}</div>
                      <div className="feature-text">
                        <span className="feature-main fmain--teal"><strong>Brief de tournage</strong> mensuel</span>
                        <span className="feature-note fnote--teal">Script allégé + cadrage guidé à distance</span>
                      </div>
                    </div>
                    <div className="feature-item">
                      <div className="feature-check check--premium">{checkSvg("#5DCAA5")}</div>
                      <div className="feature-text">
                        <span className="feature-main fmain--teal"><strong>Réunion mensuelle</strong> 30 min</span>
                        <span className="feature-note fnote--teal">Visio de pilotage + veille sujets tendance</span>
                      </div>
                    </div>
                  </div>
                </div>
                <Link href="/contact" className="card-cta cta--premium">
                  <span>Me confier votre image</span>
                  <span className="cta-arrow">→</span>
                </Link>
              </div>
            </div>
          </FadeIn>

        </div>

        {/* ── REASSURANCE ROW ── */}
        <div className="comparison-note">
          <FadeIn delay={0.35}>
            <div className="note-item">
              <div className="note-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F6E56" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
                  <path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
                </svg>
              </div>
              <div className="note-content">
                <p className="note-title">Infirmier DE</p>
                <p className="note-desc">Vos termes médicaux, vos enjeux déontologiques — compris sans brief technique.</p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.45}>
            <div className="note-item">
              <div className="note-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F6E56" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div className="note-content">
                <p className="note-title">Livraison garantie</p>
                <p className="note-desc">24h à 72h selon le pack. Jamais de retard qui décale votre calendrier.</p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.55}>
            <div className="note-item">
              <div className="note-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F6E56" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div className="note-content">
                <p className="note-title">Satisfaction ou refait</p>
                <p className="note-desc">Première vidéo non satisfaisante ? Je la remonte intégralement, sans surcoût.</p>
              </div>
            </div>
          </FadeIn>
        </div>

      </section>
    </div>
  );
}

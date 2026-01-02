import Link from "next/link";
import styles from "../../shared/infoPage.module.css";

const MODULES = [
  "Spoken Sanskrit for greetings, prayers, and daily use",
  "Pronunciation drills for clarity and meter",
  "Listening and recitation with quick corrections",
  "Simple grammar in context with spoken prompts",
  "Role-plays: classroom, cultural events, and discourse",
];

const OUTPUTS = [
  "Weekly recorded recitation with coach notes",
  "Phrasebank for rituals, study circles, and travel",
  "Confidence drills for clear delivery and pacing",
];

export const metadata = {
  title: "Spoken Sanskrit | Language Vidya",
  description:
    "Live Sanskrit practice with pronunciation drills, recitation, and everyday speaking for cultural and academic use.",
};

export default function SanskritPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.kicker}>Regional Language · Sanskrit</p>
          <h1>Speak and recite Sanskrit with confidence.</h1>
          <p className={styles.lead}>
            Live drills, recitation practice, and contextual speaking so you can participate in study circles, cultural events, and daily rituals.
          </p>
          <div className={styles.actions}>
            <Link href="https://wa.me/919217239714" className={styles.primaryCta}>Talk to a coach</Link>
            <Link href="tel:+919217239714" className={styles.secondaryCta}>Call now</Link>
          </div>
          <div className={styles.statsRow}>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>6 weeks</span>
              <span className={styles.statLabel}>45 min · 4x weekly</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>Small pods</span>
              <span className={styles.statLabel}>5-8 learners</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>Coach notes</span>
              <span className={styles.statLabel}>Weekly recitation feedback</span>
            </div>
          </div>
        </div>
        <div className={styles.heroCard}>
          <p className={styles.cardTag}>What you get</p>
          <ul className={styles.cardList}>
            {OUTPUTS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className={styles.cardNote}>Pods are curated; we place you within 48 hours.</div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="modules-heading">
        <div className={styles.sectionHead}>
          <h2 id="modules-heading">What you will practice</h2>
          <p>Recitation, dialogue practice, and bilingual guidance to make spoken Sanskrit approachable.</p>
        </div>
        <div className={styles.moduleGrid}>
          {MODULES.map((item) => (
            <article key={item} className={styles.moduleCard}>
              <h3>{item}</h3>
              <p className={styles.moduleCopy}>Guided speaking, chanting cadence, and quick corrections in each session.</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <p className={styles.kicker}>Ready to start?</p>
          <h2>Book a placement call and join the next pod.</h2>
          <p>Tell us your goals—rituals, study, or cultural performance—and we will group you accordingly.</p>
          <div className={styles.actions}>
            <Link href="https://wa.me/919217239714" className={styles.primaryCta}>Book my slot</Link>
            <Link href="mailto:hello@languagevidya.com" className={styles.secondaryCta}>Email the team</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

import Link from "next/link";
import styles from "./page.module.css";

const MODULES = [
  "Accent clarity and neutralization where needed",
  "Pacing, pausing, and emphasis for meaning",
  "Intonation patterns for global listeners",
  "Listening-and-repeat speed with recordings",
  "Spontaneous summaries under time limits",
  "Presentation and Q&A handling",
];

const OUTPUTS = [
  "Weekly recorded clips with coach notes",
  "Pronunciation targets and drills",
  "A ready script for calls and demos",
];

export const metadata = {
  title: "Accented English | Language Vidya",
  description:
    "Accent clarity, pacing, and intonation training with recorded drills and live feedback.",
};

export default function AccentedEnglishPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.kicker}>Spoken English · Accented</p>
          <h1>Sound clear, confident, and globally understood.</h1>
          <p className={styles.lead}>
            Accent clarity, pacing, and intonation through recorded drills, live practice, and fast feedback loops.
          </p>
          <div className={styles.actions}>
            <Link href="https://wa.me/919217239714" className={styles.primaryCta}>Talk to a coach</Link>
            <Link href="tel:+919217239714" className={styles.secondaryCta}>Call now</Link>
          </div>
          <div className={styles.statsRow}>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>6 weeks</span>
              <span className={styles.statLabel}>75 min · 4x weekly</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>6-10</span>
              <span className={styles.statLabel}>Learners per pod</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>Weekly</span>
              <span className={styles.statLabel}>Scorecards + drills</span>
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
          <div className={styles.cardNote}>We place you in a pod and start within 48 hours.</div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="modules-heading">
        <div className={styles.sectionHead}>
          <h2 id="modules-heading">What you will practice</h2>
          <p>Targeted clarity work with live drills, recordings, and role-plays for real calls and demos.</p>
        </div>
        <div className={styles.moduleGrid}>
          {MODULES.map((item) => (
            <article key={item} className={styles.moduleCard}>
              <h3>{item}</h3>
              <p className={styles.moduleCopy}>Targeted drills, recordings, and quick feedback.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <p className={styles.kicker}>Ready to start?</p>
          <h2>Book a placement call and join the next pod.</h2>
          <p>Share your availability; we will place you with a coach and peers who match your pace.</p>
          <div className={styles.actions}>
            <Link href="https://wa.me/919217239714" className={styles.primaryCta}>Book my slot</Link>
            <Link href="mailto:hello@languagevidya.com" className={styles.secondaryCta}>Email the team</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

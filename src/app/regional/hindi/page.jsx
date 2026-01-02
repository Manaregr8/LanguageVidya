import Link from "next/link";
import styles from "../../shared/infoPage.module.css";

const MODULES = [
  "Conversation drills for workplace, travel, and family",
  "Listening speed, clarity, and confident pacing",
  "Pronunciation cleanup with bilingual coaching",
  "Templates for intros, updates, and quick asks",
  "Role-plays for meetings, interviews, and small talk",
];

const OUTPUTS = [
  "Weekly recorded Hindi speaking clip with coach notes",
  "Ready scripts for meetings, greetings, and updates",
  "Vocabulary by themes: office, travel, everyday life",
];

export const metadata = {
  title: "Hindi Fluency | Language Vidya",
  description:
    "Bilingual drills, role-plays, and scripts to help you speak Hindi confidently at work and in daily life.",
};

export default function HindiFluencyPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.kicker}>Regional Language · Hindi</p>
          <h1>Speak Hindi clearly for work, travel, and family.</h1>
          <p className={styles.lead}>
            Bilingual coaches, live drills, and practical scripts so you can move from understanding to confident speaking in Hindi.
          </p>
          <div className={styles.actions}>
            <Link href="https://wa.me/919217239714" className={styles.primaryCta}>Talk to a coach</Link>
            <Link href="tel:+919217239714" className={styles.secondaryCta}>Call now</Link>
          </div>
          <div className={styles.statsRow}>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>6 weeks</span>
              <span className={styles.statLabel}>50 min · 4x weekly</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>6-10</span>
              <span className={styles.statLabel}>Learners per pod</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>Bilingual</span>
              <span className={styles.statLabel}>Hindi + English coaching</span>
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
          <p>Live-first practice with bilingual prompts, quick corrections, and reusable scripts.</p>
        </div>
        <div className={styles.moduleGrid}>
          {MODULES.map((item) => (
            <article key={item} className={styles.moduleCard}>
              <h3>{item}</h3>
              <p className={styles.moduleCopy}>Guided speaking, role-plays, and feedback you can apply the same day.</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <p className={styles.kicker}>Ready to start?</p>
          <h2>Book a placement call and join the next pod.</h2>
          <p>Share your availability; we will pair you with a coach and group at your level.</p>
          <div className={styles.actions}>
            <Link href="https://wa.me/919217239714" className={styles.primaryCta}>Book my slot</Link>
            <Link href="mailto:hello@languagevidya.com" className={styles.secondaryCta}>Email the team</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

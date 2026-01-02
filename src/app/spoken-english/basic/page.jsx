import Link from "next/link";
import styles from "../intermediate/page.module.css";

const MODULES = [
  "Everyday speaking starters and small talk",
  "Pronunciation clean-up and common sounds",
  "Grammar refreshers applied in speech",
  "Listening-and-repeat speed drills",
  "Quick role-plays: calls, shop, travel",
  "Confidence-building daily challenges",
];

const OUTPUTS = [
  "Daily micro-drills with coach notes",
  "Weekly recorded clip for feedback",
  "A ready script for intros and updates",
];

export const metadata = {
  title: "Basic Spoken English | Language Vidya",
  description:
    "Kickstart everyday English with live practice, pronunciation clean-up, and confidence-focused drills.",
};

export default function BasicSpokenEnglishPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.kicker}>Spoken English · Basic</p>
          <h1>Build a clear, everyday speaking habit.</h1>
          <p className={styles.lead}>
            Live, small-group sessions with pronunciation fixes, grammar refreshers, and repeatable scripts for daily life.
          </p>
          <div className={styles.actions}>
            <Link href="https://wa.me/919217239714" className={styles.primaryCta}>Talk to a coach</Link>
            <Link href="tel:+919217239714" className={styles.secondaryCta}>Call now</Link>
          </div>
          <div className={styles.statsRow}>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>6 weeks</span>
              <span className={styles.statLabel}>45 min · 5x weekly</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>6-10</span>
              <span className={styles.statLabel}>Learners per pod</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>Daily</span>
              <span className={styles.statLabel}>Speaking drills</span>
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
          <p>Live-first drills with bilingual coaches, small groups, and fast feedback you can reuse immediately.</p>
        </div>
        <div className={styles.moduleGrid}>
          {MODULES.map((item) => (
            <article key={item} className={styles.moduleCard}>
              <h3>{item}</h3>
              <p className={styles.moduleCopy}>Guided speaking, corrections, and simple role-plays.</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <p className={styles.kicker}>Ready to start?</p>
          <h2>Book a placement call and join the next pod.</h2>
          <p>Share your availability; we will place you with a coach and small group that matches your pace.</p>
          <div className={styles.actions}>
            <Link href="https://wa.me/919217239714" className={styles.primaryCta}>Book my slot</Link>
            <Link href="mailto:hello@languagevidya.com" className={styles.secondaryCta}>Email the team</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

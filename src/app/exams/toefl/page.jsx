import Link from "next/link";
import styles from "../../shared/infoPage.module.css";

const MODULES = [
  "Speaking tasks 1-4 with time-boxed practice",
  "Integrated writing structure and note-taking",
  "Listening detail capture and inference drills",
  "Reading speed drills with passage mapping",
  "Accent clarity and pacing for the speaking section",
];

const OUTPUTS = [
  "Weekly TOEFL-style speaking mock with notes",
  "Integrated writing outlines and annotated samples",
  "Timing strategy for each section with checkpoints",
];

export const metadata = {
  title: "TOEFL Prep | Language Vidya",
  description: "TOEFL-focused mocks, writing outlines, and timing drills with weekly coach feedback.",
};

export default function ToeflPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.kicker}>Exams · TOEFL</p>
          <h1>TOEFL prep with integrated practice and weekly mocks.</h1>
          <p className={styles.lead}>
            Speaking and writing drills, listening detail capture, and reading speed practice—aligned to TOEFL tasks and timing.
          </p>
          <div className={styles.actions}>
            <Link href="https://wa.me/919217239714" className={styles.primaryCta}>Schedule a mock</Link>
            <Link href="mailto:hello@languagevidya.com" className={styles.secondaryCta}>Email the team</Link>
          </div>
          <div className={styles.statsRow}>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>5 weeks</span>
              <span className={styles.statLabel}>60 min · 4x weekly</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>Mocks</span>
              <span className={styles.statLabel}>Weekly scored</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>Resources</span>
              <span className={styles.statLabel}>Templates + timing kits</span>
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
          <div className={styles.cardNote}>Short on time? Ask for a 2-week sprint plan.</div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="modules-heading">
        <div className={styles.sectionHead}>
          <h2 id="modules-heading">What you will practice</h2>
          <p>Integrated practice for speaking, writing, listening, and reading with structured feedback.</p>
        </div>
        <div className={styles.moduleGrid}>
          {MODULES.map((item) => (
            <article key={item} className={styles.moduleCard}>
              <h3>{item}</h3>
              <p className={styles.moduleCopy}>Live drills, annotated samples, and pacing checkpoints every week.</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <p className={styles.kicker}>Ready to start?</p>
          <h2>Book a diagnostic mock.</h2>
          <p>We will score it, map weak spots, and set your weekly plan.</p>
          <div className={styles.actions}>
            <Link href="https://wa.me/919217239714" className={styles.primaryCta}>Book diagnostic</Link>
            <Link href="tel:+919217239714" className={styles.secondaryCta}>Talk to us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

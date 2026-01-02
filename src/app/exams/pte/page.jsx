import Link from "next/link";
import styles from "../../shared/infoPage.module.css";

const MODULES = [
  "Speaking: read aloud, repeat sentence, and describe image",
  "Writing: summarize written text and essay structure",
  "Listening: dictation and fill-in-the-blank drills",
  "Reading: reorder paragraph and multiple-choice pacing",
  "Accent clarity and pacing tuned to PTE scoring",
];

const OUTPUTS = [
  "Weekly PTE-style scored speaking mock",
  "Template bank for writing and summarize tasks",
  "Timing plans for listening and reading sections",
];

export const metadata = {
  title: "PTE Prep | Language Vidya",
  description: "PTE-focused speaking, writing, listening, and reading drills with weekly scored mocks.",
};

export default function PtePage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.kicker}>Exams · PTE</p>
          <h1>PTE prep with scored speaking and writing drills.</h1>
          <p className={styles.lead}>
            Practice every PTE task type with timing, templates, and weekly scored mocks to keep you on track.
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
              <span className={styles.statNumber}>Templates</span>
              <span className={styles.statLabel}>Writing + speaking</span>
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
          <div className={styles.cardNote}>Need fast-track? Ask for a 2-week sprint plan.</div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="modules-heading">
        <div className={styles.sectionHead}>
          <h2 id="modules-heading">What you will practice</h2>
          <p>Each PTE task type with clear templates, timing, and feedback loops.</p>
        </div>
        <div className={styles.moduleGrid}>
          {MODULES.map((item) => (
            <article key={item} className={styles.moduleCard}>
              <h3>{item}</h3>
              <p className={styles.moduleCopy}>Live drills, annotated samples, and timing checkpoints every week.</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <p className={styles.kicker}>Ready to start?</p>
          <h2>Book a diagnostic mock.</h2>
          <p>We will score it, map your weak spots, and set a weekly plan.</p>
          <div className={styles.actions}>
            <Link href="https://wa.me/919217239714" className={styles.primaryCta}>Book diagnostic</Link>
            <Link href="tel:+919217239714" className={styles.secondaryCta}>Talk to us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

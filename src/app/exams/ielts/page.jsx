import Link from "next/link";
import styles from "../../shared/infoPage.module.css";

const MODULES = [
  "Speaking Part 1-3 mock drills with feedback",
  "Writing Task 1/2 structure and timing practice",
  "Listening strategies and note-taking templates",
  "Reading scan/skim drills with time-boxed sets",
  "Accent clarity and pacing for the speaking test",
];

const OUTPUTS = [
  "Weekly scored speaking mock with notes",
  "Task 1/2 outline library and sample responses",
  "Timing plans for reading and listening sections",
];

export const metadata = {
  title: "IELTS Prep | Language Vidya",
  description: "Focused IELTS prep with weekly speaking mocks, writing reviews, and timing drills.",
};

export default function IeltsPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.kicker}>Exams · IELTS</p>
          <h1>IELTS prep with weekly mocks and timing drills.</h1>
          <p className={styles.lead}>
            Speaking mocks, writing structure reviews, and listening/reading timing plans so you walk into test day confident.
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
              <span className={styles.statLabel}>Outline + timing kits</span>
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
          <div className={styles.cardNote}>Need fast-track? Ask for an intensive mock loop.</div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="modules-heading">
        <div className={styles.sectionHead}>
          <h2 id="modules-heading">What you will practice</h2>
          <p>Targeted drills for each paper, with coach feedback on pace, clarity, and structure.</p>
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
          <p>We will score it, share a band-targeted plan, and start your weekly schedule.</p>
          <div className={styles.actions}>
            <Link href="https://wa.me/919217239714" className={styles.primaryCta}>Book diagnostic</Link>
            <Link href="tel:+919217239714" className={styles.secondaryCta}>Talk to us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

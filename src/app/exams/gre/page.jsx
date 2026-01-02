import Link from "next/link";
import styles from "../../shared/infoPage.module.css";

const MODULES = [
  "AWA issue/argument structure and timed writing",
  "Verbal reasoning: text completion and RC pacing",
  "Speaking drills for clarity in interviews and SOP reviews",
  "Vocabulary building with context and recall drills",
  "Quant explanation drills for verbal articulation",
];

const OUTPUTS = [
  "Weekly AWA draft with annotated feedback",
  "Timing plans for verbal sections and question types",
  "Mock interviews for programs and scholarships",
];

export const metadata = {
  title: "GRE Verbal + AWA | Language Vidya",
  description: "AWA writing reviews, verbal pacing drills, and interview practice for GRE-bound students.",
};

export default function GrePage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.kicker}>Exams · GRE</p>
          <h1>GRE verbal and AWA with timed drills and reviews.</h1>
          <p className={styles.lead}>
            Focused AWA drafting, verbal pacing drills, and interview-ready communication to strengthen your applications.
          </p>
          <div className={styles.actions}>
            <Link href="https://wa.me/919217239714" className={styles.primaryCta}>Schedule a diagnostic</Link>
            <Link href="mailto:hello@languagevidya.com" className={styles.secondaryCta}>Email the team</Link>
          </div>
          <div className={styles.statsRow}>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>4 weeks</span>
              <span className={styles.statLabel}>60 min · 3x weekly</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>AWA</span>
              <span className={styles.statLabel}>Weekly scored draft</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>Interviews</span>
              <span className={styles.statLabel}>Optional mock loop</span>
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
          <div className={styles.cardNote}>Need quant-only support? We can add explanations for articulation practice.</div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="modules-heading">
        <div className={styles.sectionHead}>
          <h2 id="modules-heading">What you will practice</h2>
          <p>Targeted AWA drafting, verbal pacing, and speaking clarity for interviews and SOP reviews.</p>
        </div>
        <div className={styles.moduleGrid}>
          {MODULES.map((item) => (
            <article key={item} className={styles.moduleCard}>
              <h3>{item}</h3>
              <p className={styles.moduleCopy}>Guided drills with templates, timing checkpoints, and feedback each week.</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <p className={styles.kicker}>Ready to start?</p>
          <h2>Book a diagnostic and plan your sprint.</h2>
          <p>We will score your AWA sample, set pacing goals, and align practice to your test date.</p>
          <div className={styles.actions}>
            <Link href="https://wa.me/919217239714" className={styles.primaryCta}>Book diagnostic</Link>
            <Link href="tel:+919217239714" className={styles.secondaryCta}>Talk to us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

import Link from "next/link";
import styles from "./page.module.css";

const MODULES = [
  "Conversation stamina and pacing",
  "Listening speed and response time",
  "Pronunciation clean-up with drills",
  "Meetings, standups, and quick updates",
  "Role-plays for work and campus",
  "Email and DM tone that feels natural",
];

const WEEKLY_OUTPUTS = [
  "2-3 recorded speaking clips with coach notes",
  "One paged meeting or presentation outline",
  "A short email/DM template you can reuse",
];

export const metadata = {
  title: "Basic to Communicable English | Language Vidya",
  description:
    "Move from short replies to confident conversations with daily live practice, role-plays, and coach feedback.",
};

export default function IntermediateSpokenEnglishPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.kicker}>Spoken English · Intermediate</p>
          <h1>Move from short replies to confident, flowing conversations.</h1>
          <p className={styles.lead}>
            Daily live sessions, role-plays for work and campus, and quick feedback loops. Build stamina, clarity, and natural tone.
          </p>
          <div className={styles.actions}>
            <Link href="https://wa.me/919217239714" className={styles.primaryCta}>
              Talk to a coach
            </Link>
            <Link href="tel:+919217239714" className={styles.secondaryCta}>
              Call now
            </Link>
          </div>
          <div className={styles.statsRow}>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>8 weeks</span>
              <span className={styles.statLabel}>60 min · 5x weekly</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>6-10</span>
              <span className={styles.statLabel}>Learners per pod</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>Weekly</span>
              <span className={styles.statLabel}>Speaking scorecards</span>
            </div>
          </div>
        </div>
        <div className={styles.heroCard}>
          <p className={styles.cardTag}>What you get</p>
          <ul className={styles.cardList}>
            {WEEKLY_OUTPUTS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className={styles.cardNote}>We place you in a pod and start within 48 hours.</div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="modules-heading">
        <div className={styles.sectionHead}>
          <h2 id="modules-heading">What you will practice</h2>
          <p>Live-first practice with bilingual coaches, practical role-plays, and fast feedback you can reuse immediately.</p>
        </div>
        <div className={styles.moduleGrid}>
          {MODULES.map((item) => (
            <article key={item} className={styles.moduleCard}>
              <h3>{item}</h3>
              <p className={styles.moduleCopy}>Daily drills, quick corrections, and on-the-spot role-play prompts.</p>
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
            <Link href="https://wa.me/919217239714" className={styles.primaryCta}>
              Book my slot
            </Link>
            <Link href="mailto:hello@languagevidya.com" className={styles.secondaryCta}>
              Email the team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

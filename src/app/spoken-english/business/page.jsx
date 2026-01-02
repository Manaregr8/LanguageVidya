import Link from "next/link";
import styles from "../intermediate/page.module.css";

const MODULES = [
  "Meetings, standups, and crisp updates",
  "Presentation flow and slide narration",
  "Email and chat tone for stakeholders",
  "Negotiation and objection handling",
  "Accent clarity and pacing for global calls",
  "Executive summaries and status reports",
];

const OUTPUTS = [
  "Weekly recorded meeting or presentation clip",
  "Polished email and chat templates",
  "Manager-ready status or deck outline",
];

export const metadata = {
  title: "Business English | Language Vidya",
  description:
    "Role-played meetings, email tone, and presentation practice to speak clearly and confidently at work.",
};

export default function BusinessEnglishPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.kicker}>Spoken English · Business</p>
          <h1>Speak with clarity and confidence at work.</h1>
          <p className={styles.lead}>
            Role-played meetings, presentation reps, and email tone refinement—built for global teams and stakeholder calls.
          </p>
          <div className={styles.actions}>
            <Link href="https://wa.me/919217239714" className={styles.primaryCta}>Talk to a coach</Link>
            <Link href="tel:+919217239714" className={styles.secondaryCta}>Call now</Link>
          </div>
          <div className={styles.statsRow}>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>5 weeks</span>
              <span className={styles.statLabel}>60 min · 4x weekly</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>6-10</span>
              <span className={styles.statLabel}>Learners per pod</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>Weekly</span>
              <span className={styles.statLabel}>Coach scorecards</span>
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
          <p>Live role-plays, drafts, and fast feedback tuned to your workplace scenarios.</p>
        </div>
        <div className={styles.moduleGrid}>
          {MODULES.map((item) => (
            <article key={item} className={styles.moduleCard}>
              <h3>{item}</h3>
              <p className={styles.moduleCopy}>Practice with realistic scenarios, edits, and live corrections.</p>
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

import Link from "next/link";
import styles from "../../shared/infoPage.module.css";

const STEPS = [
  "Tell us your goal and current level",
  "Pick 2-3 preferred time slots",
  "We place you in the right pod or 1:1 coach",
  "Start within 48 hours with your first live session",
];

const OUTPUTS = [
  "Placement call with a coach",
  "Schedule matched to your time zone",
  "Small group or 1:1 option based on goal",
];

export const metadata = {
  title: "Book a Session | Language Vidya",
  description: "Share your goal, pick slots, and start live sessions within 48 hours.",
};

export default function BookSessionPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.kicker}>Sessions</p>
          <h1>Book your first live session.</h1>
          <p className={styles.lead}>
            Tell us your goal, choose your slots, and get placed with the right coach and group. Most learners start within 48 hours.
          </p>
          <div className={styles.actions}>
            <Link href="https://wa.me/919217239714" className={styles.primaryCta}>Book on WhatsApp</Link>
            <Link href="mailto:hello@languagevidya.com" className={styles.secondaryCta}>Email the team</Link>
          </div>
          <div className={styles.statsRow}>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>48 hours</span>
              <span className={styles.statLabel}>Average start time</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>Pods</span>
              <span className={styles.statLabel}>6-10 learners</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>1:1</span>
              <span className={styles.statLabel}>Available on request</span>
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
          <div className={styles.cardNote}>Need help choosing? Ask for a 10-minute discovery call.</div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="steps-heading">
        <div className={styles.sectionHead}>
          <h2 id="steps-heading">How booking works</h2>
          <p>We keep it simple—share your goal, pick slots, and start quickly.</p>
        </div>
        <div className={styles.moduleGrid}>
          {STEPS.map((item) => (
            <article key={item} className={styles.moduleCard}>
              <h3>{item}</h3>
              <p className={styles.moduleCopy}>Concierge support over WhatsApp or email to finalize your spot.</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <p className={styles.kicker}>Ready to start?</p>
          <h2>Send your goal and preferred timing.</h2>
          <p>We will confirm a pod or 1:1 slot and share your coach introduction.</p>
          <div className={styles.actions}>
            <Link href="https://wa.me/919217239714" className={styles.primaryCta}>Send my slots</Link>
            <Link href="tel:+919217239714" className={styles.secondaryCta}>Talk to us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

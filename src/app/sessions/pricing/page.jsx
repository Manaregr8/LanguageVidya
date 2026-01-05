import Link from "next/link";
import styles from "../../shared/infoPage.module.css";

const PLANS = [
  "Pod Plan — 6-10 learners · 4-5 live sessions/week (₹3,500 per 4-week cycle · coach scorecards included)",
  "Intensive 1:1 — daily 1:1 drills tuned to your goal (₹9,500 per 4-week cycle · flexible rescheduling)",
  "Presentation Sprint — 2 weeks focused on one presentation/interview (₹4,500 per sprint · includes slide/voice review)",
];

const OUTPUTS = [
  "Placement call and level check included",
  "Pause/resume within the cycle if you travel",
  "Concierge scheduling over WhatsApp",
];

export const metadata = {
  title: "Session Pricing | Language Vidya",
  description: "Choose a pod plan, 1:1 intensive, or a short sprint based on your goal.",
};

export default function PricingPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.kicker}>Sessions</p>
          <h1>Transparent plans for pods and 1:1.</h1>
          <p className={styles.lead}>
            Pick the cadence that fits your schedule—stay in a small pod or choose an intensive 1:1 track when you need speed.
          </p>
          <div className={styles.actions}>
            <Link href="https://wa.me/919217239714" className={styles.primaryCta}>Ask for a quote</Link>
            <Link href="mailto:hello@languagevidya.com" className={styles.secondaryCta}>Email the team</Link>
          </div>
          <div className={styles.statsRow}>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>Pods</span>
              <span className={styles.statLabel}>6-10 learners</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>1:1</span>
              <span className={styles.statLabel}>Flexible scheduling</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>Starts</span>
              <span className={styles.statLabel}>Weekly cohorts</span>
            </div>
          </div>
        </div>
        <div className={styles.heroCards}>
          <div className={styles.heroCard}>
            <p className={styles.cardTag}>Included</p>
            <ul className={styles.cardList}>
              {OUTPUTS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className={styles.cardNote}>Need invoices or company billing? We provide GST invoices.</div>
          </div>
          <div className={styles.heroCard}>
            <p className={styles.cardTag}>Pick a plan</p>
            <ul className={styles.cardList}>
              {PLANS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <p className={styles.kicker}>Ready to enroll?</p>
          <h2>Share your goal and billing preference.</h2>
          <p>We will send the plan confirmation and first session schedule.</p>
          <div className={styles.actions}>
            <Link href="https://wa.me/919217239714" className={styles.primaryCta}>Get pricing</Link>
            <Link href="tel:+919217239714" className={styles.secondaryCta}>Talk to us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

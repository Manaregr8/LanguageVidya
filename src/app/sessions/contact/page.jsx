import Link from "next/link";
import styles from "../../shared/infoPage.module.css";

const CHANNELS = [
  "WhatsApp Concierge — schedule changes, quick questions, and booking support (https://wa.me/919217239714)",
  "Email Support — invoices, certificates, and coach feedback summaries (hello@languagevidya.com)",
  "Call Back — ask for a 10-minute discovery call with a coach (+91 92172 39714)",
];

const OUTPUTS = [
  "Response within working hours (IST)",
  "Flexible rescheduling for pods and 1:1",
  "Coach summaries shared weekly",
];

export const metadata = {
  title: "Contact Sessions Team | Language Vidya",
  description: "Reach the sessions team for booking, rescheduling, or certificates.",
};

export default function SessionsContactPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.kicker}>Sessions</p>
          <h1>Contact the sessions team.</h1>
          <p className={styles.lead}>
            Need to reschedule, get an invoice, or ask about placement? Reach us quickly over WhatsApp, email, or a call back.
          </p>
          <div className={styles.actions}>
            <Link href="https://wa.me/919217239714" className={styles.primaryCta}>Message on WhatsApp</Link>
            <Link href="tel:+919217239714" className={styles.secondaryCta}>Request call back</Link>
          </div>
          <div className={styles.statsRow}>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>IST</span>
              <span className={styles.statLabel}>9am - 8pm support</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>Pods</span>
              <span className={styles.statLabel}>Reschedule support</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>1:1</span>
              <span className={styles.statLabel}>Priority routing</span>
            </div>
          </div>
        </div>
        <div className={styles.heroCards}>
          <div className={styles.heroCard}>
            <p className={styles.cardTag}>What you get</p>
            <ul className={styles.cardList}>
              {OUTPUTS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className={styles.cardNote}>We aim to respond the same day during working hours.</div>
          </div>
          <div className={styles.heroCard}>
            <p className={styles.cardTag}>How to reach us</p>
            <ul className={styles.cardList}>
              {CHANNELS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <p className={styles.kicker}>Need help now?</p>
          <h2>Send a quick note.</h2>
          <p>We will confirm within working hours and route you to the right coach or coordinator.</p>
          <div className={styles.actions}>
            <Link href="mailto:hello@languagevidya.com" className={styles.primaryCta}>Email support</Link>
            <Link href="https://wa.me/919217239714" className={styles.secondaryCta}>WhatsApp us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

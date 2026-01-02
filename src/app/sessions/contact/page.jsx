import Link from "next/link";
import styles from "../../shared/infoPage.module.css";

const CHANNELS = [
  {
    title: "WhatsApp Concierge",
    detail: "Schedule changes, quick questions, and booking support.",
    note: "https://wa.me/919217239714",
  },
  {
    title: "Email Support",
    detail: "Invoices, certificates, and coach feedback summaries.",
    note: "hello@languagevidya.com",
  },
  {
    title: "Call Back",
    detail: "Ask for a 10-minute discovery call with a coach.",
    note: "+91 92172 39714",
  },
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
        <div className={styles.heroCard}>
          <p className={styles.cardTag}>What you get</p>
          <ul className={styles.cardList}>
            {OUTPUTS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className={styles.cardNote}>We aim to respond the same day during working hours.</div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="channels-heading">
        <div className={styles.sectionHead}>
          <h2 id="channels-heading">Choose a channel</h2>
          <p>Pick the fastest route based on your request.</p>
        </div>
        <div className={styles.moduleGrid}>
          {CHANNELS.map((channel) => (
            <article key={channel.title} className={styles.moduleCard}>
              <h3>{channel.title}</h3>
              <p className={styles.moduleCopy}>{channel.detail}</p>
              <p className={styles.moduleCopy}><strong>{channel.note}</strong></p>
            </article>
          ))}
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

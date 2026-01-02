import Link from "next/link";
import styles from "../intermediate/page.module.css";

const MODULES = [
  "Story-led speaking and narration",
  "Vocabulary through games and themes",
  "Pronunciation, pacing, and clarity",
  "Confidence through show-and-tell",
  "Listening and retell drills",
  "Gentle grammar in context",
];

const OUTPUTS = [
  "Weekly speaking clips with coach notes",
  "Mini presentations with visual prompts",
  "A parent-ready progress note every week",
];

export const metadata = {
  title: "Kids English Mastery | Language Vidya",
  description:
    "Story-led sessions, speaking games, and gentle corrections to build confident young speakers.",
};

export default function KidsEnglishMasteryPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.kicker}>Spoken English · Kids</p>
          <h1>Playful, story-led English for kids.</h1>
          <p className={styles.lead}>
            Small-group sessions with stories, games, and supportive feedback so kids enjoy speaking every day.
          </p>
          <div className={styles.actions}>
            <Link href="https://wa.me/919217239714" className={styles.primaryCta}>Talk to a coach</Link>
            <Link href="tel:+919217239714" className={styles.secondaryCta}>Call now</Link>
          </div>
          <div className={styles.statsRow}>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>6 weeks</span>
              <span className={styles.statLabel}>40 min · 4x weekly</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>6-8</span>
              <span className={styles.statLabel}>Learners per pod</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>Weekly</span>
              <span className={styles.statLabel}>Parent updates</span>
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
          <div className={styles.cardNote}>Pods are curated; we place your child within 48 hours.</div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="modules-heading">
        <div className={styles.sectionHead}>
          <h2 id="modules-heading">What they will practice</h2>
          <p>Story-led practice, games, and gentle corrections to keep kids speaking happily and often.</p>
        </div>
        <div className={styles.moduleGrid}>
          {MODULES.map((item) => (
            <article key={item} className={styles.moduleCard}>
              <h3>{item}</h3>
              <p className={styles.moduleCopy}>Interactive prompts, show-and-tell, and playful feedback.</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <p className={styles.kicker}>Ready to start?</p>
          <h2>Book a placement call and join the next pod.</h2>
          <p>Share your availability; we will place your child with the right coach and group.</p>
          <div className={styles.actions}>
            <Link href="https://wa.me/919217239714" className={styles.primaryCta}>Book my slot</Link>
            <Link href="mailto:hello@languagevidya.com" className={styles.secondaryCta}>Email the team</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

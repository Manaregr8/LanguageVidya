"use client";

import styles from "./MotivationSection.module.css";

const languages = [
  { code: "EN", name: "English" },
  { code: "HI", name: "Hindi" },
  { code: "ES", name: "Spanish" },
  { code: "FR", name: "French" },
  { code: "JP", name: "Japanese" },
];

export default function MotivationSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* Left text */}
        <div className={styles.left}>
          <h2 className={styles.heading}>
            Every word you learn brings you closer to success — so what are you
            waiting for? Start with us today!
          </h2>
          <p className={styles.subheading}>
            Build real confidence in English and other languages with guided
            practice, clear feedback, and courses designed for your goals.
          </p>
        </div>

        {/* Right language list */}
        <div className={styles.right}>
          {languages.map((lang) => (
            <button key={lang.code} className={styles.langPill} type="button">
              <span className={styles.flagCircle}>
                {lang.code}
              </span>
              <span className={styles.langName}>{lang.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import styles from "./TimelineSteps.module.css";

const steps = [
  { number: "1", title: "Master the required topics" },
  { number: "2", title: "Dominate your weak areas" },
  { number: "3", title: "Practice every single day" },
  { number: "4", title: "Understand the basics clearly" },
  { number: "5", title: "Define the purpose & timeline" },
];

export default function TimelineSteps() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Your Preparation Timeline</h2>

        <div className={styles.timeline}>
          {steps.map((step) => (
            <div key={step.number} className={styles.step}>
              {/* icon circle – add your own SVG/img inside */}
              <div className={styles.iconCircle}>
                {/* <img src="/icons/brain.svg" alt="" /> */}
              </div>

              {/* vertical line */}
              <div className={styles.line} />

              {/* text + number */}
              <div className={styles.textBlock}>
                <span className={styles.number}>{step.number}</span>
                <p className={styles.label}>{step.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

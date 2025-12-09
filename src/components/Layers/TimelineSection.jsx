"use client";

import styles from "./TimelineSection.module.css";

const steps = [
  {
    title: "Define your purpose",
    text: "Identify your goal: career, communication, confidence.",
  },
  {
    title: "Build Your Foundation",
    text: " Strengthen grammar, vocabulary & pronunciation..",
  },
  {
    title: "Practise Every Day",
    text: "Live classes + daily speaking tasks build fluency.",
  },
  {
    title: "Handle Real Situations",
    text: "Meetings, calls, interviews & everyday conversations.",
  },
  {
    title: "Speak on Big Topics",
    text: "hare opinions, ideas, plans & stories confidently.",
  },
  {
    title: "Become Skill-Strong",
    text: " Reading, writing, listening & speaking work together.",
  },
];

export default function TimelineSection() {
  return (
    <section className={styles.section}>
  <div className={styles.topBand}>
    <div className={styles.topInner}>
      <h2 className={styles.heading}>Your Language Vidya Journey</h2>
      <p className={styles.topText}>
        A simple path from “I’m not confident” to “I can express myself clearly.”
      </p>
    </div>
  </div>

  <div className={styles.bottom}>
    <div className={styles.timeline}>
      {steps.map((step, index) => (
        <div key={step.title} className={styles.stepCard}>
          <div className={styles.stepHeader}>
            <div className={styles.iconCircle}>
              <span className={styles.iconNumber}>{index + 1}</span>
            </div>
            <div className={styles.connector} />
          </div>

          <div className={styles.stepBody}>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDesc}>{step.text}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  );
}   
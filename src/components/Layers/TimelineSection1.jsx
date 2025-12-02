"use client";

import styles from "./TimelineSection1.module.css";

const steps = [
  {
    title: "Placement test & goals",
    text: "Take a quick level test and share your study goals so we can guide you correctly.",
  },
  {
    title: "Personalised study plan",
    text: "Get a custom roadmap with classes, practice time, and weekly targets.",
  },
  {
    title: "Live classes begin",
    text: "Join interactive sessions with trainers and practise speaking from day one.",
  },
  {
    title: "Daily practice tasks",
    text: "Complete short homework, quizzes, and speaking challenges between classes.",
  },
  {
    title: "Progress checks",
    text: "Track your improvement with feedback, tests, and performance reports.",
  },
  {
    title: "Fluency & confidence",
    text: "Reach your target level and stay confident for exams, interviews, and real life.",
  },
];

export default function TimelineSection() {
  return (
    <section className={styles.section}>
      <div className={styles.topBand}>
        <div className={styles.topInner}>
          <h2 className={styles.heading}>Your Language Vidya Journey</h2>
          <p className={styles.topText}>
            See how we take you from your first hello to confident, fluent
            conversations step by step.
          </p>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <div key={step.title} className={styles.step}>
              {/* top icon circle – add your own SVG/img */}
              <div className={styles.iconCircle}>
                <span className={styles.iconNumber}>{index + 1}</span>
              </div>

              {/* dotted vertical line */}
              <div className={styles.verticalLine} />

              {/* title + text */}
              <div className={styles.stepText}>
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

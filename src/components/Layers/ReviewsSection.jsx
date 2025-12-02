"use client";

import styles from "./ReviewsSection.module.css";

const reviews = [
  {
    name: "Aarav Singh",
    title: "Great for daily practice",
    text: "Short live sessions and friendly tutors make it easy to practise English every day.",
    rating: 5,
    timeAgo: "2 days ago",
  },
  {
    name: "Neha Sharma",
    title: "Confidence booster",
    text: "I used to hesitate while speaking. Now I can join meetings without fear.",
    rating: 5,
    timeAgo: "1 week ago",
  },
  {
    name: "Rahul Verma",
    title: "Clear explanations",
    text: "Grammar is explained with simple examples and lots of speaking practice.",
    rating: 4,
    timeAgo: "3 weeks ago",
  },
  {
    name: "Sara Ali",
    title: "Flexible timings",
    text: "Evening batches helped me manage college and English practice together.",
    rating: 5,
    timeAgo: "1 month ago",
  },
];

export default function ReviewsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Hear it from Language Vidya learners</h2>

        <div className={styles.grid}>
          {reviews.map((review) => (
            <article key={review.name + review.timeAgo} className={styles.card}>
              <div className={styles.stars}>
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              <h3 className={styles.title}>{review.title}</h3>
              <p className={styles.text}>{review.text}</p>

              <div className={styles.footer}>
                <span className={styles.name}>{review.name}</span>
                <span className={styles.time}>{review.timeAgo}</span>
              </div>
            </article>
          ))}
        </div>

        <p className={styles.note}>
          All reviews shown here are shared directly by Language Vidya learners.
        </p>
      </div>
    </section>
  );
}

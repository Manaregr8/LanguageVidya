"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./ReviewsSection.module.css";

const REVIEWS = [
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
  {
    name: "Ishaan Kapoor",
    title: "Interview ready",
    text: "Mock interviews plus speaking drills made my tech interviews smoother.",
    rating: 5,
    timeAgo: "2 months ago",
  },
  {
    name: "Priya Nair",
    title: "Great community",
    text: "Small groups and peer feedback keep me motivated to show up daily.",
    rating: 5,
    timeAgo: "2 months ago",
  },
  {
    name: "Kabir Mehta",
    title: "Clear structure",
    text: "The lesson flow from basics to live practice is easy to follow and repeat.",
    rating: 4,
    timeAgo: "3 months ago",
  },
  {
    name: "Ananya Rao",
    title: "Pronunciation improved",
    text: "Daily corrections on pronunciation and tone boosted my confidence at work.",
    rating: 5,
    timeAgo: "3 months ago",
  },
];

const AVATAR_COLORS = [
  "#A62455",
  "#1F3D7A",
  "#F29A2E",
  "#7B275C",
  "#111827",
];

const getInitials = (name = "") =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

function Stars({ rating }) {
  return (
    <div className={styles.stars} aria-label={`${rating} stars`}>
      {Array.from({ length: rating }).map((_, i) => (
        <span key={i} aria-hidden="true">
          ★
        </span>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    const { scrollLeft, scrollWidth, clientWidth } = slider;
    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 4);
  }, []);

  const scrollByCards = useCallback(
    (direction) => {
      if (typeof window === "undefined") return;
      const slider = sliderRef.current;
      if (!slider) return;

      const firstCard = slider.querySelector("[data-card]");
      if (!firstCard) return;

      const computed = window.getComputedStyle(slider);
      const gapValue = computed.columnGap || computed.gap || "24px";
      const gap = parseFloat(gapValue) || 24;
      const cardWidth = firstCard.offsetWidth || 280;

      slider.scrollBy({ left: direction * (cardWidth + gap), behavior: "smooth" });
      requestAnimationFrame(updateScrollState);
    },
    [updateScrollState]
  );

  const handlePrev = useCallback(() => scrollByCards(-1), [scrollByCards]);
  const handleNext = useCallback(() => scrollByCards(1), [scrollByCards]);

  useEffect(() => {
    updateScrollState();
    const slider = sliderRef.current;
    if (!slider) return;

    const onScroll = () => updateScrollState();
    const onResize = () => updateScrollState();

    slider.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      slider.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [updateScrollState]);

  return (
    <section className={styles.section} aria-labelledby="reviews-heading">
      <div className={styles.inner}>
        <h2 id="reviews-heading" className={styles.heading}>
          Hear it from Language Vidya learners
        </h2>

        <div className={styles.ctaRow}>
          <a
            href="https://wa.me/919217239714"
            target="_blank"
            rel="noreferrer"
            className={styles.primaryCta}
          >
            Watch How Careers Actually Changed
          </a>
          <p className={styles.ctaNote}>Your story could be next.</p>
        </div>

        <div className={styles.sliderArea}>
          <div
            className={styles.grid}
            role="region"
            aria-label="Reviews carousel"
            ref={sliderRef}
          >
            {REVIEWS.map((review, index) => (
              <article
                key={`${review.name}-${review.timeAgo}-${index}`}
                className={styles.card}
                data-card
              >
                <div className={styles.cardHeader}>
                  <div
                    className={styles.avatar}
                    style={{
                      background: `linear-gradient(135deg, ${
                        AVATAR_COLORS[index % AVATAR_COLORS.length]
                      } 0%, ${
                        AVATAR_COLORS[(index + 1) % AVATAR_COLORS.length]
                      } 100%)`,
                    }}
                    aria-hidden="true"
                  >
                    {getInitials(review.name)}
                  </div>
                  <div className={styles.meta}>
                    <span className={styles.name}>{review.name}</span>
                    <time className={styles.time}>{review.timeAgo}</time>
                  </div>
                  <Stars rating={review.rating} />
                </div>

                <h3 className={styles.title}>{review.title}</h3>
                <p className={styles.text}>{review.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.navRow}>
          <button
            type="button"
            className={`${styles.navButton} ${!canScrollLeft ? styles.navButtonDisabled : ""}`}
            aria-label="Previous reviews"
            onClick={handlePrev}
            disabled={!canScrollLeft}
          >
            <span aria-hidden="true">{"<"}</span>
          </button>
          <button
            type="button"
            className={`${styles.navButton} ${!canScrollRight ? styles.navButtonDisabled : ""}`}
            aria-label="Next reviews"
            onClick={handleNext}
            disabled={!canScrollRight}
          >
            <span aria-hidden="true">{">"}</span>
          </button>
        </div>

        <p className={styles.note}>
          All reviews shown here are shared directly by Language Vidya learners.
        </p>
      </div>
    </section>
  );
}

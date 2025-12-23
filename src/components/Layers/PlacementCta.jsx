"use client";

import styles from "./PlacementCta.module.css";

export default function PlacementCta() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.badge}>Placement Support</p>
          <h2 className={styles.heading}>See Where Our Students Are Working</h2>
          <p className={styles.subheading}>We focus on placement, not just completion.</p>
        </div>

        <div className={styles.actions}>
          <button type="button" className={styles.primaryCta}>
            See Where Our Students Are Working
          </button>
        </div>
      </div>
    </section>
  );
}

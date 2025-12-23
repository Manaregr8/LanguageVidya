"use client";

import Image from "next/image";
import styles from "./Aipage.module.css";


export default function HeroSection() {
  return (
    <section className={styles.hero}>
     
      <div className={styles.inner}>
        {/* Left: text */}
        <div className={styles.textBlock}>
  <p className={styles.badge}>Improve Speaking</p>
  <h1 className={styles.heading}>Your Personal AI Speaking Partner</h1>
  <p className={styles.subheading}>
    
Start practising English the smart way.
Talk in real time with our AI-powered speaking avatar and build fluent, natural English through guided conversations, instant responses, and judgement-free practice — anytime you want
  </p>
  <div className={styles.actions}>
    <a href="#sessions" className={styles.primaryButton}>Start Practicing</a>
    <a href="#languages" className={styles.secondaryLink}>Book a Session →</a>
  </div>
  {/* ✅ Improvement 4 */}
  <p className={styles.trustBadge}>Trusted by 3000+ learners · No sign-up required</p>
</div>


        {/* Right: hero visual */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>Improve Speaking</div>

          <div className={styles.cardBody}>
            <div className={styles.avatarCircle}>
              <Image
                src="/icons/bot.png"
                alt="AI Avatar"
                className={styles.avatarImage}
                width={96}
                height={96}
                priority
              />
            </div>
            <p className={styles.status}>Ready when you are.</p>
            <button type="button" className={styles.ctaButton}>Start Practicing</button>
            <p className={styles.cardNote}>
                 No judgement · No pressure · Learn at your own pace
            </p>
          </div>
        </div>
      </div>

      {/* Child components */}
     
    </section>
  );
}
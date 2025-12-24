"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

function InstagramIcon() {
  return (
    <svg className={styles.socialIcon} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" fill="currentColor" opacity="0.14" />
      <path
        d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm6-1.6a1.05 1.05 0 1 1-2.1 0 1.05 1.05 0 0 1 2.1 0Z"
        fill="currentColor"
      />
      <circle cx="12" cy="12" r="2.25" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg className={styles.socialIcon} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M21.6 7.2a2.3 2.3 0 0 0-1.6-1.6C18.2 5.1 12 5.1 12 5.1s-6.2 0-8 .5A2.3 2.3 0 0 0 2.4 7.2 24.4 24.4 0 0 0 2 12a24.4 24.4 0 0 0 .4 4.8 2.3 2.3 0 0 0 1.6 1.6c1.8.5 8 .5 8 .5s6.2 0 8-.5a2.3 2.3 0 0 0 1.6-1.6c.3-1.6.4-3.2.4-4.8 0-1.6-.1-3.2-.4-4.8Z"
        opacity="0.12"
      />
      <path fill="currentColor" d="m10.5 15.3 4.2-2.6-4.2-2.6Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg className={styles.socialIcon} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        opacity="0.14"
        d="M20.5 3.5A11 11 0 0 0 3.3 17L2 22l5.2-1.4A11 11 0 0 0 20.5 3.5Z"
      />
      <path
        fill="currentColor"
        d="M17.2 14.4c-.3-.2-1.7-.8-2-.8-.2 0-.3 0-.4.2-.1.2-.5.8-.6 1-.1.2-.2.2-.4.1-.3-.1-1.1-.4-2.1-1.4-.8-.8-1.3-1.7-1.4-2-.1-.2 0-.3.1-.4l.9-1c.1-.1.1-.2.1-.3l-.4-1.6c0-.4-.3-.3-.4-.3h-.3c-.1 0-.3 0-.5.2-.2.2-.7.7-.7 1.8 0 1 .8 2 1 2.2.1.1 1.6 2.5 3.8 3.4 2.2.9 2.2.6 2.6.5.4-.1 1.3-.6 1.5-1.1.2-.5.2-.9.2-.9 0-.1-.2-.2-.5-.3Z"
      />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Brand + short pitch */}
        <div className={styles.brandCol}>
          <div className={styles.logoRow}>
  <div className={styles.logoMark}>
    <Image src="/uploads/icons/ShotLOGO.png" alt="Language Vidya Logo" width={35} height={35} />
  </div>
  <span className={styles.brandName}>Language Vidya</span>
</div>

          <p className={styles.brandText}>
            Live, friendly English practice designed for Indian learners who
            want clear, confident communication.
          </p>
        </div>

        {/* Product links */}
        <div className={styles.col}>
          <h3 className={styles.colHeading}>Product</h3>
          <Link href="/" className={styles.link}>Start practicing</Link>
          <Link href="/blog" className={styles.link}>Courses & articles</Link>
          <Link href="/contact-us" className={styles.link}>Free level test</Link>
          <Link href="/contact-us" className={styles.link}>Pricing</Link>
        </div>

        {/* Company links */}
        <div className={styles.col}>
          <h3 className={styles.colHeading}>Company</h3>
          <Link href="/about" className={styles.link}>About</Link>
          <Link href="/contact-us" className={styles.link}>Contact</Link>
          <Link href="/#faq" className={styles.link}>FAQ</Link>
          <a href="mailto:careers@languagevidya.com" className={styles.link}>Careers</a>
        </div>

        {/* Support + social */}
        <div className={styles.col}>
          <h3 className={styles.colHeading}>Support</h3>
          <Link href="/contact-us" className={styles.link}>Help centre</Link>
          <a href="https://wa.me/918527468533" target="_blank" rel="noreferrer" className={styles.link}>WhatsApp support</a>
          <a href="mailto:support@languagevidya.com" className={styles.link}>Email support</a>

          <div className={styles.socialRow}>
            <a href="https://instagram.com/languagevidya" target="_blank" rel="noreferrer" aria-label="Instagram" className={`${styles.socialChip} ${styles.instagram}`}>
              <InstagramIcon />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className={`${styles.socialChip} ${styles.youtube}`}>
              <YouTubeIcon />
            </a>
            <a href="https://wa.me/918527468533" target="_blank" rel="noreferrer" aria-label="WhatsApp" className={`${styles.socialChip} ${styles.whatsapp}`}>
              <WhatsAppIcon />
            </a>
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className={styles.bottomBar}>
        <p className={styles.copy}>
          © {year} Language Vidya. All rights reserved.
        </p>
        <div className={styles.bottomLinks}>
          <Link href="/contact-us" className={styles.bottomLink}>Terms</Link>
          <span className={styles.dot} />
          <Link href="/contact-us" className={styles.bottomLink}>Privacy</Link>
          <span className={styles.dot} />
          <Link href="/contact-us" className={styles.bottomLink}>Cookies</Link>
        </div>
      </div>
    </footer>
  );
}

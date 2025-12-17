
"use client";
import styles from "./FloatingActions.module.css";

import { FaWhatsapp, FaInstagram, FaRobot, FaPhoneAlt } from "react-icons/fa";

const FloatingActions = () => {
  return (
    <div className={styles["fab-container"]}>
       {/* AI Practice */}
      <a
        href="/ai-practice" // change to your route/section
        className={`${styles.fab} ${styles["fab-ai"]}`}
        aria-label="AI Practice"
      >
        <FaRobot />
      </a>
      
      {/* WhatsApp */}
      <a
        href="https://wa.me/911234567890"
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.fab} ${styles["fab-whatsapp"]}`}
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.fab} ${styles["fab-instagram"]}`}
        aria-label="Open Instagram"
      >
        <FaInstagram />
      </a>

 
      
      {/* Phone call */}
      <a
        href="tel:+919112223334" // put your real phone number here
        className={`${styles.fab} ${styles["fab-phone"]}`}
        aria-label="Call us"
      >
        <FaPhoneAlt />
      </a>

    </div>
  );
};

export default FloatingActions;

"use client";

import { useState, useEffect } from 'react';
import styles from './SplashScreen.module.css';

export default function SplashScreen() {
  const [show, setShow] = useState(true);
  const [fade, setFade] = useState(false);

  // Fallback timeout in case video fails to load/end
  useEffect(() => {
    const timer = setTimeout(() => {
      handleComplete();
    }, 10000); // 10 seconds max

    return () => clearTimeout(timer);
  }, []);

  const handleComplete = () => {
    setFade(true);
    setTimeout(() => {
      setShow(false);
    }, 800); // Match fade out duration in CSS
  };

  if (!show) return null;

  return (
    <div className={`${styles.splashContainer} ${fade ? styles.fadeOut : ''}`}>
      <video 
        autoPlay 
        muted 
        playsInline 
        onEnded={handleComplete}
        className={styles.video}
      >
        <source src="/splashscreen.mp4" type="video/mp4" />
      </video>
      <button className={styles.skipButton} onClick={handleComplete}>
        Skip
      </button>
    </div>
  );
}

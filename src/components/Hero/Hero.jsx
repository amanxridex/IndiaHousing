"use client";

import styles from './Hero.module.css';
import { Mouse } from 'lucide-react';
import FadeIn from '../FadeIn';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className={styles.videoBg}
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className={styles.overlay}></div>
      <div className={`container ${styles.content}`}>
        <FadeIn direction="up">
          <p className={styles.topLabel}>
            <span className={styles.line}></span> TOP REAL ESTATE IN INDIA
          </p>
          <h1 className={`${styles.title} serif`}>
            Unveil The Beauty<br />
            Of Our Exclusive<br />
            Properties
          </h1>
          <div className={styles.ctaGroup}>
            <a href="#projects" className="btn btn-primary">EXPLORE PROJECTS</a>
            <div className={styles.reviewsBadge}>
              <div className={styles.googleIcon}>G</div>
              <div className={styles.reviewsText}>
                <span className={styles.reviewsLabel}>Reviews</span>
                <div className={styles.stars}>
                  <span className={styles.rating}>5.0</span>
                  <span className={styles.star}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
      
      <div className={styles.scrollDown}>
        <Mouse size={24} className={styles.mouseIcon} />
        <span>Scroll Down</span>
      </div>
    </section>
  );
}

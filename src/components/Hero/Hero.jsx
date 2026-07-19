"use client";

import styles from './Hero.module.css';
import { Mouse } from 'lucide-react';
import FadeIn from '../FadeIn';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.container}`}>
        
        {/* Left Side: Content */}
        <div className={styles.content}>
          <FadeIn direction="up">
            <p className={styles.topLabel}>
              <span className={styles.line}></span> TOP REAL ESTATE IN INDIA
            </p>
            <h1 className={`${styles.title} serif`}>
              Unveil The Beauty Of<br />
              Our Exclusive Properties
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

        {/* Right Side: Framed Video */}
        <div className={styles.videoWrapper}>
          <FadeIn direction="left" delay={0.2}>
            <div className={styles.videoFrame}>
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className={styles.videoElement}
              >
                <source src="/hero-bg.mp4" type="video/mp4" />
              </video>
            </div>
          </FadeIn>
        </div>

      </div>
      
      <div className={styles.scrollDown}>
        <Mouse size={24} className={styles.mouseIcon} />
        <span>Scroll Down</span>
      </div>
    </section>
  );
}

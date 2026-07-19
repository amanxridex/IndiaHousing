"use client";

import { useState, useEffect } from 'react';
import styles from './About.module.css';
import FadeIn from '../FadeIn';

const tallImages = [
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
];

const squareImages = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2084&auto=format&fit=crop"
];

export default function About() {
  const [tallIndex, setTallIndex] = useState(0);
  const [squareIndex, setSquareIndex] = useState(0);

  useEffect(() => {
    const tallInterval = setInterval(() => {
      setTallIndex((prev) => (prev + 1) % tallImages.length);
    }, 4000);

    const squareInterval = setInterval(() => {
      setSquareIndex((prev) => (prev + 1) % squareImages.length);
    }, 5500); // Slightly different timing for asynchronous feel

    return () => {
      clearInterval(tallInterval);
      clearInterval(squareInterval);
    };
  }, []);

  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className={`container`}>
        <div className={styles.bentoGrid}>
          
          {/* Card 1: Text Content */}
          <FadeIn direction="up" className={`${styles.bentoCard} ${styles.textCard}`}>
            <h2 className={styles.title}>Defining Luxury Living in India</h2>
            <p className={styles.text}>
              At India Housing Projects Limited (IHPL), we don't just build structures; we craft environments that inspire and elevate. With a legacy of over 2 decades, we have been at the forefront of the real estate revolution in India.
            </p>
            <p className={styles.text}>
              Our commitment to architectural brilliance, sustainable development, and unwavering quality has made us the trusted choice for thousands of families and businesses.
            </p>
          </FadeIn>

          {/* Card 2: Tall Image Slider */}
          <FadeIn direction="up" delay={0.2} className={`${styles.bentoCard} ${styles.tallImageCard}`}>
            <div className={styles.imageContainer}>
              {tallImages.map((src, idx) => (
                <img 
                  key={idx}
                  src={src} 
                  alt="Luxury exterior" 
                  className={`${styles.imageSlide} ${idx === tallIndex ? styles.activeSlide : ''}`} 
                />
              ))}
            </div>
          </FadeIn>

          {/* Card 3: Square Image Slider */}
          <FadeIn direction="up" delay={0.3} className={`${styles.bentoCard} ${styles.squareImageCard}`}>
            <div className={styles.imageContainer}>
              {squareImages.map((src, idx) => (
                <img 
                  key={idx}
                  src={src} 
                  alt="Luxury interior" 
                  className={`${styles.imageSlide} ${idx === squareIndex ? styles.activeSlide : ''}`} 
                />
              ))}
            </div>
          </FadeIn>

          {/* Card 4: Stats */}
          <FadeIn direction="up" delay={0.4} className={`${styles.bentoCard} ${styles.statsCard}`}>
            <div className={styles.statsContainer}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>25+</div>
                <div className={styles.statLabel}>Years</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>50+</div>
                <div className={styles.statLabel}>Projects</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>10k+</div>
                <div className={styles.statLabel}>Families</div>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}

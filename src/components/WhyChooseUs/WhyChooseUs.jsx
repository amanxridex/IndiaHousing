"use client";

import { useState, useEffect } from 'react';
import styles from './WhyChooseUs.module.css';
import FadeIn from '../FadeIn';

const features = [
  {
    id: 1,
    title: 'Safety',
    desc: 'IHPL guarantees secure, premium real estate experiences with peace of mind.',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Experience',
    desc: 'Over two decades of crafting luxury homes and commercial spaces.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Planning',
    desc: 'Meticulous attention to architectural detail and sustainable design.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Excellence',
    desc: 'Uncompromising quality and world-class amenities in every project.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop',
  }
];

export default function WhyChooseUs() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="why-us" className={`section ${styles.whyChooseUs}`}>
      <div className={`container ${styles.container}`}>
        
        {/* Left Side: Content */}
        <FadeIn direction="right" className={styles.leftContent}>
          <h2 className="section-title">Why Choose Us?</h2>
          <p className={styles.description}>
            India Housing Projects Limited offers luxury real estate with outstanding service, 
            premium amenities, and breathtaking designs. Enjoy an unforgettable and elevated lifestyle with us.
          </p>
          <a href="#about" className="btn btn-primary" style={{ marginTop: '1rem', display: 'inline-block' }}>
            READ MORE
          </a>
        </FadeIn>

        {/* Right Side: Single Slider Card */}
        <FadeIn direction="up" delay={0.2} className={styles.rightContent}>
          <div className={styles.sliderCard}>
            {features.map((feature, index) => (
              <div 
                key={feature.id} 
                className={`${styles.slide} ${index === currentIndex ? styles.activeSlide : ''}`}
              >
                <img src={feature.image} alt={feature.title} className={styles.cardImage} />
                <div className={styles.cardOverlay}>
                  <h3 className={styles.cardTitle}>{feature.title}</h3>
                  <p className={styles.cardDesc}>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  );
}

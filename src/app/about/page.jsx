"use client";

import styles from './about.module.css';
import FadeIn from '@/components/FadeIn';
import { Building2, MapPin, ShieldCheck, Gem, Users, TrendingUp, CheckCircle, Award } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header/Header';
import ContactFooter from '@/components/ContactFooter/ContactFooter';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className={styles.pageContainer}>
        
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroBackground}>
            <img src="https://s7d1.scene7.com/is/image/joneslanglasalle/26-insights-global-real-estate-perspective-feb-2026?qlt=85&dpr=off&fmt=webp" alt="Global Real Estate Perspective" />
          </div>
          <div className={styles.heroContent}>
            <FadeIn direction="up">
              <h1 className={styles.heroTitle}>Building Spaces.<br/>Creating Legacies.</h1>
              <p className={styles.heroSubtitle}>
                Indian Housing Projects Limited (IHPL) is redefining modern real estate by creating thoughtfully planned residential communities, premium plotted developments, and future-ready investment opportunities. Every project is built on trust, transparency, quality, and long-term value.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Our Story */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.storyGrid}>
              <FadeIn direction="right" className={styles.storyContent}>
                <span className={styles.sectionTag}>Our Story</span>
                <h2 className={styles.sectionTitle} style={{marginBottom: '2rem'}}>More Than Real Estate. We Build Aspirations.</h2>
                <p>
                  At IHPL, we believe that every piece of land holds the potential to shape a better future. Our journey began with a simple vision—to create developments that combine intelligent planning, premium infrastructure, and lasting value.
                </p>
                <p>
                  Whether it's a first home, an investment, or a legacy for generations, every IHPL project is designed to inspire confidence and deliver excellence.
                </p>
                <p>
                  Our commitment extends beyond construction. We focus on creating communities where families thrive, businesses grow, and investments appreciate over time.
                </p>
              </FadeIn>
              <FadeIn direction="left" delay={0.2}>
                <div className={styles.storyImageWrapper}>
                  <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop" alt="IHPL Vision" />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className={styles.section} style={{background: 'rgba(255,255,255,0.02)'}}>
          <div className={styles.container}>
            <div className={styles.missionVisionGrid}>
              <FadeIn direction="up">
                <div className={styles.mvCard}>
                  <h3>Vision</h3>
                  <p>To become one of India's most trusted real estate developers by creating sustainable communities that enrich lives and deliver long-term value.</p>
                </div>
              </FadeIn>
              <FadeIn direction="up" delay={0.2}>
                <div className={styles.mvCard}>
                  <h3>Mission</h3>
                  <ul>
                    <li>Develop premium residential and commercial projects.</li>
                    <li>Maintain complete transparency in every transaction.</li>
                    <li>Deliver exceptional quality without compromise.</li>
                    <li>Build lasting relationships based on trust.</li>
                    <li>Create investment opportunities that appreciate for generations.</li>
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* What Makes IHPL Different */}
        <section className={styles.section}>
          <div className={styles.container}>
            <FadeIn direction="up" className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Why Choose Us</span>
              <h2 className={styles.sectionTitle}>What Makes IHPL Different</h2>
            </FadeIn>
            
            <div className={styles.glassGrid3}>
              <FadeIn direction="up" delay={0.1}>
                <div className={styles.glassCard}>
                  <Building2 className={styles.cardIcon} size={32} />
                  <h4 className={styles.cardTitle}>Premium Planning</h4>
                  <p className={styles.cardDesc}>Every project is carefully planned for maximum livability and future appreciation.</p>
                </div>
              </FadeIn>
              <FadeIn direction="up" delay={0.2}>
                <div className={styles.glassCard}>
                  <MapPin className={styles.cardIcon} size={32} />
                  <h4 className={styles.cardTitle}>Prime Locations</h4>
                  <p className={styles.cardDesc}>Strategically selected locations with excellent connectivity and growth potential.</p>
                </div>
              </FadeIn>
              <FadeIn direction="up" delay={0.3}>
                <div className={styles.glassCard}>
                  <ShieldCheck className={styles.cardIcon} size={32} />
                  <h4 className={styles.cardTitle}>Transparent Process</h4>
                  <p className={styles.cardDesc}>Clear documentation and ethical business practices from inquiry to possession.</p>
                </div>
              </FadeIn>
              <FadeIn direction="up" delay={0.4}>
                <div className={styles.glassCard}>
                  <Gem className={styles.cardIcon} size={32} />
                  <h4 className={styles.cardTitle}>Quality Infrastructure</h4>
                  <p className={styles.cardDesc}>Roads, landscaping, utilities, and amenities built to premium standards.</p>
                </div>
              </FadeIn>
              <FadeIn direction="up" delay={0.5}>
                <div className={styles.glassCard}>
                  <Users className={styles.cardIcon} size={32} />
                  <h4 className={styles.cardTitle}>Customer First</h4>
                  <p className={styles.cardDesc}>Dedicated support before, during, and after your purchase.</p>
                </div>
              </FadeIn>
              <FadeIn direction="up" delay={0.6}>
                <div className={styles.glassCard}>
                  <TrendingUp className={styles.cardIcon} size={32} />
                  <h4 className={styles.cardTitle}>Long-Term Value</h4>
                  <p className={styles.cardDesc}>Projects designed to deliver sustainable appreciation and lifestyle benefits.</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Our Core Values */}
        <section className={styles.section}>
          <div className={styles.container}>
            <FadeIn direction="up" className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Principles</span>
              <h2 className={styles.sectionTitle}>Our Core Values</h2>
            </FadeIn>

            <div className={styles.glassGrid4}>
              <FadeIn direction="up" delay={0.1}>
                <div className={styles.glassCard} style={{textAlign: 'center'}}>
                  <h4 className={styles.cardTitle}>Trust</h4>
                  <p className={styles.cardDesc}>Relationships built on honesty and transparency.</p>
                </div>
              </FadeIn>
              <FadeIn direction="up" delay={0.2}>
                <div className={styles.glassCard} style={{textAlign: 'center'}}>
                  <h4 className={styles.cardTitle}>Excellence</h4>
                  <p className={styles.cardDesc}>Attention to detail in every aspect of development.</p>
                </div>
              </FadeIn>
              <FadeIn direction="up" delay={0.3}>
                <div className={styles.glassCard} style={{textAlign: 'center'}}>
                  <h4 className={styles.cardTitle}>Innovation</h4>
                  <p className={styles.cardDesc}>Modern planning and forward-thinking infrastructure.</p>
                </div>
              </FadeIn>
              <FadeIn direction="up" delay={0.4}>
                <div className={styles.glassCard} style={{textAlign: 'center'}}>
                  <h4 className={styles.cardTitle}>Commitment</h4>
                  <p className={styles.cardDesc}>Delivering on every promise we make.</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Our Numbers */}
        <section className={styles.numbersSection}>
          <div className={styles.container}>
            <div className={styles.numbersGrid}>
              <FadeIn direction="up" delay={0.1}>
                <div className={styles.statItem}>
                  <span className={styles.statNum}>10+</span>
                  <span className={styles.statLabel}>Projects Planned</span>
                </div>
              </FadeIn>
              <FadeIn direction="up" delay={0.2}>
                <div className={styles.statItem}>
                  <span className={styles.statNum}>500+</span>
                  <span className={styles.statLabel}>Happy Customers</span>
                </div>
              </FadeIn>
              <FadeIn direction="up" delay={0.3}>
                <div className={styles.statItem}>
                  <span className={styles.statNum}>100+</span>
                  <span className={styles.statLabel}>Acres Developed</span>
                </div>
              </FadeIn>
              <FadeIn direction="up" delay={0.4}>
                <div className={styles.statItem}>
                  <span className={styles.statNum}>100%</span>
                  <span className={styles.statLabel}>Transparent Docs</span>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Why Invest With IHPL? */}
        <section className={styles.investSection}>
          <div className={styles.container}>
            <FadeIn direction="up" className={styles.investContent}>
              <span className={styles.sectionTag} style={{color: '#D4AF37'}}>Why Invest With Us</span>
              <h2 className={styles.investText}>
                Real estate is more than an investment—it's the foundation of your future.
              </h2>
              <p className={styles.investSubtext}>
                Our developments are selected after extensive market research, ensuring strong connectivity, infrastructure growth, legal clarity, and long-term appreciation.
                <br/><br/>
                Every IHPL project is designed to offer peace of mind today and exceptional value tomorrow.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Chairman's Message */}
        <section className={styles.section}>
          <div className={styles.container}>
            <FadeIn direction="up">
              <div className={styles.chairmanGrid}>
                <div>
                  {/* Portrait Placeholder */}
                  <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1974&auto=format&fit=crop" alt="Chairman Portrait" className={styles.chairmanImage}/>
                </div>
                <div>
                  <h2 className={styles.sectionTitle} style={{marginBottom: '2rem'}}>A Message From Our Leadership</h2>
                  <p className={styles.chairmanQuote}>
                    At IHPL, our purpose extends beyond developing land—we build trust, create opportunities, and shape communities that stand the test of time. Every decision we make is guided by integrity, innovation, and an unwavering commitment to our customers.
                  </p>
                  <p className={styles.chairmanName}>Executive Chairman</p>
                  <p className={styles.chairmanTitle}>India Housing Projects Limited</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Timeline */}
        <section className={styles.section} style={{background: 'rgba(255,255,255,0.02)'}}>
          <div className={styles.container}>
            <FadeIn direction="up" className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Journey</span>
              <h2 className={styles.sectionTitle}>Our Milestone</h2>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDot}></div>
                  <div className={styles.timelineContent}>
                    <h4>Phase 1</h4>
                    <p>Company Founded</p>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDot}></div>
                  <div className={styles.timelineContent}>
                    <h4>Phase 2</h4>
                    <p>First Project Launch</p>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDot}></div>
                  <div className={styles.timelineContent}>
                    <h4>Phase 3</h4>
                    <p>100 Customers</p>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDot}></div>
                  <div className={styles.timelineContent}>
                    <h4>Phase 4</h4>
                    <p>Expansion into New Cities</p>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDot}></div>
                  <div className={styles.timelineContent}>
                    <h4>Phase 5</h4>
                    <p>Future Smart Township</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Awards & Certifications */}
        <section className={styles.section}>
          <div className={styles.container}>
            <FadeIn direction="up" className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Excellence</span>
              <h2 className={styles.sectionTitle}>Recognitions & Compliance</h2>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <div className={styles.certWall}>
                <div className={styles.certItem}>
                  <CheckCircle size={24} color="#D4AF37"/> RERA Registered
                </div>
                <div className={styles.certItem}>
                  <Award size={24} color="#D4AF37"/> Legal Compliance
                </div>
                <div className={styles.certItem}>
                  <ShieldCheck size={24} color="#D4AF37"/> Trusted Banking Partners
                </div>
              </div>
            </FadeIn>
          </div>
        </section>



      </main>
      <ContactFooter />
    </>
  );
}

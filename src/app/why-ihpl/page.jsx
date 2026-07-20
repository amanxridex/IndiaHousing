"use client";

import styles from './why.module.css';
import Header from '@/components/Header/Header';
import ContactFooter from '@/components/ContactFooter/ContactFooter';
import FadeIn from '@/components/FadeIn';
import { 
  ShieldCheck, MapPin, TrendingUp, Trees, Headphones, 
  CheckCircle, Diamond, Users, FileText, Search, Clock, ChevronDown 
} from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function WhyIHPLPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const bentoCards = [
    {
      title: "Prime Locations",
      desc: "Every project is strategically located near rapidly developing infrastructure, highways, educational institutions, healthcare facilities, and commercial hubs.",
      icon: <MapPin size={32} />,
      span: styles.span2x1
    },
    {
      title: "Complete Legal Transparency",
      desc: "Clear documentation, verified approvals, and professional assistance throughout the buying process.",
      icon: <FileText size={32} />,
      span: styles.span1x2
    },
    {
      title: "Future Growth Potential",
      desc: "We carefully select locations that offer strong appreciation potential, ensuring long-term value for every investment.",
      icon: <TrendingUp size={32} />,
      span: styles.span1x1
    },
    {
      title: "Modern Infrastructure",
      desc: "Wide roads, landscaped green spaces, electricity, water, drainage, and community planning.",
      icon: <Trees size={32} />,
      span: styles.span1x1
    },
    {
      title: "Customer First",
      desc: "From your first inquiry to possession, our dedicated team provides personalized support and guidance at every step.",
      icon: <Headphones size={32} />,
      span: styles.span2x1
    },
    {
      title: "Secure Investment",
      desc: "Every development is planned with long-term sustainability, transparency, and investment security in mind.",
      icon: <ShieldCheck size={32} />,
      span: styles.span1x1
    },
    {
      title: "Premium Quality",
      desc: "Attention to detail in planning, execution, and infrastructure development.",
      icon: <Diamond size={32} />,
      span: styles.span1x1
    },
  ];

  const faqs = [
    { q: "Why should I choose IHPL?", a: "IHPL blends modern luxury with uncompromised transparency. We deliver projects that act as lucrative investments and secure legacy homes." },
    { q: "Are projects legally verified?", a: "Yes, every IHPL project undergoes rigorous legal verification and is 100% RERA registered before launch." },
    { q: "Can I finance my purchase?", a: "Absolutely. We are partnered with leading national banks to provide seamless financing options for our customers." },
    { q: "How do I schedule a site visit?", a: "You can book a site visit through our website, or contact our team directly. We arrange assisted tours for all our developments." },
    { q: "How can I download brochures?", a: "Brochures are available on every individual project page under the 'Our Projects' section." },
    { q: "How do I track construction?", a: "We provide regular updates and milestone tracking via email and our customer portal for ongoing projects." }
  ];

  return (
    <>
      <Header />
      <main className={styles.pageContainer}>
        
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <FadeIn direction="up">
              <h1 className={styles.heroTitle}>
                <span className={styles.sweepText}>Why IHPL?</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Building more than developments. Creating trust, value, and opportunities that last for generations.
              </p>
            </FadeIn>
          </div>
          
          <div className={styles.heroPillars}>
            <FadeIn direction="up" delay={0.2}><div className={styles.pillar}><ShieldCheck size={18} className={styles.pillarIcon} /> 100% Transparency</div></FadeIn>
            <FadeIn direction="up" delay={0.3}><div className={styles.pillar}><MapPin size={18} className={styles.pillarIcon} /> Premium Locations</div></FadeIn>
            <FadeIn direction="up" delay={0.4}><div className={styles.pillar}><FileText size={18} className={styles.pillarIcon} /> Legal Security</div></FadeIn>
            <FadeIn direction="up" delay={0.5}><div className={styles.pillar}><TrendingUp size={18} className={styles.pillarIcon} /> Long-Term Value</div></FadeIn>
          </div>
        </section>

        {/* Our Promise Section */}
        <section className={styles.section}>
          <div className={`${styles.container} ${styles.promiseGrid}`}>
            <FadeIn direction="right">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" alt="IHPL Building" className={styles.promiseImage} />
            </FadeIn>
            <FadeIn direction="left">
              <span className={styles.sectionTag}>Our Promise</span>
              <h2 className={styles.sectionTitle}>Our Commitment</h2>
              <p className={styles.promiseText}>
                At IHPL, every project begins with one promise—to deliver developments that combine quality, transparency, strategic locations, and lasting value.
              </p>
              <p className={styles.promiseHighlight}>
                We don't simply develop land.<br/>
                We build communities, opportunities, and lifelong investments.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Bento Grid Section */}
        <section className={styles.section} style={{ background: '#f5f5f7' }}>
          <div className={styles.container}>
            <FadeIn direction="up">
              <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <span className={styles.sectionTag}>The IHPL Advantage</span>
                <h2 className={styles.sectionTitle}>Why Thousands Choose Us</h2>
              </div>
            </FadeIn>
            
            <div className={styles.bentoGrid}>
              {bentoCards.map((card, i) => (
                <FadeIn key={i} direction="up" delay={i * 0.1} className={`${styles.bentoCard} ${card.span}`}>
                  <div className={styles.bentoIcon}>{card.icon}</div>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Horizontal Timeline */}
        <section className={styles.section}>
          <div className={styles.container}>
            <FadeIn direction="up">
              <span className={styles.sectionTag}>Methodology</span>
              <h2 className={styles.sectionTitle}>Our Development Process</h2>
            </FadeIn>
            
            <div className={styles.timelineWrapper}>
              <div className={styles.horizontalTimeline}>
                {["Land Identification", "Legal Verification", "Planning", "Infrastructure Development", "Quality Inspection", "Project Launch", "Customer Support", "Future Growth"].map((step, i) => (
                  <FadeIn key={i} direction="right" delay={i * 0.1}>
                    <div className={styles.timelineNode}>
                      <div className={styles.timelineDot}></div>
                      <h4>Step {i + 1}</h4>
                      <p>{step}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className={`${styles.section} ${styles.trustSection}`}>
          <div className={styles.container}>
            <FadeIn direction="up">
              <h2 className={styles.sectionTitle} style={{ color: '#fff' }}>Every Project Backed By</h2>
            </FadeIn>
            <div className={styles.trustGrid}>
              <FadeIn direction="up" delay={0.1}>
                <div className={styles.trustItem}>
                  <div className={styles.trustIcon}><ShieldCheck size={40} /></div>
                  <h4>Verified Documentation</h4>
                </div>
              </FadeIn>
              <FadeIn direction="up" delay={0.2}>
                <div className={styles.trustItem}>
                  <div className={styles.trustIcon}><Search size={40} /></div>
                  <h4>Professional Planning</h4>
                </div>
              </FadeIn>
              <FadeIn direction="up" delay={0.3}>
                <div className={styles.trustItem}>
                  <div className={styles.trustIcon}><Headphones size={40} /></div>
                  <h4>Dedicated Customer Support</h4>
                </div>
              </FadeIn>
              <FadeIn direction="up" delay={0.4}>
                <div className={styles.trustItem}>
                  <div className={styles.trustIcon}><Clock size={40} /></div>
                  <h4>Long-Term Commitment</h4>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Investment Benefits */}
        <section className={styles.section}>
          <div className={`${styles.container} ${styles.investGrid}`}>
            <FadeIn direction="right">
              <span className={styles.sectionTag}>Investment</span>
              <h2 className={styles.sectionTitle}>Why Invest With IHPL?</h2>
              <div className={styles.investList}>
                {["Strategic Locations", "Growing Infrastructure", "High Appreciation Potential", "Safe Investment", "Premium Lifestyle", "Transparent Buying Process"].map((item, i) => (
                  <div key={i} className={styles.investItem}>
                    <CheckCircle className={styles.investIcon} size={24} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn direction="left">
              <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop" alt="Luxury Lifestyle" className={styles.promiseImage} />
            </FadeIn>
          </div>
        </section>

        {/* Customer Journey */}
        <section className={`${styles.section} ${styles.journeySection}`}>
          <div className={styles.container}>
            <FadeIn direction="up">
              <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <span className={styles.sectionTag}>Experience</span>
                <h2 className={styles.sectionTitle}>The Customer Journey</h2>
              </div>
            </FadeIn>
            
            <div className={styles.verticalTimeline}>
              {["Enquiry", "Consultation", "Site Visit", "Documentation", "Booking", "Registration", "Possession", "After Sales Support"].map((step, i) => (
                <FadeIn key={i} direction="up" delay={i * 0.1}>
                  <div className={styles.journeyNode}>
                    <div className={styles.journeyDot}></div>
                    <h4>{step}</h4>
                    <p>Experience seamless and transparent service at every step of your journey with us.</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className={styles.section} style={{ background: '#FAFAFA' }}>
          <div className={styles.faqContainer}>
            <FadeIn direction="up">
              <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
              </div>
            </FadeIn>

            {faqs.map((faq, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.1}>
                <div className={styles.faqItem}>
                  <button className={styles.faqQuestion} onClick={() => toggleFaq(i)}>
                    {faq.q}
                    <ChevronDown size={20} className={`${styles.faqIcon} ${openFaq === i ? styles.rotated : ''}`} />
                  </button>
                  {openFaq === i && (
                    <div className={styles.faqAnswer}>
                      {faq.a}
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className={styles.cta}>
          <FadeIn direction="up">
            <h2 className={styles.ctaTitle}>Ready To Build Your Future?</h2>
            <p className={styles.ctaText}>
              Whether you're searching for your dream home or a secure investment, IHPL is committed to helping you create a legacy for generations.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/projects" className={styles.btnPrimary}>Explore Projects</Link>
              <Link href="#contact" className={styles.btnOutline}>Book Site Visit</Link>
              <Link href="#contact" className={styles.btnOutline}>Speak To An Expert</Link>
            </div>
          </FadeIn>
        </section>

      </main>
      <ContactFooter />
    </>
  );
}

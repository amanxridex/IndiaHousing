"use client";

import { useState } from 'react';
import styles from './careers.module.css';
import Header from '@/components/Header/Header';
import ContactFooter from '@/components/ContactFooter/ContactFooter';
import FadeIn from '@/components/FadeIn';
import { 
  Briefcase, TrendingUp, Users, Heart, Star, 
  MapPin, Clock, Upload, ChevronDown, CheckCircle, 
  MessageCircle, Phone, FileText, ShieldCheck
} from 'lucide-react';
import Link from 'next/link';

export default function CareersPage() {
  const [departmentFilter, setDepartmentFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [openFaq, setOpenFaq] = useState(null);

  const jobs = [
    { title: "Business Development Executive", dept: "Sales", loc: "Delhi NCR", type: "Full Time", exp: "2-4 Years" },
    { title: "Sales Manager", dept: "Sales", loc: "Lucknow", type: "Full Time", exp: "5+ Years" },
    { title: "Marketing Executive", dept: "Marketing", loc: "Noida", type: "Full Time", exp: "1-3 Years" },
    { title: "Civil Engineer", dept: "Engineering", loc: "Site Operations", type: "Full Time", exp: "3-5 Years" },
    { title: "HR Executive", dept: "HR", loc: "Delhi NCR", type: "Full Time", exp: "2-4 Years" }
  ];

  const filteredJobs = jobs.filter(j => {
    if (departmentFilter && j.dept !== departmentFilter) return false;
    if (locationFilter && j.loc !== locationFilter) return false;
    return true;
  });

  const faqs = [
    { q: "How do I apply?", a: "You can apply directly through our job board on this page by clicking 'Apply' on any open position, or use the general application form at the bottom." },
    { q: "What is the hiring process?", a: "Our process typically includes a resume review, an initial HR screening, 1-2 technical/department interviews, and a final discussion." },
    { q: "Can freshers apply?", a: "Yes, we have a dedicated graduate program and frequently hire fresh talent for entry-level positions." },
    { q: "Where are your offices located?", a: "Our corporate headquarters is in Delhi NCR, with regional offices and site operations across major North Indian cities including Lucknow and Noida." }
  ];

  return (
    <>
      <Header />
      <main className={styles.pageContainer}>

        {/* 1. Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <FadeIn direction="up">
              <h1 className={styles.heroTitle}>Build More Than Projects.<br/>Build Your Career.</h1>
              <p className={styles.heroSubtitle}>
                Join a team that's shaping the future of real estate through innovation, integrity, and excellence. At IHPL, your ideas, ambition, and growth matter.
              </p>
              <div className={styles.heroButtons}>
                <a href="#jobs" className={styles.btnPrimary}>View Openings</a>
                <a href="#apply" className={styles.btnOutline}>Submit Resume</a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 2. Why Join IHPL */}
        <section className={styles.section}>
          <div className={styles.container}>
            <FadeIn direction="up">
              <div className={styles.sectionHeader}>
                <span className={styles.sectionTag}>Why Join Us</span>
                <h2 className={styles.sectionTitle}>Elevate Your Potential</h2>
              </div>
            </FadeIn>

            <div className={styles.grid3}>
              <FadeIn direction="up" delay={0.1} className={styles.infoCard}>
                <TrendingUp size={36} color="var(--color-gold)" />
                <h3>Career Growth</h3>
                <p>Grow with structured learning, mentorship, and opportunities to take on meaningful, large-scale challenges.</p>
              </FadeIn>
              <FadeIn direction="up" delay={0.2} className={styles.infoCard}>
                <Star size={36} color="var(--color-gold)" />
                <h3>Innovation</h3>
                <p>Work on modern developments and contribute ideas that shape the future of smart communities.</p>
              </FadeIn>
              <FadeIn direction="up" delay={0.3} className={styles.infoCard}>
                <Users size={36} color="var(--color-gold)" />
                <h3>Collaborative Culture</h3>
                <p>Join a passionate team where respect, teamwork, and continuous improvement are part of everyday work.</p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* 3. Life at IHPL (Split Layout) */}
        <section className={styles.section} style={{ background: '#fff' }}>
          <div className={`${styles.container} ${styles.splitGrid}`}>
            <FadeIn direction="right">
              <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop" alt="Life at IHPL" className={styles.splitImg} />
            </FadeIn>
            <FadeIn direction="left" className={styles.splitText}>
              <span className={styles.sectionTag}>Life At IHPL</span>
              <h2 className={styles.sectionTitle} style={{ marginBottom: '24px' }}>Working with Us</h2>
              <p>We believe exceptional projects are built by exceptional people.</p>
              <p>Our culture encourages learning, ownership, collaboration, and professional development, empowering every team member to reach their full potential.</p>
            </FadeIn>
          </div>
        </section>

        {/* 4. Core Values */}
        <section className={styles.section} style={{ background: '#03001C', color: '#fff' }}>
          <div className={styles.container}>
            <FadeIn direction="up">
              <div className={styles.sectionHeader}>
                <span className={styles.sectionTag}>Our DNA</span>
                <h2 className={styles.sectionTitle}>Core Values</h2>
              </div>
            </FadeIn>

            <div className={styles.valuesGrid}>
              {[
                { i: <ShieldCheck size={32} />, t: 'Integrity', d: 'We do the right thing, always.' },
                { i: <Star size={32} />, t: 'Excellence', d: 'We strive for quality in every project.' },
                { i: <Heart size={32} />, t: 'Customer Focus', d: 'Every decision begins with the customer.' },
                { i: <Users size={32} />, t: 'Collaboration', d: 'Success is built together.' }
              ].map((val, idx) => (
                <FadeIn key={idx} direction="up" delay={idx * 0.1} className={styles.valueCard}>
                  <div className={styles.valueIcon}>{val.i}</div>
                  <h3>{val.t}</h3>
                  <p>{val.d}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Benefits Grid */}
        <section className={styles.section}>
          <div className={styles.container}>
            <FadeIn direction="up">
              <div className={styles.sectionHeader}>
                <span className={styles.sectionTag}>Perks & Benefits</span>
                <h2 className={styles.sectionTitle}>What You'll Enjoy</h2>
              </div>
            </FadeIn>

            <div className={styles.benefitsGrid}>
              {["Competitive Compensation", "Performance Incentives", "Career Advancement", "Learning & Development", "Professional Environment", "Recognition Programs", "Paid Leave", "Supportive Culture", "Modern Workspace", "Health & Wellness"].map((b, i) => (
                <FadeIn key={i} direction="up" delay={i * 0.05} className={styles.benefitItem}>
                  <CheckCircle size={20} className={styles.benefitIcon} />
                  <span>{b}</span>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Current Openings */}
        <section id="jobs" className={styles.section} style={{ background: '#fff' }}>
          <div className={styles.container}>
            <FadeIn direction="up">
              <div className={styles.sectionHeader}>
                <span className={styles.sectionTag}>Join Us</span>
                <h2 className={styles.sectionTitle}>Current Openings</h2>
              </div>
            </FadeIn>

            <FadeIn direction="up">
              <div className={styles.jobFilters}>
                <select value={departmentFilter} onChange={(e) => setDepartmentFilter(e.target.value)}>
                  <option value="">All Departments</option>
                  <option value="Sales">Sales</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Engineering">Engineering</option>
                  <option value="HR">HR</option>
                </select>
                <select value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)}>
                  <option value="">All Locations</option>
                  <option value="Delhi NCR">Delhi NCR</option>
                  <option value="Noida">Noida</option>
                  <option value="Lucknow">Lucknow</option>
                  <option value="Site Operations">Site Operations</option>
                </select>
              </div>
            </FadeIn>

            <div className={styles.jobGrid}>
              {filteredJobs.length === 0 ? (
                <p style={{ textAlign: 'center', padding: '40px' }}>No openings match your criteria.</p>
              ) : (
                filteredJobs.map((job, i) => (
                  <FadeIn key={i} direction="up" delay={i * 0.1} className={styles.jobCard}>
                    <div className={styles.jobInfo}>
                      <h3>{job.title}</h3>
                      <div className={styles.jobTags}>
                        <span><Briefcase size={16}/> {job.dept}</span>
                        <span><MapPin size={16}/> {job.loc}</span>
                        <span><Clock size={16}/> {job.type}</span>
                        <span><Star size={16}/> {job.exp}</span>
                      </div>
                    </div>
                    <div className={styles.jobActions}>
                      <a href="#apply" className={styles.btnOutline} style={{ color: '#03001C', borderColor: '#ddd' }}>View Details</a>
                      <a href="#apply" className={styles.btnPrimary}>Apply</a>
                    </div>
                  </FadeIn>
                ))
              )}
            </div>
          </div>
        </section>

        {/* 7. Hiring Process */}
        <section className={styles.section}>
          <div className={styles.container}>
            <FadeIn direction="up">
              <div className={styles.sectionHeader}>
                <span className={styles.sectionTag}>The Process</span>
                <h2 className={styles.sectionTitle}>How We Hire</h2>
              </div>
            </FadeIn>

            <div className={styles.processWrapper}>
              <div className={styles.processTimeline}>
                {["Apply Online", "Resume Review", "HR Interview", "Technical Interview", "Final Discussion", "Offer Letter", "Welcome to IHPL"].map((step, i) => (
                  <FadeIn key={i} direction="right" delay={i * 0.1}>
                    <div className={styles.processNode}>
                      <div className={styles.processDot}>{i + 1}</div>
                      <h4>{step}</h4>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 9. FAQ */}
        <section className={styles.section} style={{ background: '#fff' }}>
          <div className={styles.container} style={{ maxWidth: '800px' }}>
            <FadeIn direction="up">
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
              </div>
            </FadeIn>

            {faqs.map((faq, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.1}>
                <div style={{ background: '#fafafa', border: '1px solid #eee', borderRadius: '12px', marginBottom: '16px' }}>
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width: '100%', padding: '24px', textAlign: 'left', background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', fontWeight: 600, fontSize: '1.1rem' }}
                  >
                    {faq.q}
                    <ChevronDown size={20} style={{ transform: openFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: '0 24px 24px', color: '#666', lineHeight: 1.6 }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* 10. Apply Now Form */}
        <section id="apply" className={styles.section} style={{ background: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop") center/cover fixed' }}>
          <div className={styles.container}>
            <FadeIn direction="up">
              <div className={styles.formContainer}>
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                  <h2 className={styles.sectionTitle}>Ready To Shape The Future?</h2>
                  <p style={{ color: '#666', marginTop: '12px' }}>Submit your application below.</p>
                </div>

                <form onSubmit={(e) => { e.preventDefault(); alert("Application Submitted! HR will contact you soon."); }}>
                  <div className={styles.formGrid}>
                    <div className={styles.inputGroup}>
                      <label>Full Name *</label>
                      <input type="text" required />
                    </div>
                    <div className={styles.inputGroup}>
                      <label>Email Address *</label>
                      <input type="email" required />
                    </div>
                    <div className={styles.inputGroup}>
                      <label>Phone Number *</label>
                      <input type="tel" required />
                    </div>
                    <div className={styles.inputGroup}>
                      <label>Experience Level *</label>
                      <select required>
                        <option value="">Select Experience</option>
                        <option value="Fresher">Fresher (0-1 Years)</option>
                        <option value="Mid">Mid Level (2-5 Years)</option>
                        <option value="Senior">Senior (5+ Years)</option>
                      </select>
                    </div>
                    <div className={`${styles.inputGroup} ${styles.full}`}>
                      <label>Position Applying For *</label>
                      <input type="text" required />
                    </div>
                    
                    <div className={`${styles.inputGroup} ${styles.full}`}>
                      <label>Resume *</label>
                      <div className={styles.fileUpload}>
                        <Upload size={32} color="var(--color-gold)" style={{ marginBottom: '12px' }} />
                        <p>Click to upload or drag and drop your resume (PDF, DOCX)</p>
                      </div>
                    </div>
                  </div>
                  
                  <button type="submit" className={`${styles.btnPrimary} ${styles.formSubmit}`}>Submit Application</button>
                </form>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 11. Floating CTA */}
        <div className={styles.floatingMenu}>
          <a href="#apply" className={styles.floatItem}>
            <FileText size={20} />
            <span>Upload Resume</span>
          </a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className={styles.floatItem}>
            <MessageCircle size={20} />
            <span>HR Chat</span>
          </a>
          <a href="tel:1234567890" className={styles.floatItem}>
            <Phone size={20} />
            <span>Speak to Recruitment</span>
          </a>
        </div>

      </main>
      <ContactFooter />
    </>
  );
}

"use client";

import { useState } from 'react';
import styles from './contact.module.css';
import Header from '@/components/Header/Header';
import ContactFooter from '@/components/ContactFooter/ContactFooter';
import FadeIn from '@/components/FadeIn';
import { 
  PhoneCall, MessageCircle, Mail, MapPin, 
  Calendar, ArrowRight, ChevronDown, Clock, 
  Car, Accessibility, Train, Navigation, ArrowUp
} from 'lucide-react';

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleGeneralSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your enquiry has been submitted. Our team will contact you within 24 hours.");
  };

  const handleVisitSubmit = (e) => {
    e.preventDefault();
    alert("Site visit requested successfully! We will confirm your slot shortly.");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const faqs = [
    { q: "How do I book a site visit?", a: "You can book a site visit directly using the form on this page. Select your preferred project, date, and time, and our team will confirm the appointment." },
    { q: "How quickly will someone contact me?", a: "For general enquiries, our property consultants typically respond within 24 business hours. For urgent matters, please use the Call or WhatsApp options." },
    { q: "Can I schedule a virtual meeting?", a: "Yes, we offer virtual tours and video consultations for clients who cannot visit in person. Just mention 'Virtual Meeting' in the message box." },
    { q: "How can I download brochures?", a: "Brochures are available for download on individual project pages under the 'Our Projects' section." },
    { q: "Where is your office?", a: "Our corporate headquarters is located in Delhi NCR, with regional sales offices in Noida and Lucknow. See the map below for exact coordinates." }
  ];

  return (
    <>
      <Header />
      <main className={styles.pageContainer}>

        {/* 1. Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <FadeIn direction="up">
              <h1 className={styles.heroTitle}>Let's Build Your Future Together</h1>
              <p className={styles.heroSubtitle}>
                Whether you're looking for your dream property, a smart investment, or have questions about our projects, our team is here to assist you every step of the way.
              </p>
              <div className={styles.heroButtons}>
                <a href="tel:+919876543210" className={styles.btnPrimary}>
                  <PhoneCall size={20} /> Call Us
                </a>
                <a href="#book-visit" className={styles.btnOutline}>
                  <Calendar size={20} /> Schedule Site Visit
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 2. Quick Contact Cards */}
        <div className={styles.container}>
          <div className={styles.quickGrid}>
            <FadeIn direction="up" delay={0.1}>
              <div className={styles.quickCard}>
                <PhoneCall size={36} className={styles.quickIcon} />
                <h3>Call Us</h3>
                <p>Speak directly with our property consultants.</p>
                <a href="tel:+919876543210" className={styles.quickLink}>+91 98765 43210</a>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <div className={styles.quickCard}>
                <MessageCircle size={36} className={styles.quickIcon} />
                <h3>WhatsApp</h3>
                <p>Chat instantly with our sales team.</p>
                <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className={styles.quickLink}>Start Conversation</a>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <div className={styles.quickCard}>
                <Mail size={36} className={styles.quickIcon} />
                <h3>Email</h3>
                <p>Get detailed information and brochures.</p>
                <a href="mailto:info@indiahousing.org" className={styles.quickLink}>info@indiahousing.org</a>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.4}>
              <div className={styles.quickCard}>
                <MapPin size={36} className={styles.quickIcon} />
                <h3>Visit Us</h3>
                <p>Meet our real estate experts in person.</p>
                <a href="#locations" className={styles.quickLink}>View Locations</a>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* 3. Forms Section (General + Site Visit) */}
        <section className={`${styles.section} ${styles.formsWrapper}`}>
          <div className={`${styles.container} ${styles.formSplit}`}>
            <FadeIn direction="right" className={styles.formLeft}>
              <h2>Send Us A Message</h2>
              <p>We're dedicated to providing exceptional service. Fill out the form, and our property experts will get back to you within 24 hours to discuss your requirements.</p>
            </FadeIn>
            
            <FadeIn direction="left">
              <div className={styles.formBox}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>General Enquiry</h3>
                <form onSubmit={handleGeneralSubmit}>
                  <div className={styles.formGrid}>
                    <div className={styles.inputGroup}>
                      <label>Full Name</label>
                      <input type="text" required />
                    </div>
                    <div className={styles.inputGroup}>
                      <label>Phone Number</label>
                      <input type="tel" required />
                    </div>
                    <div className={styles.inputGroup}>
                      <label>Email Address</label>
                      <input type="email" required />
                    </div>
                    <div className={styles.inputGroup}>
                      <label>City</label>
                      <input type="text" required />
                    </div>
                    <div className={styles.inputGroup}>
                      <label>Interested Project</label>
                      <select>
                        <option value="">Select Project</option>
                        <option value="ihpl-signature">IHPL Signature</option>
                        <option value="ihpl-greens">IHPL Greens</option>
                        <option value="ihpl-commercial">IHPL Commercial Park</option>
                        <option value="other">Other / Not Sure</option>
                      </select>
                    </div>
                    <div className={styles.inputGroup}>
                      <label>Purpose</label>
                      <select required>
                        <option value="">Select Purpose</option>
                        <option value="Buying">Buying a Home</option>
                        <option value="Investment">Real Estate Investment</option>
                        <option value="Partnership">Channel Partnership</option>
                        <option value="General">General Enquiry</option>
                      </select>
                    </div>
                    <div className={`${styles.inputGroup} ${styles.full}`}>
                      <label>Message</label>
                      <textarea placeholder="How can we help you?" required></textarea>
                    </div>
                  </div>
                  <button type="submit" className={styles.submitBtn}>Send Enquiry</button>
                </form>
              </div>
            </FadeIn>
          </div>

          <div id="book-visit" className={styles.container} style={{ marginTop: '80px' }}>
            <FadeIn direction="up">
              <div className={styles.formBox} style={{ background: '#f8f8fa', border: '1px solid #eaeaea' }}>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>Book a Site Visit</h3>
                <p style={{ color: '#666', marginBottom: '30px' }}>Experience our developments firsthand. Schedule an assisted tour with our experts.</p>
                <form onSubmit={handleVisitSubmit}>
                  <div className={styles.formGrid}>
                    <div className={styles.inputGroup}>
                      <label>Select Project</label>
                      <select required>
                        <option value="">Choose a location...</option>
                        <option value="ihpl-signature">IHPL Signature (Delhi)</option>
                        <option value="ihpl-greens">IHPL Greens (Noida)</option>
                        <option value="ihpl-commercial">IHPL Commercial Park (Lucknow)</option>
                      </select>
                    </div>
                    <div className={styles.inputGroup}>
                      <label>Preferred Date</label>
                      <input type="date" required />
                    </div>
                    <div className={styles.inputGroup}>
                      <label>Preferred Time</label>
                      <select required>
                        <option value="">Select Time</option>
                        <option value="Morning">Morning (10 AM - 12 PM)</option>
                        <option value="Afternoon">Afternoon (12 PM - 3 PM)</option>
                        <option value="Evening">Evening (3 PM - 6 PM)</option>
                      </select>
                    </div>
                    <div className={styles.inputGroup}>
                      <label>Number of Visitors</label>
                      <input type="number" min="1" max="10" defaultValue="1" required />
                    </div>
                    <div className={styles.inputGroup}>
                      <label>Your Name</label>
                      <input type="text" required />
                    </div>
                    <div className={styles.inputGroup}>
                      <label>Phone Number</label>
                      <input type="tel" required />
                    </div>
                  </div>
                  <button type="submit" className={styles.submitBtn} style={{ background: 'var(--color-gold)', color: '#000' }}>Confirm Booking</button>
                </form>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 4. Office Locations & Departments */}
        <section id="locations" className={`${styles.section} ${styles.grayBg}`}>
          <div className={styles.container}>
            <FadeIn direction="up">
              <div className={styles.sectionHeader}>
                <span className={styles.sectionTag}>Locations</span>
                <h2 className={styles.sectionTitle}>Our Offices</h2>
              </div>
            </FadeIn>

            <div className={styles.officeGrid}>
              <FadeIn direction="up" delay={0.1}>
                <div className={styles.officeCard}>
                  <h3>Corporate Office</h3>
                  <div className={styles.officeDetail}><MapPin className={styles.officeIcon} size={20}/> <span>Unit 401, Cyber Hub, Phase 2, Gurugram, Haryana 122002</span></div>
                  <div className={styles.officeDetail}><PhoneCall className={styles.officeIcon} size={20}/> <span>+91 124 456 7890</span></div>
                  <div className={styles.officeDetail}><Mail className={styles.officeIcon} size={20}/> <span>corporate@indiahousing.org</span></div>
                  <a href="#" className={styles.mapBtn}>Get Directions <ArrowRight size={16}/></a>
                </div>
              </FadeIn>
              <FadeIn direction="up" delay={0.2}>
                <div className={styles.officeCard}>
                  <h3>Sales Office - Noida</h3>
                  <div className={styles.officeDetail}><MapPin className={styles.officeIcon} size={20}/> <span>Sector 62, Electronic City, Noida, UP 201309</span></div>
                  <div className={styles.officeDetail}><PhoneCall className={styles.officeIcon} size={20}/> <span>+91 120 456 7890</span></div>
                  <div className={styles.officeDetail}><Mail className={styles.officeIcon} size={20}/> <span>noida.sales@indiahousing.org</span></div>
                  <a href="#" className={styles.mapBtn}>Get Directions <ArrowRight size={16}/></a>
                </div>
              </FadeIn>
              <FadeIn direction="up" delay={0.3}>
                <div className={styles.officeCard}>
                  <h3>Regional Office - Lucknow</h3>
                  <div className={styles.officeDetail}><MapPin className={styles.officeIcon} size={20}/> <span>Gomti Nagar Extension, Lucknow, UP 226010</span></div>
                  <div className={styles.officeDetail}><PhoneCall className={styles.officeIcon} size={20}/> <span>+91 522 456 7890</span></div>
                  <div className={styles.officeDetail}><Mail className={styles.officeIcon} size={20}/> <span>lucknow@indiahousing.org</span></div>
                  <a href="#" className={styles.mapBtn}>Get Directions <ArrowRight size={16}/></a>
                </div>
              </FadeIn>
            </div>

            {/* Departments */}
            <div className={styles.deptGrid}>
              <div className={styles.deptCard}>
                <h4>Sales</h4>
                <a href="mailto:sales@indiahousing.org">sales@indiahousing.org</a>
              </div>
              <div className={styles.deptCard}>
                <h4>Customer Support</h4>
                <a href="mailto:support@indiahousing.org">support@indiahousing.org</a>
              </div>
              <div className={styles.deptCard}>
                <h4>Careers</h4>
                <a href="mailto:careers@indiahousing.org">careers@indiahousing.org</a>
              </div>
              <div className={styles.deptCard}>
                <h4>Partnerships</h4>
                <a href="mailto:partners@indiahousing.org">partners@indiahousing.org</a>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Interactive Map */}
        <section className={styles.mapSection}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112133.72591605634!2d77.01438902528775!3d28.568461741753173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className={styles.mapIframe}
          ></iframe>
          <div className={styles.mapOverlay}>
            <div className={styles.mapFeature}><Car size={24} color="var(--color-gold)"/> Parking Available</div>
            <div className={styles.mapFeature}><Accessibility size={24} color="var(--color-gold)"/> Wheelchair Accessible</div>
            <div className={styles.mapFeature}><Train size={24} color="var(--color-gold)"/> Nearest Metro</div>
          </div>
        </section>

        {/* 7. Business Hours & FAQ */}
        <section className={styles.section} style={{ background: '#fff' }}>
          <div className={`${styles.container} ${styles.hoursFaqGrid}`}>
            
            <FadeIn direction="right">
              <div className={styles.hoursCard}>
                <h3>Business Hours</h3>
                <div className={styles.hourRow}>
                  <div className={styles.hourDay}>Monday – Friday</div>
                  <div className={styles.hourTime}>09:30 AM – 06:30 PM</div>
                </div>
                <div className={styles.hourRow}>
                  <div className={styles.hourDay}>Saturday</div>
                  <div className={styles.hourTime}>10:00 AM – 04:00 PM</div>
                </div>
                <div className={styles.hourRow}>
                  <div className={styles.hourDay}>Sunday</div>
                  <div className={styles.hourTime}>Closed</div>
                </div>
                <p style={{ marginTop: '30px', color: '#888', fontSize: '0.9rem' }}>Site visits can be arranged on Sundays by prior appointment only.</p>
              </div>
            </FadeIn>

            <FadeIn direction="left">
              <h2 className={styles.sectionTitle} style={{ marginBottom: '40px' }}>Frequently Asked Questions</h2>
              {faqs.map((faq, i) => (
                <div key={i} className={styles.faqItem}>
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
              ))}
            </FadeIn>

          </div>
        </section>

        {/* Final CTA */}
        <section className={styles.finalCta}>
          <FadeIn direction="up">
            <div className={styles.finalCtaContent}>
              <h2 className={styles.heroTitle}>Your Next Property Journey Starts Here</h2>
              <p className={styles.heroSubtitle}>
                Our experts are ready to guide you—from your first inquiry to the day you receive your keys.
              </p>
              <div className={styles.heroButtons} style={{ marginTop: '40px' }}>
                <a href="#book-visit" className={styles.btnPrimary}>Book Site Visit</a>
                <a href="tel:+919876543210" className={styles.btnOutline}>Speak To An Expert</a>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Floating Actions */}
        <div className={styles.floatingNav}>
          <a href="tel:+919876543210" className={styles.floatBtn} title="Call Us"><PhoneCall size={24} /></a>
          <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className={styles.floatBtn} title="WhatsApp"><MessageCircle size={24} /></a>
          <a href="#book-visit" className={styles.floatBtn} title="Book Visit"><Calendar size={24} /></a>
          <button onClick={scrollToTop} className={styles.floatBtn} title="Scroll to Top"><ArrowUp size={24} /></button>
        </div>

      </main>
      <ContactFooter />
    </>
  );
}

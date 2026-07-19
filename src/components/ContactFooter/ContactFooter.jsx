import styles from './ContactFooter.module.css';
import { MapPin, Phone, Mail } from 'lucide-react';
import FadeIn from '../FadeIn';

export default function ContactFooter() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <FadeIn direction="right">
            <div className={styles.contactInfo}>
              <h2>Get In Touch</h2>
              <p>Ready to find your dream space? Contact our team of experts for personalized assistance.</p>
              
              <div className={styles.infoItem}>
                <MapPin className={styles.icon} />
                <span>IHPL Tower, Nariman Point, Mumbai - 400021</span>
              </div>
              <div className={styles.infoItem}>
                <Phone className={styles.icon} />
                <span>+91 22 1234 5678</span>
              </div>
              <div className={styles.infoItem}>
                <Mail className={styles.icon} />
                <span>contact@ihpl.in</span>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn direction="left" delay={0.2}>
            <div className={styles.formWrapper}>
              <form className={styles.form}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Full Name</label>
                  <input type="text" className={styles.input} placeholder="John Doe" />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Email Address</label>
                  <input type="email" className={styles.input} placeholder="john@example.com" />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Message</label>
                  <textarea className={styles.textarea} placeholder="How can we help you?"></textarea>
                </div>
                <button type="button" className="btn btn-secondary" style={{ width: '100%' }}>
                  Send Message
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} India Housing Projects Limited. All rights reserved.</p>
          <div className={styles.social}>
            <a href="#" className={styles.socialIcon}>Facebook</a>
            <a href="#" className={styles.socialIcon}>Twitter</a>
            <a href="#" className={styles.socialIcon}>Instagram</a>
            <a href="#" className={styles.socialIcon}>LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

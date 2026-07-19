import styles from './ContactFooter.module.css';
import { MapPin, Phone, Mail } from 'lucide-react';

const Instagram = ({size}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const Twitter = ({size}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>;
const Facebook = ({size}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const Linkedin = ({size}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
import FadeIn from '../FadeIn';

export default function ContactFooter() {
  return (
    <footer id="contact" className={styles.footer}>
      {/* CTA Section */}
      <div className={styles.ctaSection}>
        <FadeIn direction="up">
          <div className={styles.ctaContent}>
            <h2>Explore The World In Style<br />With Your Dream Property</h2>
            <p>Embark On An Unforgettable Journey With IHPL. Select Your<br />Dream Property, Choose Your Location, And Explore The World In Style Today!</p>
            <div className={styles.ctaButtons}>
              <a href="#book" className={styles.bookBtn}>BOOK NOW</a>
              <a href="#contact" className={styles.contactBtn}>CONTACT US</a>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Footer Main */}
      <div className={styles.footerMain}>
        <div className={`container ${styles.grid}`}>
          
          {/* Column 1: Logo & Follow Us */}
          <div className={styles.col}>
            <a href="/" className={styles.logo} style={{ borderBottom: 'none', paddingBottom: '1rem' }}>
              <img src="/ihpl.png" alt="IHPL Logo" style={{ height: '100px', objectFit: 'contain' }} />
            </a>
            <p className={styles.tagline}>
              Redefining luxury real estate experiences<br />with unparalleled elegance and service.
            </p>
            <h4 className={styles.followTitle}>Follow Us</h4>
            <div className={styles.social}>
              <a href="#"><Instagram size={18} /></a>
              <a href="#"><Twitter size={18} /></a>
              <a href="#"><Facebook size={18} /></a>
              <a href="#"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Company</h4>
            <ul className={styles.links}>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About us</a></li>
              <li><a href="#projects">VIP projects</a></li>
              <li><a href="#packages">Packages</a></li>
              <li><a href="#services">Add-ons services</a></li>
              <li><a href="#why">Why us</a></li>
              <li><a href="#contact">Contact us</a></li>
            </ul>
          </div>

          {/* Column 3: Help */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Help</h4>
            <ul className={styles.links}>
              <li><a href="#support">Customer Support</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Contact</h4>
            <ul className={styles.contactList}>
              <li>
                <MapPin size={18} className={styles.contactIcon} />
                <span>IHPL Tower, Nariman Point,<br />Mumbai - 400021</span>
              </li>
              <li>
                <Phone size={18} className={styles.contactIcon} />
                <span>+91 22 1234 5678</span>
              </li>
              <li>
                <Mail size={18} className={styles.contactIcon} />
                <span>info@indiahousing.org</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <div className={styles.bottom}>
        <p>Copyright &copy; {new Date().getFullYear()} India Housing Projects Limited all rights reserved.</p>
      </div>
    </footer>
  );
}

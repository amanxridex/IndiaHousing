import styles from './ContactFooter.module.css';
import { MapPin, Phone, Mail, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';
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
            <a href="/" className={styles.logo}>
              <span className={styles.logoIcon}>&#10036;</span> IHPL
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
                <span>info@ihpl.in</span>
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

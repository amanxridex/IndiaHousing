import styles from './EnquiryPopup.module.css';
import { X } from 'lucide-react';

export default function EnquiryPopup({ isOpen, onClose, selectedProject = "" }) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <button className={styles.closeBtn} onClick={onClose}><X size={24} /></button>
        <h2>Register Your Interest</h2>
        <p>Fill out the form below and our experts will get in touch with you shortly.</p>
        
        <form className={styles.form} onSubmit={(e) => { e.preventDefault(); alert('Enquiry Submitted!'); onClose(); }}>
          <input type="text" placeholder="Full Name *" required className={styles.input} />
          <div className={styles.row}>
            <input type="tel" placeholder="Phone Number *" required className={styles.input} />
            <input type="email" placeholder="Email Address" className={styles.input} />
          </div>
          <select className={styles.input} defaultValue={selectedProject}>
            <option value="" disabled>Select Project</option>
            <option value="the-crown-residences">The Crown Residences</option>
            <option value="ihpl-tech-park">IHPL Tech Park</option>
            <option value="serenity-villas">Serenity Villas</option>
            <option value="majesty-towers">Majesty Towers</option>
            <option value="the-oasis-gurgaon">The Oasis</option>
            <option value="platinum-estates">Platinum Estates</option>
          </select>
          <input type="date" className={styles.input} placeholder="Preferred Visit Date" />
          <textarea placeholder="Message (Optional)" rows={4} className={styles.textarea}></textarea>
          
          <button type="submit" className={styles.submitBtn}>Submit Request</button>
        </form>
      </div>
    </div>
  );
}

"use client";
import styles from './FloatingCTA.module.css';
import { Phone, MessageCircle, Calendar, Mail } from 'lucide-react';
import { useState } from 'react';

export default function FloatingCTA({ onOpenEnquiry }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${styles.floatingWrapper} ${isOpen ? styles.open : ''}`}>
      <button className={styles.mainBtn} onClick={() => setIsOpen(!isOpen)}>
        <Phone size={24} />
      </button>

      <div className={styles.actionMenu}>
        <button className={styles.actionItem} onClick={onOpenEnquiry}>
          <Mail size={18} />
          <span>Enquire</span>
        </button>
        <button className={styles.actionItem}>
          <Calendar size={18} />
          <span>Site Visit</span>
        </button>
        <a href="https://wa.me/+911353144161" target="_blank" rel="noreferrer" className={styles.actionItem}>
          <MessageCircle size={18} />
          <span>WhatsApp</span>
        </a>
        <a href="tel:+911353144161" className={styles.actionItem}>
          <Phone size={18} />
          <span>Call Us</span>
        </a>
      </div>
    </div>
  );
}

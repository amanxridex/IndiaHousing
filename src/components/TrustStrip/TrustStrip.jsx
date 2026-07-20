import styles from './TrustStrip.module.css';
import { FileText, Landmark, ShieldCheck, Headphones, CheckCircle } from 'lucide-react';

export default function TrustStrip() {
  return (
    <div className={styles.stripWrapper}>
      <div className={styles.stripInner}>
        <div className={styles.item}>
          <FileText className={styles.icon} />
          <span>100% Legal Docs</span>
        </div>
        <div className={styles.item}>
          <Landmark className={styles.icon} />
          <span>Bank Loan Available</span>
        </div>
        <div className={styles.item}>
          <ShieldCheck className={styles.icon} />
          <span>Transparent Pricing</span>
        </div>
        <div className={styles.item}>
          <Headphones className={styles.icon} />
          <span>Professional Support</span>
        </div>
        <div className={styles.item}>
          <CheckCircle className={styles.icon} />
          <span>RERA Registered</span>
        </div>
      </div>
    </div>
  );
}

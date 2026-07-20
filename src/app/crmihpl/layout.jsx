import Sidebar from './Sidebar';
import styles from './crm.module.css';

export default function CRMLayout({ children }) {
  return (
    <div className={styles.mainLayout}>
      <Sidebar />
      {children}
    </div>
  );
}

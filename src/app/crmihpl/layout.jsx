"use client";

import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar';
import styles from './crm.module.css';

export default function CRMLayout({ children }) {
  const pathname = usePathname();
  const isLogin = pathname === '/crmihpl/login';

  if (isLogin) {
    return <div style={{ width: '100%', minHeight: '100vh' }}>{children}</div>;
  }

  return (
    <div className={styles.mainLayout}>
      <Sidebar />
      {children}
    </div>
  );
}

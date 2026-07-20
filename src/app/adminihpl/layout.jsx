"use client";

import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar';

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const isLogin = pathname === '/adminihpl/login';

  if (isLogin) {
    return <div style={{ width: '100%', minHeight: '100vh' }}>{children}</div>;
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f9fbfd', fontFamily: 'Inter, sans-serif', display: 'flex' }}>
      <Sidebar />
      {/* The main content area handles its own margins to account for the fixed sidebar */}
      {children}
    </div>
  );
}

"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, BarChart3, Building2, Users, 
  MessageSquare, FileDown, Megaphone, FileText, 
  Settings, LogOut, Shield
} from 'lucide-react';
import styles from './admin.module.css';

export default function Sidebar() {
  const pathname = usePathname();
  
  // Hide sidebar on the login page
  if (pathname === '/adminihpl/login') return null;

  const navItems = [
    { name: 'Dashboard', path: '/adminihpl', icon: LayoutDashboard },
    { name: 'Analytics', path: '/adminihpl/analytics', icon: BarChart3 },
    { name: 'Projects', path: '/adminihpl/projects', icon: Building2 },
    { name: 'Downloads', path: '/adminihpl/downloads', icon: FileDown },
    { name: 'Marketing', path: '/adminihpl/marketing', icon: Megaphone },
    { name: 'Reports', path: '/adminihpl/reports', icon: FileText },
    { name: 'Users', path: '/adminihpl/users', icon: Users },
    { name: 'Settings', path: '/adminihpl/settings', icon: Settings },
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <Shield size={28} className={styles.sidebarIcon} />
        <h2>Command Center</h2>
      </div>
      <nav className={styles.navMenu}>
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link 
              key={item.name}
              href={item.path}
              className={`${styles.navItem} ${isActive ? styles.active : ''}`}
            >
              <item.icon size={20} />
              {item.name}
            </Link>
          );
        })}
        <div style={{ flex: 1 }}></div>
        <Link href="/adminihpl/login" className={`${styles.navItem} ${styles.logout}`}>
          <LogOut size={20} />
          Logout
        </Link>
      </nav>
    </aside>
  );
}

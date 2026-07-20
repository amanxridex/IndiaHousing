"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, Users, Building2, UserSquare2, 
  MapPin, PhoneForwarded, CheckSquare, CalendarDays, 
  FileBox, BarChart4, Bell, ShieldAlert, Settings, LogOut, UserPlus
} from 'lucide-react';
import styles from './crm.module.css';

export default function CRMSidebar() {
  const pathname = usePathname();
  
  if (pathname === '/crmihpl/login') return null;

  const navItems = [
    { name: 'Dashboard', path: '/crmihpl', icon: LayoutDashboard },
    { name: 'Leads', path: '/crmihpl/leads', icon: Users },
    { name: 'Projects', path: '/crmihpl/projects', icon: Building2 },
    { name: 'Customers', path: '/crmihpl/customers', icon: UserSquare2 },
    { name: 'Employees', path: '/crmihpl/employees', icon: Users },
    { name: 'Site Visits', path: '/crmihpl/visits', icon: MapPin },
    { name: 'Follow Ups', path: '/crmihpl/followups', icon: PhoneForwarded },
    { name: 'Tasks', path: '/crmihpl/tasks', icon: CheckSquare },
    { name: 'Calendar', path: '/crmihpl/calendar', icon: CalendarDays },
    { name: 'Documents', path: '/crmihpl/documents', icon: FileBox },
    { name: 'Reports', path: '/crmihpl/reports', icon: BarChart4 },
    { name: 'Notifications', path: '/crmihpl/notifications', icon: Bell },
    { name: 'Roles & Perms', path: '/crmihpl/roles', icon: ShieldAlert },
    { name: 'User Management', path: '/crmihpl/users', icon: UserPlus },
    { name: 'Settings', path: '/crmihpl/settings', icon: Settings },
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <div style={{ background: '#3b82f6', padding: '8px', borderRadius: '8px' }}>
          <Building2 size={24} color="#fff" />
        </div>
        <h2>IHPL CRM</h2>
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
        <Link href="/crmihpl/login" className={`${styles.navItem}`} style={{ marginTop: '20px' }}>
          <LogOut size={20} />
          Logout
        </Link>
      </nav>
    </aside>
  );
}

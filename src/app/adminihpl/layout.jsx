import Sidebar from './Sidebar';

export default function AdminLayout({ children }) {
  return (
    <div style={{ minHeight: '100vh', background: '#f9fbfd', fontFamily: 'Inter, sans-serif', display: 'flex' }}>
      <Sidebar />
      {/* The main content area handles its own margins to account for the fixed sidebar */}
      {children}
    </div>
  );
}

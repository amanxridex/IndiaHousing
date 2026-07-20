import styles from '../crm.module.css';
import { FileText, Image as ImageIcon, File, Download, Upload } from 'lucide-react';

export default function DocumentsPage() {
  return (
    <main className={styles.mainContent}>
      <header className={styles.header} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <h1>Documents Vault</h1>
          <p style={{ color: '#64748b' }}>Secure storage for customer KYC, agreements, and project files.</p>
        </div>
        <button style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 600 }}><Upload size={18}/> Upload File</button>
      </header>

      <div className={styles.card} style={{ padding: 0, overflow: 'hidden' }}>
        <table className={styles.dataTable}>
          <thead style={{ background: '#f8fafc' }}>
            <tr>
              <th>File Name</th>
              <th>Document Type</th>
              <th>Linked Entity</th>
              <th>Uploaded By</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ padding: '8px', background: '#fee2e2', color: '#ef4444', borderRadius: '8px' }}><FileText size={20}/></div>
                <strong style={{ color: '#0f172a' }}>Ravi_Verma_Aadhar.pdf</strong>
              </td>
              <td>KYC</td>
              <td>Ravi Verma (C-001)</td>
              <td>Aman</td>
              <td>Today, 10:45 AM</td>
              <td><button style={{ background: 'none', border: 'none', color: '#3b82f6', cursor: 'pointer' }}><Download size={18}/></button></td>
            </tr>
            <tr>
              <td style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ padding: '8px', background: '#dcfce7', color: '#16a34a', borderRadius: '8px' }}><File size={20}/></div>
                <strong style={{ color: '#0f172a' }}>GF45_Agreement_Signed.docx</strong>
              </td>
              <td>Agreement</td>
              <td>Ganga Farms</td>
              <td>Sneha</td>
              <td>Yesterday</td>
              <td><button style={{ background: 'none', border: 'none', color: '#3b82f6', cursor: 'pointer' }}><Download size={18}/></button></td>
            </tr>
            <tr>
              <td style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ padding: '8px', background: '#fef3c7', color: '#d97706', borderRadius: '8px' }}><ImageIcon size={20}/></div>
                <strong style={{ color: '#0f172a' }}>Payment_Receipt_Q3.jpg</strong>
              </td>
              <td>Payment Receipt</td>
              <td>Sunita Sharma (C-002)</td>
              <td>Aman</td>
              <td>Jul 18, 2026</td>
              <td><button style={{ background: 'none', border: 'none', color: '#3b82f6', cursor: 'pointer' }}><Download size={18}/></button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}

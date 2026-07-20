"use client";

import { 
  User, TrendingUp, Home, Smartphone, AlertTriangle, Target,
  PhoneCall, MapPin, Activity, CheckCircle, Download
} from 'lucide-react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';
import styles from './admin.module.css';

const visitorData = [
  { name: 'Jan', visitors: 4000 },
  { name: 'Feb', visitors: 5500 },
  { name: 'Mar', visitors: 6000 },
  { name: 'Apr', visitors: 8200 },
  { name: 'May', visitors: 11000 },
  { name: 'Jun', visitors: 14500 },
  { name: 'Jul', visitors: 18000 },
];

const trafficData = [
  { name: 'Google Organic', value: 45 },
  { name: 'Direct', value: 25 },
  { name: 'Social', value: 20 },
  { name: 'Referral', value: 10 },
];
const COLORS = ['#16a34a', '#111111', '#ea580c', '#3b82f6'];

export default function AdminDashboard() {
  return (
    <>
      {/* Main Content */}
      <main className={styles.mainContent}>
        
        {/* Top Header */}
        <header className={styles.header}>
          <div className={styles.welcome}>
            <h1>Good Morning Aman ☀️</h1>
            <p>Welcome to your IHPL Command Center.</p>
          </div>
          <div className={styles.headerActions}>
            <button className={styles.profileBtn}>
              <User size={20} />
            </button>
          </div>
        </header>

        {/* AI Insights Panel */}
        <div className={styles.aiInsights}>
          <div className={styles.aiHeader}>
            <Activity size={24} />
            <span>AI Executive Insights</span>
          </div>
          <ul className={styles.aiList}>
            <li><TrendingUp size={18} className={styles.aiIcon} color="#16a34a"/> Website traffic increased by <strong>18%</strong> compared to last week.</li>
            <li><Home size={18} className={styles.aiIcon} color="#2563eb"/> <strong>Ganga Farms</strong> generated the highest number of enquiries today.</li>
            <li><Smartphone size={18} className={styles.aiIcon} color="#8b5cf6"/> Mobile visitors account for <strong>72%</strong> of total traffic.</li>
            <li><AlertTriangle size={18} className={styles.aiIcon} color="#ea580c"/> The Contact page has a higher-than-average drop-off rate.</li>
            <li><Target size={18} className={styles.aiIcon} color="#eab308"/> Google Ads generated <strong>65%</strong> of this week's qualified leads.</li>
          </ul>
        </div>

        {/* KPIs (5 Columns) */}
        <div className={styles.kpiGrid} style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}>
          <div className={styles.kpiCard}>
            <div className={styles.kpiTitle}>Visitors</div>
            <div className={styles.kpiValue}>145,287</div>
          </div>
          <div className={styles.kpiCard}>
            <div className={styles.kpiTitle}>Calls</div>
            <div className={styles.kpiValue}>842</div>
          </div>
          <div className={styles.kpiCard}>
            <div className={styles.kpiTitle}>WhatsApp</div>
            <div className={styles.kpiValue}>2,105</div>
          </div>
          <div className={styles.kpiCard}>
            <div className={styles.kpiTitle}>Downloads</div>
            <div className={styles.kpiValue}>4,392</div>
          </div>
          <div className={styles.kpiCard}>
            <div className={styles.kpiTitle}>Site Visits</div>
            <div className={styles.kpiValue}>340</div>
          </div>
        </div>

        {/* Large Visitor Chart */}
        <div className={styles.card} style={{ marginBottom: '24px' }}>
          <div className={styles.cardHeader}>
            <div className={styles.cardTitle}>Visitors Trend</div>
            <select style={{ padding: '6px 12px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
              <option>Last 30 Days</option>
              <option>Last 6 Months</option>
              <option>This Year</option>
            </select>
          </div>
          <div className={styles.chartContainer}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={visitorData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8' }} />
                <RechartsTooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}/>
                <Line type="monotone" dataKey="visitors" stroke="#111" strokeWidth={3} dot={{ r: 4, fill: '#111', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Split Row 1: Live Visitors | Traffic Sources */}
        <div className={styles.gridHalf}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.cardTitle}>Live Visitors</div>
              <div className={styles.liveBadge} style={{ boxShadow: 'none', border: '1px solid #e2e8f0', padding: '4px 12px' }}>
                <span className={styles.dot}></span> 17 Online
              </div>
            </div>
            <ul className={styles.feedList}>
              <li className={styles.feedItem}>
                <MapPin className={styles.feedIcon} size={36} />
                <div className={styles.feedContent}>
                  <p><strong>Delhi, India</strong></p>
                  <span className={styles.feedTime}>Viewing /projects/ihpl-signature</span>
                </div>
              </li>
              <li className={styles.feedItem}>
                <MapPin className={styles.feedIcon} size={36} />
                <div className={styles.feedContent}>
                  <p><strong>Dubai, UAE</strong></p>
                  <span className={styles.feedTime}>Viewing /contact</span>
                </div>
              </li>
              <li className={styles.feedItem}>
                <MapPin className={styles.feedIcon} size={36} />
                <div className={styles.feedContent}>
                  <p><strong>Noida, India</strong></p>
                  <span className={styles.feedTime}>Viewing /why-ihpl</span>
                </div>
              </li>
            </ul>
          </div>
          
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.cardTitle}>Traffic Sources</div>
            </div>
            <div className={styles.chartContainer} style={{ height: '220px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={trafficData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                    {trafficData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <RechartsTooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '16px', justifyContent: 'center' }}>
              {trafficData.map((entry, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: '#64748b' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: COLORS[index] }}></span>
                  {entry.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Split Row 2: Top Projects | Recent Leads */}
        <div className={styles.gridHalf}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.cardTitle}>Top Projects</div>
            </div>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Project Name</th>
                  <th>Views</th>
                  <th>Leads</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ fontWeight: 500 }}>IHPL Signature</td>
                  <td>12,450</td>
                  <td>340</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 500 }}>Ganga Farms</td>
                  <td>8,920</td>
                  <td>215</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 500 }}>IHPL Commercial</td>
                  <td>6,104</td>
                  <td>180</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.cardTitle}>Recent Activity</div>
            </div>
            <ul className={styles.feedList}>
              <li className={styles.feedItem}>
                <CheckCircle className={styles.feedIcon} size={36} color="#16a34a" />
                <div className={styles.feedContent}>
                  <p><strong>New Site Visit Booked</strong></p>
                  <span className={styles.feedTime}>For Ganga Farms • Tomorrow 10 AM</span>
                </div>
              </li>
              <li className={styles.feedItem}>
                <PhoneCall className={styles.feedIcon} size={36} />
                <div className={styles.feedContent}>
                  <p><strong>Phone Call Initiated</strong></p>
                  <span className={styles.feedTime}>From Contact Page</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </main>
    </>
  );
}

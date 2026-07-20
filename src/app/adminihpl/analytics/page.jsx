"use client";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import styles from '../admin.module.css';

const trafficData = [{name: 'Google', value: 50}, {name: 'Direct', value: 20}, {name: 'Social', value: 20}, {name: 'Referral', value: 10}];
const COLORS = ['#16a34a', '#111111', '#ea580c', '#3b82f6'];

export default function AnalyticsPage() {
  return (
    <main className={styles.mainContent}>
      <header className={styles.header}>
        <div className={styles.welcome}>
          <h1>Analytics</h1>
          <p>Why is it happening?</p>
        </div>
      </header>

      <div className={styles.kpiGrid}>
        <div className={styles.kpiCard}><div className={styles.kpiTitle}>Visitors</div><div className={styles.kpiValue}>145K</div></div>
        <div className={styles.kpiCard}><div className={styles.kpiTitle}>Sessions</div><div className={styles.kpiValue}>182K</div></div>
        <div className={styles.kpiCard}><div className={styles.kpiTitle}>Users</div><div className={styles.kpiValue}>98K</div></div>
        <div className={styles.kpiCard}><div className={styles.kpiTitle}>Page Views</div><div className={styles.kpiValue}>412K</div></div>
        <div className={styles.kpiCard}><div className={styles.kpiTitle}>Bounce Rate</div><div className={styles.kpiValue}>42%</div></div>
        <div className={styles.kpiCard}><div className={styles.kpiTitle}>Avg Session</div><div className={styles.kpiValue}>3m 12s</div></div>
      </div>

      <div className={styles.grid2}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle} style={{marginBottom: '20px'}}>Visitor Trends</h2>
          <div className={styles.chartContainer}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={[{n:'Mon',v:10},{n:'Tue',v:15},{n:'Wed',v:25},{n:'Thu',v:22},{n:'Fri',v:35},{n:'Sat',v:45},{n:'Sun',v:40}]}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="n" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="v" stroke="#B2FF59" strokeWidth={4} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle} style={{marginBottom: '20px'}}>Traffic Sources</h2>
          <div className={styles.chartContainer} style={{height:'220px'}}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart><Pie data={trafficData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                {trafficData.map((e, i) => <Cell key={i} fill={COLORS[i%COLORS.length]}/>)}
              </Pie></PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className={styles.gridHalf}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle} style={{marginBottom: '20px'}}>Top Cities</h2>
          <table className={styles.dataTable}>
            <thead><tr><th>City</th><th>Visitors</th></tr></thead>
            <tbody>
              <tr><td>Delhi</td><td>45,000</td></tr>
              <tr><td>Dubai</td><td>22,000</td></tr>
              <tr><td>Noida</td><td>18,000</td></tr>
            </tbody>
          </table>
        </div>
        <div className={styles.card}>
          <h2 className={styles.cardTitle} style={{marginBottom: '20px'}}>Most Viewed Pages</h2>
          <table className={styles.dataTable}>
            <thead><tr><th>Page</th><th>Views</th></tr></thead>
            <tbody>
              <tr><td>Homepage</td><td>120K</td></tr>
              <tr><td>Projects</td><td>85K</td></tr>
              <tr><td>Contact</td><td>42K</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

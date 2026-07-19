import styles from './Services.module.css';
import { Building2, Key, TrendingUp } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Real Estate Development',
    description: 'Developing state-of-the-art residential and commercial properties with world-class amenities.',
    icon: <Building2 size={40} />
  },
  {
    id: 2,
    title: 'Property Management',
    description: 'Comprehensive property management services to maintain your investment in pristine condition.',
    icon: <Key size={40} />
  },
  {
    id: 3,
    title: 'Investment Consulting',
    description: 'Expert advice and market analysis to help you make informed real estate investment decisions.',
    icon: <TrendingUp size={40} />
  }
];

export default function Services() {
  return (
    <section id="services" className={`section ${styles.services}`}>
      <div className="container">
        <h2 className="section-title">Our Expertise</h2>
        <p className="section-subtitle">
          Comprehensive real estate solutions tailored to meet your unique needs and aspirations.
        </p>
        
        <div className={styles.grid}>
          {services.map(service => (
            <div key={service.id} className={styles.card}>
              <div className={styles.iconWrapper}>
                {service.icon}
              </div>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.description}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

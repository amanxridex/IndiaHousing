import styles from './FeaturedProjects.module.css';
import { MapPin, Home, Maximize } from 'lucide-react';
import FadeIn from '../FadeIn';

const projects = [
  {
    id: 1,
    name: 'The Crown Residences',
    location: 'Bandra West, Mumbai',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop',
    status: 'Ready to Move',
    type: '4 & 5 BHK',
    area: '3,500 sq.ft'
  },
  {
    id: 2,
    name: 'IHPL Tech Park',
    location: 'Whitefield, Bangalore',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    status: 'Under Construction',
    type: 'Commercial Space',
    area: '500,000 sq.ft'
  },
  {
    id: 3,
    name: 'Serenity Villas',
    location: 'Lonavala, Maharashtra',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    status: 'New Launch',
    type: 'Luxury Villas',
    area: '5,000 sq.ft'
  }
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">
        <FadeIn direction="up">
          <h2 className="section-title">Our Signature Projects</h2>
          <p className="section-subtitle">
            Discover our portfolio of meticulously designed properties that blend aesthetics with functionality.
          </p>
        </FadeIn>
        
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <FadeIn key={project.id} direction="up" delay={index * 0.15}>
              <div className={styles.card}>
                <div className={styles.imageWrapper}>
                  <span className={styles.statusBadge}>{project.status}</span>
                  <img src={project.image} alt={project.name} className={styles.image} />
                </div>
                <div className={styles.content}>
                  <h3 className={styles.projectName}>{project.name}</h3>
                  <div className={styles.location}>
                    <MapPin size={16} />
                    <span>{project.location}</span>
                  </div>
                  
                  <div className={styles.details}>
                    <div className={styles.detailItem}>
                      <Home size={16} />
                      <span>{project.type}</span>
                    </div>
                    <div className={styles.detailItem}>
                      <Maximize size={16} />
                      <span>{project.area}</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

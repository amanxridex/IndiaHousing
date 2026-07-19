import styles from './FeaturedProjects.module.css';
import FadeIn from '../FadeIn';

const projects = [
  {
    id: 1,
    name: 'The Crown Residences',
    subtitle: 'Bandra West, Mumbai (4 & 5 BHK)',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'IHPL Tech Park',
    subtitle: 'Whitefield, Bangalore (Commercial)',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Serenity Villas',
    subtitle: 'Lonavala, Maharashtra (Luxury)',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Majesty Towers',
    subtitle: 'South Mumbai (Bespoke Luxury)',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop',
  }
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">
        
        <FadeIn direction="up">
          <div className={styles.sectionHeader}>
            <h2 className="section-title" style={{ marginBottom: 0, maxWidth: '500px', lineHeight: 1.2 }}>
              India's Most Popular Real Estate Experience
            </h2>
            <a href="#projects" className="btn btn-primary">VIEW ALL PROJECTS</a>
          </div>
        </FadeIn>
        
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <FadeIn key={project.id} direction="up" delay={index * 0.15}>
              <div className={styles.card}>
                <div className={styles.imageWrapper}>
                  <img src={project.image} alt={project.name} className={styles.image} />
                </div>
                <div className={styles.content}>
                  <h3 className={styles.projectName}>
                    <strong>{project.name}</strong>, {project.subtitle}
                  </h3>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

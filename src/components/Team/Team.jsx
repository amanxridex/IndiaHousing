import styles from './Team.module.css';
import FadeIn from '../FadeIn';

const teamMembers = [
  {
    id: 1,
    name: 'Malvinder Singh Chauhan',
    role: 'CEO & Managing Director',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Veer Vikram Singh',
    role: 'Chief Operations Officer',
    image: '/veer.jpeg',
  },
  {
    id: 3,
    name: 'Akshay',
    role: 'Head of Design & Architecture',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
  }
];

export default function Team() {
  return (
    <section id="team" className={`section ${styles.team}`}>
      <div className="container">
        <FadeIn direction="up">
          <h2 className="section-title">Leadership & Team</h2>
          <p className="section-subtitle">
            Meet the visionaries and experts driving India Housing Projects Limited towards excellence.
          </p>
        </FadeIn>
        
        {/* Founder & Chairman Highlight */}
        <FadeIn direction="up" delay={0.2}>
          <div className={styles.founderCard}>
            <div className={styles.founderImageContainer}>
              <img 
                src="/lakshaysahai.png" 
                alt="Founder & Chairman" 
                className={styles.founderImage} 
              />
            </div>
            <div className={styles.founderContent}>
              <h3 className={styles.founderName}>Mr. Lakshay Sahay</h3>
              <div className={styles.founderRole}>Founder & Chairman</div>
              <p className={styles.founderBio}>
                With over three decades of visionary leadership in the real estate sector, Mr. Lakshay Sahay established IHPL with a mission to transform the urban landscape of India. His uncompromising commitment to quality and sustainable development has been the cornerstone of our success, making IHPL a trusted name in luxury housing and commercial spaces.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Team Grid */}
        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <FadeIn key={member.id} direction="up" delay={0.3 + index * 0.1}>
              <div className={styles.teamCard}>
                <div className={styles.teamImageContainer}>
                  <img src={member.image} alt={member.name} className={styles.teamImage} />
                </div>
                <div className={styles.teamInfo}>
                  <h4 className={styles.teamName}>{member.name}</h4>
                  <p className={styles.teamRole}>{member.role}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

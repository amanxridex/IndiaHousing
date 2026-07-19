import styles from './Testimonials.module.css';
import FadeIn from '../FadeIn';

const testimonials = [
  {
    id: 1,
    name: 'Dr. A. Sharma',
    title: 'Investor',
    quote: '"IHPL\'s premium portfolio has been incredibly reliable for my investments."',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=300&auto=format&fit=crop',
    rotate: '-5deg',
    translateY: '-20px'
  },
  {
    id: 2,
    name: 'Vikram Singh',
    title: 'Homeowner',
    quote: '"Consistent quality and service. A trusted partner for over a decade."',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
    rotate: '3deg',
    translateY: '20px'
  },
  {
    id: 3,
    name: 'Priya Patel',
    title: 'Retail Partner',
    quote: '"Safe and highly effective commercial spaces that I confidently recommend."',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop',
    rotate: '-2deg',
    translateY: '-10px'
  },
  {
    id: 4,
    name: 'Anand & Co.',
    title: 'Corporate Client',
    quote: '"Their commitment to quality control is evident in every project we see."',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop',
    rotate: '4deg',
    translateY: '15px'
  },
  {
    id: 5,
    name: 'K. Gupta',
    title: 'NRI Investor',
    quote: '"Excellent luxury homes with high efficacy and total satisfaction."',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&auto=format&fit=crop',
    rotate: '-4deg',
    translateY: '-25px'
  }
];

export default function Testimonials() {
  return (
    <section className={`section ${styles.testimonials}`}>
      <div className="container">
        
        {/* Header Section */}
        <div className={styles.header}>
          <FadeIn direction="up">
            <h2 className={styles.title}>WHAT <span className={styles.highlight}>INDIA</span> SAYS</h2>
            <p className={styles.subtitle}>Trusted by Homeowners and Investors Nationwide</p>
            <a href="#partner" className={`btn ${styles.partnerBtn}`}>Partner With Us</a>
          </FadeIn>
        </div>

        {/* Wavy Cards Section */}
        <div className={styles.waveContainer}>
          {/* Dashed background line */}
          <div className={styles.dashedLine}>
            <svg width="100%" height="150" viewBox="0 0 1000 150" preserveAspectRatio="none">
              <path d="M0,75 Q250,150 500,75 T1000,75" fill="none" stroke="#ccc" strokeWidth="2" strokeDasharray="5,5" />
            </svg>
          </div>

          <div className={styles.cardsRow}>
            {testimonials.map((t, index) => (
              <FadeIn key={t.id} direction="up" delay={index * 0.1}>
                <div 
                  className={styles.cardWrapper}
                  style={{ 
                    transform: `translateY(${t.translateY}) rotate(${t.rotate})` 
                  }}
                >
                  <div className={styles.card}>
                    <div className={styles.pin}></div>
                    <div className={styles.cardImageWrapper}>
                      <img src={t.image} alt={t.name} className={styles.cardImage} />
                    </div>
                    <div className={styles.cardContent}>
                      <h4 className={styles.cardName}>{t.name}</h4>
                      <span className={styles.cardTitle}>{t.title}</span>
                      <p className={styles.cardQuote}>{t.quote}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

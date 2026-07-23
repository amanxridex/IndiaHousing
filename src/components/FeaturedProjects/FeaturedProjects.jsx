"use client";
import { useState, useEffect } from 'react';
import styles from './FeaturedProjects.module.css';
import FadeIn from '../FadeIn';
import { supabase } from '@/lib/supabaseClient';
import EnquiryPopup from '../EnquiryPopup/EnquiryPopup';
import { useRouter } from 'next/navigation';

export default function FeaturedProjects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('id', { ascending: false });

      if (error) {
        throw error;
      }
      
      // If we got data, use it. Otherwise use a fallback array to ensure the UI looks good if the db is empty or table doesn't exist
      if (data && data.length > 0) {
        setProjects(data);
      } else {
        setProjects(fallbackProjects);
      }
    } catch (error) {
      console.error('Error fetching projects:', error.message);
      setProjects(fallbackProjects);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEnquire = (project) => {
    setSelectedProject(project);
    setIsEnquiryOpen(true);
  };

  const handleViewDetails = (id) => {
    router.push(`/projects/${id}`);
  };

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
        
        {isLoading ? (
          <div style={{ textAlign: 'center', padding: '50px' }}>Loading projects...</div>
        ) : (
          <div className={projects.length >= 4 ? styles.marqueeContainer : styles.simpleContainer}>
            <div className={projects.length >= 4 ? styles.marqueeTrack : styles.simpleTrack}>
              {/* First Set (Always render) */}
              {projects.map((project) => (
                <div key={`set1-${project.id}`} className={styles.card}>
                  <div className={styles.imageWrapper}>
                    <img src={project.image} alt={project.name} className={styles.image} />
                  </div>
                  <div className={styles.content}>
                    <h3 className={styles.projectName}>
                      <strong>{project.name}</strong>{project.subtitle ? `, ${project.subtitle}` : ''}
                    </h3>
                    <div className={styles.cardActions}>
                      <button className={styles.actionBtn} onClick={() => handleEnquire(project)}>Enquire Now</button>
                      <button className={styles.actionBtn} onClick={() => handleViewDetails(project.id)}>View Details</button>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Second Set (Duplicate for seamless loop only if enough items) */}
              {projects.length >= 4 && projects.map((project) => (
                <div key={`set2-${project.id}`} className={styles.card}>
                  <div className={styles.imageWrapper}>
                    <img src={project.image} alt={project.name} className={styles.image} />
                  </div>
                  <div className={styles.content}>
                    <h3 className={styles.projectName}>
                      <strong>{project.name}</strong>{project.subtitle ? `, ${project.subtitle}` : ''}
                    </h3>
                    <div className={styles.cardActions}>
                      <button className={styles.actionBtn} onClick={() => handleEnquire(project)}>Enquire Now</button>
                      <button className={styles.actionBtn} onClick={() => handleViewDetails(project.id)}>View Details</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <EnquiryPopup 
        isOpen={isEnquiryOpen} 
        onClose={() => setIsEnquiryOpen(false)} 
        selectedProject={selectedProject} 
      />
    </section>
  );
}

const fallbackProjects = [
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
  },
  {
    id: 5,
    name: 'The Oasis',
    subtitle: 'Gurgaon (Ultra Luxury)',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Azure Heights',
    subtitle: 'Chennai (Sea View Apartments)',
    image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: 7,
    name: 'Platinum Estates',
    subtitle: 'Delhi (Farmhouses)',
    image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 8,
    name: 'The Zenith',
    subtitle: 'Pune (IT Park Commercial)',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
  },
  {
    id: 9,
    name: 'Sapphire Skyline',
    subtitle: 'Hyderabad (Sky Villas)',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop',
  }
];

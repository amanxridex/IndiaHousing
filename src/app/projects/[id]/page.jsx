"use client";
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import styles from './project-details.module.css';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import EnquiryPopup from '@/components/EnquiryPopup/EnquiryPopup';

export default function ProjectDetails({ params }) {
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const router = useRouter();
  const { id } = params;

  useEffect(() => {
    async function fetchProject() {
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .eq('id', id)
          .single();

        if (error) throw error;
        setProject(data);
      } catch (err) {
        console.error('Error fetching project:', err.message);
        setError('Failed to load project details.');
      } finally {
        setIsLoading(false);
      }
    }

    if (id) {
      fetchProject();
    }
  }, [id]);

  if (isLoading) {
    return <div className={styles.loading}>Loading project details...</div>;
  }

  if (error || !project) {
    return (
      <div className={styles.container}>
        <button onClick={() => router.back()} className={styles.backButton}>
          <ArrowLeft size={20} /> Back
        </button>
        <div className={styles.error}>{error || 'Project not found.'}</div>
      </div>
    );
  }

  return (
    <main className={styles.container}>
      <button onClick={() => router.back()} className={styles.backButton}>
        <ArrowLeft size={20} /> Back to Projects
      </button>

      <div className={styles.heroImage}>
        <img src={project.image || 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop'} alt={project.name} />
      </div>

      <div className={styles.header}>
        <div className={styles.titleSection}>
          <h1>{project.name}</h1>
          <p className={styles.subtitle}>{project.subtitle}</p>
          <span className={styles.badge}>{project.status || 'Active'}</span>
        </div>
        <div className={styles.actionSection}>
          <p className={styles.price}>{project.price || 'Price on Request'}</p>
          <button className={styles.enquireBtn} onClick={() => setIsEnquiryOpen(true)}>
            Enquire Now
          </button>
        </div>
      </div>

      <div className={styles.detailsGrid}>
        <div className={styles.detailCard}>
          <span className={styles.detailLabel}>Property Type</span>
          <span className={styles.detailValue}>{project.type || 'Residential'}</span>
        </div>
        <div className={styles.detailCard}>
          <span className={styles.detailLabel}>Location</span>
          <span className={styles.detailValue}>{project.location || 'N/A'}</span>
        </div>
        <div className={styles.detailCard}>
          <span className={styles.detailLabel}>Full Address</span>
          <span className={styles.detailValue} style={{ fontSize: '1rem', lineHeight: '1.5' }}>
            {project.address || 'Address not provided'}
          </span>
        </div>
        <div className={styles.detailCard}>
          <span className={styles.detailLabel}>Contact</span>
          <span className={styles.detailValue}>{project.contact || 'N/A'}</span>
        </div>
      </div>

      <EnquiryPopup 
        isOpen={isEnquiryOpen} 
        onClose={() => setIsEnquiryOpen(false)} 
        selectedProject={project} 
      />
    </main>
  );
}

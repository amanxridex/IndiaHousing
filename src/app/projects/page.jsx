"use client";

import { useState, useMemo } from 'react';
import styles from './projects.module.css';
import Header from '@/components/Header/Header';
import ContactFooter from '@/components/ContactFooter/ContactFooter';
import FilterBar from '@/components/FilterBar/FilterBar';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import CompareDrawer from '@/components/CompareDrawer/CompareDrawer';
import FeaturedProjectBlock from '@/components/FeaturedProjectBlock/FeaturedProjectBlock';
import TrustStrip from '@/components/TrustStrip/TrustStrip';
import FloatingCTA from '@/components/FloatingCTA/FloatingCTA';
import EnquiryPopup from '@/components/EnquiryPopup/EnquiryPopup';
import FadeIn from '@/components/FadeIn';
import { projectsData } from '@/data/projects';
import { Grid, List, Map } from 'lucide-react';

export default function ProjectsPage() {
  const [filters, setFilters] = useState({});
  const [viewMode, setViewMode] = useState('grid'); // grid, list
  const [compareList, setCompareList] = useState([]);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const resetFilters = () => setFilters({});

  const handleCompare = (id) => {
    if (compareList.includes(id)) {
      setCompareList(compareList.filter(pId => pId !== id));
    } else {
      if (compareList.length < 3) {
        setCompareList([...compareList, id]);
      } else {
        alert("You can only compare up to 3 projects.");
      }
    }
  };

  const filteredProjects = useMemo(() => {
    return projectsData.filter(p => {
      if (filters.query && !p.name.toLowerCase().includes(filters.query.toLowerCase()) && !p.location.toLowerCase().includes(filters.query.toLowerCase())) return false;
      if (filters.city && p.city !== filters.city) return false;
      if (filters.type && p.type !== filters.type) return false;
      if (filters.status && p.status !== filters.status) return false;
      
      if (filters.budget) {
        if (filters.budget === 'under5' && p.budget >= 50000000) return false;
        if (filters.budget === '5to10' && (p.budget < 50000000 || p.budget > 100000000)) return false;
        if (filters.budget === 'over10' && p.budget <= 100000000) return false;
      }
      return true;
    }).sort((a, b) => {
      if (filters.sort === 'price-asc') return a.budget - b.budget;
      if (filters.sort === 'price-desc') return b.budget - a.budget;
      return 0; // newest/default
    });
  }, [filters]);

  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <FadeIn direction="up">
              <span className={styles.heroTag}>OUR PROJECTS</span>
              <h1 className={styles.heroTitle}>
                Discover thoughtfully planned developments<br/>
                crafted for living, investment and growth.
              </h1>
              
              <div className={styles.heroStats}>
                <div className={styles.statBox}>
                  <strong>12</strong><span>Active Projects</span>
                </div>
                <div className={styles.statBox}>
                  <strong>6</strong><span>Cities</span>
                </div>
                <div className={styles.statBox}>
                  <strong>100+</strong><span>Acres</span>
                </div>
                <div className={styles.statBox}>
                  <strong>100%</strong><span>RERA Approved</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Sticky Filter Bar */}
        <FilterBar filters={filters} setFilters={setFilters} resetFilters={resetFilters} />

        <div className={styles.container}>
          {/* View Toggle */}
          <div className={styles.viewToggleRow}>
            <span>Showing {filteredProjects.length} Projects</span>
            <div className={styles.viewButtons}>
              <button className={`${styles.viewBtn} ${viewMode === 'grid' ? styles.active : ''}`} onClick={() => setViewMode('grid')}>
                <Grid size={18} /> Grid View
              </button>
              <button className={`${styles.viewBtn} ${viewMode === 'list' ? styles.active : ''}`} onClick={() => setViewMode('list')}>
                <List size={18} /> List View
              </button>
              <button className={styles.viewBtn} disabled title="Coming Soon">
                <Map size={18} /> Map View (Future)
              </button>
            </div>
          </div>

          {/* Project List */}
          {filteredProjects.length === 0 ? (
            <div className={styles.noResults}>
              <h3>No projects found matching your criteria.</h3>
              <button onClick={resetFilters} className={styles.btnPrimary}>Clear Filters</button>
            </div>
          ) : (
            <div className={viewMode === 'grid' ? styles.gridContainer : styles.listContainer}>
              {filteredProjects.map((project, index) => (
                <div key={project.id} style={{ display: 'contents' }}>
                  <FadeIn direction="up" delay={0.1}>
                    <ProjectCard 
                      project={project} 
                      onCompare={handleCompare}
                      isCompared={compareList.includes(project.id)}
                    />
                  </FadeIn>
                  
                  {/* Insert Featured Block after 5th item */}
                  {index === 4 && (
                    <div style={{ gridColumn: '1 / -1' }}>
                      <FadeIn direction="up">
                        <FeaturedProjectBlock project={projectsData.find(p => p.isFeatured)} />
                      </FadeIn>
                    </div>
                  )}

                  {/* Insert Trust Strip after 2nd item */}
                  {index === 1 && (
                    <div style={{ gridColumn: '1 / -1' }}>
                      <FadeIn direction="up">
                        <TrustStrip />
                      </FadeIn>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <FloatingCTA onOpenEnquiry={() => setIsEnquiryOpen(true)} />
      <EnquiryPopup isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
      <CompareDrawer compareList={compareList} setCompareList={setCompareList} />
      <ContactFooter />
    </>
  );
}

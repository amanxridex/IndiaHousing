"use client";
import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import styles from './project-details.module.css';
import { useRouter } from 'next/navigation';
import { ArrowLeft, CheckCircle2, MapPin, Building, Calendar, FileText, Download, Phone, MessageCircle } from 'lucide-react';
import EnquiryPopup from '@/components/EnquiryPopup/EnquiryPopup';
import Header from '@/components/Header/Header';
import ContactFooter from '@/components/ContactFooter/ContactFooter';
import { getMediaType } from '@/utils/media';

export default function ProjectDetails({ params }) {
  const unwrappedParams = React.use(params);
  const id = unwrappedParams.id;
  
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const router = useRouter();

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

    if (id) fetchProject();
  }, [id]);

  if (isLoading) {
    return (
      <main className={styles.pageWrapper}>
        <Header />
        <div className={styles.loading}>Loading premium experience...</div>
        <ContactFooter />
      </main>
    );
  }

  if (error || !project) {
    return (
      <main className={styles.pageWrapper}>
        <Header />
        <div className={styles.container}>
          <button onClick={() => router.back()} className={styles.backButton}>
            <ArrowLeft size={20} /> Back
          </button>
          <div className={styles.error}>{error || 'Project not found.'}</div>
        </div>
        <ContactFooter />
      </main>
    );
  }

  const isValidArray = (arr) => Array.isArray(arr) && arr.length > 0;
  const isNotNA = (str) => str && str !== 'NA';

  return (
    <main className={styles.pageWrapper}>
      <Header />
      
      {/* 1. HERO SECTION */}
      <div className={styles.heroImage}>
        {(() => {
          const media = getMediaType(project.image);
          if (media.type === 'youtube') {
            return <iframe src={media.src} allow="autoplay; encrypted-media" style={{ width: '100%', height: '100%', border: 'none', pointerEvents: 'none' }} allowFullScreen />;
          } else if (media.type === 'video') {
            return <video src={media.src} autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} />;
          } else {
            return <img src={media.src || 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop'} alt={project.name} />;
          }
        })()}
        <div className={styles.heroOverlay}></div>
        
        <button onClick={() => router.back()} className={styles.backButton}>
          <ArrowLeft size={20} /> Back to Projects
        </button>

        <div className={styles.heroContent}>
          <div className={styles.titleSection}>
            <span className={styles.badge}>{project.status || 'Active'}</span>
            <h1>{project.name}</h1>
            <p className={styles.subtitle}>{project.subtitle}</p>
            <div className={styles.heroLocation}>
              <MapPin size={18} /> {project.location || 'Location upon request'}
            </div>
          </div>
          <div className={styles.actionSection}>
            <p className={styles.price}>{project.price || 'Price on Request'}</p>
            <div className={styles.ctaGroup}>
              <button className={styles.enquireBtn} onClick={() => setIsEnquiryOpen(true)}>
                Enquire Now
              </button>
              {isNotNA(project.contact) && (
                <a href={`tel:${project.contact}`} className={styles.secondaryBtn}>
                  <Phone size={18} /> Call Now
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        {/* 2. QUICK INFORMATION BAR */}
        <div className={styles.quickFacts}>
          <div className={styles.factItem}>
            <Building className={styles.factIcon} />
            <div>
              <span>Property Type</span>
              <strong>{project.type || 'Residential'}</strong>
            </div>
          </div>
          {isNotNA(project.configuration) && (
            <div className={styles.factItem}>
              <MapPin className={styles.factIcon} />
              <div>
                <span>Configuration</span>
                <strong>{project.configuration}</strong>
              </div>
            </div>
          )}
          {isNotNA(project.possession_date) && (
            <div className={styles.factItem}>
              <Calendar className={styles.factIcon} />
              <div>
                <span>Possession</span>
                <strong>{project.possession_date}</strong>
              </div>
            </div>
          )}
          {isNotNA(project.rera_number) && (
            <div className={styles.factItem}>
              <FileText className={styles.factIcon} />
              <div>
                <span>RERA No.</span>
                <strong>{project.rera_number}</strong>
              </div>
            </div>
          )}
        </div>

        {/* 3. PROJECT OVERVIEW */}
        {isNotNA(project.overview) && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Project Overview</h2>
            <div className={styles.overviewText}>
              {project.overview.split('\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </section>
        )}

        {/* 4. HIGHLIGHTS */}
        {isValidArray(project.highlights) && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Project Highlights</h2>
            <div className={styles.highlightsGrid}>
              {project.highlights.map((highlight, i) => (
                <div key={i} className={styles.highlightItem}>
                  <CheckCircle2 className={styles.checkIcon} />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 5. IMAGE GALLERY */}
        {isValidArray(project.gallery) && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Gallery</h2>
            <div className={styles.galleryGrid}>
              {project.gallery.map((imgUrl, i) => (
                <div key={i} className={styles.galleryImage}>
                  <img src={imgUrl} alt={`${project.name} gallery ${i+1}`} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 6. MASTER PLAN */}
        {isNotNA(project.master_plan_image) && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Master Plan</h2>
            <div className={styles.masterPlan}>
              <img src={project.master_plan_image} alt={`${project.name} Master Plan`} />
            </div>
          </section>
        )}

        {/* 7. FLOOR PLANS & 8. UNIT LAYOUTS */}
        {(isValidArray(project.floor_plans) || isValidArray(project.unit_layouts)) && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Floor Plans & Layouts</h2>
            {isValidArray(project.unit_layouts) && (
              <div className={styles.tagsContainer}>
                {project.unit_layouts.map((layout, i) => (
                  <span key={i} className={styles.layoutTag}>{layout}</span>
                ))}
              </div>
            )}
            
            {isValidArray(project.floor_plans) && (
              <div className={styles.floorPlansGrid}>
                {project.floor_plans.map((plan, i) => (
                  <div key={i} className={styles.floorPlanCard}>
                    {plan.image && <img src={plan.image} alt={plan.type} />}
                    <div className={styles.fpDetails}>
                      <h3>{plan.type}</h3>
                      {plan.built_up && <p>Built-up: {plan.built_up}</p>}
                      {plan.carpet && <p>Carpet: {plan.carpet}</p>}
                      {plan.beds && <p>{plan.beds} Beds | {plan.baths} Baths</p>}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* 9. AMENITIES */}
        {isValidArray(project.amenities) && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Lifestyle Amenities</h2>
            <div className={styles.amenitiesGrid}>
              {project.amenities.map((amenity, i) => (
                <div key={i} className={styles.amenityCard}>
                  <div className={styles.amenityIcon}>✨</div>
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 10. SPECIFICATIONS */}
        {isValidArray(project.specifications) && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Specifications</h2>
            <ul className={styles.specsList}>
              {project.specifications.map((spec, i) => (
                <li key={i}>{spec}</li>
              ))}
            </ul>
          </section>
        )}

        {/* 11. LOCATION & 12. INVESTMENT */}
        <div className={styles.twoColumn}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Location</h2>
            <p className={styles.addressText}>{project.address}</p>
            <div className={styles.mapPlaceholder}>
              Interactive Map Integration Available
            </div>
          </section>
          
          {isNotNA(project.investment_benefits) && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Why Invest?</h2>
              <div className={styles.investmentBox}>
                <p>{project.investment_benefits}</p>
              </div>
            </section>
          )}
        </div>

        {/* 13. PAYMENT PLANS & 15. LEGAL INFO */}
        <div className={styles.twoColumn}>
          {isValidArray(project.payment_plans) && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Payment Plans</h2>
              <ul className={styles.paymentList}>
                {project.payment_plans.map((plan, i) => (
                  <li key={i}>{plan}</li>
                ))}
              </ul>
            </section>
          )}
          {isNotNA(project.legal_info) && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Legal & Approvals</h2>
              <div className={styles.legalBox}>
                <p>{project.legal_info}</p>
              </div>
            </section>
          )}
        </div>

        {/* 16. DOWNLOADS */}
        {project.downloads && Object.keys(project.downloads).length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Downloads</h2>
            <div className={styles.downloadsGrid}>
              {Object.entries(project.downloads).map(([key, url], i) => (
                <a key={i} href={url} target="_blank" rel="noopener noreferrer" className={styles.downloadCard}>
                  <Download className={styles.downloadIcon} />
                  <span>Download {key.replace(/_/g, ' ')}</span>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* 17. FAQs */}
        {isValidArray(project.faqs) && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <div className={styles.faqList}>
              {project.faqs.map((faq, i) => (
                <div key={i} className={styles.faqItem}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 23. FOOTER CTA */}
        <section className={styles.footerCta}>
          <h2>Ready to own your dream home?</h2>
          <p>Get in touch with our experts to schedule a site visit or get more details.</p>
          <div className={styles.ctaGroupLarge}>
            <button className={styles.enquireBtn} onClick={() => setIsEnquiryOpen(true)}>
              Schedule a Site Visit
            </button>
            {isNotNA(project.contact) && (
              <a href={`https://wa.me/${project.contact.replace(/\D/g,'')}`} target="_blank" rel="noreferrer" className={styles.whatsappBtn}>
                <MessageCircle size={20} /> Talk to an Expert
              </a>
            )}
          </div>
        </section>

      </div>

      {/* 22. STICKY ACTION BUTTONS */}
      <div className={styles.stickyActions}>
        <button onClick={() => setIsEnquiryOpen(true)} className={styles.stickyEnquire}>
          Enquire Now
        </button>
        {isNotNA(project.contact) && (
          <a href={`https://wa.me/${project.contact.replace(/\D/g,'')}`} target="_blank" rel="noreferrer" className={styles.stickyWhatsApp}>
            <MessageCircle size={24} />
          </a>
        )}
      </div>

      <EnquiryPopup 
        isOpen={isEnquiryOpen} 
        onClose={() => setIsEnquiryOpen(false)} 
        selectedProject={project} 
      />
      <ContactFooter />
    </main>
  );
}

import { useState, useRef, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import styles from './AddProjectModal.module.css';

const TABS = ['Basic Info', 'Details', 'Media', 'Highlights & Features', 'Extra Info'];

export default function AddProjectModal({ isOpen, onClose, onProjectAdded, initialData = null }) {
  const [activeTab, setActiveTab] = useState('Basic Info');
  
  const initialFormState = {
    name: '', subtitle: '', price: '', address: '', contact: '',
    status: 'Active', type: 'Residential', location: '', manager: '',
    possession_date: '', rera_number: '', configuration: '', overview: '',
    legal_info: '', investment_benefits: '',
    master_plan_image: '',
    highlights: '', gallery: '', floor_plans: '', unit_layouts: '',
    amenities: '', specifications: '', payment_plans: '', downloads: '',
    faqs: '', testimonials: ''
  };
  
  const [formData, setFormData] = useState(initialFormState);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isDragActive, setIsDragActive] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (initialData && isOpen) {
      // populate form with initialData, converting arrays back to comma-separated strings for the textareas
      const joinIfArray = (val) => Array.isArray(val) ? val.join(', ') : (val || '');
      const stringifyIfObj = (val) => val && typeof val === 'object' && Object.keys(val).length ? JSON.stringify(val) : '';
      
      setFormData({
        ...initialData,
        highlights: joinIfArray(initialData.highlights),
        gallery: joinIfArray(initialData.gallery),
        unit_layouts: joinIfArray(initialData.unit_layouts),
        amenities: joinIfArray(initialData.amenities),
        specifications: joinIfArray(initialData.specifications),
        payment_plans: joinIfArray(initialData.payment_plans),
        floor_plans: stringifyIfObj(initialData.floor_plans),
        downloads: stringifyIfObj(initialData.downloads),
        faqs: stringifyIfObj(initialData.faqs),
        testimonials: stringifyIfObj(initialData.testimonials),
      });
      if (initialData.image) {
        setPreviewUrl(initialData.image);
      }
    } else if (!isOpen) {
      resetForm();
    }
  }, [initialData, isOpen]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDragOver = (e) => { e.preventDefault(); setIsDragActive(true); };
  const handleDragLeave = (e) => { e.preventDefault(); setIsDragActive(false); };
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files[0]) handleFile(e.target.files[0]);
  };

  const handleFile = (file) => {
    if (file.type.match(/^image\/(jpeg|png|jpg)$/)) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setError(null);
    } else {
      setError('Please select a valid image file (.jpg, .jpeg, .png)');
    }
  };

  const resetForm = () => {
    setFormData(initialFormState);
    setSelectedFile(null);
    setPreviewUrl(null);
    setActiveTab('Basic Info');
  };

  const parseCommaList = (str) => {
    if (!str || str.trim() === '') return [];
    return str.split(',').map(s => s.trim()).filter(Boolean);
  };

  const parseJSONField = (str, fallback = []) => {
    if (!str || str.trim() === '') return fallback;
    try {
      return JSON.parse(str);
    } catch (e) {
      console.warn('Failed to parse JSON for field', e);
      return fallback;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile && !initialData?.image) {
      setError('Please select a Hero image for the project in the Media tab.');
      return;
    }
    
    setIsSubmitting(true);
    setError(null);

    try {
      let publicUrl = formData.image;

      if (selectedFile) {
        const fileExt = selectedFile.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `public/${fileName}`;
        
        const { error: uploadError } = await supabase.storage
          .from('project-images')
          .upload(filePath, selectedFile);

        if (uploadError) throw uploadError;

        const { data: urlData } = supabase.storage
          .from('project-images')
          .getPublicUrl(filePath);
        
        publicUrl = urlData.publicUrl;
      }

      const payload = {
        name: formData.name || 'NA',
        subtitle: formData.subtitle || 'NA',
        price: formData.price || 'NA',
        address: formData.address || 'NA',
        contact: formData.contact || 'NA',
        status: formData.status || 'NA',
        type: formData.type || 'NA',
        location: formData.location || 'NA',
        manager: formData.manager || 'NA',
        possession_date: formData.possession_date || 'NA',
        rera_number: formData.rera_number || 'NA',
        configuration: formData.configuration || 'NA',
        overview: formData.overview || 'NA',
        legal_info: formData.legal_info || 'NA',
        investment_benefits: formData.investment_benefits || 'NA',
        master_plan_image: formData.master_plan_image || 'NA',
        image: publicUrl,
        highlights: parseCommaList(formData.highlights),
        gallery: parseCommaList(formData.gallery),
        unit_layouts: parseCommaList(formData.unit_layouts),
        amenities: parseCommaList(formData.amenities),
        specifications: parseCommaList(formData.specifications),
        payment_plans: parseCommaList(formData.payment_plans),
        floor_plans: parseJSONField(formData.floor_plans, []),
        downloads: parseJSONField(formData.downloads, {}),
        faqs: parseJSONField(formData.faqs, []),
        testimonials: parseJSONField(formData.testimonials, []),
      };

      if (initialData && initialData.id) {
        const { data, error } = await supabase
          .from('projects')
          .update(payload)
          .eq('id', initialData.id)
          .select();

        if (error) throw error;
        onProjectAdded(data[0], true); // true indicates update
      } else {
        const { data, error } = await supabase
          .from('projects')
          .insert([payload])
          .select();

        if (error) throw error;
        onProjectAdded(data[0], false);
      }
      
      onClose();
      resetForm();
    } catch (err) {
      console.error('Error adding project:', err.message);
      setError(`Failed to add project: ${err.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent} style={{ maxWidth: '800px', maxHeight: '90vh', overflowY: 'auto' }}>
        <div className={styles.modalHeader}>
          <h2>{initialData ? 'Edit Premium Project' : 'Add Premium Project'}</h2>
          <button onClick={() => { onClose(); resetForm(); }} className={styles.closeButton}>&times;</button>
        </div>
        
        {error && <div className={styles.error}>{error}</div>}

        <div className={styles.tabs}>
          {TABS.map(tab => (
            <button 
              key={tab} 
              className={`${styles.tabBtn} ${activeTab === tab ? styles.activeTab : ''}`}
              onClick={() => setActiveTab(tab)}
              type="button"
            >
              {tab}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          <div className={styles.tabContent}>
            {activeTab === 'Basic Info' && (
              <>
                <div className={styles.formGroup}><label>Project Name</label><input type="text" name="name" value={formData.name} onChange={handleChange} required /></div>
                <div className={styles.formGroup}><label>Subtitle / Tagline</label><input type="text" name="subtitle" value={formData.subtitle} onChange={handleChange} required /></div>
                <div className={styles.formGroup}><label>Price Details</label><input type="text" name="price" value={formData.price} onChange={handleChange} /></div>
                <div className={styles.formGroup}><label>Address</label><input type="text" name="address" value={formData.address} onChange={handleChange} /></div>
                <div className={styles.formGroup}><label>Contact Number</label><input type="text" name="contact" value={formData.contact} onChange={handleChange} /></div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div className={styles.formGroup} style={{ flex: 1 }}>
                    <label>Property Type</label>
                    <select name="type" value={formData.type} onChange={handleChange}>
                      <option value="Residential">Residential</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Villa">Villa</option>
                      <option value="Plot">Plot</option>
                    </select>
                  </div>
                  <div className={styles.formGroup} style={{ flex: 1 }}>
                    <label>Status</label>
                    <select name="status" value={formData.status} onChange={handleChange}>
                      <option value="Active">Active</option>
                      <option value="Upcoming">Upcoming</option>
                      <option value="Under Construction">Under Construction</option>
                      <option value="Ready to Move">Ready to Move</option>
                    </select>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div className={styles.formGroup} style={{ flex: 1 }}><label>Location (Short)</label><input type="text" name="location" value={formData.location} onChange={handleChange} /></div>
                  <div className={styles.formGroup} style={{ flex: 1 }}><label>Manager</label><input type="text" name="manager" value={formData.manager} onChange={handleChange} /></div>
                </div>
              </>
            )}

            {activeTab === 'Details' && (
              <>
                <div className={styles.formGroup}><label>Possession Date</label><input type="text" name="possession_date" value={formData.possession_date} onChange={handleChange} placeholder="e.g. Dec 2025" /></div>
                <div className={styles.formGroup}><label>RERA Number</label><input type="text" name="rera_number" value={formData.rera_number} onChange={handleChange} /></div>
                <div className={styles.formGroup}><label>Configuration</label><input type="text" name="configuration" value={formData.configuration} onChange={handleChange} placeholder="e.g. 2, 3, 4 BHK Apartments" /></div>
                <div className={styles.formGroup}><label>Project Overview</label><textarea name="overview" value={formData.overview} onChange={handleChange} rows={5} placeholder="Detailed vision and architecture overview..."></textarea></div>
              </>
            )}

            {activeTab === 'Media' && (
              <>
                <div className={styles.formGroup}>
                  <label>Hero Image (Drag & Drop)</label>
                  <div 
                    className={`${styles.fileUploadZone} ${isDragActive ? styles.dragActive : ''}`}
                    onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}
                    onClick={() => fileInputRef.current.click()}
                  >
                    <input type="file" ref={fileInputRef} onChange={handleFileSelect} accept=".jpg, .jpeg, .png" />
                    <p>Drag and drop your image here, or click to select</p>
                  </div>
                  {previewUrl && <div className={styles.filePreview}><img src={previewUrl} alt="Preview" /><span>{selectedFile ? selectedFile.name : 'Current Image'}</span></div>}
                </div>
                <div className={styles.formGroup}><label>Master Plan Image URL</label><input type="text" name="master_plan_image" value={formData.master_plan_image} onChange={handleChange} placeholder="https://..." /></div>
                <div className={styles.formGroup}><label>Image Gallery (Comma-separated URLs)</label><textarea name="gallery" value={formData.gallery} onChange={handleChange} rows={3}></textarea></div>
              </>
            )}

            {activeTab === 'Highlights & Features' && (
              <>
                <div className={styles.formGroup}><label>Highlights (Comma-separated)</label><textarea name="highlights" value={formData.highlights} onChange={handleChange} placeholder="Prime Location, Smart Homes, 24x7 Security..."></textarea></div>
                <div className={styles.formGroup}><label>Amenities (Comma-separated)</label><textarea name="amenities" value={formData.amenities} onChange={handleChange} placeholder="Clubhouse, Gym, Swimming Pool..."></textarea></div>
                <div className={styles.formGroup}><label>Specifications (Comma-separated)</label><textarea name="specifications" value={formData.specifications} onChange={handleChange} placeholder="Italian Marble Flooring, Modular Kitchen..."></textarea></div>
                <div className={styles.formGroup}><label>Unit Layouts (Comma-separated)</label><textarea name="unit_layouts" value={formData.unit_layouts} onChange={handleChange} placeholder="Villa A, Villa B, Corner Plot..."></textarea></div>
              </>
            )}

            {activeTab === 'Extra Info' && (
              <>
                <div className={styles.formGroup}><label>Legal Info / Clearances</label><textarea name="legal_info" value={formData.legal_info} onChange={handleChange} rows={2}></textarea></div>
                <div className={styles.formGroup}><label>Investment Benefits</label><textarea name="investment_benefits" value={formData.investment_benefits} onChange={handleChange} rows={2}></textarea></div>
                <div className={styles.formGroup}><label>Payment Plans (Comma-separated)</label><textarea name="payment_plans" value={formData.payment_plans} onChange={handleChange} rows={2}></textarea></div>
                
                <hr style={{ margin: '1rem 0', borderColor: '#333' }} />
                <p style={{ fontSize: '0.8rem', color: '#888', marginBottom: '1rem' }}>Advanced JSON Fields (Must be valid JSON arrays/objects or leave blank)</p>
                
                <div className={styles.formGroup}><label>Floor Plans (JSON Array)</label><textarea name="floor_plans" value={formData.floor_plans} onChange={handleChange} rows={2} placeholder='[{"type":"2 BHK", "built_up":"1200 sqft"}]'></textarea></div>
                <div className={styles.formGroup}><label>FAQs (JSON Array)</label><textarea name="faqs" value={formData.faqs} onChange={handleChange} rows={2} placeholder='[{"question":"...", "answer":"..."}]'></textarea></div>
                <div className={styles.formGroup}><label>Downloads (JSON Object)</label><textarea name="downloads" value={formData.downloads} onChange={handleChange} rows={2} placeholder='{"brochure":"url", "price_list":"url"}'></textarea></div>
              </>
            )}
          </div>

          <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '0.8rem', color: '#888', alignSelf: 'center' }}>Empty fields will default to "NA"</span>
            <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
              {isSubmitting ? 'Saving...' : (initialData ? 'Save Changes' : 'Add Project')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

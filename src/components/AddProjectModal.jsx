import { useState, useRef } from 'react';
import { supabase } from '../lib/supabaseClient';
import styles from './AddProjectModal.module.css';

export default function AddProjectModal({ isOpen, onClose, onProjectAdded }) {
  const [formData, setFormData] = useState({
    name: '',
    subtitle: '',
    price: '',
    address: '',
    contact: '',
    status: 'Active',
    type: 'Residential',
    location: '',
    manager: '',
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isDragActive, setIsDragActive] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
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
    setFormData({
      name: '',
      subtitle: '',
      price: '',
      address: '',
      contact: '',
      status: 'Active',
      type: 'Residential',
      location: '',
      manager: '',
    });
    setSelectedFile(null);
    setPreviewUrl(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile) {
      setError('Please select an image for the project.');
      return;
    }
    
    setIsSubmitting(true);
    setError(null);

    try {
      // 1. Upload image to Supabase Storage
      const fileExt = selectedFile.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `public/${fileName}`;
      
      const { error: uploadError, data: uploadData } = await supabase.storage
        .from('project-images')
        .upload(filePath, selectedFile);

      if (uploadError) throw uploadError;

      // 2. Get Public URL
      const { data: { publicUrl } } = supabase.storage
        .from('project-images')
        .getPublicUrl(filePath);

      // 3. Insert project record
      const { data, error } = await supabase
        .from('projects')
        .insert([{ ...formData, image: publicUrl }])
        .select();

      if (error) throw error;
      
      onProjectAdded(data[0]);
      onClose();
      resetForm();
    } catch (err) {
      console.error('Error adding project:', err.message);
      setError(`Failed to add project: ${err.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2>Add New Project</h2>
          <button onClick={() => { onClose(); resetForm(); }} className={styles.closeButton}>&times;</button>
        </div>
        
        {error && <div className={styles.error}>{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>Project Image (Drag & Drop)</label>
            <div 
              className={`${styles.fileUploadZone} ${isDragActive ? styles.dragActive : ''}`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current.click()}
            >
              <input 
                type="file" 
                ref={fileInputRef}
                onChange={handleFileSelect} 
                accept=".jpg, .jpeg, .png" 
              />
              <p>Drag and drop your image here, or click to select</p>
              <p style={{ fontSize: '0.8rem', marginTop: '4px' }}>Accepts .jpg, .jpeg, .png</p>
            </div>
            {previewUrl && (
              <div className={styles.filePreview}>
                <img src={previewUrl} alt="Preview" />
                <span>{selectedFile.name}</span>
              </div>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="name">Project Name</label>
            <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} placeholder="e.g. The Crown Residences" />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="subtitle">Subtitle / Short Desc</label>
            <input type="text" id="subtitle" name="subtitle" required value={formData.subtitle} onChange={handleChange} placeholder="e.g. Bandra West, Mumbai (4 & 5 BHK)" />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="price">Price Details</label>
            <input type="text" id="price" name="price" value={formData.price} onChange={handleChange} placeholder="e.g. ₹14.2 Cr" />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="address">Address</label>
            <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} placeholder="Full address" />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="contact">Contact Number</label>
            <input type="text" id="contact" name="contact" value={formData.contact} onChange={handleChange} placeholder="+91..." />
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <div className={styles.formGroup} style={{ flex: 1 }}>
              <label htmlFor="type">Property Type</label>
              <select id="type" name="type" value={formData.type} onChange={handleChange}>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="Farmhouse">Farmhouse</option>
                <option value="Plot">Plot</option>
              </select>
            </div>
            
            <div className={styles.formGroup} style={{ flex: 1 }}>
              <label htmlFor="status">Status</label>
              <select id="status" name="status" value={formData.status} onChange={handleChange}>
                <option value="Active">Active</option>
                <option value="Upcoming">Upcoming</option>
                <option value="Sold Out">Sold Out</option>
              </select>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <div className={styles.formGroup} style={{ flex: 1 }}>
              <label htmlFor="location">Location (Short)</label>
              <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} placeholder="e.g. Noida Ext." />
            </div>

            <div className={styles.formGroup} style={{ flex: 1 }}>
              <label htmlFor="manager">Assigned Manager</label>
              <input type="text" id="manager" name="manager" value={formData.manager} onChange={handleChange} placeholder="e.g. Aman" />
            </div>
          </div>

          <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
            {isSubmitting ? 'Adding...' : 'Add Project'}
          </button>
        </form>
      </div>
    </div>
  );
}

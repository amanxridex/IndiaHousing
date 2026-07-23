import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import styles from './AddProjectModal.module.css';

export default function AddProjectModal({ isOpen, onClose, onProjectAdded }) {
  const [formData, setFormData] = useState({
    name: '',
    subtitle: '',
    image: '',
    price: '',
    address: '',
    contact: '',
    status: 'Active',
    type: 'Residential',
    location: '',
    manager: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const { data, error } = await supabase
        .from('projects')
        .insert([formData])
        .select();

      if (error) throw error;
      
      onProjectAdded(data[0]);
      onClose();
      // Reset form
      setFormData({
        name: '',
        subtitle: '',
        image: '',
        price: '',
        address: '',
        contact: '',
        status: 'Active',
        type: 'Residential',
        location: '',
        manager: '',
      });
    } catch (err) {
      console.error('Error adding project:', err.message);
      setError('Failed to add project. Ensure table exists and schema is correct.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2>Add New Project</h2>
          <button onClick={onClose} className={styles.closeButton}>&times;</button>
        </div>
        
        {error && <div className={styles.error}>{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Project Name</label>
            <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} placeholder="e.g. The Crown Residences" />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="subtitle">Subtitle / Short Desc</label>
            <input type="text" id="subtitle" name="subtitle" required value={formData.subtitle} onChange={handleChange} placeholder="e.g. Bandra West, Mumbai (4 & 5 BHK)" />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="image">Image URL</label>
            <input type="url" id="image" name="image" required value={formData.image} onChange={handleChange} placeholder="https://..." />
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

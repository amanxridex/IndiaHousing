"use client";
import { useState } from 'react';
import styles from './EnquiryPopup.module.css';
import { X } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';

export default function EnquiryPopup({ isOpen, onClose, selectedProject }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
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
      const { error: insertError } = await supabase
        .from('enquiries')
        .insert([{
          project_id: selectedProject?.id?.toString(),
          project_name: selectedProject?.name || 'General Enquiry',
          name: formData.name,
          phone: formData.phone,
          city: formData.city
        }]);
        
      if (insertError) throw insertError;
      
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setFormData({ name: '', phone: '', city: '' });
        onClose();
      }, 2000);
      
    } catch (err) {
      console.error('Error submitting enquiry:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <button className={styles.closeBtn} onClick={() => { onClose(); setSuccess(false); setError(null); }}><X size={24} /></button>
        <h2>Register Your Interest</h2>
        {selectedProject?.name ? (
          <p>Enquiring about <strong>{selectedProject.name}</strong></p>
        ) : (
          <p>Fill out the form below and our experts will get in touch with you shortly.</p>
        )}
        
        {success ? (
          <div style={{ textAlign: 'center', padding: '2rem 0', color: '#10b981' }}>
            <h3>Thank You!</h3>
            <p>Your enquiry has been submitted successfully.</p>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            {error && <div style={{ color: '#ef4444', marginBottom: '1rem', fontSize: '0.9rem' }}>{error}</div>}
            
            <input 
              type="text" 
              name="name"
              placeholder="Full Name *" 
              required 
              className={styles.input} 
              value={formData.name}
              onChange={handleChange}
            />
            
            <input 
              type="tel" 
              name="phone"
              placeholder="Phone Number *" 
              required 
              className={styles.input} 
              value={formData.phone}
              onChange={handleChange}
            />
            
            <input 
              type="text" 
              name="city"
              placeholder="City *" 
              required
              className={styles.input} 
              value={formData.city}
              onChange={handleChange}
            />
            
            <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

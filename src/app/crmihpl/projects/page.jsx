"use client";
import { useState, useEffect } from 'react';
import styles from '../crm.module.css';
import { Plus, Edit2 } from 'lucide-react';
import AddProjectModal from '@/components/AddProjectModal';
import { supabase } from '@/lib/supabaseClient';

export default function ProjectsWorkspace() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
      setProjects(data || []);
    } catch (error) {
      console.error('Error fetching projects:', error.message);
      // Fallback for UI visualization if DB fails or table missing
      if (projects.length === 0) {
          setProjects([
            { id: 't1', name: 'IHPL Signature', type: 'Residential', location: 'Noida Ext.', manager: 'Aman', price: '₹14.2 Cr', status: 'Active' },
            { id: 't2', name: 'Ganga Farms', type: 'Farmhouse', location: 'Jewar', manager: 'Sneha', price: '₹24.0 Cr', status: 'Active' }
          ]);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleProjectAdded = (newProject, isUpdate) => {
    if (isUpdate) {
      setProjects(prev => prev.map(p => p.id === newProject.id ? newProject : p));
    } else {
      setProjects(prev => [newProject, ...prev]);
    }
  };

  const handleEditClick = (project) => {
    setEditingProject(project);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setEditingProject(null);
  };

  return (
    <main className={styles.mainContent}>
      <header className={styles.header} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <h1>Internal Projects</h1>
          <p style={{ color: '#64748b' }}>Manage inventory and internal property analytics.</p>
        </div>
        <button 
          onClick={() => { setEditingProject(null); setIsModalOpen(true); }}
          style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 600 }}>
          <Plus size={18}/> Add Project
        </button>
      </header>

      <div className={styles.card} style={{ padding: 0, overflow: 'hidden' }}>
        <table className={styles.dataTable}>
          <thead style={{ background: '#f8fafc' }}>
            <tr>
              <th>Project Name</th>
              <th>Type</th>
              <th>Location</th>
              <th>Manager</th>
              <th>Pricing</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan="6" style={{ textAlign: 'center', padding: '20px' }}>Loading projects...</td>
              </tr>
            ) : projects.length === 0 ? (
              <tr>
                <td colSpan="6" style={{ textAlign: 'center', padding: '20px' }}>No projects found.</td>
              </tr>
            ) : (
              projects.map(project => (
                <tr key={project.id}>
                  <td style={{ fontWeight: 600, color: '#0f172a' }}>{project.name}</td>
                  <td>{project.type}</td>
                  <td>{project.location}</td>
                  <td>{project.manager}</td>
                  <td style={{ fontWeight: 600 }}>{project.price}</td>
                  <td>
                    <span className={`${styles.badge} ${project.status === 'Active' ? styles.interested : project.status === 'Upcoming' ? styles.new : ''}`}>
                      {project.status}
                    </span>
                  </td>
                  <td>
                    <button 
                      onClick={() => handleEditClick(project)}
                      style={{ background: 'none', border: 'none', color: '#3b82f6', cursor: 'pointer', padding: '4px' }}
                      title="Edit Project"
                    >
                      <Edit2 size={18} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <AddProjectModal 
        isOpen={isModalOpen} 
        onClose={handleModalClose} 
        onProjectAdded={handleProjectAdded} 
        initialData={editingProject}
      />
    </main>
  );
}

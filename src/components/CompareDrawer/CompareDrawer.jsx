import styles from './CompareDrawer.module.css';
import { X, Scale } from 'lucide-react';
import { projectsData } from '@/data/projects';

export default function CompareDrawer({ compareList, setCompareList }) {
  if (compareList.length === 0) return null;

  const handleRemove = (id) => {
    setCompareList(compareList.filter(pid => pid !== id));
  };

  const selectedProjects = compareList.map(id => projectsData.find(p => p.id === id)).filter(Boolean);

  return (
    <div className={styles.drawerContainer}>
      <div className={styles.drawerInner}>
        <div className={styles.drawerHeader}>
          <h4><Scale size={18} /> Compare Projects ({compareList.length}/3)</h4>
          <button className={styles.clearBtn} onClick={() => setCompareList([])}>Clear All</button>
        </div>
        
        <div className={styles.selectedItems}>
          {selectedProjects.map(p => (
            <div key={p.id} className={styles.miniCard}>
              <button className={styles.removeBtn} onClick={() => handleRemove(p.id)}><X size={14} /></button>
              <img src={p.image} alt={p.name} className={styles.miniImg} />
              <div className={styles.miniInfo}>
                <strong>{p.name}</strong>
                <span>{p.priceStr}</span>
              </div>
            </div>
          ))}
          {compareList.length < 3 && (
            <div className={styles.emptySlot}>
              <span>+ Add Project</span>
            </div>
          )}
        </div>

        <button 
          className={styles.compareBtn} 
          disabled={compareList.length < 2}
          onClick={() => alert("Comparison modal would open here")}
        >
          Compare Now
        </button>
      </div>
    </div>
  );
}

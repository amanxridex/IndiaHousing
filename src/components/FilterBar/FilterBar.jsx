"use client";

import { useState, useRef, useEffect } from 'react';
import styles from './FilterBar.module.css';
import { Search, ChevronDown } from 'lucide-react';
import { cities, projectTypes, projectStatuses } from '@/data/projects';

function CustomSelect({ name, value, options, placeholder, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div className={styles.customSelect} ref={dropdownRef}>
      <div 
        className={`${styles.selectTrigger} ${isOpen ? styles.open : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedOption ? selectedOption.label : placeholder}</span>
        <ChevronDown size={14} className={styles.chevron} />
      </div>
      
      {isOpen && (
        <div className={styles.optionsList}>
          <div 
            className={`${styles.option} ${value === "" ? styles.selected : ''}`}
            onClick={() => { onChange({ target: { name, value: "" } }); setIsOpen(false); }}
          >
            {placeholder}
          </div>
          {options.map((opt) => (
            <div 
              key={opt.value}
              className={`${styles.option} ${value === opt.value ? styles.selected : ''}`}
              onClick={() => { onChange({ target: { name, value: opt.value } }); setIsOpen(false); }}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function FilterBar({ filters, setFilters, resetFilters }) {
  const handleSelect = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const cityOptions = cities.map(c => ({ value: c, label: c }));
  const typeOptions = projectTypes.map(t => ({ value: t, label: t }));
  const statusOptions = projectStatuses.map(s => ({ value: s, label: s }));
  const budgetOptions = [
    { value: 'under5', label: 'Under ₹5 Cr' },
    { value: '5to10', label: '₹5 Cr - ₹10 Cr' },
    { value: 'over10', label: 'Above ₹10 Cr' },
  ];
  const sortOptions = [
    { value: 'newest', label: 'Newest' },
    { value: 'price-asc', label: 'Price Low-High' },
    { value: 'price-desc', label: 'Price High-Low' },
  ];

  return (
    <div className={styles.filterStickyWrapper}>
      <div className={styles.filterContainer}>
        <div className={styles.searchBox}>
          <Search size={18} className={styles.searchIcon} />
          <input 
            type="text" 
            placeholder="Search Projects..." 
            name="query"
            value={filters.query || ""}
            onChange={handleSelect}
            className={styles.searchInput}
          />
        </div>

        <CustomSelect name="city" value={filters.city || ""} options={cityOptions} placeholder="Location" onChange={handleSelect} />
        <CustomSelect name="type" value={filters.type || ""} options={typeOptions} placeholder="Project Type" onChange={handleSelect} />
        <CustomSelect name="status" value={filters.status || ""} options={statusOptions} placeholder="Status" onChange={handleSelect} />
        <CustomSelect name="budget" value={filters.budget || ""} options={budgetOptions} placeholder="Budget" onChange={handleSelect} />
        <CustomSelect name="sort" value={filters.sort || ""} options={sortOptions} placeholder="Sort" onChange={handleSelect} />

        <button onClick={resetFilters} className={styles.resetBtn}>Reset</button>
      </div>
    </div>
  );
}

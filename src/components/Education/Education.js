import React from 'react';
import styles from './Education.module.css';
import educationIcon from '../../assets/education-icon.png'; // Import the icon

const Education = () => {
  return (
    <section id="education" className={styles.educationSection}>
      <h1 className={styles.title}>Education</h1>
      <div className={styles.contentWrapper}>
        <div className={styles.detailsColumn}>
          <div className={styles.educationBlock}>
            <h3 className={styles.institution}>Sri Sai Ram Institute of Technology, Chennai, TamilNadu</h3>
            <p className={styles.details}>CGPA 7.55/10.00 (6th sem) – Pursuing</p>
          </div>
          
          <div className={styles.educationBlock}>
            <h3 className={styles.institution}>New Prince Matriculation Higher Secondary School, Chennai, TamilNadu</h3>
            <p className={styles.details}>HSLC: 82.83% Marks - (497/600) Year – 2022</p>
            <p className={styles.details}>SSLC: 78.60% Marks - (393/500) Year – 2020</p>
          </div>
        </div>
        <div className={styles.imageColumn}>
          <img draggable={false} onDragStart={(e) => e.preventDefault()}src={educationIcon} alt="Education Icon" className={styles.educationImage} />
        </div>
      </div>
    </section>
  );
};

export default Education;
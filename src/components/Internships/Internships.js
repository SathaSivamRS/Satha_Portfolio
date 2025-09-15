import React from 'react';
import styles from './Internships.module.css';

// Storing internship data in an array makes the code cleaner
const internshipsData = [
  {
    company: "GAOTek Inc.",
    role: "Wordpress WebDeveloper",
    details: "INTERN | 06/2024 – 11/2024 | New York, US | Online",
    description: "Contributed to full-stack web development projects at GAO Tek Inc., focusing on frameworks like WordPress and integrating new features to enhance site functionality and user experience. Improved UI and UX through plugin customization and strategic enhancements."
  },
  {
    company: "Corizo Edutech Private LTD.",
    role: "Web Developer",
    details: "INTERN | 03/2024 – 05/2024 | India | Online",
    description: "Built a full-featured CRUD application using React.js, enabling users to create, read, update, and delete records seamlessly. Emphasized intuitive user experience and ensured data reliability through efficient state management and error handling."
  },
  {
    company: "NLC India Private Limited",
    role: "Web Developer",
    details: "INTERN | 07 Jan 2025– 18 Jan 2025 | Neyveli | Offline",
    description: "Developed a React-based IP management application for NLC with full CRUD functionality and device categorization for efficient tracking. Implemented regex-based validation to ensure accurate IP inputs and maintain data integrity."
  }
];

const Internships = () => {
  return (
    <section id="internships" className={styles.internshipsSection}>
       <div className={styles.backgroundBars}></div>
      <h1 className={styles.title}>Internships</h1>
      <div className={styles.cardContainer}>
        {internshipsData.map((internship, index) => (
          <div key={index} className={styles.internshipCard}>
            <h3 className={styles.cardTitle}>
              {internship.company} | <span>{internship.role}</span>
            </h3>
            <p className={styles.cardDetails}>{internship.details}</p>
            <p className={styles.cardDescription}>{internship.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Internships;
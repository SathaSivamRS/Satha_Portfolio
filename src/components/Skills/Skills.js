import React from 'react';
import styles from './Skills.module.css';

const skillsData = [
  {
    title: "Front End:",
    skills: "HTML, CSS, JS, ReactJS."
  },
  {
    title: "Programming Languages:",
    skills: "Java (Core), Python (Basic), C (Basic)"
  },
  {
    title: "Design Tools:",
    skills: "Figma, Canva, Illustrator"
  },
  {
    title: "Development Tools:",
    skills: "VS Code, JetBrains"
  },
  {
    title: "Tools:",
    skills: "Git & Github, WordPress"
  },
  {
    title: "Database:",
    skills: "SQL (Basic)"
  }
];

const Skills = () => {
  return (
    <section id="skills" className={styles.skillsSection}>
      <h1 className={styles.title}>Skills</h1>
      <div className={styles.skillsGrid}>
        {skillsData.map((skillCategory, index) => (
          <div key={index} className={styles.skillCard}>
            <h4 className={styles.cardTitle}>{skillCategory.title}</h4>
            <p className={styles.cardSkills}>{skillCategory.skills}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
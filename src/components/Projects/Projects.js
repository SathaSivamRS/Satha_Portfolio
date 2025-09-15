import React from 'react';
import { FiGithub } from 'react-icons/fi';
import styles from './Projects.module.css';

const projectsData = [
  {
    title: "Cognitive Protection App",
    tech: "Flutter",
    details: "09/2023 – Present | Chennai, India",
    description: "Developing an AI-powered Cognitive Protection App using Flutter and Firebase with facial recognition (64% baseline accuracy) under implementation to enhance mobile security. Successfully built email-based user registration and verification and structured the app to support future capabilities such as secure face-based login, real-time intruder detection with photo capture and GPS, and behavioral pattern monitoring for enhanced threat detection."
  },
  {
    title: "IPMS WebDevelopment",
    tech: "ReactJS",
    details: "01/2025 – 01/2025 | Neyveli, India",
    description: "Developed a React-based IP management application for NLC with full CRUD functionality and device categorization for efficient tracking. Implemented regex-based validation to ensure accurate IP inputs and maintain data integrity.",
    buttons: [
      {
        text: "Github",
        link: "https://github.com/SathaSivamRS/IP-Management_NLC.git",
        icon: <FiGithub />
      },
      {
        text: "Click here",
        link: "https://ip-management-nlc.vercel.app" // Add live project link here
      }
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projectsSection}>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.cardContainer}>
        {projectsData.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <h3 className={styles.cardTitle}>
              {project.title} | <span>{project.tech}</span>
            </h3>
            <p className={styles.cardDetails}>{project.details}</p>
            
            {project.description && (
              <p className={styles.cardDescription}>{project.description}</p>
            )}

            {project.buttons && (
              <div className={styles.buttonContainer}>
                {project.buttons.map((button, btnIndex) => (
                  <a key={btnIndex} href={button.link} className={styles.button} target="_blank" rel="noopener noreferrer">
                    {button.icon} {button.text}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
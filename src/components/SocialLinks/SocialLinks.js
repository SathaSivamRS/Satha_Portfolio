import React from 'react';
// Make sure you are importing from 'react-icons/fi' for the outline style
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi'; 
import styles from './SocialLinks.module.css';

const SocialLinks = () => {
  return (
    <div className={styles.socialContainer}>
      <a href="mailto:sathasivamrs23@gmail.com" aria-label="Email">
        <FiMail />
      </a>
      <a href="https://linkedin.com/in/rssathasivam" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FiLinkedin />
      </a>
      <a href="https://github.com/SathaSivamRS" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <FiGithub />
      </a>
    </div>
  );
};

export default SocialLinks;
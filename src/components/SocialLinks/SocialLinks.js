import React from 'react';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';
import styles from './SocialLinks.module.css';

const SocialLinks = () => {
  return (
    <div className={styles.socialContainer}>
      <a href="mailto:youremail@example.com" aria-label="Email">
        <FiMail />
      </a>
      <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FiLinkedin />
      </a>
      <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <FiGithub />
      </a>
    </div>
  );
};

export default SocialLinks;
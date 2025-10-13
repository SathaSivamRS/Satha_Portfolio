import React from 'react';
import styles from './Hero.module.css';
import profilePic from '../../assets/SS_Transperent_2.png'; // Your transparent profile image

// Example social icons (replace with your preferred icons or use react-icons)
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  const codeSnippet = `
  item {
    color: #f00;
  }

  view.container {
    flex: 1;
  }
  `;

  return (
    <main className={styles.heroContainer}>
      {/* Decorative Elements */}
      <div className={styles.dotGrid}></div>

      <div className={styles.textContent}>
        <h1 className={styles.greeting}>Hi,</h1>
        <h2 className={styles.name}>I'm Sathasivam R S</h2>
<h6>
  <a
    href="https://drive.google.com/file/d/12XJ7TN8sxqqqpb5Z-VkcGOcbPJM9VGXU/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.resumeCard}
  >
    🌟 Check out my Resume
  </a>
</h6>


      </div>

      <img
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
        src={profilePic}
        alt="Sathasivam R S"
        className={styles.profileImage}
      />

      {/* Social Icons */}
      <div className={styles.socialContainer}>
        <a href="mailto:sathasivamrs23@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
        </a>
        <a href="https://github.com/SathaSivamRS" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/rssathasivam" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>

      <div className={styles.codeSnippet}>
        <pre><code>{codeSnippet}</code></pre>
      </div>

      {/* Optional decorative elements */}
      {/* <div className={styles.brackets}>{"{ }"}</div> */}
      {/* <div className={styles.curvedLine}></div> */}
    </main>
  );
};

export default Hero;

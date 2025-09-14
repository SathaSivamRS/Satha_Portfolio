import React from 'react';
import styles from './Hero.module.css';
import profilePic from '../../assets/SS_Transperent_2.png'; // Using your new image file

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
      
      <img 
        src={profilePic} 
        alt="Sathasivam R S" 
        className={styles.profileImage} 
      />
      
      <div className={styles.codeSnippet}>
        <pre><code>{codeSnippet}</code></pre>
      </div>
      {/* <div className={styles.brackets}>{"{ }"}</div> */}
      <div className={styles.curvedLine}></div>

      {/* Main Content */}
      <div className={styles.textContent}>
        <h1 className={styles.greeting}>Hi,</h1>
        <h2 className={styles.name}>I'm Sathasivam R S</h2>
      </div>
    </main>
  );
};

export default Hero;
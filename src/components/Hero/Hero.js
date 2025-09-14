import React from 'react';
import styles from './Hero.module.css';
import profilePic from '../../assets/SS_Transperent_2.png'; // Your transparent profile image

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
      </div>

      <img
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
        src={profilePic}
        alt="Sathasivam R S"
        className={styles.profileImage}
      />

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

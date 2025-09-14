import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>SS</div>
      <nav className={styles.nav}>
        <ul>
          <li><a href="#home" className={styles.active}>Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Reach Out</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
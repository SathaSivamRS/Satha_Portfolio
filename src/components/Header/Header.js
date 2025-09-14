import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      {/* Changed the div to an anchor tag to make the logo clickable */}
      <a href="#" className={styles.logo}>SS</a>
      
      <nav className={styles.nav}>
        <ul>
          <li><a href="#">Home</a></li>
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
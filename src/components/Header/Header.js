import React, { useState, useEffect } from 'react';
import { FiMenu } from 'react-icons/fi';
import styles from './Header.module.css';

const Header = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'internships', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
            setActiveLink(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={styles.header}>
      <a href="#" className={styles.logo}>SS</a>
      
      <button className={styles.hamburger} onClick={toggleNav} aria-label="Toggle navigation">
        <FiMenu />
      </button>

      <nav className={`${styles.nav} ${isNavOpen ? styles.navOpen : ''}`}>
        <ul>
          <li><a href="#" className={activeLink === 'home' ? styles.active : ''} onClick={() => setIsNavOpen(false)}>Home</a></li>
          <li><a href="#about" className={activeLink === 'about' ? styles.active : ''} onClick={() => setIsNavOpen(false)}>About Me</a></li>
          <li><a href="#education" className={activeLink === 'education' ? styles.active : ''} onClick={() => setIsNavOpen(false)}>Education</a></li>
          <li><a href="#internships" className={activeLink === 'internships' ? styles.active : ''} onClick={() => setIsNavOpen(false)}>Internships</a></li>
          <li><a href="#skills" className={activeLink === 'skills' ? styles.active : ''} onClick={() => setIsNavOpen(false)}>Skills</a></li>
          <li><a href="#contact" className={activeLink === 'contact' ? styles.active : ''} onClick={() => setIsNavOpen(false)}>Reach Out</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
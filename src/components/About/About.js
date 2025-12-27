import React from 'react';
import styles from './About.module.css';
import avatar from '../../assets/SS_Ghibli-Tb-1.png'; // Importing your avatar image


const About = () => {
    return (
        <section id="about" className={styles.aboutSection}>
            <h1 className={styles.title}>ABOUT ME</h1>
            <div className={styles.contentWrapper}>
                <div className={styles.avatarColumn}>
                    <img 
                        draggable={false}
                        onDragStart={(e) => e.preventDefault()} 
                        src={avatar} alt="Sathasivam RS Avatar" className={styles.avatar} 
                    />
                </div>
                <div className={styles.textColumn}>
                    <p className={styles.text}>
                        I’m a final-year Computer Science student focused on UI/UX design and frontend development. I design user-friendly interfaces using Figma and Canva, and assist in implementing them with ReactJS and core Java fundamentals. I aim to create clean, intuitive, and technically feasible user experiences, while continuously strengthening my coding and problem-solving skills.
                    </p>
                    <p className={styles.text}>
                        Outside of the tech world, I practice
                        karate and have a creative side for mime - a bit of a
                        contrast, right? This blend of creative discipline and
                        technical focus has driven me from my first internship to my
                        current projects, and it's this mindset that I bring to
                        building every new digital experience.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
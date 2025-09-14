import React from 'react';
import styles from './About.module.css';
import avatar from '../../assets/SS_Ghibli-Tb.png'; // Importing your avatar image


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
                        I'm a final-year Computer Science student with a passion for
                        building elegant, user-centric web applications. I specialize
                        in the front-end, crafting experiences with ReactJS, and my
                        skills in Figma and Canva allow me to believe the gap between
                        creative vision and technical execution. I believe in being a
                        lifelong learner, constantly strengthening my foundation in
                        core Java and web development principles.
                    </p>
                    <p className={styles.text}>
                        I'm also fascinated by the intersection of AI and security,
                        and I'm currently developing an AI-powered Cognitive
                        Protection App using Flutter and Firebase to explore mobile
                        security enhancements. Outside of the tech world, I practice
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
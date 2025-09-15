import React from 'react';
import './App.css';
import Header from './components/Header/Header';
// import SocialLinks from './components/SocialLinks/SocialLinks';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Education from './components/Education/Education';
import Internships from './components/Internships/Internships';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <SocialLinks /> */}
      <Hero />
      <About/>
      <Education />
      <Internships />
      <Projects />
    </div>
  );
}

export default App;
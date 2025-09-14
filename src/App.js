import React from 'react';
import './App.css';
import Header from './components/Header/Header';
// import SocialLinks from './components/SocialLinks/SocialLinks';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Education from './components/Education/Education';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <SocialLinks /> */}
      <Hero />
      <About/>
      <Education />
    </div>
  );
}

export default App;
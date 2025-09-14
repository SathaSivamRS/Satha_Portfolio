import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SocialLinks from './components/SocialLinks/SocialLinks';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className="App">
      <Header />
      <SocialLinks />
      <Hero />
    </div>
  );
}

export default App;
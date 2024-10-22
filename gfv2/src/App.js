import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AbstractBackground from './components/AbstractBackground';
import HeroSection from './pages/HeroSection';
import Hiw from './pages/HIW.jsx';
import Service from './pages/Service.jsx';
import Team from './pages/Team.jsx';
import Contact from './pages/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App" style={{ position: 'relative', minHeight: '100vh' }}>
      <AbstractBackground />
      <Navbar />
      <section id="Home"><HeroSection /></section>
      <section id="Why Us"><Hiw /></section>
      <section id="Our Services"><Service /></section>
      <section id="Our Team"><Team /></section>
      <section id="Contact Us"><Contact /></section>
      <Footer />
    </div>
  );
}

export default App;

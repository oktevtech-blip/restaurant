import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Specials from './components/Specials';
import Footer from './components/Footer';

import AboutUs from './pages/AboutUs';
import Gallery from './pages/Gallery';
import Menus from './pages/Menus';
import Events from './pages/Events';
import Contact from './pages/Contact';

import './App.css';

function HomePage() {
  return (
    <>
      <HeroSection />
      <Specials />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">

        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/menus" element={<Menus />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />

      </div>
    </Router>
  );
}

export default App;
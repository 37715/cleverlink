import React from 'react';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { SplashCursor } from '@/components/ui/splash-cursor';

function App() {
  return (
    <div className="min-h-screen bg-white text-black relative">
      {/* Splash cursor positioned behind all content */}
      <SplashCursor />
      
      {/* Main content with higher z-index */}
      <div className="relative z-10">
        <Hero />
        <Dashboard />
        <Features />
        <Pricing />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
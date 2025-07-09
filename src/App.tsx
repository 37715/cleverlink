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
    <div className="min-h-screen bg-[#1F1B2E] text-white">
      <SplashCursor />
      <Hero />
      <Dashboard />
      <Features />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
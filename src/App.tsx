import React from 'react';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import { SplashCursor } from '@/components/ui/splash-cursor';

function App() {
  // Simple routing based on pathname
  const currentPath = window.location.pathname;

  // If on form page, show only the form
  if (currentPath === '/get-started') {
    return <ContactForm />;
  }

  // Default landing page
  return (
    <div className="min-h-screen bg-white text-black relative overflow-x-hidden">
      {/* Immediate white background to prevent flash */}
      <div className="fixed inset-0 bg-white z-0"></div>
      
      {/* Splash cursor positioned behind all content but above background */}
      <SplashCursor />
      
      {/* Main content with proper semantic structure */}
      <main className="relative z-10">
        <Hero />
        <section aria-label="AI Services and Solutions">
          <Features />
        </section>
        <section aria-label="Performance Results and Analytics">
          <Dashboard />
        </section>
        <section aria-label="Contact Information">
          <Contact />
        </section>
        <Footer />
      </main>
    </div>
  );
}

export default App;
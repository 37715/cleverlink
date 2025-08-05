
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import About from './components/About';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import CookiePolicy from './components/CookiePolicy';

// import { SplashCursor } from '@/components/ui/splash-cursor';

function App() {
  // Simple routing based on pathname
  const currentPath = window.location.pathname;

  // If on form page, show only the form
  if (currentPath === '/get-started') {
    return <ContactForm />;
  }

  // If on about page, show about page
  if (currentPath === '/about') {
    return <About />;
  }

  // If on privacy policy page, show privacy policy
  if (currentPath === '/privacy-policy') {
    return <PrivacyPolicy />;
  }

  // If on terms of service page, show terms of service
  if (currentPath === '/terms-of-service') {
    return <TermsOfService />;
  }

  // If on cookie policy page, show cookie policy
  if (currentPath === '/cookie-policy') {
    return <CookiePolicy />;
  }

  // If on contact page, show contact page
  if (currentPath === '/contact') {
    return <Contact />;
  }



  // Default landing page
  return (
    <div className="min-h-screen bg-white text-black relative overflow-x-hidden">
      {/* Immediate white background to prevent flash */}
      <div className="fixed inset-0 bg-white z-0"></div>
      
      {/* Splash cursor positioned behind all content but above background */}
      {/* <SplashCursor /> */}
      
      {/* Main content with proper semantic structure */}
      <main className="relative z-10">
        <Hero />
        <section aria-label="AI Services and Solutions" id="features">
          <Features />
        </section>
        <section aria-label="Performance Results and Analytics">
          <Dashboard />
        </section>
        <section aria-label="Contact Information" id="contact">
          <Contact />
        </section>
        <Footer />
      </main>
    </div>
  );
}

export default App;
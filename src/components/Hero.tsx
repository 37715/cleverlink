import React, { useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { ScrollReveal, FadeIn } from '@/components/ui/scroll-reveal';
import { TextRotate } from '@/components/ui/text-rotate';
import { LavaLamp } from '@/components/ui/fluid-blob';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInitialize = () => {
    if (!email.trim()) {
      setEmailError('email required');
      return;
    }
    
    if (!validateEmail(email)) {
      setEmailError('valid email required');
      return;
    }

    setEmailError('');
    // Navigate to form page with email pre-filled
    const formUrl = `/get-started${email ? `?email=${encodeURIComponent(email)}` : ''}`;
    window.open(formUrl, '_blank');
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (emailError) {
      setEmailError('');
    }
  };

  return (
    <div className="min-h-screen w-screen flex flex-col justify-center items-center relative">
      <LavaLamp />
      
      <div className="text-center max-w-6xl mx-auto px-4 sm:px-6">
        {/* Brand name */}
        <FadeIn className="mb-12 mt-8">
          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wider text-white mix-blend-exclusion font-ultra-light mb-2">
            cleverlink
          </h1>
          <div className="w-16 h-px bg-white mix-blend-exclusion mx-auto"></div>
        </FadeIn>
        
        {/* Main headline */}
        <ScrollReveal delay={0.2} className="mb-8 sm:mb-12">
          <div className="h-16 sm:h-20 md:h-28 lg:h-32 flex items-center justify-center px-4 w-full">
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-ultra-light leading-tight text-white mix-blend-exclusion tracking-wide text-center w-full">
              <span className="block font-heading font-light w-full">
                <TextRotate
                  texts={[
                    "ai consulting",
                    "automation", 
                    "intelligent systems"
                  ]}
                  rotationInterval={3000}
                  staggerDuration={0.03}
                  staggerFrom="center"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  splitLevelClassName="overflow-visible mix-blend-exclusion"
                  elementLevelClassName="font-heading font-light text-white mix-blend-exclusion text-center block w-full"
                  mainClassName="h-full flex items-center justify-center w-full text-center"
                />
              </span>
            </h2>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.4} className="mb-8 sm:mb-12 px-4">
          <p className="text-lg sm:text-xl md:text-2xl text-white mix-blend-exclusion max-w-2xl mx-auto leading-relaxed font-ultra-light text-center">
            <span className="font-ultra-light">minimal. intelligent.</span><br className="hidden sm:block" />
            <span className="font-ultra-light sm:ml-2">transform your business with cutting-edge ai solutions.</span>
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.6} className="mb-8 sm:mb-12">
          <div className="flex flex-col items-center px-4 max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row w-full gap-3 sm:gap-0">
              {/* Email Input */}
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="enter email"
                className={`w-full sm:w-auto flex-1 px-6 sm:px-8 py-3 sm:py-4 bg-transparent border mix-blend-exclusion font-ultra-light text-sm sm:text-base tracking-wide text-white mix-blend-exclusion placeholder:text-white/60 focus:outline-none focus:ring-1 focus:ring-white/50 sm:rounded-none transition-colors duration-300 ${
                  emailError ? 'border-red-400' : 'border-white'
                }`}
              />
              
              {/* Initialize Button */}
              <button 
                onClick={handleInitialize}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-white mix-blend-exclusion font-ultra-light text-sm sm:text-base tracking-wide hover:bg-white transition-colors duration-300 group sm:border-l-0"
              >
                <span className="flex items-center justify-center gap-2 text-white mix-blend-exclusion">
                  initialize
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            </div>
            
            {/* Error Message */}
            {emailError && (
              <div className="mt-3 text-red-400 mix-blend-exclusion text-xs sm:text-sm font-ultra-light tracking-wide">
                {emailError}
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Hero;
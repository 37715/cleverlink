import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { ScrollReveal, FadeIn } from '@/components/ui/scroll-reveal';
import { TextRotate } from '@/components/ui/text-rotate';
import { LavaLamp } from '@/components/ui/fluid-blob';

const Hero = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center relative">
      <LavaLamp />
      
      <div className="text-center max-w-6xl mx-auto px-6">
        {/* Brand name */}
        <FadeIn className="mb-12 mt-8">
          <h1 className="font-heading text-3xl md:text-4xl tracking-wider text-white mix-blend-exclusion font-ultra-light mb-2">
            cleverlink
          </h1>
          <div className="w-16 h-px bg-white mix-blend-exclusion mx-auto"></div>
        </FadeIn>
        
        {/* Main headline */}
        <ScrollReveal delay={0.2} className="mb-8">
          <div className="h-20 md:h-28 lg:h-32 flex items-center justify-center">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-ultra-light leading-tight text-white mix-blend-exclusion tracking-wide">
              <span className="block font-heading font-light">
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
                  elementLevelClassName="font-heading font-light text-white mix-blend-exclusion"
                  mainClassName="h-full flex items-center justify-center"
                />
              </span>
            </h2>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.4} className="mb-12">
          <p className="text-xl md:text-2xl text-white mix-blend-exclusion max-w-2xl mx-auto leading-relaxed font-ultra-light">
            <span className="font-ultra-light">minimal. intelligent.</span><br />
            <span className="font-ultra-light">transform your business with cutting-edge ai solutions.</span>
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.6}>
          <div className="flex justify-center items-center">
            <button className="px-8 py-4 border border-white mix-blend-exclusion font-ultra-light text-base tracking-wide hover:bg-white hover:scale-105 transition-all duration-300 group">
              <span className="flex items-center gap-2 text-white mix-blend-exclusion">
                book a call
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Hero;
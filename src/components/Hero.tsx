import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8A3FFC] via-transparent to-[#1F1B2E]"></div>
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(138, 63, 252, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(138, 63, 252, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-[#8A3FFC] rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-[#8A3FFC] rounded-full blur-2xl opacity-30 animate-pulse delay-1000"></div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Revolutionizing the
            <span className="block bg-gradient-to-r from-[#8A3FFC] to-[#A855F7] bg-clip-text text-transparent">
              Future of AI Services
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your business with cutting-edge AI solutions. From automated workflows to intelligent receptionists, 
            we deliver the future of business automation today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-[#8A3FFC] to-[#A855F7] rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#8A3FFC]/30">
              <span className="flex items-center gap-2">
                Book a Call
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
            
            <button className="group flex items-center gap-3 px-8 py-4 border border-[#8A3FFC] rounded-full font-semibold text-lg transition-all duration-300 hover:bg-[#8A3FFC]/10 hover:scale-105">
              <Play className="w-5 h-5 transition-transform group-hover:scale-110" />
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
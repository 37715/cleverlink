import React from 'react';
import { 
  TrendingUp, 
  Users, 
  Clock,
  Target,
  ArrowUpRight,
  ArrowRight
} from 'lucide-react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

const Dashboard = () => {
  const benefits = [
    {
      icon: TrendingUp,
      label: 'revenue growth',
      description: 'improved business performance',
      detail: 'through intelligent automation'
    },
    {
      icon: Users,
      label: 'client satisfaction',
      description: 'enhanced customer experience',
      detail: 'with 24/7 ai support'
    },
    {
      icon: Clock,
      label: 'time efficiency',
      description: 'streamlined operations',
      detail: 'automated workflows'
    },
    {
      icon: Target,
      label: 'project success',
      description: 'reliable delivery',
      detail: 'on time & budget'
    }
  ];

  const handleStartTransformation = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-12 sm:mb-16">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-ultra-light mb-4 sm:mb-6 text-white">
            transformative ai benefits
          </h2>
          <div className="w-12 h-px bg-white mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto font-ultra-light px-4">
            <span className="font-ultra-light">discover the potential improvements ai solutions can bring to your business operations</span>
          </p>
        </ScrollReveal>
        
        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {benefits.map((benefit, index) => (
            <ScrollReveal
              key={index}
              delay={index * 0.1}
              className="bg-zinc-900/50 border border-zinc-800 p-4 sm:p-6 group cursor-pointer hover:bg-zinc-800/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <benefit.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:scale-110 transition-transform duration-300" strokeWidth={1} />
                <ArrowUpRight className="w-3 h-3 text-zinc-500 group-hover:text-white transition-colors duration-300" strokeWidth={1} />
              </div>
              <div className="text-sm font-light text-white mb-2">{benefit.label}</div>
              <div className="text-xs text-zinc-400 font-ultra-light mb-1">{benefit.description}</div>
              <div className="text-xs text-zinc-500 font-ultra-light">{benefit.detail}</div>
            </ScrollReveal>
          ))}
        </div>

        {/* Call to Action */}
        <ScrollReveal delay={0.4} className="text-center">
          <div className="bg-zinc-900/50 border border-zinc-800 p-6 sm:p-8 max-w-2xl mx-auto">
            <h4 className="font-heading text-lg sm:text-xl font-ultra-light text-white mb-3">
              ready to transform your business?
            </h4>
            <p className="text-zinc-400 font-ultra-light text-sm sm:text-base mb-6">
              discover how ai can revolutionize your operations and drive growth
            </p>
            <button 
              onClick={handleStartTransformation}
              className="group relative cursor-pointer overflow-hidden border border-white font-ultra-light transition-all duration-300 hover:scale-105 px-6 py-3 text-base lowercase tracking-wide bg-transparent text-white"
            >
              {/* Dot animation - positioned BEHIND text */}
              <div className="absolute left-[5%] top-[40%] h-2 w-2 scale-[1] rounded-lg bg-white transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] z-0"></div>

              {/* Original text - slides out */}
              <span className="relative z-20 inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0 flex items-center gap-2">
                start your transformation
                <ArrowRight className="w-4 h-4" strokeWidth={1} />
              </span>

              {/* Hover text - slides in and centers perfectly */}
              <div className="absolute top-0 z-20 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 text-black">
                <span>start your transformation</span>
                <ArrowRight className="w-4 h-4" strokeWidth={1} />
              </div>
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Dashboard;
import React from 'react';
import { Globe, Workflow, Phone, Brain } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { SplineSceneBasic } from '@/components/ui/spline-demo';
import { TextRotate } from '@/components/ui/text-rotate';

const Features = () => {
  const features = [
    {
      icon: Globe,
      title: 'ai-powered web design',
      description: 'create stunning, responsive websites with our ai-driven design system that adapts to your brand and user needs.',
    },
    {
      icon: Workflow,
      title: 'automated workflows',
      description: 'streamline your business processes with intelligent automation that learns and adapts to your operations.',
    },
    {
      icon: Phone,
      title: 'ai receptionists',
      description: 'never miss a call with our intelligent virtual receptionists that handle inquiries 24/7 with human-like conversation.',
    },
    {
      icon: Brain,
      title: 'custom ai solutions',
      description: 'tailored ai implementations designed specifically for your unique business challenges and opportunities.',
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <div className="h-16 md:h-20 flex items-center justify-center mb-6">
            <h2 className="font-heading text-3xl md:text-4xl font-light text-black">
              <TextRotate
                texts={[
                  "capabilities",
                  "expertise", 
                  "solutions",
                  "innovation",
                  "services"
                ]}
                rotationInterval={2500}
                staggerDuration={0.02}
                staggerFrom="first"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 350 }}
                splitLevelClassName="overflow-visible"
                elementLevelClassName="font-heading font-light"
                mainClassName="h-full flex items-center justify-center"
              />
            </h2>
          </div>
          <div className="w-12 h-px bg-black mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-xl mx-auto font-ultra-light">
            <span className="font-ultra-light">discover how our cutting-edge ai solutions can transform your business operations</span>
          </p>
        </ScrollReveal>
        
        {/* 3D Showcase */}
        <ScrollReveal delay={0.3} className="max-w-5xl mx-auto mb-20">
          <SplineSceneBasic />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal 
              key={index}
              delay={index * 0.1}
              className="group bg-white border border-gray-100 p-8 transition-all duration-500 hover:border-gray-200 hover:translate-y-[-4px] hover:shadow-lg hover:scale-105 cursor-pointer"
            >
              <div className="w-12 h-12 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <feature.icon className="w-6 h-6 text-black" strokeWidth={1} />
              </div>
              
              <h3 className="font-accent text-xl font-light mb-4 text-black group-hover:text-gray-700 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed font-ultra-light text-base">
                {feature.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
import React from 'react';
import { Globe, Workflow, Phone, Brain } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { SplineSceneBasic } from '@/components/ui/spline-demo';
import { TextRotate } from '@/components/ui/text-rotate';

const Features = () => {
  const features = [
    {
      icon: Globe,
      title: 'AI-Powered Web Design & Development',
      description: 'Create stunning, responsive websites with our AI-driven design system that adapts to your brand identity and user experience needs. Professional web development services powered by artificial intelligence.',
    },
    {
      icon: Workflow,
      title: 'Business Process Automation',
      description: 'Streamline your business operations with intelligent workflow automation that learns and adapts to your processes. Reduce manual tasks and increase efficiency with custom automation solutions.',
    },
    {
      icon: Phone,
      title: '24/7 AI Virtual Receptionists',
      description: 'Never miss a call with our intelligent virtual receptionist services that handle customer inquiries 24/7 with human-like conversation. Advanced AI phone automation for better customer service.',
    },
    {
      icon: Brain,
      title: 'Custom AI Solutions & Consulting',
      description: 'Tailored artificial intelligence implementations designed specifically for your unique business challenges and growth opportunities. Expert AI consulting services for modern enterprises.',
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-12 sm:mb-16">
          <div className="h-12 sm:h-16 md:h-20 flex items-center justify-center mb-4 sm:mb-6">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-light text-black">
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
          <div className="w-12 h-px bg-black mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-xl mx-auto font-ultra-light px-4">
            <span className="font-ultra-light">Discover how our cutting-edge AI consulting and automation solutions can transform your business operations and drive growth</span>
          </p>
        </ScrollReveal>
        
        {/* 3D Showcase */}
        <ScrollReveal delay={0.3} className="max-w-5xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <SplineSceneBasic />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <ScrollReveal 
              key={index}
              delay={index * 0.1}
              className="group bg-white border border-gray-100 p-6 sm:p-8 cursor-pointer"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-black" strokeWidth={1} />
              </div>
              
              <h3 className="font-accent text-lg sm:text-xl font-light mb-3 sm:mb-4 text-black group-hover:text-gray-700 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed font-ultra-light text-sm sm:text-base">
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
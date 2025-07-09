import React from 'react';
import { Globe, Workflow, Phone, Brain } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Globe,
      title: 'AI-Powered Web Design',
      description: 'Create stunning, responsive websites with our AI-driven design system that adapts to your brand and user needs.',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Workflow,
      title: 'Automated Workflows',
      description: 'Streamline your business processes with intelligent automation that learns and adapts to your operations.',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Phone,
      title: 'AI Receptionists',
      description: 'Never miss a call with our intelligent virtual receptionists that handle inquiries 24/7 with human-like conversation.',
      color: 'from-pink-500 to-red-600'
    },
    {
      icon: Brain,
      title: 'Custom AI Solutions',
      description: 'Tailored AI implementations designed specifically for your unique business challenges and opportunities.',
      color: 'from-green-500 to-teal-600'
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#1F1B2E] to-[#2A2438]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful AI Services
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover how our cutting-edge AI solutions can transform your business operations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-[#1F1B2E] rounded-2xl p-8 border border-[#8A3FFC]/20 hover:border-[#8A3FFC]/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#8A3FFC]/20"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 group-hover:text-[#8A3FFC] transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {feature.description}
              </p>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#8A3FFC]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
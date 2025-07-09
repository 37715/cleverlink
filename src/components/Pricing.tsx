import React from 'react';
import { Check, Star } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

const Pricing = () => {
  const plans = [
    {
      name: 'starter',
      price: '$299',
      period: '/month',
      description: 'perfect for small businesses getting started with ai',
      features: [
        'ai website design',
        'basic automation',
        'email support',
        '5 ai workflows',
        'monthly reports'
      ],
      popular: false
    },
    {
      name: 'professional',
      price: '$799',
      period: '/month',
      description: 'advanced ai solutions for growing businesses',
      features: [
        'everything in starter',
        'ai receptionist',
        'advanced analytics',
        'priority support',
        'unlimited workflows',
        'custom integrations'
      ],
      popular: true
    },
    {
      name: 'enterprise',
      price: 'custom',
      period: '',
      description: 'tailored ai solutions for large organizations',
      features: [
        'everything in professional',
        'custom ai models',
        'dedicated support',
        'white-label solutions',
        'advanced security',
        'sla guarantees'
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-ultra-light mb-6 text-black">
            pricing
          </h2>
          <div className="w-12 h-px bg-black mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-xl mx-auto font-ultra-light">
            <span className="font-ultra-light">select the perfect plan to transform your business with ai</span>
          </p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <ScrollReveal
              key={index}
              delay={index * 0.1}
              className={`relative bg-white border p-8 transition-all duration-500 hover:translate-y-[-4px] hover:shadow-lg hover:scale-105 cursor-pointer ${
                plan.popular
                  ? 'border-black shadow-sm'
                  : 'border-gray-100 hover:border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-black text-white px-3 py-1 text-xs font-ultra-light flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    most popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="font-accent text-2xl font-light mb-2 text-black">{plan.name}</h3>
                <p className="text-gray-600 mb-6 text-base font-ultra-light">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-ultra-light text-black">{plan.price}</span>
                  <span className="text-gray-600 text-base">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-black flex-shrink-0" strokeWidth={1} />
                    <span className="text-gray-700 text-base font-ultra-light">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 font-ultra-light transition-all duration-300 text-base hover:scale-105 ${
                plan.popular
                  ? 'minimal-button'
                  : 'minimal-button-outline'
              }`}>
                get started
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
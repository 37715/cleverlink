import React from 'react';
import { Check, Star } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter AI Package',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI automation and intelligent solutions',
      features: [
        'AI-powered website design',
        'Basic business automation',
        'Email support & onboarding',
        '5 custom AI workflows',
        'Monthly performance reports'
      ],
      popular: false
    },
    {
      name: 'Professional AI Suite',
      price: '$799',
      period: '/month',
      description: 'Advanced AI solutions and automation services for growing businesses and enterprises',
      features: [
        'Everything in Starter Package',
        '24/7 AI virtual receptionist',
        'Advanced analytics & insights',
        'Priority customer support',
        'Unlimited automation workflows',
        'Custom API integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise AI Solutions',
      price: 'custom',
      period: '',
      description: 'Tailored artificial intelligence solutions and consulting for large organizations',
      features: [
        'Everything in Professional Suite',
        'Custom AI model development',
        'Dedicated account manager',
        'White-label AI solutions',
        'Enterprise-grade security',
        'SLA guarantees & compliance'
      ],
      popular: false
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-12 sm:mb-16">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-ultra-light mb-4 sm:mb-6 text-black">
            ai services pricing & packages
          </h2>
          <div className="w-12 h-px bg-black mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-xl mx-auto font-ultra-light px-4">
            <span className="font-ultra-light">select the perfect ai automation and consulting package to transform your business operations and drive growth</span>
          </p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {plans.map((plan, index) => (
            <ScrollReveal
              key={index}
              delay={index * 0.1}
              className={`relative bg-white border p-6 sm:p-8 transition-all duration-500 hover:translate-y-[-4px] hover:shadow-lg hover:scale-105 cursor-pointer ${
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
              
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="font-accent text-xl sm:text-2xl font-light mb-2 text-black">{plan.name}</h3>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base font-ultra-light">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl sm:text-4xl font-ultra-light text-black">{plan.price}</span>
                  <span className="text-gray-600 text-sm sm:text-base">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-black flex-shrink-0" strokeWidth={1} />
                    <span className="text-gray-700 text-sm sm:text-base font-ultra-light">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-2 sm:py-3 font-ultra-light transition-all duration-300 text-sm sm:text-base hover:scale-105 ${
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
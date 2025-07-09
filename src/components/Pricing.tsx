import React from 'react';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'AI Website Design',
        'Basic Automation',
        'Email Support',
        '5 AI Workflows',
        'Monthly Reports'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Advanced AI solutions for growing businesses',
      features: [
        'Everything in Starter',
        'AI Receptionist',
        'Advanced Analytics',
        'Priority Support',
        'Unlimited Workflows',
        'Custom Integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored AI solutions for large organizations',
      features: [
        'Everything in Professional',
        'Custom AI Models',
        'Dedicated Support',
        'White-label Solutions',
        'Advanced Security',
        'SLA Guarantees'
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your AI Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Select the perfect plan to transform your business with AI
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-[#2A2438] rounded-2xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                plan.popular
                  ? 'border-[#8A3FFC] shadow-[#8A3FFC]/20'
                  : 'border-[#8A3FFC]/20 hover:border-[#8A3FFC]/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-[#8A3FFC] to-[#A855F7] text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#8A3FFC] flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-r from-[#8A3FFC] to-[#A855F7] text-white hover:scale-105 hover:shadow-xl'
                  : 'border border-[#8A3FFC] text-[#8A3FFC] hover:bg-[#8A3FFC] hover:text-white'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
import React from 'react';
import { ArrowLeft, Users, Target, Award } from 'lucide-react';
import { ScrollReveal, FadeIn } from '@/components/ui/scroll-reveal';

const About = () => {
  const handleBackToHome = () => {
    window.location.href = '/';
  };

  const values = [
    {
      icon: Target,
      title: 'mission',
      description: 'to democratize artificial intelligence and make cutting-edge automation accessible to businesses of all sizes.'
    },
    {
      icon: Users,
      title: 'vision',
      description: 'a world where every business can harness the power of ai to unlock their full potential and drive meaningful growth.'
    },
    {
      icon: Award,
      title: 'values',
      description: 'transparency, innovation, and excellence in every ai solution we deliver to our clients.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Back Navigation */}
      <div className="py-6 sm:py-8 px-4 sm:px-6 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={handleBackToHome}
              className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors duration-300 font-ultra-light text-sm"
            >
              <ArrowLeft className="w-4 h-4" strokeWidth={1} />
              back to home
            </button>
          </div>
          
          <div className="text-center">
            <FadeIn>
              <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-ultra-light mb-2 text-black tracking-wider">
                cleverlink
              </h1>
              <div className="w-16 h-px bg-black mx-auto mb-6"></div>
              <p className="text-lg sm:text-xl text-gray-600 font-ultra-light">
                about our ai agency
              </p>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Story Section */}
          <ScrollReveal className="mb-16 sm:mb-20">
            <h2 className="font-heading text-2xl sm:text-3xl font-ultra-light mb-6 text-black text-center">
              our story
            </h2>
            <div className="w-12 h-px bg-black mx-auto mb-8"></div>
            <div className="max-w-3xl mx-auto space-y-6 text-gray-600 font-ultra-light text-base sm:text-lg leading-relaxed">
              <p>
                founded in 2024, cleverlink emerged from a simple observation: businesses everywhere were struggling to keep pace with rapid technological advancement while maintaining the human touch that defines great service.
              </p>
              <p>
                we recognized that artificial intelligence wasn't just about replacing human effort—it was about amplifying human potential. our team of ai specialists, designers, and business strategists came together with a shared vision: to create ai solutions that feel natural, work seamlessly, and deliver measurable results.
              </p>
              <p>
                today, we partner with businesses across industries to implement intelligent automation, ai-powered customer service, and custom solutions that transform operations while preserving what makes each business unique.
              </p>
            </div>
          </ScrollReveal>

          {/* Values Section */}
          <ScrollReveal delay={0.2} className="mb-16 sm:mb-20">
            <h2 className="font-heading text-2xl sm:text-3xl font-ultra-light mb-6 text-black text-center">
              what drives us
            </h2>
            <div className="w-12 h-px bg-black mx-auto mb-12"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
              {values.map((value, index) => (
                <ScrollReveal 
                  key={index}
                  delay={index * 0.1}
                  className="text-center group"
                >
                  <div className="w-12 h-12 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-6 h-6 text-black" strokeWidth={1} />
                  </div>
                  <h3 className="font-accent text-lg font-light mb-4 text-black">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 font-ultra-light text-sm sm:text-base leading-relaxed">
                    {value.description}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>

          {/* Approach Section */}
          <ScrollReveal delay={0.3} className="mb-16 sm:mb-20">
            <h2 className="font-heading text-2xl sm:text-3xl font-ultra-light mb-6 text-black text-center">
              our approach
            </h2>
            <div className="w-12 h-px bg-black mx-auto mb-8"></div>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                <div className="border-l-2 border-gray-200 pl-6">
                  <h3 className="font-accent text-lg font-light mb-3 text-black">listen & understand</h3>
                  <p className="text-gray-600 font-ultra-light text-sm sm:text-base">
                    every project begins with deep understanding of your business, challenges, and goals. we believe the best ai solutions emerge from genuine human insight.
                  </p>
                </div>
                <div className="border-l-2 border-gray-200 pl-6">
                  <h3 className="font-accent text-lg font-light mb-3 text-black">design with purpose</h3>
                  <p className="text-gray-600 font-ultra-light text-sm sm:text-base">
                    our solutions are crafted to integrate seamlessly into your existing workflows, enhancing rather than disrupting your operations.
                  </p>
                </div>
                <div className="border-l-2 border-gray-200 pl-6">
                  <h3 className="font-accent text-lg font-light mb-3 text-black">deliver & support</h3>
                  <p className="text-gray-600 font-ultra-light text-sm sm:text-base">
                    implementation is just the beginning. we provide ongoing support, optimization, and evolution as your business grows.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact CTA */}
          <ScrollReveal delay={0.4} className="text-center">
            <div className="bg-gray-50 p-8 sm:p-12 max-w-2xl mx-auto">
              <h3 className="font-heading text-xl sm:text-2xl font-ultra-light mb-4 text-black">
                ready to work together?
              </h3>
              <p className="text-gray-600 font-ultra-light text-sm sm:text-base mb-6">
                let's discuss how ai can transform your business operations and drive meaningful growth.
              </p>
              <button
                onClick={() => window.location.href = '/get-started'}
                className="inline-flex items-center gap-3 px-6 py-3 bg-black text-white font-ultra-light text-sm tracking-wide hover:bg-gray-900 transition-colors duration-300"
              >
                start your transformation
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Footer */}
      <div className="py-8 px-4 sm:px-6 border-t border-gray-100 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs sm:text-sm text-gray-500 font-ultra-light">
            cleverlink © 2024 • minimal ai solutions for modern businesses
          </p>
        </div>
      </div>
    </div>
  );
};

export default About; 
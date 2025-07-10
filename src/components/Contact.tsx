import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

const Contact = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-12 sm:mb-16">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-ultra-light mb-4 sm:mb-6 text-black">
            get in touch
          </h2>
          <div className="w-12 h-px bg-black mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-xl mx-auto font-ultra-light px-4">
            <span className="font-ultra-light">ready to transform your business with ai? let's discuss your unique needs and craft the perfect solution together</span>
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-4xl mx-auto">
          {/* Email */}
          <ScrollReveal delay={0.2} className="text-center">
            <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Mail className="w-6 h-6 text-black" strokeWidth={1} />
            </div>
            <h3 className="font-accent text-lg sm:text-xl font-light mb-3 sm:mb-4 text-black">
              email us
            </h3>
            <p className="text-gray-600 font-ultra-light text-sm sm:text-base mb-4">
              get a response within 24 hours
            </p>
            <a 
              href="mailto:cleverlink.ai@outlook.com" 
              className="text-black hover:text-gray-700 transition-colors duration-300 font-ultra-light text-sm sm:text-base"
            >
              cleverlink.ai@outlook.com
            </a>
          </ScrollReveal>

          {/* Location */}
          <ScrollReveal delay={0.4} className="text-center">
            <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <MapPin className="w-6 h-6 text-black" strokeWidth={1} />
            </div>
            <h3 className="font-accent text-lg sm:text-xl font-light mb-3 sm:mb-4 text-black">
              office location
            </h3>
            <p className="text-gray-600 font-ultra-light text-sm sm:text-base mb-4">
              serving clients globally
            </p>
            <p className="text-black font-ultra-light text-sm sm:text-base">
              hampshire, united kingdom
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import React from 'react';
import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react';
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto mb-12">
          {/* Phone */}
          <ScrollReveal delay={0.1} className="text-center">
            <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Phone className="w-6 h-6 text-black" strokeWidth={1} />
            </div>
            <h3 className="font-accent text-lg sm:text-xl font-light mb-3 sm:mb-4 text-black">
              call us
            </h3>
            <p className="text-gray-600 font-ultra-light text-sm sm:text-base mb-4">
              speak with us directly
            </p>
            <a 
              href="tel:+447469237953" 
              className="text-black hover:text-gray-700 transition-colors duration-300 font-ultra-light text-sm sm:text-base"
            >
              +44 7469237953
            </a>
          </ScrollReveal>

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

          {/* WhatsApp */}
          <ScrollReveal delay={0.3} className="text-center">
            <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <MessageCircle className="w-6 h-6 text-black" strokeWidth={1} />
            </div>
            <h3 className="font-accent text-lg sm:text-xl font-light mb-3 sm:mb-4 text-black">
              whatsapp
            </h3>
            <p className="text-gray-600 font-ultra-light text-sm sm:text-base mb-4">
              instant messaging support
            </p>
            <a 
              href="https://wa.me/447469237953?text=Hi%20CleverLink%2C%20I%27m%20interested%20in%20your%20AI%20services" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-700 transition-colors duration-300 font-ultra-light text-sm sm:text-base"
            >
              message us
            </a>
          </ScrollReveal>
        </div>

        {/* Call-to-Action Buttons */}
        <ScrollReveal delay={0.4} className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            <a 
              href="tel:+447469237953"
              className="inline-flex items-center px-6 py-3 bg-black text-white font-ultra-light text-sm sm:text-base rounded-lg hover:bg-gray-800 transition-colors duration-300 gap-2 min-w-[200px] justify-center"
            >
              <Phone className="w-4 h-4" strokeWidth={1} />
              call now
            </a>
            <a 
              href="https://wa.me/447469237953?text=Hi%20CleverLink%2C%20I%27m%20interested%20in%20your%20AI%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-ultra-light text-sm sm:text-base rounded-lg hover:bg-green-700 transition-colors duration-300 gap-2 min-w-[200px] justify-center"
            >
              <MessageCircle className="w-4 h-4" strokeWidth={1} />
              whatsapp us
            </a>
            <a 
              href="mailto:cleverlink.ai@outlook.com?subject=AI%20Services%20Inquiry&body=Hi%20CleverLink%2C%0A%0AI%27m%20interested%20in%20learning%20more%20about%20your%20AI%20services.%0A%0ABest%20regards"
              className="inline-flex items-center px-6 py-3 border border-black text-black font-ultra-light text-sm sm:text-base rounded-lg hover:bg-gray-50 transition-colors duration-300 gap-2 min-w-[200px] justify-center"
            >
              <Mail className="w-4 h-4" strokeWidth={1} />
              email us
            </a>
          </div>
        </ScrollReveal>

        {/* Location */}
        <ScrollReveal delay={0.5} className="text-center mt-12">
          <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <MapPin className="w-6 h-6 text-black" strokeWidth={1} />
          </div>
          <h3 className="font-accent text-lg sm:text-xl font-light mb-3 sm:mb-4 text-black">
            office location
          </h3>
          <p className="text-gray-600 font-ultra-light text-sm sm:text-base mb-2">
            serving clients globally
          </p>
          <p className="text-black font-ultra-light text-sm sm:text-base">
            hampshire, united kingdom
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;
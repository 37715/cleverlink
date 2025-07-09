import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-ultra-light mb-6 text-white">
            contact
          </h2>
          <div className="w-12 h-px bg-white mx-auto mb-8"></div>
          <p className="text-xl text-zinc-400 max-w-xl mx-auto font-ultra-light">
            <span className="font-ultra-light">get in touch with our ai experts to discuss your project</span>
          </p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ScrollReveal delay={0.2} className="bg-zinc-900 border border-zinc-800 p-8 transition-all duration-500 hover:scale-105 hover:shadow-xl cursor-pointer">
            <h3 className="font-accent text-xl font-light mb-6 text-white">send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-ultra-light text-zinc-400 mb-2">
                    full name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 focus:outline-none focus:border-white transition-all duration-300 font-ultra-light text-white placeholder-zinc-500"
                    placeholder="john doe"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-ultra-light text-zinc-400 mb-2">
                    email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 focus:outline-none focus:border-white transition-all duration-300 font-ultra-light text-white placeholder-zinc-500"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-ultra-light text-zinc-400 mb-2">
                  company name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 focus:outline-none focus:border-white transition-all duration-300 font-ultra-light text-white placeholder-zinc-500"
                  placeholder="your company"
                />
              </div>
              
              <div>
                <label className="block text-sm font-ultra-light text-zinc-400 mb-2">
                  message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 focus:outline-none focus:border-white transition-all duration-300 resize-none font-ultra-light text-white placeholder-zinc-500"
                  placeholder="tell us about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 bg-white text-black border border-white font-ultra-light transition-all duration-300 hover:bg-transparent hover:text-white hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                send message
              </button>
            </form>
          </ScrollReveal>
          
          {/* Contact Info */}
          <ScrollReveal delay={0.4} className="space-y-8">
            <div className="bg-zinc-900 border border-zinc-800 p-8 transition-all duration-500 hover:scale-105 hover:shadow-xl cursor-pointer">
              <h3 className="font-accent text-xl font-light mb-6 text-white">get in touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white flex items-center justify-center transition-transform duration-300 hover:scale-110">
                    <Mail className="w-4 h-4 text-black" strokeWidth={1} />
                  </div>
                  <div>
                    <p className="font-light text-white">email</p>
                    <p className="text-zinc-400 text-sm font-ultra-light">hello@cleverlink.ai</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white flex items-center justify-center transition-transform duration-300 hover:scale-110">
                    <Phone className="w-4 h-4 text-black" strokeWidth={1} />
                  </div>
                  <div>
                    <p className="font-light text-white">phone</p>
                    <p className="text-zinc-400 text-sm font-ultra-light">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white flex items-center justify-center transition-transform duration-300 hover:scale-110">
                    <MapPin className="w-4 h-4 text-black" strokeWidth={1} />
                  </div>
                  <div>
                    <p className="font-light text-white">office</p>
                    <p className="text-zinc-400 text-sm font-ultra-light">san francisco, ca</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-zinc-900 border border-zinc-800 p-8 transition-all duration-500 hover:scale-105 hover:shadow-xl cursor-pointer">
              <h3 className="font-accent text-lg font-light mb-4 text-white">why choose us?</h3>
              <ul className="space-y-2 text-zinc-400">
                <li className="text-sm font-ultra-light">• 24/7 ai-powered support</li>
                <li className="text-sm font-ultra-light">• custom solutions for your needs</li>
                <li className="text-sm font-ultra-light">• proven track record of success</li>
                <li className="text-sm font-ultra-light">• cutting-edge technology</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
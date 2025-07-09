import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

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
    <section className="py-20 px-6 bg-gradient-to-b from-[#2A2438] to-[#1F1B2E]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get in touch with our AI experts to discuss your project
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-[#1F1B2E] rounded-2xl p-8 border border-[#8A3FFC]/20">
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#2A2438] border border-[#8A3FFC]/20 rounded-xl focus:outline-none focus:border-[#8A3FFC] focus:ring-2 focus:ring-[#8A3FFC]/20 focus:shadow-lg focus:shadow-[#8A3FFC]/10 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#2A2438] border border-[#8A3FFC]/20 rounded-xl focus:outline-none focus:border-[#8A3FFC] focus:ring-2 focus:ring-[#8A3FFC]/20 focus:shadow-lg focus:shadow-[#8A3FFC]/10 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#2A2438] border border-[#8A3FFC]/20 rounded-xl focus:outline-none focus:border-[#8A3FFC] focus:ring-2 focus:ring-[#8A3FFC]/20 focus:shadow-lg focus:shadow-[#8A3FFC]/10 transition-all duration-300"
                  placeholder="Your Company"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-[#2A2438] border border-[#8A3FFC]/20 rounded-xl focus:outline-none focus:border-[#8A3FFC] focus:ring-2 focus:ring-[#8A3FFC]/20 focus:shadow-lg focus:shadow-[#8A3FFC]/10 transition-all duration-300 resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#8A3FFC] to-[#A855F7] rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#8A3FFC]/30 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-[#1F1B2E] rounded-2xl p-8 border border-[#8A3FFC]/20">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#8A3FFC] to-[#A855F7] rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-400">contact@aiservices.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#8A3FFC] to-[#A855F7] rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#8A3FFC] to-[#A855F7] rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Office</p>
                    <p className="text-gray-400">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#1F1B2E] rounded-2xl p-8 border border-[#8A3FFC]/20">
              <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• 24/7 AI-powered support</li>
                <li>• Custom solutions for your needs</li>
                <li>• Proven track record of success</li>
                <li>• Cutting-edge technology</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1F1B2E] border-t border-[#8A3FFC]/20 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#8A3FFC] to-[#A855F7] bg-clip-text text-transparent">
              AI Services
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Revolutionizing businesses through cutting-edge AI solutions. 
              Transform your operations with our intelligent automation and design services.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-[#2A2438] rounded-lg flex items-center justify-center hover:bg-[#8A3FFC] transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#2A2438] rounded-lg flex items-center justify-center hover:bg-[#8A3FFC] transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#2A2438] rounded-lg flex items-center justify-center hover:bg-[#8A3FFC] transition-colors duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#2A2438] rounded-lg flex items-center justify-center hover:bg-[#8A3FFC] transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#8A3FFC] transition-colors duration-300">Web Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#8A3FFC] transition-colors duration-300">Automation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#8A3FFC] transition-colors duration-300">AI Receptionists</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#8A3FFC] transition-colors duration-300">Custom AI</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#8A3FFC] transition-colors duration-300">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#8A3FFC] transition-colors duration-300">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#8A3FFC] transition-colors duration-300">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#8A3FFC] transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-[#8A3FFC]/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 AI Services. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-[#8A3FFC] text-sm transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-[#8A3FFC] text-sm transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-[#8A3FFC] text-sm transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
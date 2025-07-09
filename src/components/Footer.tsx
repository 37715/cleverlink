import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-heading text-xl font-medium mb-4 text-black tracking-wider">
              cleverlink
            </h3>
            <p className="text-gray-600 mb-6 max-w-md font-light text-sm">
              revolutionizing businesses through cutting-edge ai solutions. 
              transform your operations with our intelligent automation and design services.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 border border-gray-200 flex items-center justify-center hover:border-black transition-colors duration-300">
                <Twitter className="w-4 h-4 text-gray-600" strokeWidth={1} />
              </a>
              <a href="#" className="w-8 h-8 border border-gray-200 flex items-center justify-center hover:border-black transition-colors duration-300">
                <Linkedin className="w-4 h-4 text-gray-600" strokeWidth={1} />
              </a>
              <a href="#" className="w-8 h-8 border border-gray-200 flex items-center justify-center hover:border-black transition-colors duration-300">
                <Github className="w-4 h-4 text-gray-600" strokeWidth={1} />
              </a>
              <a href="#" className="w-8 h-8 border border-gray-200 flex items-center justify-center hover:border-black transition-colors duration-300">
                <Mail className="w-4 h-4 text-gray-600" strokeWidth={1} />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-accent font-medium mb-4 text-black text-sm">services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors duration-300 text-sm font-light">web design</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors duration-300 text-sm font-light">automation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors duration-300 text-sm font-light">ai receptionists</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors duration-300 text-sm font-light">custom ai</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-accent font-medium mb-4 text-black text-sm">company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors duration-300 text-sm font-light">about</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors duration-300 text-sm font-light">features</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors duration-300 text-sm font-light">pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors duration-300 text-sm font-light">contact</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-xs font-light">
            © 2025 cleverlink. all rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-black text-xs transition-colors duration-300 font-light">privacy policy</a>
            <a href="#" className="text-gray-600 hover:text-black text-xs transition-colors duration-300 font-light">terms of service</a>
            <a href="#" className="text-gray-600 hover:text-black text-xs transition-colors duration-300 font-light">cookie policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Mail } from 'lucide-react';

const Footer = () => {
  const handleNavigation = (path: string) => {
    if (path.startsWith('#')) {
      // For internal page sections, scroll to element
      const element = document.querySelector(path);
      if (element) {
        const offset = 80; // Account for any fixed headers
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      // For new pages, update URL
      window.location.href = path;
    }
  };

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
              <a 
                href="mailto:cleverlink.ai@outlook.com" 
                className="w-8 h-8 border border-gray-200 flex items-center justify-center hover:border-black transition-colors duration-300"
              >
                <Mail className="w-4 h-4 text-gray-600" strokeWidth={1} />
              </a>
            </div>
          </div>
          
          {/* Services Links */}
          <div>
            <h4 className="font-accent font-medium mb-4 text-black text-sm">services</h4>
            <ul className="space-y-2">
              <li><button onClick={() => handleNavigation('#features')} className="text-gray-600 hover:text-black transition-colors duration-300 text-sm font-light text-left">web design</button></li>
              <li><button onClick={() => handleNavigation('#features')} className="text-gray-600 hover:text-black transition-colors duration-300 text-sm font-light text-left">automation</button></li>
              <li><button onClick={() => handleNavigation('#features')} className="text-gray-600 hover:text-black transition-colors duration-300 text-sm font-light text-left">ai receptionists</button></li>
              <li><button onClick={() => handleNavigation('#features')} className="text-gray-600 hover:text-black transition-colors duration-300 text-sm font-light text-left">custom ai</button></li>
            </ul>
          </div>
          
          {/* Company Links */}
          <div>
            <h4 className="font-accent font-medium mb-4 text-black text-sm">company</h4>
            <ul className="space-y-2">
              <li><button onClick={() => handleNavigation('/about')} className="text-gray-600 hover:text-black transition-colors duration-300 text-sm font-light text-left">about</button></li>
              <li><button onClick={() => handleNavigation('#features')} className="text-gray-600 hover:text-black transition-colors duration-300 text-sm font-light text-left">features</button></li>
              <li><button onClick={() => handleNavigation('#contact')} className="text-gray-600 hover:text-black transition-colors duration-300 text-sm font-light text-left">contact</button></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between pt-8 border-t border-gray-100">
          <p className="text-gray-600 text-xs font-light">
            © 2025 cleverlink. all rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <button onClick={() => handleNavigation('/privacy-policy')} className="text-gray-600 hover:text-black text-xs transition-colors duration-300 font-light">privacy policy</button>
            <button onClick={() => handleNavigation('/terms-of-service')} className="text-gray-600 hover:text-black text-xs transition-colors duration-300 font-light">terms of service</button>
            <button onClick={() => handleNavigation('/cookie-policy')} className="text-gray-600 hover:text-black text-xs transition-colors duration-300 font-light">cookie policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
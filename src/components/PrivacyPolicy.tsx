import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { ScrollReveal, FadeIn } from '@/components/ui/scroll-reveal';

const PrivacyPolicy = () => {
  const handleBackToHome = () => {
    window.location.href = '/';
  };

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
                privacy policy
              </h1>
              <div className="w-16 h-px bg-black mx-auto mb-6"></div>
              <p className="text-lg sm:text-xl text-gray-600 font-ultra-light">
                effective date: january 10, 2025
              </p>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          
          <ScrollReveal className="mb-8">
            <div className="prose prose-gray max-w-none">
              <div className="text-gray-600 font-ultra-light text-base leading-relaxed space-y-6">
                <p>
                  at cleverlink, we take your privacy seriously. this privacy policy explains how we collect, use, and protect your information when you use our website and services.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="space-y-12">
            
            <ScrollReveal delay={0.1}>
              <h2 className="font-heading text-xl sm:text-2xl font-ultra-light mb-4 text-black">
                information we collect
              </h2>
              <div className="text-gray-600 font-ultra-light text-base leading-relaxed space-y-4">
                <p>
                  we collect information you provide directly to us, such as when you:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>fill out our contact form or request a consultation</li>
                  <li>subscribe to our email updates</li>
                  <li>communicate with us via email or phone</li>
                  <li>use our website and services</li>
                </ul>
                <p>
                  this information may include your name, email address, company name, phone number, and details about your business needs.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h2 className="font-heading text-xl sm:text-2xl font-ultra-light mb-4 text-black">
                how we use your information
              </h2>
              <div className="text-gray-600 font-ultra-light text-base leading-relaxed space-y-4">
                <p>
                  we use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>provide and improve our ai consulting services</li>
                  <li>respond to your inquiries and requests</li>
                  <li>send you relevant updates about our services</li>
                  <li>analyze website usage to improve user experience</li>
                  <li>comply with legal obligations</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <h2 className="font-heading text-xl sm:text-2xl font-ultra-light mb-4 text-black">
                information sharing
              </h2>
              <div className="text-gray-600 font-ultra-light text-base leading-relaxed space-y-4">
                <p>
                  we do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>with trusted service providers who assist in our operations</li>
                  <li>when required by law or to protect our rights</li>
                  <li>in connection with a business transfer or merger</li>
                </ul>
                <p>
                  all third-party service providers are required to maintain the confidentiality of your information.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <h2 className="font-heading text-xl sm:text-2xl font-ultra-light mb-4 text-black">
                data security
              </h2>
              <div className="text-gray-600 font-ultra-light text-base leading-relaxed space-y-4">
                <p>
                  we implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. however, no method of transmission over the internet is 100% secure.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <h2 className="font-heading text-xl sm:text-2xl font-ultra-light mb-4 text-black">
                your rights
              </h2>
              <div className="text-gray-600 font-ultra-light text-base leading-relaxed space-y-4">
                <p>
                  you have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>access the personal information we hold about you</li>
                  <li>request correction of inaccurate information</li>
                  <li>request deletion of your personal information</li>
                  <li>opt out of marketing communications</li>
                  <li>withdraw consent for data processing</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.6}>
              <h2 className="font-heading text-xl sm:text-2xl font-ultra-light mb-4 text-black">
                cookies and tracking
              </h2>
              <div className="text-gray-600 font-ultra-light text-base leading-relaxed space-y-4">
                <p>
                  our website uses cookies to enhance your browsing experience and analyze site traffic. you can control cookie settings through your browser preferences.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.7}>
              <h2 className="font-heading text-xl sm:text-2xl font-ultra-light mb-4 text-black">
                updates to this policy
              </h2>
              <div className="text-gray-600 font-ultra-light text-base leading-relaxed space-y-4">
                <p>
                  we may update this privacy policy from time to time. we will notify you of any changes by posting the new policy on this page with an updated effective date.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.8}>
              <h2 className="font-heading text-xl sm:text-2xl font-ultra-light mb-4 text-black">
                contact us
              </h2>
              <div className="text-gray-600 font-ultra-light text-base leading-relaxed space-y-4">
                <p>
                  if you have any questions about this privacy policy or our data practices, please contact us at:
                </p>
                <div className="bg-gray-50 p-4 border-l-2 border-gray-200">
                  <p>email: cleverlink.ai@outlook.com</p>
                  <p>location: hampshire, united kingdom</p>
                </div>
              </div>
            </ScrollReveal>

          </div>
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

export default PrivacyPolicy; 
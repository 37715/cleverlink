import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { ScrollReveal, FadeIn } from '@/components/ui/scroll-reveal';

const TermsOfService = () => {
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
                terms of service
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
                  these terms of service govern your use of cleverlink's website and services. by accessing our website or using our services, you agree to these terms.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="space-y-12">
            
            <ScrollReveal delay={0.1}>
              <h2 className="font-heading text-xl sm:text-2xl font-ultra-light mb-4 text-black">
                acceptance of terms
              </h2>
              <div className="text-gray-600 font-ultra-light text-base leading-relaxed space-y-4">
                <p>
                  by accessing and using cleverlink's website and services, you accept and agree to be bound by the terms and provision of this agreement. if you do not agree to abide by the above, please do not use this service.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h2 className="font-heading text-xl sm:text-2xl font-ultra-light mb-4 text-black">
                use of services
              </h2>
              <div className="text-gray-600 font-ultra-light text-base leading-relaxed space-y-4">
                <p>
                  you may use our website and services for lawful purposes only. you agree not to use our services:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>for any unlawful purpose or to solicit others to perform unlawful acts</li>
                  <li>to violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                  <li>to infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                  <li>to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                  <li>to submit false or misleading information</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <h2 className="font-heading text-xl sm:text-2xl font-ultra-light mb-4 text-black">
                service provision
              </h2>
              <div className="text-gray-600 font-ultra-light text-base leading-relaxed space-y-4">
                <p>
                  cleverlink provides ai consulting, automation services, and related technology solutions. we reserve the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>modify or discontinue services with reasonable notice</li>
                  <li>refuse service to anyone for any reason at any time</li>
                  <li>update our service offerings and pricing</li>
                </ul>
                <p>
                  all services are provided "as is" and we make no warranties regarding the availability, functionality, or performance of our services.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <h2 className="font-heading text-xl sm:text-2xl font-ultra-light mb-4 text-black">
                intellectual property
              </h2>
              <div className="text-gray-600 font-ultra-light text-base leading-relaxed space-y-4">
                <p>
                  the service and its original content, features, and functionality are and will remain the exclusive property of cleverlink and its licensors. the service is protected by copyright, trademark, and other laws.
                </p>
                <p>
                  you may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our service without our prior written consent.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <h2 className="font-heading text-xl sm:text-2xl font-ultra-light mb-4 text-black">
                client responsibilities
              </h2>
              <div className="text-gray-600 font-ultra-light text-base leading-relaxed space-y-4">
                <p>
                  when engaging our services, clients are responsible for:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>providing accurate and complete information</li>
                  <li>timely payment of agreed fees</li>
                  <li>maintaining confidentiality of any proprietary methods shared</li>
                  <li>complying with all applicable laws and regulations</li>
                  <li>providing necessary access and cooperation for service delivery</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.6}>
              <h2 className="font-heading text-xl sm:text-2xl font-ultra-light mb-4 text-black">
                limitation of liability
              </h2>
              <div className="text-gray-600 font-ultra-light text-base leading-relaxed space-y-4">
                <p>
                  in no event shall cleverlink, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.7}>
              <h2 className="font-heading text-xl sm:text-2xl font-ultra-light mb-4 text-black">
                indemnification
              </h2>
              <div className="text-gray-600 font-ultra-light text-base leading-relaxed space-y-4">
                <p>
                  you agree to defend, indemnify, and hold harmless cleverlink and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees).
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.8}>
              <h2 className="font-heading text-xl sm:text-2xl font-ultra-light mb-4 text-black">
                termination
              </h2>
              <div className="text-gray-600 font-ultra-light text-base leading-relaxed space-y-4">
                <p>
                  we may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the terms.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.9}>
              <h2 className="font-heading text-xl sm:text-2xl font-ultra-light mb-4 text-black">
                governing law
              </h2>
              <div className="text-gray-600 font-ultra-light text-base leading-relaxed space-y-4">
                <p>
                  these terms shall be interpreted and governed by the laws of the united kingdom, without regard to its conflict of law provisions.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={1.0}>
              <h2 className="font-heading text-xl sm:text-2xl font-ultra-light mb-4 text-black">
                contact information
              </h2>
              <div className="text-gray-600 font-ultra-light text-base leading-relaxed space-y-4">
                <p>
                  if you have any questions about these terms of service, please contact us at:
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

export default TermsOfService; 
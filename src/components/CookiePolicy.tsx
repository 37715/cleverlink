import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { ScrollReveal, FadeIn } from '@/components/ui/scroll-reveal';

const CookiePolicy = () => {
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
                cookie policy
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
                  this cookie policy explains how cleverlink uses cookies and similar technologies to recognize you when you visit our website. it explains what these technologies are and why we use them, as well as your rights to control our use of them.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="space-y-12">
            
            <ScrollReveal delay={0.1}>
              <h2 className="font-heading text-xl sm:text-2xl font-ultra-light mb-4 text-black">
                what are cookies?
              </h2>
              <div className="text-gray-600 font-ultra-light text-base leading-relaxed space-y-4">
                <p>
                  cookies are small data files that are placed on your computer or mobile device when you visit a website. cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
                </p>
                <p>
                  cookies set by the website owner (in this case, cleverlink) are called "first party cookies". cookies set by parties other than the website owner are called "third party cookies".
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h2 className="font-heading text-xl sm:text-2xl font-ultra-light mb-4 text-black">
                why do we use cookies?
              </h2>
              <div className="text-gray-600 font-ultra-light text-base leading-relaxed space-y-4">
                <p>
                  we use first and third party cookies for several reasons:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>to ensure our website functions properly</li>
                  <li>to improve your browsing experience</li>
                  <li>to understand how visitors use our website</li>
                  <li>to remember your preferences and settings</li>
                  <li>to provide relevant content and advertising</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <h2 className="font-heading text-xl sm:text-2xl font-ultra-light mb-4 text-black">
                types of cookies we use
              </h2>
              <div className="text-gray-600 font-ultra-light text-base leading-relaxed space-y-6">
                
                <div>
                  <h3 className="font-accent text-lg font-light mb-2 text-black">essential cookies</h3>
                  <p>
                    these cookies are strictly necessary to provide you with services available through our website and to use some of its features, such as access to secure areas.
                  </p>
                </div>

                <div>
                  <h3 className="font-accent text-lg font-light mb-2 text-black">performance cookies</h3>
                  <p>
                    these cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. they help us to know which pages are the most and least popular and see how visitors move around the site.
                  </p>
                </div>

                <div>
                  <h3 className="font-accent text-lg font-light mb-2 text-black">functionality cookies</h3>
                  <p>
                    these cookies enable the website to provide enhanced functionality and personalisation. they may be set by us or by third party providers whose services we have added to our pages.
                  </p>
                </div>

                <div>
                  <h3 className="font-accent text-lg font-light mb-2 text-black">targeting cookies</h3>
                  <p>
                    these cookies may be set through our site by our advertising partners. they may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <h2 className="font-heading text-xl sm:text-2xl font-ultra-light mb-4 text-black">
                how can you control cookies?
              </h2>
              <div className="text-gray-600 font-ultra-light text-base leading-relaxed space-y-4">
                <p>
                  you have the right to decide whether to accept or reject cookies. you can exercise your cookie rights by setting your preferences in your browser settings.
                </p>
                <p>
                  most web browsers allow some control of most cookies through the browser settings. to find out more about cookies, including how to see what cookies have been set, visit:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>google chrome: chrome://settings/cookies</li>
                  <li>firefox: about:preferences#privacy</li>
                  <li>safari: preferences &gt; privacy</li>
                  <li>internet explorer: internet options &gt; privacy</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <h2 className="font-heading text-xl sm:text-2xl font-ultra-light mb-4 text-black">
                third-party cookies
              </h2>
              <div className="text-gray-600 font-ultra-light text-base leading-relaxed space-y-4">
                <p>
                  in addition to our own cookies, we may also use various third-party cookies to report usage statistics of the service and deliver advertisements on and through the service.
                </p>
                <p>
                  these third-party service providers may include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>google analytics for website performance analysis</li>
                  <li>social media platforms for content sharing</li>
                  <li>advertising networks for relevant ad delivery</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.6}>
              <h2 className="font-heading text-xl sm:text-2xl font-ultra-light mb-4 text-black">
                updates to this policy
              </h2>
              <div className="text-gray-600 font-ultra-light text-base leading-relaxed space-y-4">
                <p>
                  we may update this cookie policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. please therefore re-visit this cookie policy regularly to stay informed about our use of cookies and related technologies.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.7}>
              <h2 className="font-heading text-xl sm:text-2xl font-ultra-light mb-4 text-black">
                contact us
              </h2>
              <div className="text-gray-600 font-ultra-light text-base leading-relaxed space-y-4">
                <p>
                  if you have any questions about our use of cookies or other technologies, please contact us at:
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

export default CookiePolicy; 
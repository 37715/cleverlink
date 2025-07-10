import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Send, User, Mail, Building, Target, FileText, Bot, ArrowLeft, CheckCircle, Home } from 'lucide-react';
import { ScrollReveal, FadeIn } from '@/components/ui/scroll-reveal';
import { supabase, TABLES, FormSubmission } from '@/lib/supabase';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    selectedService: '',
    companyName: '',
    problems: '',
    additionalInfo: ''
  });
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const services = [
    { value: 'ai-agent', label: 'AI Agent', icon: Bot },
    { value: 'ai-phone-agent', label: 'AI Phone Agent', icon: Bot },
    { value: 'email-automation', label: 'Email Automation', icon: Mail },
    { value: 'social-media-automation', label: 'Social Media Automation', icon: Target }
  ];

  // Pre-fill email from sessionStorage
  useEffect(() => {
    const prefillEmail = sessionStorage.getItem('prefillEmail');
    if (prefillEmail) {
      setFormData(prev => ({ ...prev, email: prefillEmail }));
      // Clear the stored email after using it
      sessionStorage.removeItem('prefillEmail');
    }
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear any previous errors
    if (submitError) {
      setSubmitError('');
    }
  };

  const handleServiceSelect = (service: { value: string; label: string; icon: any }) => {
    setFormData(prev => ({ ...prev, selectedService: service.value }));
    setIsDropdownOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Prepare data for Supabase
      const submissionData: FormSubmission = {
        name: formData.name,
        email: formData.email,
        selected_service: formData.selectedService,
        company_name: formData.companyName || undefined,
        problems: formData.problems,
        additional_info: formData.additionalInfo || undefined,
      };

      // Insert into Supabase
      const { data, error } = await supabase
        .from(TABLES.FORM_SUBMISSIONS)
        .insert([submissionData])
        .select();

      if (error) {
        console.error('Supabase error:', error);
        throw new Error('Failed to submit form. Please try again.');
      }

      console.log('Form submitted successfully:', data);
      setIsSubmitted(true);
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError(error instanceof Error ? error.message : 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackToHome = () => {
    window.location.href = '/';
  };

  const selectedServiceObj = services.find(s => s.value === formData.selectedService);

  // Success screen after form submission
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="max-w-lg mx-auto px-4 text-center">
          <FadeIn>
            <div className="mb-8">
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" strokeWidth={1} />
              <h1 className="font-heading text-2xl sm:text-3xl font-ultra-light mb-4 text-black">
                thank you!
              </h1>
              <p className="text-gray-600 font-ultra-light mb-8">
                we've received your information and will be in touch within 24 hours to discuss your ai transformation.
              </p>
              <button
                onClick={handleBackToHome}
                className="inline-flex items-center gap-3 px-6 py-3 bg-black text-white font-ultra-light text-sm tracking-wide hover:bg-gray-900 transition-colors duration-300"
              >
                <Home className="w-4 h-4" strokeWidth={1} />
                return home
              </button>
            </div>
          </FadeIn>
        </div>
      </div>
    );
  }

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
                cleverlink
              </h1>
              <div className="w-16 h-px bg-black mx-auto mb-6"></div>
              <p className="text-lg sm:text-xl text-gray-600 font-ultra-light">
                initialize your ai transformation
              </p>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal className="mb-8 sm:mb-12 text-center">
            <h2 className="font-heading text-2xl sm:text-3xl font-ultra-light mb-4 text-black">
              get started with ai solutions
            </h2>
            <p className="text-gray-600 font-ultra-light text-sm sm:text-base">
              tell us about your business needs and we'll craft the perfect ai solution for you
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              {/* Error Message */}
              {submitError && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-600 font-ultra-light text-sm">
                  {submitError}
                </div>
              )}

              {/* Name Field */}
              <div className="group">
                <label className="flex items-center gap-2 text-sm font-light text-black mb-3">
                  <User className="w-4 h-4" strokeWidth={1} />
                  name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  required
                  className="w-full px-4 py-3 sm:py-4 border border-gray-200 focus:border-black focus:outline-none transition-colors duration-300 font-ultra-light text-sm sm:text-base bg-white"
                  placeholder="your full name"
                />
              </div>

              {/* Email Field */}
              <div className="group">
                <label className="flex items-center gap-2 text-sm font-light text-black mb-3">
                  <Mail className="w-4 h-4" strokeWidth={1} />
                  email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                  className="w-full px-4 py-3 sm:py-4 border border-gray-200 focus:border-black focus:outline-none transition-colors duration-300 font-ultra-light text-sm sm:text-base bg-white"
                  placeholder="your email address"
                />
              </div>

              {/* Service Selection Dropdown */}
              <div className="group relative">
                <label className="flex items-center gap-2 text-sm font-light text-black mb-3">
                  <Bot className="w-4 h-4" strokeWidth={1} />
                  selected service
                </label>
                <div className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full px-4 py-3 sm:py-4 border border-gray-200 focus:border-black focus:outline-none transition-colors duration-300 font-ultra-light text-sm sm:text-base bg-white flex items-center justify-between text-left"
                  >
                    <span className={selectedServiceObj ? 'text-black' : 'text-gray-500'}>
                      {selectedServiceObj ? selectedServiceObj.label : 'choose your ai service'}
                    </span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} strokeWidth={1} />
                  </button>
                  
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 border-t-0 z-50 max-h-60 overflow-y-auto">
                      {services.map((service) => {
                        const IconComponent = service.icon;
                        return (
                          <button
                            key={service.value}
                            type="button"
                            onClick={() => handleServiceSelect(service)}
                            className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center gap-3 font-ultra-light text-sm sm:text-base border-b border-gray-100 last:border-b-0"
                          >
                            <IconComponent className="w-4 h-4 text-gray-600" strokeWidth={1} />
                            <span className="text-black">{service.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>

              {/* Company Name */}
              <div className="group">
                <label className="flex items-center gap-2 text-sm font-light text-black mb-3">
                  <Building className="w-4 h-4" strokeWidth={1} />
                  company name
                </label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  className="w-full px-4 py-3 sm:py-4 border border-gray-200 focus:border-black focus:outline-none transition-colors duration-300 font-ultra-light text-sm sm:text-base bg-white"
                  placeholder="your company or organization"
                />
              </div>

              {/* Problems to Solve */}
              <div className="group">
                <label className="flex items-center gap-2 text-sm font-light text-black mb-3">
                  <Target className="w-4 h-4" strokeWidth={1} />
                  what problems are you looking to solve?
                </label>
                <textarea
                  value={formData.problems}
                  onChange={(e) => handleInputChange('problems', e.target.value)}
                  required
                  rows={4}
                  className="w-full px-4 py-3 sm:py-4 border border-gray-200 focus:border-black focus:outline-none transition-colors duration-300 font-ultra-light text-sm sm:text-base bg-white resize-none"
                  placeholder="describe the challenges you're facing and how ai could help transform your business..."
                />
              </div>

              {/* Additional Information */}
              <div className="group">
                <label className="flex items-center gap-2 text-sm font-light text-black mb-3">
                  <FileText className="w-4 h-4" strokeWidth={1} />
                  additional information
                </label>
                <textarea
                  value={formData.additionalInfo}
                  onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 sm:py-4 border border-gray-200 focus:border-black focus:outline-none transition-colors duration-300 font-ultra-light text-sm sm:text-base bg-white resize-none"
                  placeholder="any additional details, timeline, budget considerations, or specific requirements..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4 sm:pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 sm:py-5 bg-black text-white font-ultra-light text-sm sm:text-base tracking-wide hover:bg-gray-900 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      processing...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" strokeWidth={1} />
                      initialize ai transformation
                    </>
                  )}
                </button>
              </div>
            </form>
          </ScrollReveal>
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

export default ContactForm; 
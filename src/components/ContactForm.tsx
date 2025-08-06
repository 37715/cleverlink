import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Send, User, Mail, Building, Target, FileText, Bot, ArrowLeft, CheckCircle, Home, Phone, MessageCircle } from 'lucide-react';
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

      // Send confirmation and notification emails
      try {
        const { data: emailData, error: emailError } = await supabase.functions.invoke('send-emails', {
          body: { 
            formData: {
              name: formData.name,
              email: formData.email,
              selectedService: services.find(s => s.value === formData.selectedService)?.label || formData.selectedService,
              companyName: formData.companyName,
              problems: formData.problems,
              additionalInfo: formData.additionalInfo
            }
          },
        });

        if (emailError) {
          console.error('Email sending error:', emailError);
          // Don't throw error here - form submission was successful, emails are secondary
        } else {
          console.log('Emails sent successfully:', emailData);
        }
      } catch (emailError) {
        console.error('Email function error:', emailError);
        // Don't throw error here - form submission was successful, emails are secondary
      }

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
          
          <div className="text-center mb-12">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-ultra-light mb-4 text-black">
              get in contact
            </h1>
            <div className="w-16 h-px bg-black mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-ultra-light">
              ready to transform your business with ai? let's discuss your unique needs
            </p>
          </div>
          
          {/* Contact Options */}
          <div className="max-w-2xl mx-auto">
            <div className="grid gap-4 sm:gap-6">
              {/* Call Button */}
              <a 
                href="tel:+447469237953"
                className="flex items-center gap-4 p-6 border border-gray-200 rounded-lg hover:border-black hover:bg-gray-50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                  <Phone className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-lg font-light mb-1 text-black">call now</h3>
                  <p className="text-gray-600 font-ultra-light text-sm mb-1">speak with us directly</p>
                  <p className="text-black font-light">+44 7469237953</p>
                </div>
              </a>
              
              {/* WhatsApp Button */}
              <a 
                href="https://wa.me/447469237953?text=Hi%20CleverLink%2C%20I%27m%20interested%20in%20your%20AI%20services.%20Can%20you%20tell%20me%20more%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 border border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center group-hover:bg-green-700 transition-colors">
                  <MessageCircle className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-lg font-light mb-1 text-black">whatsapp us</h3>
                  <p className="text-gray-600 font-ultra-light text-sm mb-1">instant messaging support</p>
                  <p className="text-green-600 font-light">start conversation</p>
                </div>
              </a>
              
              {/* Email Button */}
              <a 
                href="mailto:cleverlink.ai@outlook.com?subject=AI%20Services%20Inquiry&body=Hi%20CleverLink%2C%0A%0AI%27m%20interested%20in%20learning%20more%20about%20your%20AI%20services.%0A%0ABest%20regards"
                className="flex items-center gap-4 p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                  <Mail className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-lg font-light mb-1 text-black">email us</h3>
                  <p className="text-gray-600 font-ultra-light text-sm mb-1">get a response within 24 hours</p>
                  <p className="text-blue-600 font-light">cleverlink.ai@outlook.com</p>
                </div>
              </a>
            </div>
            
            <div className="text-center mt-8 sm:mt-12">
              <p className="text-gray-500 font-ultra-light text-sm">
                <strong>office:</strong> hampshire, united kingdom
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
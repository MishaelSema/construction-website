'use client';

import { useState } from 'react';
import { X, Phone, Mail, MapPin, Send } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      onClose();
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose}></div>
      
      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 font-montserrat">Get in Touch</h2>
              <p className="text-gray-600 font-montserrat">Let&apos;s discuss your project</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 font-montserrat">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-[#033231]/10 rounded-full flex items-center justify-center">
                        <Phone className="w-5 h-5 text-[#033231]" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-montserrat">Phone</p>
                        <a href="tel:+237679080426" className="text-gray-900 hover:text-[#033231] transition-colors font-montserrat">
                          +237 679080426
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-[#033231]/10 rounded-full flex items-center justify-center">
                        <Mail className="w-5 h-5 text-[#033231]" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-montserrat">Email</p>
                        <a href="mailto:mishaelsema@gmail.com" className="text-gray-900 hover:text-[#033231] transition-colors font-montserrat">
                          mishaelsema@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-[#033231]/10 rounded-full flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-[#033231]" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-montserrat">Address</p>
                        <p className="text-gray-900 font-montserrat">Damas, Yaounde, Cameroon</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#033231]/5 rounded-2xl p-4">
                  <h4 className="font-semibold text-[#033231] mb-2 font-montserrat">Why Choose Us?</h4>
                  <ul className="text-sm text-gray-600 space-y-1 font-montserrat">
                    <li>• 25+ Years of Experience</li>
                    <li>• Licensed & Insured</li>
                    <li>• Quality Materials</li>
                    <li>• On-Time Delivery</li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 font-montserrat">Send us a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 font-montserrat">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#033231] focus:border-transparent transition-colors font-montserrat"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 font-montserrat">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#033231] focus:border-transparent transition-colors font-montserrat"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 font-montserrat">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#033231] focus:border-transparent transition-colors font-montserrat"
                      placeholder="+237 679080426"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1 font-montserrat">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#033231] focus:border-transparent transition-colors font-montserrat"
                    >
                      <option value="">Select a service</option>
                      <option value="residential">Residential Construction</option>
                      <option value="commercial">Commercial Buildings</option>
                      <option value="renovation">Renovation & Remodeling</option>
                      <option value="consultation">Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 font-montserrat">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#033231] focus:border-transparent transition-colors font-montserrat"
                      placeholder="Tell us about your project, timeline, budget, and any specific requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#033231] hover:bg-[#022220] text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 font-montserrat"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;

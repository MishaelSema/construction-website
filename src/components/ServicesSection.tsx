'use client';

import { HomeIcon, BuildingIcon, ToolsIcon } from './icons';
import { useState } from 'react';
import ContactModal from './ContactModal';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const services = [
    {
      icon: HomeIcon,
      title: "Residential Construction",
      description: "Custom-built homes designed with care, quality, and Yaounde's unique character in mind.",
      features: ["Custom Home Design", "Energy Efficient Building", "Smart Home Integration"],
      color: "blue"
    },
    {
      icon: BuildingIcon,
      title: "Commercial Buildings",
      description: "Smart, scalable commercial spaces that support growth and reflect your business values.",
      features: ["Office Buildings", "Retail Spaces", "Restaurants"],
      color: "green"
    },
    {
      icon: ToolsIcon,
      title: "Renovation & Remodeling",
      description: "Transform existing spaces with modern upgrades, improved function, and fresh appeal.",
      features: ["Kitchen Remodeling", "Bathroom Renovation", "Room Additions"],
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    // All services now use consistent primary color scheme
    return "bg-[#033231]/10 text-[#033231] hover:bg-[#033231]/20";
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Our Full-Spectrum Construction Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
          {services.map((service, index) => (
            <div key={index} className="relative group">
              {/* Service Image - Full Width */}
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <div className="text-center text-gray-600 font-montserrat">
                    <div className="w-16 h-16 bg-[#033231] rounded-2xl mx-auto mb-4 flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-lg font-medium">Service Image {index + 1}</p>
                    <p className="text-sm">Professional construction photo</p>
                  </div>
                </div>
              </div>
              
              {/* Service Card - Much smaller (15% of image) */}
              <div className="relative md:absolute md:bottom-0 md:left-1/2 md:transform md:-translate-x-1/2 md:translate-y-1/2 w-full md:w-[15%] md:min-w-[120px] mt-6 md:mt-0">
                <div className="bg-white rounded-2xl shadow-lg p-3 md:p-4">
                  <div className="text-center">
                    <div className={`w-8 h-8 md:w-10 md:h-10 ${getColorClasses(service.color)} rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-3`}>
                      <service.icon className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <h3 className="text-sm md:text-base font-montserrat font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <button className="text-xs md:text-sm text-gray-700 underline hover:text-[#033231] transition-colors font-medium font-montserrat">
                      Enquire Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2 mb-8">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveService(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                activeService === index ? 'bg-[#033231]' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Active Service Details */}
        <div className="text-center max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-gray-900 mb-4">
            {services[activeService].title}
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed font-montserrat mb-6">
            {services[activeService].description}
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {services[activeService].features.map((feature, index) => (
              <span key={index} className="bg-[#033231]/10 text-[#033231] px-3 py-1 rounded-full text-sm font-medium font-montserrat">
                {feature}
              </span>
            ))}
          </div>
          <button 
            onClick={() => setIsContactModalOpen(true)}
            className="bg-[#033231] hover:bg-[#022220] text-white font-semibold py-3 px-8 rounded-2xl transition-colors duration-200 font-montserrat"
          >
            Get Free Quote
          </button>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </section>
  );
};

export default ServicesSection;

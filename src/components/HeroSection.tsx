'use client';

import React from 'react';
import { CheckCircle, Clock, Award } from 'lucide-react';

const HeroSection = () => {

  const slides = [
    {
      title: "Building Your Dreams to Reality",
      subtitle: "25+ Years of Excellence",
      description: "From custom homes to commercial spaces, Metro Builds delivers quality construction solutions across Yaounde, Cameroon — on time, on budget, and built to last.",
      image: "/hero-1.jpg",
      cta: "Enquire Now"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const features = [
    { icon: Clock, text: "On Time" },
    { icon: Award, text: "ISO Certified" },
    { icon: CheckCircle, text: "Quality Materials" }
  ];

  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Background Image with Dark Teal Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#033231]/80 to-[#033231]/60"></div>
        <div className="w-full h-full bg-gray-800 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="w-32 h-32 bg-[#033231] rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <span className="text-4xl font-bold">🏗️</span>
            </div>
            <p className="text-lg">Construction Background Image</p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 flex items-center justify-center pt-32 pb-20">
        <div className="container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <div className="fade-in">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-4 sm:mb-6 leading-tight">
                Building Your Dreams to Reality
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed px-4">
                From custom homes to commercial spaces, Metro Builds delivers quality construction solutions across Yaounde, Cameroon — on time, on budget, and built to last.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4">
              <button className="bg-[#cbff54] hover:bg-[#b8e64a] text-[#033231] font-semibold py-3 px-6 sm:px-8 rounded-2xl transition-colors duration-200 text-base sm:text-lg">
                Enquire Now
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-3 px-6 sm:px-8 rounded-2xl transition-colors duration-200 text-base sm:text-lg">
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Card */}
      <div className="relative z-10 bg-white rounded-t-3xl">
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#033231]/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#033231]" />
                </div>
                <h3 className="text-lg sm:text-xl font-display font-bold text-gray-900 mb-2">{feature.text}</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {feature.text === "On Time" && "We respect your time with planning and predictable project timelines."}
                  {feature.text === "ISO Certified" && "We respect your time with planning and predictable project timelines."}
                  {feature.text === "Quality Materials" && "We use trusted brands and durable materials suited for Texas conditions."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

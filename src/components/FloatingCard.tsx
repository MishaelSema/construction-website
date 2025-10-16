'use client';

import { Clock, Award, CheckCircle } from 'lucide-react';

const FloatingCard = () => {
  const features = [
    {
      icon: Clock,
      title: "On Time",
      description: "We respect your time with planning and predictable project timelines."
    },
    {
      icon: Award,
      title: "ISO Certified",
      description: "We maintain the highest standards with ISO certification for quality assurance."
    },
    {
      icon: CheckCircle,
      title: "Quality Materials",
      description: "We use trusted brands and durable materials suited for Cameroon conditions."
    }
  ];

  return (
    <div className="relative z-20 -mt-16 mb-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {features.map((feature, index) => (
              <div key={index} className={`p-8 ${index < features.length - 1 ? 'border-r border-gray-100' : ''}`}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#033231]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-[#033231]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingCard;

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Kwame Asante",
      role: "Residential Construction",
      project: "Custom Home Construction",
      rating: 5,
      text: "It turned our dream home into reality. The attention to detail and craftsmanship were truly outstanding.",
      image: "/testimonial-1.jpg",
      location: "Yaounde, Cameroon",
      bgColor: "from-[#033231] to-[#022220]"
    },
    {
      id: 2,
      name: "Amina Okafor",
      role: "Commercial Project",
      project: "Commercial Office Renovation",
      rating: 5,
      text: "Professional, punctual, and reliable — Brikly delivered our office space on time and beyond expectations.",
      image: "/testimonial-2.jpg",
      location: "Douala, Cameroon",
      bgColor: "from-[#cbff54] to-[#b8e64a]"
    },
    {
      id: 3,
      name: "Ibrahim Ndiaye",
      role: "Renovation",
      project: "Multi-Family Development",
      rating: 5,
      text: "From the first consultation to the final handover, Brikly made the process smooth and stress-free.",
      image: "/testimonial-3.jpg",
      location: "Bamenda, Cameroon",
      bgColor: "from-gray-800 to-gray-900"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4 font-montserrat">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl h-96">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900">
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <div className="text-center text-gray-600 font-montserrat">
                    <div className="w-16 h-16 bg-[#033231] rounded-2xl mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white text-2xl">🏗️</span>
                    </div>
                    <p className="text-lg font-medium">Project Image {index + 1}</p>
                    <p className="text-sm">Construction project photo</p>
                  </div>
                </div>
              </div>
              
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.bgColor} opacity-80`}></div>
              
              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                {/* Top Section - Quote */}
                <div className="flex justify-end">
                  <div className="text-white/20 text-6xl font-bold font-montserrat">"</div>
                </div>
                
                {/* Middle Section - Testimonial */}
                <div className="flex-1 flex flex-col justify-center">
                  <p className="text-white text-lg leading-relaxed mb-6 font-montserrat">
                    {testimonial.text}
                  </p>
                  
                  {/* Stars */}
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-[#cbff54]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                
                {/* Bottom Section - Client Info */}
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-4 border-2 border-white/30">
                    <span className="text-white font-bold text-lg font-montserrat">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg font-montserrat">{testimonial.name}</h4>
                    <p className="text-white/80 text-sm font-montserrat">{testimonial.location}</p>
                    <p className="text-[#cbff54] text-sm font-medium font-montserrat">{testimonial.role}</p>
                  </div>
                </div>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#033231]/20 to-[#cbff54]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 text-lg mb-6 font-montserrat">
            Ready to join our satisfied clients?
          </p>
          <button className="bg-[#033231] hover:bg-[#022220] text-white font-semibold py-3 px-8 rounded-2xl transition-colors duration-200 font-montserrat">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
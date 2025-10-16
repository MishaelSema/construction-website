const ContactSection = () => {
  return (
    <section className="py-20 bg-[#033231] text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
                Let's Build Your Dream Home.
              </h2>
              <p className="text-xl text-gray-200 leading-relaxed font-montserrat">
                Whether it's a new build, a remodel, or just an idea — we're here to help bring it to life. Let's talk and explore how Brikly can make it happen.
              </p>
            </div>
            
            <button className="bg-[#cbff54] hover:bg-[#b8e64a] text-[#033231] font-semibold py-3 px-8 rounded-2xl transition-colors duration-200 text-lg">
              Enquire Now
            </button>
          </div>

          {/* Background Image */}
          <div className="relative">
            <div className="bg-gray-800 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-gray-300">
                <div className="w-24 h-24 bg-[#033231] rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-3xl">🏗️</span>
                </div>
                <p className="text-lg font-medium">Construction Background</p>
                <p className="text-sm">Modern building image</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
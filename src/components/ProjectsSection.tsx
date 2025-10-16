const ProjectsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-16">
          <div>
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4 font-montserrat">Our Projects</p>
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900 mb-6">
              Built to Last.<br />
              Designed to Inspire.
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-xl text-gray-600 leading-relaxed font-montserrat">
              From high-end homes to modern office spaces, each Brikly project is a reflection of quality, detail, and dedication.
            </p>
            <button className="bg-[#cbff54] hover:bg-[#b8e64a] text-[#033231] font-semibold py-3 px-8 rounded-2xl transition-colors duration-200">
              View All Projects
            </button>
          </div>
        </div>

        {/* Large-Small, Small-Large Grid Layout */}
        <div className="grid grid-cols-3 gap-4 h-[600px]">
          {/* Row 1: Large + Small */}
          
          {/* Project 1 - Large (spans 2 columns) */}
          <div className="col-span-2 row-span-1">
            <div className="bg-gray-300 rounded-2xl h-full flex items-center justify-center">
              <div className="text-center text-gray-600 font-montserrat">
                <div className="w-16 h-16 bg-[#033231] rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">🏢</span>
                </div>
                <p className="text-lg font-medium">Project 1</p>
                <p className="text-sm">Modern Office Building</p>
              </div>
            </div>
          </div>
          
          {/* Project 2 - Small (1 column) */}
          <div className="col-span-1 row-span-1">
            <div className="bg-gray-300 rounded-2xl h-full flex items-center justify-center">
              <div className="text-center text-gray-600 font-montserrat">
                <div className="w-10 h-10 bg-[#033231] rounded-2xl mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white text-sm">🏠</span>
                </div>
                <p className="text-sm font-medium">Project 2</p>
                <p className="text-xs">Residential</p>
              </div>
            </div>
          </div>
          
          {/* Row 2: Small + Large */}
          
          {/* Project 3 - Small (1 column) */}
          <div className="col-span-1 row-span-1">
            <div className="bg-gray-300 rounded-2xl h-full flex items-center justify-center">
              <div className="text-center text-gray-600 font-montserrat">
                <div className="w-10 h-10 bg-[#033231] rounded-2xl mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white text-sm">🔧</span>
                </div>
                <p className="text-sm font-medium">Project 3</p>
                <p className="text-xs">Renovation</p>
              </div>
            </div>
          </div>
          
          {/* Project 4 - Large (spans 2 columns) */}
          <div className="col-span-2 row-span-1">
            <div className="bg-gray-300 rounded-2xl h-full flex items-center justify-center">
              <div className="text-center text-gray-600 font-montserrat">
                <div className="w-16 h-16 bg-[#033231] rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">🏗️</span>
                </div>
                <p className="text-lg font-medium">Project 4</p>
                <p className="text-sm">Construction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
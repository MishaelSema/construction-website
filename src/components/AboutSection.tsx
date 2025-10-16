import { UsersIcon, AwardIcon, ClockIcon, ShieldIcon, HammerIcon, SettingsIcon, ConstructionIcon, BuildingIcon } from './icons';
import { CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: UsersIcon, number: "150+ Projects" },
    { icon: AwardIcon, number: "Licensed & ISO Certified" },
    { icon: ShieldIcon, number: "Experienced Team" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Images */}
          <div className="relative order-2 lg:order-1">
            {/* Main Image */}
            <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden">
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <div className="text-center text-gray-600 font-montserrat">
                  <div className="w-16 h-16 bg-[#033231] rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <ConstructionIcon className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg font-medium">About Image 1</p>
                  <p className="text-sm">Modern building photo</p>
                </div>
              </div>
            </div>
            
            {/* Overlay Image - Responsive positioning */}
            <div className="absolute bottom-4 right-4 w-32 h-24 sm:w-40 sm:h-32 lg:w-48 lg:h-36 bg-gray-300 rounded-2xl overflow-hidden shadow-lg">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center text-gray-600 font-montserrat">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#033231] rounded-2xl mx-auto mb-1 sm:mb-2 flex items-center justify-center">
                    <BuildingIcon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <p className="text-xs sm:text-sm font-medium">About Image 2</p>
                  <p className="text-xs">Building detail</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4 font-montserrat">About Us</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-bold text-gray-900 mb-4 lg:mb-6">
                Trusted Local Construction Partner in Yaounde.
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed font-montserrat">
                At Brikly, we're proud to serve Yaounde with reliable, high-quality construction services. From custom homes to commercial builds, our local expertise ensures every project is done right. We build with integrity, craftsmanship, and a commitment to your vision.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3 lg:space-y-4">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-[#033231] rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium font-montserrat">{stat.number}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
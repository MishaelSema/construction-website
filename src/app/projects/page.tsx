import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectsSection from '@/components/ProjectsSection';

export const metadata: Metadata = {
  title: 'Construction Projects - Portfolio & Case Studies',
  description: 'Explore our portfolio of completed construction projects including residential homes, commercial buildings, and industrial facilities. See our quality workmanship and attention to detail.',
  keywords: ['construction projects', 'portfolio', 'residential projects', 'commercial buildings', 'construction case studies', 'completed projects'],
};

const ProjectsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-gray-50 hero-curve hero-curve-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
                From Vision to Reality
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
                Explore a showcase of the spaces we've proudly built — and a preview of what's coming next. 
                Every build tells a story of trust, quality, and purpose.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary text-lg px-8 py-4">
                  Start Your Project
                </button>
                <button className="btn-outline text-lg px-8 py-4">
                  Get Free Quote
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <ProjectsSection />

        {/* Featured Project Spotlight */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                Featured Project Spotlight
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Take a closer look at one of our most challenging and rewarding projects that showcases our expertise and attention to detail.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="image-placeholder image-placeholder-xl">
                  <div className="image-content">
                    <div className="image-icon image-icon-xl">
                      <span className="text-white text-3xl">🏢</span>
                    </div>
                    <p className="image-title">Modern Office Complex</p>
                    <p className="image-subtitle">Featured project image</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-display font-bold text-gray-900 mb-4">
                  Corporate Headquarters Renovation
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  A complete transformation of a 50,000 sq ft corporate headquarters, featuring modern open-concept 
                  workspaces, state-of-the-art conference facilities, and sustainable design elements.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-[#033231]/10 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-[#033231] mb-1">50,000</div>
                    <div className="text-sm text-gray-600">Square Feet</div>
                  </div>
                  <div className="bg-[#033231]/10 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-[#033231] mb-1">8</div>
                    <div className="text-sm text-gray-600">Months</div>
                  </div>
                  <div className="bg-[#033231]/10 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-[#033231] mb-1">LEED</div>
                    <div className="text-sm text-gray-600">Certified</div>
                  </div>
                  <div className="bg-[#033231]/10 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-[#033231] mb-1">200+</div>
                    <div className="text-sm text-gray-600">Employees</div>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <h4 className="text-lg font-semibold text-gray-900">Project Highlights:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      <span className="text-gray-700">Modern open-concept workspace design</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      <span className="text-gray-700">State-of-the-art conference facilities</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      <span className="text-gray-700">Sustainable and energy-efficient systems</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      <span className="text-gray-700">Minimal disruption to ongoing operations</span>
                    </li>
                  </ul>
                </div>

                <button className="btn-primary">
                  View Full Case Study
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Project Statistics */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                Project Success Metrics
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our commitment to excellence is reflected in our project outcomes and client satisfaction ratings.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "150+", label: "Projects Completed", icon: "🏗️", description: "Successfully delivered across Texas" },
                { number: "98%", label: "Client Satisfaction", icon: "⭐", description: "Based on post-project surveys" },
                { number: "25+", label: "Years Experience", icon: "📅", description: "Building excellence since 1998" },
                { number: "100%", label: "On-Time Delivery", icon: "⏰", description: "Meeting project deadlines" }
              ].map((stat, index) => (
                <div key={index} className="text-center bg-white p-8 rounded-xl shadow-lg">
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-display font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join our portfolio of satisfied clients. Let's build something extraordinary together that you'll be proud to showcase.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors text-lg">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-lg transition-colors text-lg">
                Get Free Quote
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;

import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Home, Building2, Wrench, Factory, Hammer, Settings, CheckCircle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Construction Services - Residential, Commercial & Industrial',
  description: 'Comprehensive construction services including residential homes, commercial buildings, industrial projects, and renovation services. Expert craftsmanship with 25+ years experience.',
  keywords: ['construction services', 'residential construction', 'commercial building', 'industrial construction', 'home renovation', 'custom homes'],
};

const ServicesPage = () => {
  const mainServices = [
    {
      icon: Home,
      title: "Residential Construction",
      description: "We specialize in custom homes designed around your lifestyle, preferences, and budget — built with care, high-quality materials, and attention to detail.",
      features: [
        "Tailored floor plans and architecture",
        "Energy-efficient systems and modern designs", 
        "Seamless permit handling and inspections",
        "Built to suit Texas weather and local codes"
      ],
      color: "blue",
      image: "/service-residential.jpg"
    },
    {
      icon: Building2,
      title: "Commercial Buildings",
      description: "From retail stores to office buildings, we create efficient, functional, and durable spaces that help your business thrive and grow.",
      features: [
        "Structures to match your business goals",
        "Timely delivery and project coordination",
        "ADA-compliant and code-certified builds",
        "Minimal disruption to neighboring businesses"
      ],
      color: "green",
      image: "/service-commercial.jpg"
    },
    {
      icon: Wrench,
      title: "Renovation & Remodeling",
      description: "We breathe new life into outdated homes and commercial properties — making them more functional, stylish, and valuable.",
      features: [
        "Kitchen, bath, and whole-home upgrades",
        "Modernized layouts without full rebuilds",
        "Improved efficiency and resale value",
        "Expert structural and cosmetic updates"
      ],
      color: "orange",
      image: "/service-renovation.jpg"
    },
    {
      icon: Factory,
      title: "Industrial Projects",
      description: "Heavy-duty construction for manufacturing facilities, processing plants, and industrial infrastructure that meets strict requirements.",
      features: [
        "Manufacturing and processing facilities",
        "Industrial warehouses and distribution centers",
        "Utility buildings and infrastructure",
        "Specialized equipment installation"
      ],
      color: "purple",
      image: "/service-industrial.jpg"
    },
    {
      icon: Hammer,
      title: "Custom Homes",
      description: "Bespoke residential construction tailored to your lifestyle, preferences, and long-term vision for your family's future.",
      features: [
        "Architectural design and planning",
        "Luxury finishes and premium materials",
        "Smart home technology integration",
        "Sustainable and energy-efficient construction"
      ],
      color: "red",
      image: "/service-custom.jpg"
    },
    {
      icon: Settings,
      title: "Project Management",
      description: "Comprehensive project oversight from planning to completion, ensuring timelines, budgets, and quality standards are met.",
      features: [
        "Timeline management and scheduling",
        "Budget control and cost optimization",
        "Quality assurance and inspections",
        "Vendor coordination and procurement"
      ],
      color: "teal",
      image: "/service-management.jpg"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Plan & Discover",
      description: "We start with a detailed consultation to understand your vision, goals, and budget — followed by a site visit and early planning advice.",
      icon: "📋"
    },
    {
      step: "02", 
      title: "Design & Quote",
      description: "You'll receive a tailored design proposal, material insights, and a clear, itemized quote — no guesswork, just straightforward numbers.",
      icon: "📐"
    },
    {
      step: "03",
      title: "Build & Deliver", 
      description: "Our skilled team gets to work, keeping you informed at every stage. We wrap up with a final walkthrough and a project you'll be proud to call yours.",
      icon: "🔨"
    }
  ];

  const additionalServices = [
    "Site Preparation & Excavation",
    "Foundation & Structural Work", 
    "Roofing & Siding Installation",
    "Electrical & Plumbing Systems",
    "HVAC Installation & Service",
    "Flooring & Interior Finishes",
    "Landscaping & Outdoor Spaces",
    "Maintenance & Repair Services"
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600 hover:bg-blue-200",
      green: "bg-green-100 text-green-600 hover:bg-green-200", 
      orange: "bg-orange-100 text-orange-600 hover:bg-orange-200",
      purple: "bg-purple-100 text-purple-600 hover:bg-purple-200",
      red: "bg-red-100 text-red-600 hover:bg-red-200",
      teal: "bg-teal-100 text-teal-600 hover:bg-teal-200"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-gray-50 hero-curve hero-curve-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
                Our Construction Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
                At BuildCraft, we offer expert construction solutions tailored to fit your needs, 
                backed by 25+ years of experience and unwavering commitment to quality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary text-lg px-8 py-4">
                  Get Free Quote
                </button>
                <button className="btn-outline text-lg px-8 py-4">
                  View Our Work
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                Comprehensive Construction Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From residential homes to industrial facilities, we provide end-to-end construction solutions 
                that meet your specific requirements and exceed your expectations.
              </p>
            </div>

            <div className="space-y-16">
              {mainServices.map((service, index) => (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${getColorClasses(service.color)}`}>
                      <service.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-display font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-3 mb-8">
                      <h4 className="text-lg font-semibold text-gray-900">Key Benefits:</h4>
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <button className="btn-primary flex items-center space-x-2">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="image-placeholder image-placeholder-lg">
                      <div className="image-content">
                        <div className="image-icon image-icon-lg">
                          <service.icon className="w-10 h-10 text-white" />
                        </div>
                        <p className="image-title">{service.title}</p>
                        <p className="image-subtitle">Service image placeholder</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                Our Process, Made Simple
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We believe great construction starts with great communication. That&apos;s why our process is built around 
                transparency, trust, and timely execution — so you always know what to expect.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center bg-white p-8 rounded-xl shadow-lg">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                Additional Services & Specializations
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Beyond our core services, we offer specialized construction solutions to meet every aspect of your project needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:bg-blue-50 transition-colors">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 text-xl">🔧</span>
                  </div>
                  <h3 className="font-semibold text-gray-900">{service}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-white mb-6">
                Why Choose BuildCraft?
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Our commitment to excellence, combined with our comprehensive service offerings, makes us the ideal choice for your construction needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Licensed & Insured", description: "Fully licensed, bonded, and insured for your protection" },
                { title: "25+ Years Experience", description: "Decades of expertise in construction and project management" },
                { title: "Quality Materials", description: "We use only the finest materials and trusted suppliers" },
                { title: "On-Time Delivery", description: "Consistent track record of meeting project deadlines" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">✓</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-blue-100">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              From idea to reality, let&apos;s begin. Schedule a free consultation to discuss your construction needs 
              and get a detailed quote for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Schedule Free Consultation
              </button>
              <button className="btn-outline text-lg px-8 py-4">
                View Our Portfolio
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;

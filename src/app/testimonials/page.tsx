import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TestimonialsSection from '@/components/TestimonialsSection';

export const metadata: Metadata = {
  title: 'Client Testimonials - What Our Customers Say',
  description: 'Read real testimonials from satisfied BuildCraft Construction clients. Discover why homeowners and businesses choose us for their construction projects across Texas.',
  keywords: ['construction testimonials', 'client reviews', 'customer feedback', 'construction company reviews', 'satisfied clients'],
};

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-gray-50 hero-curve hero-curve-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
                What Our Clients Say
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
                Don't just take our word for it. Here's what our satisfied clients have to say about their 
                BuildCraft construction experience and the quality of our work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary text-lg px-8 py-4">
                  Start Your Project
                </button>
                <button className="btn-outline text-lg px-8 py-4">
                  View Our Portfolio
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Video Testimonials */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                Video Testimonials
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear directly from our clients about their construction experience and the results we delivered.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Custom Home Construction",
                  client: "Sarah & Michael Johnson",
                  location: "Austin, TX",
                  duration: "2:30"
                },
                {
                  title: "Commercial Office Renovation", 
                  client: "David Chen",
                  location: "Dallas, TX",
                  duration: "1:45"
                },
                {
                  title: "Kitchen & Bathroom Remodel",
                  client: "Lisa Martinez",
                  location: "Houston, TX", 
                  duration: "2:15"
                }
              ].map((video, index) => (
                <div key={index} className="bg-gray-50 rounded-xl overflow-hidden">
                  <div className="image-placeholder image-placeholder-sm">
                    <div className="image-content">
                      <div className="image-icon image-icon-md rounded-full">
                        <span className="text-white text-2xl">▶️</span>
                      </div>
                      <p className="image-title">Video Testimonial</p>
                      <p className="image-subtitle">{video.duration}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{video.title}</h3>
                    <p className="text-gray-600 mb-1">{video.client}</p>
                    <p className="text-sm text-gray-500">{video.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Review Platforms */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                Reviews Across Platforms
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our clients share their experiences on various review platforms. Check out our ratings and reviews.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  platform: "Google Reviews",
                  rating: "4.9",
                  reviews: "150+ reviews",
                  icon: "⭐"
                },
                {
                  platform: "Better Business Bureau",
                  rating: "A+",
                  reviews: "Accredited Business",
                  icon: "🏆"
                },
                {
                  platform: "Angie's List",
                  rating: "4.8",
                  reviews: "Top Rated",
                  icon: "📋"
                },
                {
                  platform: "HomeAdvisor",
                  rating: "4.9",
                  reviews: "Elite Service",
                  icon: "🏠"
                }
              ].map((platform, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div className="text-3xl mb-4">{platform.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{platform.platform}</h3>
                  <div className="text-2xl font-bold text-blue-600 mb-1">{platform.rating}</div>
                  <div className="text-sm text-gray-600">{platform.reviews}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Success Stories */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                Client Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Read detailed case studies about how we've helped our clients achieve their construction goals.
              </p>
            </div>

            <div className="space-y-12">
              {[
                {
                  title: "Modern Family Home Transformation",
                  client: "The Rodriguez Family",
                  project: "Custom Home Construction",
                  challenge: "Building a dream home within budget and timeline constraints",
                  solution: "Collaborative design process and efficient project management",
                  result: "Completed 2 weeks ahead of schedule, 15% under budget",
                  testimonial: "BuildCraft made our dream home a reality. Their attention to detail and communication throughout the process was exceptional."
                },
                {
                  title: "Commercial Office Renovation",
                  client: "TechStart Solutions",
                  project: "Office Space Renovation",
                  challenge: "Renovating while maintaining business operations",
                  solution: "Phased construction approach with minimal disruption",
                  result: "Zero downtime, 20% increase in employee satisfaction",
                  testimonial: "The team worked around our schedule and delivered a beautiful, functional space that our employees love."
                },
                {
                  title: "Historic Home Restoration",
                  client: "The Thompson Family",
                  project: "Historic Home Renovation",
                  challenge: "Preserving historic character while adding modern amenities",
                  solution: "Careful planning and specialized restoration techniques",
                  result: "Maintained historic integrity while improving energy efficiency by 40%",
                  testimonial: "They respected the history of our home while making it perfect for modern living. Absolutely outstanding work."
                }
              ].map((story, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                        {story.title}
                      </h3>
                      <div className="space-y-4 mb-6">
                        <div>
                          <span className="font-semibold text-gray-900">Client:</span>
                          <span className="text-gray-600 ml-2">{story.client}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-900">Project:</span>
                          <span className="text-gray-600 ml-2">{story.project}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-900">Challenge:</span>
                          <span className="text-gray-600 ml-2">{story.challenge}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-900">Solution:</span>
                          <span className="text-gray-600 ml-2">{story.solution}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-900">Result:</span>
                          <span className="text-gray-600 ml-2">{story.result}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <blockquote className="text-lg text-gray-700 italic leading-relaxed mb-4">
                        "{story.testimonial}"
                      </blockquote>
                      <div className="flex items-center space-x-2">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <span key={i}>⭐</span>
                          ))}
                        </div>
                        <span className="text-gray-600 text-sm">5.0 rating</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-display font-bold text-white mb-6">
              Trusted by Clients Across Texas
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our reputation for excellence and reliability has made us the preferred choice for construction projects.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">⭐</div>
                <div className="text-3xl font-bold text-white mb-2">4.9/5</div>
                <div className="text-blue-100 font-medium">Average Client Rating</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🔄</div>
                <div className="text-3xl font-bold text-white mb-2">85%</div>
                <div className="text-blue-100 font-medium">Repeat Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📞</div>
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-blue-100 font-medium">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
              Ready to Join Our Satisfied Clients?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Let us bring your construction vision to life with the same quality and dedication that our clients rave about.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Start Your Project Today
              </button>
              <button className="btn-outline text-lg px-8 py-4">
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

export default TestimonialsPage;

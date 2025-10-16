import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { LocationIcon, PhoneIcon, ClockIcon } from '../../components/icons';

export const metadata: Metadata = {
  title: 'Contact Us - Get Free Construction Quote',
  description: 'Contact BuildCraft Construction for your next project. Get a free consultation and detailed quote. Licensed, insured, and experienced construction company serving Texas.',
  keywords: ['contact construction company', 'free quote', 'construction consultation', 'texas builders', 'construction estimate'],
};

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-gray-50 hero-curve hero-curve-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
                Get in Touch with Metro Builds
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
                Reach out today to schedule a free consultation. We&apos;re here to help bring your construction vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary text-lg px-8 py-4">
                  Schedule Consultation
                </button>
                <button className="btn-outline text-lg px-8 py-4">
                  View Our Work
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />

        {/* Office Hours & Location */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                Visit Our Office
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stop by our office for an in-person consultation or to discuss your project in detail.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Office Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">
                    Office Information
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#033231]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <LocationIcon className="w-6 h-6 text-[#033231]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Address</h4>
                        <p className="text-gray-600">
                          123 Construction Avenue<br />
                          Building City, TX 12345<br />
                          United States
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#033231]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <ClockIcon className="w-6 h-6 text-[#033231]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Office Hours</h4>
                        <div className="text-gray-600 space-y-1">
                          <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                          <p>Saturday: 9:00 AM - 4:00 PM</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#033231]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <PhoneIcon className="w-6 h-6 text-[#033231]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Emergency Contact</h4>
                        <p className="text-gray-600">
                          For urgent construction issues:<br />
                          (555) 123-4567 (24/7)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-[#033231]/10 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Why Choose BuildCraft?</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-[#033231] rounded-full"></span>
                      <span>Free consultation and detailed quotes</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-[#033231] rounded-full"></span>
                      <span>Licensed, bonded, and insured</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-[#033231] rounded-full"></span>
                      <span>25+ years of experience</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-[#033231] rounded-full"></span>
                      <span>On-time project delivery</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-[#033231] rounded-full"></span>
                      <span>Quality materials and craftsmanship</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="relative">
                <div className="image-placeholder image-placeholder-xl">
                  <div className="image-content">
                    <div className="image-icon image-icon-xl">
                      <span className="text-white text-3xl">🗺️</span>
                    </div>
                    <p className="image-title">Interactive Map</p>
                    <p className="image-subtitle">Office location and directions</p>
                  </div>
                </div>
                
                {/* Map Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 bg-white p-4 rounded-lg shadow-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Get Directions</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Located in the heart of Building City, easily accessible from major highways.
                  </p>
                  <button className="btn-primary text-sm px-4 py-2">
                    Get Directions
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get answers to common questions about our construction services and process.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {[
                  {
                    question: "How long does a typical construction project take?",
                    answer: "Project timelines vary based on scope and complexity. Residential projects typically take 3-6 months, while commercial projects can range from 6-18 months. We provide detailed timelines during the planning phase."
                  },
                  {
                    question: "Do you provide free estimates?",
                    answer: "Yes, we offer free consultations and detailed estimates for all projects. Our estimates include material costs, labor, permits, and any additional services required."
                  },
                  {
                    question: "Are you licensed and insured?",
                    answer: "Absolutely. BuildCraft is fully licensed, bonded, and insured. We carry comprehensive liability insurance and workers' compensation coverage for your protection."
                  },
                  {
                    question: "What areas do you serve?",
                    answer: "We serve the greater Texas area, including Austin, Dallas, Houston, San Antonio, and surrounding communities. Contact us to confirm service availability in your specific location."
                  },
                  {
                    question: "Do you handle permits and inspections?",
                    answer: "Yes, we handle all necessary permits and coordinate with local building departments for inspections. This ensures your project meets all local codes and regulations."
                  },
                  {
                    question: "What payment methods do you accept?",
                    answer: "We accept various payment methods including cash, check, bank transfers, and major credit cards. We also offer flexible payment plans for larger projects."
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-display font-bold text-white mb-6">
              Ready to Start Your Construction Project?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Don&apos;t wait to bring your vision to life. Contact us today for a free consultation and detailed quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors text-lg">
                Call (555) 123-4567
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-lg transition-colors text-lg">
                Email Us
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;

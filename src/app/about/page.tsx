import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { UsersIcon, AwardIcon, ClockIcon, ShieldIcon, TargetIcon, HeartIcon } from '../../components/icons';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us - Building Excellence Since 1998',
  description: 'Learn about BuildCraft Construction\'s 25+ year journey of building dreams to reality. Discover our values, mission, and commitment to quality construction across Texas.',
  keywords: ['about buildcraft', 'construction company history', 'texas builders', 'construction team', 'company values'],
};

const AboutPage = () => {
  const stats = [
    { icon: UsersIcon, number: "150+", label: "Projects Completed", description: "Successfully delivered residential and commercial projects across Texas" },
    { icon: AwardIcon, number: "25+", label: "Years Experience", description: "Decades of expertise in construction and project management" },
    { icon: ShieldIcon, number: "100%", label: "Licensed & Insured", description: "Fully licensed, bonded, and insured for your protection" },
    { icon: ClockIcon, number: "98%", label: "On-Time Delivery", description: "Consistent track record of meeting project deadlines" }
  ];

  const values = [
    {
      icon: TargetIcon,
      title: "Our Vision",
      description: "To be Texas's most trusted construction partner, creating exceptional spaces that enhance communities and exceed expectations.",
      color: "blue"
    },
    {
      icon: HeartIcon,
      title: "Our Mission", 
      description: "We deliver superior construction services through innovative solutions, skilled craftsmanship, and unwavering commitment to client satisfaction.",
      color: "red"
    },
    {
      icon: ShieldIcon,
      title: "Our Values",
      description: "Integrity, quality, and reliability guide every project. We build lasting relationships through transparent communication and exceptional results.",
      color: "green"
    }
  ];

  const team = [
    {
      name: "Michael Rodriguez",
      role: "Founder & CEO",
      experience: "25+ Years",
      specialty: "Strategic Planning & Leadership",
      image: "/team-1.jpg"
    },
    {
      name: "Sarah Chen",
      role: "Head of Operations",
      experience: "15+ Years", 
      specialty: "Project Management & Quality Control",
      image: "/team-2.jpg"
    },
    {
      name: "David Thompson",
      role: "Lead Architect",
      experience: "20+ Years",
      specialty: "Design & Engineering",
      image: "/team-3.jpg"
    },
    {
      name: "Lisa Martinez",
      role: "Construction Manager",
      experience: "12+ Years",
      specialty: "Site Operations & Safety",
      image: "/team-4.jpg"
    }
  ];

  const certifications = [
    "Texas General Contractor License",
    "ISO 9001:2015 Certified",
    "OSHA Safety Certified",
    "LEED Accredited Professional",
    "Bonded & Insured",
    "BBB A+ Rating"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-gray-50 hero-curve hero-curve-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
                Building With Purpose, Backed by Trust
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
                At BuildCraft, we don't just build spaces — we build lasting relationships and communities that thrive for generations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary text-lg px-8 py-4">
                  Start Your Project
                </button>
                <button className="btn-outline text-lg px-8 py-4">
                  View Our Work
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                  Built in Texas. Trusted Across the Southwest.
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  At BuildCraft, we believe construction is more than just concrete and steel — it's about building trust, 
                  understanding your vision, and creating spaces that last for generations. Based in the heart of Texas, 
                  we've been delivering high-quality residential and commercial construction services across the Southwest 
                  with pride, precision, and purpose.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Founded in 1998, BuildCraft has grown from a small family business into one of Texas's most respected 
                  construction companies. Our journey has been marked by innovation, integrity, and an unwavering 
                  commitment to excellence that has earned us the trust of hundreds of satisfied clients.
                </p>
                <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-[#033231]/10 rounded-lg">
                  <div className="text-2xl font-bold text-[#033231] mb-1">25+</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
                <div className="text-center p-4 bg-[#033231]/10 rounded-lg">
                  <div className="text-2xl font-bold text-[#033231] mb-1">150+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                </div>
              </div>
              <div className="relative">
                <div className="image-placeholder image-placeholder-xl">
                  <div className="image-content">
                    <div className="image-icon image-icon-xl">
                      <span className="text-white text-3xl">🏗️</span>
                    </div>
                    <p className="image-title">Our Construction Team</p>
                    <p className="image-subtitle">Professional construction site image</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                Our Track Record Speaks for Itself
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Numbers tell a story, and ours is one of consistent excellence, client satisfaction, and project success.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="stats-card">
                  <div className="stats-icon">
                    <stat.icon className="w-8 h-8 text-[#033231]" />
                  </div>
                  <div className="stats-number">{stat.number}</div>
                  <div className="stats-label">{stat.label}</div>
                  <div className="stats-description">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision, Mission & Values */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                Vision, Mission & Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our foundation is built on clear principles that guide every decision, every project, and every relationship.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center p-8 bg-gray-50 rounded-xl">
                  <div className="w-16 h-16 bg-[#033231]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-[#033231]" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                Meet Our Leadership Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our experienced leadership team brings decades of construction expertise and a shared commitment to excellence.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="h-64 bg-gray-300 flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-white text-xl">👤</span>
                      </div>
                      <p className="text-sm">Team Member Photo</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                    <p className="text-sm text-gray-600 mb-2">{member.experience}</p>
                    <p className="text-sm text-gray-500">{member.specialty}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                Licensed, Certified & Trusted
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our certifications and licenses demonstrate our commitment to professional standards and client protection.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-display font-bold text-white mb-6">
              Ready to Work With Texas's Trusted Builders?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join the hundreds of satisfied clients who have chosen BuildCraft for their construction needs. 
              Let's build something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors text-lg">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-lg transition-colors text-lg">
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

export default AboutPage;

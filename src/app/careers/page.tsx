import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, MapPin, Clock, CheckCircle, ArrowRight, Award, Heart, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Careers at BuildCraft - Join Our Construction Team',
  description: 'Join BuildCraft Construction and be part of a team that builds with purpose. Explore career opportunities in construction, project management, and skilled trades across Texas.',
  keywords: ['construction jobs', 'construction careers', 'building jobs', 'project manager jobs', 'construction team', 'texas construction jobs'],
};

const CareersPage = () => {
  const openPositions = [
    {
      title: "Site Supervisor",
      location: "Austin, TX",
      type: "Full-time",
      experience: "5+ years",
      description: "Oversees daily operations, ensures site safety, coordinates teams, and monitors progress. Responsible for maintaining quality and delivering builds on time and within scope.",
      requirements: [
        "5+ years construction supervision experience",
        "OSHA safety certification required",
        "Strong leadership and communication skills",
        "Ability to read blueprints and manage schedules"
      ],
      benefits: ["Competitive salary", "Health insurance", "401k matching", "Paid time off"]
    },
    {
      title: "Project Manager",
      location: "Remote/Hybrid",
      type: "Full-time", 
      experience: "7+ years",
      description: "Manages construction projects from planning to handover. Handles budgets, schedules, client updates, and ensures adherence to design, compliance, and quality standards.",
      requirements: [
        "7+ years project management experience",
        "PMP certification preferred",
        "Construction industry experience required",
        "Proficiency in project management software"
      ],
      benefits: ["Competitive salary", "Health insurance", "401k matching", "Flexible schedule"]
    },
    {
      title: "Junior Architect",
      location: "In-Office",
      type: "Full-time",
      experience: "2+ years", 
      description: "Assists with architectural drawings, layout development, and client revisions. Collaborates with senior designers and engineers to bring residential and commercial plans to life.",
      requirements: [
        "Bachelor's degree in Architecture",
        "2+ years architectural experience",
        "Proficiency in AutoCAD and Revit",
        "Strong design and technical skills"
      ],
      benefits: ["Competitive salary", "Health insurance", "Professional development", "Mentorship program"]
    },
    {
      title: "Skilled Carpenter",
      location: "Dallas, TX",
      type: "Full-time",
      experience: "3+ years",
      description: "Performs skilled carpentry work including framing, finishing, and custom woodwork. Works on residential and commercial construction projects.",
      requirements: [
        "3+ years carpentry experience",
        "Knowledge of construction methods and materials",
        "Ability to work independently and in teams",
        "Valid driver's license required"
      ],
      benefits: ["Competitive hourly rate", "Health insurance", "Tool allowance", "Overtime opportunities"]
    },
    {
      title: "Construction Estimator",
      location: "Houston, TX", 
      type: "Full-time",
      experience: "4+ years",
      description: "Prepares detailed cost estimates for construction projects, analyzes blueprints, and collaborates with project teams to ensure accurate pricing.",
      requirements: [
        "4+ years construction estimating experience",
        "Knowledge of construction costs and methods",
        "Proficiency in estimating software",
        "Strong analytical and communication skills"
      ],
      benefits: ["Competitive salary", "Health insurance", "401k matching", "Performance bonuses"]
    },
    {
      title: "Safety Coordinator",
      location: "San Antonio, TX",
      type: "Full-time",
      experience: "3+ years",
      description: "Develops and implements safety programs, conducts training, and ensures compliance with OSHA regulations across all construction sites.",
      requirements: [
        "3+ years safety experience in construction",
        "OSHA 30-hour certification required",
        "Strong knowledge of safety regulations",
        "Excellent communication and training skills"
      ],
      benefits: ["Competitive salary", "Health insurance", "401k matching", "Professional development"]
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: "Competitive Pay",
      description: "We offer competitive salaries and benefits packages that reflect your skills and experience."
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, dental, vision, and wellness programs for you and your family."
    },
    {
      icon: Shield,
      title: "Job Security",
      description: "Work with a stable, growing company that has been in business for over 25 years."
    },
    {
      icon: Users,
      title: "Team Environment",
      description: "Collaborative, team-first environment where your contributions are valued and recognized."
    }
  ];

  const companyValues = [
    "Collaborative, team-first environment",
    "Competitive pay and benefits",
    "Licensed projects you'll be proud of", 
    "Career growth and training opportunities",
    "Respectful culture top to bottom",
    "Work-life balance and flexible schedules"
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
                Join the Team That Builds With Purpose
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
                Build More Than Just Buildings — Build a Future. At Metro Builds, we&apos;re not just constructing homes 
                and commercial spaces — we&apos;re building trust, opportunity, and lasting impact across Cameroon.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary text-lg px-8 py-4">
                  View Open Positions
                </button>
                <button className="btn-outline text-lg px-8 py-4">
                  Learn About Our Culture
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                Why Work With Us
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                At Metro Builds, you&apos;re more than just a team member — you&apos;re a builder of homes, dreams, and communities. 
                We value your skills, respect your time, and support your growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                  What We Offer
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {companyValues.map((value, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Founder's Message */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-display font-bold text-white mb-8">
                Founder&apos;s Message
              </h2>
              <blockquote className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-8 italic">
                &ldquo;At Metro Builds, every project is personal. I started this company with a simple belief: quality work, 
                delivered with honesty, never goes out of style. Our goal isn&apos;t just to complete jobs — it&apos;s to exceed 
                expectations, earn trust, and make a lasting impact on the communities we serve. From my first site visit 
                to the final nail, I&apos;m proud of the team that brings it all to life.&rdquo;
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">👤</span>
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold text-lg">Michael Rodriguez</div>
                  <div className="text-blue-100">Founder & CEO</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                Open Positions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join our growing team and help us build the future of construction in Texas.
              </p>
            </div>

            <div className="space-y-8">
              {openPositions.map((position, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <div className="flex items-center space-x-2 text-gray-600">
                          <MapPin className="w-4 h-4" />
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600">
                          <Clock className="w-4 h-4" />
                          <span>{position.type}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600">
                          <Users className="w-4 h-4" />
                          <span>{position.experience}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {position.description}
                      </p>
                    </div>
                    <div className="lg:ml-8">
                      <button className="btn-primary flex items-center space-x-2">
                        <span>Apply Now</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start space-x-2">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-gray-600 text-sm">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {position.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                How to Apply
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to join our team? Follow these simple steps to start your career with BuildCraft.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Submit Application",
                  description: "Fill out our online application form and upload your resume and cover letter.",
                  icon: "📝"
                },
                {
                  step: "02",
                  title: "Initial Interview",
                  description: "We'll review your application and schedule a phone or video interview.",
                  icon: "📞"
                },
                {
                  step: "03",
                  title: "Final Interview",
                  description: "Meet with our team for an in-person interview and site visit.",
                  icon: "🤝"
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-display font-bold text-white mb-6">
              Ready to Build Your Career With Us?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Don&apos;t see a position that matches your skills? We&apos;re always looking for talented individuals 
              to join our team. Send us your resume and let&apos;s talk about opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors text-lg">
                Submit General Application
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-lg transition-colors text-lg">
                Contact HR Team
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CareersPage;

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  const company = [
    'Home',
    'About',
    'Services',
    'Projects',
    'Contact'
  ];

  const support = [
    'Blog',
    'Careers',
    'Testimonials'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* CTA Banner */}
      <div className="bg-[#cbff54] py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-sm font-semibold text-[#033231] uppercase tracking-wide mb-2 font-montserrat">Ready to Start Your Project!</p>
              <h3 className="text-3xl md:text-4xl font-montserrat font-bold text-[#033231] mb-4">
                From Idea to Reality, Let's Begin
              </h3>
            </div>
            <div className="space-y-4">
              <p className="text-[#033231] text-lg font-montserrat">
                Your home should be more than a place to live — it should reflect your lifestyle, your values, and your dreams.
              </p>
              <button className="bg-[#033231] hover:bg-[#022220] text-[#cbff54] font-semibold py-3 px-8 rounded-2xl transition-colors duration-200">
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 justify-center md:justify-start">
              <div className="w-10 h-10 bg-[#033231] rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <div>
                <h3 className="text-2xl font-montserrat font-bold">Brikly</h3>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed font-montserrat">
              At Brikly, we are dedicated to delivering exceptional construction services that stand the test of time.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="#" className="text-gray-400 hover:text-[#cbff54] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#cbff54] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#cbff54] transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#cbff54] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className={`transition-colors rounded-xl px-2 py-1 ${
                      (item === 'Home' && pathname === '/') || 
                      (item !== 'Home' && pathname === `/${item.toLowerCase()}`)
                        ? 'text-[#cbff54] bg-[#cbff54]/10'
                        : 'text-gray-300 hover:text-[#cbff54] hover:bg-[#cbff54]/5'
                    }`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              {support.map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase()}`}
                    className={`transition-colors rounded-xl px-2 py-1 ${
                      pathname === `/${item.toLowerCase()}`
                        ? 'text-[#cbff54] bg-[#cbff54]/10'
                        : 'text-gray-300 hover:text-[#cbff54] hover:bg-[#cbff54]/5'
                    }`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 justify-center md:justify-start">
                <Phone className="w-5 h-5 text-[#cbff54]" />
                <div>
                  <a href="tel:+237679080426" className="text-gray-300 hover:text-[#cbff54] transition-colors">
                    +237 679080426
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3 justify-center md:justify-start">
                <Mail className="w-5 h-5 text-[#cbff54]" />
                <div>
                  <a href="mailto:mishaelsema@gmail.com" className="text-gray-300 hover:text-[#cbff54] transition-colors">
                    mishaelsema@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3 justify-center md:justify-start">
                <MapPin className="w-5 h-5 text-[#cbff54]" />
                <div>
                  <p className="text-gray-300">Damas, Yaounde, Cameroon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © {currentYear} Copyright by Brikly
              </p>
              <div className="flex space-x-6">
                <Link 
                  href="/privacy" 
                  className="text-gray-400 hover:text-[#cbff54] text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link 
                  href="/terms" 
                  className="text-gray-400 hover:text-[#cbff54] text-sm transition-colors"
                >
                  Terms & Condition
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
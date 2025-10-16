'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import ContactModal from './ContactModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>

        {/* Main navigation */}
        <nav className="bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[#033231] rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <div>
                <h1 className="text-2xl font-display font-bold text-gray-900">
                  Construction Company
                </h1>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-colors duration-200 rounded-xl px-3 py-2 ${
                    pathname === item.href
                      ? 'text-[#033231] bg-[#033231]/10'
                      : 'text-gray-700 hover:text-[#033231] hover:bg-[#033231]/5'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="btn-primary rounded-xl"
              >
                Get in Touch
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`font-medium py-2 px-3 rounded-xl transition-colors duration-200 ${
                      pathname === item.href
                        ? 'text-[#033231] bg-[#033231]/10'
                        : 'text-gray-700 hover:text-[#033231] hover:bg-[#033231]/5'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <button 
                  onClick={() => {
                    setIsContactModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="btn-primary w-full mt-4 rounded-xl"
                >
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>

    {/* Contact Modal */}
    <ContactModal 
      isOpen={isContactModalOpen} 
      onClose={() => setIsContactModalOpen(false)} 
    />
  </>
  );
};

export default Header;

'use client';

import { useState } from 'react';
import ContactModal from './ContactModal';

const CTASection = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-3xl font-montserrat font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto font-montserrat">
              Whether it&apos;s a new build, renovation, or commercial project, we&apos;re here to help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="btn-primary text-lg px-8 py-4"
              >
                Get Free Quote
              </button>
              <button className="btn-outline text-lg px-8 py-4">
                View Our Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
};

export default CTASection;

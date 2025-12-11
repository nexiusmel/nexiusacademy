import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center text-white font-bold text-xl">
            E
          </div>
          <span className="text-2xl font-bold font-sans text-primary">
            E-Mart
          </span>
        </div>

        {/* CTA Button - Only Get Started */}
        <div>
          <button className="bg-primary text-white px-6 py-2.5 rounded-md text-base font-semibold hover:bg-opacity-90 transition-all shadow-md">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
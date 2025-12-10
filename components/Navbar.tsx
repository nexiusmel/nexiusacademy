import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          <span className={`text-2xl font-bold font-sans ${isScrolled ? 'text-primary' : 'text-primary'}`}>
            E-Mart
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-medium text-sm text-charcoal">
          <a href="#" className="hover:text-secondary transition-colors">Home</a>
          <a href="#" className="hover:text-secondary transition-colors">Courses</a>
          <a href="#" className="hover:text-secondary transition-colors">About</a>
          <a href="#" className="hover:text-secondary transition-colors">Blog</a>
          <a href="#" className="hover:text-secondary transition-colors">Pages</a>
          <a href="#" className="hover:text-secondary transition-colors">Contact</a>
        </div>

        {/* Icons & CTA */}
        <div className="hidden md:flex items-center space-x-5">
          <button className="text-charcoal hover:text-secondary">
            <Search size={20} />
          </button>
          <div className="relative cursor-pointer text-charcoal hover:text-secondary">
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-secondary text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">0</span>
          </div>
          <a href="#" className="text-charcoal font-semibold text-sm hover:text-secondary">Login</a>
          <button className="bg-primary text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-opacity-90 transition-all">
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-primary" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg p-6 flex flex-col space-y-4">
          <a href="#" className="text-charcoal font-medium hover:text-secondary">Home</a>
          <a href="#" className="text-charcoal font-medium hover:text-secondary">Courses</a>
          <a href="#" className="text-charcoal font-medium hover:text-secondary">About</a>
          <a href="#" className="text-charcoal font-medium hover:text-secondary">Contact</a>
          <hr className="border-gray-100" />
          <div className="flex flex-col gap-3">
            <button className="bg-transparent border border-primary text-primary py-2 rounded font-semibold">Login</button>
            <button className="bg-secondary text-white py-2 rounded font-semibold">Sign Up</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
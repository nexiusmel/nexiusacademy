import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Apple, Play } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center text-white font-bold text-xl">E</div>
            <span className="text-2xl font-bold font-sans">E-Mart</span>
          </div>
          <p className="text-gray-400 text-sm mb-6 leading-relaxed">
            Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec mattis odio at.
          </p>
          <div className="flex space-x-3">
             <a href="#" className="w-8 h-8 bg-[#2A3B66] flex items-center justify-center rounded hover:bg-secondary transition-colors"><Facebook size={16} /></a>
             <a href="#" className="w-8 h-8 bg-[#2A3B66] flex items-center justify-center rounded hover:bg-secondary transition-colors"><Instagram size={16} /></a>
             <a href="#" className="w-8 h-8 bg-secondary flex items-center justify-center rounded"><Linkedin size={16} /></a>
             <a href="#" className="w-8 h-8 bg-[#2A3B66] flex items-center justify-center rounded hover:bg-secondary transition-colors"><Twitter size={16} /></a>
             <a href="#" className="w-8 h-8 bg-[#2A3B66] flex items-center justify-center rounded hover:bg-secondary transition-colors"><Youtube size={16} /></a>
          </div>
        </div>

        {/* Top 4 Category */}
        <div>
          <h4 className="font-bold text-lg mb-6">TOP 4 CATEGORY</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><a href="#" className="hover:text-secondary">Development</a></li>
            <li><a href="#" className="hover:text-secondary">Finance & Accounting</a></li>
            <li><a href="#" className="hover:text-secondary">Design</a></li>
            <li><a href="#" className="hover:text-secondary">Business</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-lg mb-6">QUICK LINKS</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><a href="#" className="hover:text-secondary">About</a></li>
            <li><a href="#" className="hover:text-secondary flex items-center gap-2">Become Instructor <span className="text-secondary">→</span></a></li>
            <li><a href="#" className="hover:text-secondary">Contact</a></li>
            <li><a href="#" className="hover:text-secondary">Career</a></li>
          </ul>
        </div>

        {/* Download App */}
        <div>
           <h4 className="font-bold text-lg mb-6">DOWNLOAD OUR APP</h4>
           <div className="space-y-3">
             <button className="flex items-center gap-3 bg-[#2A3B66] px-4 py-2 rounded-lg hover:bg-secondary transition-colors w-full sm:w-auto">
               <Apple size={24} />
               <div className="text-left">
                 <p className="text-[10px] uppercase">Download now</p>
                 <p className="font-bold text-sm leading-none">App Store</p>
               </div>
             </button>
             
             <button className="flex items-center gap-3 bg-[#2A3B66] px-4 py-2 rounded-lg hover:bg-secondary transition-colors w-full sm:w-auto">
               <Play size={24} fill="currentColor" />
               <div className="text-left">
                 <p className="text-[10px] uppercase">Download now</p>
                 <p className="font-bold text-sm leading-none">Play Store</p>
               </div>
             </button>
           </div>
        </div>

      </div>

      <div className="container mx-auto px-6 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>© 2023 - Eduguard. Designed by <span className="text-white">Ayeran</span>. All rights reserved</p>
        <div className="mt-4 md:mt-0">
          <select className="bg-transparent border border-gray-700 text-gray-400 rounded px-2 py-1 outline-none">
            <option>English</option>
            <option>Spanish</option>
          </select>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Calendar, MessageCircle, ArrowRight } from 'lucide-react';

const BottomSection: React.FC = () => {
  return (
    <>
      {/* Partners */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6">
          <h4 className="text-lg font-bold text-primary mb-2">9.3k Trusted Companies</h4>
          <p className="text-xs text-gray-500 mb-8 max-w-md">Nullam egestas tellus at enim ornare tristique. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>
          
          <div className="flex flex-wrap justify-between items-center opacity-60 grayscale hover:grayscale-0 transition-all gap-8">
            <h2 className="text-2xl font-bold text-gray-400">NETFLIX</h2>
            <h2 className="text-2xl font-bold text-gray-400">YouTube</h2>
            <h2 className="text-2xl font-bold text-gray-400">Google</h2>
            <h2 className="text-2xl font-bold text-gray-400">Lenovo</h2>
            <h2 className="text-2xl font-bold text-gray-400">slack</h2>
            <h2 className="text-2xl font-bold text-gray-400">verizon</h2>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary">Latest News</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((post) => (
              <div key={post} className="group cursor-pointer">
                <div className="overflow-hidden rounded-xl mb-4 h-56">
                  <img src={`https://picsum.photos/400/300?random=${post + 100}`} alt="Blog" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                  <span className="flex items-center gap-1"><Calendar size={12}/> 22 May 2023</span>
                  <span className="flex items-center gap-1"><MessageCircle size={12}/> 03 Comments</span>
                </div>
                <h3 className="font-bold text-primary text-lg mb-2 group-hover:text-secondary transition-colors">
                  Keep Your Business Safe Ensure High Availability.
                </h3>
                <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                  We've been a strategy thought leader for nearly five decades and...
                </p>
                <a href="#" className="text-secondary text-xs font-bold uppercase tracking-wide flex items-center gap-1">Read More <ArrowRight size={12}/></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription CTA */}
      <section className="py-20 bg-neutral">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden relative">
             <div className="absolute top-0 right-0 p-10 hidden md:block">
                 <div className="flex gap-2">
                     <div className="w-2 h-2 rounded-full bg-secondary"></div>
                     <div className="w-2 h-2 rounded-full bg-secondary opacity-50"></div>
                     <div className="w-2 h-2 rounded-full bg-secondary opacity-25"></div>
                 </div>
             </div>

            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 relative h-64 md:h-80 w-full">
                 <div className="absolute inset-0 bg-secondary/10 rounded-full scale-75 transform translate-y-4"></div>
                 <img src="https://picsum.photos/400/400?random=99" className="w-full h-full object-cover object-top" alt="Subscribe" />
              </div>
              <div className="md:w-1/2 p-10 md:p-16 text-center md:text-left">
                <h2 className="text-3xl font-bold text-primary mb-4">A Subscription That's More Than Just Classes</h2>
                <button className="bg-secondary text-white px-8 py-3 rounded-md font-bold shadow-lg hover:bg-opacity-90 transition-all mt-4">
                  Get Subscription
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BottomSection;
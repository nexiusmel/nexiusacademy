import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-neutral scroll-mt-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary">We Have 30k+ Students & They<br/>Share Success Stories</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative group hover:-translate-y-2 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-6">
                <img src={`https://picsum.photos/60/60?random=${item + 50}`} alt="Student" className="w-14 h-14 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-primary">Michael Collens</h4>
                  <p className="text-xs text-gray-500">Math Student</p>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum."
              </p>

              <div className="absolute bottom-6 right-6 opacity-10 group-hover:opacity-100 transition-opacity text-secondary">
                <Quote size={40} fill="currentColor" />
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation Dots */}
        <div className="flex justify-center mt-10 gap-2">
           <div className="w-3 h-3 rounded-full bg-secondary cursor-pointer"></div>
           <div className="w-3 h-3 rounded-full bg-gray-300 cursor-pointer"></div>
           <div className="w-3 h-3 rounded-full bg-gray-300 cursor-pointer"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
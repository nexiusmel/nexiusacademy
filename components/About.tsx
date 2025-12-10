import React from 'react';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Collage */}
        <div className="relative h-[500px] hidden md:block">
           <img 
            src="https://picsum.photos/300/400?random=1" 
            alt="Student working" 
            className="absolute top-0 left-0 w-64 h-80 object-cover rounded-lg shadow-xl z-10"
           />
           <img 
            src="https://picsum.photos/320/280?random=2" 
            alt="Student smiling" 
            className="absolute bottom-0 right-10 w-72 h-64 object-cover rounded-lg shadow-xl z-20 border-8 border-white"
           />
           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
        </div>
        
        {/* Mobile View Image */}
        <div className="md:hidden w-full h-64 overflow-hidden rounded-xl shadow-lg">
             <img src="https://picsum.photos/600/400" className="w-full h-full object-cover" alt="Student" />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Thousands Of Courses Authored By Industry Experts
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            You can start and finish one of these popular courses in under a day – for free! Check out the list below. Take the course for free and start your journey.
          </p>

          <ul className="space-y-4 mb-10">
            <li className="flex items-center gap-3 text-charcoal font-medium">
              <CheckCircle size={20} className="text-secondary" />
              Get unlimited access to 4,000+ of our top courses
            </li>
            <li className="flex items-center gap-3 text-charcoal font-medium">
              <CheckCircle size={20} className="text-secondary" />
              Explore a variety of fresh topics
            </li>
            <li className="flex items-center gap-3 text-charcoal font-medium">
              <CheckCircle size={20} className="text-secondary" />
              Find the right instructor for you
            </li>
          </ul>

          <button className="bg-secondary text-white px-8 py-3 rounded-md font-bold shadow-lg hover:bg-opacity-90 transition-all">
            Get Started Today
          </button>
        </div>

      </div>
    </section>
  );
};

export default About;
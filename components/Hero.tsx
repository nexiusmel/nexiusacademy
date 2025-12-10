import React from 'react';
import { PlayCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-28 bg-neutral overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#E6F0F9] rounded-bl-[200px] -z-10 hidden lg:block"></div>
      
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 z-10">
          <div className="inline-block px-3 py-1 bg-white rounded-full shadow-sm text-xs font-bold text-secondary tracking-wide uppercase mb-2">
            🚀 Unlock Your Potential
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
            Develop Your Skills <br />
            With Online Courses <br />
            <span className="text-secondary">From A Pro</span>
          </h1>
          <p className="text-charcoal text-lg md:text-xl max-w-lg leading-relaxed">
            Our mission is to help people find the best course online and learn with expert guidance, anywhere, anytime.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-secondary text-white px-8 py-4 rounded-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              Explore All Courses
            </button>
            <button className="flex items-center gap-3 px-8 py-4 rounded-lg font-bold text-primary hover:bg-white transition-all">
              <div className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-secondary">
                <PlayCircle size={24} fill="currentColor" className="text-secondary bg-white rounded-full" />
              </div>
              Watch Video
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative z-10 flex justify-center lg:justify-end">
          <div className="relative">
             {/* Abstract circle decoration behind */}
            <div className="absolute top-10 right-10 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            
            <img 
              src="https://picsum.photos/600/700" 
              alt="Happy Student" 
              className="relative rounded-3xl shadow-2xl z-10 w-full max-w-md object-cover h-[500px] lg:h-[600px]"
            />
            
            {/* Floating Badge */}
            <div className="absolute top-20 -left-10 bg-white p-4 rounded-xl shadow-lg z-20 animate-bounce" style={{ animationDuration: '3s' }}>
               <div className="flex items-center gap-3">
                 <div className="bg-yellow-100 p-2 rounded-full">
                   <span className="text-2xl">🎓</span>
                 </div>
                 <div>
                   <p className="font-bold text-primary text-lg">523+</p>
                   <p className="text-xs text-gray-500">Expert Mentors</p>
                 </div>
               </div>
            </div>

             {/* Floating Badge 2 */}
             <div className="absolute bottom-20 -right-5 bg-white p-4 rounded-xl shadow-lg z-20 hidden md:block">
               <div className="flex items-center gap-3">
                 <div className="bg-green-100 p-2 rounded-full text-green-600 font-bold">
                   95%
                 </div>
                 <div>
                   <p className="font-bold text-primary text-sm">Satisfaction Rate</p>
                   <p className="text-xs text-gray-500">Based on reviews</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
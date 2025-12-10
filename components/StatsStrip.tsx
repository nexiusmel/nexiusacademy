import React from 'react';

const StatsStrip: React.FC = () => {
  return (
    <section className="bg-secondary py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          
          <div className="space-y-2">
            <h3 className="text-4xl font-extrabold">6,206</h3>
            <p className="text-sm font-medium uppercase tracking-wider opacity-90">Success Stories</p>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-4xl font-extrabold">8,100</h3>
            <p className="text-sm font-medium uppercase tracking-wider opacity-90">Happy Students</p>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-4xl font-extrabold">6,300</h3>
            <p className="text-sm font-medium uppercase tracking-wider opacity-90">Expert Instructors</p>
          </div>
          
          <div className="space-y-2 relative">
             {/* Decorative line */}
            <svg className="absolute -right-10 top-0 h-16 w-16 text-yellow-300 opacity-50 hidden md:block" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                 <path d="M10,90 Q50,10 90,90" strokeWidth="2" />
            </svg>
            <h3 className="text-4xl font-extrabold">5,656</h3>
            <p className="text-sm font-medium uppercase tracking-wider opacity-90">Total Courses</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatsStrip;
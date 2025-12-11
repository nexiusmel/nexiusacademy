import React from 'react';
import { Laptop, BookOpen, Calendar, ShieldCheck } from 'lucide-react';

const StatsStrip: React.FC = () => {
  return (
    <section className="bg-white py-12 border-y border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Item 1 */}
          <div className="flex items-center gap-4 lg:justify-center px-4 lg:border-r border-gray-200">
            <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center shrink-0 shadow-sm transition-transform hover:scale-110">
              <Laptop className="text-white" size={24} />
            </div>
            <div>
              <h3 className="font-bold text-primary text-lg leading-tight">Online / In-Person</h3>
              <p className="text-gray-500 text-sm mt-1">Intakes Available</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center gap-4 lg:justify-center px-4 lg:border-r border-gray-200">
            <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center shrink-0 shadow-sm transition-transform hover:scale-110">
              <BookOpen className="text-white" size={24} />
            </div>
            <div>
              <h3 className="font-bold text-primary text-lg leading-tight">21 Hours Total</h3>
              <p className="text-gray-500 text-sm mt-1">7 Lessons + 1 Assessment</p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-center gap-4 lg:justify-center px-4 lg:border-r border-gray-200">
            <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center shrink-0 shadow-sm transition-transform hover:scale-110">
              <Calendar className="text-white" size={24} />
            </div>
            <div>
              <h3 className="font-bold text-primary text-lg leading-tight">Flexible Schedule</h3>
              <p className="text-gray-500 text-sm mt-1">Weekdays or Weekends</p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex items-center gap-4 lg:justify-center px-4">
            <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center shrink-0 shadow-sm transition-transform hover:scale-110">
              <ShieldCheck className="text-white" size={24} />
            </div>
            <div>
              <h3 className="font-bold text-primary text-lg leading-tight">Beginner Friendly</h3>
              <p className="text-gray-500 text-sm mt-1">No prior background</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatsStrip;
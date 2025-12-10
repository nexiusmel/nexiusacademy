import React from 'react';
import { BookOpen, Award, Users } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          
          <div className="flex items-start gap-4 p-6 hover:bg-white/5 rounded-xl transition-colors">
            <div className="bg-secondary/20 p-3 rounded-lg text-secondary">
              <BookOpen size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Learn new skills</h3>
              <p className="text-gray-300 text-sm">With flexible courses aimed at beginners and experts alike.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 hover:bg-white/5 rounded-xl transition-colors">
            <div className="bg-secondary/20 p-3 rounded-lg text-secondary">
              <Award size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Expert Teacher</h3>
              <p className="text-gray-300 text-sm">Upskill with specialists who have real-world experience.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 hover:bg-white/5 rounded-xl transition-colors">
            <div className="bg-secondary/20 p-3 rounded-lg text-secondary">
              <Users size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Online Degrees</h3>
              <p className="text-gray-300 text-sm">Study flexibly online and earn recognized certifications.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
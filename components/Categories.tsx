import React from 'react';
import { Layout, Briefcase, DollarSign, Monitor, User, FileText, Megaphone, Camera } from 'lucide-react';

const categories = [
  { icon: <Layout />, name: 'Label Design', courses: '63,476 Courses', color: 'bg-indigo-100 text-indigo-600' },
  { icon: <Briefcase />, name: 'Business', courses: '52,822 Courses', color: 'bg-green-100 text-green-600' },
  { icon: <DollarSign />, name: 'Finance & Accounting', courses: '33,841 Courses', color: 'bg-orange-100 text-orange-600' },
  { icon: <Monitor />, name: 'IT & Software', courses: '22,649 Courses', color: 'bg-red-100 text-red-600' },
  { icon: <User />, name: 'Personal Development', courses: '20,126 Courses', color: 'bg-teal-100 text-teal-600' },
  { icon: <FileText />, name: 'Office Productivity', courses: '13,932 Courses', color: 'bg-gray-100 text-gray-600' },
  { icon: <Megaphone />, name: 'Marketing', courses: '12,068 Courses', color: 'bg-blue-100 text-blue-600' },
  { icon: <Camera />, name: 'Photography', courses: '6,196 Courses', color: 'bg-pink-100 text-pink-600' },
];

const Categories: React.FC = () => {
  return (
    <section className="py-20 bg-neutral">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary">Our Feature Courses</h2>
          <p className="text-gray-500 mt-2">Explore the most popular categories</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center gap-4 cursor-pointer group">
              <div className={`p-4 rounded-lg ${cat.color} group-hover:scale-110 transition-transform`}>
                {cat.icon}
              </div>
              <div>
                <h4 className="font-bold text-primary">{cat.name}</h4>
                <p className="text-xs text-gray-500">{cat.courses}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
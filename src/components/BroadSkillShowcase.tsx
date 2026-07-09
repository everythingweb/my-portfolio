import React from 'react';

const BroadSkillsShowcase = () => {
  const fields = [
    { name: 'Artificial Intelligence', icon: '🧠', color: 'bg-indigo-600' },
    { name: 'Cloud, DevOps and Cybersecurity', icon: '☁️', color: 'bg-blue-600' },
    { name: 'Software Development', icon: '💻', color: 'bg-green-600' },
    { name: 'Data', icon: '📊', color: 'bg-purple-600' },
    { name: 'Marketing', icon: '📈', color: 'bg-red-600' },
    { name: 'Design', icon: '🎨', color: 'bg-yellow-600' },
    // You can add more fields here if needed
    { name: 'Project Management', icon: '📋', color: 'bg-gray-600' },
    { name: 'Blockchain', icon: '🔗', color: 'bg-fuchsia-600' },
    { name: 'UI/UX', icon: '✨', color: 'bg-pink-600' },
    { name: 'Quality Assurance', icon: '🔎', color: 'bg-teal-600' },
    { name: 'Technical Writing', icon: '✍️', color: 'bg-orange-600' },
  ];

  return (
    <div className="flex justify-center items-center py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-4xl w-full bg-gray-800 rounded-3xl p-8 shadow-2xl">
        <div className="text-center mb-12">
          <h2 className="text-white text-3xl sm:text-5xl md:text-3xl font-extrabold leading-tight tracking-tight mb-4">
            Master the Future,
            <br />
            Become an Industry Leader
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
            Discover the essential domains and core competencies that drive innovation and success in today's rapidly evolving professional landscape.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {fields.map((field, index) => (
            <div
              key={index}
              className={`flex items-center space-x-2 px-5 py-2 rounded-full text-white text-base font-medium transition-all duration-300 ease-in-out transform hover:scale-105 ${field.color} hover:shadow-lg`}
            >
              <span className="text-xl">{field.icon}</span>
              <span>{field.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BroadSkillsShowcase;
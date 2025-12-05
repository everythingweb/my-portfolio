import React from 'react';

const SkillsShowcase = () => {
  // Define your technologies with names and placeholder 'icon' (you'd replace this with actual imports or paths)
  const technologies = [
    { name: 'Javascript', iconBg: 'bg-yellow-400', iconText: 'JS' },
    { name: 'Node.js', iconBg: 'bg-green-600', iconText: '◎' },
    { name: 'React.js', iconBg: 'bg-blue-400', iconText: '⚛️' },
    { name: 'HTML', iconBg: 'bg-orange-600', iconText: '⑤' },
    { name: 'SQL', iconBg: 'bg-blue-700', iconText: 'SQL' },
    { name: 'NoSQL', iconBg: 'bg-gray-700', iconText: 'NoSQL' },
    { name: 'Bootstrap', iconBg: 'bg-purple-700', iconText: 'B' },
    { name: 'TypeScript', iconBg: 'bg-blue-600', iconText: 'TS' },
    { name: 'Cloud', iconBg: 'bg-gray-400', iconText: '☁️' },
    { name: 'CSS', iconBg: 'bg-blue-500', iconText: '③' },
    { name: 'MongoDB', iconBg: 'bg-green-700', iconText: '🍃' },
    { name: 'Next Js', iconBg: 'bg-gray-900', iconText: 'N' },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 text-center shadow-2xl">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
            Master the Tools of the Web, Become a <br /> Full-Stack Developer
          </h2>
          {/* Subheading */}
          <p className="text-base md:text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Discover the key technologies and programming languages that shape the modern web.
          </p>

          {/* Technologies Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 justify-items-center">
            {technologies.map((tech, index) => (
              <div 
                key={index} 
                className="flex items-center bg-gray-800 rounded-full px-4 py-2 text-white border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg w-full max-w-[180px]"
              >
                {/* Icon Placeholder (replace with actual icon component or image) */}
                <div 
                  className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold mr-2 ${tech.iconBg}`}
                  style={{ color: tech.iconBg === 'bg-gray-900' ? 'white' : 'black' }} // Adjust text color for dark backgrounds
                >
                  {/* For actual icons, you would replace this div with an icon component or <img> */}
                  {tech.iconText} 
                </div>
                <span className="text-sm font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsShowcase;
import React from 'react';

const courses = [
  {
    title: 'Data Analysis',
    price: '$499',
    features: [
      'One-on-one coaching',
      'Core tools: Excel, SQL',
      'Weekly live Q&A sessions',
      'Certificate of completion.'
    ],
    isPopular: false,
  },
  {
    title: 'Website Development',
    price: '$899',
    features: [
      'Front-end and backend basics',
      'Weekly live Q&A sessions',
      'React, Node.js, databases',
      'Advanced frameworks, specialized projects.',
    ],
    isPopular: true,
  },
  {
    title: 'Cyber Security',
    price: '$1,499',
    features: [
      'Threat basics, security fundamentals',
      'Ethical hacking basics',
      'Network security, vulnerability scanning',
      'Security tools overview',
      'Incident response training.',
    ],
    isPopular: false,
  },
];

const NewPricing1 = () => {
  return (
    <div className="font-sans antialiased bg-slate-50 text-slate-800 p-8 min-h-screen flex items-center justify-center">
      <div className="container mx-auto max-w-6xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Choose Your Learning Path
          </h1>
          <p className="mt-4 text-xl text-slate-500">
            Find the perfect skill to kickstart your career in tech.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 p-8 ${
                course.isPopular ? 'border-4 border-indigo-600' : 'border border-slate-200'
              }`}
            >
              {course.isPopular && (
                <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-indigo-600 text-white text-sm font-semibold py-1 px-4 rounded-full shadow-md">
                  Most Popular
                </div>
              )}
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 text-center mb-2">
                {course.title}
              </h2>
              <div className="text-center">
                <span className="text-5xl font-extrabold text-slate-900">
                  {course.price}
                </span>
                <span className="text-xl font-medium text-slate-500">
                  /course
                </span>
              </div>

              <ul className="mt-8 space-y-4">
                {course.features.map((feature, featIndex) => (
                  <li key={featIndex} className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-green-500 flex-shrink-0 mr-3"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.536-1.896-1.897a.75.75 0 1 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.597Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-lg text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`mt-10 block w-full text-center rounded-full py-3 font-semibold text-lg transition-colors ${
                  course.isPopular
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'bg-slate-200 text-slate-800 hover:bg-slate-300'
                }`}
              >
                Enroll Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewPricing1;

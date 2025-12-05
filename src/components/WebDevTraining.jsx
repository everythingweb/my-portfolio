import React from 'react';
import ai from '../assets/Data/data1.png';

const WebDevTraining = () => {
  return (
    <div className="bg-stone-50  flex items-center justify-center py-12 px-4 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div className="flex flex-col space-y-6">
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            Intensive Web Development Training: <br />
            Propel Your Career
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Develop the essential skills to become a successful web developer and launch your new
            career in a constantly evolving sector.
          </p>

          <div className="space-y-4 py-4">
            <div className="flex items-center">
              <span className="text-gray-500 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              <p className="text-gray-700 text-lg">
                <span className="font-semibold">Duration:</span> 20 weeks
              </p>
            </div>

            <div className="flex items-center">
              <span className="text-gray-500 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </span>
              <p className="text-gray-700 text-lg">
                <span className="font-semibold">Schedule:</span> 12 hours per week, flexible
              </p>
            </div>

            <div className="flex items-center">
              <span className="text-gray-500 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </span>
              <p className="text-gray-700 text-lg">
                <span className="font-semibold">Format:</span> Online or in a hackerspace
              </p>
            </div>

            <div className="flex items-center">
              <span className="text-gray-500 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </span>
              <p className="text-gray-700 text-lg">
                <span className="font-semibold">Benefits:</span> Professional support and
                international certifications
              </p>
            </div>
          </div>

        
        </div>

        {/* Right Section - Image */}
        <div className="relative h-96 w-full rounded-lg overflow-hidden">
          {/* This div acts as a placeholder for the image. In a real app, you'd use an <img> tag. */}
          <img
            src={ai} 
            alt="Students collaborating on web development"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default WebDevTraining;
import React from 'react';

const JoinTrainingBanner = () => {
  return (
    <div className="bg-stone-50 py-16 px-4 font-sans flex justify-center items-center">
      <div className="bg-[#2D3353] text-white rounded-lg p-12 text-center max-w-4xl mx-auto shadow-lg">
        <h2 className="text-4xl font-bold mb-8 leading-tight">
          Want to join the web developer <br className="md:hidden" /> training?
        </h2>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-12 mt-8">
          <div className="flex items-center justify-center text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2 text-white-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>Receive program details</span>
          </div>
          <div className="flex items-center justify-center text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2 text-white-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>Discover our methodology</span>
          </div>
          <div className="flex items-center justify-center text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2 text-white-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>Progress in your learning project</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinTrainingBanner;
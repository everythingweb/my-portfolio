import React from 'react';

const NextSessions = () => {
  const sessions = [
    {
      month: 'November 2025',
      startDate: 'Saturday, November 8, 2025',
    },
    {
      month: 'December 2025',
      startDate: 'Saturday, December 6, 2025',
    },
    {
      month: 'January 2026',
      startDate: 'Saturday, January 10, 2026',
    },
  ];

  return (
    <div className="bg-stone-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">Next 3 Sessions</h1>
      
      {/* This is the main fix:
        - `flex-col` stacks cards vertically by default (mobile).
        - `md:flex-row` switches to horizontal layout on medium screens and up.
        - `gap-6` provides responsive spacing between cards (replaces fixed space-x-8).
      */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 max-w-7xl mx-auto">
        {sessions.map((session, index) => (
          <div
            key={index}
            /* This is the second fix:
              - `w-full` makes the card take full width on mobile.
              - `md:w-80` restores the original fixed width on medium screens and up.
              - `max-w-sm` ensures it doesn't get excessively wide on mobile if the viewport is large.
            */
            className="w-full max-w-sm md:w-80 bg-white rounded-lg shadow-xl overflow-hidden flex flex-col transition duration-300 hover:shadow-2xl"
          >
            <div className="bg-[#2D3353] h-2"></div> {/* Top deep blue line */}
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">{session.month}</h2>
                <div className="flex items-center mb-2">
                  <span className="text-gray-500 mr-2">
                    {/* Replaced with a simple calendar icon for cleaner code */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                  </span>
                  <span className="text-gray-700 text-lg font-medium">Start Date</span>
                </div>
              </div>
              <p className="text-xl font-semibold text-gray-900 mt-4">{session.startDate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NextSessions;
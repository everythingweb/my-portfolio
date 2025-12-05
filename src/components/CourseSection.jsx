import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import dev1 from '../assets/websites/blog.jpg';
import dev2 from '../assets/websites/business.jpg';
import dev3 from '../assets/websites/ecommerce.jpg';
import dev4 from '../assets/websites/educational.png';
import dev5 from '../assets/websites/entertainment.jpg';
import soft1 from '../assets/websites/event.jpg';
import soft2 from '../assets/websites/informational.jpg';
import soft3 from '../assets/websites/news.jpg';
import soft4 from '../assets/websites/Nike.jpg';
import data1 from '../assets/websites/online forum.jpg';
import data2 from '../assets/websites/portfolio.png';
import data3 from '../assets/websites/startup.jpg';
import design1 from '../assets/websites/travel.jpg';
import design2 from '../assets/websites/University.jpg';
import design3 from '../assets/websites/blog.jpg';
import { FaEye, FaGithub } from 'react-icons/fa';

// --- Data Structures (Unchanged) ---
// Define the structure for a single course
const courseData = {
    // ... (Your courseData object remains the same)
   'All':[ 
        { level: 'Just Launched', title: 'Online forum website', description: 'Connecting professionals, sharing knowledge, and fostering innovation. Join our community today to grow your expertise and build the future together.', imageSrc: data1, route: 'https://everythingweb.github.io/online-forum/',githubUrl:'https://github.com/everythingweb/online-forum' },
        { level: 'Latest', title: 'Business website', description: 'Your vision, our expertise. We craft custom digital solutions designed for impact, ensuring exceptional user experiences and lasting business value.', imageSrc: dev2, route: 'https://everythingweb.github.io/business/',githubUrl:'https://github.com/everythingweb/business' },
        { level: 'Just Launched', title: 'Portfolio website', description: 'Blending creative design with robust functionality. This portfolio showcases projects where complex challenges were transformed into elegant, high-impact user experiences.', imageSrc: data2, route: 'https://everythingweb.github.io/portfolio/' ,githubUrl:'https://github.com/everythingweb/portfolio'},
        { level: 'New', title: 'Educational website', description: 'Unlock your potential with expert-led courses. Learn in-demand skills, connect with innovators, and build a brighter career future, starting today.', imageSrc: dev4, route: 'https://everythingweb.github.io/bucregaltech/' ,githubUrl:'https://github.com/everythingweb/bucregaltech'},
        { level: 'Just Launched', title: 'University website', description: 'Discover your potential with groundbreaking academics and a vibrant campus community. Start your journey to shape the future here.', imageSrc: design2, route: 'https://everythingweb.github.io/harvod/',githubUrl:'https://github.com/everythingweb/harvod' },
        { level: 'Highlights', title: 'Event website', description: 'Innovation meets inspiration at The Number One Convention. Join global leaders for a curated experience of cutting-edge talks, networking, and discovery.', imageSrc: soft1, route: 'https://everythingweb.github.io/convention/' ,githubUrl:'https://github.com/everythingweb/convention'},
        { level: 'Trending', title: 'Informational website', description: 'Empower your decisions with vetted, reliable data and expert insights. Access the knowledge you need to navigate complexity and stay ahead.', imageSrc: soft2,route:'https://everythingweb.github.io/informational/' ,githubUrl:'https://github.com/everythingweb/informational'},
        { level: 'Just Launched', title: 'NEWS website', description: 'Stay informed, stay ahead. We deliver unbiased, essential news from around the globe, giving you the context to understand and navigate the modern world.', imageSrc: soft3,route:'https://everythingweb.github.io/news/',githubUrl:'https://github.com/everythingweb/news' },
        { level: 'Just Launched', title: 'Entertainment website', description: 'Dive into endless entertainment: discover the latest movies, music, and exclusive shows. Your ultimate source for captivating content starts here.', imageSrc: dev5,route: 'https://everythingweb.github.io/entertainment/',githubUrl:'https://github.com/everythingweb/entertainment' },
        { level: 'Just Launched', title: 'Travel website', description: 'Explore hidden worlds, create unforgettable memories, and travel with confidence. Your next great adventure is waiting. Book your escape now.', imageSrc: design1,route: 'https://everythingweb.github.io/travel/',githubUrl:'https://github.com/everythingweb/travel' },
        { level: 'Introduction', title: 'E-commerce website', description: 'Shop smart, live beautifully. Discover curated collections, seamless checkout, and fast shipping for everything you need right now.', imageSrc: dev3 ,route: 'https://everythingweb.github.io/e-commerce/',githubUrl:'https://github.com/everythingweb/e-commerce'},
        { level: 'Introduction', title: 'Nike website', description: 'Push boundaries and achieve your personal best with innovative gear designed for champions. Find your greatness today.', imageSrc: soft4,route: 'https://everythingweb.github.io/nike/',githubUrl:'https://github.com/everythingweb/nike' },
        { level: 'Introduction', title: 'Start up website', description: 'Transforming industries through innovation. We provide the cutting-edge solutions and strategic support your business needs to scale and lead the market.', imageSrc: data3 ,route: 'https://everythingweb.github.io/startup/',githubUrl:'https://github.com/everythingweb/startup'},
    
  
   ],
    'Productivity Web Apps': [
          { level: 'Just Launched', title: 'Online forum website', description: 'Connecting professionals, sharing knowledge, and fostering innovation. Join our community today to grow your expertise and build the future together.', imageSrc: data1, route: 'https://everythingweb.github.io/online-forum/',githubUrl:'https://github.com/everythingweb/online-forum' },
        { level: 'Latest', title: 'Business website', description: 'Your vision, our expertise. We craft custom digital solutions designed for impact, ensuring exceptional user experiences and lasting business value.', imageSrc: dev2, route: 'https://everythingweb.github.io/business/',githubUrl:'https://github.com/everythingweb/business' },
        { level: 'Just Launched', title: 'Portfolio website', description: 'Blending creative design with robust functionality. This portfolio showcases projects where complex challenges were transformed into elegant, high-impact user experiences.', imageSrc: data2, route: 'https://everythingweb.github.io/portfolio/' ,githubUrl:'https://github.com/everythingweb/portfolio'},
        { level: 'New', title: 'Educational website', description: 'Unlock your potential with expert-led courses. Learn in-demand skills, connect with innovators, and build a brighter career future, starting today.', imageSrc: dev4, route: 'https://everythingweb.github.io/bucregaltech/' ,githubUrl:'https://github.com/everythingweb/bucregaltech'},
        { level: 'Just Launched', title: 'University website', description: 'Discover your potential with groundbreaking academics and a vibrant campus community. Start your journey to shape the future here.', imageSrc: design2, route: 'https://everythingweb.github.io/harvod/',githubUrl:'https://github.com/everythingweb/harvod' },
        { level: 'Highlights', title: 'Event website', description: 'Innovation meets inspiration at The Number One Convention. Join global leaders for a curated experience of cutting-edge talks, networking, and discovery.', imageSrc: soft1, route: 'https://everythingweb.github.io/convention/' ,githubUrl:'https://github.com/everythingweb/convention'}],
    'Content Management Web Apps': [{ level: 'Trending', title: 'Informational website', description: 'Empower your decisions with vetted, reliable data and expert insights. Access the knowledge you need to navigate complexity and stay ahead.', imageSrc: soft2,route:'https://everythingweb.github.io/informational/' ,githubUrl:'https://github.com/everythingweb/informational'},
        { level: 'Just Launched', title: 'NEWS website', description: 'Stay informed, stay ahead. We deliver unbiased, essential news from around the globe, giving you the context to understand and navigate the modern world.', imageSrc: soft3,route:'https://everythingweb.github.io/news/',githubUrl:'https://github.com/everythingweb/news' },
        { level: 'Just Launched', title: 'Entertainment website', description: 'Dive into endless entertainment: discover the latest movies, music, and exclusive shows. Your ultimate source for captivating content starts here.', imageSrc: dev5,route: 'https://everythingweb.github.io/entertainment/',githubUrl:'https://github.com/everythingweb/entertainment' },
        { level: 'Just Launched', title: 'Travel website', description: 'Explore hidden worlds, create unforgettable memories, and travel with confidence. Your next great adventure is waiting. Book your escape now.', imageSrc: design1,route: 'https://everythingweb.github.io/travel/',githubUrl:'https://github.com/everythingweb/travel' },
        ],
    'E-commerce Web Apps': [
          { level: 'Introduction', title: 'E-commerce website', description: 'Shop smart, live beautifully. Discover curated collections, seamless checkout, and fast shipping for everything you need right now.', imageSrc: dev3 ,route: 'https://everythingweb.github.io/e-commerce/',githubUrl:'https://github.com/everythingweb/e-commerce'},
        { level: 'Introduction', title: 'Nike website', description: 'Push boundaries and achieve your personal best with innovative gear designed for champions. Find your greatness today.', imageSrc: soft4,route: 'https://everythingweb.github.io/nike/',githubUrl:'https://github.com/everythingweb/nike' },
        { level: 'Introduction', title: 'Start up website', description: 'Transforming industries through innovation. We provide the cutting-edge solutions and strategic support your business needs to scale and lead the market.', imageSrc: data3 ,route: 'https://everythingweb.github.io/startup/',githubUrl:'https://github.com/everythingweb/startup'},
    
   ]
    
};

// List of available course categories
const courseCategories = [
    { name: 'All', icon: '' },
    { name: 'Productivity Web Apps', icon: '☁️' },
    { name: 'Content Management Web Apps', icon: '💻' },
    { name: 'E-commerce Web Apps', icon: '📊' }
];


// --- Course Card Component (Unchanged) ---
const CourseCard = ({ course }) => {
    const levelTagClasses = course.level === 'Advanced' 
        ? 'bg-[#2D3353] text-white' 
        : 'bg-[#4F5580] text-white'; 

    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition duration-300 hover:shadow-xl">
            <div className="h-48 w-full overflow-hidden">
                {course.imageSrc ? (
                    <img 
                        src={course.imageSrc}
                        alt={`Image for ${course.title}`} 
                        className="w-full h-full object-cover" 
                    />
                ) : (
                    <div className={`h-full w-full bg-gray-300 flex items-center justify-center`}>
                        <p className="text-xl font-bold text-black/50">Course Visual</p>
                    </div>
                )}
            </div>

            <div className="p-5 flex-grow">
                <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 ${levelTagClasses}`}>
                    {course.level}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{course.description}</p>
            </div>

           <div 
    className="w-full py-4 bg-[#2D3353] text-white transition duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 flex justify-center space-x-8"
>
    {/* 👁️ Eye Icon Link (Live Demo/More Info) */}
    <Link 
        to={course.route} 
        className="text-white hover:text-gray-400"
        title="View Live Project" // Add a helpful title
    >
        <FaEye className="text-2xl" /> 
    </Link>

    {/* 🐙 GitHub Icon Link (Source Code) */}
    <a 
        href={course.githubUrl} 
        target="_blank" // Opens in a new tab
        rel="noopener noreferrer" 
        className="text-white hover:text-gray-400"
        title="View Source Code on GitHub" // Add a helpful title
    >
        <FaGithub className="text-2xl" />
    </a>
</div>
        </div>
    );
};


// --- Main Course Section Component (FIXED) ---
const CourseSection = () => {
    // 1. Initialize useSearchParams hook
    const [searchParams, setSearchParams] = useSearchParams();

    // 2. Get the active category from the URL, or default to the first category
    const defaultCategory = courseCategories[0].name;
    const activeCategoryFromUrl = searchParams.get('category');
    
    // 3. Determine the final active category state
    const activeCategory = courseCategories.find(c => c.name === activeCategoryFromUrl)?.name || defaultCategory;

    // 4. Function to change the category and update the URL
    const setActiveCategory = (categoryName) => {
        // This updates the URL search param: ?category=CategoryName
        setSearchParams({ category: categoryName });
    };

    const activeCourses = courseData[activeCategory] || [];

    return (
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8" id="courses">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">My latest projects</h2>
            
            {/* --- Header/Tab Section --- */}
            <div className="flex flex-wrap justify-center p-2 sm:p-4 mb-12 bg-gray-50 rounded-xl shadow-inner">
                {courseCategories.map((category) => (
                    <button
                        key={category.name}
                        // Use the new setActiveCategory function
                        onClick={() => setActiveCategory(category.name)}
                        className={`
                            px-4 py-2 sm:px-6 sm:py-3 m-1 text-sm font-semibold rounded-full transition duration-300 ease-in-out flex items-center whitespace-nowrap
                            ${activeCategory === category.name
                                // Active state
                                ? 'bg-[#2D3353] text-white shadow-md hover:bg-[#2D3353]'
                                // Inactive state
                                : 'bg-transparent text-gray-700 hover:bg-gray-200'
                            }
                        `}
                    >
                        {/* Icon/Emoji */}
                        <span className="mr-2 text-lg">{category.icon}</span> 
                        {category.name}
                    </button>
                ))}
            </div>

            {/* --- Course Cards Section --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {activeCourses.length > 0 ? (
                    activeCourses.map((course, index) => (
                        <CourseCard key={index} course={course} />
                    ))
                ) : (
                    <p className="col-span-full text-center p-10 text-lg text-gray-500">
                        No courses available for **{activeCategory}** yet.
                    </p>
                )}
            </div>
        </div>
    );
};

export default CourseSection;
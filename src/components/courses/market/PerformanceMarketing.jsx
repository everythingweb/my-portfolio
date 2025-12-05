import TestimonialsSection from '../../TestimonialsSection'
import Footer from '../../Footer';
import JoinTrainingBanner from '../../JoinTrainingBanner';
import NextSessions from '../../NextSessions';
import { Link } from 'react-router-dom'; 
import { FaClock, FaCalendarAlt, FaBook, FaMoon } from 'react-icons/fa'; 
import Hero from '../../../assets/Data/DSC04370-3-1.png';
import ActionButtons from '../../ActionButtons';
import ai from '../../../assets/design/new.jpg';
import BroadSkillShowcase from '../../BroadSkillShowcase'
import { FaBolt, FaUsers, FaGraduationCap } from 'react-icons/fa'; // Importing icons from Font Awesome
import ExpertImage from '../../../assets/Data/Rectangle.png'; // Adjust this path to your actual image

const CourseHeroSection = () => {
  return (
   
    <section className="bg-gradient-to-br from-gray-100 to-gray-50  flex items-center justify-center py-12">
        
      <div className="container mx-auto px-4 max-w-7xl">
      <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden md:gap-x-6 justify-between w-full">
          {/* Left Content Area */}
         <div className="w-full md:w-[55%] p-6 md:p-8 flex flex-col justify-center">
              <nav className="text-sm font-montserrat mb-8 text-gray-500">
          <Link to="/" className="hover:underline">Home</Link>   &gt; <span className="font-bold text-indigo-600">Advanced Digital Marketing - Meta Certified</span>
        </nav>
            <h1 className="text-4xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
           Advanced Digital Marketing - Meta Certified
            </h1>
            <p className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
             
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
       Master the workings of online advertising and propel your career with our certified training program. Develop your expertise on Meta's advertising platforms (Facebook & Instagram) and learn how to develop impactful campaigns that achieve your goals.</p>

            {/* Buttons */}
          <ActionButtons />

            {/* Course Details List */}
            <div className="space-y-4">
              <div className="flex items-center text-gray-700 text-lg">
                <FaClock className="mr-4 text-green-600 text-2xl" />
                <span><strong className="font-semibold">Duration:</strong> 20 weeks</span>
              </div>
              <div className="flex items-center text-gray-700 text-lg">
                <FaCalendarAlt className="mr-4 text-green-600 text-2xl" />
                <span><strong className="font-semibold">Schedule:</strong> 12 hours/week</span>
              </div>
              <div className="flex items-center text-gray-700 text-lg">
                <FaBook className="mr-4 text-green-600 text-2xl" />
                <span><strong className="font-semibold">Format:</strong> Available in-person and online</span>
              </div>
              <div className="flex items-center text-gray-700 text-lg">
                <FaMoon className="mr-4 text-green-600 text-2xl" />
                <span><strong className="font-semibold">Options:</strong> Evening classes available</span>
              </div>
            </div>
          </div>

          {/* Right Image Area */}
      <div className="w-full md:w-[45%] bg-gray-200 min-h-[100px] md:min-h-[300px]">
            {/* Replace this with your actual image */}
            <img 
              src={Hero} 
              alt="Student working on a laptop" 
              className="w-full h-full object-cover" 
            />
            {/* If you want a placeholder without an image: */}
            {/* <div className="w-full h-full flex items-center justify-center bg-gray-300">
              <span className="text-gray-500 text-xl font-medium">Course Image</span>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
const GenerativeAICourseDetails = () => {
  return (
    <div className="bg-stone-50  flex items-center justify-center py-12 px-4 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div className="flex flex-col space-y-6">
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
Our Digital Marketing Training          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
Intensive training to master digital marketing techniques and launch your new career.</p>

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


const ExpertSection = ({ imageUrl = ExpertImage }) => { // Added imageUrl prop with a default
  return (
    <section className="bg-gradient-to-br from-gray-50 to-orange-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content Area */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-3xl font-extrabold text-gray-900 leading-tight mb-6">
         Learn and Create Within   <br />an Inspiring Ecosystem 
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
    Your success is at the heart of our mission. At BUC REGAL TECH we have created a unique learning environment where each student is at the center of attention. Our instructors are more than recognized experts in their field, they are passionate mentors who share their expertise with enthusiasm. They don't just pass on knowledge, but guide and encourage you to develop your full potential. </p>

          <ul className="space-y-6">
            <li className="flex items-start text-gray-700">
              <FaUsers className="mt-1 mr-3 text-green-600 text-2xl flex-shrink-0" />
              <span>
                Join small groups of 5 to 10 people for a personalized and
                interaction-rich learning experience.
              </span>
            </li>
            <li className="flex items-start text-gray-700">
              <FaBolt className="mt-1 mr-3 text-green-600 text-2xl flex-shrink-0" />
              <span>
                Benefit from the expertise and mentoring of our instructors
                who will support you throughout your journey.
              </span>
            </li>
            <li className="flex items-start text-gray-700">
              <FaGraduationCap className="mt-1 mr-3 text-green-600 text-2xl flex-shrink-0" />
              <span>
                Receive support at every stage of your learning, from
                introduction to advanced projects.
              </span>
            </li>
          </ul>
        </div>

        {/* Right Image Area */}
        <div className="w-full h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
          <img
            src={imageUrl}
            alt="Two people collaborating on a laptop with GOMYCODE banner in background"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};


const PerformanceMarketing = () => {
  return (
    <div> 
              <CourseHeroSection />
              <BroadSkillShowcase />
              <ExpertSection />
              <TestimonialsSection />
              <GenerativeAICourseDetails />
              <NextSessions />
              <JoinTrainingBanner />
               <Footer /></div>
  )
}

export default PerformanceMarketing;
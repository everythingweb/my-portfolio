import './App.css'
import HeroSection from './components/HeroSection'
import CompanyLogo from './components/CompanyLogo'
import PurposeSection from './components/PurposeSection'
import TestimonialsSection from './components/TestimonialsSection'
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CourseSection from './components/CourseSection';
import WhatsAppButton from './components/WhatsappButton';
import SinglePageDetail from './components/SinglePageDetail'
import ScrollToTop from './components/ScrollToTop'
import SinglePageDetailGenerative from './components/courses/ai/SinglePageDetailGenerative'
import SinglePageDetailBuild from './components/courses/ai/SinglePageDetailBuild'
import SinglePageDetailIntroduction from './components/courses/ai/SinglePageDetailIntroduction'
{/**devops imports */}
import SinglePageDetailAWSCloud from './components/courses/devops/SinglePageDetailAWSCloud'
import SinglePageDetailCybersecurityCompTIA from './components/courses/devops/SinglePageDetailCybersecurityCompTIA'
import SinglePageDetailAzureFundamentals from './components/courses/devops/SinglePageDetailAzureFundamentals'
import SinglePageDetailIntroductionDevops from './components/courses/devops/SinglePageDetailIntroductionDevops'
import SinglePageDetailTheDevOps from './components/courses/devops/SinglePageDetailTheDevOps'
import SinglePageDetailDeep from './components/courses/ai/SinglePageDetailDeep'
{/**devops imports ends here*/}
{/**software imports */}
import SoftwareBackend from './components/courses/softwaredev/SoftwareBackend'
import SoftwareFrontEnd from './components/courses/softwaredev/SoftwareFrontEnd'
import SoftwareFullstack from './components/courses/softwaredev/SoftwareFullstack'
import SoftwareIntroduction  from './components/courses/softwaredev/SoftwareIntroduction '
{/**software imports ends here*/}
{/**data imports */}
import DataScientist from './components/courses/data/DataScientist'
import IntroductionToPython from './components/courses/data/IntroductionToPython'
import DataAnalytics from './components/courses/data/DataAnalytics'
{/**data imports ends here */}
{/**data imports */}
import UiUx from './components/courses/design/UiUx'
import GraphicDesign from './components/courses/design/GraphicDesign'
import IntroductionToGraphic from './components/courses/design/IntroductionToGraphic'
{/**data imports ends here */}
{/**market imports */}
import IntroductionToSocial from './components/courses/market/IntroductionToSocial'
import PerformanceMarketing from './components/courses/market/PerformanceMarketing'
import DigitalMarketing from './components/courses/market/DigitalMarketing'
import Ecommercecourse from './components/courses/market/Ecommercecourse'
{/**market imports ends here */}
const App = () => {
  const myWhatsAppNumber = '2348189951230'; // Change to your actual number (international format, no + or spaces)
  const prefilledMessage = "Hello, I would like to know more about your services.";
  return (
    
    <BrowserRouter basename="/my-portfolio">
      <ScrollToTop />
      <Routes>
        {/* Route for the main landing page */}
        <Route path="/" element={
          <main className="relative min-h-screen overflow-x-hidden bg-white text-gray-800 font-sans">
            <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"></div>
            <div className="overflow-hidden">
              <HeroSection />
              <CompanyLogo />
              <PurposeSection />
              <CourseSection />
               <TestimonialsSection />
              <Footer />

            </div>
          </main>
        } />

        {/* Route for the data analysis detail page */}
        <Route path="/data-analysis-detail" element={<SinglePageDetail />} />
        <Route path="/web-development" element={<SinglePageDetail />} />
        <Route path="/cyber-security" element={<SinglePageDetail />} />
       
       
        {/**new routes */}
         <Route path="/generative-ai" element={<SinglePageDetailGenerative />} />
         <Route path="/introduction-ai" element={<SinglePageDetailIntroduction />} />
         <Route path="/deep-ai" element={<SinglePageDetailDeep />} />
         <Route path="/build-ai" element={<SinglePageDetailBuild />} />
          {/**new routes ends here */}
            {/**cloud/devops routes */}
         <Route path="/Introduction" element={<SinglePageDetailIntroductionDevops />} />
         <Route path="/TheDevOps" element={<SinglePageDetailTheDevOps />} />
         <Route path="/AzureFundamentals" element={<SinglePageDetailAzureFundamentals />} />
         <Route path="/CybersecurityCompTIA" element={<SinglePageDetailCybersecurityCompTIA />} />
          <Route path="/AWSCloud" element={<SinglePageDetailAWSCloud />} />
          {/**cloud/devops ends here */}
           {/**software routes */}
         <Route path="/SoftwareBackend" element={<SoftwareBackend />} />
         <Route path="/SoftwareFrontEnd" element={<SoftwareFrontEnd />} />
         <Route path="/SoftwareFullstack" element={<SoftwareFullstack />} />
         <Route path="/SoftwareIntroduction" element={<SoftwareIntroduction  />} />
          {/**software ends here */}
             {/**data routes */}
         <Route path="/DataScientist" element={<DataScientist />} />
         <Route path="/IntroductionToPython" element={<IntroductionToPython />} />
         <Route path="/DataAnalytics" element={<DataAnalytics />} />
          {/**data ends here */}
          {/**marketing routes */}
         <Route path="/IntroductionToSocial" element={<IntroductionToSocial />} />
         <Route path="/PerformanceMarketing" element={<PerformanceMarketing />} />
         <Route path="/DigitalMarketing" element={<DigitalMarketing />} />
         <Route path="/Ecommercecourse" element={<Ecommercecourse />} />
          {/**marketing ends here */}
          {/**design routes */}
         <Route path="/UiUx" element={<UiUx />} />
         <Route path="/GraphicDesign" element={<GraphicDesign />} />
         <Route path="/IntroductionToGraphic" element={<IntroductionToGraphic />} />
          {/**design ends here */}
      </Routes>
      <WhatsAppButton 
        phoneNumber={myWhatsAppNumber}
        message={prefilledMessage}
      />
    </BrowserRouter>

    /*whatsapp button component*/
    

  );
};

export default App

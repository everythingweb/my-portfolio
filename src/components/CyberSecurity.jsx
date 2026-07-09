import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import securityImage from '../assets/cybersecurity-1.avif' // Assuming a relevant image is in your assets folder

const CybersecurityDetail = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="bg-white min-h-screen text-gray-800 font-sans p-8">
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800&family=Syne:wght@700;800&display=swap');
        .font-syne {
          font-family: 'Syne', sans-serif;
        }
        .font-montserrat {
          font-family: 'Montserrat', sans-serif;
        }
        `}
      </style>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        {/* Breadcrumbs */}
        <nav className="text-sm font-montserrat mb-8 text-gray-500">
          <Link to="/" className="hover:underline">Home</Link> &gt; <span className="font-bold text-indigo-600">Cybersecurity Services</span>
        </nav>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h1 className="text-5xl font-extrabold font-syne text-gray-900">
              Comprehensive Cybersecurity Solutions
            </h1>
            <p className="text-lg text-gray-600 font-montserrat leading-relaxed">
              We provide robust cybersecurity services to protect your digital assets from evolving threats. Our solutions include proactive threat detection, vulnerability management, and incident response to ensure your business remains secure.
            </p>
            <p className="text-gray-600 font-montserrat">
              From network security and endpoint protection to compliance audits and penetration testing, we offer a full suite of services to safeguard your infrastructure and data. We help you build a resilient defense against cyberattacks.
            </p>
            <div className="space-y-2 mt-6">
              <h3 className="text-xl font-bold text-gray-900 font-syne">Our Core Services:</h3>
              <p className="text-gray-600 font-montserrat">
                Penetration Testing, Vulnerability Scanning, Security Audits, Incident Response, and Managed Security Services.
              </p>
            </div>
            <div className="flex space-x-4 mt-8">
              <button className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-full transition-all hover:bg-indigo-700 active:scale-95">
                Schedule a Consultation
              </button>
              <button className="border-2 border-indigo-600 text-indigo-600 font-bold py-3 px-6 rounded-full transition-all hover:bg-indigo-50 active:scale-95">
                Download Our Brochure
              </button>
            </div>
          </div>

          {/* Right Image/Graphic */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <img
                src={securityImage}
                alt="Cybersecurity Graphic"
                className="w-full h-auto rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-0 left-0 w-full h-full opacity-20 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      ---

      {/* Service Highlights Section (Placeholder) */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-syne text-center mb-10">Our Security Expertise</h2>
          <div className="bg-white rounded-xl shadow-md p-6 max-w-2xl mx-auto">
            <div className="flex items-center space-x-4 mb-4">
              <img src="https://placehold.co/50x50/E2E8F0/A0AEC0?text=Scan" alt="Security Scan Icon" className="rounded-full" />
              <h3 className="text-2xl font-bold font-syne text-gray-900">
                Threat and Vulnerability Management
              </h3>
            </div>
            <p className="text-gray-600 font-montserrat">
              We proactively identify and address vulnerabilities in your systems before they can be exploited. Our continuous monitoring and scanning services keep your defenses strong.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-sm text-gray-500 font-montserrat">
              <span className="bg-gray-200 rounded-full px-3 py-1">Vulnerability Scanning</span>
              <span className="bg-gray-200 rounded-full px-3 py-1">Penetration Testing</span>
              <span className="bg-gray-200 rounded-full px-3 py-1">Security Audits</span>
            </div>
          </div>
        </div>
      </section>

      ---

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold font-syne text-center mb-8">
            Protect your business from cyber threats
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-700 bg-gray-800 text-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-700 bg-gray-800 text-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="mt-1 block w-full rounded-md border-gray-700 bg-gray-800 text-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="inline-block w-full sm:w-auto bg-indigo-600 text-white font-bold py-3 px-8 rounded-full transition-all hover:bg-indigo-700 active:scale-95"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default CybersecurityDetail;
import React from "react";
import { Element } from 'react-scroll';

const toolkit = [
  {
    title: "Frontend",
    tools: [
      { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Tailwind", img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
      { name: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    ],
  },
  {
    title: "Backend",
    tools: [
      { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Django", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
      { name: "GraphQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
    ],
  },
  {
    title: "Database",
    tools: [
      { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "PostgreSQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Firebase", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { name: "Redis", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    ],
  },
  {
    title: "DevOps",
    tools: [
      { name: "Docker", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Kubernetes", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
      { name: "Vercel", img: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png" },
      { name: "AWS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    ],
  },
];

const ToolkitSection = () => {
  return (<Element name="services">
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 px-6 overflow-hidden">
      {/* Background blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gray-200 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gray-300 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-6xl mx-auto text-center">
       

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {toolkit.map((category, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-lg border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-6">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {category.tools.map((tool, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition"
                  >
                    <img
                      src={tool.img}
                      alt={tool.name}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* subtle top divider */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-50"></div>
    </section>
 </Element> );
};

export default ToolkitSection;
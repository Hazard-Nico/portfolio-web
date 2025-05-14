"use client";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
  title: string;
  description: string;
  features: string[];
  skills: string[];
};

const projects: Project[] = [
  {
    title: "Customized Deduplication and Geospatial Data Preparation",
    description:
      "Developed a Python-based pipeline to detect and deduplicate geospatial datasets using Record Linkage and Levenshtein similarity for clustering geospatial points. Created an interactive user interface using Streamlit for non-technical users to upload datasets, configure clustering thresholds, and review deduplication results.",
    features: [
      "Built a robust Python-based pipeline for detecting and deduplicating geospatial datasets using Record Linkage and similarity measures like Levenshtein and Cosine thresholds.",
      "Developed clustering algorithms to process high-volume spatial data with cartesian_coords, categorical attributes, and address similarity, reducing geospatial errors by 80%.",
      "Designed an interactive Streamlit application for non-technical users to upload datasets, configure deduplication parameters, and visualize clustering results.",
      "Integrated Flask APIs for backend validation, parameter handling, and deduplication logic, ensuring seamless communication between frontend and backend.",
      "Evaluated deduplication accuracy using precision, recall, and F1-score metrics, enabling stakeholders to measure data quality improvements effectively.",
      "Deployed the project using Docker to provide a scalable, production-ready environment for automated deduplication tasks.",
    ],
    skills: [
      "Python",
      "Flask",
      "Streamlit",
      "Record Linkage",
      "Clustering",
      "Geospatial Data",
      "Docker",
      "Data Evaluation Metrics",
    ],
  },
  {
    title: "Fiscal Revenue and Tax Web Dashboard based on Cost Meal",
    description:
      "Designed and implemented RESTful APIs to handle user interactions, data aggregation, and lunch order projections.",
    features: [
      "Led backend development using Flask and PostgreSQL, collaborating with frontend engineers to build a secure and scalable internal dashboard for supply tracking and fiscal forecasting.",
      "Designed and implemented RESTful APIs to manage real-time user interactions, secure data aggregation, and forecasting logic for inventory and cost projections.",
      "Developed a real-time data forecasting system to predict lunch order volumes and minimize waste, aligning with supply chain efficiency goals.",
      "Ensured smooth and secure integration between Flask APIs and Next.js, enabling real-time updates and data visualization for internal compliance and operational insights.",
    ],
    skills: [
      "Python",
      "Flask",
      "PostgreSQL",
      "RESTful APIs",
      "Next.js",
      "Data Forecasting",
      "Data Visualization",
      "Supply Chain Optimization",
      "Fullstack Development",
      "API Integration",
    ],
  },
  {
    title: "Livestreaming App, Orbit Tech",
    description:
      "Built a scalable livestreaming platform that integrates WebRTC for real-time video, Django APIs for secure back-end operations, and ReactJS for an intuitive user interface.",
    features: [
      "Integrated WebRTC for real-time video chat, letting users view livestreams, join chats, and make donations.",
      "Implemented Django back-end and APIs to handle concurrent sessions securely and at scale.",
      "Developed ReactJS front-end features focused on clean, intuitive UI/UX for interacting users.",
    ],
    skills: [
      "Django",
      "ReactJS",
      "WebRTC",
      "API Development",
      "Real-Time Communication",
      "Scalable Architecture",
      "Secure Data Handling",
    ],
  },
  {
    title: "Sistem Manajemen Rumah Duka, Rumah Duka Yayasan Daya Besar",
    description:
      "Developed an end-to-end management system for funeral and crematorium services, leveraging Flask APIs, Next.js front-end, and MySQL for reliable data handling and scalable operations.",
    features: [
      "Built a secure Flask back-end and REST APIs to manage funeral and crematorium service records.",
      "Created a seamless, high-performance user interface with Next.js.",
      "Implemented MySQL for scalable data storage and efficient retrieval.",
    ],
    skills: [
      "Flask",
      "Next.js",
      "MySQL",
      "API Development",
      "Records Management",
      "Fullstack Development",
      "Scalable Systems",
      "Supply Chain Logic",
    ],
  },
  {
    title: "Social Media & Online Course Mobile Apps, Kedai Ilmu",
    description:
      "Engineered a mobile app ecosystem that combines social networking features with online course delivery, using a Python/Flask back-end and React Native front-end for a responsive, accessible experience.",
    features: [
      "Developed scalable back-end services with Python, exposing APIs and employing SQLAlchemy ORM for efficient database management.",
      "Implemented React Native front-end components, seamlessly integrating UI/UX designs into mobile applications with a focus on accessibility and responsive design.",
    ],
    skills: [
      "Python",
      "Flask",
      "SQLAlchemy",
      "ORM",
      "React Native",
      "API Development",
      "Mobile App Development",
      "User Engagement Tracking",
      "Digital Content Flow",
    ],
  },
  {
    title:
      "Web Application for Certificate Generation, Asosiasi Auditor Internal",
    description:
      "Engineered a streamlined certificate-generation system with CodeIgniter 3, later enhanced with Python/Flask modules and template rendering, plus a WordPress marketing site for easy content management and brand consistency.",
    features: [
      "Created a web application for certificate generation using CodeIgniter 3, ensuring a secure and efficient certification process.",
      "Enhanced the system with additional features built in Python and Flask, integrating HTML templates for an improved user interface.",
      "Designed and developed the company’s WordPress-based website with Elementor, providing brand consistency and simple content management.",
    ],
    skills: [
      "CodeIgniter 3",
      "Python",
      "Flask",
      "Web Application Development",
      "Workflow Automation",
      "Compliance Systems",
      "Template Rendering",
      "Secure Data Handling",
    ],
  },
  {
    title: "Website for Lost & Found, Universitas Al-Azhar Indonesia",
    description:
      "Developed a full-stack web platform for the university’s Lost & Found program, turning design mock-ups into a robust, optimized site built with modern front-end and back-end technologies.",
    features: [
      "Converted design mock-ups into a functional web presence using HTML, JavaScript, AJAX, and JSON.",
      "Designed, developed, and optimized web pages, plugins, and functionalities to enhance user experience.",
      "Integrated PHP, SQL, and supporting back-end libraries to provide a secure and scalable technical foundation.",
    ],
    skills: [
      "HTML",
      "JavaScript",
      "AJAX",
      "JSON",
      "PHP",
      "SQL",
      "Fullstack Development",
      "Web Optimization",
      "UI/UX Implementation",
    ],
  },

  // Add more projects as needed
];

export default function ProjectsSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="projects" className="w-full max-w-5xl mx-auto py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* Title with accent underline */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold inline-block relative">
            Projects
            <span className="block h-1 w-20 bg-blue-600 rounded mt-2"></span>
          </h2>
        </div>
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-700">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setOpenIdx(idx)}
                className="mt-auto inline-block px-4 py-2 bg-blue-600 text-white rounded-lg font-medium shadow hover:bg-blue-700 transition"
              >
                View Project
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {openIdx !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenIdx(null)}
          >
            <motion.div
              className="bg-white rounded-lg shadow-2xl max-w-lg w-full max-h-[90vh] p-8 relative overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              style={{ boxSizing: "border-box" }}
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-blue-600 text-2xl font-bold"
                onClick={() => setOpenIdx(null)}
                aria-label="Close"
              >
                &times;
              </button>
              <h3 className="text-2xl font-bold mb-2 text-blue-700">
                {projects[openIdx].title}
              </h3>
              <p className="text-gray-700 mb-4">
                {projects[openIdx].description}
              </p>
              <div className="mb-4">
                <h4 className="font-semibold mb-2 text-gray-800">
                  Key Features:
                </h4>
                <ul className="space-y-2">
                  {projects[openIdx].features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-500 mt-1" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {projects[openIdx].skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

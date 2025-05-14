"use client";
import { motion } from "framer-motion";

type ExperienceItem = {
  title: string;
  company: string;
  date: string;
  description: string;
};

const experiences: ExperienceItem[] = [
  {
    title: "Python Developer (Data Preparation GIS)",
    company: "Quadrant.io",
    date: "Sept 2024 – Dec 2024",
    description:
      "Quadrant.io is a global location data and technology company specializing in geospatial solutions.",
  },
  {
    title: "Python Developer",
    company: "PT. Sanskara Sanjaya Abadi",
    date: "Aug 2024 – Sept 2024",
    description:
      "Sanskara is an IT Services company engaged in the outsourcing and digital technology development sector.",
  },
  // Add more experiences or leave empty for now
  {
    title: "Fullstack Developer",
    company: "Kedai Ilmu",
    date: "Mar 2021 – Aug 2024",
    description:
      "Kedai Ilmu is a platform engaged in social networking and education. connecting UMKM participants with the Indonesian community, as well as providing UMKM business education throughout Indonesia with digital technology.",
  },
  {
    title: "Fullstack Developer",
    company: "Asosiasi Auditor Internal",
    date: "Jan 2021 – Nov 2023",
    description:
      "The Association of Internal Auditors (AAI) is a leading professional organization for internal auditors in Indonesia.",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="w-full max-w-5xl mx-auto py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* Title with accent underline */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold inline-block relative">
            Experience
            <span className="block h-1 w-20 bg-blue-600 rounded mt-2"></span>
          </h2>
        </div>
        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 w-1 bg-blue-100 h-full rounded"></div>
          <div className="space-y-12 pl-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Dot */}
                <div className="absolute -left-7 top-2 w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow"></div>
                {/* Card */}
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-blue-700">
                      {exp.title}
                    </h3>
                    <span className="text-sm text-gray-500">{exp.date}</span>
                  </div>
                  <div className="text-gray-700 font-medium mb-1">
                    {exp.company}
                  </div>
                  <div className="text-gray-600">{exp.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

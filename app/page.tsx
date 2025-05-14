"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import AboutSection from "@/components/About";
import ExperienceSection from "@/components/Experience";
import ProjectsSection from "@/components/Projects";
import ContactSection from "@/components/Contact";

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
      {/* Hero Section */}
      <section
        id="hero"
        className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-12 py-16"
      >
        {/* ...Hero content as before... */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I&apos;m{" "}
            <span className="text-blue-600">Nugraha Purnama Aji</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-700">
            Python Developer
          </h2>
          <p className="mb-8 text-gray-600 max-w-md">
            I build beautiful and performant web applications with modern
            technologies. Let&apos;s create something amazing together!
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
          >
            Contact Me
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg border-4 border-blue-100 bg-white">
            <Image
              src="/img/python-dev.png"
              alt="Profile"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </motion.div>
      </section>

      {/* About, Experience, Projects, Contact */}
      <AboutSection />

      <ExperienceSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}

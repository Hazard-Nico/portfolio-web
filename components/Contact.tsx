"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    // Here you can integrate with Formspree, Resend, or your own API
  }

  return (
    <section id="contact" className="w-full max-w-2xl mx-auto py-16 px-4">
      {/* My Profiles Links */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* Title with accent underline */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold inline-block relative">
            Contact Me
            <span className="block h-1 w-20 bg-blue-600 rounded mt-2 mx-auto"></span>
          </h2>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <a
              href="https://github.com/Hazard-Nico"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-3 py-3 px-6 bg-gray-900 text-white font-semibold rounded-lg shadow hover:bg-gray-800 transition text-lg"
            >
              <FaGithub className="text-2xl" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/nugraha-purnama-aji"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-3 py-3 px-6 bg-blue-700 text-white font-semibold rounded-lg shadow hover:bg-blue-800 transition text-lg"
            >
              <FaLinkedin className="text-2xl" />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Title with accent underline */}
        <div className="mb-8 text-center">
          <p className="text-gray-600 mt-4">
            Or, Feel free to reach out for collaborations by filling out the
            form below. I would love to hear from you! 👋
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">
                Thank you!
              </h3>
              <p className="text-gray-700">Your message has been sent.</p>
            </motion.div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition text-lg"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </section>
  );
}

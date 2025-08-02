"use client";
import { useState } from "react";
import { motion } from "motion/react";
import {
  staggerChildren,
  fadeInUp,
  fadeIn,
  fadeInDown,
} from "./animations/motion";
import { FaDesktop, FaYoutube, FaUsers, FaCheckCircle } from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Footer } from "./layout/Footer";

const services = [
  {
    title: "UX & UI Design",
    description: "Visual design, structure, and setup of your website",
    icon: <FaDesktop className="text-white" size={24} />,
    details:
      "I create the full experience and layout of digital products — from page flow to visual clarity. Whether it's a form page, app screen, or full homepage, I design with purpose and simplicity.",
  },
  {
    title: "YouTube Automation",
    description: "Faceless YouTube channels and content management",
    icon: <FaYoutube className="text-white" size={24} />,
    details:
      "Yes. I can help you start and manage faceless YouTube channels, plan your content style, and grow your audience over time. I currently run my own system (ABM Media Hub) and help others promote their channels with consistency.",
  },
  {
    title: "Lead Generation",
    description: "Daily lead generation and analysis services",
    icon: <FaUsers className="text-white" size={24} />,
    details:
      "I provide daily lead generation and analysis — building accurate, enriched lead lists and segmenting them for better campaigns. I focus on quality data that helps you reach real buyers.",
  },
  {
    title: "Delivery Promise",
    description: "Commitment to quality and reliable service",
    icon: <FaCheckCircle className="text-white" size={24} />,
    details:
      "I'm not the type to overhype myself. But if I take your project, I'll give it everything. I always do my best, communicate clearly, and deliver with focus. I'm still learning and growing — but I show up 100% every time.",
  },
];

const faqs = [
  {
    question: "What do you do in UX and UI design?",
    answer:
      "I create the full experience and layout of digital products — from page flow to visual clarity. Whether it's a form page, app screen, or full homepage, I design with purpose and simplicity.",
  },
  {
    question: "Can you help with YouTube automation?",
    answer:
      "Yes. I can help you start and manage faceless YouTube channels, plan your content style, and grow your audience over time. I currently run my own system (ABM Media Hub) and help others promote their channels with consistency.",
  },
  {
    question: "How do you work with leads?",
    answer:
      "I provide daily lead generation and analysis — building accurate, enriched lead lists and segmenting them for better campaigns. I focus on quality data that helps you reach real buyers.",
  },
  {
    question: "Will you deliver if I hire you?",
    answer:
      "I'm not the type to overhype myself. But if I take your project, I'll give it everything. I always do my best, communicate clearly, and deliver with focus. I'm still learning and growing — but I show up 100% every time.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      className="w-full pt-8"
      variants={staggerChildren}
      initial="hidden"
      animate="visible"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-12">
        <motion.header variants={fadeInUp}>
          <div className="space-y-2">
            <h1 className="text-3xl lg:text-4xl font-semibold text-[#1a8671]">
              Frequently Asked Questions
            </h1>
            <div className="w-full h-1 bg-[#1a8671]"></div>
          </div>
        </motion.header>

        <motion.section className="mt-8 space-y-6" variants={fadeInDown}>
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#1a8671]">
            Everything You Need to Know About My Services
          </h2>
          <p className="text-lg leading-8">
            Get answers to the most common questions about my UX/UI design,
            YouTube automation, lead generation services, and work approach. If
            you have additional questions, feel free to reach out directly.
          </p>
        </motion.section>

        <motion.section
          className="mt-20"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-xl lg:text-2xl font-semibold text-[#1a8671] mb-4 text-center">
            My Portfolio of Services
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore the range of specialized services I offer to help bring your
            digital vision to life
          </p>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerChildren}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#1a8671]/10 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>

                {/* Icon Container */}
                <div className="relative p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-4 bg-gradient-to-br from-[#1a8671] to-[#156b5a] rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <div className="text-4xl font-bold text-gray-100 group-hover:text-[#1a8671]/20 transition-colors duration-300">
                      0{index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h4 className="text-2xl font-bold text-gray-800 group-hover:text-[#1a8671] transition-colors duration-300">
                      {service.title}
                    </h4>
                    <p className="text-lg text-gray-600 font-medium">
                      {service.description}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      {service.details}
                    </p>
                  </div>

                  {/* Decorative Line */}
                  <div className="mt-6 h-1 w-16 bg-gradient-to-r from-[#1a8671] to-[#156b5a] rounded-full group-hover:w-24 transition-all duration-300"></div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a8671]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          className="mt-20 max-w-4xl mx-auto"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-xl lg:text-2xl font-semibold text-[#1a8671] mb-8 text-center">
            Common Questions
          </h3>

          <motion.div className="space-y-4" variants={staggerChildren}>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h4 className="text-lg font-semibold text-[#1a8671] pr-4">
                    {faq.question}
                  </h4>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <FiChevronUp className="text-[#1a8671]" size={24} />
                    ) : (
                      <FiChevronDown className="text-[#1a8671]" size={24} />
                    )}
                  </div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          className="mt-20 text-center"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h3 className="text-xl lg:text-2xl font-semibold text-[#1a8671] mb-6">
            Ready to Work Together?
          </h3>
          <p className="text-lg leading-8 max-w-3xl mx-auto">
            Whether you need UX/UI design, YouTube automation, lead generation,
            or a combination of services, I&apos;m here to help bring your
            vision to life. Let&apos;s discuss your project and see how we can
            work together to achieve your goals.
          </p>
        </motion.section>
      </div>

      <Footer />
    </motion.div>
  );
}

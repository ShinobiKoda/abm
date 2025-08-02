"use client";
import { motion } from "motion/react";
import { Footer } from "./layout/Footer";
import {
  fadeInUp,
  fadeIn,
  staggerChildren,
  zoomIn,
  fadeInDown,
} from "./animations/motion";
import {
  FaEnvelope,
  FaYoutube,
  FaMapMarkerAlt,
  FaUserTie,
  FaBullseye,
  FaChartLine,
  FaVideo,
  FaPalette,
  FaDatabase,
  FaChalkboardTeacher,
  FaMicrophone,
} from "react-icons/fa";

const skills = [
  {
    category: "Lead Generation & Data Enrichment",
    icon: <FaBullseye className="text-white" size={24} />,
    details: [
      "Advanced enrichment using AI variables & segmentation",
      "Cold email prospecting and Lead and List building",
    ],
  },
  {
    category: "Affiliate Marketing",
    icon: <FaChartLine className="text-white" size={24} />,
    details: [
      "2+ years of experience with a top-tier affiliate training platform",
      "Built systems that have helped students, WhatsApp Motivation",
      "Mentorship and funnel creation for affiliate buyers",
    ],
  },
  {
    category: "YouTube Automation & Faceless Channels",
    icon: <FaVideo className="text-white" size={24} />,
    details: [
      "Founder of ABM Media Hub",
      "Niche research, video scripting, scheduling, and promotion",
      "Currently promoting Bello Florence, a rising gospel artist",
    ],
  },
  {
    category: "UX/UI Design",
    icon: <FaPalette className="text-white" size={24} />,
    details: [
      "Special interest in Landing page/Full page/Store layout/form/front page UI",
      "Emphasis on flow, user empathy, and visual clarity",
      "Looking forward to Front and back developer",
    ],
  },
  {
    category: "Data Analysis & Business Intelligence",
    icon: <FaDatabase className="text-white" size={24} />,
    details: [
      "Skilled in Scraping of and Arranging of Leads",
      "Daily Lead Data Analysis work for clients",
      "Building expertise with step-by-step analysis roadmaps",
    ],
  },
  {
    category: "Teaching, Presentations & Research",
    icon: <FaChalkboardTeacher className="text-white" size={24} />,
    details: [
      "Career Development in Nigeria",
      "Graphic Design Evolution",
      "Hosea & Jeremiah (Biblical CRS Projects)",
      "Teachers' Attire Influence on Student Performance",
    ],
  },
  {
    category: "Voiceovers & Sound Editing",
    icon: <FaMicrophone className="text-white" size={24} />,
    details: [
      "1+ years of sound editing experience",
      'Script narration for anime ("Shadow of the Horizon" narrated by Akinpelu Favour)',
    ],
  },
];

const projects = [
  {
    title: "Lead Generation & Analysis",
    description: "Built custom databases and Leads with advanced segmentation",
    highlights: [
      "Custom databases",
      "Buyer intent segmentation",
      "Industry classification",
      "Decision-maker status tracking",
    ],
  },
  {
    title: "Affiliate Marketing Systems",
    description:
      "Comprehensive affiliate marketing solutions and mentorship programs",
    highlights: [
      "New buyer transition programs",
      "Mentorship upgrades",
      "Funnel scripts",
      "Empathy-driven copy",
    ],
  },
  {
    title: "Promotion Campaigns",
    description:
      "Multi-platform campaign management with continuous traffic delivery",
    highlights: [
      "Active campaign results",
      "Alternative platform strategies",
      "Upsell structures",
      "Engagement optimization",
    ],
  },
  {
    title: "YouTube Automation & Music Promotion",
    description: "Content pipeline creation and artist promotion strategies",
    highlights: [
      "ABM Media Hub management",
      "Gospel artist promotion",
      "Video flow optimization",
      "CTA strategies",
    ],
  },
];

export function About() {
  return (
    <motion.div
      className="w-full pt-8"
      variants={staggerChildren}
      initial="hidden"
      animate="visible"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-12">
        {/* Hero Section */}
        <motion.header className="w-full mt-[10px]" variants={fadeInUp}>
          <div className="text-center space-y-6">
            <motion.div
              className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-[#1a8671] to-[#156b5a] flex items-center justify-center shadow-2xl"
              variants={zoomIn}
            >
              <FaUserTie className="text-white" size={48} />
            </motion.div>
            <div className="space-y-2">
              <h1 className="text-4xl lg:text-5xl font-bold text-[#1a8671]">
                Akinpelu Favour Israel
              </h1>
              <h2 className="text-xl lg:text-2xl text-gray-600 font-medium">
                ABM Solutions and Tech
              </h2>
              <div className="w-24 h-1 bg-[#1a8671] mx-auto"></div>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#1a8671]" />
                <span>Nigeria</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-[#1a8671]" />
                <span className="text-sm">akinpeluisrael123@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <FaYoutube className="text-[#1a8671]" />
                <span>ABM Media Hub</span>
              </div>
            </div>

            <p className="text-lg leading-8 max-w-4xl mx-auto text-gray-700">
              I&apos;m a versatile and self-driven Digital Marketer, Lead Data
              Analyst, Affiliate Strategist, and UX/UI Design Enthusiast with
              over 5 years of experience. I specialize in building and
              optimizing digital systems that convert, generate leads, grow
              revenue, and create impact.
            </p>

            <div className="bg-gradient-to-r from-[#1a8671] to-[#156b5a] text-white py-4 rounded-full inline-block px-8">
              <strong>My superpower:</strong> I turn raw data, creative ideas,
              and simple tools into results
            </div>
          </div>
        </motion.header>

        <motion.section className="mt-20" variants={fadeIn}>
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-[#1a8671] mb-4">
              Core Skills & Expertise
            </h3>
            <div className="w-24 h-1 bg-[#1a8671] mx-auto"></div>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerChildren}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-[#1a8671] to-[#156b5a] rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-[#1a8671] transition-colors duration-300">
                      {skill.category}
                    </h4>
                    <ul className="space-y-2">
                      {skill.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="text-sm text-gray-600 flex items-start gap-2"
                        >
                          <div className="w-1.5 h-1.5 bg-[#1a8671] rounded-full mt-2 flex-shrink-0"></div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section className="mt-20" variants={fadeIn}>
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-[#1a8671] mb-4">
              Featured Projects & Experience
            </h3>
            <div className="w-24 h-1 bg-[#1a8671] mx-auto"></div>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerChildren}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-xl font-bold text-gray-800 group-hover:text-[#1a8671] transition-colors duration-300">
                      {project.title}
                    </h4>
                    <div className="text-2xl font-bold text-gray-200 group-hover:text-[#1a8671]/20 transition-colors duration-300">
                      0{index + 1}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-2">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <div
                        key={highlightIndex}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-[#1a8671] to-[#156b5a] rounded-full"></div>
                        <span className="text-sm text-gray-700">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 h-1 w-16 bg-gradient-to-r from-[#1a8671] to-[#156b5a] rounded-full group-hover:w-24 transition-all duration-300"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section className="mt-20" variants={fadeIn}>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              className="w-full max-w-[400px] h-[500px] mx-auto bg-center bg-cover bg-no-repeat rounded-2xl shadow-2xl overflow-hidden"
              style={{
                backgroundImage: "url('/Images/akinpelu-isreal.jpg')",
              }}
              variants={zoomIn}
            ></motion.div>
            <motion.div className="w-full space-y-6" variants={fadeInDown}>
              <h3 className="text-3xl font-bold text-[#1a8671]">
                Ready to Work Together?
              </h3>
              <p className="text-lg leading-8">
                Whether you need lead generation, affiliate marketing
                strategies, YouTube automation, UX/UI design, or data analysis
                services, I&apos;m here to help turn your vision into reality.
              </p>
              <p className="text-lg leading-8">
                With over 5 years of experience and a proven track record of
                helping businesses grow online, I bring a unique combination of
                technical expertise and creative problem-solving to every
                project.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-[#1a8671] text-white px-6 py-3 rounded-full font-semibold">
                  CEO, ABM Solutions
                </div>
                <div className="bg-gray-100 text-[#1a8671] px-6 py-3 rounded-full font-semibold">
                  5+ Years Experience
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
      <Footer />
    </motion.div>
  );
}

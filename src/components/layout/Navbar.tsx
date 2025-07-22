"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";
import { FaYoutube } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";
import {
  FadeIn,
  FadeInDown,
  HoverScale,
  StaggerContainer,
} from "../animations/motion";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <nav className="fixed top-0 z-50 left-0 w-full bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="w-full hidden lg:flex lg:items-center lg:justify-between py-6 lg:px-12">
            <div className="flex items-center gap-12">
              <FadeIn delay={0.2}>
                <HoverScale scale={1.1}>
                  <Image
                    src="https://us-ms.gr-cdn.com/getresponse-tnbXo/photos/a36a85e4-f75d-40ad-a202-a0b8e5d08585.jpeg"
                    alt="Logo Image"
                    width={50}
                    height={50}
                  />
                </HoverScale>
              </FadeIn>
              <StaggerContainer staggerDelay={0.1} childrenDelay={0.4}>
                <ul className="flex items-center gap-10 *:cursor-pointer *:hover:opacity-85">
                  <FadeInDown>
                    <li>Home</li>
                  </FadeInDown>
                  <FadeInDown>
                    <li>About</li>
                  </FadeInDown>
                  <FadeInDown>
                    <li>Donate</li>
                  </FadeInDown>
                  <FadeInDown>
                    <li>Contact</li>
                  </FadeInDown>
                </ul>
              </StaggerContainer>
            </div>

            <StaggerContainer staggerDelay={0.2} childrenDelay={0.6}>
              <div className="flex items-center gap-8 *:cursor-pointer *:hover:opacity-85">
                <FadeIn>
                  <HoverScale scale={1.2}>
                    <Link
                      href="https://www.youtube.com/@Djisrael27"
                      target="_blank"
                    >
                      <FaYoutube size={35} />
                    </Link>
                  </HoverScale>
                </FadeIn>

                <FadeIn>
                  <HoverScale scale={1.2}>
                    <Link
                      href="https://www.pinterest.com/akinpelu_israel/"
                      target="_blank"
                    >
                      <FaPinterestP size={35} />
                    </Link>
                  </HoverScale>
                </FadeIn>
              </div>
            </StaggerContainer>
          </div>

          <div className="flex items-center justify-between px-4 lg:hidden py-4 w-full border-b border-gray-200">
            <FadeIn delay={0.2}>
              <HoverScale scale={1.1}>
                <div className="w-[43px] h-[43px]">
                  <Image
                    src="https://us-ms.gr-cdn.com/getresponse-tnbXo/photos/a36a85e4-f75d-40ad-a202-a0b8e5d08585.jpeg"
                    alt="Logo Image"
                    width={30}
                    height={30}
                    className="w-full"
                  />
                </div>
              </HoverScale>
            </FadeIn>
            <FadeIn delay={0.4}>
              <button
                onClick={toggleMenu}
                className="flex flex-col h-6 justify-between w-8 relative cursor-pointer"
                aria-label="Toggle menu"
              >
                <motion.div
                  className="h-1 bg-black w-full origin-center"
                  animate={
                    isMenuOpen ? { rotate: 45, y: 2 } : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
                <motion.div
                  className="h-1 bg-black w-full"
                  animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
                <motion.div
                  className="h-1 bg-black w-full origin-center"
                  animate={
                    isMenuOpen ? { rotate: -45, y: -19 } : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </button>
            </FadeIn>
          </div>

          <motion.div
            className="lg:hidden bg-white border-t border-gray-200 overflow-hidden shadow-lg rounded-md"
            initial={false}
            animate={
              isMenuOpen
                ? { height: "auto", opacity: 1 }
                : { height: 0, opacity: 0 }
            }
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.div
              className="px-4 py-6 space-y-4"
              initial="hidden"
              animate={isMenuOpen ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.1,
                  },
                },
              }}
            >
              <ul className="space-y-4 text-center *:cursor-pointer">
                <motion.li
                  variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <Link
                    href="/"
                    className="block text-lg hover:text-blue-600 transition-colors"
                  >
                    Home
                  </Link>
                </motion.li>
                <motion.li
                  variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <Link
                    href="/#"
                    className="block text-lg hover:text-blue-600 transition-colors"
                  >
                    About
                  </Link>
                </motion.li>
                <motion.li
                  variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <Link
                    href="/#"
                    className="block text-lg hover:text-blue-600 transition-colors"
                  >
                    Donate
                  </Link>
                </motion.li>
                <motion.li
                  variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <Link
                    href="/#"
                    className="block text-lg hover:text-blue-600 transition-colors"
                  >
                    Contact
                  </Link>
                </motion.li>
              </ul>
              <motion.div
                className="pt-4 border-t border-gray-200 flex items-center gap-4 justify-center"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.2,
                      delayChildren: 0.4,
                    },
                  },
                }}
              >
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <HoverScale scale={1.2}>
                    <Link
                      href="https://www.youtube.com/@Djisrael27"
                      target="_blank"
                    >
                      <FaYoutube size={35} />
                    </Link>
                  </HoverScale>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <HoverScale scale={1.2}>
                    <Link
                      href="https://www.pinterest.com/akinpelu_israel/"
                      target="_blank"
                    >
                      <FaPinterestP size={35} />
                    </Link>
                  </HoverScale>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </nav>
    </motion.div>
  );
}

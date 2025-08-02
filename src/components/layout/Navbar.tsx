"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaYoutube } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";
import {
  fadeInDown,
  fadeInUp,
  staggerChildren,
  scaleOnHover,
  fadeIn,
} from "../animations/motion";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <motion.nav
        className="fixed top-0 z-50 left-0 w-full bg-white/95 backdrop-blur-sm shadow-sm"
        initial="hidden"
        animate="visible"
        variants={fadeInDown}
      >
        <div className="w-full max-w-[1440px] mx-auto">
          <motion.div
            className="w-full hidden lg:flex lg:items-center lg:justify-between py-2 lg:px-12"
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            <motion.div
              className="flex items-center gap-12"
              variants={fadeInUp}
            >
              <motion.div variants={scaleOnHover} whileHover="hover">
                <div>
                  <Image
                    src="https://us-ms.gr-cdn.com/getresponse-tnbXo/photos/a36a85e4-f75d-40ad-a202-a0b8e5d08585.jpeg"
                    alt="Logo Image"
                    width={50}
                    height={50}
                  />
                </div>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
              >
                <motion.ul
                  className="flex items-center gap-10 *:cursor-pointer *:hover:opacity-85"
                  variants={staggerChildren}
                  initial="hidden"
                  animate="visible"
                >
                  <Link href="/">
                    <motion.li variants={fadeInUp}>Home</motion.li>
                  </Link>
                  <Link href="/about">
                    <motion.li variants={fadeInUp}>About</motion.li>
                  </Link>
                  <Link href="/faq">
                    <motion.li variants={fadeInUp}>FAQ&apos;s</motion.li>
                  </Link>
                  <Link href="/contact">
                    <motion.li variants={fadeInUp}>Contact</motion.li>
                  </Link>
                </motion.ul>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <motion.div
                className="flex items-center gap-8 *:cursor-pointer *:hover:opacity-85"
                variants={staggerChildren}
                initial="hidden"
                animate="visible"
              >
                <motion.div
                  variants={fadeInUp}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div>
                    <Link
                      href="https://www.youtube.com/@Djisrael27"
                      target="_blank"
                    >
                      <FaYoutube size={35} />
                    </Link>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div>
                    <Link
                      href="https://www.pinterest.com/akinpelu_israel/"
                      target="_blank"
                    >
                      <FaPinterestP size={35} />
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex items-center justify-between px-4 lg:hidden py-1 w-full border-b border-gray-200"
            initial="hidden"
            animate="visible"
            variants={fadeInDown}
          >
            <motion.div variants={scaleOnHover} whileHover="hover">
              <div>
                <div className="w-[43px] h-[43px]">
                  <Image
                    src="https://us-ms.gr-cdn.com/getresponse-tnbXo/photos/a36a85e4-f75d-40ad-a202-a0b8e5d08585.jpeg"
                    alt="Logo Image"
                    width={30}
                    height={30}
                    className="w-full"
                  />
                </div>
              </div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                onClick={toggleMenu}
                className="flex flex-col h-6 justify-between w-8 relative cursor-pointer"
                aria-label="Toggle menu"
              >
                <motion.div
                  className="h-1 bg-black w-full origin-center"
                  animate={
                    isMenuOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="h-1 bg-black w-full"
                  animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="h-1 bg-black w-full origin-center"
                  animate={
                    isMenuOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.3 }}
                />
              </button>
            </motion.div>
          </motion.div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="lg:hidden bg-white border-t border-gray-200 overflow-hidden shadow-lg rounded-md"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <motion.div
                  className="px-4 py-6 space-y-4"
                  initial="hidden"
                  animate="visible"
                  variants={staggerChildren}
                >
                  <motion.ul
                    className="space-y-4 text-center *:cursor-pointer"
                    variants={staggerChildren}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.li variants={fadeInUp}>
                      <Link
                        href="/"
                        className="block text-lg hover:text-blue-600 transition-colors"
                        onClick={closeMenu}
                      >
                        Home
                      </Link>
                    </motion.li>
                    <motion.li variants={fadeInUp}>
                      <Link
                        href="/about"
                        className="block text-lg hover:text-blue-600 transition-colors"
                        onClick={closeMenu}
                      >
                        About
                      </Link>
                    </motion.li>
                    <motion.li variants={fadeInUp}>
                      <Link
                        href="/faq"
                        className="block text-lg hover:text-blue-600 transition-colors"
                        onClick={closeMenu}
                      >
                        FAQ&apos;s
                      </Link>
                    </motion.li>
                    <motion.li variants={fadeInUp}>
                      <Link
                        href="/contact"
                        className="block text-lg hover:text-blue-600 transition-colors"
                        onClick={closeMenu}
                      >
                        Contact
                      </Link>
                    </motion.li>
                  </motion.ul>
                  <motion.div
                    className="pt-4 border-t border-gray-200 flex items-center gap-4 justify-center"
                    variants={fadeIn}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <div>
                        <Link
                          href="https://www.youtube.com/@Djisrael27"
                          target="_blank"
                        >
                          <FaYoutube size={35} />
                        </Link>
                      </div>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <div>
                        <Link
                          href="https://www.pinterest.com/akinpelu_israel/"
                          target="_blank"
                        >
                          <FaPinterestP size={35} />
                        </Link>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </div>
  );
}

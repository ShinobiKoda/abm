"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";
import { FaYoutube } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 z-50 left-0 w-full">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="w-full hidden lg:flex lg:items-center lg:justify-between py-6 lg:px-12">
          <div className="flex items-center gap-12">
            <Image
              src="https://us-ms.gr-cdn.com/getresponse-tnbXo/photos/a36a85e4-f75d-40ad-a202-a0b8e5d08585.jpeg"
              alt="Logo Image"
              width={50}
              height={50}
            />
            <ul className="flex items-center gap-10 *:cursor-pointer *:hover:opacity-85">
              <li>Home</li>
              <li>About</li>
              <li>Donate</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="flex items-center gap-8 *:cursor-pointer *:hover:opacity-85">
            <Link href="https://www.youtube.com/@Djisrael27" target="_blank">
              <FaYoutube size={35} />
            </Link>

            <Link
              href="https://www.pinterest.com/akinpelu_israel/"
              target="_blank"
            >
              <FaPinterestP size={35} />
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-between px-4 lg:hidden py-4 w-full border-b border-gray-200">
          <div className="w-[43px] h-[43px]">
            <Image
              src="https://us-ms.gr-cdn.com/getresponse-tnbXo/photos/a36a85e4-f75d-40ad-a202-a0b8e5d08585.jpeg"
              alt="Logo Image"
              width={30}
              height={30}
              className="w-full"
            />
          </div>
          <button
            onClick={toggleMenu}
            className="flex flex-col h-6 justify-between w-8 relative cursor-pointer"
            aria-label="Toggle menu"
          >
            <motion.div
              className="h-1 bg-black w-full origin-center"
              animate={isMenuOpen ? { rotate: 45, y: 2 } : { rotate: 0, y: 0 }}
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
          <div className="px-4 py-6 space-y-4">
            <ul className="space-y-4 text-center *:cursor-pointer">
              <li>
                <Link
                  href="/"
                  className="block text-lg hover:text-blue-600 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#"
                  className="block text-lg hover:text-blue-600 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#"
                  className="block text-lg hover:text-blue-600 transition-colors"
                >
                  Donate
                </Link>
              </li>
              <li>
                <Link
                  href="/#"
                  className="block text-lg hover:text-blue-600 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="pt-4 border-t border-gray-200 flex items-center gap-4 justify-center">
              <Link href="https://www.youtube.com/@Djisrael27" target="_blank">
                <FaYoutube size={35} />
              </Link>

              <Link
                href="https://www.pinterest.com/akinpelu_israel/"
                target="_blank"
              >
                <FaPinterestP size={35} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </nav>
  );
}

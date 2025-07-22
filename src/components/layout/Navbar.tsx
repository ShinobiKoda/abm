"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="w-full fixed top-0 left-0 z-50">
      <div className="w-full hidden lg:flex">
        <Image
          src="https://us-ms.gr-cdn.com/getresponse-tnbXo/photos/a36a85e4-f75d-40ad-a202-a0b8e5d08585.jpeg"
          alt="Logo Image"
          width={100}
          height={100}
        />
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Donate</li>
          <li>Contact</li>
        </ul>

        <div>
          <Link href="#">Youtube</Link>
          <Link href="#">Facebook</Link>
          <Link href="#">Pinterest</Link>
          <Link href="#">ABM</Link>
        </div>
      </div>

      <div className="flex items-center justify-between px-4 lg:hidden py-4 w-full">
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
          className="flex flex-col h-8 justify-between w-10 relative"
          aria-label="Toggle menu"
        >
          <motion.div
            className="h-1 bg-black w-full origin-center"
            animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          <motion.div
            className="h-1 bg-black w-full"
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          <motion.div
            className="h-1 bg-black w-full origin-center"
            animate={isMenuOpen ? { rotate: -45, y: -19 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </button>
      </div>

      <motion.div
        className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
        initial={false}
        animate={
          isMenuOpen
            ? { height: "auto", opacity: 1 }
            : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="px-4 py-6 space-y-4">
          <ul className="space-y-4">
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
          <div className="pt-4 border-t border-gray-200 space-y-3">
            <Link
              href="#"
              className="block text-sm hover:text-blue-600 transition-colors"
            >
              Youtube
            </Link>
            <Link
              href="#"
              className="block text-sm hover:text-blue-600 transition-colors"
            >
              Facebook
            </Link>
            <Link
              href="#"
              className="block text-sm hover:text-blue-600 transition-colors"
            >
              Pinterest
            </Link>
            <Link
              href="#"
              className="block text-sm bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-center"
            >
              ABM
            </Link>
          </div>
        </div>
      </motion.div>
    </nav>
  );
}

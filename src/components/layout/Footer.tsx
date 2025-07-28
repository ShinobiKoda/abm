"use client";
import { FaWhatsapp } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { FaPinterestP, FaYoutube } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { ClipLoader } from "react-spinners";
import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  fadeInUp,
  fadeIn,
  staggerChildren,
  scaleOnHover,
} from "../animations/motion";

export function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = { name: "", email: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "" });
    }, 2000);
  };
  return (
    <motion.div
      className="w-full bg-[#1a8671] mt-[60px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
    >
      <div className="w-full max-w-[1440px] mx-auto pt-18 pb-4 px-4 lg:px-12">
        <motion.div
          className="w-full flex flex-col lg:flex-row lg:justify-between gap-8"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="text-white w-full max-w-[400px] flex flex-col gap-4"
            variants={fadeInUp}
          >
            <h2 className="font-bold text-2xl lg:text-3xl">
              Elite Affiliate Solutions
            </h2>
            <p className="font-normal ext-base lg:text-xl">
              Elite affiliate solutions, expert strategies for maximizing
              affiliate marketing sucess.
            </p>
            <motion.div
              className="flex flex-col gap-4"
              variants={staggerChildren}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <motion.div
                className="text-white font-bold flex items-center gap-3"
                variants={fadeInUp}
              >
                <FaPhoneAlt size={20} />
                <p>
                  <span>Phone: </span> <span>+234 813-545-7403</span>
                </p>
              </motion.div>
              <motion.div
                className="text-white font-bold flex items-center gap-3"
                variants={fadeInUp}
              >
                <IoIosMail size={20} />
                <p>
                  <span>E-Mail: </span> <span>Akinpeluisrael123@gmail.com</span>
                </p>
              </motion.div>
              <motion.div
                className="text-white font-bold flex items-center gap-3"
                variants={fadeInUp}
              >
                <IoLocation size={20} />
                <p>
                  <span>Location: </span>{" "}
                  <span>Isokun, Ilesa Osun state, Nigeria</span>
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 w-full mb-20 max-w-[700px]"
            variants={fadeInUp}
          >
            <div className="flex flex-col gap-2">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
                className={`text-white text-base border w-full px-3 py-4 outline-none bg-transparent placeholder-gray-300 ${
                  errors.name ? "border-red-500" : "border-white"
                }`}
              />
              {errors.name && (
                <span className="text-red-300 text-sm">{errors.name}</span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className={`text-white text-base border w-full px-3 py-4 outline-none bg-transparent placeholder-gray-300 ${
                  errors.email ? "border-red-500" : "border-white"
                }`}
              />
              {errors.email && (
                <span className="text-red-300 text-sm">{errors.email}</span>
              )}
            </div>

            <div className="w-full flex items-center justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`text-white font-bold text-lg lg:text-xl border rounded-md border-white py-2 px-6 min-w-[120px] flex items-center justify-center cursor-pointer ${
                  isSubmitting
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:bg-white hover:text-[#1a8671] transition-colors"
                }`}
              >
                {isSubmitting ? (
                  <ClipLoader size={25} color="white" />
                ) : (
                  "Sign Up"
                )}
              </button>
            </div>
          </motion.form>
        </motion.div>
        <div className="bg-white h-1 mb-2"></div>
        <motion.div
          className="w-full flex justify-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          <motion.ul
            className="flex items-center gap-4 text-white font-bold"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.li variants={scaleOnHover} whileHover="hover">
              <Link href="#">
                <FaWhatsapp size={30} />
              </Link>
            </motion.li>
            <motion.li variants={scaleOnHover} whileHover="hover">
              <Link href="#">
                <CiFacebook size={30} />
              </Link>
            </motion.li>
            <motion.li variants={scaleOnHover} whileHover="hover">
              <Link
                href="https://www.pinterest.com/akinpelu_israel/"
                target="_blank"
              >
                <FaPinterestP size={30} />
              </Link>
            </motion.li>
            <motion.li variants={scaleOnHover} whileHover="hover">
              <Link href="https://www.youtube.com/@Djisrael27" target="_blank">
                <FaYoutube size={30} />
              </Link>
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </motion.div>
  );
}

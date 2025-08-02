"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  staggerChildren,
  fadeInUp,
  fadeIn,
  zoomIn,
  fadeInDown,
} from "./animations/motion";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { ClipLoader } from "react-spinners";
import { Footer } from "./layout/Footer";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);


  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10,}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Phone number must be at least 10 digits";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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

    setIsLoading(true);


    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
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
              Contact
            </h1>
            <div className="w-full h-1 bg-[#1a8671]"> </div>
          </div>
        </motion.header>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
          <motion.div className="space-y-8" variants={fadeInDown}>
            <h2 className="text-[#1a8671] font-semibold text-xl lg:text-2xl">
              Are you ready to elevate your affiliate business marketing game?
            </h2>
            <p className="leading-8 text-base lg:text-lg">
              Are you ready to elevate your affiliate business marketing game?
              Whether you&apos;re just starting out or looking to refine your
              strategy, we&apos;re here to help you succeed. Reach out to us for
              personalized advice, tailored strategies, and expert insights that
              can make a real difference in your affiliate marketing efforts.
              Don&apos;t navigate this journey alone—contact us today and
              let&apos;s unlock your full potential together!
            </p>

            {isSubmitted && (
              <motion.div
                className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 max-w-[600px]"
                variants={zoomIn}
                initial="hidden"
                animate="visible"
              >
                <p>
                  Thank you for your message! We&apos;ll get back to you soon.
                </p>
              </motion.div>
            )}

            <motion.form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 max-w-[600px]"
              variants={staggerChildren}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div variants={fadeInUp}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full border py-4 px-2 outline-none ${
                    errors.name ? "border-red-500" : "border-gray-400"
                  }`}
                  placeholder="Name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </motion.div>

              <motion.div variants={fadeInUp}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full border py-4 px-2 outline-none ${
                    errors.email ? "border-red-500" : "border-gray-400"
                  }`}
                  placeholder="Email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </motion.div>

              <motion.div variants={fadeInUp}>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full border py-4 px-2 outline-none ${
                    errors.phone ? "border-red-500" : "border-gray-400"
                  }`}
                  placeholder="Phone"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </motion.div>

              <motion.div variants={fadeInUp}>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Message"
                  className={`border py-4 px-2 outline-none w-full ${
                    errors.message ? "border-red-500" : "border-gray-400"
                  }`}
                  rows={3}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </motion.div>

              <motion.div className="w-full" variants={fadeInUp}>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="border-none outline-none bg-[#1a8671] text-white font-medium text-base lg:text-lg py-4 px-2 rounded-md shadow-md w-full flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <ClipLoader color="#ffffff" size={20} />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </motion.div>
            </motion.form>
          </motion.div>
          <motion.div className="space-y-8" variants={fadeIn}>
            <h2 className="text-[#1a8671] font-semibold text-xl lg:text-2xl">
              Contact Us:
            </h2>
            <motion.div
              className="flex flex-col gap-4 text-lg lg:text-xl mt-16"
              variants={staggerChildren}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <motion.div
                className="text-[#1a8671] font-bold flex items-center gap-3"
                variants={fadeInUp}
              >
                <FaPhoneAlt size={30} className="text-[#1a8671]" />
                <p>
                  <span>Phone: </span> <span>+234 813-545-7403</span>
                </p>
              </motion.div>
              <motion.div
                className="text-[#1a8671] font-bold flex items-center gap-3"
                variants={fadeInUp}
              >
                <IoIosMail size={30} />
                <p>
                  <span>E-Mail: </span> <span>Akinpeluisrael123@gmail.com</span>
                </p>
              </motion.div>
              <motion.div
                className="text-[#1a8671] font-bold flex items-center gap-3"
                variants={fadeInUp}
              >
                <IoLocation size={30} />
                <p>
                  <span>Location: </span>{" "}
                  <span>Isokun, Ilesa Osun state, Nigeria</span>
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}

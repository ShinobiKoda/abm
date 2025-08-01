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
import { FaHeart, FaUsers, FaRocket, FaGraduationCap } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { ClipLoader } from "react-spinners";
import { Footer } from "./layout/Footer";

const donationTiers = [
  {
    amount: 10000,
    title: "Supporter",
    description:
      "Help us create quality educational content for aspiring affiliate marketers",
    benefits: ["Access to exclusive tips", "Monthly newsletter"],
    icon: <FaHeart className="text-white" size={24} />,
  },
  {
    amount: 25000,
    title: "Advocate",
    description:
      "Support our mission to empower small businesses with affiliate marketing strategies",
    benefits: [
      "Everything in Supporter",
      "Priority email support",
      "Quarterly strategy guides",
    ],
    icon: <FaUsers className="text-white" size={24} />,
  },
  {
    amount: 50000,
    title: "Champion",
    description:
      "Invest in our advanced tools and resources for the affiliate marketing community",
    benefits: [
      "Everything in Advocate",
      "Free consultation session",
      "Access to premium resources",
    ],
    icon: <FaRocket className="text-white" size={24} />,
  },
  {
    amount: 100000,
    title: "Partner",
    description:
      "Become a strategic partner in building the future of affiliate marketing education",
    benefits: [
      "Everything in Champion",
      "Monthly group coaching call",
      "Co-branding opportunities",
    ],
    icon: <FaGraduationCap className="text-white" size={24} />,
  },
];

const impactStats = [
  { number: "500+", label: "Entrepreneurs Helped" },
  { number: "150+", label: "Successful Campaigns" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "₦800M+", label: "Revenue Generated" },
];

export function Donate() {
  const [selectedAmount, setSelectedAmount] = useState(25000);
  const [customAmount, setCustomAmount] = useState("");
  const [donorInfo, setDonorInfo] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    amount: "",
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
    const newErrors = { name: "", email: "", amount: "" };

    if (!donorInfo.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!donorInfo.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(donorInfo.email)) {
      newErrors.email = "Email is invalid";
    }

    const finalAmount = customAmount
      ? parseFloat(customAmount)
      : selectedAmount;
    if (!finalAmount || finalAmount < 2000) {
      newErrors.amount = "Minimum donation amount is ₦2,000";
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setDonorInfo((prev) => ({
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

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
    if (errors.amount) {
      setErrors((prev) => ({ ...prev, amount: "" }));
    }
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomAmount(value);
    if (value) {
      setSelectedAmount(0);
    }
    if (errors.amount) {
      setErrors((prev) => ({ ...prev, amount: "" }));
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
      setDonorInfo({ name: "", email: "", message: "" });
      setSelectedAmount(25000);
      setCustomAmount("");
    } catch (error) {
      console.error("Error processing donation:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const finalAmount = customAmount ? parseFloat(customAmount) : selectedAmount;

  return (
    <motion.div
      className="w-full pt-8"
      variants={staggerChildren}
      initial="hidden"
      animate="visible"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-12">
        {/* Header Section */}
        <motion.header variants={fadeInUp}>
          <div className="space-y-2">
            <h1 className="text-3xl lg:text-4xl font-semibold text-[#1a8671]">
              Support Our Mission
            </h1>
            <div className="w-full h-1 bg-[#1a8671]"></div>
          </div>
        </motion.header>

        {/* Mission Statement */}
        <motion.section className="mt-8 space-y-6" variants={fadeInDown}>
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#1a8671]">
            Empowering Entrepreneurs Through Affiliate Marketing
          </h2>
          <p className="text-lg leading-8">
            Your donation helps us continue providing world-class affiliate
            marketing education, resources, and support to entrepreneurs
            worldwide. Together, we&apos;re building a community where small
            businesses can thrive through strategic affiliate partnerships and
            digital marketing excellence.
          </p>
        </motion.section>

        {/* Impact Stats */}
        <motion.section
          className="mt-16"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-xl lg:text-2xl font-semibold text-[#1a8671] mb-8 text-center">
            Our Impact So Far
          </h3>
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerChildren}
          >
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                variants={zoomIn}
                className="text-center bg-white border border-gray-200 rounded-lg p-6 shadow-lg"
              >
                <div className="text-3xl lg:text-4xl font-bold text-[#1a8671] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Donation Tiers */}
        <motion.section
          className="mt-20"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-xl lg:text-2xl font-semibold text-[#1a8671] mb-8 text-center">
            Choose Your Support Level
          </h3>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerChildren}
          >
            {donationTiers.map((tier, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-[#1a8671] text-white p-4 text-center">
                  <div className="mb-2">{tier.icon}</div>
                  <h4 className="font-semibold text-lg">{tier.title}</h4>
                  <div className="text-2xl font-bold">
                    ₦{tier.amount.toLocaleString()}
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-700 mb-4 text-sm">
                    {tier.description}
                  </p>
                  <ul className="space-y-2">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <li
                        key={benefitIndex}
                        className="text-xs text-gray-600 flex items-center"
                      >
                        <div className="w-2 h-2 bg-[#1a8671] rounded-full mr-2"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Donation Form */}
        <motion.section
          className="mt-20 max-w-2xl mx-auto"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-xl lg:text-2xl font-semibold text-[#1a8671] mb-8 text-center">
            Make Your Donation
          </h3>

          {isSubmitted && (
            <motion.div
              className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6"
              variants={zoomIn}
              initial="hidden"
              animate="visible"
            >
              <p className="text-center">
                Thank you for your generous donation! Your support means the
                world to us.
              </p>
            </motion.div>
          )}

          <motion.form
            onSubmit={handleSubmit}
            className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg space-y-6"
            variants={staggerChildren}
          >
            {/* Amount Selection */}
            <motion.div variants={fadeInUp}>
              <label className="block text-[#1a8671] font-semibold mb-4">
                Select Donation Amount
              </label>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                {[10000, 25000, 50000, 100000].map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => handleAmountSelect(amount)}
                    className={`py-3 px-4 border rounded-md font-semibold transition-colors ${
                      selectedAmount === amount && !customAmount
                        ? "bg-[#1a8671] text-white border-[#1a8671]"
                        : "bg-white text-[#1a8671] border-gray-300 hover:border-[#1a8671]"
                    }`}
                  >
                    ₦{amount.toLocaleString()}
                  </button>
                ))}
              </div>
              <input
                type="number"
                value={customAmount}
                onChange={handleCustomAmountChange}
                placeholder="Enter custom amount (minimum ₦2,000)"
                min="2000"
                step="100"
                className="w-full border border-gray-300 py-3 px-4 rounded-md outline-none focus:border-[#1a8671]"
              />
              {errors.amount && (
                <p className="text-red-500 text-sm mt-1">{errors.amount}</p>
              )}
            </motion.div>

            {/* Donor Information */}
            <motion.div variants={fadeInUp}>
              <input
                type="text"
                name="name"
                value={donorInfo.name}
                onChange={handleInputChange}
                placeholder="Full Name"
                className={`w-full border py-3 px-4 rounded-md outline-none focus:border-[#1a8671] ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </motion.div>

            <motion.div variants={fadeInUp}>
              <input
                type="email"
                name="email"
                value={donorInfo.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                className={`w-full border py-3 px-4 rounded-md outline-none focus:border-[#1a8671] ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </motion.div>

            <motion.div variants={fadeInUp}>
              <textarea
                name="message"
                value={donorInfo.message}
                onChange={handleInputChange}
                placeholder="Optional message or dedication"
                rows={3}
                className="w-full border border-gray-300 py-3 px-4 rounded-md outline-none focus:border-[#1a8671]"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={fadeInUp}>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#1a8671] text-white font-semibold py-4 px-6 rounded-md shadow-md hover:bg-[#156b5a] transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <ClipLoader color="#ffffff" size={20} />
                    <span>Processing...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <MdOutlinePayment size={24} />
                    <span>
                      Donate ₦{finalAmount ? finalAmount.toLocaleString() : 0}
                    </span>
                  </div>
                )}
              </button>
            </motion.div>
          </motion.form>
        </motion.section>

        {/* Thank You Message */}
        <motion.section
          className="mt-20 text-center"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h3 className="text-xl lg:text-2xl font-semibold text-[#1a8671] mb-6">
            Every Contribution Matters
          </h3>
          <p className="text-lg leading-8 max-w-3xl mx-auto">
            Whether you donate ₦2,000 or ₦200,000, your contribution helps us
            reach more entrepreneurs, create better resources, and build
            stronger communities. Thank you for believing in our mission and
            helping us make affiliate marketing accessible to everyone who
            dreams of building their own successful business.
          </p>
        </motion.section>
      </div>

      <Footer />
    </motion.div>
  );
}

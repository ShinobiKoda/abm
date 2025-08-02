"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import {
  fadeInUp,
  fadeIn,
  fadeInDown,
  staggerChildren,
  zoomIn,
  scaleOnHover,
} from "./animations/motion";
import { LuNotebookPen } from "react-icons/lu";
import { SiMediamarkt, SiAppstore } from "react-icons/si";
import { RiShoppingBag4Line } from "react-icons/ri";
import { PiChairThin } from "react-icons/pi";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { FaRegUserCircle, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Footer } from "./layout/Footer";

const testimonials = [
  {
    name: "Angela Morrison",
    review:
      "I really love working with Israel, the CEO of ABM. He did an amazing job on my landing page — it's animated in a way that instantly attracts customers. It felt like magic seeing my ideas come to life. I highly recommend him for anyone who wants a page that converts.",
    image: "/Images/angela-morrison.jpg",
    rating: 5,
  },
  {
    name: "David Ekene",
    review:
      "Israel created a form page for my online shoe business, and I'm honestly impressed. The layout is so clean and attractive — it reflects my brand perfectly and captures leads smoothly. He knew exactly what I needed, and I'm grateful for the result.",
    image: "/Images/david-ekene.jpg",
    rating: 4.5,
  },
  {
    name: "Andrew Philip",
    review:
      "I really love how Israel scripted my leads. He gave me the names, the contact details, and organized everything cleanly. But that's not even all — he also built a smart dashboard that tracks every lead from my Excel sheet. At first, I thought his $3.58 price was a joke — now I see it's a steal. I totally recommend him.",
    image: "/Images/andrew-philip.jpg",
    rating: 5,
  },
  {
    name: "Prince Akpabio, Founder, VeriEditAI",
    review:
      "Prince Akpabio Working with Israel has been an outstanding experience. He understands exactly what I need when it comes to link promotion and lead generation. His consistency, communication, and results-driven approach have made him a valuable part of my digital growth journey. I trust him fully with my tasks, and he always delivers on time with top quality. I highly recommend him to anyone looking for someone reliable and skilled in digital marketing",
    image: "/Images/prince-akpabio.jpg",
    rating: 4,
  },
  {
    name: "Michael James",
    review:
      "From start to finish, Israel delivered more than expected. He redesigned my landing page, set up the integration form, and synced everything into a beautiful, automated dashboard. He's the kind of person you keep working with for the long run",
    image: "/Images/micheal-james.jpg",
    rating: 4.5,
  },
];

export function Homepage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentTestimonial(index);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-[#1a8671]" size={16} />);
    }

    if (hasHalfStar) {
      stars.push(
        <FaStarHalfAlt key="half" className="text-[#1a8671]" size={16} />
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <FaStar key={`empty-${i}`} className="text-gray-300" size={16} />
      );
    }

    return stars;
  };

  return (
    <div className="w-full mt-[10px]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInDown}
      >
        <h1 className="text-3xl lg:text-4xl text-center font-semibold">
          Affiliate <span className=" text-[#1a8671]">Business</span> Marketing
        </h1>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={zoomIn}
      >
        <div
          className="w-full h-[500px] bg-center bg-cover mt-8"
          style={{
            backgroundImage: "url('/Images/business-meeting.jpg')",
          }}
        ></div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeInUp}
      >
        <div className="mt-28 w-full px-4 lg:px-12 max-w-[1440px] mx-auto">
          <div className="w-full flex-col space-y-2">
            <h2 className="font-bold text-xl lg:text-3xl italic text-[#1a8671]">
              Affiliate Sucess Strategies
            </h2>
            <div className="w-full h-1 bg-[#1a8671]"></div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerChildren}
          >
            <div className="w-full max-w-[1440px] mx-auto mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div variants={fadeInUp}>
                <motion.div
                  variants={scaleOnHover}
                  whileHover="hover"
                  className="w-full flex flex-col items-center justify-center cursor-pointer"
                >
                  <div
                    className="w-full max-w-[400px] h-[300px] bg-center bg-contain bg-no-repeat"
                    style={{
                      backgroundImage:
                        "url('https://us-ms.gr-cdn.com/getresponse-tnbXo/photos/b072e267-7e84-46fe-a9b3-23084ec2d5b5.jpg')",
                    }}
                  ></div>
                  <p className="text-white font-medium py-6 w-full bg-[#1a8671] px-3 text-base lg:text-xl max-w-[500px] text-center">
                    CONTENT WRITING
                  </p>
                </motion.div>
              </motion.div>
              <motion.div variants={fadeInDown}>
                <motion.div
                  variants={scaleOnHover}
                  whileHover="hover"
                  className="w-full flex flex-col items-center justify-center cursor-pointer"
                >
                  <div
                    className="w-full max-w-[400px] h-[300px] bg-center bg-contain bg-no-repeat"
                    style={{
                      backgroundImage:
                        "url('https://us-ms.gr-cdn.com/getresponse-tnbXo/photos/24ed4b2e-ad55-43a3-8cc0-f5be9d1c47e7.jpg')",
                    }}
                  ></div>

                  <p className="text-white font-medium py-6 w-full bg-[#1a8671] px-3 text-base lg:text-xl max-w-[500px] text-center">
                    Youtube Promotion
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeIn}
      >
        <div className="w-full mt-[200px]  px-4 lg:px-12 max-w-[1440px] mx-auto">
          <div className="w-full flex-col space-y-2">
            <h2 className="font-bold text-xl lg:text-3xl italic text-[#1a8671]">
              Offered Services
            </h2>
            <div className="w-full h-1 bg-[#1a8671]"></div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerChildren}
            className="w-full grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-[80px]"
          >
            <motion.div variants={fadeInUp} className="flex flex-col gap-4">
              <LuNotebookPen className="text-[#1a8671] text-2xl" size={70} />
              <p className="flex flex-col gap-4 max-w-[320px]">
                <span className="font-medium text-lg lg:text-xl text-[#1a8671]">
                  Online Education
                </span>
                <span className="font-norma text-lg text-[#1a8671]">
                  Providing educational content and courses through digital
                  content.
                </span>
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-col gap-4">
              <SiMediamarkt className="text-[#1a8671] text-2xl" size={70} />
              <p className="flex flex-col gap-4 max-w-[320px]">
                <span className="font-medium text-lg lg:text-xl text-[#1a8671]">
                  Digital Medai and content creation
                </span>
                <span className="font-norma text-lg text-[#1a8671]">
                  Producing and distributing digital content such as articles,
                  videos, and podcasts.
                </span>
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-col gap-4">
              <RiShoppingBag4Line
                className="text-[#1a8671] text-2xl"
                size={70}
              />
              <p className="flex flex-col gap-4 max-w-[320px]">
                <span className="font-medium text-lg lg:text-xl text-[#1a8671]">
                  Dropshipping
                </span>
                <span className="font-norma text-lg text-[#1a8671]">
                  Selling products through an online store without holding
                  inventory; products are shipped directly from the supplier.
                </span>
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-col gap-4">
              <PiChairThin className="text-[#1a8671] text-2xl" size={70} />
              <p className="flex flex-col gap-4 max-w-[320px]">
                <span className="font-medium text-lg lg:text-xl text-[#1a8671]">
                  Digital Products
                </span>
                <span className="font-norma text-lg text-[#1a8671]">
                  Selling intangible products that can be delivered
                  electronically.
                </span>
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-col gap-4">
              <MdOutlineRealEstateAgent
                className="text-[#1a8671] text-2xl"
                size={70}
              />
              <p className="flex flex-col gap-4 max-w-[320px]">
                <span className="font-medium text-lg lg:text-xl text-[#1a8671]">
                  Online Real Estate
                </span>
                <span className="font-norma text-lg text-[#1a8671]">
                  Managing and transacting real estate properties through
                  digital platforms.
                </span>
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-col gap-4">
              <SiAppstore className="text-[#1a8671] text-2xl" size={70} />
              <p className="flex flex-col gap-4 max-w-[320px]">
                <span className="font-medium text-lg lg:text-xl text-[#1a8671]">
                  Mobile Apps
                </span>
                <span className="font-norma text-lg text-[#1a8671]">
                  Developing and offering applications for smartphones and
                  tablets.
                </span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="w-full mt-[200px]  px-4 lg:px-12 max-w-[1440px] mx-auto">
          <div className="w-full flex-col space-y-2">
            <h2 className="font-bold text-xl lg:text-3xl italic text-[#1a8671]">
              Customer Reviews and Testimonials
            </h2>
            <div className="w-full h-1 bg-[#1a8671] mb-14"></div>
          </div>

          <div className="relative w-full max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <motion.div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentTestimonial * 100}%)`,
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <motion.div
                      variants={fadeInUp}
                      className="w-full flex flex-col items-center justify-start relative pt-12 max-w-2xl mx-auto"
                    >
                      <div className="w-20 h-20 rounded-full bg-[#1a8671] overflow-hidden flex items-center justify-center absolute z-20 top-0 left-1/2 transform -translate-x-1/2">
                        {testimonial.image ? (
                          <Image
                            src={testimonial.image}
                            alt="Testimonial Profile"
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <FaRegUserCircle size={30} className="text-white" />
                        )}
                      </div>
                      <div className="bg-white border border-gray-200 px-6 py-8 pt-12 rounded-lg shadow-lg w-full min-h-[300px] flex flex-col">
                        <h3 className="font-semibold text-lg lg:text-xl text-[#1a8671] mb-4 text-center">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-700 text-base leading-8 font-medium lg:text-lg flex-1 text-center">
                          {testimonial.review}
                        </p>
                        <div className="flex justify-center items-center mt-4 gap-1">
                          {renderStars(testimonial.rating)}
                          <span className="ml-2 text-sm text-gray-600 font-medium">
                            {testimonial.rating}/5
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
                    currentTestimonial === index
                      ? "bg-[#1a8671] scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
}

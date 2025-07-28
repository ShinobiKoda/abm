"use client";
import { motion } from "motion/react";
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
import { FaRegUserCircle } from "react-icons/fa";
import { div } from "motion/react-client";

const testimonials = [
  {
    name: "Angela Morrison",
    review:
      "I really love working with Israel, the CEO of ABM. He did an amazing job on my landing page — it’s animated in a way that instantly attracts customers. It felt like magic seeing my ideas come to life. I highly recommend him for anyone who wants a page that converts.",
  },
  {
    name: "David Ekene",
    review:
      "Israel created a form page for my online shoe business, and I’m honestly impressed. The layout is so clean and attractive — it reflects my brand perfectly and captures leads smoothly. He knew exactly what I needed, and I’m grateful for the result.",
  },
  {
    name: "Andrew Philip",
    review:
      "I really love how Israel scripted my leads. He gave me the names, the contact details, and organized everything cleanly. But that’s not even all — he also built a smart dashboard that tracks every lead from my Excel sheet. At first, I thought his $3.58 price was a joke — now I see it's a steal. I totally recommend him.",
  },
  {
    name: "Stephanie Okoro",
    review:
      "ABM handled everything from lead generation to final dashboard delivery. I was amazed. Israel built my system like a pro — now I can see how many verified leads I have in one glance. He’s honest, detailed, and timely. I’ll be hiring again",
  },
  {
    name: "Michael James",
    review:
      "From start to finish, Israel delivered more than expected. He redesigned my landing page, set up the integration form, and synced everything into a beautiful, automated dashboard. He’s the kind of person you keep working with for the long run",
  },
];

export function Homepage() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: -20 }}
      variants={fadeIn}
    >
      <div className="w-full py-8 mt-[10px]">
        <section className="bg-[#1a8671]"></section>

        <section>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInDown}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-2xl lg:text-4xl text-center font-semibold">
              Affiliate <span className=" text-[#1a8671]">Business</span>{" "}
              Marketing
            </h1>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={zoomIn}
            transition={{ delay: 0.6 }}
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
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.9 }}
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
                animate="visible"
                variants={staggerChildren}
                transition={{ delay: 1.2 }}
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
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 1.8 }}
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
                animate="visible"
                variants={staggerChildren}
                transition={{ delay: 2.1 }}
                className="w-full grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-[80px]"
              >
                <motion.div variants={fadeInUp} className="flex flex-col gap-4">
                  <LuNotebookPen
                    className="text-[#1a8671] text-2xl"
                    size={70}
                  />
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
                      Producing and distributing digital content such as
                      articles, videos, and podcasts.
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
                      inventory; products are shipped directly from the
                      supplier.
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
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 2.4 }}
          >
            <div className="w-full mt-[200px]  px-4 lg:px-12 max-w-[1440px] mx-auto">
              <div className="w-full flex-col space-y-2">
                <h2 className="font-bold text-xl lg:text-3xl italic text-[#1a8671]">
                  Customer Reviews and Testimonials
                </h2>
                <div className="w-full h-1 bg-[#1a8671]  mb-14"></div>
              </div>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial="hidden"
                animate="visible"
                variants={staggerChildren}
                transition={{ delay: 2.7 }}
              >
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="w-full flex flex-col items-center justify-start relative pt-8"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#1a8671] flex items-center justify-center absolute z-20 -top-1 left-1/2 transform -translate-x-1/2">
                      <FaRegUserCircle size={30} className="text-white" />
                    </div>
                    <div className="bg-white border border-gray-200 px-6 py-8 pt-12 rounded-lg shadow-lg w-full h-full min-h-[280px] flex flex-col">
                      <h3 className="font-semibold text-lg lg:text-xl text-[#1a8671] mb-4 text-center">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-700 text-base leading-8 font-medium lg:text-lg flex-1">
                        {testimonial.review}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </section>
      </div>
    </motion.div>
  );
}

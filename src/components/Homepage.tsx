"use client";
import { motion } from "framer-motion";
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

export function Homepage() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: -20 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.6,
            delay: 0.1,
          },
        },
      }}
    >
      <div className="w-full py-8 mt-[10px]">
        <section className="bg-[#1a8671]"></section>

        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            <h1 className="text-2xl lg:text-4xl text-center font-semibold">
              Affiliate <span className=" text-[#1a8671]">Business</span>{" "}
              Marketing
            </h1>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
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
            viewport={{ once: true, amount: 0.1 }}
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
                viewport={{ once: true, amount: 0.1 }}
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
                            "url('	https://us-ms.gr-cdn.com/getresponse-tnbXo/photos/b072e267-7e84-46fe-a9b3-23084ec2d5b5.jpg')",
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
            viewport={{ once: true, amount: 0.1 }}
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
                viewport={{ once: true, amount: 0.1 }}
                variants={staggerChildren}
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

          <div className="w-full mt-[200px]  px-4 lg:px-12 max-w-[1440px] mx-auto">
            <div className="w-full flex-col space-y-2">
              <h2 className="font-bold text-xl lg:text-3xl italic text-[#1a8671]">
                Customer Reviews and Testimonials
              </h2>
              <div className="w-full h-1 bg-[#1a8671]"></div>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}

"use client";
import { motion } from "motion/react";
import { Footer } from "./layout/Footer";
import {
  fadeInUp,
  fadeIn,
  staggerChildren,
  zoomIn,
  fadeInDown,
} from "./animations/motion";

export function About() {
  return (
    <motion.div
      className="w-full pt-8"
      variants={staggerChildren}
      initial="hidden"
      animate="visible"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-12">
        <motion.header className="w-full mt-[10px]" variants={fadeInUp}>
          <div className="space-y-2">
            <h1 className="text-3xl lg:text-4xl font-semibold text-[#1a8671]">
              Affiliate Business Marketing
            </h1>
            <div className="w-full h-1 bg-[#1a8671]"></div>
          </div>
          <div className="w-full space-y-8 mt-10">
            <p className="leading-8">
              Affiliate business marketing is a dynamic player in the affiliate
              marketing industry, dedicated to bridging the gap between
              top-notch brands and eager consumers. Our mission is to drive
              growth and create value through innovative marketing strategies
              and strategic partnerships.
            </p>
            <p className="leading-8">
              We specialize in connecting high-quality products and services
              with targeted audiences, leveraging data-driven insights to
              maximize conversions and ensure optimal results. By partnering
              with a diverse range of brands, we offer tailored solutions that
              meet the unique needs of both our clients and their customers.
            </p>
            <p className="leading-8">
              Our approach combines cutting-edge technology with personalized
              service, providing businesses with effective affiliate marketing
              campaigns that enhance their online presence and drive sales. With
              a commitment to transparency, integrity, and excellence, Affiliate
              business marketing stands out as a trusted partner in the
              affiliate marketing space, delivering measurable success and
              fostering long-term relationships.
            </p>
          </div>
        </motion.header>

        <motion.section className="mt-12 space-y-8" variants={fadeIn}>
          <div className="space-y-2">
            <h2 className="text-3xl lg:text-4xl font-semibold text-[#1a8671]">
              Akinpelu Favuor
            </h2>
            <div className="w-full h-1 bg-[#1a8671]"></div>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between gap-12 ">
            <motion.div className="w-full max-w-[400px] h-[500px] mx-auto bg-center bg-cover bg-no-repeat" style={{
              backgroundImage: "url('/Images/akinpelu-isreal.jpg')"
            }} variants={zoomIn}>
            
            </motion.div>
            <motion.div className="w-full space-y-8" variants={fadeInDown}>
              <h3 className="font-semibold text-lg lg:text-xl text-[#1a8671]">
                We love to connect with our clients.
              </h3>
              <p className="text-base lg:text-lg">
                Welcome to Affiliate Business Marketing, your premier partner in
                affiliate marketing success.
              </p>
              <p className="text-base lg:text-lg">
                At Affiliate business marketing , we are passionate about
                transforming the landscape of affiliate marketing. Our mission
                is simple: to connect top-quality brands with enthusiastic
                consumers while driving growth and maximizing results.
              </p>
              <p className="text-base lg:text-lg">
                In a world where digital marketing is constantly evolving, we
                offer a fresh approach to affiliate marketing. Our team
                leverages advanced data analytics, cutting-edge technology, and
                creative strategies to craft personalized campaigns that
                resonate with your target audience. We understand that every
                brand is unique, and we tailor our solutions to align with your
                specific goals and objectives.
              </p>
              <p className="text-base lg:text-lg">
                What sets us apart? It&apos;s our unwavering commitment to
                excellence and transparency. We believe in building genuine
                partnerships, not just transactions. Our collaborative approach
                ensures that both our clients and their customers receive the
                utmost value. Whether you&apos;re a brand seeking to enhance
                your online presence or an affiliate marketer looking for
                lucrative opportunities, affiliate business marketing provides
                the expertise and support you need to succeed.
              </p>
              <p className="text-base lg:text-lg">
                Explore how we can help you achieve your marketing goals and
                join a community of satisfied clients who have experienced
                transformative growth with us. Discover the difference that a
                dedicated, results-driven affiliate marketing partner can make.
              </p>
              <p className="text-base lg:text-lg">
                Let&apos;s embark on this journey together and turn your vision
                into reality!
              </p>
            </motion.div>
          </div>
        </motion.section>
      </div>
      <Footer />
    </motion.div>
  );
}

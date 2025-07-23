"use client";
// import Image from "next/image";
import {
  FadeIn,
  FadeInUp,
  FadeInDown,
  SlideUp,
  StaggerContainer,
  ScaleIn,
  HoverScale,
  PageTransition,
} from "./animations/motion";
import { LuNotebookPen } from "react-icons/lu";
import { SiMediamarkt, SiAppstore } from "react-icons/si";
import { RiShoppingBag4Line } from "react-icons/ri";
import { PiChairThin } from "react-icons/pi";
import { MdOutlineRealEstateAgent } from "react-icons/md";

export function Homepage() {
  return (
    <PageTransition>
      <div className="w-full py-8">
        <section className="bg-[#1a8671]"></section>

        <section>
          <FadeIn delay={0.2}>
            <h1 className="text-xl lg:text-4xl text-center font-semibold">
              Affiliate <span className=" text-[#1a8671]">Business</span>{" "}
              Marketing
            </h1>
          </FadeIn>
          <ScaleIn delay={0.4}>
            <div
              className="w-full h-[500px] bg-center bg-cover mt-8"
              style={{
                backgroundImage: "url('/Images/business-meeting.jpg')",
              }}
            ></div>
          </ScaleIn>

          <SlideUp delay={0.6}>
            <div className="mt-28 w-full px-4 lg:px-12 max-w-[1440px] mx-auto">
              <div className="w-full flex-col space-y-2">
                <h2 className="font-bold text-xl lg:text-3xl italic text-[#1a8671]">
                  Affiliate Sucess Strategies
                </h2>
                <div className="w-full h-1 bg-[#1a8671]"></div>
              </div>

              <StaggerContainer staggerDelay={0.2} childrenDelay={0.8}>
                <div className="w-full max-w-[1440px] mx-auto mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <FadeInUp>
                    <HoverScale className="w-full flex flex-col items-center justify-center cursor-pointer">
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
                    </HoverScale>
                  </FadeInUp>
                  <FadeInDown>
                    <HoverScale className="w-full flex flex-col items-center justify-center cursor-pointer">
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
                    </HoverScale>
                  </FadeInDown>
                </div>
              </StaggerContainer>
            </div>
          </SlideUp>

          <FadeIn delay={1.2}>
            <div className="w-full mt-[200px]  px-4 lg:px-12 max-w-[1440px] mx-auto">
              <div className="w-full flex-col space-y-2">
                <h2 className="font-bold text-xl lg:text-3xl italic text-[#1a8671]">
                  Offered Services
                </h2>
                <div className="w-full h-1 bg-[#1a8671]"></div>
              </div>

              <div className="w-full grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-[80px]">
                <div className="flex flex-col gap-4">
                  <LuNotebookPen className="text-[#1a8671] text-2xl" size={70}/>
                  <p className="flex flex-col gap-4 max-w-[320px]">
                    <span className="font-medium text-lg lg:text-xl text-[#1a8671]">Online Education</span>
                    <span className="font-norma text-lg text-[#1a8671]">
                      Providing educational content and courses through digital content.
                    </span>
                  </p>
                </div>
                 <div className="flex flex-col gap-4">
                  <SiMediamarkt className="text-[#1a8671] text-2xl" size={70}/>
                  <p className="flex flex-col gap-4 max-w-[320px]">
                    <span className="font-medium text-lg lg:text-xl text-[#1a8671]">Digital Medai and content creation</span>
                    <span className="font-norma text-lg text-[#1a8671]">
                      Producing and distributing digital content such as articles, videos, and podcasts.
                    </span>
                  </p>
                </div>
                 <div className="flex flex-col gap-4">
                  <RiShoppingBag4Line className="text-[#1a8671] text-2xl" size={70}/>
                  <p className="flex flex-col gap-4 max-w-[320px]">
                    <span className="font-medium text-lg lg:text-xl text-[#1a8671]">Dropshipping</span>
                    <span className="font-norma text-lg text-[#1a8671]">
                      Selling products through an online store without holding inventory; products are shipped directly from the supplier.
                    </span>
                  </p>
                </div>
                 <div className="flex flex-col gap-4">
                  <PiChairThin className="text-[#1a8671] text-2xl" size={70}/>
                  <p className="flex flex-col gap-4 max-w-[320px]">
                    <span className="font-medium text-lg lg:text-xl text-[#1a8671]">Digital Products</span>
                    <span className="font-norma text-lg text-[#1a8671]">
                      Selling intangible products that can be delivered electronically.
                    </span>
                  </p>
                </div>
                 <div className="flex flex-col gap-4">
                  <MdOutlineRealEstateAgent className="text-[#1a8671] text-2xl" size={70}/>
                  <p className="flex flex-col gap-4 max-w-[320px]">
                    <span className="font-medium text-lg lg:text-xl text-[#1a8671]">Online Real Estate</span>
                    <span className="font-norma text-lg text-[#1a8671]">
                     Managing and transacting real estate properties through digital platforms.
                    </span>
                  </p>
                </div>
                 <div className="flex flex-col gap-4">
                  <SiAppstore className="text-[#1a8671] text-2xl" size={70}/>
                  <p className="flex flex-col gap-4 max-w-[320px]">
                    <span className="font-medium text-lg lg:text-xl text-[#1a8671]">Mobile Apps</span>
                    <span className="font-norma text-lg text-[#1a8671]">
                      Developing and offering applications for smartphones and tablets.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>
      </div>
    </PageTransition>
  );
}

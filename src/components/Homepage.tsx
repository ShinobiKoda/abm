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
                  Customer Review and Testimonials
                </h2>
                <div className="w-full h-1 bg-[#1a8671]"></div>
              </div>
            </div>
          </FadeIn>
        </section>
      </div>
    </PageTransition>
  );
}

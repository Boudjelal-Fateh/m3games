import React from "react";

import Image from "next/image";

export function Expertise() {
  const features = [
    "Scalable Architecture",
    "Modern Technology Stack",
    "Cloud-Native Solutions",
    "Performance Optimization",
  ];

  return (
    <section className="relative w-full overflow-x-hidden bg-black px-4 py-20 sm:px-6 lg:px-8 xl:px-[140px]">
      {/* Header */}
      <div className="mb-12 sm:mb-16 text-center flex flex-col items-center justify-center md:mb-[60px]">
        <div className="mb-4 flex items-center justify-center gap-2 mb-[22px]">
          <Image src={"/award.svg"} width={22} height={22} alt="Award Icon" />
          <span className="text-[18px] sm:text-[24px] leading-[24px] text-[#a594fd] font-onest -tracking-[0.24px]">
            Our Expertise
          </span>
        </div>

        <h2 className="text-[32px] sm:text-[40px] lg:text-[50px] leading-[40px] sm:leading-[52px] lg:leading-[64px] mb-[10px] font-onest font-[500] -tracking-[1.76px] text-[#f1f1ef]">
          Solutions Built for Your Growth
        </h2>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full lg:w-auto items-start lg:items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-6 sm:gap-8 w-full lg:max-w-[520px]">
          <div>
            <h3 className="text-[24px] sm:text-[32px] lg:text-[40px] leading-[32px] sm:leading-[40px] lg:leading-[51px] font-onest font-[500] -tracking-[1.76px] text-[#f1f1ef] mb-[10px]">
              Future-Proof Solutions
            </h3>
            <p className="text-[14px] sm:text-[16px] lg:text-[18px] leading-[22px] sm:leading-[24px] lg:leading-[26px] -tracking-[0.16px] font-onest font-normal mb-[16px] sm:mb-[22px] text-[#adadad]/80">
              We don't just deliver code — we build scalable systems that{" "}
              <br className="hidden md:block" /> grow with your business.
            </p>
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 mt-2 sm:mt-3">
                <Image
                  src={"/check-circle-1.svg"}
                  width={20}
                  height={20}
                  alt="Check Icon"
                  className="sm:w-6 sm:h-6"
                />
                <span className="text-[14px] sm:text-[16px] lg:text-[18px] leading-[20px] sm:leading-[24px] font-onest font-normal text-[#adadad]">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center gap-4 lg:gap-[40px] w-full lg:max-w-[618px] lg:h-[568px]">
          <div className="relative w-full h-[280px] sm:h-[400px] lg:h-full rounded-[20px] lg:rounded-[24px] overflow-hidden">
            <Image
              src="/Background-1.png"
              alt="Future-Proof Solutions"
              fill
              className="object-cover"
            />
          </div>
          <div className="hidden lg:flex flex-col items-center gap-4">
            <span className="text-[#666666] text-sm">03</span>
            <div className="w-1 h-full bg-gradient-to-b from-[#a594fd] to-transparent rounded-full" />
            <span className="text-[#666666] text-sm">04</span>
          </div>
        </div>
      </div>
    </section>
  );
}

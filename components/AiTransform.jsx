"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";

export function AiTransform() {
  // activeIndex = the use case whose NUMBER is currently "hit" by the progress line
  const [activeIndex, setActiveIndex] = useState(0);
  // maxSeenIndex = highest index the fill line has reached so far (stays white after passing)
  const [maxSeenIndex, setMaxSeenIndex] = useState(0);

  // Line geometry inside the timeline container
  const [lineTopPx, setLineTopPx] = useState(0); // where gray line starts (from the span)
  const [lineHeightPx, setLineHeightPx] = useState(0); // total gray line height (to last item)
  const [lineFilledPx, setLineFilledPx] = useState(0); // filled height (from lineTopPx downward)

  const timelineRef = useRef(null);
  const itemRefs = useRef([]);

  // refs to anchor the line start to the EXACT span
  const headerTextRef = useRef(null);

  const useCases = useMemo(
    () => [
      {
        number: "01",
        title: "Customer Support Automation",
        description:
          "AI agents handling 80% of customer inquiries with human-level understanding and response quality.",
      },
      {
        number: "02",
        title: "Content Generation Pipeline",
        description:
          "Automated content creation models that scale with your business needs, from templates.",
      },
      {
        number: "03",
        title: "Data Analysis & Insights",
        description:
          "Intelligent systems that process vast datasets and extract actionable intelligence rapidly.",
      },
      {
        number: "04",
        title: "Process Optimization",
        description:
          "Automated workflow engines streamlining operations, reducing manual effort, and improving efficiency.",
      },
      {
        number: "05",
        title: "Fraud Detection",
        description:
          "Smart fraud detection powered by AI solutions with real-time threat identification.",
      },
      {
        number: "06",
        title: "Agents Business Automation",
        description:
          "Comprehensive AI solutions automating entire business processes end-to-end.",
      },
    ],
    [],
  );

  useEffect(() => {
    const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

    const measureAndUpdate = () => {
      if (!headerTextRef.current || !timelineRef.current) return;

      const timelineRect = timelineRef.current.getBoundingClientRect();
      const headerTextRect = headerTextRef.current.getBoundingClientRect();

      // END should be the LAST use case row bottom (not the container bottom, just to be exact)
      const lastEl = itemRefs.current[itemRefs.current.length - 1];
      const lastRect = lastEl?.getBoundingClientRect();

      const lineStartY = headerTextRect.bottom; // START from the span
      const lineEndY =
        lastRect?.bottom != null ? lastRect.bottom : timelineRect.bottom; // STOP at item 06

      // Convert start/end in VIEWPORT coords -> to TIMELINE-local coords (px from top of timeline)
      const startLocal = lineStartY - timelineRect.top;
      const endLocal = lineEndY - timelineRect.top;

      const topPx = Math.max(0, startLocal);
      const heightPx = Math.max(0, endLocal - topPx);

      setLineTopPx(topPx);
      setLineHeightPx(heightPx);

      // "hit line" at viewport center
      const hitY = window.innerHeight * 0.5;

      // fill = how far hitY is past lineStartY, clamped to [0, total]
      const filled = clamp(
        hitY - lineStartY,
        0,
        Math.max(0, lineEndY - lineStartY),
      );
      setLineFilledPx(filled);

      // active item = last row whose center is above hitY
      let nextActive = 0;
      for (let i = 0; i < itemRefs.current.length; i++) {
        const el = itemRefs.current[i];
        if (!el) continue;
        const r = el.getBoundingClientRect();
        const rowCenter = (r.top + r.bottom) / 2;
        if (rowCenter <= hitY) nextActive = i;
      }

      setActiveIndex(nextActive);
      // items stay white once reached
      setMaxSeenIndex((prev) => Math.max(prev, nextActive));
    };

    let raf = 0;
    const onScrollOrResize = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measureAndUpdate);
    };

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    // initial (after first paint)
    onScrollOrResize();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  return (
    <section className="relative w-full overflow-x-hidden bg-black px-4 py-20 sm:px-6 lg:px-8 xl:px-[140px]">
      {/* Header */}
      <div className="mb-20 text-center flex flex-col items-center justify-center md:mb-[80px] relative">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1b1c1e] rounded-full mb-8 relative z-10">
          <span
            ref={headerTextRef}
            className="text-[14px] sm:text-[16px] leading-[24px] text-[#a594fd] font-onest font-[500]"
          >
            AI Transformation Use Cases
          </span>
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-[1400px] mx-auto relative" ref={timelineRef}>
        {/* Vertical line (gray base) - starts at the span and stops at item 06 */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-1 hidden lg:block pointer-events-none"
          style={{
            top: `${lineTopPx}px`,
            height: `${lineHeightPx}px`,
            background: "#2f2f2f",
          }}
        />

        {/* Filled part of the line (purple) */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-1 hidden lg:block pointer-events-none"
          style={{
            top: `${lineTopPx}px`,
            height: `${Math.min(lineFilledPx, lineHeightPx)}px`,
            background: "#a594fd",
          }}
        />

        {/* Use Cases */}
        <div className="space-y-16 lg:space-y-20">
          {useCases.map((useCase, index) => {
            const isSeen = index <= maxSeenIndex;
            const isOdd = index % 2 === 1;

            return (
              <div
                key={useCase.number}
                ref={(el) => (itemRefs.current[index] = el)}
                className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0 items-center"
              >
                {/* Left Side */}
                <div
                  className={`transition-colors duration-500 lg:col-span-1 ${
                    isOdd ? "lg:text-right lg:pr-12" : "lg:text-left"
                  } ${isSeen ? "text-[#f1f1ef]" : "text-[#666666]"}`}
                >
                  {isOdd ? (
                    <h3 className="text-[20px] sm:text-[24px] lg:text-[28px] leading-[28px] sm:leading-[32px] lg:leading-[36px] font-onest font-[600]">
                      {useCase.title}
                    </h3>
                  ) : (
                    <p className="text-[14px] sm:text-[16px] lg:text-[16px] leading-[22px] sm:leading-[24px] lg:leading-[24px] font-onest font-normal">
                      {useCase.description}
                    </p>
                  )}
                </div>

                {/* Center - Number Circle */}
                <div className="hidden lg:flex lg:col-span-1 justify-center relative z-10">
                  <div
                    className={`w-16 h-16 rounded-full bg-black border-4 flex items-center justify-center relative z-20 flex-shrink-0 transition-colors duration-500 ${
                      isSeen ? "border-[#a594fd]" : "border-[#666666]"
                    }`}
                  >
                    <span
                      className={`text-lg font-onest font-[600] transition-colors duration-500 ${
                        isSeen ? "text-[#f1f1ef]" : "text-[#666666]"
                      }`}
                    >
                      {useCase.number}
                    </span>
                  </div>
                </div>

                {/* Right Side */}
                <div
                  className={`transition-colors duration-500 lg:col-span-1 ${
                    isOdd ? "lg:text-left lg:pl-12" : "lg:text-right lg:pr-12"
                  } ${isSeen ? "text-[#f1f1ef]" : "text-[#666666]"}`}
                >
                  {isOdd ? (
                    <p className="text-[14px] sm:text-[16px] lg:text-[16px] leading-[22px] sm:leading-[24px] lg:leading-[24px] font-onest font-normal">
                      {useCase.description}
                    </p>
                  ) : (
                    <h3 className="text-[20px] sm:text-[24px] lg:text-[28px] leading-[28px] sm:leading-[32px] lg:leading-[36px] font-onest font-[600]">
                      {useCase.title}
                    </h3>
                  )}
                </div>

                {/* Mobile - Number Circle */}
                <div className="flex lg:hidden justify-center mt-4">
                  <div
                    className={`w-12 h-12 rounded-full bg-[#1b1c1e] border flex items-center justify-center transition-colors duration-500 ${
                      isSeen ? "border-[#a594fd]" : "border-[#666666]"
                    }`}
                  >
                    <span
                      className={`text-sm font-onest font-[600] transition-colors duration-500 ${
                        isSeen ? "text-[#f1f1ef]" : "text-[#666666]"
                      }`}
                    >
                      {useCase.number}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

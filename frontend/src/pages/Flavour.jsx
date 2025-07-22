import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { motion } from "framer-motion";
import CircularGallery from "../components/CircularGallery";
import RevealFreaking from "../components/RevealFreaking";

gsap.registerPlugin(ScrollTrigger);

const Flavour = () => {
  const containerRef = useRef(null);
  const fireUpRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    // 🎯 Animate all text color word-by-word except "FIRE UP"
    const paragraphs = Array.from(container.querySelectorAll("p")).filter(
      (p) => !p.textContent.includes("FIRE UP")
    );

    let allWords = [];

    paragraphs.forEach((p) => {
      const split = new SplitType(p, { types: "words" });
      allWords.push(...split.words);
    });

    gsap.fromTo(
      allWords,
      { color: "#3f3f46" }, // zinc-600
      {
        color: "#ffffff",
        stagger: {
          each: 0.05,
        },
        scrollTrigger: {
          trigger: container,
          start: "top 70%",
          end: "bottom 30%",
          scrub: true,
        },
      }
    );

    // 🎯 FIRE UP scale animation using ScrollTrigger + scrub
    gsap.fromTo(
      fireUpRef.current,
      { scale: 0.2, opacity: 0 }, // Start smaller for more bounce feel
      {
        scale: 1,
        opacity: 1,
        ease: "ease.in",
        scrollTrigger: {
          trigger: fireUpRef.current,
          start: "top 85%", // adjust trigger point for earlier visibility
          end: "top 40%", // slow down with longer scroll range
          scrub: 1.5, // slow/smooth scrub
        },
      }
    );
  }, []);

  return (
    <div className="bg-[#090701] text-white">
      {/* 🔝 FULL WIDTH TOP TEXT SECTION */}
      <div
        ref={containerRef}
        className="w-full font-[dirty-brush] md:text-[6rem] text-[2rem] leading-8 md:leading-20 text-center pt-15 md:pt-50"
      >
        <div>
          <p>STIR UP YOUR</p>
          <p>FEARLESS PAST AND</p>
        </div>

        {/* 🌀 FIRE UP — scale on scroll */}
        <div
          ref={fireUpRef}
          className="bg-[#090701] w-fit mx-auto rotate-350 p-4 rounded"
        >
          <p className="bg-lime-400 text-[#090701] w-fit py-2 px-4">FIRE UP</p>
        </div>

        <div>
          <p>YOUR FUTURE WITH EVERY</p>
          <p>GULP OF PERFECT CAFFINE</p>
        </div>
      </div>

      {/* 🔻 DRINK FLAVOUR TEXT SECTION */}
      <div className="mt-20 md:mt-50 lg:overflow-hidden">
        <div className="h-full flex lg:flex-row flex-col overflow-x-hidden gap-10 px-4 lg:px-10 no-scrollbar scroll-smooth">
          {/* TEXT PANEL */}
          <div className="min-w-full leading-10 px-4 py-10 lg:px-30 lg:py-10 flex-none flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="font-[dirty-brush] md:h-15 text-[2.5rem] sm:text-[4rem] lg:text-[7rem]">
              <h1>WE HAVE</h1>
            </div>
            <div className="flex sm:flex-row items-center justify-center lg:justify-start">
              <div className="font-[kaushan] md:w-50 -ml-14 text-[4rem] sm:text-[5rem] lg:text-[7rem] w-30 text-center">
                <h1>08</h1>
              </div>
              <div className="font-[dirty-brush] leading-[3rem] text-[2.5rem] sm:text-[4rem] lg:text-[6rem] text-center sm:text-left">
                <RevealFreaking />
                <div>
                  <p>Flavours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 👇 NEW SECTION: CIRCULAR GALLERY BELOW TOP TEXT */}
      <div className="w-full flex justify-center items-center pb-15">
        <div className="w-full relative h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px]">
          <CircularGallery
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.01}
            scrollSpeed={0.9}
          />
        </div>
      </div>
    </div>
  );
};

export default Flavour;

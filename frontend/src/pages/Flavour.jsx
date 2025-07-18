import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { motion } from "framer-motion";

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
      { scale: 0.2 }, // Start smaller for more bounce feel
      {
        scale: 1,
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
      <div
        ref={containerRef}
        className="font-[dirty-brush] md:text-[6rem] text-[3rem] leading-12  md:leading-25 text-center pt-15"
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

      <div className="mt-30 lg:h-[100vh] lg:overflow-hidden">
        <div className="h-full flex lg:flex-row flex-col lg:overflow-x-auto overflow-x-hidden gap-10 px-4 lg:px-10 no-scrollbar scroll-smooth">
          {/* TEXT PANEL */}
          <div className=" min-w-full leading-10 lg:min-w-[50vw] px-4 py-10 lg:px-30 lg:py-55 flex-none flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Top Half */}
            <div className="font-[dirty-brush] md:h-15 text-[2.5rem] sm:text-[4rem] lg:text-[7rem]">
              <h1>WE HAVE</h1>
            </div>

            {/* Bottom Half */}
            <div className="flex sm:flex-row items-center justify-center lg:justify-start">
              <div className="font-[kaushan] md:w-50 -ml-14 text-[4rem] sm:text-[5rem] lg:text-[7rem] w-30 text-center">
                <h1>08</h1>
              </div>
              <div className="font-[dirty-brush] leading-[3rem] text-[2.5rem] sm:text-[4rem] lg:text-[6rem] text-center sm:text-left">
                <div className="bg-lime-400 w-fit p-2 sm:p-4 text-[#090701] relative rotate-[355deg] mx-auto sm:mx-0">
                  <p>Freaking</p>
                </div>
                <div>
                  <p>Flavours</p>
                </div>
              </div>
            </div>
          </div>

          {/* DRINK IMAGES */}
          <div className="flex flex-col lg:flex-row items-center w-full lg:w-auto">
            {[1, 4, 3].map((num) => (
              <div
                key={num}
                className="h-auto lg:h-full sm:w-1/2 lg:min-w-[35vw] flex-none"
              >
                <div className="w-full origin-bottom-left h-full rounded-2xl overflow-hidden flex justify-center">
                  <motion.img
                    animate={{ rotate: [4, 0, 4] }} // yoyo pattern
                    transition={{
                      duration: 5,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    src={`/monster-resources-hackathon/drink${num}-removebg-preview.png`}
                    className="w-80 h-60 sm:w-60 sm:h-60 lg:w-190 lg:h-190 object-contain"
                    alt={`drink${num}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flavour;

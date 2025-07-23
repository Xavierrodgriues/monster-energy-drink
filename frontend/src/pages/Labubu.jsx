import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { NavLink } from "react-router";

const Labubu = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const angle = 345 * (Math.PI / 100);
  const distance = 1500;

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, Math.cos(angle) * distance]
  );
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, Math.sin(angle) * distance]
  );

  const angle2 = 110 * (Math.PI / 180); // 180° + 20° = 200°
  const moveDistance = 1500; // positive because we want to move "down"

  const x2 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, Math.cos(angle2) * moveDistance]
  );
  const y2 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, Math.sin(angle2) * moveDistance]
  );

  const smoothConfig = { damping: 10, stiffness: 100 }; // control feel

  const xSmooth = useSpring(x, smoothConfig);
  const ySmooth = useSpring(y, smoothConfig);
  const x2Smooth = useSpring(x2, smoothConfig);
  const y2Smooth = useSpring(y2, smoothConfig);

  return (
    <div>
      <div className="bg-[#e2c5ca] overflow-hidden border border-[#e2c5ca] h-150 rounded-2xl relative flex flex-col">
        <div className="h-40">
          <div className="h-full w-full flex justify-center items-end">
            <div className="flex items-center gap-3 bg-purple-400 rounded-4xl w-fit py-2 px-4 ">
              <div className="w-5 h-5">
                <img src="/monster-resources-hackathon/sun.svg" alt="" />
              </div>
              <p className="font-[kaushan] text-sm font-semibold">
                BOOST ENERYGY
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 py-8 flex-1">
          <div className="w-full font-[dirty-brush] flex flex-col items-center text-4xl lg:text-6xl">
            <h1>Turning fantasies</h1>
            <h1>into reality.</h1>
          </div>
          <div className="text-center font-[dirty-brush]">
            <p>The full strength of monster is comes from</p>
            <p>naturally infused taurine.</p>
          </div>
          <NavLink to="/drinks" className="flex justify-center">
            <div className="relative group overflow-hidden flex gap-3 font-[kaushan] items-center justify-around border rounded-[2rem] w-40 py-[8px] px-2">
              {/* Animated Lime Background */}
              <span className="absolute left-0 top-0 h-full w-0 bg-lime-400 transition-all duration-500 ease-in-out group-hover:w-full z-0"></span>

              {/* Content stays on top */}
              <p className="z-10 text-black">Drink it up</p>
              <div className="bg-amber-950 flex justify-center items-center w-8 h-8 rounded-full z-10">
                <img
                  className="w-3 h-3"
                  src="/monster-resources-hackathon/right-arrow-svgrepo-com.svg"
                  alt=""
                />
              </div>
            </div>
          </NavLink>

          <motion.div
            className="hidden xl:block absolute rotate-345 left-[-100px] top-36"
            style={{ x: xSmooth, y: ySmooth }}
          >
            <img
              className="w-165"
              src="https://ik.imagekit.io/wr6ziyjiu/labubu.png?updatedAt=1753180212919"
              alt=""
            />
          </motion.div>

          <motion.div
            className="hidden xl:block absolute top-[-10rem] right-[-12rem] rotate-20"
            style={{
              x: x2Smooth,
              y: y2Smooth,
            }}
          >
            <img
              className="w-165"
              src="https://ik.imagekit.io/wr6ziyjiu/labubu.png?updatedAt=1753180212919"
              alt=""
            />
          </motion.div>

          <div
            ref={targetRef}
            className="absolute right-[21rem] bottom-[-25px]"
          >
            <img
              className="w-20"
              src="https://ik.imagekit.io/wr6ziyjiu/transparentTree.png?updatedAt=1753179998957"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Labubu;

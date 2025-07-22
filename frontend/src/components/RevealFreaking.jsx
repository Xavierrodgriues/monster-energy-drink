import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const RevealFreaking = () => {
  const containerRef = useRef(null);

  // Scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Map scroll progress to x-position
  const rawX = useTransform(scrollYProgress, [0, 0.6], ["0%", "100%"]);

  // Smooth the x-position using spring
  const smoothX = useSpring(rawX, {
    stiffness: 80,   // lower = smoother, slower
    damping: 20,     // higher = more resistance
    mass: 0.8,
  });

  return (
    <div
      ref={containerRef}
      className="relative w-fit rotate-[355deg] mx-auto sm:mx-0"
    >
      {/* Visible content */}
      <p className="bg-lime-400 p-2 sm:p-4 text-[#090701] relative z-10">
        Freaking
      </p>

      {/* Smooth scrub overlay */}
      <motion.div
        style={{ x: smoothX }}
        className="absolute top-0 left-0 w-full h-full bg-[#090701] z-20"
      />
    </div>
  );
};

export default RevealFreaking;
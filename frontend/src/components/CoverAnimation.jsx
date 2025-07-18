// src/components/CoverAnimation.jsx
import { useEffect, useRef, useState } from "react";

const CoverAnimation = ({ onFinish }) => {
  const videoRef = useRef(null);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener("ended", () => {
        setAnimateOut(true); // Start slide-down
        setTimeout(() => {
          onFinish(); // Notify App to hide animation
        }, 1000); // Should match duration-1000
      });
    }
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 transition-transform duration-1000 ${
        animateOut ? "translate-y-full" : ""
      }`}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        muted
        src="https://ik.imagekit.io/wr6ziyjiu/logo-animation.webm/ik-video.mp4?updatedAt=1752864151852"
      />
    </div>
  );
};

export default CoverAnimation;
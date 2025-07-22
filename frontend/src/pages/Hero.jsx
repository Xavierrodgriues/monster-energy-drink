import { NavLink } from "react-router";
import Clock from "../components/Clock";
import Navbar from "../components/Navbar";

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://ik.imagekit.io/wr6ziyjiu/heroVideo.webm/ik-video.mp4?updatedAt=1752864294616"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Hero Content */}
      <div className="relative z-10 h-full w-full text-white">
        {/* Navbar */}
        <Navbar />

        {/* Large screen layout */}
        <div className="hidden lg:flex justify-between px-10 mt-15">
          <div className="w-1/2 h-40">
            <div className="leading-12 tracking-tight ">
              <h1 className="text-[3rem] font-light">Ignite your Pulse</h1>
              <h1 className="text-[3.5rem] font-light">
                with{" "}
                <span className="font-[dirty-brush] text-lime-400">
                  CAFFEINE
                </span>
              </h1>
              <h5>Monster Energy</h5>
            </div>
            <div className="relative group overflow-hidden w-fit rounded-full border border-zinc-700">
              <div className="absolute inset-0 bg-lime-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-in-out z-0"></div>

              <NavLink to={"/drinks"} className="relative z-10 text-[0.8rem] text-white group-hover:text-black w-fit py-2 px-6 rounded-full flex gap-2 items-center transition-colors duration-300">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-colors duration-300"
                >
                  <path
                    d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                    className="stroke-white group-hover:stroke-black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                    className="stroke-white group-hover:stroke-black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p>Shop now</p>
              </NavLink>
            </div>
          </div>

          <Clock />
        </div>

        {/* Second row - only on large */}
        <div className="hidden lg:flex justify-between px-10 mt-25">
          <div className="w-1/2 h-40">
            <ul className="flex flex-col gap-12">
              <li className="w-5">
                <a
                  href="https://www.facebook.com/MonsterEnergy"
                  target="_blank"
                >
                  <img
                    className="w-5 h-5 -ml-1"
                    src="/monster-resources-hackathon/facebook-svgrepo-com.svg"
                    alt=""
                  />
                </a>
              </li>
              <li className="w-5">
                <a
                  href="https://x.com/MonsterEnergy?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                  target="_blank"
                >
                  <img
                    className="w-5 h-5 -ml-1"
                    src="https://static.vecteezy.com/system/resources/thumbnails/027/714/631/small_2x/sankt-petersburg-russia-24-08-2023-twitter-new-logo-twitter-icons-twitter-x-logo-free-png.png"
                    alt=""
                  />
                </a>
              </li>
              <li className="w-5">
                <a
                  href="https://www.instagram.com/monsterenergy/"
                  target="_blank"
                >
                  <img
                    className="w-5 h-5 -ml-1"
                    src="/monster-resources-hackathon/insta-svgrepo-com.svg"
                    alt=""
                  />
                </a>
              </li>
              <li className="w-5">
                <a href="https://www.youtube.com/monsterenergy" target="_blank">
                  <img
                    className="w-5 h-5 -ml-1"
                    src="/monster-resources-hackathon/youtube-svgrepo-com.svg"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>

          <div className="w-1/2 flex flex-col items-end gap-4">
            <div className="h-20 w-30 pr-2">
              <img
                className="w-full h-full object-contain"
                src="https://ik.imagekit.io/wr6ziyjiu/fourPerson.png?updatedAt=1753179997696"
                alt=""
              />
            </div>
            <div className="w-40 h-40 bg-red-400">
              <video
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
                src="https://ik.imagekit.io/wr6ziyjiu/thumbnail-video.mp4/ik-video.mp4?updatedAt=1753179999146"
              ></video>
            </div>
          </div>
        </div>

        {/* ✅ Small screen layout - bottom centered */}
        <div className="lg:hidden absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4">
          <div className="text-center text-xl md:text-5xl">
            <h1 className="font-light leading-snug">
              Ignite your Pulse
            </h1>
            <h1 className="font-light">
              with{" "}
              <span className="font-[kaushan] text-lime-400">CAFFEINE</span>
            </h1>
          </div>

          <ul className="flex gap-5">
            <li>
              <img
                className="w-5 h-5"
                src="/monster-resources-hackathon/facebook-svgrepo-com.svg"
                alt="fb"
              />
            </li>
            <li>
              <img
                className="w-5 h-5"
                src="https://ik.imagekit.io/wr6ziyjiu/X.webp?updatedAt=1753179537396"
                alt="X"
              />
            </li>
            <li>
              <img
                className="w-5 h-5"
                src="/monster-resources-hackathon/insta-svgrepo-com.svg"
                alt="insta"
              />
            </li>
            <li>
              <img
                className="w-5 h-5"
                src="/monster-resources-hackathon/youtube-svgrepo-com.svg"
                alt="yt"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;

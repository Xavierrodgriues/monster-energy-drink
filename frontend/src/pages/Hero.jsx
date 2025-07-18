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
                with <span className="font-[dirty-brush] text-lime-400">CAFFEINE</span>
              </h1>
              <h5>Monster Energy</h5>
            </div>
            <div className="text-[0.8rem] border-zinc-700 border-1 w-fit py-2 px-6 rounded-full">
              <button className="flex gap-2">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <p>Shop now</p>
              </button>
            </div>
          </div>

          <div className="w-1/2 h-40 flex justify-end gap-4">
            <div className="border-zinc-300 rounded-full py-1 px-2 text-[0.8rem] border-1 h-fit w-fit bg-white/40">
              12
            </div>
            <div className="border-zinc-300 rounded-full py-1 px-2 text-[0.8rem] border-1 h-fit w-fit">
              14
            </div>
            <div className="border-zinc-300 rounded-full py-1 px-2 text-[0.8rem] border-1 h-fit w-fit">
              16
            </div>
          </div>
        </div>

        {/* Second row - only on large */}
        <div className="hidden lg:flex justify-between px-10 mt-25">
          <div className="w-1/2 h-40">
            <ul className="flex flex-col gap-12">
              <li className="w-5">
                <a href="https://www.facebook.com/MonsterEnergy" target="_blank">
                <img
                  className="w-5 h-5 -ml-1"
                  src="/monster-resources-hackathon/facebook-svgrepo-com.svg"
                  alt=""
                />
                </a>
              </li>
              <li className="w-5">
                <a href="https://x.com/MonsterEnergy?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" 
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
                <a href="https://www.instagram.com/monsterenergy/" target="_blank">
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
                src="/monster-resources-hackathon/fourPerson.png"
                alt=""
              />
            </div>
            <div className="w-40 h-40 bg-red-400">
              <video
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
                src="/monster-resources-hackathon/thumbnail-video.mp4"
              ></video>
            </div>
          </div>
        </div>

        {/* ✅ Small screen layout - bottom centered */}
        <div className="lg:hidden absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4">
          <div className="text-center">
            <h1 className="text-xl font-light leading-snug">Ignite your Pulse</h1>
            <h1 className="text-xl font-light">
              with <span className="font-[kaushan] text-lime-400">CAFFEINE</span>
            </h1>
          </div>

          <ul className="flex gap-5">
            <li>
              <img
                className="w-5 h-5"
                src="/monster-resources-hackathon/facebook-svgrepo-com.svg"
                alt=""
              />
            </li>
            <li>
              <img
                className="w-5 h-5"
                src="https://static.vecteezy.com/system/resources/thumbnails/027/714/631/small_2x/sankt-petersburg-russia-24-08-2023-twitter-new-logo-twitter-icons-twitter-x-logo-free-png.png"
                alt=""
              />
            </li>
            <li>
              <img
                className="w-5 h-5"
                src="/monster-resources-hackathon/insta-svgrepo-com.svg"
                alt=""
              />
            </li>
            <li>
              <img
                className="w-5 h-5"
                src="/monster-resources-hackathon/youtube-svgrepo-com.svg"
                alt=""
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;

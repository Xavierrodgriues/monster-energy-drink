import Navbar from "../components/Navbar";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import CurvedLoop from "../components/CurvedLoop";

const Contact = () => {
  return (
    <div className="bg-[#090701] text-white min-h-screen">
      <Navbar />
      <div className="font-sans">
        {/* Header */}
        {/* <header className="bg-black text-white text-center py-6">
          <h1 className="text-2xl font-semibold text-left px-10">Contact Us</h1>
          <p className="text-sm mt-1">Home / Contact Us</p>
        </header> */}

        {/* Green Navigation Strip */}
        <nav className="bg-lime-400 h-13 text-black text-lg font-semibold flex flex-wrap justify-center gap-6 py-2">
          <CurvedLoop
            marqueeText="Unleash      ✦The     ✦ Beast      ✦ With       ✦ Monster      ✦"
            speed={2}
            curveAmount={-5}
            direction="left"
            draggable={false}
            className="custom-text-style"
          />
        </nav>

        {/* Main Section */}
        <section className="bg-[#090701] text-white py-10 px-5 md:px-20 lg:px-36 flex flex-col md:flex-row gap-10 items-start">
          {/* Left: Form */}
          <div className="w-full md:w-2/3">
            <p className="text-black text-sm mb-2">Contact Us</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Join Us in Creating <br /> Something Great
            </h2>

            <form className="grid text-black grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name*"
                className="p-3 rounded bg-gray-200"
              />
              <input
                type="text"
                placeholder="Last Name*"
                className="p-3 rounded bg-gray-200"
              />
              <input
                type="email"
                placeholder="Email*"
                className="p-3 rounded bg-gray-200"
              />
              <input
                type="text"
                placeholder="Phone Number*"
                className="p-3 rounded bg-gray-200"
              />
              <input
                type="text"
                placeholder="Subject*"
                className="p-3 rounded bg-gray-200 md:col-span-2"
              />
              <textarea
                placeholder="Message*"
                rows="4"
                className="p-3 rounded bg-gray-200 md:col-span-2"
              ></textarea>
              <div className="flex gap-5">
                <button className="bg-lime-400 hover:cursor-pointer active:scale-95 text-black font-semibold px-6 py-3 rounded-full w-fit">
                  Send Message
                </button>
                <button className="bg-zinc-800 hover:cursor-pointer active:scale-95 text-black font-semibold px-4 py-3 rounded-full">
                  <img
                    className="w-5"
                    src="../../public/monster-resources-hackathon/right-arrow-svgrepo-com.svg"
                    alt=""
                  />
                </button>
              </div>
            </form>
          </div>

          {/* Right: Info Box */}
          <div className="bg-lime-400 rounded-lg p-6 text-black w-full md:w-1/3 relative h-120 transform hover:rotate-6 transition-transform duration-500">
            <div className="absolute top-[-30px] right-[-30px] bg-black text-white rounded-full w-[140px] h-[140px] flex items-center justify-center text-xs font-bold text-center leading-tight">
              <img
                className="rotate-320"
                src="../../public/monster-resources-hackathon/right-arrow-svgrepo-com.svg"
                alt=""
              />
            </div>

            <div className="h-full px-2 py-8">
              <div className="mb-6">
                <h3 className="font-bold mb-1 text-lg">Address</h3>
                <p>
                  457 Washington Ave. Manchester,
                  <br /> Kentucky 39495
                </p>
              </div>

              <div className="mb-6">
                <h3 className="font-bold mb-1 text-lg">Contact</h3>
                <p>Phone : +0123-456-789</p>
                <p>Email : example@email.com</p>
              </div>

              <div className="mb-6">
                <h3 className="font-bold mb-1 text-lg">Open Time</h3>
                <p>Monday - Friday : 10.00 - 20.00</p>
              </div>

              <div>
                <h3 className="font-bold mb-2 text-lg">Stay Connected</h3>
                <div className="flex gap-3 text-xl">
                  <a
                    href="https://www.facebook.com/MonsterEnergy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://x.com/MonsterEnergy?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="https://www.instagram.com/monsterenergy/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://www.youtube.com/monsterenergy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Curved Marquee */}
        <nav className="bg-lime-400 h-13 text-black text-lg font-semibold flex flex-wrap justify-center gap-6 py-2">
          <CurvedLoop
            marqueeText="Energy       ✦ That       ✦ Hits       ✦ Hard       ✦ Monster      ✦ Style      ✦
"
            speed={2}
            curveAmount={-5}
            direction="left"
            draggable={false}
            className="select-none pointer-events-none"
          />
        </nav>
      </div>
    </div>
  );
};

export default Contact;

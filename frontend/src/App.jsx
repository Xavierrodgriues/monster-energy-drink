import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import CoverAnimation from "./components/CoverAnimation";
import Hero from "./pages/Hero";
import Flavour from "./pages/Flavour";
import Drinks from "./pages/Drinks";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Contact from "./pages/Contact"
import About from "./pages/About"
import ProductDetails from "./pages/ProductDetails";
import Labubu from "./pages/Labubu";
import CartPage from "./pages/CartPage";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  const location = useLocation();
  const [showCover, setShowCover] = useState(false);

  // Show cover only on "/" route
  useEffect(() => {
    if (location.pathname === "/") {
      setShowCover(true);
    } else {
      setShowCover(false);
    }
  }, [location.pathname]);

  // Initialize scroll smoother once
  useEffect(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
    });
  }, []);

  return (
    <div id="smooth-wrapper" className="relative">
      {showCover && <CoverAnimation onFinish={() => setShowCover(false)} />}

      <div
        id="smooth-content"
        className={`${showCover ? "overflow-hidden h-screen" : ""}`}
      >
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Flavour />
                  <Labubu />
                </>
              }
            />
            <Route path="/drinks" element={<Drinks />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/drinks/:id" element={<ProductDetails />} />
            <Route path="/drinks/cart" element={<CartPage />} />
          </Routes>
      
      </div>
    </div>
  );
}

export default App;

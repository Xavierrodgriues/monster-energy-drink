import { useEffect, useState, lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import CoverAnimation from "./components/CoverAnimation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CheckoutPage from "./pages/CheckoutPage";
import MyOrders from "./pages/MyOrders";
import { FaSpinner } from "react-icons/fa";


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// Lazy load pages
const Hero = lazy(() => import("./pages/Hero"));
const Flavour = lazy(() => import("./pages/Flavour"));
const Drinks = lazy(() => import("./pages/Drinks"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/Story"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const Labubu = lazy(() => import("./pages/Labubu"));
const CartPage = lazy(() => import("./pages/CartPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  const location = useLocation();
  const [showCover, setShowCover] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") {
      setShowCover(true);
    } else {
      setShowCover(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
    });
  }, []);

  return (
    <div id="smooth-wrapper" className="relative bg-black">
      {showCover && <CoverAnimation onFinish={() => setShowCover(false)} />}

      <div id="smooth-content" className={`${showCover ? "overflow-hidden h-screen" : ""}`}>
        <Suspense fallback={<FaSpinner />}>
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
            <Route path="/story" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/drinks/:id" element={<ProductDetails />} />
            <Route path="/drinks/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/myOrders" element={<MyOrders />}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <ToastContainer position="top-center" autoClose={3000} />
      </div>
    </div>
  );
}

export default App;
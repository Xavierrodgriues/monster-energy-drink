import { useEffect, useState, lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaSpinner } from "react-icons/fa";
import Hero from "./pages/Hero";
import CoverAnimation from "./components/CoverAnimation";
import ProtectedRoute from "./components/ProtectedRoute";


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// Lazy load pages
const Flavour = lazy(() => import("./pages/Flavour"));
const Drinks = lazy(() => import("./pages/Drinks"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/Story"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const Labubu = lazy(() => import("./pages/Labubu"));
const CartPage = lazy(() => import("./pages/CartPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));
const MyOrders = lazy(() => import("./pages/MyOrders"));

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
            <Route path="/checkout" element={<ProtectedRoute><CheckoutPage /></ProtectedRoute>} />
            <Route path="/myOrders" element={<ProtectedRoute><MyOrders /></ProtectedRoute>}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <ToastContainer position="top-center" autoClose={3000} />
      </div>
    </div>
  );
}

export default App;
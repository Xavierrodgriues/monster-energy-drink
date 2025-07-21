import { useState } from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Story", path: "/story" },
    { label: "Drinks", path: "/drinks" },
    { label: "Orders", path: "/myOrders" },
    { label: "Contact", path: "/contact" },
  ];

  const totalItems = useSelector((state) =>
    state.cart.cartItems.reduce((acc, item) => acc + item.quantity, 0)
  );

  return (
    <div className="w-full">
      <div className="flex items-center justify-between px-4 md:px-10 py-4">
        {/* Left: Logo */}
        <div className="h-10 flex-shrink-0">
          <img
            className="h-full"
            src="/monster-resources-hackathon/monster-logo.png"
            alt="Logo"
          />
        </div>

        {/* Center: Desktop Nav Menu */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="bg-black/20 md:p-0 backdrop-blur-md rounded-3xl overflow-hidden shadow-lg border border-white/30 px-4 py-1 max-h-10">
            <ul className="flex h-full">
              {navItems.map((item) => (
                <li key={item.path} className="relative">
                  <NavLink
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `relative z-10 w-30 md:p-2 flex items-center justify-center px-6 text-sm transition-all duration-300
                      ${
                        isActive ? "text-black" : "hover:bg-white/10 text-white"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.label}
                        {isActive && (
                          <span className="hidden md:block absolute inset-0 bg-white z-[-1] rounded-[1.5rem]"></span>
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Login and Cart */}
        <div className="hidden md:flex items-center gap-2 ml-4">
          <div className="cursor-pointer bg-gradient-to-t from-lime-300 to-lime-600 text-black py-1 px-5 rounded-full">
            <header>
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </header>
          </div>
          <NavLink to={"/drinks/cart"}>
            <div className="relative w-8 h-8 bg-gradient-to-t from-lime-300 to-lime-600 text-black p-1 rounded-full cursor-pointer flex items-center justify-center">
              <img
                src="/monster-resources-hackathon/cart-shopping-svgrepo-com.svg"
                alt="Cart"
                className="w-full h-full object-contain"
              />
              {totalItems > 0 && (
                <span className="animate-bounce absolute -top-2 -right-2 min-w-[18px] h-[18px] text-xs bg-red-600 text-white rounded-full flex items-center justify-center px-[5px]">
                  {totalItems}
                </span>
              )}
            </div>
          </NavLink>
        </div>

        {/* Right: Mobile Login + Cart + Hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <div className="cursor-pointer text-sm bg-gradient-to-t from-lime-300 to-lime-600 text-black py-1 px-3 rounded-full">
            <header>
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </header>
          </div>

          <NavLink to={"/drinks/cart"}>
            <div className="relative w-8 h-8 bg-gradient-to-t from-lime-300 to-lime-600 text-black p-1 rounded-full cursor-pointer flex items-center justify-center">
              <img
                src="/monster-resources-hackathon/cart-shopping-svgrepo-com.svg"
                alt="Cart"
                className="w-full h-full object-contain"
              />
              {totalItems > 0 && (
                <span className="animate-bounce absolute -top-2 -right-2 min-w-[18px] h-[18px] text-xs bg-red-600 text-white rounded-full flex items-center justify-center px-[5px]">
                  {totalItems}
                </span>
              )}
            </div>
          </NavLink>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[70px] left-2 right-2 z-50 bg-black/30 backdrop-blur-md rounded-xl shadow-md border border-white/10">
          <ul className="flex flex-col items-center gap-2 py-4 px-4">
            {navItems.map((item) => (
              <li key={item.path} className="w-full text-center">
                <NavLink
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `w-full block px-4 py-2 text-sm transition-all duration-300 ${
                      isActive
                        ? "bg-white text-black rounded-md"
                        : "hover:bg-white/10 text-white"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

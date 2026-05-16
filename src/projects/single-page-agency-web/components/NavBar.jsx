import React, { useState } from "react";
import logo from "../assets/logo.png";

export const NavBar = () => {
  const [mobileMenuIsOpen, setIsMobileMenuIsOpen] = useState(false)
  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950 h-[68px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          <div className="flex items-center space-x-1 group cursor-pointer">
            <div>
              <img
                className="w-6 h-6 sm:w-8 sm:h-8"
                src={logo}
                alt="web-logo"
              />
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-bold">
              <span className="text-white">Write</span>
              <span className="text-blue-400">Code</span>
            </span>
          </div>
          {/* Nav links */}
          <div className="md:flex hidden items-center space-x-6 lg:space-x-8">
            <a
              href="#features"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Testimonials
            </a>
          </div>
          <button className="md:hidden p-2 text-gray-300 hover:text-white" onClick={() => setIsMobileMenuIsOpen((prev) => !prev)}>
            {mobileMenuIsOpen ? <i className="fa-solid fa-x w-5 h-5 sm:w-6 sm:h-6"></i> : <i className="fa-solid fa-bars w-5 h-5 sm:w-6 sm:h-6"></i>}
          </button>
        </div>
      </div>
      {
        mobileMenuIsOpen && <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t  border-slate-800 animate-in slide-in-from-top duration-300">
          <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
                        <a
              href="#features"
              className="text-gray-300 hover:text-white text-sm lg:text-base block" onClick={() => setIsMobileMenuIsOpen(false)}
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-gray-300 hover:text-white text-sm lg:text-base block" onClick={() => setIsMobileMenuIsOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="text-gray-300 hover:text-white text-sm lg:text-base block" onClick={() => setIsMobileMenuIsOpen(false)}
            >
              Testimonials
            </a>
          </div>
        </div>
      }
    </nav>
  );
};

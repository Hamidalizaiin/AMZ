"use client";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
            : "bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link
                to="/"
                className="flex-shrink-0 flex items-center"
                onClick={closeMobileMenu}
              >
                <span
                  className={`text-2xl font-bold transition-colors duration-300 ${
                    isScrolled ? "text-blue-600" : "text-white"
                  }`}
                >
                  AMZ
                </span>
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-8 relative">
              <Link
                to="/"
                className={`font-medium transition-colors duration-200 ${
                  isActive("/")
                    ? isScrolled
                      ? "text-blue-600"
                      : "text-white"
                    : isScrolled
                    ? "text-gray-600 hover:text-blue-600"
                    : "text-white/80 hover:text-white"
                }`}
              >
                Home
              </Link>

              {/* Dropdown Menu - Services */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button
                  className={`font-medium flex items-center space-x-1 transition-colors duration-200 ${
                    isActive("/services")
                      ? isScrolled
                        ? "text-blue-600"
                        : "text-white"
                      : isScrolled
                      ? "text-gray-600 hover:text-blue-600"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  <span>Services</span>
                  <svg
                    className={`w-4 h-4 transform transition-transform duration-300 ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-3 w-48 bg-white shadow-lg rounded-xl border border-gray-200 overflow-hidden z-50"
                    >
                      <Link
                        to="/services/seo"
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        Amazon SEO
                      </Link>
                      <Link
                        to="/services/ppc"
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        Amazon PPC
                      </Link>
                      <Link
                        to="/services/listing"
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        Listing Optimization
                      </Link>
                      <Link
                        to="/services/store-setup"
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        Store Setup
                      </Link>
                      <Link
                        to="/services/store-setup"
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        Brand Management
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/contact"
                className={`font-medium transition-colors duration-200 ${
                  isActive("/contact")
                    ? isScrolled
                      ? "text-blue-600"
                      : "text-white"
                    : isScrolled
                    ? "text-gray-600 hover:text-blue-600"
                    : "text-white/80 hover:text-white"
                }`}
              >
                Contact
              </Link>

               
            </div>

            {/* Desktop Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <button
                className={`p-2 rounded-full transition-all duration-200 ${
                  isScrolled
                    ? "text-gray-600 hover:text-blue-600 hover:bg-gray-100"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>

              <button
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  isScrolled
                    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg"
                    : "bg-white text-blue-600 hover:bg-gray-50 shadow-lg"
                }`}
              >
                Get Quote
              </button>
            </div>

            {/* Mobile Hamburger */}
            <div className="lg:hidden z-[60]">
              <button
                onClick={toggleMobileMenu}
                className={`p-2 rounded-md transition-all duration-200 ${
                  isScrolled
                    ? "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                }`}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <span className="text-xl font-bold text-blue-600">Menu</span>
            <button
              onClick={closeMobileMenu}
              className="p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex-1 px-4 py-6 space-y-4">
            <Link
              to="/"
              onClick={closeMobileMenu}
              className={`block px-4 py-3 rounded-lg font-medium transition-colors duration-200 ${
                isActive("/")
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Home
            </Link>

            {/* Mobile Dropdown for Services */}
            <div className="space-y-2">
              <button
                onClick={() => setIsServicesOpen((prev) => !prev)}
                className="w-full text-left px-4 py-3 rounded-lg font-medium text-gray-700 hover:bg-gray-100 flex justify-between items-center"
              >
                Services
                <svg
                  className={`w-4 h-4 transform transition-transform ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="ml-4 border-l border-gray-200 overflow-hidden"
                  >
                    <Link
                      to="/services/seo"
                      className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md"
                      onClick={closeMobileMenu}
                    >
                      Amazon SEO
                    </Link>
                    <Link
                      to="/services/ppc"
                      className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md"
                      onClick={closeMobileMenu}
                    >
                      Amazon PPC
                    </Link>
                    <Link
                      to="/services/listing"
                      className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md"
                      onClick={closeMobileMenu}
                    >
                      Listing Optimization
                    </Link>
                    <Link
                      to="/services/store-setup"
                      className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md"
                      onClick={closeMobileMenu}
                    >
                      Store Setup
                    </Link>
                    <Link
                      to="/services/store-setup"
                      className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md"
                      onClick={closeMobileMenu}
                    >
                      Brand Management
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className={`block px-4 py-3 rounded-lg font-medium transition-colors duration-200 ${
                isActive("/contact")
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Contact
            </Link>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

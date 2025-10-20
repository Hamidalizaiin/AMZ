import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const isActive = (path: string): boolean => {
    return location.pathname === path;
  };

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = (): void => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo on the right */}
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center" onClick={closeMobileMenu}>
                <span className={`text-2xl font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-primary-600' : 'text-white'
                }`}>
                  AMZ
                </span>
              </Link>
            </div>
            
            {/* Desktop navigation menu - hidden on mobile */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                to="/"
                className={`font-medium transition-colors duration-200 ${
                  isActive('/') 
                    ? (isScrolled ? 'text-primary-600' : 'text-white') 
                    : (isScrolled ? 'text-gray-600 hover:text-primary-600' : 'text-white/80 hover:text-white')
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`font-medium transition-colors duration-200 ${
                  isActive('/about') 
                    ? (isScrolled ? 'text-primary-600' : 'text-white') 
                    : (isScrolled ? 'text-gray-600 hover:text-primary-600' : 'text-white/80 hover:text-white')
                }`}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`font-medium transition-colors duration-200 ${
                  isActive('/contact') 
                    ? (isScrolled ? 'text-primary-600' : 'text-white') 
                    : (isScrolled ? 'text-gray-600 hover:text-primary-600' : 'text-white/80 hover:text-white')
                }`}
              >
                Contact
              </Link>
              <Link
                to="/dashboard"
                className={`font-medium transition-colors duration-200 ${
                  isActive('/dashboard') 
                    ? (isScrolled ? 'text-primary-600' : 'text-white') 
                    : (isScrolled ? 'text-gray-600 hover:text-primary-600' : 'text-white/80 hover:text-white')
                }`}
              >
                Dashboard
              </Link>
            </div>
            
            {/* Desktop search icon and Get Quote button - hidden on mobile */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Search Icon */}
              <button className={`p-2 rounded-full transition-all duration-200 ${
                isScrolled 
                  ? 'text-gray-600 hover:text-primary-600 hover:bg-gray-100' 
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              
              {/* Get Quote Button */}
              <button className={`px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                isScrolled
                  ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-xl'
                  : 'bg-white text-primary-600 hover:bg-gray-50 shadow-lg hover:shadow-xl'
              }`}>
                Get Quote
              </button>
            </div>

            {/* Mobile hamburger menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className={`p-2 rounded-md transition-all duration-200 ${
                  isScrolled 
                    ? 'text-gray-600 hover:text-primary-600 hover:bg-gray-100' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <span className="text-xl font-bold text-primary-600">Menu</span>
            <button
              onClick={closeMobileMenu}
              className="p-2 rounded-md text-gray-600 hover:text-primary-600 hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="flex-1 px-4 py-6 space-y-4">
            <Link
              to="/"
              onClick={closeMobileMenu}
              className={`block px-4 py-3 rounded-lg font-medium transition-colors duration-200 ${
                isActive('/') 
                  ? 'bg-primary-100 text-primary-600' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={closeMobileMenu}
              className={`block px-4 py-3 rounded-lg font-medium transition-colors duration-200 ${
                isActive('/about') 
                  ? 'bg-primary-100 text-primary-600' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className={`block px-4 py-3 rounded-lg font-medium transition-colors duration-200 ${
                isActive('/contact') 
                  ? 'bg-primary-100 text-primary-600' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Contact
            </Link>
            <Link
              to="/dashboard"
              onClick={closeMobileMenu}
              className={`block px-4 py-3 rounded-lg font-medium transition-colors duration-200 ${
                isActive('/dashboard') 
                  ? 'bg-primary-100 text-primary-600' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Dashboard
            </Link>
          </div>

          {/* Mobile Menu Footer */}
          {/* <div className="p-4 border-t border-gray-200 space-y-3">
            <button className="w-full flex items-center justify-center px-4 py-2 text-gray-600 hover:text-primary-600 hover:bg-gray-100 rounded-lg transition-colors duration-200">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search
            </button>
            <button className="w-full bg-primary-600 text-white py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200">
              Get Quote
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;

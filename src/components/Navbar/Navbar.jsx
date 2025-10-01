import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logo.png"

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: { staggerChildren: 0.1, staggerDirection: -1 }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/aboutUs" },
    { name: "Services", path: "/services" },
    // { name: "Projects", path: "/projects" },
    // { name: "Investors", path: "/investors" },
    // { name: "News", path: "/news" },
    // { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contactus" }
  ];

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <h1 className="text-secondary-100 text-2xl font-philosopher">MSM LOGISTICS</h1>

          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium text-sm tracking-wide transition-colors duration-300 hover:text-secondary-100 ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/quote"
              className="bg-secondary-100 hover:bg-primary text-white font-medium text-sm px-5 py-2 rounded-md transition-colors duration-300"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-300 ${
                isScrolled
                  ? isOpen
                    ? "text-gray-800"
                    : "text-gray-600 hover:text-gray-800"
                  : "text-white hover:text-secondary-100"
              }`}
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden px-4 pt-2 pb-4 space-y-1 bg-white shadow-md"
          >
            {navLinks.map((link) => (
              <motion.div key={link.name} variants={itemVariants}>
                <Link
                  to={link.path}
                  className="block text-gray-800 font-medium text-base py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div variants={itemVariants}>
              <Link
                to="/quote"
                className="block bg-secondary-100 hover:bg-primary text-white font-medium text-sm px-5 py-2 rounded-md mt-2"
                onClick={() => setIsOpen(false)}
              >
                Get a Quote
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
  FaEnvelope,
  FaChevronRight,
  FaRegCopyright,
  FaArrowUp
} from "react-icons/fa";

// Navigation Links
const quickLinks = [
  { title: "Home", link: "/" },
  { title: "About Us", link: "/aboutUs" },
  { title: "Services", link: "/services" },
  { title: "Contact", link: "/contactUs" },
];

const serviceLinks = [
  { title: "Logistics Solutions", link: "/services/logistics" },
  { title: "Warehousing", link: "/services/warehousing" },
  { title: "Transport", link: "/services/transport" },
  { title: "Supply Chain", link: "/services/supply-chain" },
];

const locationLinks = [
  { title: "Geelong", link: "/locations/geelong" },
  { title: "Melbourne", link: "/locations/melbourne" },
  { title: "Sydney", link: "/locations/sydney" },
  { title: "Brisbane", link: "/locations/brisbane" },
];

const Footer = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <footer className="relative">
      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-purple-900 ${
          visible ? "block" : "hidden"
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <FaArrowUp />
      </motion.button>

      {/* Newsletter Section */}
      {/* <div className="bg-gray-500 py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div 
              className="md:w-1/2 mb-8 md:mb-0 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-philosopher font-bold mb-2">Stay Updated</h3>
              <p className="text-purple-200">Subscribe to our newsletter for the latest news and industry insights.</p>
            </motion.div>
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-purple-400"
                  required
                />
                <button 
                  type="submit"
                  className="bg-white text-purple-900 font-bold py-3 px-6 rounded-md hover:bg-purple-100 transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div> */}

      {/* Footer Main Content */}
      <div className="bg-primarym text-white pt-16 pb-8">
        <div className="container mx-auto px-6">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-philosopher font-bold mb-6 text-white relative inline-block">
                MSM LOGISTICS
                <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-secondary-100"></span>
              </h3>
              <p className="text-gray-400 mb-6">
                A platform for comprehensive logistics solutions, offering efficient 3PL services and secure warehouse storage. We deliver tailored solutions to meet your unique supply chain needs with reliability and excellence.
              </p>
              <div className="flex space-x-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2, color: "#4267B2" }}
                  className="text-secondary-100 hover:text-white transition-colors duration-300"
                >
                  <FaFacebook size={20} />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2, color: "#C13584" }}
                  className="text-secondary-100 hover:text-white transition-colors duration-300"
                >
                  <FaInstagram size={20} />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2, color: "#0A66C2" }}
                  className="text-secondary-100 hover:text-white transition-colors duration-300"
                >
                  <FaLinkedin size={20} />
                </motion.a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-philosopher font-bold mb-6 text-white relative inline-block">
                Quick Links
                <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-secondary-100"></span>
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <a 
                      href={link.link} 
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <FaChevronRight className="mr-2 text-secondary-100 text-sm group-hover:mr-3 transition-all duration-300" />
                      {link.title}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-philosopher font-bold mb-6 text-white relative inline-block">
                Our Services
                <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-secondary-100"></span>
              </h3>
              <ul className="space-y-3">
                {serviceLinks.map((link, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <a 
                      href={link.link} 
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <FaChevronRight className="mr-2 text-secondary-100 text-sm group-hover:mr-3 transition-all duration-300" />
                      {link.title}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-philosopher font-bold mb-6 text-white relative inline-block">
                Contact Us
                <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-secondary-100"></span>
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FaLocationArrow className="text-secondary-100 mt-1 mr-3" />
                  <span className="text-gray-400">123 Transport Road, Geelong, VIC 3220, Australia</span>
                </li>
                <li className="flex items-center">
                  <FaMobileAlt className="text-secondary-100 mr-3" />
                  <a href="tel:0352920758" className="text-gray-400 hover:text-white transition-colors duration-300">
                    (03) 5292 0758
                  </a>
                </li>
                <li className="flex items-center">
                  <FaEnvelope className="text-secondary-100 mr-3" />
                  <a href="mailto:info@msmlogistics.com.au" className="text-gray-400 hover:text-white transition-colors duration-300">
                    info@msmlogistics.com.au
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Footer Separator */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0 flex items-center">
                <FaRegCopyright className="mr-2" /> {new Date().getFullYear()} MSM Logistics All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Privacy Policy
                </a>
                <a href="/terms-conditions" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Terms & Conditions
                </a>
                <a href="/sitemap" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
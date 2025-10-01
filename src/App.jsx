import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

// Component import
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ContactUs from './components/Contactus/contactus';
import Home from "./pages/home";
import AboutUs from "./pages/aboutus";
import Quote from "./pages/quote";
import ServicesPage from "./pages/features";
import Preloader from "./components/Preloader/preloader" // Import the luxury preloader

const App = () => {
  // dark mode start
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
  
  // Content loaded state
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    
    // Initialize AOS animation library
    AOS.init({
      duration: 1000,
      once: true,
    });
    
    // Set contentLoaded to true after preloader completes
    const timer = setTimeout(() => {
      setContentLoaded(true);
    }, 2500); // Slightly longer than preloader to ensure smooth transition
    
    return () => clearTimeout(timer);
  }, [theme, element]);

  return (
    <>
      {/* Luxury Preloader - pass your business name */}
      <Preloader businessName="MSM Logistics" />
      
      <BrowserRouter>
        <div className={`bg-white dark:bg-black dark:text-white text-black overflow-x-hidden ${contentLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
          <Navbar theme={theme} setTheme={setTheme} />
          <Routes>
            <Route path='/' element={<Home />} index />
            <Route path='/services' element={<ServicesPage />} index />
            <Route path='/contactUs' element={<ContactUs />} index />
            <Route path='/aboutUs' element={<AboutUs />} index />
            <Route path='/quote' element={<Quote />} index />
            <Route path='/quoteControl' element={<quoteControl />} index />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;


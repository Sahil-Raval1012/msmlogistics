import React, { Component, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

// Component import
import Navbar from "./components/Navbar/Navbar";
// import Hero from "./components/Hero/Hero";
// import About from "./components/About/About";
// import Services from "./components/Services/Services";
// import CarList from "./components/CarList/CarList";
// import AppStoreBanner from "./components/AppStoreBanner/AppStoreBanner";
// import Contact from "./components/Contact/Contact";
// import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";
import ContactUs from './components/Contactus/contactus';
import Home from "./pages/home";
import AboutUs from "./pages/aboutus";
import Quote from "./pages/quote";
import ServicesPage from "./pages/features";


const App = () => {
  // dark mode start
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  // dark mode end

  // React.useEffect(() => {
  //   AOS.init({
  //     offset: 100,
  //     duration: 800,
  //     easing: "ease-in-sine",
  //     delay: 100,
  //   });
  //   AOS.refresh();
  // }, []);
  return (
    <BrowserRouter>
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
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
   
  );
};

export default App;

import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import CarList from "../components/CarList/CarList";
import AppStoreBanner from "../components/AppStoreBanner/AppStoreBanner";
import Contact from "../components/Contact/Contact";
import Testimonial from "../components/Testimonial/Testimonial";
import Footer from '../components/Footer/Footer'
import ContactUs from '../components/Contactus/contactus';
import AOS from "aos";
import "aos/dist/aos.css";
import { Component, useEffect, useState } from "react";
import Accordion from './accordian.jsx';
import LandingPage from './landing.jsx';


const home = () => {
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
    
      React.useEffect(() => {
        AOS.init({
          offset: 100,
          duration: 800,
          easing: "ease-in-sine",
          delay: 100,
        });
        AOS.refresh();
      }, []);
      return (
        
           <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
          <LandingPage/>
          <Hero theme={theme} />
          <About />
          <Accordion/>
          <Services />
          <CarList />
          <Testimonial />
          <AppStoreBanner />
          <Contact />
        </div>
    
            
              
    
       
      );
    };
export default home
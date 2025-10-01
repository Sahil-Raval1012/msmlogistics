import React, { useEffect, useState } from "react";
import carPng from "../../assets/car.png";
import yellowCar from '../../assets/banner-car.png'
import AOS from "aos";

const Hero = ({ theme }) => {
  useEffect(() => {
    AOS.refresh();
  });
  return (
    <div className="dark:bg-black dark:text-white  ">
      <div className="container min-h-[620px] flex">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div
            data-aos="zoom-in"
            data-aos-duration="15"
            data-aos-once="false"
            className="order-1 sm:order-2"
          >
            <img
              src={theme === "dark" ? carPng : yellowCar}
              alt=""
              className="sm:scale-125 relative -z-10 max-h-[600px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div className="space-y-5 order-2 sm:order-1 sm:pr-32 ">
            <p className="text-primary text-2xl font-philosopher">
              Our
            </p>
            <h1
              
              className="text-5xl lg:text-7xl font-semibold text-secondary-200 font-philosopher"
            >
              MSM 
              lOGISTICS
            </h1>
            <p  data-aos-delay="1000">
            MSMLogistics, a platform for comprehensive logistics solutions, offering efficient 3PL services and secure warehouse storage. We deliver tailored solutions to meet your unique supply chain needs with reliability and excellence.{" "}
            </p>
            <button
              onClick={() => {
                AOS.refreshHard();
              }}
              className="rounded-md bg-primary-gradient hover:bg-primary/80 transition duration-500 py-2 px-6 text-white"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

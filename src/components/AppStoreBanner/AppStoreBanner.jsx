import React from "react";

import pattern from "../../assets/website/pattern.jpeg";
import view from '../../assets/view.jpg'

const AppStoreBanner = () => {
  const bannerImg = {
    backgroundImage: `url(${pattern})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  return (
    <div className="container mx-auto">
      <div
        className="py-10 sm:min-h-[400px] sm:grid sm:grid-cols-2 items-center rounded-xl"
        style={bannerImg}
      >
        {/* Left Section - Text */}
        <div
          
          className="text-white space-y-6 px-6 sm:px-10 max-w-lg mx-auto"
        >
          <h1 className="text-2xl sm:text-4xl font-semibold font-serif">
            Our Network
          </h1>
          <p>
          MSM Translink is a dynamic and innovative logistics and transportation network designed to provide seamless and efficient freight solutions worldwide. With a commitment to reliability, speed, and cost-effectiveness, MSM Translink connects businesses across industries by offering end-to-end logistics services, including freight forwarding, container shipping, and truck transportation.
          </p>
          <div className="flex flex-wrap justify-start items-center gap-4">
            
            <button className="border-2 border-white text-white font-bold py-2 px-6 rounded-lg hover:bg-white hover:text-black transition duration-300">
                Get Started
              </button>
          </div>
        </div>

        {/* Right Section - Image */}
        <div
          className="flex justify-center items-center px-6"
        >
          <img
            src={view}
            alt="Background pattern"
            className="max-w-full max-h-[500px] rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AppStoreBanner;

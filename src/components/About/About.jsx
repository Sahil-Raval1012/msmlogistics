import React from "react";
import CarPng from "../../assets/car1.png";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="dark:bg-dark bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center duration-300">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div>
            <img
              src={CarPng}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1
                className="text-3xl text-secondary-200 sm:text-4xl font-bold font-philosopher"
              >
                About us
              </h1>
              <p>
              MSM Logistics makes it easy to get your cargo where it needs to go on time and within budget. We are your top choice for freight forwarding in Geelong and beyond. We offer a wide range of freight services, including sea, air, project cargo, transportation, and customs clearance.

Our team is experienced and has strong leadership, and we work with a global network to get things done. We handle all your logistics needs and provide top-tier service. We’ve expanded our freight systems across multiple industries, reflecting our commitment to improvement and growth.

With offices in Australia and around the world, our team ensures that everything is clear and checked during the logistics process. 
              </p>
              <p>
              As a leading freight company in Geelong, we work hard to make shipping easy for all traders, large or small.

We control international freight shipping, enabling us to offer exceptional service, great value, and peace of mind.
              </p>
              <Link to="/aboutUs" >
              <button className="button-outline font-bold text">
                Get Started
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

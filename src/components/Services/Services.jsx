import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const skillsData = [
  {
    name: "Best Price",
    icon: (
      <FaCameraRetro className="text-5xl text-primary group-hover:text-white duration-300" />
    ),
    link: "#",
    description: "Affordable pricing with unmatched quality service.",
    aosDelay: "0",
  },
  {
    name: "Fast and Safe",
    icon: (
      <GiNotebook className="text-5xl text-primary group-hover:text-white duration-300" />
    ),
    link: "#",
    description: "Experience timely and secure services you can trust.",
    aosDelay: "500",
  },
  {
    name: "Experienced Drivers",
    icon: (
      <SlNote className="text-5xl text-primary group-hover:text-white duration-500" />
    ),
    link: "#",
    description: "Our team consists of skilled and reliable professionals.",
    aosDelay: "1000",
  },
];

const Services = () => {
  return (
    <>
      <span id="about"></span>
      <div className="bg-gray-100 py-10 sm:min-h-[500px] sm:grid sm:place-items-center mb-10">
        <div className="container">
          <div className="pb-12">
            <h1 className="text-3xl text-gray-800 font-semibold text-center sm:text-4xl font-serif">
              Why Choose Us
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                className="card text-center group space-y-6 p-6 bg-white hover:bg-primary-gradient duration-300 text-black hover:text-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-transform"
              >
                <div className="grid place-items-center">{skill.icon}</div>
                <h1 className="text-2xl font-bold">{skill.name}</h1>
                <p>{skill.description}</p>
                <a
                  href={skill.link}
                  className="inline-block text-lg font-semibold py-3 text-primary group-hover:text-white duration-300"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

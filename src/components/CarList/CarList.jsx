/* eslint-disable react/jsx-key */
import React from "react";
import { Link } from 'react-router-dom';
import whiteCar from "../../assets/white-car.png";
import car2 from "../../assets/car5.png";
import car3 from "../../assets/car6.png";

const carList = [
  {
    name: "Transport & Logistics",
    price: 344666 ,
    image: car3,
    aosDelay: "0",
  },
  {
    name: "Warehouse Storage",
    price: 123123,
    image: whiteCar,
    aosDelay: "500",
  },
  {
    name: "3PL Logistics",
    price: 500000,
    image: car2,
    aosDelay: "1000",
  },
];

const CarList = () => {
  return (
    <div className="pb-24">
      <div className="container">
        {/* Heading */}
        <h1
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
          Our Services
        </h1>
        <p className="text-xl pb-10">
        Explore the range of services we offer below, designed to meet your transport, logistics, 3PL, and warehouse storage needs with precision and reliability.
        </p>
        {/* Car listing */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {carList.map((data) => (
              <div
                className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
              >
                <div className="w-full h-[120px]">
                  <img
                    src={data.image}
                    alt=""
                    className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                  />
                </div>
                <div className="space-y-2">
                  
                  <div className="flex justify-between items-center text-xl font-semibold">
                  <h1 className="text-primary text-2xl font-semibold">{data.name}</h1>
                    {/* <p>${data.price}/Day</p> */}
                    <a href="#">Details</a>
                  </div>
                </div>
                <p className="text-xl font-semibold absolute top-0 left-3">
                  *
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* End of car listing */}
        <div className="grid place-items-center mt-8 text-primary-gradient">
        <Link to="/services">
          <button className="button-outline">
            Get Started
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarList;

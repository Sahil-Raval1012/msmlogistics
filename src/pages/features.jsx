import React from 'react';
import { Link } from 'react-router-dom';
import contactus from '../components/Contactus/contactus';

const services = [
  {
    title: "Transport & Logistics",
    description: "MSMtransport offers reliable and efficient transport and logistics solutions to ensure timely and safe delivery of goods across Australia. Whether it's local or interstate, our fleet is designed to handle all kinds of freight needs.",
    icon: "https://via.placeholder.com/50/360167/FFFFFF?text=TL",
  },
  {
    title: "Warehouse Storage",
    description: "Our warehouse storage services provide secure and scalable solutions for your inventory. Located in Geelong, VIC, we offer both short-term and long-term storage options, ensuring your goods are stored safely and are easily accessible.",
    icon: "https://via.placeholder.com/50/75087D/FFFFFF?text=WS",
  },
  {
    title: "3PL Logistics",
    description: "We specialize in third-party logistics (3PL) services, managing the entire supply chain process for you. From warehousing to transportation, MSMtransport ensures smooth and efficient operations, so you can focus on growing your business.",
    icon: "https://via.placeholder.com/50/AF1281/FFFFFF?text=3PL",
  },
];

const testimonials = [
  {
    name: "John Doe",
    company: "XYZ Logistics",
    testimonial: "MSMtransport has been an incredible partner for our logistics needs. Their reliable services and commitment to quality have helped us grow our business seamlessly.",
  },
  {
    name: "Jane Smith",
    company: "ABC Enterprises",
    testimonial: "The team at MSMtransport truly understands logistics. They’ve provided us with cost-effective and timely solutions, making a huge difference for our company.",
  },
];

const ServicesPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#360167] to-[#af1281] text-white py-20 text-center">
        <h1 className="text-4xl font-philosopher font-semibold">Our Services at MSMtransport</h1>
        <p className="mt-4 text-lg">Reliable, efficient, and tailored solutions for your transportation, storage, and logistics needs in Geelong, VIC.</p>
      </div>

      {/* Services Section */}
      <div className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold font-philosopher text-center text-[#75087d] mb-8">Our Core Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-all"
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-16 h-16 mb-4"
                />
                <h3 className="text-xl font-semibold text-[#75087d] mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-[#75087d] mb-6">What Our Clients Say</h2>
          <div className="flex flex-wrap justify-center gap-10">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 max-w-xs text-center"
              >
                <p className="text-gray-600 italic">"{testimonial.testimonial}"</p>
                <h4 className="mt-4 text-[#75087d] font-semibold">{testimonial.name}</h4>
                <p className="text-gray-500">{testimonial.company}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-[#360167] to-[#af1281] text-white py-20 text-center">
        <h2 className="text-3xl font-semibold">Ready to Take Your Business Further?</h2>
        <p className="mt-4 text-lg">Get in touch with us for a customized logistics solution that fits your needs.</p>
        <a
          href="/contactUs"
          className="mt-6 inline-block px-6 py-3 bg-[#75087d] text-white rounded-lg text-lg hover:bg-[#af1281] transition-all"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default ServicesPage;

import React, { useState } from 'react';
import image5 from '../assets/image5.jpg'

const AccordionWithImage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
    { 
      title: "Eco-Friendly Fleet", 
      content: "Our fleet is designed with the environment in mind, utilizing sustainable practices to reduce emissions." 
    },
    { 
      title: "Advanced Tracking and Transparency", 
      content: "Real-time tracking ensures you're always informed about your shipments." 
    },
    { 
      title: "Omnichannel Logistics Integration", 
      content: "Seamlessly integrated logistics solutions across multiple platforms." 
    },
    { 
      title: "24/7 Customer Support", 
      content: "Dedicated support team available around the clock to assist you." 
    },
    { 
      title: "Disaster Recovery Preparedness", 
      content: "Comprehensive plans to ensure continuity even in the face of unexpected events." 
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto my-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section: Accordion */}
        <div>
          {items.map((item, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-md mb-4 overflow-hidden transition-all ${
                activeIndex === index ? 'border-2 border-purple-700' : ''
              }`}
            >
              <button
                className="w-full flex justify-between items-center p-4 text-left text-lg font-semibold text-white bg-gradient-to-r from-[#360167] to-[#af1281] hover:from-[#af1281] hover:to-[#360167] focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span>{item.title}</span>
                <span className="ml-4 text-2xl">
                  {activeIndex === index ? '-' : '+'}
                </span>
              </button>
              {activeIndex === index && (
                <div className="p-4 bg-white text-gray-700">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Section: Image */}
        <div className="flex justify-center items-center">
          {/* Replace this div with an actual image */}
          <div className="h-50 md:h-70 bg-gray rounded-lg shadow-md flex items-center justify-center text-white text-xl font-semibold">
  <img src={image5} className="rounded-3xl" />
</div>

        </div>
      </div>
    </div>
  );
};

export default AccordionWithImage;

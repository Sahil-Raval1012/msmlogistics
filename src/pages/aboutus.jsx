import React from 'react';
import view2 from '../assets/view2.jpg';

const AboutUs = () => {
  const aboutUsImg = {
    backgroundImage: `url(${view2})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%", 
  };

  return (
    <div className="w-full mt-5 overflow-hidden bg-gray-50">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold font-philosopher text-center text-[#75087d] mb-8">
          About Us
        </h2> 
      </div>

      {/* Background Image Section */}
      <div
        className="container mx-auto min-h-[300px] sm:min-h-[700px] flex items-center justify-center  rounded-xl mb-10"
        style={aboutUsImg}
      >
        <div className="text-center bg-black bg-opacity-60 text-white p-6 rounded-lg max-w-md">
          <h3 className="text-2xl font-philosopher font-bold mb-4">Welcome to MSM Translink</h3>
          <p className="text-lg">
            Your trusted partner in transportation solutions, delivering excellence in logistics, innovation, and sustainability.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-6 md:px-16 lg:px-24">
        {/* About MSM Translink */}
        <div className="mb-8">
          <h2 className="text-2xl font-philosopher text-[#75087d] font-medium">
            MSM Transport Group Melbourne & Geelong
          </h2>
          <p className="mt-4 text-lg font-philosopher text-gray-600">
            Welcome to MSM Translink, your trusted partner in transportation solutions. We are a leading logistics and transportation company dedicated to providing efficient, reliable, and cost-effective services across a wide range of industries. Our core values are built on customer satisfaction, innovation, and sustainability, ensuring that we meet the evolving needs of our clients.
          </p>
          <p className="mt-2 text-lg text-gray-600">
            At MSM Translink, we offer a comprehensive suite of services that include freight transportation, supply chain management, and specialized solutions tailored to your unique business needs. Whether it's local delivery or international shipping, our team of professionals is committed to providing seamless logistics solutions that help your business grow and thrive. We pride ourselves on our state-of-the-art technology, experienced workforce, and dedication to timely delivery, ensuring that your goods are always in safe hands. 
          </p>
        </div>

        {/* History Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-philosopher text-[#75087d] font-medium">History</h2>
          <p className="mt-4 text-lg text-gray-600">
            MSM Translink was founded in 2010 with a vision to transform the
            transportation and logistics industry. Starting as a small local
            carrier, we quickly gained a reputation for reliability and
            efficiency, expanding to serve international markets by 2015.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            In the early years, MSM Translink built a solid reputation for delivering goods safely and on time, quickly gaining the trust of both small and large businesses. As the logistics sector evolved, we adapted by integrating cutting-edge technology, investing in a modern fleet, and expanding our service offerings.
          </p>
        </div>

        {/* Sponsorships Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-philosopher text-[#75087d] font-medium">
            Sponsorships
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We are proud to support several charities, cultural, and sporting
            groups across Melbourne and Geelong. Our commitment to the community
            reflects our dedication to social responsibility and meaningful
            connections.
          </p>
        </div>

        {/* Values Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-philosopher text-[#75087d] font-medium">Our Values</h2>
          <ul className="mt-4 text-lg text-gray-600 space-y-2">
            <li>
              <strong>Customer-Centric:</strong> Tailored solutions to meet
              specific client needs.
            </li>
            <li>
              <strong>Innovation:</strong> Embracing technology to enhance
              services.
            </li>
            <li>
              <strong>Integrity:</strong> Operating with honesty and
              transparency.
            </li>
            <li>
              <strong>Sustainability:</strong> Minimizing our environmental
              footprint through eco-friendly practices.
            </li>
          </ul>
        </div>

        {/* Future Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-philosopher text-[#75087d] font-medium">
            Looking Ahead
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Today, MSM Translink operates in multiple countries and remains
            committed to excellence. As we continue to grow, we look forward to
            forging stronger partnerships and contributing to a sustainable,
            connected future.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

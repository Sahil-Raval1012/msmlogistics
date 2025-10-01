import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Truck, Package, ChevronRight, Star, MapPin, Phone, Mail, ArrowRight, Box, Warehouse } from 'lucide-react';

const ServicesPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: "Drop Shipping",
      description: "Streamline your e-commerce business with our comprehensive drop shipping services. We handle product storage, order processing, and direct shipping to your customers, allowing you to focus on growing your business.",
      icon: <Box className="w-12 h-12 text-white" />,
      features: ["Order Fulfillment", "Inventory Management", "Customer Direct Shipping", "E-commerce Integration"]
    },
    {
      title: "Logistics",
      description: "End-to-end logistics solutions designed to optimize your supply chain. From transportation planning to freight management, we ensure your products move efficiently across Australia with real-time tracking and support.",
      icon: <Truck className="w-12 h-12 text-white" />,
      features: ["Interstate Transport", "Freight Management", "Supply Chain Optimization", "Real-time Tracking"]
    },
    {
      title: "3PL Services & Warehousing",
      description: "Secure and scalable storage solutions in our Geelong facility. Our modern warehousing services include inventory management, climate control options, and 24/7 security to keep your products safe and accessible.",
      icon: <Warehouse className="w-12 h-12 text-white" />,
      features: ["Short & Long-term Storage", "Climate Control", "24/7 Security", "Inventory Management"]
    },
    {
      title: "Pick & Pack",
      description: "Our professional pick and pack services ensure accurate and efficient order fulfillment. We carefully select, package, and prepare your products for shipment, maintaining high standards of quality control.",
      icon: <Package className="w-12 h-12 text-white" />,
      features: ["Order Processing", "Quality Control", "Custom Packaging", "Returns Management"]
    },
    // {
    //   title: "Warehousing",
    //   description: "Secure and scalable storage solutions in our Geelong facility. Our modern warehousing services include inventory management, climate control options, and 24/7 security to keep your products safe and accessible.",
    //   icon: <Warehouse className="w-12 h-12 text-white" />,
    //   features: ["Short & Long-term Storage", "Climate Control", "24/7 Security", "Inventory Management"]
    // },
    
  ];

  const testimonials = [
    {
      name: "John Doe",
      position: "Operations Manager",
      company: "XYZ Logistics",
      testimonial: "MSMtransport has been an incredible partner for our logistics needs. Their reliable services and commitment to quality have helped us grow our business seamlessly.",
      rating: 5
    },
    {
      name: "Jane Smith",
      position: "CEO",
      company: "ABC Enterprises",
      testimonial: "The team at MSMtransport truly understands logistics. They've provided us with cost-effective and timely solutions, making a huge difference for our company.",
      rating: 5
    },
    {
      name: "Robert Johnson",
      position: "Supply Chain Director",
      company: "Global Imports",
      testimonial: "Working with MSMtransport has streamlined our entire logistics operation. Their attention to detail and professional approach sets them apart from other providers.",
      rating: 5
    },
  ];

  const stats = [
    { value: "98%", label: "Customer Satisfaction" },
    { value: "12+", label: "Years of Experience" },
    { value: "5,000+", label: "Successful Deliveries" },
    { value: "24/7", label: "Customer Support" }
  ];

  return (
    <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section */}
      <div className="relative bg-primary text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 py-32 sm:py-40">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-philosopher">Logistics Services</h1>
            <p className="text-lg md:text-xl mb-10 max-w-xl mx-auto">Delivering excellence across Australia with tailored transportation, storage, and logistics solutions.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contactUs" className="bg-secondary-100 text-white px-8 py-3 rounded-full font-semibold hover:bg-[#d9b27e] transition-all flex items-center">
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/about" className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#480e70] transition-all">
                Learn More
              </Link>
            </div>
          </div>
        </div>
        
        {/* Wave SVG */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#ffffff">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </div>

      {/* Services Introduction */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-philosopher">Comprehensive Logistics Solutions</h2>
            <p className="text-lg text-gray-700">At MSMlogistics, we offer end-to-end logistics services designed to optimize your supply chain and enhance your business operations. Based in Geelong, Victoria, we serve businesses across Australia with reliability and precision.</p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-all border-b-4 border-[#CD9F61]">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
          
          {/* Main Services */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-20">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-xl overflow-hidden hover:translate-y-[-10px] transition-all duration-300 border border-gray-100">
                <div className="bg-primary p-6 flex items-center">
                  <div className="bg-[#CD9F61] p-3 rounded-full mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <ChevronRight className="text-[#CD9F61] w-5 h-5 mr-2" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="mt-6 inline-flex items-center text-primary font-semibold hover:text-[#CD9F61] transition-all">
                    Learn more <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section with Timeline */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-philosopher">Our Streamlined Process</h2>
            <p className="text-lg text-gray-700">Experience a seamless logistics journey with our refined step-by-step approach</p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#CD9F61]"></div>
            
            {/* Timeline items */}
            <div className="space-y-12 md:space-y-0">
              {/* Step 1 */}
              <div className="md:flex items-center relative">
                <div className="md:w-1/2 md:pr-16 mb-6 md:mb-0 md:text-right">
                  <h3 className="text-2xl font-bold text-primary mb-2">Initial Consultation</h3>
                  <p className="text-gray-700">We begin by understanding your unique logistics requirements and challenges.</p>
                </div>
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold border-4 border-[#CD9F61]">1</div>
                <div className="md:w-1/2 md:pl-16"></div>
              </div>
              
              {/* Step 2 */}
              <div className="md:flex items-center relative">
                <div className="md:w-1/2 md:pr-16"></div>
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold border-4 border-[#CD9F61]">2</div>
                <div className="md:w-1/2 md:pl-16 mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold text-primary mb-2">Strategic Planning</h3>
                  <p className="text-gray-700">Our experts develop a customized logistics strategy tailored to your business goals.</p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="md:flex items-center relative">
                <div className="md:w-1/2 md:pr-16 mb-6 md:mb-0 md:text-right">
                  <h3 className="text-2xl font-bold text-primary mb-2">Implementation</h3>
                  <p className="text-gray-700">We execute the logistics plan with precision, ensuring smooth operations at every step.</p>
                </div>
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold border-4 border-[#CD9F61]">3</div>
                <div className="md:w-1/2 md:pl-16"></div>
              </div>
              
              {/* Step 4 */}
              <div className="md:flex items-center relative">
                <div className="md:w-1/2 md:pr-16"></div>
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold border-4 border-[#CD9F61]">4</div>
                <div className="md:w-1/2 md:pl-16">
                  <h3 className="text-2xl font-bold text-primary mb-2">Continuous Optimization</h3>
                  <p className="text-gray-700">We monitor performance and continually refine our approach to maximize efficiency.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-philosopher">What Our Clients Say</h2>
            <p className="text-lg text-gray-700">Trusted by businesses across Australia for reliable and efficient logistics solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border-t-4 border-[#CD9F61]">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#CD9F61] fill-[#CD9F61]" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">"{testimonial.testimonial}"</p>
                <div className="flex items-center">
                  <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="relative bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-philosopher">Ready to Transform Your Logistics?</h2>
                <p className="text-lg mb-8">Get in touch with our experts to discuss your specific needs and discover how MSMtransport can elevate your business operations.</p>
                <Link to="/contactUs" className="inline-block bg-[#CD9F61] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#d9b27e] transition-all">
                  Contact Us Today
                </Link>
              </div>
              <div className="bg-white bg-opacity-10 rounded-xl p-8 border border-[#CD9F61] border-opacity-40">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 mr-3 flex-shrink-0 text-[#CD9F61]" />
                    <p>123 Logistics Way, Geelong, VIC 3220</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 mr-3 flex-shrink-0 text-[#CD9F61]" />
                    <p>1300 MSM TRANSPORT (1300 123 456)</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 mr-3 flex-shrink-0 text-[#CD9F61]" />
                    <p>info@msmtransport.com.au</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
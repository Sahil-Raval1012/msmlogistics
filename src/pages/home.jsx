import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronUp, Phone, Mail, MapPin, ShoppingCart, Settings, Building, User } from 'lucide-react';
import { FileText, Building2, CheckCircle, Tag, Package, Truck, Warehouse, Box } from 'lucide-react';
import animation from "./3d";

export default function Homepage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);
  
  // For parallax effect on scroll
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleAccordion = (index) => {
    if (activeAccordion === index) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(index);
    }
  };

  const services = [
    {
      title: "Dropshipping",
      description: "Our advanced dropshipping solutions allow you to sell products without handling inventory. We manage the entire fulfillment process from warehouse to customer.",
      icon: <Package size={48} className="text-primary" />
    },
    {
      title: "Pick & Pack",
      description: "Efficient order fulfillment with our professional pick and pack services. We ensure accurate and timely processing of all orders for your business.",
      icon: <Box size={48} className="text-primary" />
    },
    {
      title: "Warehousing",
      description: "State-of-the-art warehousing facilities providing secure storage solutions. Our strategic locations ensure optimal distribution efficiency.",
      icon: <Warehouse size={48} className="text-primary" />
    },
    {
      title: "Logistics",
      description: "End-to-end logistics management with real-time tracking and reporting. We optimize your supply chain for maximum efficiency and cost savings.",
      icon: <Truck size={48} className="text-primary" />
    }
  ];

  const faqItems = [
    {
      question: "What services does MSM Logistics provide?",
      answer: "MSM Logistics provides comprehensive supply chain solutions including dropshipping, pick & pack services, warehousing, and logistics management. We handle everything from storage to fulfillment, allowing you to focus on growing your business."
    },
    {
      question: "How can I track my inventory?",
      answer: "We provide a state-of-the-art inventory management system that gives you real-time visibility of your stock levels, orders, and shipments. You can access this information 24/7 through our secure client portal."
    },
    {
      question: "What areas do you service?",
      answer: "MSM Logistics operates nationwide with strategic warehouse locations across major cities. We can fulfill orders to any location in Australia, with international shipping options also available."
    },
    {
      question: "How do I get started with MSM Logistics?",
      answer: "Getting started is simple. Contact our team through the form on our website or call us directly. We'll schedule a consultation to understand your specific requirements and provide a tailored solution for your business."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Contact Bar */}
      {/* <div className="bg-[#480e70] text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-6 text-sm items-center">
            <a href="tel:+61123456789" className="flex items-center hover:text-[#CD9F61]">
              <Phone size={16} className="mr-1" />
              <span>+61 1234 56789</span>
            </a>
            <a href="mailto:info@msmtranslink.com" className="flex items-center hover:text-[#CD9F61]">
              <Mail size={16} className="mr-1" />
              <span>info@msmtranslink.com</span>
            </a>
          </div>
          <div>
            <a href="tel:0449882137" className="text-white hover:text-[#CD9F61]">
              Call 0449 882 137 today for a 'no obligation price comparison'
            </a>
          </div>
        </div>
      </div> */}

      {/* Header/Navigation */}


      {/* Hero Section with Slider */}
      <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url('/msm.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          transform: `scale(1.05) translateY(${scrollY * 0.05}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      />

      {/* Dark Overlay with Gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80"
      />
      
      {/* Content Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Decorative Line */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-1 bg-secondary-100"></div>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl font-philosopher md:text-6xl font-bold mb-6 text-white tracking-tight">
              Supply Chain Solutions for Modern Business
            </h1>
            
            {/* Separator */}
            <div className="w-24 h-1 bg-secondary-100 mx-auto mb-8"></div>
            
            {/* Subheading */}
            <p className="text-xl md:text-2xl mb-10 text-gray-200 font-light">
              MSM Logistics provides comprehensive dropshipping, pick &amp; pack, warehousing, and logistics solutions to streamline your business operations.
            </p>
            
            {/* Call to Action Buttons */}
            <div className="flex flex-wrap gap-6 justify-center">
              <a
                href="#"
                className="bg-secondary-100 hover:bg-opacity-90 text-white font-medium py-4 px-10 rounded transition duration-300 shadow-lg uppercase tracking-wide"
              >
                Get Started
              </a>
              <a
                href="#"
                className="bg-transparent hover:bg-white hover:text-primary text-white font-medium py-4 px-10 rounded border-2 border-white transition duration-300 uppercase tracking-wide"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation Dots - Enhanced */}
      <div className="absolute bottom-12 left-0 right-0 flex justify-center space-x-3">
        <div className="h-3 w-3 rounded-full bg-secondary-100 shadow-lg"></div>
        <div className="h-3 w-3 rounded-full bg-gray-400 shadow-lg"></div>
        <div className="h-3 w-3 rounded-full bg-gray-400 shadow-lg"></div>
      </div>
    </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Premium Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Comprehensive solutions tailored to optimize your supply chain and enhance your business operations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            
            {/* Dropshipping Card */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl border-b-4 border-secondary-100">
              <div className="flex flex-col items-center p-8">
                <div className="bg-gray-50 p-5 rounded-full mb-6">
                  {services[0].icon}
                </div>
                <h3 className="text-xl font-semibold text-primary uppercase mb-3">Dropshipping</h3>
                <p className="text-gray-600 text-center mb-6">
                  We are your trusted Dropshipping partner—storing, packing, and shipping products directly to your customers with precision and care.
                </p>
                <button className="px-6 py-2 bg-secondary-100 text-white rounded-md hover:bg-opacity-90 transition duration-300 mt-auto">
                  Learn More
                </button>
              </div>
            </div>

            {/* Logistics Card */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl border-b-4 border-secondary-100">
              <div className="flex flex-col items-center p-8">
                <div className="bg-gray-50 p-5 rounded-full mb-6">
                  {services[3].icon}
                </div>
                <h3 className="text-xl font-semibold text-primary uppercase mb-3">Logistics</h3>
                <p className="text-gray-600 text-center mb-6">
                  MSM Logistics manages your supply chain seamlessly—ensuring smooth, reliable inventory flow from origin to destination.
                </p>
                <button className="px-6 py-2 bg-secondary-100 text-white rounded-md hover:bg-opacity-90 transition duration-300 mt-auto">
                  Learn More
                </button>
              </div>
            </div>

            {/* Pick and Pack Card */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl border-b-4 border-secondary-100">
              <div className="flex flex-col items-center p-8">
                <div className="bg-gray-50 p-5 rounded-full mb-6">
                  {services[1].icon}
                </div>
                <h3 className="text-xl font-semibold text-primary uppercase mb-3">Pick & Pack</h3>
                <p className="text-gray-600 text-center mb-6">
                  We handle everything from receiving and storing goods to accurately picking, packing, and globally dispatching your orders.
                </p>
                <button className="px-6 py-2 bg-secondary-100 text-white rounded-md hover:bg-opacity-90 transition duration-300 mt-auto">
                  Learn More
                </button>
              </div>
            </div>

            {/* Warehousing Card */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl border-b-4 border-secondary-100">
              <div className="flex flex-col items-center p-8">
                <div className="bg-gray-50 p-5 rounded-full mb-6">
                  {services[2].icon}
                </div>
                <h3 className="text-xl font-semibold text-primary uppercase mb-3">Warehousing</h3>
                <p className="text-gray-600 text-center mb-6">
                  Our modern, compliant warehousing solutions utilize advanced WMS to ensure efficient and secure storage of your inventory.
                </p>
                <button className="px-6 py-2 bg-secondary-100 text-white rounded-md hover:bg-opacity-90 transition duration-300 mt-auto">
                  Learn More
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <img 
                src="2.jpg" 
                alt="Warehouse operations" 
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-primary mb-6">Why Choose MSM Logistics</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gray-50 rounded-full p-3 mr-4 shadow-md">
                    <svg className="h-6 w-6 text-secondary-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">Experienced Team</h3>
                    <p className="text-gray-600">Our team brings years of industry experience to optimize your supply chain operations.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gray-50 rounded-full p-3 mr-4 shadow-md">
                    <svg className="h-6 w-6 text-secondary-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">Advanced Technology</h3>
                    <p className="text-gray-600">Real-time tracking and reporting systems provide complete visibility of your inventory.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gray-50 rounded-full p-3 mr-4 shadow-md">
                    <svg className="h-6 w-6 text-secondary-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">Experienced Team</h3>
                    <p className="text-gray-600">Our team brings years of industry experience to optimize your supply chain operations.</p>
                  </div>
                </div>
                </div>
                </div></div>
                  </div>
                  </section>

      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Supply Chain?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Partner with MSM Logistics for comprehensive dropshipping, pick & pack, warehousing, and logistics solutions that drive business growth.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a 
              href="quote" 
              className="bg-[#CD9F61] text-white hover:bg-primary font-medium py-3 px-8 rounded-md transition duration-300"
            >
              Request a Quote
            </a>
            <a 
              href="contactUs" 
              className="bg-transparent hover:bg-secondary-100 text-white font-medium py-3 px-8 rounded-md border border-white transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center text-primary mb-8">HOW IT WORKS</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
            Free up your time and capital and let us help continuously improve and
            optimise the delivery of your product to your customers by leveraging a
            strong resource network.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center process-card">
              <div className="bg-[#f2e8d3] h-16 w-16 flex items-center justify-center rounded-full mx-auto mb-4">
                <Phone size={28} className="text-[#CD9F61]" />
              </div>
              <h3 className="font-bold text-lg mb-2">Step 1</h3>
              <p className="text-gray-600 text-sm">
                A short phone discussion to learn about your needs and requirements
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center process-card">
              <div className="bg-[#f2e8d3] h-16 w-16 flex items-center justify-center rounded-full mx-auto mb-4">
                <FileText size={28} className="text-[#CD9F61]" />
              </div>
              <h3 className="font-bold text-lg mb-2">Step 2</h3>
              <p className="text-gray-600 text-sm">
                We share an estimate via email
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center process-card">
              <div className="bg-[#f2e8d3] h-16 w-16 flex items-center justify-center rounded-full mx-auto mb-4">
                <Building2 size={28} className="text-[#CD9F61]" />
              </div>
              <h3 className="font-bold text-lg mb-2">Step 3</h3>
              <p className="text-gray-600 text-sm">
                You are invited to visit the warehouse, take a tour of the facility and meet the team
              </p>
            </div>
            
            {/* Step 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center process-card">
              <div className="bg-[#f2e8d3] h-16 w-16 flex items-center justify-center rounded-full mx-auto mb-4">
                <CheckCircle size={28} className="text-[#CD9F61]" />
              </div>
              <h3 className="font-bold text-lg mb-2">Step 4</h3>
              <p className="text-gray-600 text-sm">
                You approve the quote and we get started
              </p>
            </div>
            
            {/* Step 5 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center process-card">
              <div className="bg-[#f2e8d3] h-16 w-16 flex items-center justify-center rounded-full mx-auto mb-4">
                <Tag size={28} className="text-[#CD9F61]" />
              </div>
              <h3 className="font-bold text-lg mb-2">Step 5</h3>
              <p className="text-gray-600 text-sm">
                Have your products stored and shipping managed for you
              </p>
            </div>
            
            {/* Step 6 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center process-card">
              <div className="bg-[#f2e8d3] h-16 w-16 flex items-center justify-center rounded-full mx-auto mb-4">
                <User size={28} className="text-[#CD9F61]" />
              </div>
              <h3 className="font-bold text-lg mb-2">Step 6</h3>
              <p className="text-gray-600 text-sm">
                Warehouse assistant keeps in touch with regular communication
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-primary hover:bg-secondary-100 text-white px-8 py-3 rounded text-lg font-medium transition duration-300 inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              CONTACT OUR TEAM
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our services and operations
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
              >
                <button 
                  className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="font-medium text-primary ">{item.question}</span>
                  {activeAccordion === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {activeAccordion === index && (
                  <div className="p-4 bg-white border-t border-gray-200">
                    <p className="text-primary">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
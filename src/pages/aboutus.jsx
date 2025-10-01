import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronDown, Truck, Award, Globe, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Note: You'll need to install these packages:
// npm install framer-motion lucide-react

const AboutUs = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('about');
  const heroRef = useRef(null);
  const missionRef = useRef(null);
  const teamRef = useRef(null);
  
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(heroScrollProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(heroScrollProgress, [0, 1], [1, 0.8]);
  const heroTextY = useTransform(heroScrollProgress, [0, 1], [0, -50]);

  // Mission section parallax effect
  const { scrollYProgress: missionScrollProgress } = useScroll({
    target: missionRef,
    offset: ["start end", "end start"]
  });
  const missionY = useTransform(missionScrollProgress, [0, 1], [100, -100]);

  useEffect(() => {
    // Simulate page loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const tabs = [
    { id: 'about', label: 'About MSM' },
    { id: 'history', label: 'Our History' },
    { id: 'sponsorships', label: 'Sponsorships' },
    { id: 'values', label: 'Our Values' },
  ];

  // Animated counter component
  const Counter = ({ end, title }) => {
    const [count, setCount] = useState(0);
    const counterRef = useRef(null);
    
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            let currentCount = 0;
            const interval = setInterval(() => {
              currentCount += 1;
              setCount(currentCount);
              if (currentCount >= end) clearInterval(interval);
            }, 20);
            
            return () => clearInterval(interval);
          }
        },
        { threshold: 0.5 }
      );
      
      if (counterRef.current) {
        observer.observe(counterRef.current);
      }
      
      return () => {
        if (counterRef.current) {
          observer.unobserve(counterRef.current);
        }
      };
    }, [end]);
    
    return (
      <div ref={counterRef} className="text-center">
        <div className="text-4xl font-bold text-primary">{count}+</div>
        <div className="mt-2 text-gray-600">{title}</div>
      </div>
    );
  };


  return (
    <>
      {/* Hero Section with Parallax */}
      {/* <motion.div 
        ref={heroRef}
        className="relative h-screen w-full overflow-hidden"
        style={{ opacity: heroOpacity, scale: heroScale }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1573030889348-c6b0f18fcbb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white px-6">
          <motion.h1 
            className="text-5xl md:text-7xl font-philosopher font-bold mb-6 text-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{ y: heroTextY }}
          >
            About MSM Translink
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-2xl text-center font-light"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{ y: heroTextY }}
          >
            Your trusted partner in transportation solutions since 2010
          </motion.p>
          
          <motion.div 
            className="absolute bottom-12"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: [0, 10, 0], opacity: 1 }}
            transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={32} strokeWidth={1} />
          </motion.div>
        </div>
      </motion.div> */}

      {/* Secondary Hero Alternative (Wave effect) */}
      <div className="relative bg-primary text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative container mx-auto px-4 py-32 sm:py-40">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-philosopher">About MSM Logistics</h1>
            <p className="text-lg md:text-xl mb-10 max-w-xl mx-auto">Your trusted partner in Logistics solutions</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contactUs" className="bg-secondary-100 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all flex items-center">
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/about" className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition-all">
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

      {/* Mission Statement - Full Width Colored Section with Parallax */}
      <motion.div 
        ref={missionRef}
        className="py-20 text-center px-6 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="absolute inset-0 z-0 opacity-5"
          style={{ y: missionY }}
        >
          <div className="grid grid-cols-10 grid-rows-10 h-full w-full">
            {Array(100).fill(0).map((_, index) => (
              <div key={index} className="flex items-center justify-center text-6xl font-bold text-secondary-100">
                MSM Logistics
              </div>
            ))}
          </div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-philosopher">Our Mission</h2>
          <p className="text-lg text-gray-600">
            To revolutionize the transportation industry through innovation, 
            reliability, and sustainable practices while delivering exceptional 
            value to our clients and communities.
          </p>
        </div>
      </motion.div>

      {/* Stats Section with Parallax */}
      <div className="py-16 px-6 bg-gray-50 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1530949730524-c8e58d9a4b15?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')"
          }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Counter end={15} title="Years Experience" />
            <Counter end={500} title="Clients Served" />
            <Counter end={10000} title="Deliveries Completed" />
            <Counter end={95} title="Satisfaction Rate %" />
          </div>
        </div>
      </div>

      {/* Interactive Tabs Section */}
      <div className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center mb-10 border-b">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`px-6 py-3 text-lg transition-all duration-300 font-philosopher ${
                  activeTab === tab.id
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-500 hover:text-secondary-100'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="min-h-[400px]"
            >
              {activeTab === 'about' && (
                <div className="grid md:grid-cols-2 gap-10 items-center">
                  <div>
                    <h3 className="text-3xl font-philosopher text-primary mb-6">MSM Transport Group</h3>
                    <p className="text-lg text-gray-600 mb-4">
                      Welcome to MSM LOGISTICS, your trusted partner in transportation solutions. We are a leading logistics and transportation company dedicated to providing efficient, reliable, and cost-effective services across a wide range of industries.
                    </p>
                    <p className="text-lg text-gray-600">
                      Our core values are built on customer satisfaction, innovation, and sustainability, ensuring that we meet the evolving needs of our clients. Whether it's local delivery or international shipping, our team of professionals is committed to providing seamless logistics solutions.
                    </p>
                  </div>
                  <div className="relative h-[400px] overflow-hidden rounded-lg">
                    <motion.img 
                      src="3.jpg" 
                      alt="MSM Transport Group" 
                      className="object-cover w-full h-full"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.7 }}
                    />
                  </div>
                </div>
              )}

              {activeTab === 'history' && (
                <div className="grid md:grid-cols-2 gap-10 items-center">
                  <div className="relative h-[400px] overflow-hidden rounded-lg order-2 md:order-1">
                    <motion.img 
                      src="4.jpg" 
                      alt="MSM History" 
                      className="object-cover w-full h-full"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.7 }}
                    />
                  </div>
                  <div className="order-1 md:order-2">
                    <h3 className="text-3xl font-philosopher text-primary mb-6">Our Journey</h3>
                    <div className="space-y-6">
                      <div className="flex">
                        <div className="mr-4 font-bold text-primary text-xl">2010</div>
                        <div className="text-lg text-gray-600">
                          MSM Logistics was founded with a vision to transform the logistics industry.
                        </div>
                      </div>
                      <div className="flex">
                        <div className="mr-4 font-bold text-primary text-xl">2015</div>
                        <div className="text-lg text-gray-600">
                          Expanded operations to serve international markets and doubled our fleet size.
                        </div>
                      </div>
                      <div className="flex">
                        <div className="mr-4 font-bold text-primary text-xl">2020</div>
                        <div className="text-lg text-gray-600">
                          Implemented cutting-edge technology and sustainable practices across all operations.
                        </div>
                      </div>
                      <div className="flex">
                        <div className="mr-4 font-bold text-primary text-xl">Today</div>
                        <div className="text-lg text-gray-600">
                          Operating in multiple countries and committed to excellence in logistics solutions.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'sponsorships' && (
                <div className="text-center">
                  <h3 className="text-3xl font-philosopher text-primary mb-6">Community Commitment</h3>
                  <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
                    We are proud to support several charities, cultural, and sporting
                    groups across Melbourne and Geelong. Our commitment to the community
                    reflects our dedication to social responsibility and meaningful
                    connections.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {[1, 2, 3].map((index) => (
                      <motion.div 
                        key={index} 
                        className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                        whileHover={{ y: -10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                        <h4 className="text-xl font-medium mb-2">Community Project {index}</h4>
                        <p className="text-gray-600">Supporting local initiatives that make a difference in our community.</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'values' && (
                <div>
                  <h3 className="text-3xl font-philosopher text-primary mb-6 text-center">Our Core Values</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
                    <motion.div 
                      className="bg-gray-50 p-6 rounded-lg text-center hover:bg-primary hover:bg-opacity-5 transition-colors duration-300"
                      whileHover={{ y: -10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Truck className="w-8 h-8 text-primary" />
                      </div>
                      <h4 className="text-xl font-medium mb-2">Customer-Centric</h4>
                      <p className="text-gray-600">Tailored solutions to meet specific client needs</p>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-gray-50 p-6 rounded-lg text-center hover:bg-primary hover:bg-opacity-5 transition-colors duration-300"
                      whileHover={{ y: -10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Award className="w-8 h-8 text-primary" />
                      </div>
                      <h4 className="text-xl font-medium mb-2">Integrity</h4>
                      <p className="text-gray-600">Operating with honesty and transparency</p>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-gray-50 p-6 rounded-lg text-center hover:bg-primary hover:bg-opacity-5 transition-colors duration-300"
                      whileHover={{ y: -10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Globe className="w-8 h-8 text-primary" />
                      </div>
                      <h4 className="text-xl font-medium mb-2">Sustainability</h4>
                      <p className="text-gray-600">Minimizing our environmental footprint</p>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-gray-50 p-6 rounded-lg text-center hover:bg-primary hover:bg-opacity-5 transition-colors duration-300"
                      whileHover={{ y: -10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-medium mb-2">Innovation</h4>
                      <p className="text-gray-600">Embracing technology to enhance services</p>
                    </motion.div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Team Section with Parallax */}
      <div className="py-16 px-6 bg-gray-50 relative" ref={teamRef}>
        <div 
          className="absolute inset-0 bg-cover bg-fixed"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1517245386807-9b4f6416be93?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
            opacity: 0.05
          }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-philosopher text-primary mb-12 text-center">Meet Our Team</h2>
           
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="h-64 bg-gray-200 relative overflow-hidden">
                  <motion.img 
                    src={`https://images.unsplash.com/photo-151${2000000 + index}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                    alt={`Team Member ${index}`}
                    className="object-cover w-full h-full"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-1">Team Member Name</h3>
                  <p className="text-primary mb-4">Position</p>
                  <p className="text-gray-600">Brief description about the team member and their role at MSM Logistics.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action with Parallax */}
      <div className="py-16 px-6 bg-primary text-white text-center relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)",
            backgroundSize: "50% 50%",
          }}
        />
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-3xl font-philosopher mb-6">Ready to Work With Us?</h2>
          <p className="text-lg mb-8">Experience the MSM Logistics difference with our tailored logistics solutions.</p>
          <motion.button 
            className="bg-white text-primary py-3 px-8 rounded-full text-lg font-medium hover:bg-opacity-90 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us Today
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
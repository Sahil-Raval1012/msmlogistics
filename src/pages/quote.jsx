import React, { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft, Truck, Package, Map, Check, AlertCircle, MapPin, Send, Info } from "lucide-react";
import emailjs from "emailjs-com";

const Quote = () => {
  const emailServiceId = "service_fgkhgr4";
  const emailTemplateId = "template_mnf8zpw";
  const emailUserId = "ybWQ6M36O4DDCUJrZ";
  // State management
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    phoneNumber: "",
    email: "",
    jobType: "",
    pickupLocation: "",
    dropoffLocation: "",
    description: "",
    qty: "",
    weight: "",
    length: "",
    width: "",
    height: "",
    isDG: "",
    loadingMethod: "",
    unloadingMethod: "",
    driverAccess: "",
    needsSignature: false,
    moreDetails: false,
    additionalInfo: "",
  });
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [dropoffSuggestions, setDropoffSuggestions] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [emailError, setEmailError] = useState(null);

  // Simulate page loading effect
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1800);
  }, []);

  // Progress indicator calculation
  const progress = ((currentStep + 1) / 4) * 100;

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Mock suggestion handler (replace with actual API call)
  const handleLocationChange = (e, field) => {
    const value = e.target.value;
    setFormData({ ...formData, [field]: value });

    if (value.length > 2) {
      // Mock location suggestions
      const mockSuggestions = [
        { id: 1, address: value + " Street, Sydney NSW" },
        { id: 2, address: value + " Road, Melbourne VIC" },
        { id: 3, address: value + " Avenue, Brisbane QLD" }
      ];
      
      if (field === "pickupLocation") {
        setPickupSuggestions(mockSuggestions);
      } else {
        setDropoffSuggestions(mockSuggestions);
      }
    } else {
      if (field === "pickupLocation") setPickupSuggestions([]);
      else setDropoffSuggestions([]);
    }
  };

  const handleSuggestionSelect = (suggestion, field) => {
    setFormData({ ...formData, [field]: suggestion.address });
    if (field === "pickupLocation") setPickupSuggestions([]);
    else setDropoffSuggestions([]);
  };

  // Form navigation
  const nextStep = () => {
    window.scrollTo(0, 0);
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    window.scrollTo(0, 0);
    setCurrentStep(currentStep - 1);
  };

  // Form submission
  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    setIsLoading(true);

    const templateParams = {
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      jobType: formData.jobType,
      pickupLocation: formData.pickupLocation,
      dropoffLocation: formData.dropoffLocation,
      qty: formData.qty,
      weight: formData.weight,
      length: formData.length,
      width: formData.width,
      height: formData.height,
      isDG: formData.isDG,
      loadingMethod: formData.loadingMethod,
      unloadingMethod: formData.unloadingMethod,
      driverAccess: formData.driverAccess,
      needsSignature: formData.needsSignature ? "Yes" : "No",
      moreDetails: formData.moreDetails ? "Yes" : "No",
      additionalInfo: formData.additionalInfo || "No additional information provided"
    };

    // Send email using EmailJS
    emailjs.send(emailServiceId, emailTemplateId, templateParams, emailUserId)
      .then((response) => {
        console.log("Email sent successfully:", response);
        setIsLoading(false);
        setFormSubmitted(true);
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        setEmailError(error.text || "Failed to submit the form. Please try again.");
        setIsLoading(false);
      });
    
    // For testing: Simulate form submission
    // Comment out this block when using actual EmailJS
    setTimeout(() => {
      setIsLoading(false);
      setFormSubmitted(true);
    }, 1500);
  };

  // Form steps
  const steps = [
    {
      title: "Contact Information",
      icon: <Info className="text-secondary-100" size={24} />,
      component: (
        <div className="space-y-6">
          <h3 className="font-bold text-xl text-gray-800">How can we reach you?</h3>
          <div className="space-y-4">
            <div className="group relative">
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full py-4 px-4 border-b-2 border-gray-300 text-gray-800 focus:outline-none focus:border-blue-500 transition-all bg-transparent"
                required
              />
              <label className="absolute left-4 -top-2 text-xs text-blue-500 font-medium transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-500">
                Phone Number
              </label>
            </div>
            
            <div className="group relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full py-4 px-4 border-b-2 border-gray-300 text-gray-800 focus:outline-none focus:border-blue-500 transition-all bg-transparent"
                required
              />
              <label className="absolute left-4 -top-2 text-xs text-blue-500 font-medium transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-500">
                Email Address
              </label>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Job Details",
      icon: <Truck className="text-secondary-100" size={24} />,
      component: (
        <div className="space-y-6">
          <h3 className="font-bold text-xl text-gray-800">Tell us about your shipment</h3>
          <div className="space-y-6">
            <div className="relative">
              <select
                name="jobType"
                value={formData.jobType}
                onChange={handleChange}
                className="w-full py-4 px-4 border-b-2 border-gray-300 text-gray-800 focus:outline-none focus:border-blue-500 transition-all bg-transparent appearance-none"
                required
              >
                <option value="" disabled>Select Job Type</option>
                <option value="Pallets">Pallets</option>
                <option value="Skids">Skids</option>
                <option value="Pallecons">Pallecons</option>
                <option value="IBC">IBC</option>
                <option value="Cartoon/Box">Carton/Box</option>
              </select>
              <ChevronRight size={20} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
              <label className="absolute left-4 -top-2 text-xs text-blue-500 font-medium">
                Job Type
              </label>
            </div>
            
            <div className="relative">
              <div className="flex items-center border-b-2 border-gray-300 focus-within:border-blue-500 transition-all">
                <MapPin size={20} className="text-gray-400 ml-4" />
                <input
                  type="text"
                  name="pickupLocation"
                  value={formData.pickupLocation}
                  onChange={(e) => handleLocationChange(e, "pickupLocation")}
                  placeholder=" "
                  className="peer w-full py-4 px-2 text-gray-800 focus:outline-none bg-transparent"
                  required
                />
                <label className="absolute left-12 -top-2 text-xs text-blue-500 font-medium transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-500">
                  Pickup Location
                </label>
              </div>
              {pickupSuggestions.length > 0 && (
                <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                  {pickupSuggestions.map((suggestion) => (
                    <li
                      key={suggestion.id}
                      className="px-4 py-2 hover:bg-blue-50 cursor-pointer text-gray-700 flex items-center transition-colors"
                      onClick={() => handleSuggestionSelect(suggestion, "pickupLocation")}
                    >
                      <MapPin size={16} className="mr-2 text-blue-500" />
                      {suggestion.address}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            
            <div className="relative mt-6">
              <div className="flex items-center border-b-2 border-gray-300 focus-within:border-blue-500 transition-all">
                <MapPin size={20} className="text-gray-400 ml-4" />
                <input
                  type="text"
                  name="dropoffLocation"
                  value={formData.dropoffLocation}
                  onChange={(e) => handleLocationChange(e, "dropoffLocation")}
                  placeholder=" "
                  className="peer w-full py-4 px-2 text-gray-800 focus:outline-none bg-transparent"
                  required
                />
                <label className="absolute left-12 -top-2 text-xs text-blue-500 font-medium transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-500">
                  Dropoff Location
                </label>
              </div>
              {dropoffSuggestions.length > 0 && (
                <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                  {dropoffSuggestions.map((suggestion) => (
                    <li
                      key={suggestion.id}
                      className="px-4 py-2 hover:bg-blue-50 cursor-pointer text-gray-700 flex items-center transition-colors"
                      onClick={() => handleSuggestionSelect(suggestion, "dropoffLocation")}
                    >
                      <MapPin size={16} className="mr-2 text-blue-500" />
                      {suggestion.address}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Package Details",
      icon: <Package className="text-secondary-100" size={24} />,
      component: (
        <div className="space-y-6">
          <h3 className="font-bold text-xl text-gray-800">What are you shipping?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group relative">
              <input
                type="number"
                name="qty"
                value={formData.qty}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full py-4 px-4 border-b-2 border-gray-300 text-gray-800 focus:outline-none focus:border-blue-500 transition-all bg-transparent"
                required
              />
              <label className="absolute left-4 -top-2 text-xs text-blue-500 font-medium transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-500">
                Quantity
              </label>
            </div>
            
            <div className="group relative">
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full py-4 px-4 border-b-2 border-gray-300 text-gray-800 focus:outline-none focus:border-blue-500 transition-all bg-transparent"
                required
              />
              <label className="absolute left-4 -top-2 text-xs text-blue-500 font-medium transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-500">
                Weight (kg)
              </label>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group relative">
              <input
                type="number"
                name="length"
                value={formData.length}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full py-4 px-4 border-b-2 border-gray-300 text-gray-800 focus:outline-none focus:border-blue-500 transition-all bg-transparent"
                required
              />
              <label className="absolute left-4 -top-2 text-xs text-blue-500 font-medium transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-500">
                Length (cm)
              </label>
            </div>
            
            <div className="group relative">
              <input
                type="number"
                name="width"
                value={formData.width}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full py-4 px-4 border-b-2 border-gray-300 text-gray-800 focus:outline-none focus:border-blue-500 transition-all bg-transparent"
                required
              />
              <label className="absolute left-4 -top-2 text-xs text-blue-500 font-medium transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-500">
                Width (cm)
              </label>
            </div>
            
            <div className="group relative">
              <input
                type="number"
                name="height"
                value={formData.height}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full py-4 px-4 border-b-2 border-gray-300 text-gray-800 focus:outline-none focus:border-blue-500 transition-all bg-transparent"
                required
              />
              <label className="absolute left-4 -top-2 text-xs text-blue-500 font-medium transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-500">
                Height (cm)
              </label>
            </div>
          </div>
          
          <div className="p-4 bg-purple-100 rounded-lg border border-purple-100 mt-6">
            <div className="flex items-start">
              <Info size={20} className="text-secondary-200 mr-3 mt-0.5" />
              <p className="text-sm text-gray-700">
                Please provide accurate dimensions and weight to ensure we can provide you with the most accurate quote.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Shipping Requirements",
      icon: <AlertCircle className="text-secondary-100" size={24} />,
      component: (
        <div className="space-y-6">
          <h3 className="font-bold text-xl text-gray-800">Additional Requirements</h3>
          
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <label className="block text-gray-700 font-medium mb-2">
              Is this Dangerous Goods (DG)?
            </label>
            <div className="flex space-x-4">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="isDG"
                  value="yes"
                  checked={formData.isDG === "yes"}
                  onChange={() => setFormData({ ...formData, isDG: "yes" })}
                  className="h-4 w-4 text-blue-500 focus:ring-blue-500"
                />
                <span className="ml-2 text-gray-700">Yes</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="isDG"
                  value="no"
                  checked={formData.isDG === "no"}
                  onChange={() => setFormData({ ...formData, isDG: "no" })}
                  className="h-4 w-4 text-blue-500 focus:ring-blue-500"
                />
                <span className="ml-2 text-gray-700">No</span>
              </label>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="relative">
              <select
                name="loadingMethod"
                value={formData.loadingMethod}
                onChange={handleChange}
                className="w-full py-4 px-4 border-b-2 border-gray-300 text-gray-800 focus:outline-none focus:border-blue-500 transition-all bg-transparent appearance-none"
                required
              >
                <option value="" disabled>Select Loading Method</option>
                <option value="Sender will load goods by hand">Sender will load goods by hand</option>
                <option value="Sender will load goods by forklift">Sender will load goods by forklift</option>
                <option value="Driver will need to load goods by hand (<25kg)">Driver will need to load goods by hand (less than 25kg)</option>
                <option value="Driver will need a hydraulic lift (>25kg)">Driver will need a hydraulic lift (greater than 25kg)</option>
                <option value="Driver will need an HIAB (>1000kg)">Driver will need an HIAB (greater than 1000kg)</option>
              </select>
              <ChevronRight size={20} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
              <label className="absolute left-4 -top-2 text-xs text-secondary-200 font-medium">
                Loading Method
              </label>
            </div>
            
            <div className="relative">
              <select
                name="unloadingMethod"
                value={formData.unloadingMethod}
                onChange={handleChange}
                className="w-full py-4 px-4 border-b-2 border-gray-300 text-gray-800 focus:outline-none focus:border-blue-500 transition-all bg-transparent appearance-none"
                required
              >
                <option value="" disabled>Select Unloading Method</option>
                <option value="Receiver will unload goods by hand">Receiver will unload goods by hand</option>
                <option value="Receiver will unload goods by forklift">Receiver will unload goods by forklift</option>
                <option value="Driver will need to unload goods by hand (<25kg)">Driver will need to unload goods by hand (less than 25kg)</option>
                <option value="Driver will need a hydraulic lift (>25kg)">Driver will need a hydraulic lift (greater than 25kg)</option>
                <option value="Driver will need an HIAB (>1000kg)">Driver will need an HIAB (greater than 1000kg)</option>
              </select>
              <ChevronRight size={20} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
              <label className="absolute left-4 -top-2 text-xs text-secondary-200 font-medium">
                Unloading Method
              </label>
            </div>
            
            <div className="group relative">
              <input
                type="text"
                name="driverAccess"
                value={formData.driverAccess}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full py-4 px-4 border-b-2 border-gray-300 text-gray-800 focus:outline-none focus:border-blue-500 transition-all bg-transparent"
              />
              <label className="absolute left-4 -top-2 text-xs text-blue-500 font-medium transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-500">
                Driver access details
              </label>
            </div>
            
            <div className="flex items-center space-x-4 mt-4">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="needsSignature"
                  checked={formData.needsSignature}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-500 rounded focus:ring-blue-500"
                />
                <span className="ml-2 text-gray-700">Requires signature on delivery</span>
              </label>
            </div>
            
            <div className="flex items-center space-x-4 mt-2">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="moreDetails"
                  checked={formData.moreDetails}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-500 rounded focus:ring-blue-500"
                />
                <span className="ml-2 text-gray-700">I have additional information</span>
              </label>
            </div>
            
            {formData.moreDetails && (
              <div className="group relative mt-4">
                <textarea
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  placeholder=" "
                  rows="4"
                  className="peer w-full py-4 px-4 border-2 border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:border-blue-500 transition-all bg-transparent resize-none"
                ></textarea>
                <label className="absolute left-4 -top-2 text-xs text-blue-500 font-medium transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-500">
                  Additional information
                </label>
              </div>
            )}
          </div>
        </div>
      ),
    },
  ];

  // Page loading animation
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center ">
        <div className="text-center">
          <div className="mb-4 flex justify-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"></div>
          </div>
          <h2 className="text-2xl font-bold text-secondary-100 animate-pulse">Preparing your quote form...</h2>
        </div>
      </div>
    );
  }

  // Thank you page after form submission
  if (formSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-purple-100 p-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full">
          <div className="flex justify-center mb-6">
            <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center">
              <Check size={40} className="text-green-500" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Quote Request Submitted!</h2>
          <p className="text-gray-600 text-center mb-8">
            Thank you for your request. Our team will review your information and get back to you within 24 hours.
          </p>
          <div className="bg-purple-100 p-4 rounded-lg mb-6">
            <p className="text-sm text-secondary-100 font-medium">
              A confirmation email has been sent to {formData.email}
            </p>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="w-full py-3 px-6 bg-secondary-100 hover:bg-primary text-white font-medium rounded-lg transition-colors flex items-center justify-center"
          >
            <span>Request another Quote</span>
          </button>
        </div>
      </div>
    );
  }

  // Main quote form
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold text-secondary-100 mb-4">Get Your Free Quote</h1>
            <p className="text-gray-600 max-w-lg mx-auto">
              Fill out this form to receive a customized logistics solution tailored to your specific needs.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Progress Bar */}
            <div className="h-2 bg-gray-100">
              <div 
                className="h-full bg-secondary-200 transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            {/* Steps Navigation */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`flex items-center ${
                    index === currentStep
                      ? 'text-secondary-200 font-medium'
                      : index < currentStep
                      ? 'text-green-500'
                      : 'text-gray-400'
                  }`}
                >
                  <div className={`flex items-center justify-center h-10 w-10 rounded-full mr-2 ${
                    index === currentStep
                      ? 'bg-purple-100'
                      : index < currentStep
                      ? 'bg-green-100 text-green-500'
                      : 'bg-gray-100 text-gray-400'
                  }`}>
                    {index < currentStep ? (
                      <Check size={20} />
                    ) : (
                      step.icon
                    )}
                  </div>
                  <span className="hidden md:inline">{step.title}</span>
                </div>
              ))}
            </div>

            {/* Form Content */}
            <div className="p-6 md:p-10">
              <div className="min-h-80">
                {steps[currentStep].component}
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-12">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className={`flex items-center px-6 py-3 rounded-lg ${
                    currentStep === 0
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  } transition-colors`}
                >
                  <ChevronLeft size={20} className="mr-2" />
                  <span>Previous</span>
                </button>

                {currentStep < steps.length - 1 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex items-center px-6 py-3 bg-secondary-100 hover:bg-primary text-white font-medium rounded-lg transition-colors"
                  >
                    <span>Continue</span>
                    <ChevronRight size={20} className="ml-2" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="flex items-center px-6 py-3 bg-secondary-100 hover:bg-primary text-white font-medium rounded-lg transition-colors"
                  >
                    <span>Submit Quote</span>
                    <Send size={20} className="ml-2" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Need immediate assistance? Call us at <span className="font-bold text-primary">1-800-123-4567</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
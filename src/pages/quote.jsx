import React, { useState } from "react";
import axios from "axios";
import emailjs from "emailjs-com";

const Quote = () => {
  const [currentStep, setCurrentStep] = useState(1);
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
  });
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [dropoffSuggestions, setDropoffSuggestions] = useState([]);

  const apiKey = "6f940b1237f8469984769026fd6f14d7";

  // Handle location input changes and make API calls to Geoapify
  const handleLocationChange = async (e, field) => {
    const value = e.target.value;
    setFormData({ ...formData, [field]: value });

    if (value.length > 2) {
      const response = await axios.get(
        `https://api.geoapify.com/v1/geocode/autocomplete`,
        {
          params: {
            text: value,
            apiKey: apiKey,
            lang: "en",
            limit: 5,
          },
        }
      );

      if (field === "pickupLocation") {
        setPickupSuggestions(response.data.features);
      } else if (field === "dropoffLocation") {
        setDropoffSuggestions(response.data.features);
      }
    } else {
      if (field === "pickupLocation") setPickupSuggestions([]);
      else if (field === "dropoffLocation") setDropoffSuggestions([]);
    }
  };

  const handleSuggestionSelect = (suggestion, field) => {
    const location = suggestion.properties.formatted;
    setFormData({ ...formData, [field]: location });
    if (field === "pickupLocation") setPickupSuggestions([]);
    else if (field === "dropoffLocation") setDropoffSuggestions([]);
  };

  const steps = [
    {
      title: "Step 1: Contact Information",
      content: (
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={(e) =>
              setFormData({ ...formData, phoneNumber: e.target.value })
            }
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      ),
    },
    {
      title: "Step 2: Job Details",
      content: (
        <div className="space-y-4">
          <select
            value={formData.jobType}
            onChange={(e) =>
              setFormData({ ...formData, jobType: e.target.value })
            }
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Job Type</option>
            <option value="Pallets">Pallets</option>
            <option value="Skids">Skids</option>
            <option value="Pallecons">Pallecons</option>
            <option value="IBC">IBC</option>
            <option value="Cartoon/Box">Cartoon/Box</option>
          </select>
          <input
            type="text"
            placeholder="Pickup Location"
            value={formData.pickupLocation}
            onChange={(e) => handleLocationChange(e, "pickupLocation")}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {pickupSuggestions.length > 0 && (
            <ul className="mt-2 bg-white border border-gray-300 rounded max-h-40 overflow-auto">
              {pickupSuggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="p-2 cursor-pointer hover:bg-gray-200"
                  onClick={() =>
                    handleSuggestionSelect(suggestion, "pickupLocation")
                  }
                >
                  {suggestion.properties.formatted}
                </li>
              ))}
            </ul>
          )}
          <input
            type="text"
            placeholder="Dropoff Location"
            value={formData.dropoffLocation}
            onChange={(e) => handleLocationChange(e, "dropoffLocation")}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {dropoffSuggestions.length > 0 && (
            <ul className="mt-2 bg-white border border-gray-300 rounded max-h-40 overflow-auto">
              {dropoffSuggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="p-2 cursor-pointer hover:bg-gray-200"
                  onClick={() =>
                    handleSuggestionSelect(suggestion, "dropoffLocation")
                  }
                >
                  {suggestion.properties.formatted}
                </li>
              ))}
            </ul>
          )}
        </div>
      ),
    },
    {
      title: "Step 3: Package Details",
      content: (
        <div className="space-y-4">
          <input
            type="number"
            placeholder="Quantity"
            value={formData.qty}
            onChange={(e) =>
              setFormData({ ...formData, qty: e.target.value })
            }
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="number"
            placeholder="Weight (kg)"
            value={formData.weight}
            onChange={(e) =>
              setFormData({ ...formData, weight: e.target.value })
            }
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="number"
            placeholder="Length (cm)"
            value={formData.length}
            onChange={(e) =>
              setFormData({ ...formData, length: e.target.value })
            }
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="number"
            placeholder="Width (cm)"
            value={formData.width}
            onChange={(e) =>
              setFormData({ ...formData, width: e.target.value })
            }
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="number"
            placeholder="Height (cm)"
            value={formData.height}
            onChange={(e) =>
              setFormData({ ...formData, height: e.target.value })
            }
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      ),
    },
    {
      title: "Step 4: Disclaimer Questions",
      content: (
        <div className="space-y-4">
          <div>
            <label className="block mb-2 text-gray-700 font-medium">
              Is this Dangerous Goods (DG)?
            </label>
            <select
              value={formData.isDG}
              onChange={(e) =>
                setFormData({ ...formData, isDG: e.target.value === "yes" })
              }
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <label className="block mb-2 text-gray-700 font-medium">
            How will the goods be loaded?
          </label>
          <select
            value={formData.loadingMethod}
            onChange={(e) =>
              setFormData({ ...formData, loadingMethod: e.target.value })
            }
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Loading Method</option>
            <option value="Sender will load goods by hand">
              Sender will load goods by hand
            </option>
            <option value="Sender will load goods by forklift">
              Sender will load goods by forklift
            </option>
            <option value="Driver will need to load goods by hand (<25kg)">
              Driver will need to load goods by hand (less than 25kg)
            </option>
            <option value="Driver will need a hydraulic lift (>25kg)">
              Driver will need a hydraulic lift (greater than 25kg)
            </option>
            <option value="Driver will need an HIAB (>1000kg)">
              Driver will need an HIAB (greater than 1000kg)
            </option>
          </select>
          <label className="block mb-2 text-gray-700 font-medium">
            How will the items be unloaded?
          </label>
          <select
            value={formData.unloadingMethod}
            onChange={(e) =>
              setFormData({ ...formData, unloadingMethod: e.target.value })
            }
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Unloading Method</option>
            <option value="Receiver will unload goods by hand">
              Receiver will unload goods by hand
            </option>
            <option value="Receiver will unload goods by forklift">
              Receiver will unload goods by forklift
            </option>
            <option value="Driver will need to unload goods by hand (<25kg)">
              Driver will need to unload goods by hand (less than 25kg)
            </option>
            <option value="Driver will need a hydraulic lift (>25kg)">
              Driver will need a hydraulic lift (greater than 25kg)
            </option>
            <option value="Driver will need an HIAB (>1000kg)">
              Driver will need an HIAB (greater than 1000kg)
            </option>
          </select>
          <input
            type="text"
            placeholder="Driver access details"
            value={formData.driverAccess}
            onChange={(e) =>
              setFormData({ ...formData, driverAccess: e.target.value })
            }
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={formData.needsSignature}
              onChange={(e) =>
                setFormData({ ...formData, needsSignature: e.target.checked })
              }
              className="h-4 w-4"
            />
            <span>Does the delivery need to be signed for?</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={formData.moreDetails}
              onChange={(e) =>
                setFormData({ ...formData, moreDetails: e.target.checked })
              }
              className="h-4 w-4"
            />
            <span>More details required</span>
          </label>
          {/* Conditional rendering of additional message box */}
          {formData.moreDetails && (
            <textarea
              placeholder="Provide additional information"
              value={formData.additionalInfo}
              onChange={(e) =>
                setFormData({ ...formData, additionalInfo: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          )}
        </div>
      ),
    },
  ];

  const nextStep = () => {
    if (currentStep < steps.length) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };
  const handleSubmit = () => {
    emailjs
      .send("service_fgkhgr4", "template_mnf8zpw", {
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
      }, "ybWQ6M36O4DDCUJrZ")
      .then((response) => {
        alert("Form submitted: " + JSON.stringify(formData, null, 2));
      })
      .catch((error) => {
        alert("Error sending email: " + error.text);
      });
  };
  

  // const handleSubmit = () => {
  //   const templateParams = {
  //     phone_number: formData.phoneNumber,
  //     email: formData.email,
  //     job_type: formData.jobType,
  //     pickup_location: formData.pickupLocation,
  //     dropoff_location: formData.dropoffLocation,
  //     quantity: formData.qty,
  //     weight: formData.weight,
  //     length: formData.length,
  //     width: formData.width,
  //     height: formData.height,
  //     dangerous_goods: formData.isDG,
  //     loading_method: formData.loadingMethod,
  //     unloading_method: formData.unloadingMethod,
  //     driver_access: formData.driverAccess,
  //     needs_signature: formData.needsSignature ? "Yes" : "No",
  //     additional_info: formData.additionalInfo,
  //   };

  //   emailjs
  //     .send(
  //       "service_fgkhgr4", // Replace with your EmailJS service ID
  //       "template_mnf8zpw", // Replace with your EmailJS template ID
  //       templateParams,
  //       "ybWQ6M36O4DDCUJrZ" // Replace with your EmailJS user ID
  //     )
  //     .then(
  //       (response) => {
  //         alert("Form submitted successfully!");
  //         console.log(response);
  //       },
  //       (error) => {
  //         alert("Failed to submit the form. Please try again.");
  //         console.log(error);
  //       }
  //     );
  // };

  return (
    <div className="min-h-screen bg-gradient-to-r from-secondary-100 to-secondary-200 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-6">
        {/* Progress Bar */}
        <div className="relative mb-6">
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-primary-gradient h-2.5 rounded-full transition-all"
              style={{ width: `${(currentStep / steps.length) * 100}%` }}
            ></div>
          </div>
          <p className="text-center mt-2 text-sm text-gray-500">
            Step {currentStep} of {steps.length}
          </p>
        </div>

        {/* Step Content */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {steps[currentStep - 1].title}
        </h2>
        <div>{steps[currentStep - 1].content}</div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <button
            className={`px-5 py-2 rounded text-white bg-gray-400 hover:bg-gray-500 transition ${
              currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={prevStep}
            disabled={currentStep === 1}
          >
            Back
          </button>
          {currentStep === steps.length ? (
            <button
              className="px-5 py-2 rounded text-white bg-primary-gradient hover:bg-green-500 transition"
              onClick={handleSubmit}
            >
              Submit
            </button>
          ) : (
            <button
              className="px-5 py-2 rounded text-white bg-secondary-100 hover:bg-secondary-200 transition"
              onClick={nextStep}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quote;

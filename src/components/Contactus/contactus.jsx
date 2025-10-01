import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { CheckCircle, Send, MapPin, Phone, Mail, ArrowRight, Loader2 } from 'lucide-react';

const ContactUs = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });

    emailjs
      .sendForm('service_fgkhgr4', 'template_9kazwuu', form.current, {
        publicKey: 'ybWQ6M36O4DDCUJrZ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setFormStatus({ submitting: false, submitted: true, error: null });
          setFormData({ from_name: '', from_email: '', message: '' });
        },
        (error) => {
          console.log('FAILED...', error.text);
          setFormStatus({ submitting: false, submitted: false, error: error.text });
        },
      );
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-primary text-white py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-philosopher font-bold mb-4">Contact Us</h1>
            <p className="text-lg md:text-xl opacity-80">
              We're here to help. Reach out and let's start a conversation.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8">
            {/* Contact Information */}
            <div className="md:col-span-2 bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions or need assistance? We're here to help you. Reach out through any of the channels below.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-brown-200 p-3 rounded-full mr-4">
                    <MapPin className="text-secondary-100 w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Our Location</h3>
                    <p className="text-gray-600 mt-1">123 Business Street, Geelong, Australia</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-grey p-3 rounded-full mr-4">
                    <Phone className="text-secondary-100 w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Phone</h3>
                    <p className="text-gray-600 mt-1">+61 431 884 041</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-full mr-4">
                    <Mail className="text-secondary-100 w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Email</h3>
                    <p className="text-gray-600 mt-1">info@msmtranslink.com.au</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="font-medium text-gray-800 mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <p className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="md:col-span-3 bg-white p-8 rounded-lg shadow-md">
              {formStatus.submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="bg-green-100 p-4 rounded-full mb-6">
                    <CheckCircle className="text-green-600 w-12 h-12" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">Thank You!</h2>
                  <p className="text-gray-600 mb-8 max-w-md">
                    Your message has been successfully sent. We will contact you very soon!
                  </p>
                  <button 
                    onClick={() => setFormStatus({ submitting: false, submitted: false, error: null })}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors"
                  >
                    Send Another Message <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
                  <p className="text-gray-600 mb-8">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                  
                  {formStatus.error && (
                    <div className="bg-red-50 text-red-700 p-4 rounded-md mb-6">
                      There was an error sending your message. Please try again.
                    </div>
                  )}
                  
                  <form onSubmit={sendEmail} ref={form} className="space-y-6">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="from_name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="from_name"
                        id="from_name"
                        value={formData.from_name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    {/* Email Address */}
                    <div>
                      <label htmlFor="from_email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="from_email"
                        id="from_email"
                        value={formData.from_email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                        placeholder="johndoe@example.com"
                      />
                    </div>
                    
                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    
                    {/* Submit Button */}
                    <div>
                      <button
                        type="submit"
                        disabled={formStatus.submitting}
                        className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md transition-colors disabled:bg-blue-400"
                      >
                        {formStatus.submitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Send Message
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
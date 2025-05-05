
import view2 from '../../assets/view.jpg';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const contactus = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_fgkhgr4', 'template_9kazwuu', form.current, {
        publicKey: 'ybWQ6M36O4DDCUJrZ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    
    <section className="text-white relative pb-8">
     
      <div className="w-full flex flex-wrap justify-center items-center min-h-screen px-4 md:px-8 lg:px-16">
        {/* Form */}
        <form ref={form} onSubmit={sendEmail}
          className="w-[50%] max-w-4xl bg-white text-gray-700 rounded-lg shadow-lg p-6 space-y-6"
        >
          <h2 className="text-3xl font-semibold text-center text-[#75087d] mb-8">
            Get in touch
          </h2>

          {/* Full Name */}
          <div className="space-y-2">
            <label className="block text-sm font-medium">Full Name</label>
            <input
              type="text"
              name="from_name"
              placeholder="Enter your name"
              required
              className="w-full h-12 px-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-primary"
            />
          </div>

          {/* Email Address */}
          <div className="space-y-2">
            <label className="block text-sm font-medium">Email Address</label>
            <input
              type="email"
              name="from_email"
              placeholder="Enter your email ID"
              required
              className="w-full h-12 px-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-primary"
            />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label className="block text-sm font-medium">Your Message</label>
            <textarea
              name="message"
              placeholder="Enter your message"
              required
              className="w-full h-40 px-4 py-2 border-2 border-gray-300 rounded-lg resize-none focus:outline-none focus:ring focus:ring-primary"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full h-12 bg-primary-gradient text-white rounded-lg shadow-lg hover:bg-teal-600 focus:ring-4 focus:ring-teal-300 transition duration-300"
          >
            Send Message
          </button>
        </form>
       
      </div>
    </section>
  );
};

export default contactus;

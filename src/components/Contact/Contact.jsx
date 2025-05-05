import React from "react";

const Contact = () => {
  return (
    <>
      <span id="contact"></span>
      <div className="dark:bg-black dark:text-white py-14">
        <div className="container ">
          <div className="grid  rounded-3xl grid-cols-1 sm:grid-cols-3 gap-6 bg-gray-100 py-8 px-6">
            <div className="col-span-2 space-y-3">
              <h1 className="text-4xl sm:text-5xl font-bold text-secondary-200">
                Book Services
              </h1>
              <p className="text-gray-400">
              Book our services today and experience seamless logistics, efficient 3PL solutions, and secure warehouse storage. Let us handle your supply chain needs with precision and reliability.{" "}
              </p>
            </div>
            <div className="sm:grid sm:place-items-center">
              <a
                href="/contactUs"
                className="inline-block font-semibold font-philosopher rounded-md py-2 px-6 bg-primary-gradient text-white hover:bg-primary/80 duration-200 tracking-widest uppercase "
              >
                Book
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

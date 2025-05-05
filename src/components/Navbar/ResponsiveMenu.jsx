import React from "react";
import { FaUserCircle } from "react-icons/fa";
import logo from '../../assets/logo.png'
import { Navlinks } from "./Navbar";

const ResponsiveMenu = ({ showMenu }) => {
  console.log("showMenu", showMenu);
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 font-philosopher md:hidden rounded-r-xl shadow-md`}
    >
      <div className="card">
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} />
          <div>
            <img src={logo} alt="Logo" />
          </div>
        </div>
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {Navlinks.map((data) => (
              <li key={data.name}>
                <a
                  href={data.link}
                  className="mb-5 inline-block transition-colors duration-200 hover:text-primary"
                >
                  {data.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/quote"
                className="mb-5 inline-block transition-colors duration-200 hover:text-primary"
              >
                Quote
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer">
        <h1>
          <a href="/" className="transition-colors duration-200 hover:text-blue-500">
            MSMTRANSPORT
          </a>
        </h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;

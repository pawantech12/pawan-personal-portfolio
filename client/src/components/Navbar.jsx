import {
  AccountCircleOutlined,
  AccountTreeOutlined,
  AutoAwesomeOutlined,
  ContactPageOutlined,
  DataObjectOutlined,
  HomeOutlined,
  MiscellaneousServicesOutlined,
  SchoolOutlined,
} from "@mui/icons-material";
import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const navRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <header className="flex justify-center my-3 w-full">
      <nav
        className="bg-[rgba(34,36,38,.4)] border-2 border-neutral-800 flex items-center justify-between w-9/12 max-md:w-11/12 py-2 px-8 shadow-md rounded-lg  relative"
        ref={navRef}
      >
        <div className="md:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={toggleNavbar}
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex justify-between max-md:bg-zinc-900 max-md:border-2 max-md:border-neutral-800   max-md:w-fit max-md:absolute max-md:left-0 max-md:mt-3 max-md:rounded-lg  max-md:top-[100%] z-10`}
        >
          <div className="btns max-md:px-3 max-md:py-2 flex flex-col md:flex-row gap-5 text-white md:w-fit w-full">
            <button>
              <NavLink
                to="/"
                className={`px-2 py-2 rounded-full flex items-center nav-link ${
                  window.location.pathname === "/"
                    ? "active text-gray-200 bg-neutral-800"
                    : ""
                }`}
              >
                <HomeOutlined />
              </NavLink>
            </button>
            <button>
              <NavLink
                to="/about"
                className={`px-2 py-2 rounded-full flex items-center nav-link ${
                  window.location.pathname === "/about"
                    ? "active text-gray-200 bg-neutral-800"
                    : ""
                }`}
              >
                <AccountCircleOutlined />
              </NavLink>
            </button>
            <button>
              <NavLink
                to="/service"
                className={`px-2 py-2 rounded-full flex items-center nav-link ${
                  window.location.pathname === "/service"
                    ? "active text-gray-200 bg-neutral-800"
                    : ""
                }`}
              >
                <MiscellaneousServicesOutlined />
              </NavLink>
            </button>
            <button>
              <NavLink
                to="/skill"
                className={`px-2 py-2 rounded-full flex items-center nav-link ${
                  window.location.pathname === "/skill"
                    ? "active text-gray-200 bg-neutral-800"
                    : ""
                }`}
              >
                <DataObjectOutlined />
              </NavLink>
            </button>
            <button>
              <NavLink
                to="/project"
                className={`px-2 py-2 rounded-full flex items-center nav-link ${
                  window.location.pathname === "/project"
                    ? "active text-gray-200 bg-neutral-800"
                    : ""
                }`}
              >
                <AccountTreeOutlined />
              </NavLink>
            </button>
            <button>
              <NavLink
                to="/education"
                className={`px-2 py-2 rounded-full flex items-center nav-link ${
                  window.location.pathname === "/education"
                    ? "active text-gray-200 bg-neutral-800"
                    : ""
                }`}
              >
                <SchoolOutlined />
              </NavLink>
            </button>
            <button>
              <NavLink
                to="/contact"
                className={`px-2 py-2 rounded-full flex items-center nav-link ${
                  window.location.pathname === "/contact"
                    ? "active text-gray-200 bg-neutral-800"
                    : ""
                }`}
              >
                <ContactPageOutlined />
              </NavLink>
            </button>
          </div>
        </div>
        <div className="hiremebtn">
          <button className="bg-zinc-950 text-white py-2 px-3 rounded-md">
            <Link to="https://www.linkedin.com/in/pawan-kumavat-11b105297/">
              {" "}
              <AutoAwesomeOutlined /> Hire Me
            </Link>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

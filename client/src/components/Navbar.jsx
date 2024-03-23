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
import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="flex justify-center my-3 w-full">
      <nav className="bg-gray-100 flex items-center justify-between w-1/2 py-2 px-8 shadow-md rounded-lg">
        <div className="btns flex gap-5">
          <button>
            <NavLink
              to="/"
              className={`px-2 py-2 rounded-full flex items-center nav-link ${
                window.location.pathname === "/" ? "active" : ""
              }`}
            >
              <HomeOutlined className="!w-[30px] !h-[30px]" />
            </NavLink>
          </button>
          <button>
            <NavLink
              to="/about"
              className={`px-2 py-2 rounded-full flex items-center nav-link ${
                window.location.pathname === "/about" ? "active" : ""
              }`}
            >
              <AccountCircleOutlined />
            </NavLink>
          </button>
          <button>
            <NavLink
              to="/service"
              className={`px-2 py-2 rounded-full flex items-center nav-link ${
                window.location.pathname === "/service" ? "active" : ""
              }`}
            >
              <MiscellaneousServicesOutlined />
            </NavLink>
          </button>
          <button>
            <NavLink
              to="/skill"
              className={`px-2 py-2 rounded-full flex items-center nav-link ${
                window.location.pathname === "/skill" ? "active" : ""
              }`}
            >
              <DataObjectOutlined />
            </NavLink>
          </button>
          <button>
            <NavLink
              to="/project"
              className={`px-2 py-2 rounded-full flex items-center nav-link ${
                window.location.pathname === "/project" ? "active" : ""
              }`}
            >
              <AccountTreeOutlined />
            </NavLink>
          </button>
          <button>
            <NavLink
              to="/education"
              className={`px-2 py-2 rounded-full flex items-center nav-link ${
                window.location.pathname === "/education" ? "active" : ""
              }`}
            >
              <SchoolOutlined />
            </NavLink>
          </button>
          <button>
            <NavLink
              to="/contact"
              className={`px-2 py-2 rounded-full flex items-center nav-link ${
                window.location.pathname === "/contact" ? "active" : ""
              }`}
            >
              <ContactPageOutlined />
            </NavLink>
          </button>
        </div>
        <div className="hiremebtn">
          <button className="bg-zinc-950 text-white py-2 px-3 rounded-md">
            <Link>
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

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
      <nav className="bg-gray-100 flex items-center justify-between w-1/2 py-4 px-8 shadow-md rounded-lg">
        <div className="btns flex gap-5">
          <button>
            <NavLink
              to="/"
              className={`px-2 ${({ isActive }) =>
                isActive
                  ? "bg-white"
                  : ""} py-2  rounded-full flex items-center`}
            >
              <HomeOutlined />
            </NavLink>
          </button>
          <button>
            <NavLink
              to="/about"
              className={`px-2 ${(isActive) =>
                isActive
                  ? "bg-white py-2  rounded-full flex items-center"
                  : "py-2  rounded-full flex items-center"}`}
            >
              <AccountCircleOutlined />
            </NavLink>
          </button>
          <button>
            <NavLink
              to=""
              className={`px-2 ${(isActive) =>
                isActive
                  ? "bg-white py-2  rounded-full flex items-center"
                  : "py-2  rounded-full flex items-center"}`}
            >
              <MiscellaneousServicesOutlined />
            </NavLink>
          </button>
          <button>
            <NavLink
              to=""
              className={`px-2 ${({ isActive }) =>
                isActive
                  ? "bg-white"
                  : ""} py-2  rounded-full flex items-center`}
            >
              <DataObjectOutlined />
            </NavLink>
          </button>
          <button>
            <NavLink
              to=""
              className={`px-2 ${({ isActive }) =>
                isActive
                  ? "bg-white"
                  : ""} py-2  rounded-full flex items-center`}
            >
              <AccountTreeOutlined />
            </NavLink>
          </button>
          <button>
            <NavLink
              to=""
              className={`px-2 ${({ isActive }) =>
                isActive
                  ? "bg-white"
                  : ""} py-2  rounded-full flex items-center`}
            >
              <SchoolOutlined />
            </NavLink>
          </button>
          <button>
            <NavLink
              to=""
              className={`px-2 ${({ isActive }) =>
                isActive
                  ? "bg-white"
                  : ""} py-2  rounded-full flex items-center`}
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

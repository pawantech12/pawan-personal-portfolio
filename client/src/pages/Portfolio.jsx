import React from "react";
import { Link } from "react-router-dom";
import homepage from "../images/projectImage/homepage.png";
const Portfolio = () => {
  return (
    <div className="flex justify-center mt-7">
      <div className="bg-[rgba(34,36,38,.4)] border-2 border-neutral-800 w-9/12 max-md:w-11/12 shadow-md rounded-xl py-7 px-8">
        <ul className=" px-5 ">
          <li className="list-disc text-xl font-medium text-gray-200">
            Projects
          </li>
        </ul>
        <div className="flex gap-5 flex-wrap justify-center mt-4">
          <div className="rounded-xl shadow-lg w-80 border-2 border-neutral-800 bg-zinc-900 text-white flex flex-col items-center gap-2">
            <div>
              <img
                src={homepage}
                className="object-cover rounded-s-xl rounded-es-none"
                alt="NotePlus app Using MERN Stack"
              />
            </div>
            <div className=" px-5 pb-2">
              <Link className="text-xl font-medium" to="/project/1">
                NotePlus - Note Taking Web Application
              </Link>
              <p className="text-base text-gray-200">
                NotePlus is a web application built with the MERN stack
                (MongoDB, Express.js, React.js, Node.js) with Vite for
                frontend...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

import React from "react";
import { Link } from "react-router-dom";
import github from "../images/GitHub.png";
import linkedin from "../images/LinkedIn.png";
const ConnectMe = () => {
  return (
    <div className="flex justify-center my-7">
      <div className="text-center bg-[rgba(34,36,38,.4)] border-2 border-neutral-800 w-9/12 shadow-md rounded-xl py-7 px-8">
        <h4 className="text-white text-xl font-medium">Connect with me!</h4>
        <p className="text-gray-200 text-lg mt-2">
          I'm always interested in collaborating on new projects or simply
          connecting with other developers. Feel free to reach out to me on
          below Links.
        </p>
        <div className="flex justify-center mt-3 gap-4">
          <div className="links bg-gray-200 w-fit p-2 rounded-lg">
            <Link
              className="bg-white w-28 h-7"
              to="https://github.com/pawantech12/"
              target="_blank"
            >
              <img src={github} className="w-8 h-8" alt="" />
            </Link>
          </div>
          <div className="links bg-gray-200 w-fit p-2 rounded-lg">
            <Link
              className="bg-white w-28 h-7"
              to="https://www.linkedin.com/in/pawan-kumavat-11b105297/"
              target="_blank"
            >
              <img src={linkedin} className="w-8 h-8" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectMe;

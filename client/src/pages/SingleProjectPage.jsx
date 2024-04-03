import React from "react";
import homepage from "../images/projectImage/homepage.png";
import { Link } from "react-router-dom";
import { CodeOutlined, PlayArrowOutlined } from "@mui/icons-material";
const SingleProjectPage = () => {
  return (
    <div className="flex justify-center mt-7">
      <div className="bg-[rgba(34,36,38,.4)] border-2 border-neutral-800 w-9/12 max-md:w-11/12 shadow-md rounded-xl py-7 px-8">
        <ul className=" px-5 ">
          <li className="list-disc text-xl font-medium text-gray-200">
            Project Details
          </li>
        </ul>
        <div className="projectDetails mt-2 flex flex-col gap-3">
          <div className="img">
            <img src={homepage} className="rounded-xl" alt="" />
          </div>
          <div className="projectContents">
            <h2 className="text-2xl font-medium text-white">
              <Link>NotePlus - Note Taking Web Application</Link>
            </h2>
            <p className="text-lg text-gray-200 mt-2">
              NotePlus is a full-stack application built for managing notes. The
              project utilizes the MERN stack, leveraging MongoDB for its
              flexible database structure, Express.js for the robust backend
              framework, React.js for the interactive frontend, and Node.js to
              tie everything together. Tailwind CSS provides a utility-first
              approach to styling, ensuring a clean and responsive user
              interface. For version control, NotePlus leverages Git and Github,
              allowing for seamless collaboration, code tracking, and easy
              deployment. The frontend is deployed on Vercel, a platform known
              for its simplicity and ease of use, while the backend resides on
              Render, a platform optimized for scaling Node.js applications.
              This separation ensures optimal performance for both the user
              interface and the data processing aspects of NotePlus.
            </p>
            <div className="btns flex justify-center max-[439px]:flex-col mt-5 gap-3">
              <button className="bg-zinc-950 font-medium text-white py-2 px-3 rounded-md">
                <Link
                  className="flex items-center gap-1 justify-center"
                  to="https://note-taking-website-six.vercel.app/"
                >
                  {" "}
                  <PlayArrowOutlined /> View Demo
                </Link>
              </button>
              <button className="bg-white font-medium text-zinc-950 py-2 px-3 rounded-md">
                <Link
                  className="flex items-center gap-1 justify-center"
                  to="https://github.com/pawantech12/note-taking-website"
                >
                  <CodeOutlined /> View Source Code
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProjectPage;

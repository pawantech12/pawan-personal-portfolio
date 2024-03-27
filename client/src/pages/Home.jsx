import { AutoAwesomeOutlined, ContentCopyOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Skill from "./Skill";

const Home = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText("pawankumavat042@gmail.com")
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
      })
      .catch((err) => console.error("Failed to copy:", err));
  };
  return (
    <>
      <div className="flex justify-center mt-7">
        <div className="bg-neutral-800 w-8/12 shadow-md rounded-xl py-7 px-8">
          <div className="header">
            <ul className="list-disc flex justify-between px-5 text-lg">
              <li className="font-medium text-white">
                Full Stack Developer(MERN)
              </li>
              <li className="bg-emerald-100 list-none px-3 py-1 uppercase text-base font-medium text-emerald-600 rounded-full">
                Available for Freelancer
              </li>
            </ul>
            <div className="flex justify-between mt-3 items-center">
              <div className="intro w-8/12 flex flex-col justify-between gap-5">
                <h1 className="text-4xl font-medium text-white">
                  I'm Pawan Kumavat
                </h1>
                <p className="text-gray-300 font-medium">
                  TYBSc Computer Science student at Mumbai University,
                  passionate about web development. Building strong skills in
                  MERN Stack (React, Node.js, Express, MongoDB) and PHP/MySQL.
                  Currently expanding my knowledge with Next.js and Java.
                </p>
                <div className="btn flex gap-3 items-center">
                  <button className="bg-zinc-950 text-white py-2 px-3 rounded-md">
                    <Link>
                      {" "}
                      <AutoAwesomeOutlined /> Hire Me
                    </Link>
                  </button>
                  <button
                    className="bg-transparent text-white py-2 px-3 rounded-md border border-gray-200"
                    onClick={copyToClipboard}
                  >
                    {" "}
                    <ContentCopyOutlined /> {copied ? "Copied!" : "Copy Email"}
                  </button>
                </div>
              </div>
              <div className="profileImg">
                <img
                  src="https://media.licdn.com/dms/image/D4E03AQHqzcEgfVRctQ/profile-displayphoto-shrink_200_200/0/1709874047641?e=1717027200&v=beta&t=BMkW8H6KuB8k4yFXszYpqv8_0mIBUyHbx2sUb6_POPk"
                  alt=""
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Skill />
    </>
  );
};

export default Home;

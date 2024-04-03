import React from "react";
import html from "../images/HTML5.png";
import css from "../images/CSS3.png";
import js from "../images/JavaScript.png";
import php from "../images/PHP.png";
import mysql from "../images/MySQL.png";
import mongodb from "../images/MongoDB.png";
import reactjs from "../images/React.png";
import expressjs from "../images/Express.png";
import nodejs from "../images/Node.js.png";
import bootstrap from "../images/Bootstrap.png";
import tailwindcss from "../images/Tailwind CSS.png";
import materialui from "../images/Material UI.png";
import nodemon from "../images/Nodemon.png";
import postman from "../images/Postman.png";
import npm from "../images/NPM.png";
import vite from "../images/Vite.js.png";

const Skill = () => {
  return (
    <div className="flex justify-center mt-7">
      <div className="w-9/12 max-md:w-11/12 bg-[rgba(34,36,38,.4)] border-2 border-neutral-800 shadow-md rounded-xl py-7 px-8">
        <ul className=" px-5 ">
          <li className="list-disc text-xl font-medium text-gray-200">
            Skills
          </li>
        </ul>
        <div className="flex gap-5 flex-wrap justify-center mt-4">
          <div className="skillCard rounded-xl p-5 shadow-lg w-32 border-2 border-neutral-800 bg-zinc-900 text-white flex flex-col items-center gap-2">
            <img src={html} alt="" className="w-16" />
            <h5>HTML5</h5>
          </div>
          <div className="skillCard rounded-xl p-5 shadow-lg w-32 border-2 border-neutral-800 bg-zinc-900 text-white flex flex-col items-center gap-2">
            <img src={css} alt="" className="w-16" />
            <h5>CSS3</h5>
          </div>
          <div className="skillCard rounded-xl p-5 shadow-lg w-32 border-2 border-neutral-800 bg-zinc-900 text-white flex flex-col items-center gap-2">
            <img src={js} alt="" className="w-16" />
            <h5>JavaScript</h5>
          </div>
          <div className="skillCard rounded-xl p-5 shadow-lg w-32 border-2 border-neutral-800 bg-zinc-900 text-white flex flex-col items-center gap-2">
            <img src={php} alt="" className="w-16" />
            <h5>PHP</h5>
          </div>
          <div className="skillCard rounded-xl p-5 shadow-lg w-32 border-2 border-neutral-800 bg-zinc-900 text-white flex flex-col items-center gap-2">
            <img src={mysql} alt="" className="w-16" />
            <h5>MySQL</h5>
          </div>
          <div className="skillCard rounded-xl p-5 shadow-lg w-32 border-2 border-neutral-800 bg-zinc-900 text-white flex flex-col items-center gap-2">
            <img src={mongodb} alt="" className="w-16" />
            <h5>MongoDB</h5>
          </div>
          <div className="skillCard rounded-xl p-5 shadow-lg w-32 border-2 border-neutral-800 bg-zinc-900 text-white flex flex-col items-center gap-2">
            <img src={reactjs} alt="" className="w-16" />
            <h5>ReactJS</h5>
          </div>
          <div className="skillCard rounded-xl p-5 shadow-lg w-32 border-2 border-neutral-800 bg-zinc-900 text-white flex flex-col items-center gap-2">
            <img src={expressjs} alt="" className="w-16" />
            <h5>ExpressJS</h5>
          </div>
          <div className="skillCard rounded-xl p-5 shadow-lg w-32 border-2 border-neutral-800 bg-zinc-900 text-white flex flex-col items-center gap-2">
            <img src={nodejs} alt="" className="w-16" />
            <h5>NodeJS</h5>
          </div>
          <div className="skillCard rounded-xl p-5 shadow-lg w-32 border-2 border-neutral-800 bg-zinc-900 text-white flex flex-col items-center gap-2">
            <img src={bootstrap} alt="" className="w-16" />
            <h5>Bootstrap</h5>
          </div>
          <div className="skillCard rounded-xl p-5 shadow-lg w-32 border-2 border-neutral-800 bg-zinc-900 text-white flex flex-col items-center gap-2">
            <img src={tailwindcss} alt="" className="w-16" />
            <h5>TailwindCSS</h5>
          </div>
          <div className="skillCard rounded-xl p-5 shadow-lg w-32 border-2 border-neutral-800 bg-zinc-900 text-white flex flex-col items-center gap-2">
            <img src={materialui} alt="" className="w-16" />
            <h5>MaterialUI</h5>
          </div>
          <div className="skillCard rounded-xl p-5 shadow-lg w-32 border-2 border-neutral-800 bg-zinc-900 text-white flex flex-col items-center gap-2">
            <img src={postman} alt="" className="w-16" />
            <h5>Postman</h5>
          </div>
          <div className="skillCard rounded-xl p-5 shadow-lg w-32 border-2 border-neutral-800 bg-zinc-900 text-white flex flex-col items-center gap-2">
            <img src={nodemon} alt="" className="w-16" />
            <h5>Nodemon</h5>
          </div>
          <div className="skillCard rounded-xl p-5 shadow-lg w-32 border-2 border-neutral-800 bg-zinc-900 text-white flex flex-col items-center gap-2">
            <img src={npm} alt="" className="w-16" />
            <h5>NPM</h5>
          </div>
          <div className="skillCard rounded-xl p-5 shadow-lg w-32 border-2 border-neutral-800 bg-zinc-900 text-white flex flex-col items-center gap-2">
            <img src={vite} alt="" className="w-16" />
            <h5>Vite.js</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;

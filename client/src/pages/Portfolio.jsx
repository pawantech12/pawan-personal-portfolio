import React from "react";

const Portfolio = () => {
  return (
    <div className="flex justify-center mt-7">
      <div className="bg-neutral-800 w-9/12 shadow-md rounded-xl py-7 px-8">
        <ul className=" px-5 ">
          <li className="list-disc text-xl font-medium text-gray-200">
            Projects
          </li>
        </ul>
        <div className="flex gap-5 flex-wrap justify-center mt-4">
          <div className="rounded-xl p-5 shadow-lg w-72 text-center bg-zinc-900 text-white flex flex-col items-center gap-2">
            <div>
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

import { SchoolOutlined } from "@mui/icons-material";
import React from "react";

const Education = () => {
  return (
    <div className="flex justify-center mt-7">
      <div className="bg-[rgba(34,36,38,.4)] border-2 border-neutral-800 w-9/12 max-md:w-11/12 shadow-md rounded-xl py-7 px-8">
        <ul className=" px-5 ">
          <li className="list-disc text-xl font-medium text-gray-200">
            Education
          </li>
        </ul>
        <div className="mt-5 flex flex-col gap-5">
          <ol className="relative border-s-2 border-neutral-700 dark:border-gray-700">
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-neutral-700 rounded-full -start-4 ring-3 ring-neutral-800">
                <SchoolOutlined className="text-gray-200" />
              </span>
              <div className="p-4 bg-zinc-900 border-2 border-neutral-800 rounded-lg shadow-sm ">
                <div className="items-center justify-between mb-3 sm:flex">
                  <time className="mb-1 text-sm font-medium text-gray-200 sm:order-last sm:mb-0 bg-neutral-800 py-1 px-3 rounded-full">
                    2021-2024
                  </time>
                  <div className="">
                    <h4 className="text-xl text-white font-medium">
                      Bachelor of Science in Computer Science
                    </h4>
                    <small className="text-[15px] font-medium text-gray-300">
                      K.M. Agrawal College of Arts, Commerce and Science (Kalyan
                      | Maharashtra)
                    </small>
                  </div>
                </div>
                <div className="p-3 text-sm italic font-normal text-gray-200  rounded-lg bg-neutral-800">
                  Pursuing Bachelor of Science in Computer Science at K.M.
                  Agrawal College, honing my skills in programming, data
                  structures, algorithms, and software development.
                </div>
              </div>
            </li>
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-neutral-700 rounded-full -start-4 ring-3 ring-neutral-800">
                <SchoolOutlined className="text-gray-200" />
              </span>
              <div className="p-4 bg-zinc-900 border-2 border-neutral-800 rounded-lg shadow-sm ">
                <div className="items-center justify-between mb-3 sm:flex">
                  <time className="mb-1 text-sm font-medium text-gray-200 sm:order-last sm:mb-0 bg-neutral-800 py-1 px-3 rounded-full">
                    2019-2021
                  </time>
                  <div className="">
                    <h4 className="text-xl text-white font-medium">
                      HSC in Science
                    </h4>
                    <small className="text-[15px] font-medium text-gray-300">
                      Hill Spring International Jr. College of Science and
                      Commerce (Kalyan | Maharashtra)
                    </small>
                  </div>
                </div>
                <div className="p-3 text-sm italic font-normal text-gray-200  rounded-lg bg-neutral-800">
                  Graduated with a Higher Secondary Certificate (HSC) in Science
                  from Hill Spring International Jr. College of Science and
                  Commerce
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Education;

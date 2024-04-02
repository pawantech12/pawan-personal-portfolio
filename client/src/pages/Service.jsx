import React from "react";

const Service = () => {
  return (
    <div className="flex justify-center mt-7">
      <div className="bg-[rgba(34,36,38,.4)] border-2 border-neutral-800 w-9/12 shadow-md rounded-xl py-7 px-8">
        <ul className=" px-5 ">
          <li className="list-disc text-xl font-medium text-gray-200">
            Services
          </li>
        </ul>
        <div className="flex gap-5 flex-wrap justify-center mt-4">
          <div className="rounded-xl p-5 shadow-lg w-72 text-center border-2 border-neutral-800 bg-zinc-900 text-white flex flex-col items-center gap-2">
            <h4 className="text-xl font-medium">
              HTML, CSS & JavaScript Development
            </h4>
            <p className="text-base text-gray-200">
              I build user-friendly and visually appealing websites using
              fundamental web development technologies like HTML, CSS, and
              JavaScript.
            </p>
          </div>
          <div className="rounded-xl p-5 shadow-lg w-72 text-center border-2 border-neutral-800 bg-zinc-900 text-white flex flex-col items-center gap-2">
            <h4 className="text-xl font-medium">
              Responsive Design & UI/UX Optimization
            </h4>
            <p className="text-base text-gray-200">
              I ensure your website looks great and functions flawlessly across
              all devices (desktop, mobile, tablet) by creating responsive
              designs and focusing on user experience (UX) and user interface
              (UI) elements.
            </p>
          </div>
          <div className="rounded-xl p-5 shadow-lg w-72 text-center border-2 border-neutral-800 bg-zinc-900 text-white flex flex-col items-center gap-2">
            <h4 className="text-xl font-medium">PHP & MySQL Development</h4>
            <p className="text-base text-gray-200">
              I create dynamic and data-driven web applications using PHP for
              server-side scripting and MySQL for database management.
            </p>
          </div>
          <div className="rounded-xl p-5 shadow-lg w-72 text-center border-2 border-neutral-800 bg-zinc-900 text-white flex flex-col items-center gap-2">
            <h4 className="text-xl font-medium">MERN Stack Development</h4>
            <p className="text-base text-gray-200">
              I leverage the MERN stack (MongoDB, Express.js, React.js, and
              Node.js) to develop robust and scalable web applications that
              handle both front-end and back-end functionalities.
            </p>
          </div>
          <div className="rounded-xl p-5 shadow-lg w-72 text-center border-2 border-neutral-800 bg-zinc-900 text-white flex flex-col items-center gap-2">
            <h4 className="text-xl font-medium">API Development & Testing</h4>
            <p className="text-base text-gray-200">
              I can seamlessly integrate third-party APIs into your web
              application to enhance functionality and data exchange. My
              expertise covers both building APIs and thorough testing to ensure
              smooth operation.
            </p>
          </div>
          <div className="rounded-xl p-5 shadow-lg w-72 text-center border-2 border-neutral-800 bg-zinc-900 text-white flex flex-col items-center gap-2">
            <h4 className="text-xl font-medium">
              Bootstrap & Tailwind CSS Development
            </h4>
            <p className="text-base text-gray-200">
              I utilize popular front-end frameworks like Bootstrap and Tailwind
              CSS to expedite the development process, while maintaining clean
              and maintainable code.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;

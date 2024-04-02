import React from "react";

const About = () => {
  return (
    <div className="flex justify-center mt-7">
      <div className="bg-[rgba(34,36,38,.4)] border-2 border-neutral-800 w-9/12 shadow-md rounded-xl py-7 px-8">
        <ul className=" px-5 ">
          <li className="list-disc text-xl font-medium text-gray-200">About</li>
        </ul>
        <div className="about mt-5">
          <h2 className="text-2xl font-medium text-white">
            Hi there, I'm Pawan Kumavat
          </h2>
          <p className="text-gray-200 mt-4 text-lg">
            I'm a passionate web developer with a strong foundation in HTML,
            CSS, JavaScript (including Vue.js), PHP, MySQL, and the MERN stack
            (MongoDB, Express.js, React.js, Node.js). I'm currently pursuing a
            Bachelor of Science in Computer Science (BScCS) at Mumbai
            University, and I'm always eager to learn new technologies. Right
            now, I'm diving into the world of Next.js and Java, expanding my
            skillset to tackle even more complex projects.
          </p>
        </div>
        <div className="border-t-2 border-gray-200 my-5"></div>
        <h4 className="text-white text-xl font-medium">
          What I'm Passionate About?
        </h4>
        <ul className="list-disc px-5 text-gray-200 text-lg mt-2">
          <li>
            I find the process of transforming ideas into interactive and
            visually appealing web experiences incredibly rewarding.
          </li>
          <li>
            I'm always eager to learn new technologies and stay up-to-date with
            the ever-evolving web development landscape.
          </li>
          <li>
            I believe in the power of collaboration and enjoy working with
            others to create innovative web solutions.
          </li>
        </ul>
        <div className="border-t-2 border-gray-200 my-5"></div>
      </div>
    </div>
  );
};

export default About;

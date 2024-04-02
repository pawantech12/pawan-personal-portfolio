import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex justify-center my-7">
      <div className="bg-[rgba(34,36,38,.4)] border-2 text-center border-neutral-800 w-9/12 shadow-md rounded-xl py-4 px-8">
        <p className="text-gray-200">
          &copy; {currentYear} Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

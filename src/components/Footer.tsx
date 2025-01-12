import { currentYear } from "@/utils";
import React from "react";

const Footer = () => {
  return (
    <footer className="">
      <div className="grid-cols-2 gap-7 grid md:grid-cols-6"></div>
      <div className="text-center">
        <p>
          {currentYear} Dansam Travels and Educonsult &#169; All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

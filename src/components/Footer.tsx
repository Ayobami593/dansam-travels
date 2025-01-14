import { currentYear } from "@/utils";
import React from "react";

const CustomFooter = () => {
  return (
    <footer className="">
      <div className="flex flex-wrap gap-4">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="text-center">
        <p>
          Dansam Travels and Educonsult &#169; {currentYear} || All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default CustomFooter;

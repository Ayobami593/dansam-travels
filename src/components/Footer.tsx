import { currentYear } from "@/utils";
import React from "react";

const CustomFooter = () => {
  return (
    <footer className="">
      <div className="flex flex-wrap md:flex-row md:justify-between justify-center  gap-4">
        <div>
          <p>Dansam travels & Educonsult consult</p>
        </div>
        <div>
          <p>Quick Link</p>
        </div>
        <div>
          <p>Contact Us</p>
        </div>
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

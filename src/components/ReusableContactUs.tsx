import React from "react";
import { RiWhatsappFill } from "react-icons/ri";

const ReusableContactUs = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=+79950833328&&text=Welcome%20to%20Dansam%20travels%20and%Educonsult!%20How%20can%20we%20help%20you?"
      target="_blank"
      className="inline-flex gap-2 rounded bg-[#389494] opacity-70 p-2"
    >
      <RiWhatsappFill size={40} className="text-green-500" />
      <div className="text-white text-start">
        <p className="text-lg font-medium md:text-xl md:font-semibold">
          Whatsapp
        </p>
        <p className="text-xs md:text-sm">Click to chat now</p>
      </div>
    </a>
  );
};

export default ReusableContactUs;

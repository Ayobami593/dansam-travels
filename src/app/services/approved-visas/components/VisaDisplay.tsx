import React from "react";

interface VisaDisplay {
  name: string;
  image: string;
}

const VisaDisplay = ({ name, image }: VisaDisplay) => {
  return (
    <div className="space-y-2 ">
      <p className="text-lg md:text-2xl font-medium">{name}</p>
      <img src={image} alt="" className="rounded-md h-full" />
    </div>
  );
};

export default VisaDisplay;

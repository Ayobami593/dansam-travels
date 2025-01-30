import Link from "next/link";
import React from "react";
import { FaAngleRight } from "react-icons/fa";

const ServiceCard = ({ images, title, description, link }) => {
  const truncateText = (text, wordLimit = 60) => {
    if (!text) return "";
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };
  return (
    <div className="rounded-lg shadow-lg space-y-4">
      <div className="overflow-hidden rounded-t-lg">
        <img
          src={images}
          alt=""
          className="h-60 w-full transition-transform duration-300 ease-in-out transform hover:scale-110"
        />
      </div>
      <div className="p-4 flex flex-col gap-3 justify-center items-center">
        <p>{title}</p>
        <p className="text-sm text-center">{truncateText(description, 12)}</p>
        <Link
          href={link}
          className="inline-flex items-center p-2 rounded-md gap-1 bg-[#235e5e] text-white hover:border hover:border-[#235e5e] hover:bg-white hover:text-[#235e5e]"
        >
          Learn More <FaAngleRight className="mt-1" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;

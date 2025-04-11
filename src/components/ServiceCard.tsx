import Link from "next/link";
import React from "react";
import { FaAngleRight } from "react-icons/fa";

interface ServiceCards {
  images: string;
  title: string;
  description: string;
  link: string;
}

const ServiceCard = ({ images, title, description, link }: ServiceCards) => {
  const truncateText = (text: string, wordLimit = 60) => {
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
          className="inline-flex items-center p-2 rounded-md gap-1 bg-primary text-white hover:border hover:border-[#0074D9] hover:bg-white hover:text-[#0074D9]"
        >
          Learn More <FaAngleRight className="mt-1" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;

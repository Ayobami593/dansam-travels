import { currentYear, email } from "@/utils";
import Link from "next/link";
import React from "react";
import { FaLocationDot, FaTiktok } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { MdFacebook } from "react-icons/md";

const CustomFooter = () => {
  return (
    <footer className="text-white font-suse space-y-4">
      <div className="flex flex-col md:flex-row md:justify-between justify- px-8 md:px-16 gap-4">
        <div className="space-y-2">
          <img src="/companylogoWhite.png" alt="" className="size-20" />
          <div className="space-y-1 text-justify">
            <p>About Dansam Travels and Educonsult</p>
            <p>
              Dansam Travels And Educonsult - (BN ) is a registered company with
              the Cooperate Affairs Commission of Nigeria (CAC).
            </p>
            <p>
              It is the best, affordable and trusted Travel and Educonsult
              Agency in Nigeria
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <p>Quick Link</p>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link className="hover:text-inherit" href="/about-us">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:text-inherit">
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/services/visa-assistance"
                className="hover:text-inherit"
              >
                Visa Assistance
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-inherit"
                href="/studydestinations/study-in-russia"
              >
                Study in Russia
              </Link>
            </li>
            <li>
              <Link className="hover:text-inherit" href="/faqs">
                FAQs
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <p>Contact Us</p>
          <div className="space-y-3">
            <ul className="space-y-2 text-gray-400">
              <li className="inline-flex gap-1 items-center">
                <FaLocationDot />
                <strong>Head Office:</strong> Kursk Oblast, Russia
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=+79950833328&&text=Welcome%20to%20Dansam%20travels%20and%Educonsult!%20How%20can%20we%20help%20you?"
                  target="_blank"
                  className="hover:text-inherit"
                >
                  +7 995 083-33-28
                </a>
              </li>
              <li>
                <a className="hover:text-inherit" href={`mailto:${email}`}>
                  dansamtravelseduconsult@gmail.com
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-4">
              <a
                className="hover:text-inherit"
                href="https://www.tiktok.com/@dansam.travels.ed?_t=ZM-8tDmXjMUdxF&_r=1"
                target="_blank"
              >
                <FaTiktok size={26} />
              </a>
              <a
                className="hover:text-inherit"
                href="https://www.facebook.com/profile.php?id=61572456352894"
                target="_blank"
              >
                <MdFacebook size={26} />
              </a>
              <a
                className="hover:text-inherit"
                href="https://www.instagram.com/dansamtravels/profilecard/?igsh=MWdpdHkxcDltY2NibQ=="
                target="_blank"
              >
                <FiInstagram size={26} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center border-t pt-2">
        <p>
          Dansam Travels and Educonsult &#169; {currentYear} || All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default CustomFooter;

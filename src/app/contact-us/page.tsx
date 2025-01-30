import React from "react";
import { CgMailOpen } from "react-icons/cg";
import { email, emailTwo, phoneNumber } from "@/utils";
import AppLayout from "@/components/Layout";

const Contactus = () => {
  return (
    <AppLayout>
      <div className="flex flex-col py-4 md:py-12 md:flex-row gap-4 md:gap-8">
        <div className="flex-1 space-y-3">
          <img
            src="/studyAbroad.png"
            alt="Study abroad"
            className="h-[21rem] w-full"
          />
          <div className="text-center">
            <p className="font-bold text-xl md:text-3xl">
              Our office locations
            </p>
            <p>
              <strong>Head Office:</strong> Kursk Oblast, Russia
            </p>
            <p>
              <strong>Branch Office:</strong> Ibadan, Oyo state, Nigeria. Office
              coming soon
            </p>
          </div>
        </div>
        <div className="flex-1 font- text-xl text-center md:text-4xl space-y-6">
          <p>No matter where you are, we would always be here for you!</p>
          <p className="border-b border-black pb-4 mx-8">
            Have questions or enquiries ?
          </p>
          <div>
            <p className="inline-flex items-center gap-2">
              <CgMailOpen size={26} /> Send us an Email
            </p>
            <a
              href={`mailto:${email}`}
              className="block text-[#235e5e] mt-2 hover:text-[#235e5e]"
            >
              dansamtravelseduconsult@gmail.com
            </a>{" "}
            <a
              href={`mailto:${emailTwo}`}
              className="block text-[#235e5e] mt-2 hover:text-[#235e5e]"
            >
              info@dansamtravels.com
            </a>
          </div>
          <div>
            <p> Give us a call or message us</p>
            <a
              href={`tel:${phoneNumber}`}
              className="block text-[#235e5e] mt-2 hover:text-[#235e5e]"
            >
              +7 995 083-33-28
            </a>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Contactus;

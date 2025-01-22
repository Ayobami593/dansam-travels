import AppLayout from "@/components/Layout";
import React from "react";
import { RiWhatsappFill } from "react-icons/ri";

const FlightBooking = () => {
  return (
    <AppLayout>
      <div className="flex justify-center items-center py-32 md:py-28">
        <div className="text-center space-y-3 md:text-lg">
          <p>WELCOME</p>
          <p>
            Dansam Travels can assist you in booking your local and
            international flight
          </p>
          <p className="md:font-bold font-medium text-sm md:text-xl">
            To get a QUOTE PRICE WITHIN 5 MINUTES for your Flight ticket
            request.
          </p>
          <p className="text-xs md:text-lg">
            Kindly drop us a message on WHATSAPP ON THE LINK BELOW
          </p>
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
        </div>
      </div>
    </AppLayout>
  );
};

export default FlightBooking;

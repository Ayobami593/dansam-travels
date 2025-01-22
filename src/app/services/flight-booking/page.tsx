import React from "react";
import Layout from "../../../components/Layout";
import { RiWhatsappFill } from "react-icons/ri";

const FlightBooking = () => {
  return (
    <Layout>
      <div className="flex justify-center">
        <div className="text-center space-y-2">
          <p>WELCOME</p>
          <p>
            Dansam Travels can assist you in booking your local and
            international flight
          </p>
          <p className="md:font-bold font-medium text-lg md:text-2xl">
            To get a QUOTE PRICE WITHIN 5 MINUTES for your Flight ticket
            request.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=+79950833328&&text=Welcome%20to%20Dansam%20travels%20and%Educonsult!%20How%20can%20we%20help%20you?"
            target="_blank"
            className="inline-flex gap-2 rounded bg-[#389494] p-4"
          >
            <RiWhatsappFill
              size={40}
              className="text-green-500 fixed bottom-40 right-1"
            />
            <div className="text-white text-start">
              <p className="text-lg font-medium md:text-xl md:font-semibold">
                Whatsapp
              </p>
              <p>Click to chat now</p>
            </div>
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default FlightBooking;

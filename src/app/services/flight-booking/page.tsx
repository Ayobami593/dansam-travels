import AppLayout from "@/components/Layout";
import React from "react";
import ReusableContactUs from "@/components/ReusableContactUs";

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
          <ReusableContactUs />
        </div>
      </div>
    </AppLayout>
  );
};

export default FlightBooking;

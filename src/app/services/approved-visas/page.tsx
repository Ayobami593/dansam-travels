import AppLayout from "@/components/Layout";
import { approvedVisas } from "@/utils";
import React from "react";
import VisaDisplay from "./components/VisaDisplay";

const ApprovedVisas = () => {
  return (
    <AppLayout>
      <div>
        <h1 className="font-bold text-xl md:text-3xl">
          SOME OF OUR PREVIOUS PROCESSED VISAS | VISA GALLERY
        </h1>
        <div className="w-full pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-5 w-full">
            {approvedVisas.map((visa, index) => (
              <VisaDisplay key={index} name={visa.name} image={visa.image} />
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default ApprovedVisas;

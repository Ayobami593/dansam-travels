"use client";

import AppLayout from "@/components/Layout";
import React, { useEffect, useState } from "react";

const VisaServices = () => {
  const [imageToShow, setImageToShow] = useState(false);

  useEffect(() => {
    const changeInterval = setInterval(() => {
      setImageToShow((prev) => !prev);
    }, 6000);

    return () => clearInterval(changeInterval);
  }, []);
  return (
    <AppLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
        <div className="text-justify space-y-3">
          <h1 className="font-bold">
            VISA ASSISTANCE | DOCUMENTATIONS | VISA SUPPORT
          </h1>
          <p>
            Dansam Travels & Educonsult provides visa assistance, visa support
            and documentations, we also help our clients to prepare for visa
            interviews and provide them with all the necessary documents to
            obtain their visa easily. We have built a trusted corporate
            portfolio across embassies and consulates in Nigeria and beyond, and
            this gives us a kind of unparalleled leverage over the competition.
            We pursue all those little applications, facilitating and providing
            advisory services in relation to visa acquisition for clients.
          </p>
          <div>
            <h2 className="font-bold pb-2">Visa Consultation</h2>
            <p>
              We provide visa consultation and visa support packages, providing
              visa forms, requirements and documentations.
            </p>
          </div>
          <div className="space-y-2">
            <p className="uppercase font-semibold">
              our main destinations include
            </p>
            <ul className="list-none text-justify font-medium">
              <li>Russia </li>
              <li>Belarus</li>
              <li>China</li>
            </ul>
          </div>
        </div>
        <div className="transition-opacity duration-500 ease-in">
          {imageToShow ? (
            <img
              src="/studyvisa.png"
              alt="Get a study visa"
              className="size- rounded-md h-[30rem] w-full"
            />
          ) : (
            <img
              src="/visaAssistance.png"
              alt="Get a study visa"
              className="size- rounded-md h-[30rem] w-full"
            />
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default VisaServices;

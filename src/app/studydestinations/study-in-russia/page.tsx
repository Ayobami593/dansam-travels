"use client";

import React from "react";
import AppLayout from "@/components/Layout";

const StudyInRussia = () => {
  return (
    <AppLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 py-4 font-suse">
        <div className="space-y-3">
          <h1 className="text-base font-bold">Study in Russia</h1>
          <div className="space-y-4">
            <p>
              Russia is a highly educated country, with a long academic
              tradition. Its universities have spawned many great minds, among
              them a number of notable Nobel prize winners, cosmonaut and
              economist, the likes of Yuri Gagarin: first human in space. Russia
              has more than 880 universities and the government is investing
              heavily in making improvements to the system. President Vladimir
              Putin has spoken about an &quot;educational revolution&quot;.
            </p>
            <p>
              Russia offers international students a variety of courses at both
              Sciences and Arts majors. Courses in Russia cover Bachelor’s,
              Master’s Degree, PhD and professional training and career
              development courses.Some courses are in English language with
              affordable tuition fee and discount.
            </p>
            <p>
              Courses are also in Russian language for those who are interested,
              compulsory one(1) year Russian language course is required for
              those with zero knowledge in Russian language. Russian language
              courses are also available for international students who wish to
              learn, practice and master a new exciting language.
            </p>
            <p>
              Whether you are looking to study in Moscow, Saint-Petersburg,
              Novosibirsk and more, Dansam Travels and Educonsult can help you
              with preparing for your studies in Russia.
            </p>
          </div>
          <ul className="list-disc px-10">
            <li>Very high quality of education</li>
            <li>Tuition is extremely inexpensive</li>
            <li>Top rated universities that are professional and modern</li>
            <li>Global degree recognition</li>
            <li>Wide variety of courses</li>
          </ul>
          <div className="font-medium">
            <p className="pb-4">Application | Processing Fee: ₦400,000</p>
            <p className="pb-2">APPLICATION PROCEDURES FOR STUDY IN RUSSIA</p>
            <div className="space-y-2">
              <p>- REQUIRED DOCUMENTS</p>
              <ul className="list-decimal px-10">
                <li>Copy of completed Application for Admission Form.</li>
                <li>
                  Copy of Passport (only the page(s) that shows your photo,
                  personal details and signature)
                </li>
                <li>
                  Copy of Secondary and Senior Secondary High School Result or
                  Certificates | WAEC | NECO
                </li>
                <li>
                  Copy of Bachelor Degree Certificate and Mark Sheet |
                  Transcripts (applicable only for postgraduate applicants e.g.
                  MBA,MSC).
                </li>
                <li>Copy of Recent Passport Photograph</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p>BASIC INFORMATION</p>
              <ul className="list-decimal px-10">
                <li>
                  Half or full Tuition fee for first must be paid before arrival
                  in Russia.
                </li>
                <li>Admission processing duration: 2-6 weeks</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p>SCHOOL FEES</p>
              <ul className="list-decimal px-10">
                <li>
                  Tuition Fee from $1500/year for Undergraduate (BSs.) | medical
                  courses from $3000/per year
                </li>
                <li>Tuition Fee from $2000/year For Masters Degree (MSc.)</li>{" "}
                <li>Hostel Accommodation from $500/year</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <img
            src="/russia1.png"
            alt="Russia study flier one"
            className="size- rounded-md"
          />
          <img
            src="/russiatwo.png"
            alt="Russia study flier two"
            className="size- rounded-md"
          />
        </div>
      </div>
    </AppLayout>
  );
};

export default StudyInRussia;

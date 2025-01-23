"use client";

import React from "react";
import AppLayout from "@/components/Layout";

const StudyInRussia = () => {
  return (
    <AppLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
        <div>
          <p>Study in Russia</p>
          <div className="space-y-4">
            <p>
              Russia is a highly educated country, with a long academic
              tradition. Its universities have spawned many great minds, among
              them a number of notable Nobel prize winners, cosmonaut and
              economist, the likes of Yuri Gagarin: first human in space. Russia
              has more than 880 universities and the government is investing
              heavily in making improvements to the system. President Vladimir
              Putin has spoken about an "educational revolution".
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
        </div>
        <div className="space-y-6">
          <img src="/russia1.png" alt="" className="size-" />
          <img src="/russiatwo.png" alt="" />
        </div>
      </div>
    </AppLayout>
  );
};

export default StudyInRussia;

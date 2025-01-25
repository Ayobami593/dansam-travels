"use client";

import AppLayout from "@/components/Layout";
import React from "react";

const StudyInChina = () => {
  return (
    <AppLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 py-4 font-suse">
        <div className="space-y-3">
          <p className="font-bold">Study in China</p>
          <div className="space-y-4">
            <p>
              There are many programs in the CHINA and each have their own
              requirements for admission. Many schools that offer undergraduate
              degrees will require students to submit SAT or ACT test scores
              prior to submitting their application. In addition to
              undergraduate programs, postgraduate programs may require the
              GMAT, GRE or MCAT test depending on the program to which you are
              applying. have to submit a TOEFL or IELTS score for consideration
              to an undergraduate or postgraduate program. Although most schools
              require a TOEFL or IELTS score, there are some schools that do not
              require them.
            </p>
            <p>
              Nigerian undergraduate students wanting to study in CHINA are
              expected to have a WAEC or NECO result with at least five/six
              credits including English and Mathematics.
            </p>
            <p>
              Nigerian postgraduate students looking to study in CHINA are
              expected to have a minimum of a Second Class Lower (2:2) with a
              high GPA in the last two years of their undergraduate studies or
              Second Class Upper (2:1).
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <img src="/studyAbroadII.png" alt="" className="size- rounded-md" />
          <img src="/" alt="" className="size- rounded-md" />
        </div>
      </div>
    </AppLayout>
  );
};

export default StudyInChina;

"use client";

import AppLayout from "@/components/Layout";
import React from "react";

const StudyInBelarus = () => {
  return (
    <AppLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 py-4 font-suse">
        <div className="space-y-3">
          <p className="font-bold">Study in Belarus</p>
          <div className="space-y-4">
            <p>
              Belarus has a well-structured education system, with a strong
              emphasis on higher education. The country boasts several
              universities and higher education institutions that are recognized
              for their academic programs and research contributions.
            </p>
            <strong>
              Here are some key points about the Belarusian education system,
              particularly focusing on higher education:
              <ul className="list-decimal px-10 font-normal text-justify">
                <li>
                  <strong> Diverse Universities:</strong> Belarus is home to a
                  variety of universities, including the Belarusian State
                  University (BSU), which is the oldest and one of the most
                  prestigious. Other notable institutions include the Belarusian
                  National Technical University, Belarusian State Medical
                  University, and the Belarusian State University of Informatics
                  and Radioelectronics.
                </li>
                <li>
                  <strong>Strong Academic Programs:</strong> The universities
                  offer a wide range of programs in fields such as engineering,
                  medicine, humanities, social sciences, and natural sciences.
                  Many programs are available in both Belarusian and Russian,
                  with an increasing number offered in English to attract
                  international students.
                </li>
                <li>
                  <strong>Research and Innovation:</strong> Belarusian
                  universities are involved in significant research activities,
                  often collaborating with international institutions. The
                  government supports research initiatives, particularly in
                  technology and science, which helps foster innovation.
                </li>
                <li>
                  <strong>International Collaboration:</strong> Belarusian
                  universities actively participate in international exchange
                  programs and partnerships, allowing students to study abroad
                  and collaborate on research projects. This helps enhance the
                  global perspective of students and faculty alike.
                </li>
                <li>
                  <strong>Accessibility:</strong> Higher education in Belarus is
                  relatively affordable compared to many Western countries,
                  making it accessible to a broader range of students. There are
                  also scholarship opportunities for both local and
                  international students.
                </li>
              </ul>
            </strong>
          </div>
          <div className="font-medium">
            <p className="pb-2">
              To study in Belarus as a Nigerian student, here are the typical
              requirements:
            </p>
            <div className="space-y-2">
              <p>Admission Requirements</p>
              <ul className="list-decimal px-10">
                <li>You must be at least 17 years old.</li>
                <li>
                  You need to have a minimum of 5 credits in relevant subjects
                  in your O'Level results (WAEC or NECO).
                </li>
                <li>
                  Since English is the language of instruction, you may need to
                  provide proof of English language proficiency, such as IELTS
                  or TOEFL but as a Nigerian you don't need this.
                </li>
                <li>
                  You'll need to provide a medical certificate showing you're
                  fit to study.
                </li>
                <li>A police clearance certificate may be required.</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="uppercase">Documents required</p>
              <ul className="list-decimal px-10">
                <li>
                  A valid international passport with at least 2 years'
                  validity.
                </li>
                <li>A certified copy of your birth certificate.</li>
                <li>
                  Certified copies of your O'Level results (WAEC or NECO).
                </li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <img src="/russia1.png" alt="" className="size- rounded-md" />
          <img src="/russiatwo.png" alt="" className="size- rounded-md" />
        </div>
      </div>
    </AppLayout>
  );
};

export default StudyInBelarus;

"use client";

import { Faqs } from "@/utils";
import { useState } from "react";
import { IoMdArrowDropright, IoMdArrowDropup } from "react-icons/io";

interface FaqItems {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

interface FaqComponentProps {
  faqs: Faqs[];
}

const FaqItem = ({ question, answer, isOpen, onToggle }: FaqItems) => (
  <div className="faq border-b border-gray-100 mb-[2px]">
    <div
      className="faq-title cursor-pointer p-4 bg-[#389494] text-white flex gap-2 items-center"
      onClick={onToggle}
    >
      <span>{isOpen ? <IoMdArrowDropup /> : <IoMdArrowDropright />}</span>{" "}
      <span>{question}</span>
    </div>
    {isOpen && (
      <div className="faq-content p-4 bg-gray-100 shadow rounded-b">
        {answer}
      </div>
    )}
  </div>
);

const FaqComponent = ({ faqs }: FaqComponentProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number | null) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      <h1 className="text-center mb-3 font-semibold text-lg md:text-3xl">
        Frequently Asked Questions(FAQs)
      </h1>
      {faqs.map((faq, index: number) => (
        <FaqItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          onToggle={() => toggleFaq(index)}
        />
      ))}
    </div>
  );
};

export default FaqComponent;

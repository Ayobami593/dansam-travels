import { Faqs } from "@/utils";
import { useState } from "react";

interface FaqItems {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FaqItem = ({ question, answer, isOpen, onToggle }: FaqItems) => (
  <div className="faq border-b border-gray-300">
    <div
      className="faq-title cursor-pointer p-4 bg-blue-600 text-white flex justify-between items-center"
      onClick={onToggle}
    >
      <span>{question}</span>
      <span>{isOpen ? "-" : "+"}</span>
    </div>
    {isOpen && <div className="faq-content p-4 bg-gray-100">{answer}</div>}
  </div>
);

const FaqComponent = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number | null) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container max-w-2xl mx-auto bg-white shadow-md rounded">
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

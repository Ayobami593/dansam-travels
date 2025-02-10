import FaqComponent from "@/components/Faqs";
import AppLayout from "@/components/Layout";
import { faqs } from "@/utils";
import React from "react";

const page = () => {
  return (
    <AppLayout>
      <FaqComponent faqs={faqs} />
    </AppLayout>
  );
};

export default page;

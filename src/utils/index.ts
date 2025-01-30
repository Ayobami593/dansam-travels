export const currentYear = new Date().getFullYear();
export const email = "dansamtravelseduconsult@gmail.com";
export const emailTwo = "info@dansamtravels.com";
export const phoneNumber = "+7 995 083-33-28";

export interface Faqs {
  question: string;
  answer: string;
}

export const faqs: Faqs[] = [
  {
    question: "Is it expensive to study in Russia?",
    answer:
      "Russia is quite cheap compared to Canada, UK, and some other European countries.",
  },
  {
    question: "Can I work as a student?",
    answer:
      "Yes, as a student you have the right to work in any city of the Russian Federation.",
  },
  {
    question: "How many hours can I work per week?",
    answer:
      "In Russia, you can work for as many hours as you want depending on you and the job you find.",
  },
  {
    question: "Are there jobs for students in Russia?",
    answer:
      "Yes, there are jobs for students in Russia e.g., delivery jobs, IT, and many more.",
  },
  {
    question: "Can I stay back after studies?",
    answer:
      "Yes, you can stay back after your studies by applying for Permanent Residence and it will be granted within six months after graduation.",
  },
  {
    question: "Can I come in with my dependent?",
    answer:
      "Yes, some universities can assist students in bringing their family to join them in Russia. You can contact us for more details.",
  },
  {
    question: "How long does it take to get my visa?",
    answer:
      "At the Russian Embassy in Abuja, after the submission and interview, it will take 3-5 days to get your visa.",
  },
  {
    question: "Do I need proof of funds?",
    answer: "Russia student visa doesn't need proof of funds.",
  },
  {
    question: "Can I study in English language in Russia?",
    answer: "Yes, you can study any course in English language.",
  },
  {
    question: "How is the cost of living in Russia?",
    answer:
      "The cost of living is not high depending on the city and you around 300 dollars a month.",
  },
];

export const approvedVisas = [
  { name: "Russian Study Visa", image: "/visas/firstVisa.jpg" },
  { name: "Russian Study Visa", image: "/visas/secondVisa.jpg" },
  { name: "Russian Study Visa", image: "/visas/thirdVisa.jpg" },
];

export const services = [
  {
    images: "/visaAssistance.png",
    title: "Visa Assistance",
    description:
      "Dansam Travels & Educonsult provides visa assistance, visa support and documentations, we also help our clients to prepare for visa interviews and provide",
    link: "/services/visa-assistance",
  },
  {
    images: "/visas/firstVisa.jpg",
    title: "Approved Visa",
    description:
      "See some of our already processed and approved visa applications",
    link: "/services/approved-visas",
  },
  {
    images: "/bookflight.png",
    title: "Flight Booking",
    description:
      " Dansam Travels & Educonsult can assist you in booking your local and international flight",
    link: "/services/flight-booking",
  },
  {
    images: "/russia1.png",
    title: "Study in Russia",
    description:
      "Russia is a highly educated country, with a long academic tradition. Its universities have spawned many great minds, among them ",
    link: "/studydestinations/study-in-russia",
  },
  {
    images: "/countries/Belarus .jpg",
    title: "Study in Belarus",
    description:
      "Belarus has a well-structured education system, with a strong emphasis on higher education. The country boasts several universities",
    link: "/studydestinations/study-in-belarus",
  },
  {
    images: "/countries/China .jpg",
    title: "Study in China",
    description:
      "There are many programs in the CHINA and each have their own requirements for admission. Many schools that offer undergraduate degrees ",
    link: "/studydestinations/study-in-china",
  },
];

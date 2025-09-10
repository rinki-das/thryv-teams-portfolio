"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What technologies do you use for development?",
    answer:
      "We mainly use Next.js, React, React Native, Tailwind CSS, and TypeScript. Backend includes Node.js, Firebase, or Express.",
  },
  {
    question: "Do you provide responsive design?",
    answer:
      "Yes! All our projects are fully responsive and optimized for mobile, tablet, and desktop.",
  },
  {
    question: "How can I contact you for a project?",
    answer:
      "You can reach out via the contact form in this portfolio or by email at your@email.com.",
  },
  {
    question: "Do you work on freelance projects?",
    answer:
      "Absolutely! We take freelance projects of all sizes, from startups to established businesses, delivering high-quality solutions.",
  },
  {
    question: "What is your typical process for freelance projects?",
    answer:
      "We start with understanding your requirements, create a roadmap, share wireframes or prototypes, implement the solution, and ensure thorough testing before launch.",
  },
  {
    question: "How do you charge for freelance projects?",
    answer:
      "We usually charge based on project scope. Small projects can have fixed pricing, while larger or ongoing work may use hourly rates. We always provide a clear estimate upfront.",
  },
  {
    question: "Can you work with clients remotely?",
    answer:
      "Yes! We collaborate seamlessly with clients worldwide using video calls, project management tools, and real-time communication to ensure smooth workflow.",
  },
  {
    question: "How do you handle project revisions?",
    answer:
      "We include a reasonable number of revisions in the project scope. Additional revisions can be discussed and agreed upon if needed.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="max-w-3xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <button
              className={`w-full text-left p-5 flex justify-between items-center transition-colors duration-300 ${
                openIndex === index
                  ? "bg-purple-100 text-black font-semibold"
                  : "bg-gray-100 text-black font-medium hover:bg-gray-200"
              }`}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span>{item.question}</span>
              <span className="text-2xl">{openIndex === index ? "−" : "+"}</span>
            </button>

            <div
              className={`px-5 overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-96 py-4" : "max-h-0"
              }`}
            >
              <p className="text-gray-700">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

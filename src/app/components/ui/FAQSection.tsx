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
      "We mainly use Next.js, React, React Native, Tailwind CSS, and TypeScript for frontend and mobile apps. Our backend stack includes Node.js, Express.js, Firebase, and MySQL. We also work with Sanity CMS, Flask, REST APIs, and third-party integrations like Razorpay, Cashfree, and Exotel for payments and real-time communication. This allows us to build scalable, secure, and high-performance applications.",
  },
  {
    question: "Do you provide responsive design?",
    answer:
      "Yes! Every project we deliver is fully responsive and optimized for mobile, tablet, and desktop devices. We follow modern UI/UX principles, ensuring pixel-perfect layouts, smooth animations, and fast-loading experiences across all screen sizes.",
  },
  {
    question: "How can I contact you for a project?",
    answer:
      "You can reach out through the contact form on this portfolio website or directly via email at rinroy351@gmail.com. You can also check our freelancing profile on Freelancer (https://www.freelancer.in/u/rinkid51) and connect with us there.",
  },
  {
    question: "Do you work on freelance projects?",
    answer:
      "Absolutely! We take on freelance projects of all sizes—from MVPs for startups to enterprise-grade applications. Our team ensures clear communication, on-time delivery, and high-quality work tailored to your business needs.",
  },
  {
    question: "What is your typical process for freelance projects?",
    answer:
      "We start by discussing your requirements and goals in detail. Then, we create a roadmap and share wireframes or prototypes for feedback. After approval, we move into development, testing, and deployment. Throughout the process, we provide regular updates and ensure transparency at every stage.",
  },
  {
    question: "How do you charge for freelance projects?",
    answer:
      "We usually charge based on the scope and complexity of the project. For small projects, we offer fixed pricing, while larger or long-term projects may be billed hourly or milestone-based. Before starting, we always share a detailed proposal and cost breakdown so everything is clear upfront.",
  },
  {
    question: "Can you work with clients remotely?",
    answer:
      "Yes! We have successfully worked with clients across India, the US, and other countries. We collaborate using video calls, Slack, Trello, GitHub, and other project management tools, ensuring smooth communication and efficient delivery.",
  },
  {
    question: "How do you handle project revisions?",
    answer:
      "We include a reasonable number of revisions in the project scope. Our goal is to make sure you're completely satisfied. If additional revisions are needed beyond the agreed scope, we discuss them openly and adjust timelines and pricing if required.",
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

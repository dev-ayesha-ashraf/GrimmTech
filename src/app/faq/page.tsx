"use client";

import { useState } from "react";


interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "How Does Grimm Technologies Work?",
    answer: "Grimm Technologies uses state-of-the-art neural networks to create custom automation workflows for enterprises. We begin with a deep dive into your data, followed by model selection and rigorous fine-tuning to ensure our AI aligns perfectly with your business logic."
  },
  {
    id: 2,
    question: "Is Grimm Technologies easy to integrate with?",
    answer: "Yes. We offer robust APIs and SDKs that allow you to integrate our AI capabilities directly into your existing stack. Whether you use cloud-native or legacy systems, our engineers ensure a smooth, low-friction integration process."
  },
  {
    id: 3,
    question: "Which AI models does Grimm Technologies support?",
    answer: "We support a wide array of architectures, including Large Language Models (LLMs), Convolutional Neural Networks (CNNs) for vision, and Recurrent Neural Networks (RNNs) for forecasting. We are framework-agnostic and can deploy using TensorFlow, PyTorch, or JAX."
  }
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>

      <section className="relative font-mulish bg-white py-4">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-[brand-primary]">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 text-md max-w-xl mx-auto">
                Find answers to common questions about our platform and services
              </p>
            </div>

            <div className="space-y-3" id="faq-section">
              {faqData.map((faq) => (
                <div
                  key={faq.id}
                  className="rounded-lg overflow-hidden border border-gray-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full flex justify-between items-center px-4 py-3 font-semibold text-gray-800 bg-white hover:bg-[brand-primary]/5 focus:outline-none cursor-pointer"
                    aria-expanded={openId === faq.id}
                  >
                    <span className="text-left text-base">{faq.question}</span>
                    <span
                      className={`text-[brand-primary] text-xl transition-transform duration-200 ${openId === faq.id ? "rotate-180" : ""
                        }`}
                    >
                      ▾
                    </span>
                  </button>

                  <div
                    className={`px-4 overflow-hidden transition-all duration-200 ${openId === faq.id
                      ? "py-3 border-t border-gray-100"
                      : "max-h-0 py-0"
                      }`}
                  >
                    <div className="text-gray-600 text-md leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
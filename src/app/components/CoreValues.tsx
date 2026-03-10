// app/components/CoreValues.tsx
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface CoreValue {
  title: string;
  description: string;
  icon: React.ReactNode;
  special?: boolean;
}

const initialCoreValues: CoreValue[] = [
  {
    title: "Excellence",
    description:
      "We are committed to delivering superior quality in everything we build and offer, ensuring our business clients and partners benefit from consistent, world-class performance and a lasting competitive edge.",
    icon: (
      <path d="M12 2l2.39 4.85 5.35.78-3.87 3.77.91 5.32L12 14.9l-4.78 2.52.91-5.32-3.87-3.77 5.35-.78L12 2z" />
    ),
  },
  {
    title: "Integrity",
    description:
      "Ethical conduct and open communication underpin every decision we make. We uphold the highest industry standards to foster lasting trust with our clients, users, and partners.",
    icon: (
      <path d="M12 2l8 4v6c0 5.25-3.25 10.74-8 12-4.75-1.26-8-6.75-8-12V6l8-4zM11 14l6-6-1.41-1.42L11 11.17 8.41 8.59 7 10l4 4z" />
    ),
  },
  {
    title: "Customer Focus",
    description:
      "Serving the needs of our enterprise clients and their end users sits at the heart of what we do. Our platforms are designed to streamline payment flows and deliver an outstanding user experience.",
    icon: (
      <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
    ),
  },
  {
    title: "Meritocracy",
    description:
      "We believe in recognizing skill, dedication, and results. Advancement and opportunity within our organization are driven by performance and individual potential.",
    icon: <path d="M12 2l3 7h7l-5.5 4.5L18 22l-6-3.5L6 22l1.5-8.5L2 9h7l3-7z" />,
  },
  {
    title: "Progressiveness",
    description:
      "We embrace emerging technologies, continuous learning, and forward-thinking strategies to drive growth for our business, our ecosystem, and everyone we work with.",
    icon: (
      <path d="M12 2c-1.1 0-2 .9-2 2v7H7l5 5 5-5h-3V4c0-1.1-.9-2-2-2zm-7 18v2h14v-2H5z" />
    ),
  },
  {
    title: "More Solutions",
    description: "",
    icon: <></>,
    special: true,
  },
];

const additionalCoreValues: CoreValue[] = [
  {
    title: "Innovation",
    description:
      "We continuously explore new technologies and approaches to stay ahead in the payments landscape, crafting pioneering solutions that create real value for our clients and partners.",
    icon: (
      <path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79s7.15 2.71 9.88 0c1.36-1.35 2.04-3.16 2.04-4.95h2c0 1.98-.78 3.95-2.34 5.51-3.12 3.12-8.19 3.12-11.31 0-3.12-3.12-3.12-8.19 0-11.31 3.12-3.12 8.19-3.12 11.31 0l3.08-3.07V2.12h6v8z" />
    ),
  },
  {
    title: "Collaboration",
    description:
      "We champion teamwork across departments and with external partners to achieve shared goals and deliver greater impact for all stakeholders in our ecosystem.",
    icon: (
      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
    ),
  },
  {
    title: "Transparency",
    description:
      "We communicate openly and honestly with all stakeholders, ensuring full clarity in our processes, pricing structures, and the way we make decisions.",
    icon: (
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
    ),
  },
  {
    title: "Sustainability",
    description:
      "We are committed to building long-term value while remaining mindful of the environmental and social impact of our business practices.",
    icon: (
      <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2zM12 5.83L15.93 15.5l-3.93-1.88L8.07 15.5 12 5.83z" />
    ),
  },
];

function CoreValueCard({ title, description, icon, special, onClick }: CoreValue & { onClick?: () => void }) {
  if (special) {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="p-8 rounded-2xl shadow-lg flex flex-col justify-center bg-brand-primary items-center text-center cursor-pointer"
        onClick={onClick}
      >
        <button className="inline-block font-mulish px-6 py-3 md:px-[20px] md:py-[14px] text-brand-black rounded-lg text-xs md:text-[14px] font-semibold md:font-bold shadow hover:scale-95 transition-transform bg-brand-white w-[55%] border border-brand-black/10">
          More Solutions
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative p-8 pt-14 rounded-[40px] shadow-lg flex flex-col border border-brand-primary/30 text-left bg-brand-white"
    >
      <div className="absolute -top-8 left-6 w-16 h-16 flex items-center justify-center rounded-lg bg-brand-primary shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="theme(colors.brand-black)" viewBox="0 0 24 24">
          {icon}
        </svg>
      </div>
      <h3 className="text-[22px] font-semibold mb-4 text-brand-black">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}

export default function CoreValues() {
  const [showAllValues, setShowAllValues] = useState(false);
  const [displayedValues, setDisplayedValues] = useState(initialCoreValues);

  const handleMoreServicesClick = () => {
    setShowAllValues(true);
    setDisplayedValues([
      ...initialCoreValues.filter(value => !value.special),
      ...additionalCoreValues
    ]);
  };

  return (
    <section className="relative w-full py-20 font-mulish">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex justify-center items-center gap-2">
          <span className="w-4 h-4 md:w-5 md:h-5">
            <svg
              aria-hidden="true"
              className="w-4 h-4 md:w-5 md:h-5 text-brand-primary"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M256 56c110.5 0 200 89.5 200 200s-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56m0-48C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 168c-44.2 0-80 35.8-80 80s35.8 80 80 80 80-35.8 80-80-35.8-80-80-80z"
              />
            </svg>
          </span>
          <span className="font-bold text-[18px] text-brand-black">
            About Company
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-2 text-brand-black">
          The Principles Behind Grimm Technologies
        </h2>
        <div className="flex justify-center">
          <p className="text-lg text-brand-black/70 mb-16 w-full lg:w-[45%]">
            "At Grimm Technologies, we are grounded in a commitment to quality, ethical conduct, and putting customers first. We foster a merit-driven culture, recognize accomplishment, and pursue innovation to build advanced payment solutions that uplift businesses and communities."
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-10 ${showAllValues ? 'md:grid-cols-3' : ''}`}>
          {displayedValues.map((value, i) => (
            <CoreValueCard
              key={i}
              {...value}
              onClick={value.special ? handleMoreServicesClick : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
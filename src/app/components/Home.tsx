"use client";

import Navbar from "./Navbar";

export default function PurposeHome() {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="px-8 relative flex flex-col items-center justify-center pb-20 bg-brand-light md:[background:linear-gradient(270deg,theme(colors.brand-primary/80)_40%,theme(colors.brand-white)_40%)]">

      <div className="absolute inset-0 bg-brand-black/5 pointer-events-none"></div>

      <div className="relative container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-20">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Icon List */}
          <ul className="flex items-center space-x-2">
            <li className="flex items-center space-x-2">
              <span className="w-4 h-4 md:w-5 md:h-5">
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 md:w-5 md:h-5 text-brand-primary"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"
                  />
                </svg>
              </span>
              <span className="text-sm md:text-[16px] text-brand-black font-mulish font-light md:font-normal">
                Introducing Grimm Technologies
              </span>
            </li>
          </ul>

          {/* Heading */}
          <h1 className="font-mulish font-bold text-2xl md:text-[52px] text-brand-black leading-snug md:leading-[1.1em]">
            Powering Secure, One-Tap Payments Across the World
          </h1>

          {/* Paragraph */}
          <p className="text-brand-black/80 font-mulish text-[18px] font-normal">
            <strong>Grimm Technologies </strong> is a cutting-edge payment processing platform built to seamlessly connect merchants and consumers on a global scale. Our dependable, intuitive one-tap checkout experience removes friction from every transaction, supporting a wide range of payment methods for unmatched ease of use.
          </p>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button
              onClick={() => handleScrollToSection("about")}
              className="inline-block font-mulish px-6 py-3 md:px-[35px] md:py-[17px] text-brand-black rounded-lg text-xs md:text-[14px] font-semibold md:font-bold shadow hover:scale-95 transition-transform bg-brand-primary"
            >
              About Us
            </button>
            <button
              onClick={() => handleScrollToSection("contact")}
              className="inline-block font-mulish px-6 py-3 md:px-[35px] md:py-[17px] text-brand-black rounded-lg text-xs md:text-[14px] font-semibold md:font-bold shadow border-2 border-brand-primary hover:scale-95 transition-transform bg-brand-white"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="hidden md:flex justify-center relative">
          <img
            src="./secure-transaction.png"
            alt="purpose_technologies illustration"
            className="w-[550px] h-auto"
          />
        </div>
      </div>
    </section>
  );
}
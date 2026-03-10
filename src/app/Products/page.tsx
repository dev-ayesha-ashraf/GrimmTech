import { Check } from "lucide-react";

export default function Products() {
  return (
    <section className="relative pb-12 font-mulish mt-[20px] lg:mt-[-66px]" id="products">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8">

        {/* First Column */}
        <div className="relative bg-brand-black rounded-lg font-mulish py-[40px] px-[50px] shadow space-y-6 text-white w-full lg:w-[40%]">
          <h2 className="text-[25px] font-bold">What We Offer:</h2>
          <ul className="space-y-3">
            <li className="font-medium text-brand-primary">Collections (Pay-In Service)</li>
            <li className="flex items-center space-x-2">
              <Check className="text-brand-primary w-4 h-4" />
              <span>Mobile Wallets</span>
            </li>
            <li className="flex items-center space-x-2">
              <Check className="text-brand-primary w-4 h-4" />
              <span>Debit & Credit Cards</span>
            </li>
          </ul>
          <ul className="space-y-3">
            <li className="font-medium text-brand-primary">Disbursements (Pay-Out Service)</li>
            <li className="flex items-center space-x-2">
              <Check className="text-brand-primary w-4 h-4" />
              <span>Mobile Wallets</span>
            </li>
            <li className="flex items-center space-x-2">
              <Check className="text-brand-primary w-4 h-4" />
              <span>IBFT</span>
            </li>
          </ul>
        </div>

        {/* Second Column */}
        <div className="bg-white rounded-[20px] shadow p-6 space-y-6 w-full">
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">

            <ul className="space-y-4 lg:w-1/2 order-2 lg:order-1">
              <li className="flex items-center">
                <span className="text-brand-primary mr-3">
                  <Check className="w-5 h-5" strokeWidth={3} />
                </span>
                <span className="text-gray-800 text-base">Digital Payments</span>
              </li>
              <li className="flex items-center">
                <span className="text-brand-primary mr-3">
                  <Check className="w-5 h-5" strokeWidth={3} />
                </span>
                <span className="text-gray-800 text-base">Multi-Platform Compatibility</span>
              </li>
              <li className="flex items-center">
                <span className="text-brand-primary mr-3">
                  <Check className="w-5 h-5" strokeWidth={3} />
                </span>
                <span className="text-gray-800 text-base">End-to-End Transaction Security</span>
              </li>
              <li className="flex items-center">
                <span className="text-brand-primary mr-3">
                  <Check className="w-5 h-5" strokeWidth={3} />
                </span>
                <span className="text-gray-800 text-base">Adaptive Web Application</span>
              </li>
              <li className="flex items-center">
                <span className="text-brand-primary mr-3">
                  <Check className="w-5 h-5" strokeWidth={3} />
                </span>
                <span className="text-gray-800 text-base">Split Payment Functionality</span>
              </li>
              <li className="flex items-center">
                <span className="text-brand-primary mr-3">
                  <Check className="w-5 h-5" strokeWidth={3} />
                </span>
                <span className="text-gray-800 text-base">PIN & Access Protection</span>
              </li>
            </ul>

            {/* Heading + Paragraph - Right on lg */}
            <div className="space-y-4 lg:w-1/2 order-1 lg:order-2">
              <h3 className="text-2xl font-semibold text-brand-black">
                The Grimm Technologies Suite:
              </h3>
              <p className="text-gray-600 leading-relaxed">
                A fast, frictionless one-tap checkout solution built for every type of payment collection and transfer. We proudly serve the following business sectors:
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
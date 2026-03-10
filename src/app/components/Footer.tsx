"use client";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Footer() {
  // Function to handle smooth scrolling
  const pathname = usePathname();

  // Function to handle smooth scrolling
  const handleScrollToSection = (sectionId: string) => {
    if (pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <footer className="bg-brand-black text-brand-white pt-10 font-mulish">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-700 mt-10">
        {/* About Company */}
        <div className="bg-brand-primary p-[40px] rounded-[30px]">
          <h4 className="text-xl font-semibold text-brand-black mb-4">About Company</h4>
          <p className="text-md leading-relaxed mb-4 text-brand-black">
            Grimm Technologies is constructing the landscape of internet business across the region. We deliver an integrated, potent payment interface that flawlessly joins businesses to financial networks.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col text-center items-center">
          <h4 className="text-xl font-semibold text-brand-primary mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => handleScrollToSection("products")}
                className="hover:text-brand-primary cursor-pointer"
              >
                Products
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollToSection("about")}
                className="hover:text-brand-primary cursor-pointer"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollToSection("collections")}
                className="hover:text-brand-primary cursor-pointer"
              >
                Collections
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollToSection("clients")}
                className="hover:text-brand-primary cursor-pointer"
              >
                Clients
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollToSection("contact")}
                className="hover:text-brand-primary cursor-pointer"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>

        <div className="flex flex-col text-center items-center">
          <h4 className="text-xl font-semibold text-brand-primary mb-4">Documentation</h4>
          <ul className="space-y-2">
            <li><a href="/refund-policy" className="hover:text-brand-primary">Refund Policy</a></li>
            <li><a href="/terms-conditions" className="hover:text-brand-primary">Terms & Conditions</a></li>
            <li><a href="/privacy-policy" className="hover:text-brand-primary">Privacy Policy</a></li>
            <li><a href="/faq" className="hover:text-brand-primary">FAQ's</a></li>
          </ul>
        </div>

        {/* Social Links */}
        {/* <div>
          <h4 className="text-xl font-semibold text-white mb-4">Social Links</h4>
          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full p-3 transition-all duration-300 transform hover:scale-110 hover:rotate-12 hover:bg-[#253885]"
            >
              <Facebook className="w-6 h-6 text-[#253885] hover:text-white transition-colors duration-300" />
            </a>
            <a
              href="#"
              className="bg-white rounded-full p-3 transition-all duration-300 transform hover:scale-110 hover:-rotate-12 hover:bg-[#253885]"
            >
              <Twitter className="w-6 h-6 text-[#253885] hover:text-white transition-colors duration-300" />
            </a>
            <a
              href="#"
              className="bg-white rounded-full p-3 transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:bg-[#253885]"
            >
              <Instagram className="w-6 h-6 text-[#253885] hover:text-white transition-colors duration-300" />
            </a>
            <a
              href="#"
              className="bg-white rounded-full p-3 transition-all duration-300 transform hover:scale-110 hover:-rotate-6 hover:bg-[#253885]"
            >
              <Linkedin className="w-6 h-6 text-[#253885] hover:text-white transition-colors duration-300" />
            </a>
          </div>
        </div> */}
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
        <img
          src="/logo.png"
          alt="Logo"
          width={60}
          height={60}
        />
        <p className="mt-4 md:mt-0">© Copyright – Grimm Technologies 2026. All rights reserved.</p>
      </div>
    </footer>
  );
}
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full h-[80px] bg-white flex items-center justify-between px-8 sticky top-0 z-[100] shadow-md border-b border-gray-100">
      {/* Desktop Logo */}
      <div className="cursor-pointer">
        <img
          src="logo.png"
          alt="Logo"
          className="h-[60px] w-auto object-contain"
        />
      </div>

      <ul className="hidden md:flex flex-1 justify-center space-x-10 text-lg font-medium text-brand-dark">
        <li>
          <Link href="/" className="text-brand-primary hover:text-brand-primary/80 transition-colors cursor-pointer">
            Home
          </Link>
        </li>
        <li>
          <a href="/contact">
            <button className="hover:text-brand transition-colors cursor-pointer">
              Contact
            </button>
          </a>
        </li>
      </ul>

      <button
        onClick={() => setOpen(true)}
        className="md:hidden p-2 rounded-lg text-brand-primary hover:bg-brand-primary/10 transition cursor-pointer"
      >
        <Menu size={28} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black z-40 cursor-pointer"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.4 }}
              className="fixed top-0 left-0 h-full w-[60%] bg-brand-white shadow-2xl z-50 flex flex-col p-8"
            >
              <div className="flex items-center justify-between mb-12">
                {/* Mobile Logo */}
                <div className="cursor-pointer">
                  <img
                    src="logo.png"
                    alt="Logo"
                    className="h-[65px] w-auto object-contain"
                  />
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 text-brand-black bg-brand-primary cursor-pointer rounded-md hover:bg-brand-primary/80 transition"
                >
                  <X size={28} />
                </button>
              </div>
              <div className="flex flex-col space-y-8 text-xl font-semibold text-brand-black">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="hover:text-brand transition-colors cursor-pointer"
                >
                  Home
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="hover:text-brand transition-colors cursor-pointer"
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
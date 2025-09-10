"use client";

import { useState } from "react";
import { X, Menu } from "lucide-react";
import { motion, AnimatePresence, animate } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "home", label: "Home" },
    { href: "services", label: "Services" },
    { href: "why-us", label: "Why us" },
    { href: "contact", label: "Contact" },
    { href: "faq", label: "faq" },

  ];

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80; // offset for sticky header
      animate(window.scrollY, y, {
        duration: 0.8,
        ease: "easeInOut",
        onUpdate: (latest) => window.scrollTo(0, latest),
      });
    }
    setIsOpen(false);
  };

  const overlayVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 0.6 },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  const drawerVariants = {
    initial: { x: "100%" },
    animate: { x: 0, transition: { type: "spring", stiffness: 260, damping: 30 } },
    exit: { x: "100%", transition: { type: "spring", stiffness: 260, damping: 30 } },
  };

  return (
    <header className="w-full sticky top-0 z-50 ">
      <div className="mx-6 md:mx-20 my-3">
        <div className="flex justify-between items-center px-6 py-4 rounded-xl shadow-md bg-white">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900 tracking-wide">
              thryv
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <motion.button
                key={link.href}
                whileHover={{ y: -2 }}
                onClick={() => handleScroll(link.href)}
                className="relative text-gray-700 font-medium transition-colors hover:text-amber-400"
              >
                {link.label}
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={28} className="text-gray-800" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              variants={overlayVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="fixed top-0 right-0 w-64 h-full bg-white text-gray-800 p-6 z-50 flex flex-col shadow-xl"
              variants={drawerVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="self-end mb-6 p-2 rounded-full hover:bg-gray-100 transition"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <motion.button
                    key={link.href}
                    whileHover={{ x: 6 }}
                    onClick={() => handleScroll(link.href)}
                    className="text-lg font-semibold text-gray-700 hover:text-amber-400 transition-colors text-left"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

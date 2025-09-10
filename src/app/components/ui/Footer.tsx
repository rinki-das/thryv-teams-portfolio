"use client";

import React from "react";
import { Mail, Facebook, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-5">
            <h2 className="text-3xl font-extrabold text-black tracking-tight">
              thryv
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Fueling growth with passion and innovation. We craft digital
              experiences that empower talent and drive success.
            </p>

            {/* Socials */}
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="p-2 rounded-full bg-white shadow hover:bg-purple-50 hover:text-purple-600 transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white shadow hover:bg-purple-50 hover:text-purple-600 transition"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white shadow hover:bg-purple-50 hover:text-purple-600 transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white shadow hover:bg-purple-50 hover:text-purple-600 transition"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase text-gray-500 tracking-wider">
              Navigate
            </h4>
            <ul className="mt-6 space-y-3">
              {["Home", "Services", "Why Us", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="hover:text-purple-600 transition-colors duration-300 hover:underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase text-gray-500 tracking-wider">
              Contact
            </h4>
            <ul className="mt-6 space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-purple-600" /> hello@thryv.com
              </li>
              <li>Siliguri, India</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold uppercase text-gray-500 tracking-wider">
              Join Our Network
            </h4>
            <form className="mt-6 flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition transform hover:-translate-y-1 hover:shadow-lg duration-300"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <hr className="mt-16 border-gray-300" />
        <p className="mt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} <span className="font-semibold">thryv</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

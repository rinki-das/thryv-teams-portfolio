"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import RippleButton from "../ui/RippleButton";

export default function NotifyHiringForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNotify = async () => {
    if (!email) {
      toast.error("Please enter your email.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email.");
      return;
    }

    setLoading(true);

    try {
      // Send notification to your inbox
      await emailjs.send(
        "service_7x39u6g",
        "template_ke1f4pc",
        {
          user_email: email,
          message: `Someone with email ${email} wants to notify you about hiring.`,
        },
        "i67CVl6KkucD4XKxn"
      );

      // Auto-reply to user
      await emailjs.send(
        "service_7x39u6g",
        "template_u4waldp",
        {
          user_email: email,
          user_name: email.split("@")[0],
        },
        "i67CVl6KkucD4XKxn"
      );

      toast.success("Thanks for reaching out!");
      setEmail("");
      document.querySelector<HTMLInputElement>('input[type="email"]')?.focus();
    } catch (err) {
      console.error("EmailJS Error:", err);
      toast.error("Failed to send notification. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 w-full">
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleNotify();
        }}
        className="p-3 rounded-lg border border-gray-300 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-purple-800 transition"
      />
      <RippleButton onClick={handleNotify} disabled={loading}>
        {loading ? "Sending..." : "Notify Hiring"}
      </RippleButton>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Smartphone,
  Layers,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import FAQSection from "./components/ui/FAQSection";
import Header from "./components/ui/Header";
import Loader from "./components/ui/Loader";
import Email from "./components/ui/Email";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import Footer from "./components/ui/Footer";

// Animated Term Component
const AnimatedTerm = ({ terms }: { terms: string[] }) => {
  const [currentTermIndex, setCurrentTermIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTermIndex((prev) => (prev + 1) % terms.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [terms.length]);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={terms[currentTermIndex]}
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="inline-block text-purple-800 font-bold"
      >
        {terms[currentTermIndex]}
      </motion.span>
    </AnimatePresence>
  );
};

export default function Home() {
  const [loading, setLoading] = useState(true);
  const terms = ["experience", "solutions", "innovation", "ideas"];
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loadingContact, setLoadingContact] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = contactForm;

    if (!name || !email || !message) {
      toast.error("Please fill all fields.");
      return;
    }

    setLoadingContact(true);

    try {
      await emailjs.send(
        "service_7x39u6g",
        "template_ke1f4pc",
        { user_name: name, user_email: email, message },
        "i67CVl6KkucD4XKxn"
      );

      await emailjs.send(
        "service_7x39u6g",
        "template_u4waldp",
        { user_name: name, user_email: email },
        "i67CVl6KkucD4XKxn"
      );

      toast.success("Your message has been sent!");
      setContactForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS Error:", err);
      toast.error("Failed to send message. Please try again.");
    }

    setLoadingContact(false);
  };

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-gray-50 to-white text-gray-800">
      <Header />

      {/* Hero Section */}
      <section
        id="home"
        className="relative w-full py-20 px-6 max-w-7xl mx-auto overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-extrabold text-black leading-tight"
            >
              Building digital products, brands <AnimatedTerm terms={terms} />
            </motion.h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg">
              We are a passionate team of designers, developers, and innovators
              focused on crafting exceptional digital experiences. From UI/UX
              design to fully responsive web and mobile applications, we turn
              ideas into high-performing, user-friendly solutions.
            </p>
            <Email />
          </div>

          <div className="relative flex justify-center md:justify-end">
            {/* Background Animated */}
            <motion.img
              src="/bggg.png"
              alt="Background Decoration"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] md:w-[550px] opacity-50"
              animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
            />
            {/* Foreground Image */}
           <motion.img
              src="/homeImage.gif"
              alt="Main Animation"
              className="relative z-10 w-[350px] md:w-[450px]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-white w-full text-center">
        <h3 className="text-3xl font-bold mb-10 flex items-center justify-center gap-2 text-purple-800">
          <Code /> Our awesome Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {[
            {
              icon: <Code className="w-6 h-6 text-purple-600" />,
              title: "Web Development",
              desc: "Our expert team designs and develops modern, responsive, and SEO-friendly websites tailored to your brand. We ensure seamless user experiences, fast load times, and robust architecture, delivering websites that truly engage visitors and drive results.",
            },
            {
              icon: <Smartphone className="w-6 h-6 text-purple-600" />,
              title: "App Development",
              desc: "We create intuitive and high-performance mobile apps for iOS and Android platforms. Our team works closely with you to understand your goals, crafting apps that are visually appealing, easy to use, and optimized for performance, ensuring maximum engagement.",
            },
            {
              icon: <Layers className="w-6 h-6 text-purple-600" />,
              title: "Fullstack Development",
              desc: "From frontend to backend, our skilled team delivers complete, scalable, and secure web and mobile solutions. We integrate modern technologies, implement best practices, and ensure smooth collaboration between all layers of your project for seamless functionality.",
            },
          ].map((service, i) => (
            <Card
              key={i}
              className="rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-transform bg-white/80 backdrop-blur-md border border-gray-100"
            >
              <CardContent className="p-6 text-left">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-purple-100 rounded-full flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h4 className="text-lg md:text-xl font-black">
                    {service.title}
                  </h4>
                </div>
                <p className="text-gray-700 text-sm md:text-base">
                  {service.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Hire Us Section */}
      <section
        id="why-us"
        className="py-20 px-6 w-full relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-3xl font-bold mb-6 text-purple-800">
              Why hire us for your Project?
            </h3>
            <p className="text-gray-700 mb-4 text-lg">
              Our team consists of talented designers, developers, and
              problem-solvers who are passionate about building digital
              solutions that make an impact. Each team member brings expertise,
              creativity, and a commitment to excellence.
            </p>
            <p className="text-gray-700 text-lg">
              We collaborate closely with clients, understanding your goals and
              challenges, and delivering solutions that are functional,
              scalable, and user-friendly. From concept to deployment, our team
              ensures quality at every stage of the project.
            </p>
            <p className="text-gray-700 text-lg">
              By combining innovative ideas with technical expertise, our team
              creates products that not only look great but also perform
              seamlessly across devices and platforms, driving real business
              growth.
            </p>
          </div>
          <div className="md:w-1/2 relative flex justify-center">
            <motion.img
              src="/orange.png"
              alt="Background Animation"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] md:w-[650px] opacity-50"
              animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            />
            <motion.img
              src="/whyUs.gif"
              alt="Team working illustration"
              className="relative z-10 w-80 md:w-[550px]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-6 bg-white w-full relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 relative flex justify-center">
            <motion.img
              src="/bggg.png"
              alt="Background Animation"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 md:w-[600px] opacity-50"
              animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            />
            <motion.img
              src="/contactUs.gif"
              alt="Contact Illustration"
              className="relative z-10 w-80 md:w-96 lg:w-[450px] rounded-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-3xl font-bold mb-6 flex items-center justify-center md:justify-start gap-2 text-purple-800">
              <Mail /> Contact Us
            </h3>
            <p className="text-gray-700 mb-10 text-xl md:text-2xl leading-relaxed">
              Have a project in mind or just want to say hello? We would love to
              hear from you. Our dedicated team is ready to collaborate,
              innovate, and bring your ideas to life.
            </p>

            <form className="grid gap-6 mb-12" onSubmit={handleContactSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={contactForm.name}
                onChange={(e) =>
                  setContactForm((prev) => ({ ...prev, name: e.target.value }))
                }
                className="border-b border-gray-400 focus:border-purple-600 focus:outline-none p-2 text-lg transition"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={contactForm.email}
                onChange={(e) =>
                  setContactForm((prev) => ({ ...prev, email: e.target.value }))
                }
                className="border-b border-gray-400 focus:border-purple-600 focus:outline-none p-2 text-lg transition"
              />
              <textarea
                placeholder="Your Message"
                value={contactForm.message}
                onChange={(e) =>
                  setContactForm((prev) => ({
                    ...prev,
                    message: e.target.value,
                  }))
                }
                className="border-b border-gray-400 focus:border-purple-600 focus:outline-none p-2 text-lg min-h-[100px] transition resize-none"
              />
              <Button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition"
                disabled={loadingContact}
              >
                {loadingContact ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6 w-full">
        <FAQSection />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

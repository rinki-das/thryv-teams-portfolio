import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner"; // ✅ import sonner Toaster

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "thryv | Team Portfolio & Projects",
  description:
    "Crafting seamless digital experiences with modern web & mobile solutions. Explore Thryv freelancer team's expertise in Next.js, React, UI/UX, and full-stack development.",
  keywords: [
    "thryv",
    "Portfolio",
    "Freelancer Team",
    "Next.js",
    "React",
    "Web Development",
    "Mobile Apps",
    "UI/UX",
    "Projects",
  ],
  authors: [
    { name: "Rinki Das", url: "https://www.linkedin.com/in/rinki-das/" },
    { name: "Freelancer Profile", url: "https://www.freelancer.in/u/rinkid51" },
  ],
  openGraph: {
    title: "thryv | Team Portfolio",
    description:
      "Discover thryv freelancer team's work, projects, and expertise in building modern web & mobile apps.",
    url: "https://thryv-teams-portfolio.vercel.app/",
    siteName: "Thryv Portfolio",
    images: [
      {
        url: "https://thryv-teams-portfolio.vercel.app/thryv_logo.png",
        width: 1200,
        height: 630,
        alt: "thryv Team Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "thryv | Team Portfolio & Projects",
    description:
      "Explore Thryv freelancer team's projects, skills, and expertise in Next.js, React, and modern development.",
    images: ["https://thryv-teams-portfolio.vercel.app/thryv_logo.png"],
  },
  icons: {
    icon: "/thryv_logo.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}

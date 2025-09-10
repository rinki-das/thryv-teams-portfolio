import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`px-6 py-3 rounded-lg bg-purple-700 text-white hover:bg-purple-800 transition ${className}`}
    >
      {children}
    </button>
  );
}
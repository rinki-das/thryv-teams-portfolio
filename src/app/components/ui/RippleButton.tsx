"use client";

import React from "react";

interface RippleButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const RippleButton: React.FC<RippleButtonProps> = ({ children, onClick, disabled }) => {
  return (
    <>
      <button className="ripple-btn" onClick={onClick} disabled={disabled}>
        <i className="ripple-animation" />
        {children}
        <i className="ripple-animation" />
      </button>

      <style jsx>{`
        .ripple-btn {
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          background: #6b46c1; /* your website theme color */
          min-width: 200px;
          border: none;
          border-radius: 4px;
          padding: 16px 20px;
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: opacity 0.3s ease, transform 0.2s ease;
        }

        .ripple-btn:hover {
          opacity: 0.95;
          transform: translateY(-2px);
        }

        .ripple-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .ripple-animation {
          border-radius: 50%;
          animation: ripple 0.6s linear infinite;
          pointer-events: none;
        }

        @keyframes ripple {
          0% {
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.1),
                        0 0 0 20px rgba(255, 255, 255, 0.1),
                        0 0 0 40px rgba(255, 255, 255, 0.1),
                        0 0 0 60px rgba(255, 255, 255, 0.1);
          }
          100% {
            box-shadow: 0 0 0 20px rgba(255, 255, 255, 0.1),
                        0 0 0 40px rgba(255, 255, 255, 0.1),
                        0 0 0 60px rgba(255, 255, 255, 0.1),
                        0 0 0 80px rgba(255, 255, 255, 0);
          }
        }
      `}</style>
    </>
  );
};

export default RippleButton;

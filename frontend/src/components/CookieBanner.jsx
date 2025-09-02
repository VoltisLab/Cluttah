import React from "react";
import { Button } from "./ui/button";

const CookieBanner = ({ onClose }) => {
  const handleAccept = () => {
    // In a real app, this would set cookies and preferences
    localStorage.setItem("cookiesAccepted", "true");
    onClose();
  };

  const handleDecline = () => {
    localStorage.setItem("cookiesAccepted", "false");
    onClose();
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 p-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 mb-2">This site uses cookies</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            We and selected third parties use cookies (or similar technologies) for technical purposes, to 
            enhance and analyse site usage, to support our marketing efforts, and for other purposes 
            described in our{" "}
            <a href="#" className="text-teal-600 hover:text-teal-700 underline">
              Cookie Policy
            </a>
            .
          </p>
        </div>
        <div className="flex gap-3 sm:flex-shrink-0">
          <Button
            variant="outline"
            onClick={handleDecline}
            className="border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            Decline
          </Button>
          <Button
            onClick={handleAccept}
            className="bg-gray-900 hover:bg-gray-800 text-white"
          >
            Allow Cookies
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
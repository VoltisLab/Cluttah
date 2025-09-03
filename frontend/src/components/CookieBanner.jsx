import React from "react";
import { Button } from "./ui/button";
import { X, Shield } from "lucide-react";

const CookieBanner = ({ onClose }) => {
  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    onClose();
  };

  const handleDecline = () => {
    localStorage.setItem("cookiesAccepted", "false");
    onClose();
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-lg z-50 p-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex-1 flex items-start space-x-3">
          <div className="p-2 bg-slate-100 rounded-lg flex-shrink-0">
            <Shield className="h-4 w-4 text-slate-600" />
          </div>
          <div>
            <h3 className="font-semibold text-slate-800 mb-1">Cookie Settings</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We use cookies to enhance your experience and analyze site usage. 
              Learn more in our{" "}
              <a href="#" className="text-slate-800 hover:underline font-medium">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
        <div className="flex gap-3 sm:flex-shrink-0">
          <Button
            variant="outline"
            onClick={handleDecline}
            className="border-slate-300 text-slate-700 hover:bg-slate-50"
          >
            Decline
          </Button>
          <Button
            onClick={handleAccept}
            className="bg-slate-800 hover:bg-slate-700 text-white"
          >
            Accept
          </Button>
        </div>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:relative sm:top-0 sm:right-0 p-1 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
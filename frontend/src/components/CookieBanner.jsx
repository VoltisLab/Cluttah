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
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200/50 shadow-2xl z-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex-1 flex items-start space-x-4">
            <div className="p-2 bg-indigo-100 rounded-lg flex-shrink-0">
              <Shield className="h-5 w-5 text-indigo-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">Premium Privacy Experience</h3>
              <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
                We use premium cookies and similar technologies to enhance your experience, 
                analyze site usage, and support our marketing efforts. Your privacy matters to us - 
                learn more in our{" "}
                <a href="#" className="text-indigo-600 hover:text-indigo-700 underline font-medium">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 lg:flex-shrink-0">
            <Button
              variant="outline"
              onClick={handleDecline}
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2.5 rounded-xl transition-all duration-300"
            >
              Decline
            </Button>
            <Button
              onClick={handleAccept}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Accept Premium Cookies
            </Button>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 lg:relative lg:top-0 lg:right-0 p-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
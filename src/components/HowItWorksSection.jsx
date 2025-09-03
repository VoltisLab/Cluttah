import React from "react";
import { Clock, CheckCircle, Phone } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      title: "Book online in 60 Seconds",
      description: "Pre-book your service and team in a few clicks with our easy to use online booking and payment system",
      icon: <Clock className="w-8 h-8 text-blue-600" />
    },
    {
      number: "2", 
      title: "We clear safely & ethically",
      description: "Get Live Driver Tracking, Our 2 Man collection team will arrive & clear your waste. You'll get a Digital Waste Transfer note.",
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />
    },
    {
      number: "3",
      title: "Another happy customer", 
      description: "Once we leave, you will be a happy customer. Our dedicated team will contact you to check the service went well.",
      icon: <Phone className="w-8 h-8 text-blue-600" />
    }
  ];

  const features = [
    "Live Customer Support",
    "Dedicated Phone Line", 
    "Same Day Service"
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Title */}
        <div className="text-center mb-16">
          <p className="text-lg text-blue-600 font-medium mb-2">Ready. Set. Clear.</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            How Cluttah Works in 3 Simple Steps...
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg font-semibold text-slate-800">{feature}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
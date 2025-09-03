import React from "react";
import { Clock, CheckCircle, Phone } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      title: "Book online in 60 Seconds",
      description: "Pre-book your service and team in a few clicks with our easy to use online booking and payment system",
      icon: <Clock className="w-8 h-8 text-slate-600" />
    },
    {
      number: "2", 
      title: "We clear safely & ethically",
      description: "Get Live Driver Tracking, Our 2 Man collection team will arrive & clear your waste. You'll get a Digital Waste Transfer note.",
      icon: <CheckCircle className="w-8 h-8 text-slate-600" />
    },
    {
      number: "3",
      title: "Another happy customer", 
      description: "Once we leave, you will be a happy customer. Our dedicated team will contact you to check the service went well.",
      icon: <Phone className="w-8 h-8 text-slate-600" />
    }
  ];

  const features = [
    "Live Customer Support",
    "Dedicated Phone Line", 
    "Same Day Service"
  ];

  return (
    <div className="bg-slate-50 py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-slate-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-56 h-56 bg-slate-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-slate-200/40 rounded-full blur-2xl animate-bounce delay-500"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Title */}
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-base font-medium text-slate-600 mb-2">Ready. Set. Clear.</p>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            How Cluttah Works in 3 Simple Steps
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center group animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="relative mb-8">
                <div className="w-20 h-20 mx-auto bg-white rounded-2xl flex items-center justify-center shadow-lg border border-slate-100 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 group-hover:shadow-xl">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-sm font-semibold group-hover:scale-125 transition-all duration-300 animate-bounce">
                  {step.number}
                </div>
                
                {/* Connecting line (except for last step) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-slate-300 to-slate-200 transform translate-x-4">
                    <div className="absolute top-0 left-0 h-0.5 bg-slate-400 animate-pulse" style={{ width: '0%', animation: `expand 2s ease-in-out infinite ${index * 0.5}s` }}></div>
                  </div>
                )}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4 group-hover:text-slate-700 transition-colors duration-300">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-slate-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: `${800 + index * 100}ms` }}>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mr-4 group-hover:rotate-12 transition-transform duration-300">
                  <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg font-medium text-slate-900">{feature}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center animate-fade-in-up delay-1200">
          <div className="bg-slate-900 rounded-3xl p-12 text-white relative overflow-hidden transform hover:scale-102 transition-all duration-500 hover:shadow-2xl">
            {/* Animated background particles */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-white/5 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse delay-700"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/3 rounded-full blur-lg animate-bounce delay-300"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4 animate-pulse">Ready to get started?</h3>
              <p className="text-xl mb-6 text-slate-200">Book your clearance service today and experience the Cluttah difference!</p>
              <button className="bg-white text-slate-900 font-bold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                Get Your Quote Now 🚀
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes expand {
          0%, 100% { width: 0%; }
          50% { width: 100%; }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .delay-1200 {
          animation-delay: 1.2s;
        }
        
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
};

export default HowItWorksSection;
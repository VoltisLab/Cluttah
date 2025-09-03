import React from "react";
import { Clock, CheckCircle, Phone } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      title: "Book online in 60 Seconds",
      description: "Pre-book your service and team in a few clicks with our easy to use online booking and payment system",
      icon: <Clock className="w-8 h-8 text-emerald-600" />,
      gradient: "from-emerald-100 to-teal-100",
      hoverGradient: "group-hover:from-emerald-200 group-hover:to-teal-200"
    },
    {
      number: "2", 
      title: "We clear safely & ethically",
      description: "Get Live Driver Tracking, Our 2 Man collection team will arrive & clear your waste. You'll get a Digital Waste Transfer note.",
      icon: <CheckCircle className="w-8 h-8 text-amber-600" />,
      gradient: "from-amber-100 to-orange-100",
      hoverGradient: "group-hover:from-amber-200 group-hover:to-orange-200"
    },
    {
      number: "3",
      title: "Another happy customer", 
      description: "Once we leave, you will be a happy customer. Our dedicated team will contact you to check the service went well.",
      icon: <Phone className="w-8 h-8 text-purple-600" />,
      gradient: "from-purple-100 to-pink-100",
      hoverGradient: "group-hover:from-purple-200 group-hover:to-pink-200"
    }
  ];

  const features = [
    {
      title: "Live Customer Support",
      icon: "📞",
      gradient: "from-emerald-50 to-teal-50",
      borderColor: "border-emerald-200"
    },
    {
      title: "Dedicated Phone Line",
      icon: "☎️",
      gradient: "from-amber-50 to-orange-50", 
      borderColor: "border-amber-200"
    },
    {
      title: "Same Day Service",
      icon: "⚡",
      gradient: "from-purple-50 to-pink-50",
      borderColor: "border-purple-200"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-emerald-50 via-white to-amber-50 py-16 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-emerald-200/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-orange-200/20 rounded-full blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Title */}
        <div className="text-center mb-16">
          <p className="text-lg bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent font-bold mb-2">Ready. Set. Clear.</p>
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-700 via-amber-700 to-orange-700 bg-clip-text text-transparent mb-4">
            How Cluttah Works in 3 Simple Steps...
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-8">
                <div className={`w-24 h-24 mx-auto bg-gradient-to-br ${step.gradient} ${step.hoverGradient} rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg group-hover:shadow-xl transform group-hover:scale-110`}>
                  {step.icon}
                </div>
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-slate-600 to-slate-800 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>
                
                {/* Connecting line (except for last step) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-emerald-200 to-amber-200 transform translate-x-4"></div>
                )}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-amber-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className={`bg-gradient-to-r ${feature.gradient} p-6 rounded-2xl border-2 ${feature.borderColor} hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
              <div className="flex items-center">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mr-4 shadow-md text-2xl">
                  {feature.icon}
                </div>
                <span className="text-lg font-bold text-slate-800">{feature.title}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-emerald-600 via-amber-600 to-orange-600 rounded-3xl p-8 text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ready to get started?</h3>
              <p className="text-xl mb-6 text-white/90">Book your clearance service today and experience the Cluttah difference!</p>
              <button className="bg-white text-slate-800 font-bold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Get Your Quote Now 🚀
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
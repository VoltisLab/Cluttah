import React from "react";
import { Shield, CreditCard, Clock, Truck, Phone, CheckCircle } from "lucide-react";

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: <CreditCard className="w-8 h-8 text-emerald-600" />,
      title: "Fixed Pricing",
      description: "Transparent, upfront pricing with no hidden fees",
      gradient: "from-emerald-100 to-teal-100"
    },
    {
      icon: <Shield className="w-8 h-8 text-amber-600" />,
      title: "Fully Licensed & Insured", 
      description: "Environment Agency registered with full public liability",
      gradient: "from-amber-100 to-orange-100"
    },
    {
      icon: <Phone className="w-8 h-8 text-purple-600" />,
      title: "Live Customer Support",
      description: "7 days a week customer service and live chat support",
      gradient: "from-purple-100 to-pink-100"
    },
    {
      icon: <Clock className="w-8 h-8 text-cyan-600" />,
      title: "Same Day Service",
      description: "Book today, cleared today with our rapid response team",
      gradient: "from-cyan-100 to-blue-100"
    }
  ];

  const comparisonFeatures = [
    "Secure online payment system",
    "Select a convenient time slot", 
    "Live driver tracking",
    "Digital waste transfer note",
    "Guaranteed Public Liability cover and waste Carrier Licence",
    "Guaranteed waste carrier licence"
  ];

  return (
    <div className="bg-gradient-to-b from-amber-50 via-white to-emerald-50 py-16 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-200/10 rounded-full blur-3xl -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl translate-x-32 translate-y-32"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Environmental Section */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-emerald-50 via-amber-50 to-orange-50 rounded-3xl p-12 mb-12 border-2 border-emerald-100 relative overflow-hidden">
            {/* Decorative pattern */}
            <div className="absolute inset-0 opacity-5">
              <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <circle cx="5" cy="5" r="1" fill="currentColor"/>
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#grid)"/>
              </svg>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-700 via-amber-700 to-orange-700 bg-clip-text text-transparent mb-8 relative z-10">
              Reinventing the future of rubbish disposal in the UK.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              <div className="flex items-center justify-center bg-white/50 rounded-2xl p-4 hover:bg-white/70 transition-colors duration-300">
                <Truck className="w-8 h-8 text-emerald-600 mr-3" />
                <span className="text-lg font-bold text-slate-700">Reduced vehicle emissions</span>
              </div>
              <div className="flex items-center justify-center bg-white/50 rounded-2xl p-4 hover:bg-white/70 transition-colors duration-300">
                <svg className="w-8 h-8 text-amber-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span className="text-lg font-bold text-slate-700">We recycle and upcycle</span>
              </div>
              <div className="flex items-center justify-center bg-white/50 rounded-2xl p-4 hover:bg-white/70 transition-colors duration-300">
                <Shield className="w-8 h-8 text-orange-600 mr-3" />
                <span className="text-lg font-bold text-slate-700">Professional & fully insured</span>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Cluttah */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-700 via-amber-700 to-orange-700 bg-clip-text text-transparent text-center mb-12">
            Why choose Cluttah?
          </h2>
          <p className="text-xl text-slate-600 text-center mb-12">
            Reasons why 100,000 happy customers have chosen us 👇
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className={`w-24 h-24 mx-auto bg-gradient-to-br ${feature.gradient} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-amber-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-gradient-to-r from-slate-50 via-white to-slate-50 rounded-3xl p-8 border-2 border-emerald-100 mb-16 relative overflow-hidden">
          {/* Decorative top border */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-amber-500 to-orange-500"></div>
          
          <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-700 to-amber-700 bg-clip-text text-transparent text-center mb-8">
            What makes Cluttah different?
          </h3>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div></div>
              <div className="text-center font-bold text-slate-600 bg-slate-100 rounded-lg py-2">CLASSIC PURCHASE</div>
              <div className="text-center font-bold bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent text-xl bg-gradient-to-r from-emerald-50 to-amber-50 rounded-lg py-2">CLUTTAH</div>
            </div>
            
            {comparisonFeatures.map((feature, index) => (
              <div key={index} className="grid grid-cols-3 gap-4 py-4 border-b border-slate-200 last:border-b-0 hover:bg-gradient-to-r hover:from-emerald-50/50 hover:to-amber-50/50 rounded-lg transition-colors duration-300">
                <div className="text-slate-700 font-medium">{feature}</div>
                <div className="text-center">
                  <svg className="w-6 h-6 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div className="text-center">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mx-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Info */}
        <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-3xl p-12 text-white relative overflow-hidden">
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-amber-600/10 to-orange-600/10"></div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              UK Based Team, Fully Compliant, Registered and Insured
            </h2>
            <p className="text-xl leading-relaxed mb-8 text-slate-200">
              With over 150,000 verified happy customers and over 18,000+ verified Trustpilot Reviews, 
              you can book your clearance confidently with us. Through our online booking system, 
              you can secure a same-day rubbish collection in a few clicks.
            </p>
            <p className="text-lg leading-relaxed mb-8 text-slate-300">
              Cluttah is dedicated to combating illegal fly-tipping, safeguarding our environment 
              one collection at a time. We are fully insured and registered with the Environment Agency: 
              we will ensure your waste is responsibly recycled.
            </p>
            <div className="bg-gradient-to-r from-emerald-50 to-amber-50 rounded-2xl p-6 text-slate-800">
              <p className="text-xl font-bold">
                For an immediate quote please call our dedicated quote team on 📞{" "}
                <a href="tel:0800 011 9492" className="bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent hover:from-emerald-700 hover:to-amber-700 transition-all duration-300">
                  0800 011 9492
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
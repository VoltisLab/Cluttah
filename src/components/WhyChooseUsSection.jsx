import React from "react";
import { Shield, CreditCard, Clock, Truck, Phone, CheckCircle } from "lucide-react";

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: <CreditCard className="w-8 h-8 text-slate-600" />,
      title: "Fixed Pricing",
      description: "Transparent, upfront pricing with no hidden fees"
    },
    {
      icon: <Shield className="w-8 h-8 text-slate-600" />,
      title: "Fully Licensed & Insured", 
      description: "Environment Agency registered with full public liability"
    },
    {
      icon: <Phone className="w-8 h-8 text-slate-600" />,
      title: "Live Customer Support",
      description: "7 days a week customer service and live chat support"
    },
    {
      icon: <Clock className="w-8 h-8 text-slate-600" />,
      title: "Same Day Service",
      description: "Book today, cleared today with our rapid response team"
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
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Environmental Section */}
        <div className="text-center mb-20">
          <div className="bg-slate-50 rounded-2xl p-12 mb-12 border border-slate-100">
            <h2 className="text-4xl font-bold text-slate-900 mb-8">
              Reinventing the future of rubbish disposal in the UK
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center">
                <Truck className="w-6 h-6 text-slate-500 mr-3" />
                <span className="text-lg font-medium text-slate-700">Reduced vehicle emissions</span>
              </div>
              <div className="flex items-center justify-center">
                <svg className="w-6 h-6 text-slate-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span className="text-lg font-medium text-slate-700">We recycle and upcycle</span>
              </div>
              <div className="flex items-center justify-center">
                <Shield className="w-6 h-6 text-slate-500 mr-3" />
                <span className="text-lg font-medium text-slate-700">Professional & fully insured</span>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Cluttah */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-4">
            Why choose Cluttah?
          </h2>
          <p className="text-xl text-slate-600 text-center mb-12">
            Reasons why 100,000 happy customers have chosen us
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto bg-slate-50 rounded-2xl flex items-center justify-center mb-6 border border-slate-100">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 mb-16">
          <h3 className="text-2xl font-semibold text-slate-900 text-center mb-8">
            What makes Cluttah different?
          </h3>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div></div>
              <div className="text-center font-medium text-slate-600 bg-white rounded-lg py-2">CLASSIC PURCHASE</div>
              <div className="text-center font-medium text-slate-900 bg-white rounded-lg py-2">CLUTTAH</div>
            </div>
            
            {comparisonFeatures.map((feature, index) => (
              <div key={index} className="grid grid-cols-3 gap-4 py-4 border-b border-slate-200 last:border-b-0">
                <div className="text-slate-700 font-medium">{feature}</div>
                <div className="text-center">
                  <svg className="w-6 h-6 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div className="text-center">
                  <CheckCircle className="w-6 h-6 text-green-600 mx-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Info */}
        <div className="bg-slate-900 rounded-2xl p-12 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
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
            <div className="bg-white rounded-xl p-6 text-slate-900">
              <p className="text-xl font-semibold">
                For an immediate quote please call our dedicated quote team on{" "}
                <a href="tel:0800 011 9492" className="text-slate-900 hover:underline">
                  📞 0800 011 9492
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
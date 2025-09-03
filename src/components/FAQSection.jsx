import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "Can I trust you?",
      answer: "150,000+ happy customers and 18,000+ five-star reviews. We're fully insured and Environment Agency registered."
    },
    {
      question: "What does it cost?",
      answer: "From £54 for single items, £59 for rubbish clearance. Fixed prices - no hidden fees. Get instant quote online."
    },
    {
      question: "What happens to my waste?",
      answer: "95% gets recycled or donated to charity. Everything is disposed of legally with full documentation."
    },
    {
      question: "When are you open?",
      answer: "7 days a week, 7AM-8PM. Same-day service available in most areas."
    },
    {
      question: "Do I need to bag everything?",
      answer: "No. Our team handles all sorting and bagging. Just make sure items are accessible."
    },
    {
      question: "Can I cancel?",
      answer: "Yes. Free cancellation up to 2 hours before collection time."
    },
    {
      question: "How fast can you collect?",
      answer: "Same-day service in most areas. Often within hours of booking."
    },
    {
      question: "Do you donate reusable items?",
      answer: "Yes. Good condition items go to local charities. Part of our 95% recycling commitment."
    },
    {
      question: "Do you come inside?",
      answer: "Yes. Our 2-person team collects from anywhere in your property, including upstairs."
    },
    {
      question: "Are you licensed?",
      answer: "Fully licensed waste carriers with complete insurance. All documentation provided."
    },
    {
      question: "Can I change my booking?",
      answer: "Yes. Call us or use live chat. Changes accepted up to 2 hours before collection."
    },
    {
      question: "Do I need to be home?",
      answer: "Not if items are accessible (front garden, garage). We'll text updates throughout."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="bg-white py-20 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-slate-100/40 rounded-full blur-3xl animate-pulse translate-x-40 -translate-y-40"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-200/30 rounded-full blur-3xl animate-pulse delay-1000 -translate-x-32 translate-y-32"></div>
      <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-slate-150/20 rounded-full blur-2xl animate-bounce delay-500"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Quick Answers
          </h2>
          <p className="text-xl text-slate-600 mb-4">
            Fast. Reliable. Professional.
          </p>
          <p className="text-lg text-slate-600">
            Open 7 days: phone, email, chat, WhatsApp
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-slate-50/80 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-100 hover:shadow-lg transition-all duration-300 transform hover:scale-102 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <button
                className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-inset hover:bg-slate-100/50 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-slate-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openFAQ === index ? (
                      <ChevronUp className="h-5 w-5 text-slate-500 transform hover:scale-110 transition-all duration-200" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-slate-500 transform hover:scale-110 transition-all duration-200" />
                    )}
                  </div>
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-4 bg-white/90 backdrop-blur-sm animate-fade-in-up">
                  <p className="text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center bg-slate-50/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-100 relative overflow-hidden hover:shadow-lg transition-all duration-500 transform hover:scale-102 animate-fade-in-up delay-1200">
          {/* Floating particles */}
          <div className="absolute top-4 left-4 w-3 h-3 bg-slate-300/40 rounded-full animate-ping"></div>
          <div className="absolute bottom-4 right-4 w-2 h-2 bg-slate-400/50 rounded-full animate-pulse delay-300"></div>
          <div className="absolute top-8 right-8 w-4 h-4 bg-slate-200/60 rounded-full animate-bounce delay-700"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">
              Still Got Questions?
            </h3>
            <p className="text-slate-600 mb-6">
              We're here 7 days a week to help
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:08000119492" 
                className="bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105 hover:shadow-lg"
              >
                📞 Call Now
              </a>
              <a 
                href="mailto:hi@cluttah.co.uk" 
                className="bg-white hover:bg-slate-50 text-slate-900 font-medium py-3 px-6 rounded-xl border border-slate-200 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105 hover:shadow-lg"
              >
                ✉️ Email
              </a>
              <a 
                href="https://api.whatsapp.com/send/?phone=447897023771" 
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105 hover:shadow-lg"
              >
                💬 WhatsApp
              </a>
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

export default FAQSection;
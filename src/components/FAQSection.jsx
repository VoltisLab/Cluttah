import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "How can I trust Cluttah™?",
      answer: "With over 150,000 verified happy customers and over 18,000+ verified Trustpilot Reviews, you can book your clearance confidently with us. We are fully insured and registered with the Environment Agency."
    },
    {
      question: "How much will my rubbish removal cost?",
      answer: "Our prices start from £54 for single items and £59 for rubbish clearance. We offer fixed pricing with no hidden fees. Get an instant quote through our online booking system or call us for a personalized quote."
    },
    {
      question: "What happens to the waste after my removal?",
      answer: "We are committed to responsible waste disposal with a 95% recycling rate. We recycle and upcycle wherever possible, and all waste is disposed of in accordance with Environment Agency regulations."
    },
    {
      question: "What are your hours of operation?",
      answer: "We are open 7 days a week. Our customer service team is available from 7AM to 8PM. We also offer same-day service for urgent collections."
    },
    {
      question: "Does my waste need to be bagged?",
      answer: "No, you don't need to bag your waste. Our professional team will handle all the collection and sorting. Just ensure items are accessible for our team to collect safely."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We offer flexible cancellation. You can cancel or reschedule your booking up to 2 hours before your scheduled collection time without any charges."
    },
    {
      question: "How quickly can you collect?",
      answer: "We offer same-day service in most areas. Book online or call us, and we can often collect within hours of your booking, subject to availability in your area."
    },
    {
      question: "My items are reusable, can you reuse any of my waste?",
      answer: "Absolutely! We prioritize reuse and recycling. Items in good condition are donated to local charities or recycled appropriately. This is part of our commitment to environmental responsibility."
    },
    {
      question: "Will you come upstairs and remove from inside?",
      answer: "Yes, our two-person team will collect items from inside your property, including upstairs. We provide a full service to make the process as convenient as possible for you."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Yes, we are fully licensed waste carriers registered with the Environment Agency and carry comprehensive public liability insurance. All our documentation is available upon request."
    },
    {
      question: "How do I change or add items to my booking?",
      answer: "You can modify your booking by calling our customer service team or using our online chat. We can add items or change collection details up to 2 hours before your scheduled appointment."
    },
    {
      question: "Do I have to be at home for my collection?",
      answer: "Not necessarily. If items are accessible (e.g., in your front garden or garage), we can collect without you being present. We'll provide updates via text and email throughout the process."
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
            Rubbish & Waste Removal FAQs
          </h2>
          <p className="text-xl text-slate-600 mb-4">
            Fast. Reliable. Professional.
          </p>
          <p className="text-lg text-slate-600">
            We are open 7 days a week over the telephone, email, live chat, or WhatsApp.
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
              Still have questions?
            </h3>
            <p className="text-slate-600 mb-6">
              Our dedicated customer support team is here to help you 7 days a week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:08000119492" 
                className="bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105 hover:shadow-lg"
              >
                📞 Call 0800 011 9492
              </a>
              <a 
                href="mailto:hi@cluttah.co.uk" 
                className="bg-white hover:bg-slate-50 text-slate-900 font-medium py-3 px-6 rounded-xl border border-slate-200 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105 hover:shadow-lg"
              >
                ✉️ Email Us
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
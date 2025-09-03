import React from "react";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sharon Bond",
      rating: 5,
      review: "Excellent service provided by Nick. Have already had one job done by Cluttah which was excellent and have just been liaising with Nick in customer service to get another job organised. His replies to my many queries have been prompt and helpful.",
      timeAgo: "2 days ago"
    },
    {
      name: "Sally",
      rating: 5, 
      review: "A really well thought out service. Quick, efficient, helpful and it's not all going to landfill. It was easy to book, we got a same day date and didn't need to wait in as they collected from the front garden.",
      timeAgo: "1 day ago"
    },
    {
      name: "Stephen Baker-lemay",
      rating: 5,
      review: "Efficient and professional. Very helpful gentleman helped me on the phone. Clear information as to what I needed to do. Within about 10 minutes if not less I had a very reasonable quote. Booked delivery for same day, payment system easy.",
      timeAgo: "3 days ago"
    },
    {
      name: "Victoria Skillen", 
      rating: 5,
      review: "Very responsive communication and the guys who collected the rubbish were lovely",
      timeAgo: "1 hour ago"
    },
    {
      name: "Jeff F",
      rating: 5,
      review: "Cluttah were fantastic – they arrived exactly when they said they would, cleared everything we needed from our garage, and were friendly, helpful, and efficient. They gave us a great price (beat another local quote by £200!)",
      timeAgo: "5 hours ago"
    },
    {
      name: "ANNA",
      rating: 5,
      review: "Simply a reliable team! 😊 The guys were very friendly and polite. They arrived on time and quickly cleared out all the old furniture. What really impressed us, we placed the order online around 10 pm, and by 8 am the next morning everything was already done.",
      timeAgo: "6 hours ago"
    }
  ];

  return (
    <div className="bg-slate-50 py-20 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-slate-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-slate-300/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-slate-200/25 rounded-full blur-2xl animate-bounce delay-500"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Check our 18,000+ verified Trustpilot reviews
          </h2>
          <div className="flex items-center justify-center mb-8 animate-bounce">
            <div className="flex items-center bg-green-600 text-white px-4 py-2 rounded-lg mr-4 hover:scale-110 transition-transform duration-300">
              <Star className="w-5 h-5 fill-current mr-2" />
              <span className="font-semibold">Trustpilot</span>
            </div>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-green-500 text-green-500 hover:scale-125 transition-transform duration-200" style={{ animationDelay: `${star * 100}ms` }} />
              ))}
            </div>
            <span className="ml-3 text-lg font-semibold text-slate-700">
              4.8 out of 5 star rating
            </span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up relative overflow-hidden" style={{ animationDelay: `${index * 150}ms` }}>
              {/* Floating corner element */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-slate-100/50 rounded-bl-3xl animate-pulse"></div>
              <div className="absolute bottom-2 left-2 w-2 h-2 bg-green-400/50 rounded-full animate-ping"></div>
              
              {/* Rating */}
              <div className="flex items-center mb-4 relative z-10">
                <div className="flex items-center bg-green-600 text-white px-3 py-1 rounded-lg mr-3 hover:scale-110 transition-transform duration-300">
                  <Star className="w-4 h-4 fill-current mr-1" />
                  <span className="text-sm font-medium">Trustpilot</span>
                </div>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-green-500 text-green-500 hover:scale-110 transition-transform duration-200" />
                  ))}
                </div>
              </div>

              {/* Review */}
              <blockquote className="text-slate-700 mb-6 leading-relaxed relative z-10">
                "{testimonial.review}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-between relative z-10">
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.timeAgo}</p>
                </div>
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-700 font-bold hover:scale-110 hover:rotate-12 transition-all duration-300">
                  {testimonial.name.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trustpilot Info */}
        <div className="text-center mt-16 animate-fade-in-up delay-800">
          <div className="bg-white/90 backdrop-blur-sm p-12 rounded-2xl border border-slate-100 relative overflow-hidden hover:shadow-lg transition-all duration-500 transform hover:scale-102">
            {/* Animated background particles */}
            <div className="absolute top-4 left-4 w-3 h-3 bg-green-400/30 rounded-full animate-ping"></div>
            <div className="absolute top-8 right-8 w-2 h-2 bg-slate-400/40 rounded-full animate-pulse delay-300"></div>
            <div className="absolute bottom-6 left-8 w-4 h-4 bg-green-300/20 rounded-full animate-bounce delay-700"></div>
            <div className="absolute bottom-4 right-6 w-5 h-5 bg-slate-300/30 rounded-full animate-pulse delay-500"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Trusted by over 150,000+ Customers</h3>
              <div className="flex items-center justify-center mb-6">
                <div className="bg-green-600 text-white px-4 py-2 rounded-lg mr-4 hover:scale-110 transition-transform duration-300">
                  <Star className="w-5 h-5 fill-current inline mr-2" />
                  <span className="font-semibold">Excellent</span>
                </div>
                <span className="text-lg font-semibold text-slate-700">
                  4.8 out of 5 star rating on Trustpilot
                </span>
              </div>
              <p className="text-slate-600">Based on <strong>19,581 reviews</strong></p>
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
        
        .delay-800 {
          animation-delay: 0.8s;
        }
        
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
};

export default TestimonialsSection;
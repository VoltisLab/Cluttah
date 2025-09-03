import React from "react";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sharon Bond",
      rating: 5,
      review: "Excellent service provided by Nick. Have already had one job done by Cluttah which was excellent and have just been liaising with Nick in customer service to get another job organised. His replies to my many queries have been prompt and helpful.",
      timeAgo: "2 days ago",
      gradient: "from-emerald-50 to-teal-50"
    },
    {
      name: "Sally",
      rating: 5, 
      review: "A really well thought out service. Quick, efficient, helpful and it's not all going to landfill. It was easy to book, we got a same day date and didn't need to wait in as they collected from the front garden.",
      timeAgo: "1 day ago",
      gradient: "from-amber-50 to-orange-50"
    },
    {
      name: "Stephen Baker-lemay",
      rating: 5,
      review: "Efficient and professional. Very helpful gentleman helped me on the phone. Clear information as to what I needed to do. Within about 10 minutes if not less I had a very reasonable quote. Booked delivery for same day, payment system easy.",
      timeAgo: "3 days ago",
      gradient: "from-purple-50 to-pink-50"
    },
    {
      name: "Victoria Skillen", 
      rating: 5,
      review: "Very responsive communication and the guys who collected the rubbish were lovely",
      timeAgo: "1 hour ago",
      gradient: "from-cyan-50 to-blue-50"
    },
    {
      name: "Jeff F",
      rating: 5,
      review: "Cluttah were fantastic – they arrived exactly when they said they would, cleared everything we needed from our garage, and were friendly, helpful, and efficient. They gave us a great price (beat another local quote by £200!)",
      timeAgo: "5 hours ago",
      gradient: "from-rose-50 to-orange-50"
    },
    {
      name: "ANNA",
      rating: 5,
      review: "Simply a reliable team! 😊 The guys were very friendly and polite. They arrived on time and quickly cleared out all the old furniture. What really impressed us, we placed the order online around 10 pm, and by 8 am the next morning everything was already done.",
      timeAgo: "6 hours ago",
      gradient: "from-indigo-50 to-purple-50"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-emerald-50 via-white to-amber-50 py-16 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-emerald-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-200/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-700 via-amber-700 to-orange-700 bg-clip-text text-transparent mb-6">
            Check our 18,000+ verified Trustpilot reviews 👇🏽
          </h2>
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-2xl mr-6 shadow-lg">
              <Star className="w-5 h-5 fill-current mr-2" />
              <span className="font-bold text-lg">Trustpilot</span>
            </div>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="ml-3 text-xl font-bold bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">
              4.8 out of 5 star rating
            </span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`bg-gradient-to-br ${testimonial.gradient} p-6 rounded-3xl shadow-lg border-2 border-white hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden`}>
              {/* Decorative corner element */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-white/20 rounded-bl-3xl"></div>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex items-center bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-3 py-1 rounded-lg mr-3 shadow-md">
                  <Star className="w-4 h-4 fill-current mr-1" />
                  <span className="text-sm font-bold">Trustpilot</span>
                </div>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              {/* Review */}
              <blockquote className="text-slate-700 mb-6 leading-relaxed font-medium">
                "{testimonial.review}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-slate-800 text-lg">{testimonial.name}</p>
                  <p className="text-sm text-slate-600">{testimonial.timeAgo}</p>
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trustpilot Info */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-emerald-50 via-amber-50 to-orange-50 p-12 rounded-3xl border-2 border-emerald-100 relative overflow-hidden">
            {/* Decorative stars pattern */}
            <div className="absolute inset-0 opacity-10">
              <Star className="absolute top-4 left-4 w-6 h-6 text-amber-400" />
              <Star className="absolute top-8 right-8 w-4 h-4 text-emerald-400" />
              <Star className="absolute bottom-6 left-8 w-5 h-5 text-orange-400" />
              <Star className="absolute bottom-4 right-6 w-7 h-7 text-purple-400" />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-emerald-700 to-amber-700 bg-clip-text text-transparent mb-4">Trusted by over 150,000+ Customers 🫶🏻</h3>
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-2xl mr-6 shadow-lg">
                  <Star className="w-6 h-6 fill-current inline mr-2" />
                  <span className="font-bold text-xl">Excellent</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">
                  4.8 out of 5 star rating on Trustpilot
                </span>
              </div>
              <p className="text-slate-600 text-lg">Based on <strong className="bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">19,581 reviews</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
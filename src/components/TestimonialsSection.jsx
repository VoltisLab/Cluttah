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
    <div className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Check our 18,000+ verified Trustpilot reviews
          </h2>
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center bg-green-600 text-white px-4 py-2 rounded-lg mr-4">
              <Star className="w-5 h-5 fill-current mr-2" />
              <span className="font-semibold">Trustpilot</span>
            </div>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-green-500 text-green-500" />
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
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-200">
              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex items-center bg-green-600 text-white px-3 py-1 rounded-lg mr-3">
                  <Star className="w-4 h-4 fill-current mr-1" />
                  <span className="text-sm font-medium">Trustpilot</span>
                </div>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-green-500 text-green-500" />
                  ))}
                </div>
              </div>

              {/* Review */}
              <blockquote className="text-slate-700 mb-6 leading-relaxed">
                "{testimonial.review}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.timeAgo}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trustpilot Info */}
        <div className="text-center mt-16">
          <div className="bg-white p-12 rounded-2xl border border-slate-100">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Trusted by over 150,000+ Customers</h3>
            <div className="flex items-center justify-center mb-6">
              <div className="bg-green-600 text-white px-4 py-2 rounded-lg mr-4">
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
  );
};

export default TestimonialsSection;
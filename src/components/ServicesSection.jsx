import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Rubbish Clearance",
      description: "Book now",
      price: "Prices from £59",
      image: "https://images.unsplash.com/photo-1690211506506-57486e819dda?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHx3YXN0ZSUyMHJlbW92YWx8ZW58MHx8fHwxNzU2OTM2NTA2fDA&ixlib=rb-4.1.0&q=85",
      link: "/services/rubbish-clearance",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      title: "Furniture Removal", 
      description: "Book now",
      price: "Prices from £54",
      image: "https://images.unsplash.com/photo-1671351967814-834d376fcd1d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwyfHxmdXJuaXR1cmUlMjByZW1vdmFsfGVufDB8fHx8MTc1NjkzNjQ5NXww&ixlib=rb-4.1.0&q=85",
      link: "/services/furniture-removal",
      gradient: "from-amber-500 to-orange-600"
    },
    {
      title: "Sofa Removal",
      description: "Book now", 
      price: "Prices from £74",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAxfDB8MXxzZWFyY2h8Mnx8c29mYSUyMHJlbW92YWx8ZW58MHx8fHwxNzU2OTM3MDUwfDA&ixlib=rb-4.1.0&q=85",
      link: "/services/single-items",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Appliance Removal",
      description: "Book now",
      price: "Prices from £54", 
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAxfDB8MXxzZWFyY2h8M3x8YXBwbGlhbmNlJTIwcmVtb3ZhbHxlbnwwfHx8fDE3NTY5MzcwNzF8MA&ixlib=rb-4.1.0&q=85",
      link: "/services/single-items",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      title: "Office Clearance",
      description: "Enquire now",
      price: "Prices from £79",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAxfDB8MXxzZWFyY2h8Mnx8b2ZmaWNlJTIwY2xlYXJhbmNlfGVufDB8fHx8MTc1NjkzNzA5Mnww&ixlib=rb-4.1.0&q=85",
      link: "/services/office-clearance",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      title: "House Clearance",
      description: "Enquire now",
      price: "Prices from £79",
      image: "https://images.unsplash.com/photo-1681731059898-72407df8431a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjByZW1vdmFsfGVufDB8fHx8MTc1NjkzNjQ5NXww&ixlib=rb-4.1.0&q=85",
      link: "/services/house-clearance",
      gradient: "from-rose-500 to-orange-600"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-orange-50 via-white to-emerald-50 py-16 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-200/20 rounded-full blur-3xl -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl translate-x-48 translate-y-48"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-700 via-amber-700 to-orange-700 bg-clip-text text-transparent mb-4">
            Waste clearance services that we provide:
          </h2>
          <p className="text-xl text-slate-600 mb-8">Select your service</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-orange-100 transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-4 h-4 text-slate-600" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-amber-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-2">{service.description}</p>
                <p className="text-lg font-semibold bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent mb-4">{service.price}</p>
                
                <Button 
                  className={`w-full bg-gradient-to-r ${service.gradient} hover:shadow-lg text-white font-medium py-2 px-4 rounded-xl transition-all duration-300 transform group-hover:scale-105`}
                  onClick={() => window.location.href = service.link}
                >
                  Book Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Upload Photo Section */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-emerald-50 via-amber-50 to-orange-50 rounded-3xl p-8 border-2 border-gradient-to-r border-emerald-200 relative overflow-hidden">
            {/* Decorative background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-12 h-12 bg-emerald-400 rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 bg-orange-400 rounded-full"></div>
              <div className="absolute top-8 right-8 w-6 h-6 bg-amber-400 rounded-full"></div>
            </div>
            
            <div className="max-w-md mx-auto relative z-10">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-emerald-100 to-orange-100 rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-700 to-amber-700 bg-clip-text text-transparent mb-3">Can't decide?</h3>
              <p className="text-slate-600 mb-6 text-lg">Upload your photos and we'll help you choose the right service</p>
              <Button className="bg-gradient-to-r from-emerald-600 via-amber-600 to-orange-600 hover:from-emerald-700 hover:via-amber-700 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                📸 Upload Photos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
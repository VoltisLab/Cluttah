import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Rubbish Clearance",
      description: "Mixed waste removal",
      price: "From £59",
      image: "https://images.unsplash.com/photo-1690211506506-57486e819dda?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHx3YXN0ZSUyMHJlbW92YWx8ZW58MHx8fHwxNzU2OTM2NTA2fDA&ixlib=rb-4.1.0&q=85",
      link: "/services/rubbish-clearance"
    },
    {
      title: "Furniture Removal", 
      description: "Beds, tables, wardrobes",
      price: "From £54",
      image: "https://images.unsplash.com/photo-1671351967814-834d376fcd1d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwyfHxmdXJuaXR1cmUlMjByZW1vdmFsfGVufDB8fHx8MTc1NjkzNjQ5NXww&ixlib=rb-4.1.0&q=85",
      link: "/services/furniture-removal"
    },
    {
      title: "Sofa Collection",
      description: "Any size, any condition", 
      price: "From £74",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAxfDB8MXxzZWFyY2h8Mnx8c29mYSUyMHJlbW92YWx8ZW58MHx8fHwxNzU2OTM3MDUwfDA&ixlib=rb-4.1.0&q=85",
      link: "/services/single-items"
    },
    {
      title: "Appliance Removal",
      description: "Fridges, washers, ovens",
      price: "From £54", 
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwzfHxraXRjaGVuJTIwYXBwbGlhbmNlc3xlbnwwfHx8fDE3NTY5NDIwOTd8MA&ixlib=rb-4.1.0&q=85",
      link: "/services/single-items"
    },
    {
      title: "Office Clearance",
      description: "Desks, chairs, equipment",
      price: "From £79",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAxfDB8MXxzZWFyY2h8Mnx8b2ZmaWNlJTIwY2xlYXJhbmNlfGVufDB8fHx8MTc1NjkzNzA5Mnww&ixlib=rb-4.1.0&q=85",
      link: "/services/office-clearance"
    },
    {
      title: "House Clearance",
      description: "Full property clear-out",
      price: "From £79",
      image: "https://images.unsplash.com/photo-1681731059898-72407df8431a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjByZW1vdmFsfGVufDB8fHx8MTc1NjkzNjQ5NXww&ixlib=rb-4.1.0&q=85",
      link: "/services/house-clearance"
    }
  ];

  return (
    <div className="bg-white py-20 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-slate-100/50 rounded-full blur-3xl animate-pulse -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-200/30 rounded-full blur-3xl animate-pulse delay-1000 translate-x-48 translate-y-48"></div>
      <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-slate-150/40 rounded-full blur-2xl animate-bounce delay-500"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            What We Clear
          </h2>
          <p className="text-xl text-slate-600">Pick your service</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 hover:border-slate-200 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-500" />
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:rotate-90">
                  <ArrowRight className="w-4 h-4 text-slate-600" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-2">{service.description}</p>
                <p className="text-lg font-semibold text-slate-900 mb-4">{service.price}</p>
                
                <Button 
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-2 px-4 rounded-xl transition-all duration-300 transform group-hover:scale-105 hover:shadow-lg"
                  onClick={() => window.location.href = service.link}
                >
                  Book Now
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Upload Photo Section */}
        <div className="mt-16 text-center animate-fade-in-up delay-600">
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 relative overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-102">
            {/* Floating particles */}
            <div className="absolute top-4 left-4 w-2 h-2 bg-slate-300 rounded-full animate-ping"></div>
            <div className="absolute bottom-4 right-4 w-3 h-3 bg-slate-200 rounded-full animate-pulse delay-700"></div>
            <div className="absolute top-8 right-8 w-1 h-1 bg-slate-400 rounded-full animate-bounce delay-300"></div>
            
            <div className="max-w-md mx-auto relative z-10">
              <div className="w-16 h-16 mx-auto mb-4 bg-slate-100 rounded-xl flex items-center justify-center transform hover:rotate-12 hover:scale-110 transition-all duration-300 shadow-md">
                <svg className="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-2">Not Sure?</h3>
              <p className="text-slate-600 mb-6">Send us photos - we'll help you choose</p>
              <Button className="bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 px-6 rounded-xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                📸 Upload Photos
              </Button>
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
        
        .delay-600 {
          animation-delay: 0.6s;
        }
        
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
};

export default ServicesSection;
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
      link: "/services/rubbish-clearance"
    },
    {
      title: "Furniture Removal", 
      description: "Book now",
      price: "Prices from £54",
      image: "https://images.unsplash.com/photo-1671351967814-834d376fcd1d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwyfHxmdXJuaXR1cmUlMjByZW1vdmFsfGVufDB8fHx8MTc1NjkzNjQ5NXww&ixlib=rb-4.1.0&q=85",
      link: "/services/furniture-removal"
    },
    {
      title: "Sofa Removal",
      description: "Book now", 
      price: "Prices from £74",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAxfDB8MXxzZWFyY2h8Mnx8c29mYSUyMHJlbW92YWx8ZW58MHx8fHwxNzU2OTM3MDUwfDA&ixlib=rb-4.1.0&q=85",
      link: "/services/single-items"
    },
    {
      title: "Appliance Removal",
      description: "Book now",
      price: "Prices from £54", 
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAxfDB8MXxzZWFyY2h8M3x8YXBwbGlhbmNlJTIwcmVtb3ZhbHxlbnwwfHx8fDE3NTY5MzcwNzF8MA&ixlib=rb-4.1.0&q=85",
      link: "/services/single-items"
    },
    {
      title: "Office Clearance",
      description: "Enquire now",
      price: "Prices from £79",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAxfDB8MXxzZWFyY2h8Mnx8b2ZmaWNlJTIwY2xlYXJhbmNlfGVufDB8fHx8MTc1NjkzNzA5Mnww&ixlib=rb-4.1.0&q=85",
      link: "/services/office-clearance"
    },
    {
      title: "House Clearance",
      description: "Enquire now",
      price: "Prices from £79",
      image: "https://images.unsplash.com/photo-1681731059898-72407df8431a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjByZW1vdmFsfGVufDB8fHx8MTc1NjkzNjQ5NXww&ixlib=rb-4.1.0&q=85",
      link: "/services/house-clearance"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Waste clearance services that we provide:
          </h2>
          <p className="text-xl text-slate-600 mb-8">Select your service</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-2">{service.description}</p>
                <p className="text-lg font-semibold text-blue-600 mb-4">{service.price}</p>
                
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-xl transition-all duration-300 group-hover:shadow-lg"
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
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Can't decide?</h3>
              <p className="text-slate-600 mb-4">Upload your photos</p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-xl">
                Upload Photos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
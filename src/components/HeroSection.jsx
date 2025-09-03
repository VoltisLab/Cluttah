import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search, Users, Truck, Star, Recycle, Clock, Shield } from "lucide-react";
import { useToast } from "../hooks/use-toast";

const HeroSection = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [postcode, setPostcode] = useState("");
  const [timing, setTiming] = useState("");
  const { toast } = useToast();

  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  const handleGetQuote = () => {
    if (!selectedService) {
      toast({
        title: "Please select a service",
        description: "Choose either 'Pile of Junk' or 'Single Items'",
        variant: "destructive",
      });
      return;
    }
    
    if (!postcode.trim()) {
      toast({
        title: "Please enter your postcode",
        description: "We need your postcode to provide accurate pricing",
        variant: "destructive",
      });
      return;
    }

    if (!timing) {
      toast({
        title: "Please select timing",
        description: "Let us know when you need this service",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Quote Request Submitted!",
      description: "We'll contact you shortly with a personalized quote.",
    });

    setSelectedService(null);
    setPostcode("");
    setTiming("");
  };

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white py-20 relative overflow-hidden">
      {/* Animated Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-slate-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-slate-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-slate-200/25 rounded-full blur-2xl animate-bounce delay-500"></div>
      <div className="absolute top-20 right-1/4 w-16 h-16 bg-slate-300/30 rounded-full blur-xl animate-ping delay-700"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Stats Bar */}
        <div className="flex justify-center items-center space-x-12 mb-16 bg-white/90 backdrop-blur-sm rounded-2xl py-4 px-8 mx-auto max-w-fit shadow-lg border border-slate-100 animate-fade-in-up">
          <div className="flex items-center text-sm font-medium text-slate-600 hover:scale-105 transition-transform duration-300">
            <Users className="h-4 w-4 mr-2 text-slate-500" />
            100K+ Happy Customers
          </div>
          <div className="flex items-center text-sm font-medium text-slate-600 hover:scale-105 transition-transform duration-300">
            <Truck className="h-4 w-4 mr-2 text-slate-500" />
            200K+ Tonnes Cleared
          </div>
          <div className="flex items-center text-sm font-medium text-slate-600 hover:scale-105 transition-transform duration-300">
            <Star className="h-4 w-4 mr-2 text-slate-500" />
            18K+ Five-Star Reviews
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-left">
            {/* Main Heading */}
            <div>
              <h1 className="text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6 animate-fade-in-up">
                Rubbish Cleared. 
                <br />Done Right.
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed animate-fade-in-up delay-200">
                Same-day removal. Zero hassle.
              </p>
            </div>

            {/* Service Selection */}
            <div className="animate-fade-in-up delay-300">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">
                What needs clearing?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div
                  className={`p-6 border rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                    selectedService === "pile"
                      ? "border-slate-900 bg-slate-50 scale-105 shadow-lg"
                      : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                  }`}
                  onClick={() => handleServiceSelect("pile")}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-slate-100 rounded-xl flex items-center justify-center transform group-hover:rotate-3 transition-transform duration-300">
                      <img 
                        src="https://images.unsplash.com/photo-1681731059898-72407df8431a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjByZW1vdmFsfGVufDB8fHx8MTc1NjkzNjQ5NXww&ixlib=rb-4.1.0&q=85" 
                        alt="Pile of Junk" 
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2">Big Clear-Out</h4>
                    <p className="text-sm text-slate-600">Multiple items & boxes</p>
                  </div>
                </div>

                <div
                  className={`p-6 border rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                    selectedService === "single"
                      ? "border-slate-900 bg-slate-50 scale-105 shadow-lg"
                      : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                  }`}
                  onClick={() => handleServiceSelect("single")}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-slate-100 rounded-xl flex items-center justify-center transform group-hover:rotate-3 transition-transform duration-300">
                      <img 
                        src="https://images.unsplash.com/photo-1671351967814-834d376fcd1d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwyfHxmdXJuaXR1cmUlMjByZW1vdmFsfGVufDB8fHx8MTc1NjkzNjQ5NXww&ixlib=rb-4.1.0&q=85" 
                        alt="Single Items" 
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2">Single Items</h4>
                    <p className="text-sm text-slate-600">Sofa, fridge, or similar</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="flex items-center space-x-8 bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-slate-100 shadow-lg animate-fade-in-up delay-400">
              <div className="flex items-center text-sm text-slate-600 hover:scale-110 transition-transform duration-300">
                <Clock className="h-5 w-5 mr-2 text-slate-400" />
                Same Day
              </div>
              <div className="flex items-center text-sm text-slate-600 hover:scale-110 transition-transform duration-300">
                <Shield className="h-5 w-5 mr-2 text-slate-400" />
                Fully Insured
              </div>
              <div className="flex items-center text-sm text-slate-600 hover:scale-110 transition-transform duration-300">
                <Recycle className="h-5 w-5 mr-2 text-slate-400" />
                95% Recycled
              </div>
            </div>
          </div>

          {/* Right Side - Booking Form */}
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-slate-100 animate-fade-in-right relative overflow-hidden">
            {/* Floating particles */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-slate-300 rounded-full animate-ping"></div>
            <div className="absolute bottom-6 left-6 w-1 h-1 bg-slate-400 rounded-full animate-pulse"></div>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-slate-900 mb-2">Get Quote</h3>
              <p className="text-slate-600">Ready in 30 seconds</p>
            </div>
            
            <div className="space-y-6">
              <div className="transform hover:scale-102 transition-transform duration-200">
                <label className="block text-sm font-medium text-slate-700 mb-3">
                  Your postcode
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input
                    type="text"
                    placeholder="e.g. SW1A 1AA"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    className="pl-10 h-12 text-slate-900 border-slate-200 focus:border-slate-900 focus:ring-slate-900 rounded-xl transition-all duration-300 focus:scale-102"
                  />
                </div>
              </div>

              <div className="transform hover:scale-102 transition-transform duration-200">
                <label className="block text-sm font-medium text-slate-700 mb-3">
                  When?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {["Today", "This Week", "Next Week", "Flexible"].map((option) => (
                    <button
                      key={option}
                      onClick={() => setTiming(option)}
                      className={`px-4 py-3 text-sm rounded-xl transition-all duration-300 font-medium transform hover:scale-105 ${
                        timing === option
                          ? "bg-slate-900 text-white scale-105 shadow-lg"
                          : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200 hover:shadow-md"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <Button
                onClick={handleGetQuote}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold h-12 text-base rounded-xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                Get Quote ⚡
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
        
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .animate-fade-in-left {
          animation: fade-in-left 0.6s ease-out forwards;
        }
        
        .animate-fade-in-right {
          animation: fade-in-right 0.6s ease-out forwards;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-400 {
          animation-delay: 0.4s;
        }
        
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
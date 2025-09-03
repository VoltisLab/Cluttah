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
    <div 
      className="relative bg-gradient-to-br from-emerald-50 via-amber-50 to-orange-100 py-16 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(236, 253, 245, 0.9) 0%, rgba(255, 251, 235, 0.95) 25%, rgba(254, 243, 199, 0.9) 50%, rgba(255, 237, 213, 0.85) 100%), url('https://images.unsplash.com/photo-1561069157-218187260215?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxnYXJiYWdlJTIwdHJ1Y2t8ZW58MHx8fHwxNzU2OTM2NDcxfDA&ixlib=rb-4.1.0&q=85')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-emerald-200/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-200/30 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-amber-200/20 rounded-full blur-lg"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Stats Bar */}
        <div className="flex justify-center items-center space-x-8 mb-12 bg-white/90 backdrop-blur-sm rounded-full py-4 px-8 mx-auto max-w-fit shadow-lg border border-orange-100">
          <div className="flex items-center text-sm font-medium text-slate-700">
            <Users className="h-4 w-4 mr-2 text-emerald-600" />
            100K Happy customers
          </div>
          <div className="flex items-center text-sm font-medium text-slate-700">
            <Truck className="h-4 w-4 mr-2 text-amber-600" />
            200,000+ Tonnes shifted
          </div>
          <div className="flex items-center text-sm font-medium text-slate-700">
            <Star className="h-4 w-4 mr-2 text-orange-500" />
            18,000+ Verified reviews
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <div>
              <h1 className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-emerald-700 via-slate-800 to-amber-700 bg-clip-text text-transparent leading-tight mb-4">
                UK wide rubbish removal
              </h1>
              <p className="text-xl text-slate-700 leading-relaxed font-medium">
                Same-day waste removal from a business unit or home
              </p>
            </div>

            {/* Service Selection */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                What do you need help with?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div
                  className={`p-6 border-2 rounded-2xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                    selectedService === "pile"
                      ? "border-emerald-500 bg-gradient-to-br from-emerald-50 to-emerald-100 shadow-lg"
                      : "border-orange-200 bg-white/80 hover:border-emerald-300 hover:shadow-md"
                  }`}
                  onClick={() => handleServiceSelect("pile")}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center">
                      <img 
                        src="https://images.unsplash.com/photo-1681731059898-72407df8431a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjByZW1vdmFsfGVufDB8fHx8MTc1NjkzNjQ5NXww&ixlib=rb-4.1.0&q=85" 
                        alt="Pile of Junk" 
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                    </div>
                    <h4 className="font-bold text-slate-800 mb-2 text-lg">Pile of Junk</h4>
                    <p className="text-sm text-slate-600">I have a pile of rubbish</p>
                  </div>
                </div>

                <div
                  className={`p-6 border-2 rounded-2xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                    selectedService === "single"
                      ? "border-amber-500 bg-gradient-to-br from-amber-50 to-orange-100 shadow-lg"
                      : "border-orange-200 bg-white/80 hover:border-amber-300 hover:shadow-md"
                  }`}
                  onClick={() => handleServiceSelect("single")}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-100 to-orange-200 rounded-2xl flex items-center justify-center">
                      <img 
                        src="https://images.unsplash.com/photo-1671351967814-834d376fcd1d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwyfHxmdXJuaXR1cmUlMjByZW1vdmFsfGVufDB8fHx8MTc1NjkzNjQ5NXww&ixlib=rb-4.1.0&q=85" 
                        alt="Single Items" 
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                    </div>
                    <h4 className="font-bold text-slate-800 mb-2 text-lg">Single Items</h4>
                    <p className="text-sm text-slate-600">I have specific items</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="flex items-center space-x-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-100">
              <div className="flex items-center text-sm text-slate-700 font-medium">
                <Clock className="h-5 w-5 mr-2 text-emerald-600" />
                Same Day Service
              </div>
              <div className="flex items-center text-sm text-slate-700 font-medium">
                <Shield className="h-5 w-5 mr-2 text-amber-600" />
                Fully Licensed & Insured
              </div>
              <div className="flex items-center text-sm text-slate-700 font-medium">
                <Recycle className="h-5 w-5 mr-2 text-orange-600" />
                95% Recycling Rate
              </div>
            </div>
          </div>

          {/* Right Side - Booking Form */}
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-orange-100 relative overflow-hidden">
            {/* Decorative gradient overlay */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-500 via-amber-500 to-orange-500"></div>
            
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-700 to-amber-700 bg-clip-text text-transparent mb-2">Get a Quote</h3>
              <p className="text-slate-600">Professional service in minutes</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Collection postcode?
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input
                    type="text"
                    placeholder="Enter your postcode"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    className="pl-10 h-12 text-slate-900 border-orange-200 focus:border-emerald-500 focus:ring-emerald-500 rounded-xl bg-white/80"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  When do you need this?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {["ASAP", "Next Few Days", "1 Week +", "Not Sure Yet"].map((option) => (
                    <button
                      key={option}
                      onClick={() => setTiming(option)}
                      className={`px-3 py-3 text-sm rounded-xl transition-all font-medium ${
                        timing === option
                          ? "bg-gradient-to-r from-emerald-600 to-amber-600 text-white shadow-lg"
                          : "bg-gradient-to-r from-orange-50 to-amber-50 text-slate-700 hover:from-emerald-50 hover:to-amber-50 border border-orange-200"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <Button
                onClick={handleGetQuote}
                className="w-full bg-gradient-to-r from-emerald-600 via-amber-600 to-orange-600 hover:from-emerald-700 hover:via-amber-700 hover:to-orange-700 text-white font-bold h-14 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Get a Quote ✨
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
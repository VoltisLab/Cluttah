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
    <div className="bg-gradient-to-b from-slate-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Bar */}
        <div className="flex justify-center items-center space-x-12 mb-16 bg-white rounded-2xl py-4 px-8 mx-auto max-w-fit shadow-sm border border-slate-100">
          <div className="flex items-center text-sm font-medium text-slate-600">
            <Users className="h-4 w-4 mr-2 text-slate-500" />
            100K Happy customers
          </div>
          <div className="flex items-center text-sm font-medium text-slate-600">
            <Truck className="h-4 w-4 mr-2 text-slate-500" />
            200,000+ Tonnes shifted
          </div>
          <div className="flex items-center text-sm font-medium text-slate-600">
            <Star className="h-4 w-4 mr-2 text-slate-500" />
            18,000+ Verified reviews
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <div>
              <h1 className="text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6">
                UK wide rubbish removal
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Same-day waste removal from a business unit or home
              </p>
            </div>

            {/* Service Selection */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">
                What do you need help with?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div
                  className={`p-6 border rounded-xl cursor-pointer transition-all duration-200 ${
                    selectedService === "pile"
                      ? "border-slate-900 bg-slate-50"
                      : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                  }`}
                  onClick={() => handleServiceSelect("pile")}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-slate-100 rounded-xl flex items-center justify-center">
                      <img 
                        src="https://images.unsplash.com/photo-1681731059898-72407df8431a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjByZW1vdmFsfGVufDB8fHx8MTc1NjkzNjQ5NXww&ixlib=rb-4.1.0&q=85" 
                        alt="Pile of Junk" 
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2">Pile of Junk</h4>
                    <p className="text-sm text-slate-600">I have a pile of rubbish</p>
                  </div>
                </div>

                <div
                  className={`p-6 border rounded-xl cursor-pointer transition-all duration-200 ${
                    selectedService === "single"
                      ? "border-slate-900 bg-slate-50"
                      : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                  }`}
                  onClick={() => handleServiceSelect("single")}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-slate-100 rounded-xl flex items-center justify-center">
                      <img 
                        src="https://images.unsplash.com/photo-1671351967814-834d376fcd1d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwyfHxmdXJuaXR1cmUlMjByZW1vdmFsfGVufDB8fHx8MTc1NjkzNjQ5NXww&ixlib=rb-4.1.0&q=85" 
                        alt="Single Items" 
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2">Single Items</h4>
                    <p className="text-sm text-slate-600">I have specific items</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="flex items-center space-x-8 bg-white rounded-xl p-4 border border-slate-100">
              <div className="flex items-center text-sm text-slate-600">
                <Clock className="h-5 w-5 mr-2 text-slate-400" />
                Same Day Service
              </div>
              <div className="flex items-center text-sm text-slate-600">
                <Shield className="h-5 w-5 mr-2 text-slate-400" />
                Fully Licensed & Insured
              </div>
              <div className="flex items-center text-sm text-slate-600">
                <Recycle className="h-5 w-5 mr-2 text-slate-400" />
                95% Recycling Rate
              </div>
            </div>
          </div>

          {/* Right Side - Booking Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-slate-900 mb-2">Get a Quote</h3>
              <p className="text-slate-600">Professional service in minutes</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                  Collection postcode?
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input
                    type="text"
                    placeholder="Enter your postcode"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    className="pl-10 h-12 text-slate-900 border-slate-200 focus:border-slate-900 focus:ring-slate-900 rounded-xl"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                  When do you need this?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {["ASAP", "Next Few Days", "1 Week +", "Not Sure Yet"].map((option) => (
                    <button
                      key={option}
                      onClick={() => setTiming(option)}
                      className={`px-4 py-3 text-sm rounded-xl transition-all font-medium ${
                        timing === option
                          ? "bg-slate-900 text-white"
                          : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <Button
                onClick={handleGetQuote}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold h-12 text-base rounded-xl"
              >
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
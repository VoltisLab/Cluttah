import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search, Users, Truck, Star, Sparkles, CheckCircle } from "lucide-react";
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
        description: "Choose either 'Premium Clearance' or 'Single Items'",
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
      description: "We'll contact you shortly with a personalized premium quote.",
    });

    setSelectedService(null);
    setPostcode("");
    setTiming("");
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-10 text-white">
              {/* Premium Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                <Sparkles className="h-4 w-4 mr-2 text-yellow-400" />
                <span className="text-sm font-medium">Premium Clearance Service</span>
              </div>

              {/* Main Heading */}
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white via-purple-200 to-indigo-200 bg-clip-text text-transparent">
                    UK's Premier
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Clearance Service
                  </span>
                </h1>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="h-6 w-6 text-indigo-400 mr-2" />
                    <span className="text-2xl font-bold text-white">250K+</span>
                  </div>
                  <span className="text-gray-300 text-sm">Premium Clients</span>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Truck className="h-6 w-6 text-purple-400 mr-2" />
                    <span className="text-2xl font-bold text-white">500K+</span>
                  </div>
                  <span className="text-gray-300 text-sm">Tonnes Cleared</span>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Star className="h-6 w-6 text-yellow-400 mr-2" />
                    <span className="text-2xl font-bold text-white">25K+</span>
                  </div>
                  <span className="text-gray-300 text-sm">5-Star Reviews</span>
                </div>
              </div>

              {/* Subtitle */}
              <p className="text-xl text-gray-300 leading-relaxed">
                Experience luxury clearance services with same-day availability, 
                white-glove treatment, and 95% recycling commitment.
              </p>

              {/* Service Selection */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-6">
                  What do you need help with?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div
                    className={`group p-8 border-2 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 ${
                      selectedService === "premium"
                        ? "border-indigo-400 bg-indigo-500/20 backdrop-blur-md shadow-xl"
                        : "border-white/20 bg-white/5 backdrop-blur-md hover:border-white/40 hover:bg-white/10"
                    }`}
                    onClick={() => handleServiceSelect("premium")}
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-semibold text-white mb-2 text-lg">Premium Clearance</h4>
                      <p className="text-sm text-gray-300">Complete property clearance with luxury service</p>
                    </div>
                  </div>

                  <div
                    className={`group p-8 border-2 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 ${
                      selectedService === "single"
                        ? "border-purple-400 bg-purple-500/20 backdrop-blur-md shadow-xl"
                        : "border-white/20 bg-white/5 backdrop-blur-md hover:border-white/40 hover:bg-white/10"
                    }`}
                    onClick={() => handleServiceSelect("single")}
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Sparkles className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-semibold text-white mb-2 text-lg">Selective Items</h4>
                      <p className="text-sm text-gray-300">Individual premium item collection</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Booking Form */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl"></div>
              <div className="relative bg-white/95 backdrop-blur-md p-10 rounded-3xl shadow-2xl border border-white/20">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Get Premium Quote</h3>
                  <p className="text-gray-600">Luxury clearance service in minutes</p>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Collection postcode
                    </label>
                    <div className="relative">
                      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        type="text"
                        placeholder="Enter your postcode"
                        value={postcode}
                        onChange={(e) => setPostcode(e.target.value)}
                        className="pl-12 h-14 text-gray-900 rounded-xl border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      When do you need this?
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {["Today", "This Week", "Next Week", "Flexible"].map((option) => (
                        <button
                          key={option}
                          onClick={() => setTiming(option)}
                          className={`px-4 py-3 text-sm rounded-xl transition-all duration-300 font-medium ${
                            timing === option
                              ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                              : "bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  <Button
                    onClick={handleGetQuote}
                    className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white font-semibold h-14 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  >
                    <Sparkles className="mr-2 h-5 w-5" />
                    Get Premium Quote
                  </Button>
                  
                  <div className="text-center">
                    <p className="text-xs text-gray-500">
                      ⚡ Same-day service available • 🛡️ Fully insured • ♻️ 95% recycling rate
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
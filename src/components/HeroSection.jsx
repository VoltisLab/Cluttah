import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search, Users, Truck, Star, CheckCircle, Award } from "lucide-react";
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
      description: "We'll contact you shortly with a personalized quote.",
    });

    setSelectedService(null);
    setPostcode("");
    setTiming("");
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-slate-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Premium Badge */}
            <div className="inline-flex items-center px-3 py-1 bg-slate-100 rounded-full text-sm text-slate-600">
              <Award className="h-4 w-4 mr-2" />
              Premium Clearance Service
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                UK's Premier<br />
                <span className="text-slate-600">Clearance Service</span>
              </h1>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-5 w-5 text-slate-600 mr-2" />
                  <span className="text-2xl font-bold text-slate-800">250K+</span>
                </div>
                <span className="text-slate-600 text-sm">Premium Clients</span>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Truck className="h-5 w-5 text-slate-600 mr-2" />
                  <span className="text-2xl font-bold text-slate-800">500K+</span>
                </div>
                <span className="text-slate-600 text-sm">Tonnes Cleared</span>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-5 w-5 text-slate-600 mr-2" />
                  <span className="text-2xl font-bold text-slate-800">25K+</span>
                </div>
                <span className="text-slate-600 text-sm">5-Star Reviews</span>
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-xl text-slate-600 leading-relaxed">
              Experience professional clearance services with same-day availability, 
              expert handling, and 95% recycling commitment.
            </p>

            {/* Service Selection */}
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-4">
                What do you need help with?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div
                  className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
                    selectedService === "premium"
                      ? "border-slate-800 bg-slate-50"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                  onClick={() => handleServiceSelect("premium")}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 bg-slate-100 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-slate-600" />
                    </div>
                    <h4 className="font-semibold text-slate-800 mb-2">Premium Clearance</h4>
                    <p className="text-sm text-slate-600">Complete property clearance service</p>
                  </div>
                </div>

                <div
                  className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
                    selectedService === "single"
                      ? "border-slate-800 bg-slate-50"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                  onClick={() => handleServiceSelect("single")}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 bg-slate-100 rounded-lg flex items-center justify-center">
                      <Truck className="w-6 h-6 text-slate-600" />
                    </div>
                    <h4 className="font-semibold text-slate-800 mb-2">Single Items</h4>
                    <p className="text-sm text-slate-600">Individual item collection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Booking Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-slate-200">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Get Your Quote</h3>
              <p className="text-slate-600">Professional service in minutes</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Collection postcode
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input
                    type="text"
                    placeholder="Enter your postcode"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    className="pl-10 h-12 text-slate-900 border-slate-200 focus:border-slate-800 focus:ring-slate-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  When do you need this?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {["Today", "This Week", "Next Week", "Flexible"].map((option) => (
                    <button
                      key={option}
                      onClick={() => setTiming(option)}
                      className={`px-3 py-2 text-sm rounded-lg transition-all font-medium ${
                        timing === option
                          ? "bg-slate-800 text-white"
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
                className="w-full bg-slate-800 hover:bg-slate-700 text-white font-medium h-12 text-lg rounded-lg"
              >
                Get Quote
              </Button>
              
              <div className="text-center">
                <p className="text-xs text-slate-500">
                  ⚡ Same-day service • 🛡️ Fully insured • ♻️ 95% recycling
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
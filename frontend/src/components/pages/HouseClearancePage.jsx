import React, { useState } from "react";
import Layout from "../Layout";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useToast } from "../../hooks/use-toast";
import { Link } from "react-router-dom";
import { Home, Clock, Shield, Star, CheckCircle, Search } from "lucide-react";

const HouseClearancePage = () => {
  const [postcode, setPostcode] = useState("");
  const [timing, setTiming] = useState("");
  const { toast } = useToast();

  const features = [
    "Complete property clearances",
    "Two-person professional teams",
    "All heavy lifting included",
    "Same-day service available",
    "Furniture & appliance removal",
    "Ethical recycling & donations"
  ];

  const pricing = [
    { size: "1-2 Rooms", price: "£150-300", items: "Small furniture, personal items" },
    { size: "3-4 Rooms", price: "£300-600", items: "Full home contents, white goods" },
    { size: "Whole House", price: "£600-1200", items: "Complete property clearance" },
    { size: "Estate Clearance", price: "From £800", items: "Full estate including garden" }
  ];

  const handleGetQuote = () => {
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
      title: "House Clearance Quote Requested!",
      description: "We'll contact you within 2 hours with a detailed quote.",
    });

    setPostcode("");
    setTiming("");
  };

  return (
    <Layout>
      <div>
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Home className="h-8 w-8 text-blue-600 mr-3" />
                  <span className="text-blue-600 font-semibold text-lg">House Clearance</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Professional House Clearance Service
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Complete property clearances with ethical disposal. Our experienced teams 
                  handle everything from single rooms to entire estates.
                </p>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center">
                    <Clock className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                    <div className="font-bold text-gray-900">Same Day</div>
                    <div className="text-sm text-gray-600">Available</div>
                  </div>
                  <div className="text-center">
                    <Shield className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                    <div className="font-bold text-gray-900">Fully Insured</div>
                    <div className="text-sm text-gray-600">£2M Coverage</div>
                  </div>
                  <div className="text-center">
                    <Star className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                    <div className="font-bold text-gray-900">5-Star</div>
                    <div className="text-sm text-gray-600">Service</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Quote</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Collection postcode
                    </label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        type="text"
                        placeholder="Enter your postcode"
                        value={postcode}
                        onChange={(e) => setPostcode(e.target.value)}
                        className="pl-10 h-12"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      When do you need this?
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {["ASAP", "Next Few Days", "1 Week +", "Not Sure Yet"].map((option) => (
                        <button
                          key={option}
                          onClick={() => setTiming(option)}
                          className={`px-3 py-2 text-sm rounded-md transition-all ${
                            timing === option
                              ? "bg-blue-600 text-white"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <Button
                    onClick={handleGetQuote}
                    className="w-full bg-pink-500 hover:bg-pink-600 text-white font-medium h-12 text-lg"
                  >
                    Get Free Quote
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              What's Included in Our House Clearance Service
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Transparent Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pricing.map((tier, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{tier.size}</h3>
                  <div className="text-2xl font-bold text-blue-600 mb-3">{tier.price}</div>
                  <p className="text-gray-600 text-sm">{tier.items}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                *Prices are estimates. Final pricing based on actual volume and complexity.
              </p>
              <Link to="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3">
                  Get Exact Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              How Our House Clearance Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Book Online", desc: "Quick booking with instant confirmation" },
                { step: "2", title: "Site Survey", desc: "Free assessment for larger properties" },
                { step: "3", title: "Professional Team", desc: "Uniformed team arrives on time" },
                { step: "4", title: "Complete Service", desc: "Everything cleared, cleaned, and recycled" }
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white font-bold rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{process.title}</h3>
                  <p className="text-gray-600">{process.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Clear Your Property?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Professional house clearance service with same-day availability across the UK
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 font-medium px-8 py-3">
                  Get Free Quote
                </Button>
              </Link>
              <a href="tel:08001234567">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
                  Call: 0800 123 4567
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HouseClearancePage;
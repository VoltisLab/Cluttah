import React, { useState } from "react";
import Layout from "../Layout";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useToast } from "../../hooks/use-toast";
import { Link } from "react-router-dom";
import { TreePine, Leaf, Scissors, Recycle, CheckCircle, Search } from "lucide-react";

const GardenClearancePage = () => {
  const [postcode, setPostcode] = useState("");
  const [timing, setTiming] = useState("");
  const { toast } = useToast();

  const services = [
    { icon: <Leaf className="h-6 w-6" />, title: "Green Waste", desc: "Branches, leaves, grass cuttings" },
    { icon: <TreePine className="h-6 w-6" />, title: "Garden Furniture", desc: "Tables, chairs, gazebos, planters" },
    { icon: <Scissors className="h-6 w-6" />, title: "Garden Tools", desc: "Mowers, tools, equipment" },
    { icon: <Recycle className="h-6 w-6" />, title: "Shed Clearance", desc: "Complete shed and contents" }
  ];

  const features = [
    "All types of garden waste",
    "Garden furniture removal",
    "Shed & greenhouse clearance", 
    "Landscaping waste disposal",
    "Environmentally responsible",
    "Same-day service available"
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
      title: "Garden Clearance Quote Requested!",
      description: "We'll contact you within 2 hours with a detailed quote.",
    });

    setPostcode("");
    setTiming("");
  };

  return (
    <Layout>
      <div>
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <TreePine className="h-8 w-8 text-green-600 mr-3" />
                  <span className="text-green-600 font-semibold text-lg">Garden Clearance</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Professional Garden Clearance Service
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Complete garden waste removal including green waste, furniture, and shed clearances. 
                  Environmentally responsible disposal with expert landscaping waste handling.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {services.map((service, index) => (
                    <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                      <div className="p-2 bg-green-100 rounded-full text-green-600 w-fit mx-auto mb-2">
                        {service.icon}
                      </div>
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">{service.title}</h3>
                      <p className="text-xs text-gray-600">{service.desc}</p>
                    </div>
                  ))}
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
                              ? "bg-green-600 text-white"
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

        {/* Features */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              What We Clear From Your Garden
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center p-4 bg-green-50 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Before/After Gallery */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Garden Transformations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1558297002-3da5d4ac31b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1585664811087-47f65abbad64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              ].map((image, index) => (
                <div key={index} className="aspect-video rounded-lg overflow-hidden shadow-md">
                  <img src={image} alt={`Garden clearance ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Environmental */}
        <div className="py-16 bg-green-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="p-4 bg-green-500 rounded-full w-fit mx-auto mb-6">
              <Recycle className="h-12 w-12 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Environmentally Responsible Garden Waste Disposal
            </h2>
            <p className="text-xl text-green-100 mb-8">
              We ensure all green waste is composted or recycled appropriately. 
              Garden furniture and materials are donated or recycled where possible.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
              <div>
                <div className="text-2xl font-bold mb-2">95%</div>
                <div className="text-green-100">Green waste composted</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">100%</div>
                <div className="text-green-100">Licensed disposal</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">Zero</div>
                <div className="text-green-100">Fly-tipping risk</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Transform Your Garden Today
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Professional garden clearance service with same-day availability across the UK
            </p>
            <Link to="/">
              <Button className="bg-green-600 hover:bg-green-700 text-white font-medium px-8 py-3">
                Get Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GardenClearancePage;
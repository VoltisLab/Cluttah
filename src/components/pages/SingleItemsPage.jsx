import React, { useState } from "react";
import Layout from "../Layout";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useToast } from "../../hooks/use-toast";
import { Link } from "react-router-dom";
import { Package, Sofa, Tv, Refrigerator, CheckCircle, Search, Star } from "lucide-react";

const SingleItemsPage = () => {
  const [postcode, setPostcode] = useState("");
  const [timing, setTiming] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const { toast } = useToast();

  const commonItems = [
    { icon: <Sofa className="h-8 w-8" />, name: "Sofa", price: "£35-65", desc: "2-3 seater sofas and armchairs" },
    { icon: <Tv className="h-8 w-8" />, name: "TV", price: "£25-45", desc: "All sizes including large screens" },
    { icon: <Refrigerator className="h-8 w-8" />, name: "Fridge/Freezer", price: "£45-75", desc: "White goods disposal" },
    { icon: <Package className="h-8 w-8" />, name: "Mattress", price: "£30-50", desc: "Single, double, king size" }
  ];

  const allItems = [
    "Sofa & Armchairs", "Mattresses", "White Goods", "Washing Machines",
    "Dishwashers", "Wardrobes", "Dining Tables", "TVs & Electronics",
    "Office Chairs", "Gym Equipment", "Carpets", "Mirrors"
  ];

  const features = [
    "Fixed transparent pricing",
    "Same-day collection available", 
    "Two-person team included",
    "No hidden fees or charges",
    "Responsible recycling",
    "Fully insured service"
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
      title: "Single Item Collection Booked!",
      description: `${selectedItem || 'Item'} collection requested. We'll confirm your booking shortly.`,
    });

    setPostcode("");
    setTiming("");
    setSelectedItem("");
  };

  return (
    <Layout>
      <div>
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Package className="h-8 w-8 text-purple-600 mr-3" />
                  <span className="text-purple-600 font-semibold text-lg">Single Items</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Single Item Collection Service
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Quick and easy removal of individual items with transparent pricing. 
                  Perfect for sofas, mattresses, appliances, and bulky household items.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {commonItems.map((item, index) => (
                    <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                      <div className="p-2 bg-purple-100 rounded-full text-purple-600 w-fit mx-auto mb-2">
                        {item.icon}
                      </div>
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.name}</h3>
                      <div className="text-purple-600 font-bold text-sm mb-1">{item.price}</div>
                      <p className="text-xs text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Book Your Collection</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      What item do you need collected?
                    </label>
                    <select
                      value={selectedItem}
                      onChange={(e) => setSelectedItem(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="">Select an item</option>
                      {allItems.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                      ))}
                    </select>
                  </div>
                  
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
                              ? "bg-purple-600 text-white"
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
                    Book Collection
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
              Why Choose Our Single Item Service
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center p-4 bg-purple-50 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-purple-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Transparent Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { item: "Small Items", price: "£25-35", desc: "TVs, microwaves, chairs" },
                { item: "Medium Items", price: "£35-55", desc: "Mattresses, small sofas" },
                { item: "Large Items", price: "£55-75", desc: "Large sofas, wardrobes" },
                { item: "White Goods", price: "£45-75", desc: "Fridges, washing machines" }
              ].map((pricing, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{pricing.item}</h3>
                  <div className="text-2xl font-bold text-purple-600 mb-3">{pricing.price}</div>
                  <p className="text-gray-600 text-sm">{pricing.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                *Prices include VAT, two-person team, and responsible disposal
              </p>
            </div>
          </div>
        </div>

        {/* Customer Reviews */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              What Our Customers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Sarah M.", review: "Perfect service! They collected my old sofa same day and the price was exactly as quoted.", rating: 5 },
                { name: "John D.", review: "Very professional team. They handled my heavy wardrobe with care and were punctual.", rating: 5 },
                { name: "Emma L.", review: "Great value for money. Much cheaper than other companies and excellent service.", rating: 5 }
              ].map((review, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{review.review}"</p>
                  <p className="font-semibold text-gray-900">- {review.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="py-16 bg-purple-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need a Single Item Collected?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Quick, reliable, and affordable single item removal service across the UK
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button className="bg-white text-purple-600 hover:bg-gray-100 font-medium px-8 py-3">
                  Book Collection Now
                </Button>
              </Link>
              <a href="tel:08001234567">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3">
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

export default SingleItemsPage;
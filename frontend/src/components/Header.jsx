import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { ChevronDown, Sparkles } from "lucide-react";

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navigate = useNavigate();

  const serviceLinks = [
    { name: "House Clearance", path: "/services/house-clearance" },
    { name: "Garden Clearance", path: "/services/garden-clearance" },
    { name: "Office Clearance", path: "/services/office-clearance" },
    { name: "Single Items", path: "/services/single-items" }
  ];

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100/50 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  CLUTTA
                </div>
                <div className="text-xs font-medium text-gray-500 -mt-1 tracking-wide">
                  PREMIUM CLEARANCE
                </div>
              </div>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <button
                className="flex items-center text-gray-700 hover:text-indigo-600 font-medium transition-all duration-300 hover:scale-105"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Our Services
                <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300" />
              </button>
              {isServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-gray-200/50 py-3 z-50 transform opacity-100 scale-100 transition-all duration-300"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-5 py-3 text-sm text-gray-700 hover:text-indigo-600 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-300 mx-2 rounded-lg"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/how-it-works" className="text-gray-700 hover:text-indigo-600 font-medium transition-all duration-300 hover:scale-105">
              How it works
            </Link>
            <Link to="/faq" className="text-gray-700 hover:text-indigo-600 font-medium transition-all duration-300 hover:scale-105">
              FAQ
            </Link>
            <Link to="/about-us" className="text-gray-700 hover:text-indigo-600 font-medium transition-all duration-300 hover:scale-105">
              About Us
            </Link>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-indigo-600 font-medium transition-all duration-300 hover:scale-105">
              LOG IN
            </button>
            <Button 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium px-6 py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
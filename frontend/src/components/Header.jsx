import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { ChevronDown, Truck } from "lucide-react";

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
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-slate-700 transition-colors">
                <Truck className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-slate-800">CLUTTAH</div>
                <div className="text-xs text-slate-500 -mt-1 tracking-wide">PREMIUM CLEARANCE</div>
              </div>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <button
                className="flex items-center text-slate-600 hover:text-slate-800 font-medium transition-colors"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Our Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-4 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-50 transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/how-it-works" className="text-slate-600 hover:text-slate-800 font-medium transition-colors">
              How it works
            </Link>
            <Link to="/faq" className="text-slate-600 hover:text-slate-800 font-medium transition-colors">
              FAQ
            </Link>
            <Link to="/about-us" className="text-slate-600 hover:text-slate-800 font-medium transition-colors">
              About Us
            </Link>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <button className="text-slate-600 hover:text-slate-800 font-medium transition-colors">
              LOG IN
            </button>
            <Button 
              className="bg-slate-800 hover:bg-slate-700 text-white font-medium px-6 py-2 rounded-lg transition-colors"
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
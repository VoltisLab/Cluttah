import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

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
          <Link to="/" className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm6 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z"/>
                </svg>
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">LITTA</div>
                <div className="text-xs text-gray-500 -mt-1">SUSTAINABLE JUNK REMOVAL</div>
              </div>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <button
                className="flex items-center text-gray-700 hover:text-gray-900 font-medium transition-colors"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Our Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/how-it-works" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              How it works
            </Link>
            <Link to="/faq" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              FAQ
            </Link>
            <Link to="/about-us" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              About Us
            </Link>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              LOG IN
            </button>
            <Button 
              className="bg-pink-500 hover:bg-pink-600 text-white font-medium px-6 py-2 rounded-lg transition-colors"
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
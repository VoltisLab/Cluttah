import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-white via-purple-200 to-indigo-200 bg-clip-text text-transparent">
                  CLUTTA
                </div>
                <div className="text-xs font-medium text-gray-400 tracking-wide">
                  PREMIUM CLEARANCE
                </div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              UK's most sophisticated waste removal service. Luxury clearances with 
              white-glove treatment, environmental responsibility, and unmatched professionalism.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/10 backdrop-blur-md rounded-lg text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 backdrop-blur-md rounded-lg text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 backdrop-blur-md rounded-lg text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 backdrop-blur-md rounded-lg text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Premium Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Premium Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/services/house-clearance" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-2 transform inline-block">
                  Luxury House Clearance
                </Link>
              </li>
              <li>
                <Link to="/services/garden-clearance" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-2 transform inline-block">
                  Garden Transformation
                </Link>
              </li>
              <li>
                <Link to="/services/office-clearance" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-2 transform inline-block">
                  Executive Office Clearance
                </Link>
              </li>
              <li>
                <Link to="/services/single-items" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-2 transform inline-block">
                  Premium Item Collection
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about-us" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-2 transform inline-block">
                  About Clutta
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-2 transform inline-block">
                  How We Work
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-2 transform inline-block">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-2 transform inline-block">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Premium Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">Premium Support</h3>
            <div className="space-y-4 text-sm text-gray-300">
              <div className="flex items-center">
                <span className="text-2xl mr-3">📞</span>
                <div>
                  <p className="text-white font-medium">0800 CLUTTA (258882)</p>
                  <p className="text-xs">24/7 Premium Support</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-3">✉️</span>
                <div>
                  <p className="text-white font-medium">premium@clutta.co.uk</p>
                  <p className="text-xs">Response within 2 hours</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-3">🕒</span>
                <div>
                  <p className="text-white font-medium">24/7 Operations</p>
                  <p className="text-xs">Including weekends & holidays</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-3">🌍</span>
                <div>
                  <p className="text-white font-medium">UK-Wide Premium Service</p>
                  <p className="text-xs">London, Manchester, Edinburgh & more</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700/50 mt-16 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              &copy; 2025 Clutta Premium Services. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
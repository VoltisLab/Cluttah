import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Truck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <Truck className="w-4 h-4 text-slate-800" />
              </div>
              <div>
                <div className="text-xl font-bold text-white">CLUTTAH</div>
                <div className="text-xs text-slate-400 tracking-wide">PREMIUM CLEARANCE</div>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              UK's premier clearance service. Professional, reliable, 
              and environmentally responsible waste removal for homes and businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services/house-clearance" className="text-slate-300 hover:text-white transition-colors">
                  House Clearance
                </Link>
              </li>
              <li>
                <Link to="/services/garden-clearance" className="text-slate-300 hover:text-white transition-colors">
                  Garden Clearance
                </Link>
              </li>
              <li>
                <Link to="/services/office-clearance" className="text-slate-300 hover:text-white transition-colors">
                  Office Clearance
                </Link>
              </li>
              <li>
                <Link to="/services/single-items" className="text-slate-300 hover:text-white transition-colors">
                  Single Items
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about-us" className="text-slate-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-slate-300 hover:text-white transition-colors">
                  How it Works
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-slate-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <div className="space-y-2 text-sm text-slate-300">
              <p>📞 0800 CLUTTAH (258824)</p>
              <p>✉️ hello@cluttah.co.uk</p>
              <p>🕒 Mon-Sun: 7AM-8PM</p>
              <p>📍 UK Wide Coverage</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm text-slate-400">
          <p>&copy; 2025 Cluttah. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useState } from "react";
import Layout from "../Layout";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useToast } from "../../hooks/use-toast";
import { Link } from "react-router-dom";
import { Building, Monitor, FileText, Shield, CheckCircle, Search, Clock } from "lucide-react";

const OfficeClearancePage = () => {
  const [postcode, setPostcode] = useState("");
  const [timing, setTiming] = useState("");
  const { toast } = useToast();

  const services = [
    { icon: <Monitor className="h-6 w-6" />, title: "IT Equipment", desc: "Computers, monitors, servers" },
    { icon: <Building className="h-6 w-6" />, title: "Office Furniture", desc: "Desks, chairs, filing cabinets" },
    { icon: <FileText className="h-6 w-6" />, title: "Document Destruction", desc: "Confidential document shredding" },
    { icon: <Shield className="h-6 w-6" />, title: "Secure Service", desc: "Licensed & insured clearance" }
  ];

  const features = [
    "Complete office clearances",
    "IT equipment disposal",
    "Confidential document destruction",
    "Furniture removal & recycling",
    "Out-of-hours service available",
    "Certificates of destruction provided"
  ];

  const industries = [
    "Corporate offices",
    "Medical practices", 
    "Legal firms",
    "Educational institutions",
    "Government departments",
    "Retail businesses"
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
      title: "Office Clearance Quote Requested!",
      description: "We'll contact you within 2 hours with a detailed quote.",
    });

    setPostcode("");
    setTiming("");
  };

  return (
    <Layout>
      <div>
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Building className="h-8 w-8 text-blue-600 mr-3" />
                  <span className="text-blue-600 font-semibold text-lg">Office Clearance</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Professional Office Clearance Service
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Secure and efficient commercial clearances including IT equipment disposal, 
                  furniture removal, and confidential document destruction.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {services.map((service, index) => (
                    <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                      <div className="p-2 bg-blue-100 rounded-full text-blue-600 w-fit mx-auto mb-2">
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

        {/* Features */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Office Clearance Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Industries We Serve */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Industries We Serve
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="p-3 bg-blue-100 rounded-full w-fit mx-auto mb-4">
                    <Building className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">{industry}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Security & Compliance */}
        <div className="py-16 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="p-4 bg-blue-500 rounded-full w-fit mx-auto mb-6">
              <Shield className="h-12 w-12 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Secure & Compliant Service
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              We understand the importance of data security and regulatory compliance. 
              All services are conducted with the highest security standards.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
              <div>
                <div className="text-2xl font-bold mb-2">GDPR</div>
                <div className="text-blue-100">Compliant</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">£2M</div>
                <div className="text-blue-100">Insurance</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">24/7</div>
                <div className="text-blue-100">Available</div>
              </div>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Office Clearance Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Site Survey", desc: "Free assessment of your requirements" },
                { step: "2", title: "Secure Planning", desc: "Detailed clearance plan with security protocols" },
                { step: "3", title: "Professional Team", desc: "Experienced team with security clearance" },
                { step: "4", title: "Complete Service", desc: "Full clearance with certificates provided" }
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

        {/* CTA */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Need Professional Office Clearance?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Secure, efficient, and compliant commercial clearance services across the UK
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3">
                  Get Free Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
                  Contact Our Team  
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OfficeClearancePage;
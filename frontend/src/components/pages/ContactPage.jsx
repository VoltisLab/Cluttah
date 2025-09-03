import React, { useState } from "react";
import Layout from "../Layout";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useToast } from "../../hooks/use-toast";
import { MapPin, Phone, Mail, Clock, MessageCircle, Users, Truck, Crown, Sparkles, Shield } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in required fields",
        description: "Name, email, and message are required.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Premium inquiry submitted successfully!",
      description: "Our luxury service team will contact you within 2 hours."
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Premium Hotline",
      details: ["0800 CLUTTA (258882)", "24/7 premium support available"],
      action: "tel:0800258882"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Premium Email",
      details: ["premium@clutta.co.uk", "Response within 2 hours guaranteed"],
      action: "mailto:premium@clutta.co.uk"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Service Hours",
      details: ["24/7 Premium Operations", "Including weekends & holidays"],
      action: null
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Premium Coverage",
      details: ["UK-Wide Luxury Service", "London, Manchester, Edinburgh & more"],
      action: null
    }
  ];

  const quickStats = [
    { icon: <Users className="h-8 w-8" />, number: "250K+", label: "Premium Clients" },
    { icon: <Truck className="h-8 w-8" />, number: "24/7", label: "Premium Support" },
    { icon: <MessageCircle className="h-8 w-8" />, number: "<2hrs", label: "Response Time" }
  ];

  return (
    <Layout>
      <div className="relative">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8">
              <Crown className="h-4 w-4 mr-2 text-yellow-400" />
              <span className="text-sm font-medium text-white">Premium Support</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-white via-purple-200 to-indigo-200 bg-clip-text text-transparent">
                Contact Our Premium Team
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get in touch with our luxury service specialists for personalized quotes, 
              premium support, and white-glove clearance solutions.
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {quickStats.map((stat, index) => (
                <div key={index} className="text-center p-8 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="p-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl text-white w-fit mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="py-16 bg-gradient-to-br from-gray-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-md rounded-3xl"></div>
                <div className="relative bg-white/95 backdrop-blur-md p-10 rounded-3xl shadow-2xl border border-white/20">
                  <div className="text-center mb-8">
                    <Sparkles className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Send Premium Message</h2>
                    <p className="text-gray-600">Our luxury service team is here to help</p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Name *
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          className="w-full h-12 rounded-xl border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          className="w-full h-12 rounded-xl border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Your phone number"
                          className="w-full h-12 rounded-xl border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Premium Service
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full h-12 px-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        >
                          <option value="">Select premium service</option>
                          <option value="luxury-house-clearance">Luxury House Clearance</option>
                          <option value="garden-transformation">Garden Transformation</option>
                          <option value="executive-office-clearance">Executive Office Clearance</option>
                          <option value="premium-single-items">Premium Single Items</option>
                          <option value="other">Other Premium Service</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your premium clearance needs..."
                        rows={5}
                        className="w-full rounded-xl border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white font-semibold h-14 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    >
                      <Crown className="mr-2 h-5 w-5" />
                      Send Premium Message
                    </Button>
                  </form>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-white/95 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/20">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      Premium Contact
                    </span>
                  </h2>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start group">
                        <div className="p-3 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl text-indigo-600 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 mb-2 text-lg">{info.title}</h3>
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-gray-600">
                              {info.action && detailIndex === 0 ? (
                                <a href={info.action} className="text-indigo-600 hover:text-indigo-700 font-semibold">
                                  {detail}
                                </a>
                              ) : (
                                detail
                              )}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="bg-gradient-to-br from-pink-500 to-orange-500 p-8 rounded-3xl text-white shadow-2xl">
                  <div className="text-center">
                    <Shield className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-4">
                      Need Urgent Premium Service?
                    </h3>
                    <p className="mb-6 text-pink-100">
                      For same-day luxury collections and emergency clearances, 
                      contact our premium hotline immediately.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a href="tel:0800258882">
                        <Button className="bg-white text-pink-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                          <Phone className="mr-2 h-4 w-4" />
                          Call: 0800 CLUTTA
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
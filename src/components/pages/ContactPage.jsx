import React, { useState } from "react";
import Layout from "../Layout";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useToast } from "../../hooks/use-toast";
import { MapPin, Phone, Mail, Clock, MessageCircle, Users, Truck, Shield } from "lucide-react";

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
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours."
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
      title: "Phone",
      details: ["0800 CLUTTAH (258824)", "Available 7 days a week"],
      action: "tel:0800258824"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: ["hello@cluttah.co.uk", "Response within 24 hours"],
      action: "mailto:hello@cluttah.co.uk"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Hours",
      details: ["Monday - Sunday", "7:00 AM - 8:00 PM"],
      action: null
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Coverage",
      details: ["UK Wide Service", "London, Manchester, Birmingham & more"],
      action: null
    }
  ];

  const quickStats = [
    { icon: <Users className="h-8 w-8" />, number: "250K+", label: "Happy Customers" },
    { icon: <Truck className="h-8 w-8" />, number: "24/7", label: "Booking Available" },
    { icon: <MessageCircle className="h-8 w-8" />, number: "<24hrs", label: "Response Time" }
  ];

  return (
    <Layout>
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Get in touch with our friendly team for quotes, questions, or support. 
              We're here to help with all your waste removal needs.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {quickStats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md border border-slate-200">
                <div className="p-3 bg-slate-100 rounded-lg text-slate-600 w-fit mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-slate-800 mb-1">{stat.number}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="w-full border-slate-200 focus:border-slate-800 focus:ring-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="w-full border-slate-200 focus:border-slate-800 focus:ring-slate-800"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Phone
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Your phone number"
                      className="w-full border-slate-200 focus:border-slate-800 focus:ring-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Service Type
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-slate-800"
                    >
                      <option value="">Select a service</option>
                      <option value="house-clearance">House Clearance</option>
                      <option value="garden-clearance">Garden Clearance</option>
                      <option value="office-clearance">Office Clearance</option>
                      <option value="single-items">Single Items</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your waste removal needs..."
                    rows={5}
                    className="w-full border-slate-200 focus:border-slate-800 focus:ring-slate-800"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-slate-800 hover:bg-slate-700 text-white font-medium py-3"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-lg shadow-lg border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start">
                      <div className="p-2 bg-slate-100 rounded-lg text-slate-600 mr-4 flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800 mb-1">{info.title}</h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-slate-600 text-sm">
                            {info.action && detailIndex === 0 ? (
                              <a href={info.action} className="text-slate-800 hover:underline font-medium">
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
              <div className="bg-slate-800 p-6 rounded-lg text-white">
                <h3 className="text-lg font-bold mb-2">
                  Need Urgent Collection?
                </h3>
                <p className="text-slate-300 text-sm mb-4">
                  For same-day emergency collections, call us directly or use our instant booking system.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="tel:0800258824">
                    <Button className="bg-white text-slate-800 hover:bg-slate-100 font-medium">
                      Call Now: 0800 CLUTTAH
                    </Button>
                  </a>
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
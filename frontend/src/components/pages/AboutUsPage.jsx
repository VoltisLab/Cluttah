import React from "react";
import Layout from "../Layout";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { Users, Target, Award, Heart, Truck, Recycle, Shield, Clock, Sparkles, Crown, Star } from "lucide-react";

const AboutUsPage = () => {
  const stats = [
    { number: "250K+", label: "Premium Clients", icon: <Users className="h-6 w-6" /> },
    { number: "500K+", label: "Tonnes Cleared", icon: <Truck className="h-6 w-6" /> },
    { number: "95%", label: "Recycling Rate", icon: <Recycle className="h-6 w-6" /> },
    { number: "25K+", label: "5-Star Reviews", icon: <Award className="h-6 w-6" /> }
  ];

  const values = [
    {
      icon: <Crown className="h-8 w-8" />,
      title: "Luxury Service Excellence",
      description: "We provide white-glove treatment for every client, ensuring the highest standards of service delivery with attention to every detail."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Trust & Reliability",
      description: "With £5 million premium insurance coverage and thousands of satisfied luxury clients, trust Clutta for the most important clearances."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Environmental Leadership",
      description: "Leading the industry with 95% recycling rates and partnerships with premium environmental facilities across the UK."
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Innovation & Technology",
      description: "Advanced booking systems, real-time tracking, and digital documentation ensure a seamless luxury experience."
    }
  ];

  const team = [
    {
      name: "Alexander Hayes",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      description: "Alexander founded Clutta with a vision to revolutionize premium clearance services through luxury experiences and environmental excellence."
    },
    {
      name: "Victoria Sterling",
      role: "Operations Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c32c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      description: "Victoria oversees our premium operations nationwide, ensuring consistent luxury standards across all Clutta service locations."
    },
    {
      name: "Marcus Chen",
      role: "Sustainability Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      description: "Marcus leads our environmental initiatives and maintains partnerships with premium recycling facilities and luxury charitable organizations."
    }
  ];

  return (
    <Layout>
      <div className="relative">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8">
              <Crown className="h-4 w-4 mr-2 text-yellow-400" />
              <span className="text-sm font-medium text-white">Premium Clearance Heritage</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-white via-purple-200 to-indigo-200 bg-clip-text text-transparent">
                About Clutta
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The UK's most sophisticated clearance service, combining luxury treatment 
              with environmental excellence since 2019.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl text-indigo-600 w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full border border-indigo-200 mb-6">
                  <Sparkles className="h-4 w-4 mr-2 text-indigo-600" />
                  <span className="text-sm font-medium text-indigo-700">Our Premium Journey</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                  <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Redefining Luxury Clearance
                  </span>
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                  <p>
                    Founded in 2019, Clutta began with an ambitious mission: to transform waste clearance 
                    into a luxury service experience. What started as a premium service in London has evolved 
                    into the UK's most trusted luxury clearance company.
                  </p>
                  <p>
                    We recognized that traditional clearance services lacked sophistication, discretion, 
                    and environmental responsibility. That's why we built Clutta differently - with luxury 
                    service standards, cutting-edge technology, and uncompromising environmental ethics.
                  </p>
                  <p>
                    Today, we're proud to serve over 250,000 premium clients across the UK, 
                    have cleared over 500,000 tonnes responsibly, and maintain an unprecedented 95% recycling rate. 
                    We're just beginning our mission to set new standards in luxury clearance services.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Clutta premium team at work"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-xl">
                  <Crown className="h-16 w-16 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Our Premium Values
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that drive our commitment to luxury clearance excellence
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="group p-8 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
                  <div className="p-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl text-white w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Meet Our Leadership Team
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The visionaries behind UK's premier luxury clearance service
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {team.map((member, index) => (
                <div key={index} className="group text-center bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="relative mb-6">
                    <div className="w-40 h-40 rounded-full overflow-hidden mx-auto shadow-lg">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full shadow-lg">
                      <Star className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-indigo-600 font-semibold mb-4 text-lg">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <Crown className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-white mb-4">
                Experience Premium Clearance
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of satisfied premium clients who trust Clutta for their most important clearance needs
              </p>
            </div>
            <Link to="/">
              <Button className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white font-semibold px-10 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <Sparkles className="mr-2 h-5 w-5" />
                Get Your Premium Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUsPage;
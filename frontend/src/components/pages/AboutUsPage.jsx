import React from "react";
import Layout from "../Layout";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { Users, Target, Award, Heart, Truck, Recycle, Shield, Clock } from "lucide-react";

const AboutUsPage = () => {
  const stats = [
    { number: "100K+", label: "Happy Customers", icon: <Users className="h-6 w-6" /> },
    { number: "200K+", label: "Tonnes Collected", icon: <Truck className="h-6 w-6" /> },
    { number: "90%", label: "Recycling Rate", icon: <Recycle className="h-6 w-6" /> },
    { number: "18K+", label: "5-Star Reviews", icon: <Award className="h-6 w-6" /> }
  ];

  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Environmental Responsibility",
      description: "We're committed to protecting the environment by recycling up to 90% of collected waste and working with licensed facilities to ensure proper disposal."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Reliability & Trust",
      description: "With £2 million public liability insurance and thousands of satisfied customers, you can trust us to handle your waste removal safely and professionally."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Convenience",
      description: "Same-day service, live tracking, and flexible scheduling make waste removal as convenient as possible for our customers across the UK."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Excellence",
      description: "We strive for excellence in every job, from single item collections to complete house clearances, ensuring customer satisfaction every time."
    }
  ];

  const team = [
    {
      name: "James Mitchell",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      description: "James founded Litta with a vision to revolutionize waste removal through sustainable practices and exceptional customer service."
    },
    {
      name: "Sarah Williams",
      role: "Operations Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c32c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      description: "Sarah oversees our nationwide operations, ensuring consistent quality and efficiency across all our service locations."
    },
    {
      name: "David Chen",
      role: "Environmental Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      description: "David leads our sustainability initiatives and maintains our partnerships with recycling facilities and charitable organizations."
    }
  ];

  return (
    <Layout>
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About Litta
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're the UK's leading sustainable waste removal service, committed to 
              providing exceptional customer service while protecting our environment.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="p-4 bg-teal-100 rounded-full text-teal-600 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Our Story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2018, Litta began with a simple mission: to make waste removal 
                  convenient, reliable, and environmentally responsible. What started as a 
                  local service in London has grown into the UK's most trusted waste removal company.
                </p>
                <p>
                  We recognized that traditional waste removal was often unreliable, 
                  expensive, and harmful to the environment. That's why we built Litta 
                  differently - with technology, transparency, and sustainability at our core.
                </p>
                <p>
                  Today, we're proud to serve over 100,000 customers across the UK, 
                  have collected over 200,000 tonnes of waste, and maintain a 90% recycling rate. 
                  But we're just getting started on our mission to revolutionize waste management.
                </p>
              </div>
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Litta team at work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="p-3 bg-teal-100 rounded-lg text-teal-600 w-fit mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-teal-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-lg p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Join Thousands of Satisfied Customers</h2>
            <p className="text-xl mb-6 text-teal-100">
              Experience the UK's most reliable and sustainable waste removal service
            </p>
            <Link to="/">
              <Button className="bg-white text-teal-600 hover:bg-gray-100 font-medium px-8 py-3">
                Get Your Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUsPage;
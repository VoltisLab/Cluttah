import React from "react";
import Layout from "../Layout";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { Users, Target, Award, Heart, Truck, Recycle, Shield, Clock, Crown, Star } from "lucide-react";

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
      description: "With £5 million premium insurance coverage and thousands of satisfied luxury clients, trust Cluttah for the most important clearances."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Environmental Leadership",
      description: "Leading the industry with 95% recycling rates and partnerships with premium environmental facilities across the UK."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Innovation & Technology",
      description: "Advanced booking systems, real-time tracking, and digital documentation ensure a seamless luxury experience."
    }
  ];

  const team = [
    {
      name: "Alexander Hayes",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      description: "Alexander founded Cluttah with a vision to revolutionize premium clearance services through luxury experiences and environmental excellence."
    },
    {
      name: "Victoria Sterling",
      role: "Operations Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c32c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      description: "Victoria oversees our premium operations nationwide, ensuring consistent luxury standards across all Cluttah service locations."
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
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              About Cluttah
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The UK's most sophisticated clearance service, combining professional treatment 
              with environmental excellence since 2019.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="p-4 bg-slate-100 rounded-xl text-slate-600 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-2">{stat.number}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Our Story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Founded in 2019, Cluttah began with a simple mission: to make waste removal 
                  convenient, reliable, and environmentally responsible. What started as a 
                  premium service in London has grown into the UK's most trusted clearance company.
                </p>
                <p>
                  We recognized that traditional waste removal was often unreliable, 
                  expensive, and harmful to the environment. That's why we built Cluttah 
                  differently - with technology, transparency, and sustainability at our core.
                </p>
                <p>
                  Today, we're proud to serve over 250,000 customers across the UK, 
                  have collected over 500,000 tonnes of waste, and maintain a 95% recycling rate. 
                  But we're just getting started on our mission to revolutionize waste management.
                </p>
              </div>
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Cluttah team at work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-slate-200">
                  <div className="p-3 bg-slate-100 rounded-lg text-slate-600 w-fit mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="text-center bg-white p-6 rounded-lg shadow-lg border border-slate-200">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-1">{member.name}</h3>
                  <p className="text-slate-600 font-medium mb-3">{member.role}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{member.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-slate-800 rounded-lg p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Join Thousands of Satisfied Customers</h2>
            <p className="text-xl mb-6 text-slate-300">
              Experience the UK's most reliable and sustainable waste removal service
            </p>
            <Link to="/">
              <Button className="bg-white text-slate-800 hover:bg-slate-100 font-medium px-8 py-3">
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
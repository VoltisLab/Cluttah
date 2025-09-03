import React from "react";
import Layout from "../Layout";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Truck, Recycle, Clock, Shield, Star } from "lucide-react";

const HowItWorksPage = () => {
  const steps = [
    {
      number: "01",
      title: "Book Online",
      description: "Book your collection in under 60 seconds. Choose from same-day or scheduled pickups.",
      icon: <Calendar className="h-8 w-8" />,
      details: ["Quick online booking", "Choose your time slot", "Instant confirmation", "No hidden fees"]
    },
    {
      number: "02", 
      title: "We Come to You",
      description: "Our professional team arrives at your location with live tracking so you know exactly when we'll arrive.",
      icon: <MapPin className="h-8 w-8" />,
      details: ["Live driver tracking", "Professional uniformed team", "Fully insured service", "Punctual arrival"]
    },
    {
      number: "03",
      title: "We Load & Go",
      description: "Our team does all the heavy lifting. We load everything into our vehicle quickly and efficiently.",
      icon: <Truck className="h-8 w-8" />,
      details: ["No lifting required", "Professional equipment", "Quick & efficient", "Damage-free removal"]
    },
    {
      number: "04",
      title: "Responsible Disposal",
      description: "We recycle up to 90% of collected waste and provide digital waste transfer notes for transparency.",
      icon: <Recycle className="h-8 w-8" />,
      details: ["90% recycling rate", "Digital waste notes", "Licensed disposal", "Environmental compliance"]
    }
  ];

  const benefits = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Same-Day Service",
      description: "Available 7 days a week with same-day collection options"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Fully Insured",
      description: "£2 million public liability insurance for complete peace of mind"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "5-Star Service",
      description: "Over 18,000 verified reviews with excellent customer satisfaction"
    }
  ];

  return (
    <Layout>
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How It Works
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting rid of your unwanted items has never been easier. 
              Our simple 4-step process ensures a hassle-free experience from start to finish.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-16 mb-20">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                {/* Content */}
                <div className="flex-1">
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <div className="flex items-center mb-6">
                      <div className="text-6xl font-bold text-teal-100 mr-4">
                        {step.number}
                      </div>
                      <div className="p-3 bg-teal-100 rounded-lg text-teal-600">
                        {step.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Image */}
                <div className="flex-1">
                  <div className="aspect-square rounded-lg overflow-hidden bg-gray-200">
                    <img
                      src={`https://images.unsplash.com/photo-${
                        index === 0 ? '1551434678-e185b29c5a19' : 
                        index === 1 ? '1558618666-fcd25c85cd64' :
                        index === 2 ? '1566228015668-4c45dbc4e2f5' :
                        '1532996122724-e3c354bd81f2'
                      }?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Litta?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="p-4 bg-teal-100 rounded-full text-teal-600 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Book your collection now and experience the UK's leading waste removal service
            </p>
            <Link to="/">
              <Button className="bg-pink-500 hover:bg-pink-600 text-white font-medium px-8 py-4 text-lg">
                Get Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HowItWorksPage;
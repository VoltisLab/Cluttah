import React from "react";
import Layout from "../Layout";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { ArrowRight, Home, TreePine, Building, Package } from "lucide-react";

const ServicesPage = () => {
  const services = [
    {
      title: "House Clearance",
      description: "Complete home clearance service for furniture, appliances, and household items. Our professional teams handle all the heavy lifting with care.",
      icon: <Home className="h-8 w-8" />,
      features: ["Full house clearance", "Estate clearance", "Furniture removal", "Appliance disposal"],
      path: "/services/house-clearance",
      image: "https://images.unsplash.com/photo-1558618666-fbd76c1d5c80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Garden Clearance",
      description: "Professional garden waste removal including green waste, garden furniture, tools, and outdoor equipment disposal with environmental responsibility.",
      icon: <TreePine className="h-8 w-8" />,
      features: ["Green waste removal", "Garden furniture", "Shed clearance", "Landscaping waste"],
      path: "/services/garden-clearance",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Office Clearance",
      description: "Efficient commercial waste removal for offices, including furniture, equipment, and confidential document disposal with full compliance.",
      icon: <Building className="h-8 w-8" />,
      features: ["Office furniture", "IT equipment", "Document destruction", "Commercial waste"],
      path: "/services/office-clearance",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Single Items",
      description: "Individual item removal service for sofas, mattresses, appliances, and other bulky items with transparent, upfront pricing.",
      icon: <Package className="h-8 w-8" />,
      features: ["Sofa removal", "Mattress disposal", "White goods", "Bulky items"],
      path: "/services/single-items",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <Layout>
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Professional waste removal services across the UK. From single items to complete clearances, 
              we handle it all with care and environmental responsibility.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-slate-200">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-slate-100 rounded-lg text-slate-600 mr-4">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800">{service.title}</h3>
                  </div>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                        <div className="w-2 h-2 bg-slate-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to={service.path}>
                    <Button className="w-full bg-slate-800 hover:bg-slate-700 text-white font-medium flex items-center justify-center">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-slate-800 rounded-lg p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-xl mb-6 text-slate-300">
              Contact us for a personalized quote tailored to your specific needs
            </p>
            <Link to="/contact">
              <Button className="bg-white text-slate-800 hover:bg-slate-100 font-medium px-8 py-3">
                Get Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServicesPage;
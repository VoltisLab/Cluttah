import React, { useState } from "react";
import Layout from "../Layout";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQPage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqCategories = [
    {
      title: "Booking & Pricing",
      faqs: [
        {
          question: "How do I book a collection?",
          answer: "You can book online in under 60 seconds through our website. Simply select your service type, enter your postcode, choose a time slot, and confirm your booking. You'll receive instant confirmation and tracking details."
        },
        {
          question: "How much does it cost?",
          answer: "Our pricing is based on the volume and type of waste. We provide transparent, upfront pricing with no hidden fees. You'll see the exact cost before confirming your booking, and our teams can provide on-site quotes for larger jobs."
        },
        {
          question: "Do you offer same-day service?",
          answer: "Yes! We offer same-day collections 7 days a week, subject to availability. You can also schedule collections up to 2 weeks in advance to suit your needs."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit and debit cards, PayPal, and bank transfers. Payment is secured through our encrypted checkout system for your protection."
        }
      ]
    },
    {
      title: "Service Areas & Items",
      faqs: [
        {
          question: "Where do you provide services?",
          answer: "We provide UK-wide coverage with teams operating in all major cities and towns across England, Scotland, Wales, and Northern Ireland. Enter your postcode during booking to confirm availability in your area."
        },
        {
          question: "What items can you collect?",
          answer: "We collect almost everything including furniture, appliances, garden waste, office equipment, and general household items. We cannot collect hazardous materials, asbestos, chemicals, or medical waste."
        },
        {
          question: "Do you collect from flats/apartments?",
          answer: "Yes, we collect from all property types including flats, houses, and commercial premises. Our teams are experienced in navigating stairs and tight spaces safely."
        },
        {
          question: "Is there a minimum collection amount?",
          answer: "No minimum collection amount. We handle everything from single items to complete house clearances. Our pricing scales appropriately for the job size."
        }
      ]
    },
    {
      title: "Environmental & Disposal",
      faqs: [
        {
          question: "How much waste do you recycle?",
          answer: "We recycle up to 90% of all collected waste through our network of licensed recycling facilities. We're committed to diverting as much waste as possible from landfill."
        },
        {
          question: "Do you provide waste transfer notes?",
          answer: "Yes, we provide digital waste transfer notes for all collections. These documents show exactly where your waste has been taken and how it's been processed, ensuring full transparency and legal compliance."
        },
        {
          question: "What happens to items in good condition?",
          answer: "Items in good condition are donated to local charities and community organizations. We work with numerous charities to ensure usable items find new homes rather than being disposed of."
        },
        {
          question: "Are you licensed waste carriers?",
          answer: "Yes, we're fully licensed waste carriers registered with the Environment Agency. All our disposal methods comply with UK environmental regulations and best practices."
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex, faqIndex) => {
    const key = `${categoryIndex}-${faqIndex}`;
    setOpenFAQ(openFAQ === key ? null : key);
  };

  return (
    <Layout>
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our waste removal services. 
              Can't find what you're looking for? Contact us directly.
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-teal-50 px-6 py-4 border-b border-teal-100">
                  <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                </div>
                <div className="divide-y divide-gray-200">
                  {category.faqs.map((faq, faqIndex) => {
                    const isOpen = openFAQ === `${categoryIndex}-${faqIndex}`;
                    return (
                      <div key={faqIndex}>
                        <button
                          className="w-full px-6 py-4 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
                          onClick={() => toggleFAQ(categoryIndex, faqIndex)}
                        >
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-gray-900 pr-4">
                              {faq.question}
                            </h3>
                            {isOpen ? (
                              <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                            )}
                          </div>
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-4">
                            <p className="text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-600 mb-6">
              Our friendly customer service team is here to help with any questions you might have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-teal-600 hover:bg-teal-700 text-white font-medium px-6 py-3">
                  Contact Us
                </Button>
              </Link>
              <a href="tel:08001234567">
                <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50 px-6 py-3">
                  Call: 0800 123 4567
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQPage;
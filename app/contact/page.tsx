'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { toast } from '@/hooks/use-toast'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in required fields",
        description: "Name, email, and message are required.",
      })
      return
    }

    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours."
    })

    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['0800 CLUTTAH (258824)', 'Available 7 days a week'],
      action: 'tel:0800258824'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['hello@cluttah.co.uk', 'Response within 24 hours'],
      action: 'mailto:hello@cluttah.co.uk'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Monday - Sunday', '7:00 AM - 8:00 PM'],
      action: null
    },
    {
      icon: MapPin,
      title: 'Coverage',
      details: ['UK Wide Service', 'London, Manchester, Birmingham & more'],
      action: null
    }
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="py-24 px-4">
        <div className="container max-w-screen-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get in touch with our friendly team for quotes, questions, or support. 
              We're here to help with all your waste removal needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card p-8 rounded-lg border shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name *</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Service Type</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background"
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
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your waste removal needs..."
                    rows={5}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background"
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-card p-8 rounded-lg border shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon
                    return (
                      <div key={index} className="flex items-start">
                        <div className="p-2 bg-muted rounded-lg mr-4 flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{info.title}</h3>
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-muted-foreground text-sm">
                              {info.action && detailIndex === 0 ? (
                                <a href={info.action} className="hover:underline font-medium">
                                  {detail}
                                </a>
                              ) : (
                                detail
                              )}
                            </p>
                          ))}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-primary p-6 rounded-lg text-primary-foreground">
                <h3 className="text-lg font-bold mb-2">Need Urgent Collection?</h3>
                <p className="text-sm mb-4 opacity-90">
                  For same-day emergency collections, call us directly or use our instant booking system.
                </p>
                <a href="tel:0800258824">
                  <Button variant="secondary" className="w-full">
                    Call Now: 0800 CLUTTAH
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
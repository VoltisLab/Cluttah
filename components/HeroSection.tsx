'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, Users, Truck, Star, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import { toast } from '@/hooks/use-toast'

const HeroSection = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [postcode, setPostcode] = useState('')
  const [timing, setTiming] = useState('')

  const handleServiceSelect = (service: string) => {
    setSelectedService(service)
  }

  const handleGetQuote = () => {
    if (!selectedService) {
      toast({
        title: "Please select a service",
        description: "Choose either 'Premium Clearance' or 'Single Items'",
      })
      return
    }
    
    if (!postcode.trim()) {
      toast({
        title: "Please enter your postcode",
        description: "We need your postcode to provide accurate pricing",
      })
      return
    }

    if (!timing) {
      toast({
        title: "Please select timing",
        description: "Let us know when you need this service",
      })
      return
    }

    toast({
      title: "Quote Request Submitted!",
      description: "We'll contact you shortly with a personalized quote.",
    })

    setSelectedService(null)
    setPostcode('')
    setTiming('')
  }

  const stats = [
    { icon: Users, number: '250K+', label: 'Happy Customers' },
    { icon: Truck, number: '500K+', label: 'Tonnes Cleared' },
    { icon: Star, number: '25K+', label: '5-Star Reviews' }
  ]

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Premium Badge */}
            <div className="inline-flex items-center px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground">
              <Award className="h-4 w-4 mr-2" />
              Premium Clearance Service
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                UK's Premier<br />
                <span className="text-muted-foreground">Clearance Service</span>
              </h1>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <motion.div 
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  >
                    <div className="flex items-center justify-center mb-2">
                      <IconComponent className="h-5 w-5 text-muted-foreground mr-2" />
                      <span className="text-2xl font-bold">{stat.number}</span>
                    </div>
                    <span className="text-muted-foreground text-sm">{stat.label}</span>
                  </motion.div>
                )
              })}
            </div>

            {/* Subtitle */}
            <p className="text-xl text-muted-foreground leading-relaxed">
              Experience professional clearance services with same-day availability, 
              expert handling, and 95% recycling commitment.
            </p>

            {/* Service Selection */}
            <div>
              <h3 className="text-lg font-semibold mb-4">
                What do you need help with?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div
                  className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
                    selectedService === 'premium'
                      ? 'border-primary bg-primary/5'
                      : 'border-border hover:border-primary/50'
                  }`}
                  onClick={() => handleServiceSelect('premium')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 bg-muted rounded-lg flex items-center justify-center">
                      <Truck className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <h4 className="font-semibold mb-2">Premium Clearance</h4>
                    <p className="text-sm text-muted-foreground">Complete property clearance service</p>
                  </div>
                </motion.div>

                <motion.div
                  className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
                    selectedService === 'single'
                      ? 'border-primary bg-primary/5'
                      : 'border-border hover:border-primary/50'
                  }`}
                  onClick={() => handleServiceSelect('single')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 bg-muted rounded-lg flex items-center justify-center">
                      <Star className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <h4 className="font-semibold mb-2">Single Items</h4>
                    <p className="text-sm text-muted-foreground">Individual item collection</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Booking Form */}
          <motion.div 
            className="bg-card p-8 rounded-lg shadow-lg border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Get Your Quote</h3>
              <p className="text-muted-foreground">Professional service in minutes</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Collection postcode
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
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
                <label className="block text-sm font-medium mb-2">
                  When do you need this?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {['Today', 'This Week', 'Next Week', 'Flexible'].map((option) => (
                    <Button
                      key={option}
                      variant={timing === option ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setTiming(option)}
                      className="text-sm"
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </div>

              <Button
                onClick={handleGetQuote}
                className="w-full h-12 text-lg"
                size="lg"
              >
                Get Quote
              </Button>
              
              <div className="text-center">
                <p className="text-xs text-muted-foreground">
                  ⚡ Same-day service • 🛡️ Fully insured • ♻️ 95% recycling
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
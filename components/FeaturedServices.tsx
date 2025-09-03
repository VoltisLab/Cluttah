'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const FeaturedServices = () => {
  const services = [
    {
      title: 'House Clearance',
      description: 'Complete home clearance service with professional care',
      image: 'https://customer-assets.emergentagent.com/job_clone-this-site/artifacts/3domo814_public%20%282%29.webp',
      price: 'From £79',
      features: ['Full property clearance', 'Same-day service', 'Insured & licensed'],
      href: '/services/house-clearance'
    },
    {
      title: 'Office Clearance',
      description: 'Professional commercial waste removal and clearance',
      image: 'https://customer-assets.emergentagent.com/job_clone-this-site/artifacts/cjdxt14t_public%20%283%29.webp',
      price: 'From £99',
      features: ['IT equipment disposal', 'Document destruction', 'Out-of-hours service'],
      href: '/services/office-clearance'
    },
    {
      title: 'WEEE Disposal',
      description: 'Specialist electrical waste removal and recycling',
      image: 'https://customer-assets.emergentagent.com/job_clone-this-site/artifacts/g7s8unit_public%20%284%29.webp',
      price: 'From £49',
      features: ['Certified disposal', 'Environmental compliance', 'Collection service'],
      href: '/services/weee-disposal'
    },
    {
      title: 'Garden Clearance',
      description: 'Green waste removal and garden transformation',
      image: 'https://customer-assets.emergentagent.com/job_clone-this-site/artifacts/3zxtb7xb_public%20%285%29.webp',
      price: 'From £59',
      features: ['Green waste recycling', 'Garden furniture removal', 'Landscaping waste'],
      href: '/services/garden-clearance'
    },
    {
      title: 'Furniture Removal',
      description: 'Single item and bulk furniture collection service',
      image: 'https://customer-assets.emergentagent.com/job_clone-this-site/artifacts/2j3uo5du_public%20%286%29.webp',
      price: 'From £35',
      features: ['Heavy lifting included', 'Donation options', 'Quick collection'],
      href: '/services/furniture-removal'
    },
    {
      title: 'Sofa Removal',
      description: 'Specialist sofa and upholstery disposal service',
      image: 'https://customer-assets.emergentagent.com/job_clone-this-site/artifacts/bqtqq3fo_public%20%287%29.webp',
      price: 'From £45',
      features: ['All types of sofas', 'Eco-friendly disposal', 'Same-day pickup'],
      href: '/services/sofa-removal'
    },
    {
      title: 'Appliance Removal',
      description: 'White goods and appliance disposal with recycling',
      image: 'https://customer-assets.emergentagent.com/job_clone-this-site/artifacts/zgraevep_public%20%288%29.webp',
      price: 'From £54',
      features: ['Fridge freezer collection', 'Washing machine removal', 'Licensed disposal'],
      href: '/services/appliance-removal'
    },
    {
      title: 'Rubbish Collection',
      description: 'General waste collection and disposal service',
      image: 'https://customer-assets.emergentagent.com/job_clone-this-site/artifacts/6qmwfe0s_public%20%284%29.webp',
      price: 'From £69',
      features: ['Mixed waste collection', 'Bagged rubbish service', 'Regular collections'],
      href: '/services/rubbish-collection'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-24 px-4 bg-muted/20">
      <div className="container max-w-screen-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Featured Services
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Discover our collection of professional clearance and removal services
          </motion.p>
        </div>

        {/* Services Grid - Similar to Voltis Labs Games layout */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group"
            >
              <Link href={service.href} className="block">
                <div className="bg-card rounded-lg border overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02]">
                  {/* Service Image */}
                  <div className="aspect-video relative overflow-hidden bg-muted">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  {/* Service Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-1 mb-4">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-xs text-muted-foreground">
                          <div className="w-1 h-1 bg-primary rounded-full mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Price and Action */}
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-primary">
                        {service.price}
                      </span>
                      <Button size="sm" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        Book Now
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Can't find exactly what you're looking for? Upload photos of your items 
            and get a personalized quote for any clearance job.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Upload Photos for Quote
            </Button>
            <Button size="lg" variant="outline">
              Call: 0800 CLUTTAH
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedServices
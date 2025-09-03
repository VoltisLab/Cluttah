import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Calendar, MapPin, Truck, Recycle, Clock, Shield, Star } from 'lucide-react'

export const metadata = {
  title: 'How It Works - Cluttah Premium Clearance',
  description: 'Learn how our simple 4-step process makes waste removal easy and hassle-free.',
}

export default function HowItWorksPage() {
  const steps = [
    {
      number: '01',
      title: 'Book Online',
      description: 'Book your collection in under 60 seconds. Choose from same-day or scheduled pickups.',
      icon: Calendar,
      details: ['Quick online booking', 'Choose your time slot', 'Instant confirmation', 'No hidden fees']
    },
    {
      number: '02', 
      title: 'We Come to You',
      description: 'Our professional team arrives at your location with live tracking so you know exactly when we\'ll arrive.',
      icon: MapPin,
      details: ['Live driver tracking', 'Professional uniformed team', 'Fully insured service', 'Punctual arrival']
    },
    {
      number: '03',
      title: 'We Load & Go',
      description: 'Our team does all the heavy lifting. We load everything into our vehicle quickly and efficiently.',
      icon: Truck,
      details: ['No lifting required', 'Professional equipment', 'Quick & efficient', 'Damage-free removal']
    },
    {
      number: '04',
      title: 'Responsible Disposal',
      description: 'We recycle up to 95% of collected waste and provide digital waste transfer notes for transparency.',
      icon: Recycle,
      details: ['95% recycling rate', 'Digital waste notes', 'Licensed disposal', 'Environmental compliance']
    }
  ]

  const benefits = [
    {
      icon: Clock,
      title: 'Same-Day Service',
      description: 'Available 7 days a week with same-day collection options'
    },
    {
      icon: Shield,
      title: 'Fully Insured',
      description: '£5 million public liability insurance for complete peace of mind'
    },
    {
      icon: Star,
      title: '5-Star Service',
      description: 'Over 25,000 verified reviews with excellent customer satisfaction'
    }
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="py-24 px-4">
        <div className="container max-w-screen-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              How It Works
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Getting rid of your unwanted items has never been easier. 
              Our simple 4-step process ensures a hassle-free experience from start to finish.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-16 mb-20">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  {/* Content */}
                  <div className="flex-1">
                    <div className="bg-card p-8 rounded-lg border shadow-lg">
                      <div className="flex items-center mb-6">
                        <div className="text-6xl font-bold text-muted/20 mr-4">
                          {step.number}
                        </div>
                        <div className="p-3 bg-muted rounded-lg">
                          <IconComponent className="h-8 w-8 text-muted-foreground" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-4">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                        {step.description}
                      </p>
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center text-muted-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Image */}
                  <div className="flex-1">
                    <div className="aspect-square rounded-lg overflow-hidden bg-muted">
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
              )
            })}
          </div>

          {/* Benefits Section */}
          <div className="bg-muted/20 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose Cluttah?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon
                return (
                  <div key={index} className="text-center">
                    <div className="p-4 bg-muted rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Book your collection now and experience the UK's leading waste removal service
            </p>
            <Link href="/">
              <Button size="lg">Get Free Quote</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
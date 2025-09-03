import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Users, Truck, Recycle, Award } from 'lucide-react'

export const metadata = {
  title: 'About Us - Cluttah Premium Clearance',
  description: 'Learn about Cluttah - UK\'s premier clearance service with over 250,000 satisfied customers.',
}

export default function AboutPage() {
  const stats = [
    { number: '250K+', label: 'Premium Clients', icon: Users },
    { number: '500K+', label: 'Tonnes Cleared', icon: Truck },
    { number: '95%', label: 'Recycling Rate', icon: Recycle },
    { number: '25K+', label: '5-Star Reviews', icon: Award }
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="py-24 px-4">
        <div className="container max-w-screen-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Cluttah</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The UK's most sophisticated clearance service, combining professional treatment 
              with environmental excellence since 2019.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="p-4 bg-muted rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              )
            })}
          </div>

          {/* Our Story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
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
            <div className="aspect-square rounded-lg overflow-hidden bg-muted">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Cluttah team at work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
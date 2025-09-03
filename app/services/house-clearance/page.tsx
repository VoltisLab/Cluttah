import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { CheckCircle, Phone } from 'lucide-react'

export const metadata = {
  title: 'House Clearance Service - Cluttah',
  description: 'Complete home clearance service with professional care. Same-day service available across the UK.',
}

export default function HouseClearancePage() {
  const features = [
    'Complete property clearances',
    'Two-person professional teams',
    'All heavy lifting included',
    'Same-day service available',
    'Furniture & appliance removal',
    'Ethical recycling & donations'
  ]

  const pricing = [
    { size: '1-2 Rooms', price: '£150-300', items: 'Small furniture, personal items' },
    { size: '3-4 Rooms', price: '£300-600', items: 'Full home contents, white goods' },
    { size: 'Whole House', price: '£600-1200', items: 'Complete property clearance' },
    { size: 'Estate Clearance', price: 'From £800', items: 'Full estate including garden' }
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 px-4 bg-muted/20">
        <div className="container max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Professional House Clearance Service
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Complete property clearances with ethical disposal. Our experienced teams 
                handle everything from single rooms to entire estates.
              </p>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="font-bold">Same Day</div>
                  <div className="text-sm text-muted-foreground">Available</div>
                </div>
                <div className="text-center">
                  <div className="font-bold">Fully Insured</div>
                  <div className="text-sm text-muted-foreground">£5M Coverage</div>
                </div>
                <div className="text-center">
                  <div className="font-bold">5-Star</div>
                  <div className="text-sm text-muted-foreground">Service</div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Button size="lg">Get Free Quote</Button>
                <Button size="lg" variant="outline">
                  <Phone className="mr-2 h-4 w-4" />
                  Call: 0800 CLUTTAH
                </Button>
              </div>
            </div>
            
            <div className="aspect-square rounded-lg overflow-hidden">
              <Image
                src="https://customer-assets.emergentagent.com/job_clone-this-site/artifacts/3domo814_public%20%282%29.webp"
                alt="House clearance service"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container max-w-screen-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            What's Included in Our House Clearance Service
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center p-4 bg-muted/50 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container max-w-screen-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricing.map((tier, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-md border">
                <h3 className="text-lg font-bold mb-2">{tier.size}</h3>
                <div className="text-2xl font-bold text-primary mb-3">{tier.price}</div>
                <p className="text-muted-foreground text-sm">{tier.items}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              *Prices are estimates. Final pricing based on actual volume and complexity.
            </p>
            <Button size="lg">Get Exact Quote</Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
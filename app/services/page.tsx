import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FeaturedServices from '@/components/FeaturedServices'

export const metadata = {
  title: 'Our Services - Cluttah Premium Clearance',
  description: 'Professional waste removal services across the UK. From house clearance to single item collection.',
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="py-24 px-4">
        <div className="container max-w-screen-2xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional waste removal services across the UK. From single items to complete clearances, 
              we handle it all with care and environmental responsibility.
            </p>
          </div>
        </div>
      </div>
      <div className="-mt-24">
        <FeaturedServices />
      </div>
      <Footer />
    </main>
  )
}
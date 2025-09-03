'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import FeaturedServices from '@/components/FeaturedServices'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'

export default function Home() {
  const [showCookieBanner, setShowCookieBanner] = useState(false)

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted')
    if (!cookiesAccepted) {
      const timer = setTimeout(() => {
        setShowCookieBanner(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturedServices />
      <Footer />
      {showCookieBanner && (
        <CookieBanner onClose={() => setShowCookieBanner(false)} />
      )}
    </main>
  )
}
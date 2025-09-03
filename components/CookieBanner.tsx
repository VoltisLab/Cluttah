'use client'

import { Button } from '@/components/ui/button'
import { X, Shield } from 'lucide-react'

interface CookieBannerProps {
  onClose: () => void
}

const CookieBanner = ({ onClose }: CookieBannerProps) => {
  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true')
    onClose()
  }

  const handleDecline = () => {
    localStorage.setItem('cookiesAccepted', 'false')
    onClose()
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur border-t z-50 p-4">
      <div className="container max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        <div className="flex-1 flex items-start space-x-3">
          <div className="p-2 bg-muted rounded-lg flex-shrink-0">
            <Shield className="h-4 w-4 text-muted-foreground" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Cookie Settings</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We use cookies to enhance your experience and analyze site usage. 
              Learn more in our{' '}
              <a href="/privacy" className="underline hover:text-foreground">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
        <div className="flex gap-3 lg:flex-shrink-0">
          <Button variant="outline" onClick={handleDecline}>
            Decline
          </Button>
          <Button onClick={handleAccept}>
            Accept
          </Button>
        </div>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 lg:relative lg:top-0 lg:right-0 p-1 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

export default CookieBanner
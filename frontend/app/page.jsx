"use client"

import { useState } from "react"
import Navigation from "@/components/landingPageComponents/navigation"
import Hero3D from "@/components/landingPageComponents/hero-3d"
import About from "@/components/landingPageComponents/about"
import HowItWorks from "@/components/landingPageComponents/how-it-works"
import Gallery from "@/components/landingPageComponents/gallery"
import AuthModal from "@/components/landingPageComponents/auth-modal"

export default function Home() {
  const [showAuth, setShowAuth] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Navigation onLoginClick={() => setShowAuth(true)} />
      <Hero3D onCreateWorld={() => setShowAuth(true)} />
      <About />
      <HowItWorks />
      <Gallery />
      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
    </div>
  )
}

"use client"

import { useRef } from "react"

export default function Hero3D({ onCreateWorld }) {
  const containerRef = useRef(null)
  return (
    <section
      className="relative w-full h-screen overflow-hidden pt-16"
      style={{ backgroundColor: "var(--hero-background)" }}
    >
      <div ref={containerRef} className="w-full h-full" />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <div className="text-center space-y-6 animate-fade-in pointer-events-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground text-balance leading-tight">
            Your Music. Your World. Your Avatar.
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto text-balance">
            Step into an immersive 3D environment crafted uniquely for your sound. Every groove, every beat, visualized.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <button
              onClick={onCreateWorld}
              className="px-8 py-3 rounded-lg font-semibold transition animate-glow pointer-events-auto"
              style={{ backgroundColor: "var(--feature-box-bg)", color: "var(--feature-box-text)" }}
            >
              Create Your World
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

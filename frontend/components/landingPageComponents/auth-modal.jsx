"use client"

import { useState } from "react"
import { X, Eye, EyeOff, Loader2 } from "lucide-react"

export default function AuthModal({ onClose }) {
  const [isSignUp, setIsSignUp] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate auth logic
    setTimeout(() => {
      console.log("Form submitted:", formData)
      setIsLoading(false)
      onClose()
    }, 1500)
  }

  const handleSocialAuth = (provider) => {
    setIsLoading(true)
    console.log(`Authenticating with ${provider}`)
    setTimeout(() => {
      setIsLoading(false)
      onClose()
    }, 1500)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-card border border-foreground/20 rounded-lg w-full max-w-md mx-4 relative animate-slide-up">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center hover:bg-foreground/10 rounded-lg transition"
        >
          <X size={20} />
        </button>

        {/* Content */}
        <div className="p-8">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
            {isSignUp ? "Create Account" : "Welcome Back"}
          </h2>
          <p className="text-foreground/60 mb-6">
            {isSignUp ? "Join SoundScape and discover your world" : "Sign in to your account"}
          </p>

          <div className="grid grid-cols-2 gap-3 mb-6">
            <button
              onClick={() => handleSocialAuth("Google")}
              disabled={isLoading}
              className="px-4 py-2 border border-foreground/20 rounded-lg font-medium text-foreground hover:bg-foreground/10 transition disabled:opacity-50"
            >
              Google
            </button>
            <button
              onClick={() => handleSocialAuth("Discord")}
              disabled={isLoading}
              className="px-4 py-2 border border-foreground/20 rounded-lg font-medium text-foreground hover:bg-foreground/10 transition disabled:opacity-50"
            >
              Discord
            </button>
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-foreground/10" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-card text-foreground/60">or</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 bg-background border border-foreground/20 rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent transition"
                placeholder="you@example.com"
                required
                disabled={isLoading}
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-4 py-2 bg-background border border-foreground/20 rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent transition"
                  placeholder="••••••••"
                  required
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/40 hover:text-foreground disabled:opacity-50"
                  disabled={isLoading}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Confirm Password (Sign Up) */}
            {isSignUp && (
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Confirm Password</label>
                <input
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="w-full px-4 py-2 bg-background border border-foreground/20 rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent transition"
                  placeholder="••••••••"
                  required={isSignUp}
                  disabled={isLoading}
                />
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2 bg-accent text-background rounded-lg font-semibold hover:bg-accent/90 transition mt-6 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  {isSignUp ? "Creating Account..." : "Signing In..."}
                </>
              ) : isSignUp ? (
                "Create Account"
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          {/* Toggle Auth Mode */}
          <p className="text-center text-foreground/60 text-sm mt-6">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}
            <button
              onClick={() => {
                setIsSignUp(!isSignUp)
                setFormData({ email: "", password: "", confirmPassword: "" })
              }}
              disabled={isLoading}
              className="ml-2 text-accent hover:underline font-semibold disabled:opacity-50"
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

'use client'

import { useState } from 'react'

export default function ComingSoonPage() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      setEmail('')
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center animate-fade-in">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse-slow" />
        </div>

        {/* Main content */}
        <div className="relative z-10">
          {/* Logo/Icon */}
          <div className="mb-8 animate-slide-up">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-cyan-500/25">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Something
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
              Amazing
            </span>
            <br />
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              is Coming
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed animate-slide-up" style={{ animationDelay: '400ms' }}>
            We're crafting something extraordinary. Be the first to experience it when we launch.
          </p>

          {/* Email form */}
          <div className="animate-slide-up" style={{ animationDelay: '600ms' }}>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-1 px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        <span>Joining...</span>
                      </div>
                    ) : (
                      'Notify Me'
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div className="max-w-md mx-auto p-6 bg-gradient-to-r from-cyan-500/10 to-cyan-600/10 border border-cyan-500/20 rounded-xl backdrop-blur-sm">
                <div className="flex items-center gap-3 text-cyan-400 mb-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-semibold">You're all set!</span>
                </div>
                <p className="text-gray-300">We'll notify you as soon as we launch.</p>
              </div>
            )}
          </div>

          {/* Footer note */}
          <p className="text-sm text-gray-500 mt-8 animate-slide-up" style={{ animationDelay: '800ms' }}>
            No spam, unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  )
}
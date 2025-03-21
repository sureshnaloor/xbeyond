'use client'

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

const credentials = [
  "38+ years experience in Oil & Gas, Power, and Infrastructure",
  "Electrical Engineer from College of engineering, Guindy",
  "Managed procurement worth billions of dollars",
  "Executed hundreds of major projects",
  "Pioneer in IT process optimization",
  "Passionate about empowering MSMEs",
]

export default function RollingCredentials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % credentials.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center space-y-2 py-2">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Meet Our Founder</h2>
        <h3 className="text-2xl font-semibold text-primary">Suresh Naloor Menon</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Electrical Engineer from the prestigious 200-year-old College of Engineering, India. Professional career across India's National Upstream Oil Giant ONGC and then in Multinationals across Middle East.
          Now embarking on an entrepreneurial journey to share decades of wisdom with emerging businesses.
        </p>
      </div>
      
      <div className="h-24 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl text-center font-medium text-gray-700"
          >
            {credentials[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
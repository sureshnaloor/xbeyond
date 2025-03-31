'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">
            xBeyond
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-primary">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-primary">
              About
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-primary">
              Services
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-primary">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 space-y-2">
            <Link href="/" className="block text-gray-600 hover:text-primary">
              Home
            </Link>
            <Link href="/about" className="block text-gray-600 hover:text-primary">
              About
            </Link>
            <Link href="/services" className="block text-gray-600 hover:text-primary">
              Services
            </Link>
            <Link href="/contact" className="block text-gray-600 hover:text-primary">
              Contact
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
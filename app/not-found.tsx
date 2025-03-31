import Link from 'next/link'
import MainNav from '@/components/main-nav'
import Logo from '@/components/logo'
import { Button } from "@/components/ui/button"
import ChatButton from "@/components/chat-button"

export default function NotFound() {
  return (
    <main className="flex-1 flex items-center justify-center py-16">
      <div className="text-center space-y-8">
        <h1 className="text-2xl font-semibold text-primary">
          Not Found Territory Beyond xBeyond!
        </h1>
        <div className="w-64 h-64 mx-auto">
          <svg
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="4" className="text-gray-200" />
            <path
              d="M65 80C65 80 80 65 100 65C120 65 135 80 135 80"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              className="text-gray-400"
            />
            <circle cx="60" cy="60" r="8" fill="currentColor" className="text-gray-600" />
            <circle cx="140" cy="60" r="8" fill="currentColor" className="text-gray-600" />
            <path
              d="M65 130C65 130 80 145 100 145C120 145 135 130 135 130"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              className="text-gray-400"
            />
          </svg>
        </div>
        <h2 className="text-4xl font-bold text-gray-800">Page Not Found</h2>
        <p className="text-gray-600 max-w-md mx-auto">
          Oops! It seems you've ventured into uncharted territory. Let's get you back on track.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </main>
  )
}
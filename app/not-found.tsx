import Link from 'next/link'
import MainNav from '@/components/main-nav'
import Logo from '@/components/logo'
import { Button } from "@/components/ui/button"
import ChatButton from "@/components/chat-button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Logo />
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <Button asChild variant="outline">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <ChatButton />
          </div>
        </div>
      </header>

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
      <footer className="border-t bg-slate-900 text-white">
        <div className="container px-4 py-8 md:px-6 md:py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
            <div className="col-span-2">
              <div className="font-bold text-xl mb-4">xBeyond</div>
              <p className="text-gray-400 max-w-xs">
                Leading provider of comprehensive solutions for the Construction and EPC sectors worldwide.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/services/oil-gas" className="hover:text-white">Oil & Gas</Link></li>
                <li><Link href="/services/petrochemicals" className="hover:text-white">Petrochemicals</Link></li>
                <li><Link href="/services/manpower" className="hover:text-white">Manpower</Link></li>
                <li><Link href="/services/industrial" className="hover:text-white">Industrial Support</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/projects" className="hover:text-white">Projects</Link></li>
                <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
                <li><Link href="/cookies" className="hover:text-white">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} xBeyond. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
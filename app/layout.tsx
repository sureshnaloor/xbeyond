import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import MobileNav from "@/components/mobile-nav"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Logo from "@/components/logo"
import MainNav from "@/components/main-nav"
import ChatButton from "@/components/chat-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "xBeyond",
  description: "Digital Transformation Solutions for Construction & EPC Industry",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          {/* Header */}
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

          {children}

          {/* Footer */}
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
      </body>
    </html>
  )
}
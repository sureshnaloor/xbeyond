import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import MobileNav from "@/components/mobile-nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "EnergyTech - Oil & Gas, Petrochemicals, and Energy Solutions",
  description: "Leading provider of comprehensive solutions for the Oil & Gas and Energy sectors worldwide.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <div className="md:hidden absolute top-4 left-4 z-50">
              <MobileNav />
            </div>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'
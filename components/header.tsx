import Link from "next/link"
import { Button } from "@/components/ui/button"
import MobileNav from "@/components/mobile-nav"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex items-center justify-between w-full">
          <Link href="/" className="font-bold text-xl">
            EnergyTech
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="/services" className="text-sm font-medium hover:text-primary">
              Services
            </Link>
            <Link href="/projects" className="text-sm font-medium hover:text-primary">
              Projects
            </Link>
            <Link href="/careers" className="text-sm font-medium hover:text-primary">
              Careers
            </Link>
            <Link href="/news" className="text-sm font-medium hover:text-primary">
              News
            </Link>
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}
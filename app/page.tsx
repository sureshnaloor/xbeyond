
import { ChevronRight, Database, Building2, BarChart2, Network, Contact, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import MainNav from "@/components/main-nav"
import ChatButton from "@/components/chat-button"
import ServiceCard from "@/components/service-card"
import { CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import StatsCounter from "@/components/stats-counter"
import Logo from "@/components/logo"
// Remove the CldImage import as it's now in the Logo component
import HeroImage from "@/components/landingpageimages/hero-image"
import RollingCredentials from "@/components/rolling-credentials"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
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

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Digital Transformation Solutions for Construction & EPC Industry
                </h1>
                <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Revolutionizing construction and EPC projects with AI-powered solutions, digital process automation, and intelligent project management systems.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/services">
                      Explore Our Services <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-slate-900"
                    asChild
                  >
                    {/* <Link href="/projects">View Projects</Link> */}
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden">
                  <HeroImage />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 md:py-16 bg-slate-50">
          <div className="container px-4 md:px-6">
           
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Comprehensive solutions tailored to meet the diverse needs of the Construction Projects sector
                </p>
              </div>
            </div>
            {/* In the services section, update the ServiceCard components: */}
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <ServiceCard
                title="Asset Management"
                slogan="Smart Tracking, Smarter Business"
                description="Intelligent asset tracking and maintenance system that helps companies monitor, maintain, and optimize their movable assets with real-time insights and predictive analytics."
                iconName="Database"
                bgClass="bg-gradient-to-br from-blue-600 via-blue-500 to-teal-400"
                tag="SMARTTAG"
              />
              <ServiceCard
                title="Construction Management"
                slogan="Building Tomorrow, Digitally"
                description="End-to-end project management platform offering real-time control, monitoring, and analytics for construction projects of any scale."
                iconName="Building2"
                bgClass="bg-gradient-to-br from-teal-500 via-teal-400 to-green-300"
                tag="SMARTPROJECT"
              />
              <ServiceCard
                title="Operations Excellence"
                slogan="Optimize, Track, Thrive"
                description="Advanced inventory management system with AI-powered cataloging, waste reduction, and smart classification of materials and spares to maximize operational efficiency."
                iconName="BarChart2"
                bgClass="bg-gradient-to-br from-blue-500 via-blue-400 to-sky-300"
                tag="SMARTCLASS"
              />
              <ServiceCard
                title="Supply Chain Solutions"
                slogan="Connect, Control, Succeed"
                description="Comprehensive vendor management and mini-ERP system for streamlined contract management, strategic sourcing, and efficient procurement processes."
                iconName="Network"
                bgClass="bg-gradient-to-br from-teal-400 via-emerald-400 to-green-300"
                tag="SMARTLINK"
              />
              <ServiceCard
                title="Digital Business Cards"
                slogan="Go Green, Stay Connected"
                description="Eco-friendly NFC-enabled digital business cards that update in real-time, reducing environmental impact while maintaining professional connections."
                iconName="Contact"
                bgClass="bg-gradient-to-br from-blue-500 via-indigo-400 to-cyan-300"
                tag="SMARTWAVE"
              />
              <ServiceCard
                title="Industrial Support"
                slogan="Maintain, Optimize, Excel"
                description="Comprehensive maintenance, logistics, and operational support services backed by digital solutions for enhanced industrial performance."
                iconName="Wrench"
                bgClass="bg-gradient-to-br from-teal-500 via-emerald-400 to-green-400"
                tag="SMARTFLOW"
              />
            </div>
            <div className="flex justify-center mt-8">
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">
                  View All Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
          {/* Add this section before the final CTA or footer */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Why Choose xBeyond?</h2>
              <p className="text-xl text-muted-foreground">
                Transform your supply chain management with our proven expertise in procurement outsourcing and digital solutions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Reduce operational costs by up to 30%</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Access deep Saudi market expertise</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>AI-driven procurement insights</span>
                </li>
              </ul>
              <div className="pt-4">
                <Link href="/whyxbeyond">
                  <Button size="lg">
                    Discover More <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-lg bg-gradient-to-br from-primary/10 to-primary/30 p-8">
                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h3 className="font-bold">Cost Savings</h3>
                    <p className="text-sm text-muted-foreground">Optimize procurement costs</p>
                  </Card>
                  <Card className="p-4">
                    <h3 className="font-bold">Efficiency</h3>
                    <p className="text-sm text-muted-foreground">Streamlined operations</p>
                  </Card>
                  <Card className="p-4">
                    <h3 className="font-bold">Expertise</h3>
                    <p className="text-sm text-muted-foreground">Industry knowledge</p>
                  </Card>
                  <Card className="p-4">
                    <h3 className="font-bold">Innovation</h3>
                    <p className="text-sm text-muted-foreground">Digital solutions</p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Founder credentials Section */}
        <section className="w-full py-3 md:py-6 bg-slate-100">
          <RollingCredentials />
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Digitize Your Construction Operations?
                </h2>
                <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Partner with us to leverage AI and automation for enhanced efficiency, accuracy, and project success in your construction business.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-end">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">
                    Contact Our Team <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground" asChild>
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
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
                <li>
                  <Link href="/services/oil-gas" className="hover:text-white">
                    Oil & Gas
                  </Link>
                </li>
                <li>
                  <Link href="/services/petrochemicals" className="hover:text-white">
                    Petrochemicals
                  </Link>
                </li>
                <li>
                  <Link href="/services/manpower" className="hover:text-white">
                    Manpower
                  </Link>
                </li>
                <li>
                  <Link href="/services/industrial" className="hover:text-white">
                    Industrial Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:text-white">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/privacy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="hover:text-white">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} xBeyond. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
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


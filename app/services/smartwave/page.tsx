import { ChevronRight, ShoppingCart, Users2, FileText, Truck, Bot, BarChart2, Search, Boxes } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SmartWavePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                AI-Powered E-Marketplace
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                Transform your procurement process with intelligent automation and digital efficiency
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Smart Procurement Solutions</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Boxes className="h-6 w-6 text-primary" />
                Organized Material Catalog
              </h3>
              <p className="text-gray-600">
                Neatly catalogued and classified materials with intelligent categorization, making procurement streamlined and efficient.
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Users2 className="h-6 w-6 text-primary" />
                Smart Supplier Mapping
              </h3>
              <p className="text-gray-600">
                Suppliers automatically mapped to material and service groups, reducing RFQ friction and simplifying PO decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="w-full py-12 md:py-24 bg-slate-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg border p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-2 mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Integration */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">AI-Driven Capabilities</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {aiFeatures.map((feature, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Bot className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Ready to Digitize Your Procurement?
              </h2>
              <p className="mx-auto max-w-[600px] text-primary-foreground/90 md:text-xl">
                Join our e-marketplace and experience the future of procurement
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Get Started <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const features = [
  {
    title: "Simplified RFQ Process",
    description: "AI-driven request for quotation process with automated supplier matching and response tracking.",
    icon: <FileText className="h-6 w-6 text-primary" />
  },
  {
    title: "Smart Comparison",
    description: "Automated comparison of technical specifications and commercial terms including payment and delivery.",
    icon: <BarChart2 className="h-6 w-6 text-primary" />
  },
  {
    title: "Templated PO System",
    description: "Material-specific purchase order templates for quick and accurate PO generation.",
    icon: <ShoppingCart className="h-6 w-6 text-primary" />
  },
  {
    title: "Post-PO Management",
    description: "Automated tracking of bank guarantees, letters of credit, and delivery milestones.",
    icon: <FileText className="h-6 w-6 text-primary" />
  },
  {
    title: "Logistics Management",
    description: "End-to-end logistics tracking including AI-guided HS code determination for imports.",
    icon: <Truck className="h-6 w-6 text-primary" />
  },
  {
    title: "Intelligent Search",
    description: "Advanced search capabilities for materials, suppliers, and historical procurement data.",
    icon: <Search className="h-6 w-6 text-primary" />
  }
]

const aiFeatures = [
  {
    title: "Automated Comparison Statements",
    description: "AI analyzes technical specifications and commercial terms to generate comprehensive comparison statements."
  },
  {
    title: "Smart Templates",
    description: "Context-aware templates for different material types and service categories."
  },
  {
    title: "Import Optimization",
    description: "AI-guided HS code determination and import tariff optimization."
  },
  {
    title: "Proactive Alerts",
    description: "Intelligent notification system for critical procurement milestones and potential delays."
  }
]
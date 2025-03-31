import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const solutions = [
  {
    title: "Sourcing Strategy",
    description: "Develop and implement comprehensive sourcing strategies aligned with business objectives, including market analysis, supplier identification, and cost optimization frameworks.",
    icon: "📊"
  },
  {
    title: "Material Analysis",
    description: "Advanced material requirement planning, specification development, and standardization processes to optimize procurement efficiency and cost-effectiveness.",
    icon: "🔍"
  },
  {
    title: "Supplier Evaluation & Management",
    description: "Robust supplier assessment frameworks, performance monitoring, and relationship management systems to ensure reliable supply chain operations.",
    icon: "⭐"
  },
  {
    title: "Procurement Management",
    description: "End-to-end procurement solutions including requisition management, tender processing, and purchase order management with digital workflow automation.",
    icon: "🔄"
  },
  {
    title: "Risk Management",
    description: "Comprehensive risk assessment and mitigation strategies for supply chain operations, including supplier diversity and contingency planning.",
    icon: "⚠️"
  },
  {
    title: "Contract Management",
    description: "Digital contract lifecycle management system with automated compliance tracking, renewal alerts, and performance monitoring.",
    icon: "📝"
  },
  {
    title: "Imports & Compliance",
    description: "Complete import management solutions including documentation, licensing, customs clearance, and regulatory compliance management.",
    icon: "🌐"
  },
  {
    title: "Warehousing & Logistics",
    description: "Integrated warehousing and logistics solutions with real-time tracking, route optimization, and inventory management systems.",
    icon: "🏭"
  },
  {
    title: "Smart Inventory Management",
    description: "Advanced inventory tracking using NFC and QR code technologies, with real-time monitoring and automated reorder systems.",
    icon: "📱"
  },
  {
    title: "Engineered Solutions",
    description: "Custom-engineered solutions for specialized equipment and long-lead items, including technical specification development and quality assurance.",
    icon: "⚙️"
  }
]

export default function SmartLinkPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Supply Chain Solutions
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                Comprehensive supply chain management solutions powered by digital innovation and industry expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg border p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
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
                Ready to Transform Your Supply Chain?
              </h2>
              <p className="mx-auto max-w-[600px] text-primary-foreground/90 md:text-xl">
                Let's discuss how our solutions can optimize your operations and drive business growth.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Contact Us <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
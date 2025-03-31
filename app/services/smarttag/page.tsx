import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const features = [
  {
    title: "Real-time Tracking",
    description: "Advanced GPS and IoT-based tracking system for real-time location monitoring and status updates of all your movable assets.",
    icon: "📍"
  },
  {
    title: "Maintenance Scheduling",
    description: "AI-powered predictive maintenance system that forecasts equipment needs and automatically schedules preventive maintenance.",
    icon: "🔧"
  },
  {
    title: "Asset Performance Analytics",
    description: "Comprehensive analytics dashboard providing insights into asset utilization, efficiency metrics, and ROI calculations.",
    icon: "📊"
  },
  {
    title: "Digital Asset Registry",
    description: "Centralized digital registry for all assets with detailed specifications, maintenance history, and documentation management.",
    icon: "📱"
  },
  {
    title: "Compliance Management",
    description: "Automated compliance tracking system ensuring all assets meet regulatory requirements and industry standards.",
    icon: "✅"
  },
  {
    title: "Cost Optimization",
    description: "Smart cost tracking and optimization tools to monitor operational expenses and identify cost-saving opportunities.",
    icon: "💰"
  },
  {
    title: "Mobile Access",
    description: "Secure mobile application for on-the-go access to asset information, maintenance requests, and status updates.",
    icon: "📱"
  },
  {
    title: "Integration Capabilities",
    description: "Seamless integration with existing ERP systems and other business applications for streamlined operations.",
    icon: "🔄"
  },
  {
    title: "Automated Reporting",
    description: "Customizable reporting system with automated generation and distribution of asset performance reports.",
    icon: "📈"
  },
  {
    title: "Smart Alerts",
    description: "Intelligent alert system for maintenance needs, compliance deadlines, and critical asset status changes.",
    icon: "🔔"
  }
]

export default function SmartTagPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Asset Management Solutions
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                Intelligent asset tracking and maintenance system powered by IoT and AI technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg border p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
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
                Ready to Optimize Your Asset Management?
              </h2>
              <p className="mx-auto max-w-[600px] text-primary-foreground/90 md:text-xl">
                Let's discuss how our SMARTTAG solution can transform your asset management operations.
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
    </>
  )
}
import { ChevronRight, Users2, FileText, BarChart2, Shield, Database, MessageSquare, Settings, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SmartFlowPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Vendor Management Solutions
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                Streamline vendor relationships from onboarding to performance tracking
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Core Capabilities</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {coreFeatures.map((feature, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-white/80 backdrop-blur-sm p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12),0_4px_12px_rgb(59,130,246,0.1)] hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50"
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

      {/* Supplier Portal */}
      <section className="w-full py-12 md:py-24 bg-slate-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Self-Service Supplier Portal</h2>
          <p className="text-center text-gray-600 mb-12 max-w-[800px] mx-auto">
            Empower your vendors with a comprehensive self-service portal for enhanced collaboration and efficiency
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            {portalFeatures.map((feature, index) => (
              <div key={index} className="flex gap-4 items-start p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12),0_4px_12px_rgb(59,130,246,0.1)] hover:bg-gradient-to-br hover:from-purple-50 hover:to-blue-50">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  {feature.icon}
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

      {/* Benefits */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Key Benefits</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12),0_4px_12px_rgb(59,130,246,0.1)] hover:bg-gradient-to-br hover:from-teal-50 hover:to-blue-50">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  {benefit.icon}
                  {benefit.title}
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  {benefit.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
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
                Transform Your Vendor Management
              </h2>
              <p className="mx-auto max-w-[600px] text-primary-foreground/90 md:text-xl">
                Start streamlining your vendor relationships today
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

const coreFeatures = [
  {
    title: "Centralized Data Management",
    description: "Store and manage all vendor information, contracts, and documentation in one secure location.",
    icon: <Database className="h-6 w-6 text-primary" />
  },
  {
    title: "Automated Workflows",
    description: "Streamline vendor onboarding, contract management, and approval processes.",
    icon: <Settings className="h-6 w-6 text-primary" />
  },
  {
    title: "Performance Tracking",
    description: "Monitor vendor performance through scorecards and team reviews.",
    icon: <BarChart2 className="h-6 w-6 text-primary" />
  },
  {
    title: "Risk Management",
    description: "Identify and mitigate vendor-related risks with comprehensive assessment tools.",
    icon: <Shield className="h-6 w-6 text-primary" />
  },
  {
    title: "Document Management",
    description: "Centralize all vendor-related documents with version control and audit trails.",
    icon: <FileText className="h-6 w-6 text-primary" />
  },
  {
    title: "Vendor Communication",
    description: "Facilitate seamless communication and collaboration with vendors.",
    icon: <MessageSquare className="h-6 w-6 text-primary" />
  }
]

const portalFeatures = [
  {
    title: "Catalog Management",
    description: "Vendors can manage their product catalog and update prices in real-time.",
    icon: <Database className="h-5 w-5 text-primary" />
  },
  {
    title: "RFP Response",
    description: "Quick and easy response to RFPs with integrated proposal submission tools.",
    icon: <FileText className="h-5 w-5 text-primary" />
  },
  {
    title: "Delivery Management",
    description: "Control and update delivery dates and tracking information.",
    icon: <Settings className="h-5 w-5 text-primary" />
  },
  {
    title: "Performance Insights",
    description: "Access to performance metrics and improvement recommendations.",
    icon: <Star className="h-5 w-5 text-primary" />
  }
]

const benefits = [
  {
    title: "Operational Efficiency",
    icon: <Settings className="h-6 w-6 text-primary" />,
    points: [
      "Reduced manual processing time",
      "Streamlined approval workflows",
      "Centralized purchase order management"
    ]
  },
  {
    title: "Risk Mitigation",
    icon: <Shield className="h-6 w-6 text-primary" />,
    points: [
      "Enhanced compliance monitoring",
      "Automated risk assessments",
      "Better vendor verification processes"
    ]
  },
  {
    title: "Cost Optimization",
    icon: <BarChart2 className="h-6 w-6 text-primary" />,
    points: [
      "Consolidated shipping costs",
      "Reduced paperwork expenses",
      "Optimized vendor selection"
    ]
  }
]
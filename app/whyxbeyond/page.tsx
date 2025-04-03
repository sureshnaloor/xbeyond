import { ChevronRight, CheckCircle, Shield, AlertTriangle, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function WhyXBeyondPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Why Choose xBeyond?
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                Transform your supply chain management with proven expertise in procurement outsourcing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg border bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12),0_4px_12px_rgb(59,130,246,0.1)] hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50"
              >
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="h-6 w-6 text-primary group-hover:text-blue-600" />
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                </div>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Management Section */}
      <section className="w-full py-12 md:py-24 bg-slate-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Risk Management Approach</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {risks.map((risk, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12),0_4px_12px_rgb(59,130,246,0.1)] hover:bg-gradient-to-br hover:from-purple-50 hover:to-blue-50"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="h-6 w-6 text-primary group-hover:text-purple-600" />
                  <h3 className="text-xl font-semibold">{risk.concern}</h3>
                </div>
                <p className="text-gray-600">{risk.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Strategic Approaches</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {strategies.map((strategy, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg border bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12),0_4px_12px_rgb(59,130,246,0.1)] hover:bg-gradient-to-br hover:from-teal-50 hover:to-blue-50"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Lightbulb className="h-6 w-6 text-primary group-hover:text-teal-600" />
                  <h3 className="text-xl font-semibold">{strategy.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{strategy.description}</p>
                <Button variant="outline" size="sm" asChild className="relative z-10">
                  <Link href={`/services/${strategy.id}`}>
                    Learn More <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
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
                Let's discuss how xBeyond can optimize your procurement operations
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
                <Link href="/demo">Request Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const benefits = [
  {
    title: "Cost Savings",
    description: "Achieve significant cost reductions through bulk purchases, reduced administrative expenses, and minimized defects and delays in procurement processes."
  },
  {
    title: "Increased Efficiency",
    description: "Leverage automated procurement systems, advanced data analytics, and AI-driven insights for smarter decision-making and streamlined operations."
  },
  {
    title: "Access to Expertise",
    description: "Benefit from deep knowledge of Saudi markets and construction industry categories, backed by highly skilled resources in negotiation and contract management."
  },
  {
    title: "Enhanced Business Focus",
    description: "Enable leadership to concentrate on core competencies by strategically offloading procurement tasks to specialized teams."
  },
  {
    title: "Improved Supplier Management",
    description: "Secure better terms, ensure timely delivery, and maintain quality through automated digitized strategies for vendor evaluation and compliance management."
  },
  {
    title: "Scalability",
    description: "Scale procurement operations efficiently without the need to hire direct resources, providing flexibility to adapt to market demands."
  }
]

const risks = [
  {
    concern: "Loss of Control",
    solution: "Mitigated through well-defined SLAs, regular performance reviews, and transparent reporting mechanisms."
  },
  {
    concern: "Third Party Dependence",
    solution: "Start with bulk materials, maintain backup lean team, and implement automated processes for reduced dependency."
  },
  {
    concern: "Communication Barriers",
    solution: "Overcome timezone, language, and cultural barriers with advanced collaboration tools, Saudi-exposed offshore team, and local team members."
  },
  {
    concern: "Security Risks",
    solution: "Implement top-tier data security procedures, regular audits, and on-premise solutions for critical IP categories."
  },
  {
    concern: "Hidden Costs",
    solution: "Thorough due diligence in planning stage, clear contract terms, and comprehensive total cost transparency."
  },
  {
    concern: "Quality Consistency",
    solution: "Strict quality metrics in contracts, regular audits, and retained decision-making authority with client company."
  },
  {
    concern: "Impact on In-house Staff",
    solution: "Focus on low-level execution tasks while maintaining strategic decision-making in-house, improving Saudi percentage and local content score."
  }
]

const strategies = [
  {
    id: "direct",
    title: "Direct Procurement",
    description: "Strategic outsourcing of critical raw materials procurement, ensuring quality and cost-effectiveness in core material acquisition."
  },
  {
    id: "indirect",
    title: "Indirect Procurement",
    description: "Efficient management of office supplies, consumables, PPE, IT equipment, and technical equipment procurement."
  },
  {
    id: "purchasing",
    title: "Purchase Operations",
    description: "Remote execution of purchase workflows including PO placement, expediting, logistics, imports, and transaction management."
  },
  {
    id: "vendor",
    title: "Vendor Management",
    description: "Comprehensive vendor lifecycle management including onboarding, qualification, evaluation, and compliance monitoring."
  },
  {
    id: "category",
    title: "Category Management",
    description: "End-to-end management of specific categories like cables (Saudi-focused), fasteners (hybrid), or specialized engineered items."
  }
]
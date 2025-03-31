import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, CheckCircle, Shield, AlertTriangle, Lightbulb } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function WhyXBeyondPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="container mx-auto py-8 space-y-12">
          {/* Hero Section */}
          <section className="text-center space-y-6">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Transform Your Supply Chain Management
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Unlock the potential of outsourced procurement and supply chain management while maintaining control and efficiency
            </p>
            <Button size="lg" className="mt-6">
              Schedule a Consultation <ArrowRight className="ml-2" />
            </Button>
          </section>

          {/* Benefits Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>{benefit.description}</CardContent>
              </Card>
            ))}
          </section>

          {/* Risk Management Section */}
          <section className="bg-muted/30 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-8 text-center">Risk Management Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {risks.map((risk) => (
                <div key={risk.concern} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <AlertTriangle className="h-6 w-6 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{risk.concern}</h3>
                    <p className="text-muted-foreground">{risk.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Strategy Tabs */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-center">Strategic Approaches</h2>
            <Tabs defaultValue="direct" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
                {strategies.map((strategy) => (
                  <TabsTrigger key={strategy.id} value={strategy.id}>
                    {strategy.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              {strategies.map((strategy) => (
                <TabsContent key={strategy.id} value={strategy.id} className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>{strategy.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{strategy.description}</p>
                      <div className="mt-4">
                        <Button variant="outline">
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-primary/10 to-primary/5 p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Supply Chain?</h2>
            <p className="text-lg mb-6">Let's discuss how xBeyond can transform your procurement operations</p>
            <div className="flex gap-4 justify-center">
              <Button size="lg">Request Demo</Button>
              <Button size="lg" variant="outline">Contact Sales</Button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
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
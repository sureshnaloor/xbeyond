import { ChevronRight, Building2, Hammer, Ruler, HardHat, Truck, FileCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const solutions = [
  {
    title: "Project Planning & Control",
    description: "Advanced project planning tools with AI-driven scheduling, resource allocation, and progress tracking capabilities.",
    icon: <Building2 className="h-6 w-6 text-blue-600" />
  },
  {
    title: "Equipment Management",
    description: "Comprehensive equipment tracking, maintenance scheduling, and utilization optimization systems.",
    icon: <Hammer className="h-6 w-6 text-purple-600" />
  },
  {
    title: "Material Management",
    description: "Real-time inventory tracking, automated procurement, and material requirement planning solutions.",
    icon: <Truck className="h-6 w-6 text-green-600" />
  },
  {
    title: "Quality Control",
    description: "Digital quality assurance systems with automated inspections, compliance tracking, and reporting tools.",
    icon: <FileCheck className="h-6 w-6 text-orange-600" />
  },
  {
    title: "Workforce Management",
    description: "Integrated workforce planning, skill tracking, and safety management solutions for construction sites.",
    icon: <HardHat className="h-6 w-6 text-red-600" />
  },
  {
    title: "Design & Engineering",
    description: "Advanced BIM integration, design collaboration tools, and engineering document management systems.",
    icon: <Ruler className="h-6 w-6 text-teal-600" />
  }
]

export default function ConstructionPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Construction & EPC Solutions
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                Digital transformation solutions for construction and engineering projects
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
                className="group relative overflow-hidden rounded-xl bg-white/80 backdrop-blur-sm p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12),0_4px_12px_rgb(59,130,246,0.1)] hover:bg-gradient-to-br hover:from-slate-50 hover:to-blue-50 border border-gray-100/50"
              >
                <div className="mb-4 transform transition-transform group-hover:scale-110">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {solution.title}
                </h3>
                <p className="text-gray-600">{solution.description}</p>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
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
                Transform Your Construction Operations
              </h2>
              <p className="mx-auto max-w-[600px] text-primary-foreground/90 md:text-xl">
                Let's discuss how our solutions can optimize your construction projects
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Contact Us <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
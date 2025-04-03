import { ChevronRight, LayoutDashboard, Users2, Wallet, Clock, Shield, ClipboardCheck, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SmartProjectPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Construction Project Management
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                AI-Driven solutions for comprehensive construction project management
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Unified Project Platform</h2>
          <p className="text-center text-gray-600 mb-12 max-w-[800px] mx-auto">
            From Survey to Designs, BOQs to handover – all teams collaborate on a single platform to deliver projects faster & under budget.
          </p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {platformFeatures.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12),0_4px_12px_rgb(59,130,246,0.1)] hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Functions */}
      <section className="w-full py-12 md:py-24 bg-slate-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Key Functions</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {keyFunctions.map((func, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-white/80 backdrop-blur-sm p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12),0_4px_12px_rgb(59,130,246,0.1)] hover:bg-gradient-to-br hover:from-purple-50 hover:to-blue-50"
              >
                <div className="flex items-center gap-2 mb-4">
                  {func.icon}
                  <h3 className="text-xl font-semibold">{func.title}</h3>
                </div>
                <p className="text-gray-600">{func.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Challenges & Our Solutions</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {challenges.map((challenge, index) => (
              <div key={index} className="rounded-xl bg-white/80 backdrop-blur-sm p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12),0_4px_12px_rgb(59,130,246,0.1)] hover:bg-gradient-to-br hover:from-teal-50 hover:to-blue-50">
                <h3 className="text-xl font-semibold mb-4">{challenge.title}</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  {challenge.points.map((point, idx) => (
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
                Ready to Transform Your Project Management?
              </h2>
              <p className="mx-auto max-w-[600px] text-primary-foreground/90 md:text-xl">
                Let's discuss how our AI-driven solutions can streamline your construction projects
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
    </>
  )
}

// Update in platformFeatures array
const platformFeatures = [
  {
    title: "Site Survey",
    description: "Comprehensive site analysis and documentation",
    icon: <LayoutDashboard className="h-6 w-6 text-primary" />
  },
  {
    title: "Design Management",
    description: "Integrated design collaboration and version control",
    icon: <Users2 className="h-6 w-6 text-primary" />
  },
  {
    title: "Proposal & BOQ",
    description: "Accurate cost estimation and proposal generation",
    icon: <FileText className="h-6 w-6 text-primary" />
  },
  {
    title: "Work Progress",
    description: "Real-time progress tracking and reporting",
    icon: <Clock className="h-6 w-6 text-primary" />
  },
  {
    title: "Audit & Handover",
    description: "Quality assurance and project completion management",
    icon: <ClipboardCheck className="h-6 w-6 text-primary" />
  }
]

// Update in keyFunctions array
const keyFunctions = [
  {
    title: "Planning",
    description: "Develop detailed project plans outlining tasks, timelines, resources, and budget allocation.",
    icon: <LayoutDashboard className="h-6 w-6 text-primary" />
  },
  {
    title: "Coordination",
    description: "Manage communication and workflow among all stakeholders effectively.",
    icon: <Users2 className="h-6 w-6 text-primary" />
  },
  {
    title: "Budget Management",
    description: "Monitor and control project costs to ensure adherence to budget constraints.",
    icon: <Wallet className="h-6 w-6 text-primary" />
  },
  {
    title: "Time Management",
    description: "Track milestones and address delays to ensure timely project completion.",
    icon: <Clock className="h-6 w-6 text-primary" />
  },
  {
    title: "Risk Management",
    description: "Identify and mitigate potential risks impacting project delivery.",
    icon: <Shield className="h-6 w-6 text-primary" />
  },
  {
    title: "Quality Control",
    description: "Ensure construction meets industry standards and specifications.",
    icon: <ClipboardCheck className="h-6 w-6 text-primary" />
  }
]

const challenges = [
  {
    title: "Project Complexity",
    points: [
      "Managing multiple stakeholders and their expectations",
      "Coordinating various subcontractors and their schedules",
      "Handling complex documentation and regulatory requirements"
    ]
  },
  {
    title: "Resource Management",
    points: [
      "Optimizing labor and equipment allocation",
      "Managing material procurement and delivery",
      "Addressing skill gaps and training needs"
    ]
  },
  {
    title: "Time and Cost Control",
    points: [
      "Preventing budget overruns and scope creep",
      "Meeting project milestones and deadlines",
      "Managing change orders and their impact"
    ]
  },
  {
    title: "Quality and Compliance",
    points: [
      "Maintaining consistent quality standards",
      "Ensuring regulatory compliance",
      "Managing safety protocols and risk mitigation"
    ]
  }
]
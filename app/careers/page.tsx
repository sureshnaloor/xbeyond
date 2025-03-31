import { ChevronRight, Building2, Code2, Database, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import JobApplicationForm from "./components/job-application-form"

export default function CareerPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Join Our Team
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                Help us shape the future of industrial digital transformation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg border p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-2 mb-4">
                  {position.icon}
                  <h3 className="text-xl font-semibold">{position.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{position.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {position.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Building2 className="h-4 w-4" />
                    {position.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase className="h-4 w-4" />
                    {position.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="w-full py-12 md:py-24 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-[800px] mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Apply Now</h2>
            <p className="text-center text-gray-600 mb-12">
              Take the first step towards joining our team. Fill out the application form below.
            </p>
            <JobApplicationForm />
          </div>
        </div>
      </section>
    </>
  )
}

const openPositions = [
  {
    title: "Full Stack Developer",
    description: "Join our development team to build innovative solutions for industrial digital transformation.",
    skills: ["React", "Node.js", "TypeScript", "AWS"],
    location: "Remote",
    type: "Full-time",
    icon: <Code2 className="h-6 w-6 text-primary" />
  },
  {
    title: "Data Engineer",
    description: "Help us build robust data pipelines and analytics solutions for industrial applications.",
    skills: ["Python", "SQL", "ETL", "Big Data"],
    location: "Hybrid",
    type: "Full-time",
    icon: <Database className="h-6 w-6 text-primary" />
  }
]
import Link from "next/link"
import { Building2, Flame, Factory, Power, Construction, Lightbulb } from "lucide-react"

const industries = [
  {
    title: "Power",
    description: "Digital solutions for power generation, transmission, and distribution facilities.",
    icon: <Power className="h-8 w-8 text-teal-600" />,
    link: "/industries/power"
  },
  {
    title: "Oil & Gas Upstream",
    description: "Smart solutions for exploration, drilling, and production operations.",
    icon: <Flame className="h-8 w-8 text-teal-600" />,
    link: "/industries/oil-gas"
  },
  {
    title: "Refineries & Mining",
    description: "Digital transformation for refining operations and mineral processing.",
    icon: <Factory className="h-8 w-8 text-teal-600" />,
    link: "/industries/refineries"
  },
  {
    title: "Petrochemicals",
    description: "Integrated solutions for petrochemical plants and processing facilities.",
    icon: <Building2 className="h-8 w-8 text-teal-600" />,
    link: "/industries/petrochemicals"
  },
  {
    title: "Infrastructure & Green Energy",
    description: "Smart solutions for infrastructure development and renewable energy projects.",
    icon: <Lightbulb className="h-8 w-8 text-teal-600" />,
    link: "/industries/infrastructure"
  },
  {
    title: "Construction & EPC",
    description: "Digital transformation solutions for construction and engineering projects.",
    icon: <Construction className="h-8 w-8 text-teal-600" />,
    link: "/industries/construction"
  }
]

export default function IndustriesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-teal-900 to-teal-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Industry Solutions
              </h1>
              <p className="mx-auto max-w-[700px] text-teal-100 md:text-xl">
                Digital transformation solutions tailored for diverse industrial sectors
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <Link 
                key={index} 
                href={industry.link}
                className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-teal-900">{industry.title}</h3>
                <p className="text-gray-600">{industry.description}</p>
                <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-teal-500 to-teal-700 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
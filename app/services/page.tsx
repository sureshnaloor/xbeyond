import Link from "next/link"
import { Tags, BarChart2, FileStack, Link2, Store, Users } from "lucide-react"

const services = [
  {
    title: "Asset Management",
    description: "Smart asset tracking and management with IoT integration and real-time monitoring.",
    icon: <Tags className="h-8 w-8 text-blue-600" />,
    link: "/services/smarttag"
  },
  {
    title: "Project Management",
    description: "Comprehensive project planning, execution, and monitoring solutions.",
    icon: <BarChart2 className="h-8 w-8 text-blue-600" />,  // Changed from ProjectorChart to BarChart2
    link: "/services/smartproject"
  },
  {
    title: "Materials Cataloguing",
    description: "Advanced materials classification and standardization system.",
    icon: <FileStack className="h-8 w-8 text-blue-600" />,
    link: "/services/smartclass"
  },
  {
    title: "Supply Chain Solutions",
    description: "End-to-end supply chain optimization and management platform.",
    icon: <Link2 className="h-8 w-8 text-blue-600" />,
    link: "/services/smartlink"
  },
  {
    title: "E-marketplace",
    description: "Digital marketplace connecting buyers with qualified vendors.",
    icon: <Store className="h-8 w-8 text-blue-600" />,
    link: "/services/smartwave"
  },
  {
    title: "Vendor Management",
    description: "Comprehensive vendor relationship and performance management system.",
    icon: <Users className="h-8 w-8 text-blue-600" />,
    link: "/services/smartflow"
  }
]

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Our Services
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                Comprehensive digital solutions for enterprise asset and operations management
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Link 
                key={index} 
                href={service.link}
                className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
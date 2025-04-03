import { ChevronRight, Database, List, FileSpreadsheet, Package, BarChart2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SmartClassPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Materials Cataloging & Classification
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                Comprehensive solutions for materials coding, cataloging, and inventory optimization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="w-full py-12 md:py-24 bg-stone-100">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-gradient-to-tr from-stone-50 to-stone-200 rounded-lg border p-6 hover:shadow-lg transition-shadow"
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

      {/* Process Section */}
      <section className="w-full py-12 md:py-24 bg-slate-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 ">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Material Cataloging</h3>
              <p className="text-gray-600">
                A systematic process to identify each material item with comprehensive details including specifications, 
                standards, and descriptions. This enables:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Easy identification of materials</li>
                <li>Development of appropriate buying descriptions</li>
                <li>Efficient procurement processes</li>
                <li>Elimination of duplicate inventory</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Bills of Materials (BOM)</h3>
              <p className="text-gray-600">
                Detailed breakdown of spares from assemblies to materials, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Conversion of vendor/supplier data to structured BOMs</li>
                <li>Equipment tag association</li>
                <li>SPIR-BOM data build for ERP/CMMS integration</li>
                <li>Capture of unique identifiers and specifications</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Material Standardization</h3>
              <p className="text-gray-600">
                Structured approach to standardize material descriptions following industry best practices:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Hierarchical characteristics arrangement (primary, secondary, tertiary)</li>
                <li>Base UOM establishment for standard trading units</li>
                <li>Multiple units of measure configuration</li>
                <li>Conversion factors mapping to base UOM</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Classification & Master Governance</h3>
              <p className="text-gray-600">
                Strategic classification system to optimize vendor mapping and material management:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Characteristic-based classification structure</li>
                <li>Vendor-material relationship mapping</li>
                <li>Service category alignment</li>
                <li>Master data governance framework</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Ready to Optimize Your Materials Management?
              </h2>
              <p className="mx-auto max-w-[600px] text-primary-foreground/90 md:text-xl">
                Let's discuss how our cataloging and classification solutions can transform your inventory management
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

const features = [
  {
    title: "Inventory Optimization",
    description: "Eradicate duplicates and optimize stock levels through intelligent mapping of supply and demand patterns.",
    icon: <Package className="h-6 w-6 text-primary" />
  },
  {
    title: "Data Management",
    description: "Comprehensive data cleansing, enrichment, and standardization for accurate material identification.",
    icon: <Database className="h-6 w-6 text-primary" />
  },
  {
    title: "Stock Analysis",
    description: "Identify non-moving inventory and implement effective surplus management strategies.",
    icon: <BarChart2 className="h-6 w-6 text-primary" />
  },
  {
    title: "CMMS Integration",
    description: "Seamless implementation of material management requirements in any CMMS system.",
    icon: <List className="h-6 w-6 text-primary" />
  },
  {
    title: "SPIR/SPIL Management",
    description: "Comprehensive spare parts information management and lifecycle tracking.",
    icon: <FileSpreadsheet className="h-6 w-6 text-primary" />
  },
  {
    title: "Stock Requirements",
    description: "Define optimal min/max levels based on historical data and usage patterns.",
    icon: <Package className="h-6 w-6 text-primary" />
  }
]
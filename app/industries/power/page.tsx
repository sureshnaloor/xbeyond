export default function PowerIndustryPage() {
  return (
    <div className="container mx-auto py-12">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-teal-900 to-teal-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Power Industry Solutions
              </h1>
              <p className="mx-auto max-w-[700px] text-teal-100 md:text-xl">
                Digital transformation solutions for power generation and distribution
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="space-y-16">
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Asset Management Excellence</h2>
            <p className="text-gray-600 mb-4">
              SmartTag revolutionizes power plant asset management by providing real-time monitoring of critical equipment. From turbines to transformers, our solution ensures optimal performance and predictive maintenance.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Real-time turbine performance monitoring</li>
              <li>Transformer health tracking</li>
              <li>Predictive maintenance scheduling</li>
              <li>Equipment lifecycle optimization</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            {/* Power equipment monitoring illustration */}
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 bg-gray-100 p-8 rounded-lg">
            {/* Project timeline illustration */}
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-semibold mb-4">Project Management Transformation</h2>
            <p className="text-gray-600 mb-4">
              SmartProject streamlines power plant construction and maintenance projects, ensuring on-time delivery and optimal resource utilization.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Plant shutdown planning</li>
              <li>Maintenance scheduling</li>
              <li>Resource allocation</li>
              <li>Progress tracking</li>
            </ul>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Materials Intelligence</h2>
            <p className="text-gray-600 mb-4">
              SmartClass ensures proper classification and management of power plant components and spare parts.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Spare parts cataloging</li>
              <li>Equipment classification</li>
              <li>Inventory optimization</li>
              <li>Critical spares management</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            {/* Materials catalog illustration */}
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 bg-gray-100 p-8 rounded-lg">
            {/* Supply chain illustration */}
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-semibold mb-4">Supply Chain Excellence</h2>
            <p className="text-gray-600 mb-4">
              SmartLink optimizes the procurement and logistics of power plant equipment and materials.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Equipment procurement</li>
              <li>Spare parts logistics</li>
              <li>Inventory management</li>
              <li>Supplier coordination</li>
            </ul>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Digital Marketplace</h2>
            <p className="text-gray-600 mb-4">
              SmartWave connects power utilities with qualified vendors and service providers.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Equipment sourcing</li>
              <li>Service provider selection</li>
              <li>Bid management</li>
              <li>Contract administration</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            {/* Marketplace illustration */}
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 bg-gray-100 p-8 rounded-lg">
            {/* Vendor management illustration */}
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-semibold mb-4">Vendor Excellence</h2>
            <p className="text-gray-600 mb-4">
              SmartFlow ensures optimal vendor management for power plant operations and maintenance.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Contractor qualification</li>
              <li>Performance monitoring</li>
              <li>Safety compliance</li>
              <li>Service quality tracking</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}
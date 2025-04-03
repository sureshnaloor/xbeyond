export default function RefineriesIndustryPage() {
  return (
    <div className="container mx-auto py-12">
      {/* // Replace header with: */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-teal-900 to-teal-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Refineries & Mining Solutions
              </h1>
              <p className="mx-auto max-w-[700px] text-teal-100 md:text-xl">
                Digital transformation solutions for refineries and mining operations
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
              SmartTag transforms refinery and mining equipment management with real-time monitoring and predictive analytics. From process units to mining machinery, our solution optimizes asset performance and reliability.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Process equipment health monitoring</li>
              <li>Mining machinery tracking</li>
              <li>Predictive maintenance alerts</li>
              <li>Critical asset performance optimization</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            {/* Refinery equipment monitoring illustration */}
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 bg-gray-100 p-8 rounded-lg">
            {/* Project management illustration */}
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-semibold mb-4">Project Management Transformation</h2>
            <p className="text-gray-600 mb-4">
              SmartProject optimizes refinery turnarounds and mining operations with comprehensive project management capabilities.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Turnaround planning and execution</li>
              <li>Mining operations scheduling</li>
              <li>Contractor coordination</li>
              <li>Safety compliance tracking</li>
            </ul>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Materials Intelligence</h2>
            <p className="text-gray-600 mb-4">
              SmartClass revolutionizes materials management in refineries and mining operations with advanced cataloging and classification.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Process unit spare parts classification</li>
              <li>Mining equipment components catalog</li>
              <li>Critical spares identification</li>
              <li>Inventory optimization strategies</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            {/* Materials management illustration */}
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 bg-gray-100 p-8 rounded-lg">
            {/* Supply chain illustration */}
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-semibold mb-4">Supply Chain Excellence</h2>
            <p className="text-gray-600 mb-4">
              SmartLink streamlines the complex supply chain needs of refineries and mining operations.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Critical equipment procurement</li>
              <li>Emergency spare parts logistics</li>
              <li>Consumables management</li>
              <li>Warehouse optimization</li>
            </ul>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Digital Marketplace</h2>
            <p className="text-gray-600 mb-4">
              SmartWave connects refineries and mining operations with specialized equipment vendors and service providers.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Specialized equipment sourcing</li>
              <li>Maintenance service providers</li>
              <li>Technical consultants network</li>
              <li>Digital procurement platform</li>
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
              SmartFlow ensures optimal vendor management for refinery and mining operations.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Specialized contractor qualification</li>
              <li>HSE compliance monitoring</li>
              <li>Performance evaluation</li>
              <li>Vendor relationship management</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}
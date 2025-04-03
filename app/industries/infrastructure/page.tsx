export default function InfrastructureIndustryPage() {
  return (
    <div className="container mx-auto py-12">
      {/* // Replace header with: */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-teal-900 to-teal-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Infrastructure & Green Energy Solutions
              </h1>
              <p className="mx-auto max-w-[700px] text-teal-100 md:text-xl">
                Digital transformation solutions for infrastructure and renewable energy
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
              SmartTag transforms infrastructure and renewable energy asset management with comprehensive monitoring of construction equipment, solar panels, wind turbines, and water treatment facilities.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Solar farm performance monitoring</li>
              <li>Wind turbine maintenance tracking</li>
              <li>Water treatment equipment monitoring</li>
              <li>Construction equipment management</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            {/* Green energy monitoring illustration */}
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 bg-gray-100 p-8 rounded-lg">
            {/* Project management illustration */}
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-semibold mb-4">Project Management Transformation</h2>
            <p className="text-gray-600 mb-4">
              SmartProject optimizes infrastructure development and renewable energy installations.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Solar farm installation tracking</li>
              <li>Wind farm project management</li>
              <li>Infrastructure construction monitoring</li>
              <li>Environmental compliance tracking</li>
            </ul>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Materials Intelligence</h2>
            <p className="text-gray-600 mb-4">
              SmartClass ensures efficient classification of renewable energy components and infrastructure materials.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Solar panel inventory management</li>
              <li>Wind turbine parts classification</li>
              <li>Construction materials cataloging</li>
              <li>Sustainable material tracking</li>
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
              SmartLink optimizes the procurement and logistics for infrastructure and renewable energy projects.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Green energy equipment sourcing</li>
              <li>Sustainable material procurement</li>
              <li>Construction logistics management</li>
              <li>Carbon footprint tracking</li>
            </ul>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Digital Marketplace</h2>
            <p className="text-gray-600 mb-4">
              SmartWave connects infrastructure projects with sustainable suppliers and specialized service providers.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Renewable energy equipment sourcing</li>
              <li>Green technology providers</li>
              <li>Sustainable construction materials</li>
              <li>Environmental consultants network</li>
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
              SmartFlow ensures comprehensive vendor management for sustainable infrastructure projects.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Green certification verification</li>
              <li>Sustainability compliance monitoring</li>
              <li>Environmental performance tracking</li>
              <li>ESG standards adherence</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}
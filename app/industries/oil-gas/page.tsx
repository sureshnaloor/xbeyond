"use client";
import { CldImage } from "next-cloudinary";


export default function OilGasIndustryPage() {
  return (
    <div className="container mx-auto py-12">
      // Replace header with:
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-teal-900 to-teal-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Oil & Gas Upstream Solutions
              </h1>
              <p className="mx-auto max-w-[700px] text-teal-100 md:text-xl">
                Digital transformation solutions for upstream oil and gas operations
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <div className="space-y-16">
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Smart Asset Tracking</h2>
            <p className="text-gray-600 mb-4">
              SmartTag transforms offshore and onshore asset management with IoT-enabled tracking and monitoring. Perfect for drilling equipment, wellheads, and critical machinery.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Real-time location tracking of mobile assets</li>
              <li>Equipment performance monitoring</li>
              <li>Maintenance history and scheduling</li>
              <li>Compliance and certification tracking</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
          <CldImage
              src="oilgas1_t4plr9"
              alt="Green energy asset management"
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 bg-gray-100 p-8 rounded-lg">
          <CldImage
              src="oilgas2_mkcpwe"
              alt="Green energy asset management"
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-semibold mb-4">Drilling Project Excellence</h2>
            <p className="text-gray-600 mb-4">
              SmartProject optimizes drilling operations and well completion projects with real-time progress tracking and resource management.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Well planning and execution tracking</li>
              <li>Resource allocation optimization</li>
              <li>Real-time project dashboards</li>
              <li>Risk management and compliance</li>
            </ul>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Materials Intelligence</h2>
            <p className="text-gray-600 mb-4">
              SmartClass revolutionizes materials management for upstream operations, ensuring proper classification and availability of critical components.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Standardized material coding</li>
              <li>Inventory optimization</li>
              <li>Spare parts management</li>
              <li>Material lifecycle tracking</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
          <CldImage
              src="construction1_juh8gb"
              alt="Green energy asset management"
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 bg-gray-100 p-8 rounded-lg">
          <CldImage
              src="construction5_dtkehx"
              alt="Green energy asset management"
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-semibold mb-4">Supply Chain Optimization</h2>
            <p className="text-gray-600 mb-4">
              SmartLink ensures seamless supply chain operations for upstream activities, from procurement to last-mile delivery.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Vendor performance tracking</li>
              <li>Logistics optimization</li>
              <li>Inventory forecasting</li>
              <li>Emergency supply management</li>
            </ul>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Digital Marketplace</h2>
            <p className="text-gray-600 mb-4">
              SmartWave connects upstream operators with qualified vendors, streamlining procurement of specialized equipment and services.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Specialized equipment sourcing</li>
              <li>Service provider marketplace</li>
              <li>RFQ management</li>
              <li>Digital contract management</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
          <CldImage
              src="oilgas3_aiv0ak"
              alt="Green energy asset management"
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 bg-gray-100 p-8 rounded-lg">
          <CldImage
              src="oilgas4_kon1zr"
              alt="Green energy asset management"
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-semibold mb-4">Vendor Excellence</h2>
            <p className="text-gray-600 mb-4">
              SmartFlow ensures optimal vendor management for upstream operations, from qualification to performance monitoring.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Vendor prequalification</li>
              <li>Performance scoring</li>
              <li>Compliance monitoring</li>
              <li>Relationship management</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}
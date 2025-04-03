"use client"
import {CldImage} from "next-cloudinary";

export default function PetrochemicalsIndustryPage() {
  return (
    <div className="container mx-auto py-12">
      {/* // Replace header with: */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-teal-900 to-teal-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Petrochemical Industry Solutions
              </h1>
              <p className="mx-auto max-w-[700px] text-teal-100 md:text-xl">
                Digital transformation solutions for petrochemical operations
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
              SmartTag revolutionizes petrochemical plant asset management with comprehensive monitoring of process equipment, reactors, and critical systems.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Process equipment monitoring</li>
              <li>Reactor performance tracking</li>
              <li>Corrosion monitoring systems</li>
              <li>Safety system compliance</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
          <CldImage
              src="petrochem5_kxzbs9"
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
              src="petrochem2_o1o6dh"
              alt="Green energy asset management"
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-semibold mb-4">Project Management Transformation</h2>
            <p className="text-gray-600 mb-4">
              SmartProject optimizes plant turnarounds and expansion projects with integrated project management solutions.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Plant turnaround management</li>
              <li>Expansion project tracking</li>
              <li>Maintenance scheduling</li>
              <li>Regulatory compliance monitoring</li>
            </ul>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Materials Intelligence</h2>
            <p className="text-gray-600 mb-4">
              SmartClass ensures precise classification of chemicals, catalysts, and equipment components.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Chemical inventory management</li>
              <li>Catalyst lifecycle tracking</li>
              <li>Equipment parts classification</li>
              <li>Material safety documentation</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
          <CldImage
              src="petrochem6_oz4zer"
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
              src="petrochem4_iwazbi"
              alt="Green energy asset management"
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-semibold mb-4">Supply Chain Excellence</h2>
            <p className="text-gray-600 mb-4">
              SmartLink optimizes the complex supply chain of petrochemical operations.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Chemical supply management</li>
              <li>Catalyst procurement</li>
              <li>Equipment spare parts logistics</li>
              <li>Just-in-time inventory</li>
            </ul>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Digital Marketplace</h2>
            <p className="text-gray-600 mb-4">
              SmartWave connects petrochemical facilities with specialized suppliers and service providers.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Chemical supplier network</li>
              <li>Specialized equipment sourcing</li>
              <li>Technical service providers</li>
              <li>Digital procurement platform</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
          <CldImage
              src="petrochem7_e6wbo8"
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
              src="petrochem3_kqumf0"
              alt="Green energy asset management"
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-semibold mb-4">Vendor Excellence</h2>
            <p className="text-gray-600 mb-4">
              SmartFlow ensures comprehensive vendor management for petrochemical operations.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Chemical supplier qualification</li>
              <li>Service provider certification</li>
              <li>Quality assurance tracking</li>
              <li>Safety compliance monitoring</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}
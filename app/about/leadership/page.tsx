import Image from 'next/image'

export default function LeadershipPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Leadership Team</h1>
      <div className="max-w-3xl mx-auto mb-12">
        <p className="text-lg text-gray-600 text-center">
          Our leadership team brings together decades of industry expertise with cutting-edge technological innovation.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        <div className="text-center group hover:scale-105 transition-transform duration-300 h-full">
          <div className="mb-4">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 overflow-hidden">
              <div className="w-full h-full rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl h-[280px] flex flex-col">
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Suresh Menon
            </h3>
            <p className="text-blue-600 font-semibold mb-3 inline-block px-4 py-1 rounded-full bg-blue-50">
              Chief Executive Officer
            </p>
            <p className="text-gray-600 text-[12px] leading-relaxed flex-grow">
              A visionary leader with 38+ years of experience in supply chain, projects, ERP, industrial technology and digital transformation. His extensive background in implementing innovative solutions across various industrial sectors has been instrumental in shaping xBeyond's strategic direction and product development.
            </p>
          </div>
        </div>

        <div className="text-center group hover:scale-105 transition-transform duration-300 h-full">
          <div className="mb-4">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 p-1 overflow-hidden">
              <div className="w-full h-full rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl h-[280px] flex flex-col">
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              Sarah Chen
            </h3>
            <p className="text-teal-600 font-semibold mb-3 inline-block px-4 py-1 rounded-full bg-teal-50">
              Chief Technology Officer
            </p>
            <p className="text-gray-600 text-[12px] leading-relaxed flex-grow">
              With over 15 years in enterprise software development, Sarah leads our technical innovation, ensuring our solutions leverage cutting-edge technology while maintaining robust reliability.
            </p>
          </div>
        </div>

        <div className="text-center group hover:scale-105 transition-transform duration-300 h-full">
          <div className="mb-4">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-orange-500 to-red-600 p-1 overflow-hidden">
              <div className="w-full h-full rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl h-[280px] flex flex-col">
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Michael Rodriguez
            </h3>
            <p className="text-orange-600 font-semibold mb-3 inline-block px-4 py-1 rounded-full bg-orange-50">
              Chief Operations Officer
            </p>
            <p className="text-gray-600 text-[12px] leading-relaxed flex-grow">
              A seasoned operations expert with 20+ years in industrial operations, Michael ensures our solutions meet real-world operational needs while maintaining efficiency and scalability.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function LeadershipCard({ image, name, position, description }: {
  image: string
  name: string
  position: string
  description: string
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
      <div className="mb-4">
        <Image
          src={image}
          alt={name}
          width={200}
          height={200}
          className="mx-auto rounded-full"
        />
      </div>
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <h4 className="text-lg text-gray-600 mb-3">{position}</h4>
      <p className="text-gray-500">{description}</p>
    </div>
  )
}
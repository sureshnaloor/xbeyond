import Image from 'next/image'

export default function CertificationsPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-12 text-center">Our Certifications</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <CertificationCard
          icon="/images/about/iso.svg"
          title="ISO 9001:2015"
          description="Quality Management System certification ensuring consistent delivery of high-quality solutions."
        />
        <CertificationCard
          icon="/images/about/cmmi.svg"
          title="CMMI Level 5"
          description="Highest level of process maturity in software development and services."
        />
        <CertificationCard
          icon="/images/about/security.svg"
          title="ISO 27001"
          description="Information Security Management System certification for data protection."
        />
      </div>
    </div>
  )
}

function CertificationCard({ icon, title, description }: {
  icon: string
  title: string
  description: string
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-6">
        <Image
          src={icon}
          alt={title}
          width={120}
          height={120}
          className="mx-auto"
        />
      </div>
      <h3 className="text-xl font-bold mb-4 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  )
}
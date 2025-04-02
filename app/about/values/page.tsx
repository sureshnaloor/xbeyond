import Image from 'next/image'

export default function ValuesPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-12 text-center">Our Core Values</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <ValueCard
          icon="/images/about/innovation.svg"
          title="Innovation"
          description="Continuously pushing boundaries to deliver cutting-edge solutions that transform industries."
        />
        <ValueCard
          icon="/images/about/integrity.svg"
          title="Integrity"
          description="Maintaining the highest standards of transparency and ethical business practices."
        />
        <ValueCard
          icon="/images/about/excellence.svg"
          title="Excellence"
          description="Striving for exceptional quality in every solution and service we deliver."
        />
        <ValueCard
          icon="/images/about/collaboration.svg"
          title="Collaboration"
          description="Working closely with clients to understand and meet their unique needs."
        />
      </div>
    </div>
  )
}

function ValueCard({ icon, title, description }: {
  icon: string
  title: string
  description: string
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="mb-6">
        <Image
          src={icon}
          alt={title}
          width={80}
          height={80}
          className="mx-auto"
        />
      </div>
      <h3 className="text-xl font-bold mb-4 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  )
}
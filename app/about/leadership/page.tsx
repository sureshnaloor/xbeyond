import Image from 'next/image'

export default function LeadershipPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-12 text-center">Leadership Team</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <LeadershipCard
          image="/images/about/leader1.svg"
          name="James Anderson"
          position="Chief Executive Officer"
          description="25+ years of experience in industrial technology and digital transformation."
        />
        <LeadershipCard
          image="/images/about/leader2.svg"
          name="Sarah Chen"
          position="Chief Technology Officer"
          description="Expert in IoT solutions and enterprise software architecture."
        />
        <LeadershipCard
          image="/images/about/leader3.svg"
          name="Michael Rahman"
          position="Chief Operations Officer"
          description="Specialized in supply chain optimization and asset management."
        />
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
import Image from 'next/image'

export default function HistoryPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Journey</h1>
      <div className="max-w-3xl mx-auto mb-12">
        <p className="text-lg text-gray-600 mb-6">
          xBeyond was born from decades of hands-on industry experience. Our founders, seasoned veterans in industrial operations, spent years developing and perfecting these tools within their own companies before deciding to share these battle-tested solutions with the world.
        </p>
      </div>
      
      <div className="grid gap-12">
        <TimelineItem 
          year="1995-2020"
          title="The Foundation Years"
          description="Our founders worked across various industrial sectors, experiencing firsthand the challenges of asset management and supply chain operations. During these years, they developed internal tools and methodologies that would later become xBeyond's core solutions."
          image="/images/about/founders.svg"
        />
        <TimelineItem 
          year="2021"
          title="The Spark"
          description="After seeing how their internal solutions transformed their own operations, our founders realized these tools could benefit the entire industry. xBeyond was conceived as a way to share these proven solutions."
          image="/images/about/spark.svg"
        />
        <TimelineItem 
          year="2022"
          title="Birth of SmartTag"
          description="Our flagship product, SmartTag, evolved from an internal asset tracking system that had been refined over 15 years of real-world usage. We enhanced it with modern technology and made it industry-ready."
          image="/images/about/smarttag.svg"
        />
        <TimelineItem 
          year="2023"
          title="Expanding Horizons"
          description="Building on our success, we launched SmartProject and SmartClass, transforming our founders' project management and cataloguing methodologies into comprehensive digital solutions."
          image="/images/about/expansion.svg"
        />
        <TimelineItem 
          year="2024"
          title="Future Forward"
          description="While we're a young company, we carry decades of industry wisdom. We're now focused on helping other businesses benefit from our time-tested solutions enhanced with cutting-edge technology."
          image="/images/about/future.svg"
        />
      </div>
    </div>
  )
}

function TimelineItem({ year, title, description, image }: { 
  year: string
  title: string
  description: string
  image: string 
}) {
  const getImageClass = (image: string) => {
    const baseClass = "mx-auto timeline-image";
    if (image.includes('founders')) return `${baseClass} timeline-image-founders`;
    if (image.includes('spark')) return `${baseClass} timeline-image-spark`;
    if (image.includes('smarttag')) return `${baseClass} timeline-image-smarttag`;
    if (image.includes('expansion')) return `${baseClass} timeline-image-expansion`;
    if (image.includes('future')) return `${baseClass} timeline-image-future`;
    return baseClass;
  };

  return (
    <div className="flex gap-8 items-center">
      <div className="hidden md:block w-48 flex-shrink-0 perspective-1000">
        <Image
          src={image}
          alt={title}
          width={160}
          height={160}
          className={getImageClass(image)}
        />
      </div>
      <div className="flex-grow">
        <div className="text-xl font-bold text-blue-600 mb-2">{year}</div>
        <h3 className="text-2xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}
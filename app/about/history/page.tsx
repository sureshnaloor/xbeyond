import Image from 'next/image'

const timelineData = [
  {
    year: "1995-2019",
    title: "The Foundation Years",
    description: "Our founders worked across various industrial sectors, experiencing firsthand the challenges of asset management and supply chain operations. During these years, they developed internal tools and methodologies that would later become xBeyond's core solutions.",
    image: "/images/about/founders.svg"
  },
  {
    year: "2020",
    title: "The Spark",
    description: "After seeing how their internal solutions transformed their own operations, our founders realized these tools could benefit the entire industry. xBeyond was conceived as a way to share these proven solutions.",
    image: "/images/about/spark.svg"
  },
  {
    year: "2021",
    title: "Birth of SmartTag",
    description: "Our flagship product, SmartTag, evolved from an internal asset tracking system that had been refined over 15 years of real-world usage. We enhanced it with modern technology and made it industry-ready.",
    image: "/images/about/smarttag.svg"
  },
  {
    year: "2022",
    title: "Birth of SmartWave",
    description: "Introduction of SmartWave's Digital Business Card solution, featuring NFC and QR code technology. This innovative product addresses the inefficiencies of traditional paper business cards, enabling instant digital contact sharing and lead capture at industry events and meetings. The solution seamlessly integrates with CRM systems, transforming networking and lead management in the digital age.",
    image: "/images/about/smartwave.svg"
  },
  {
    year: "2023",
    title: "Expanding Horizons",
    description: "Building on our success, we launched SmartProject and SmartClass, transforming our founders' project management and cataloguing methodologies into comprehensive digital solutions.",
    image: "/images/about/expansion.svg"
  },
  {
    year: "2024",
    title: "Future Forward",
    description: "While we're a young company, we carry decades of industry wisdom. We're now focused on helping other businesses benefit from our time-tested solutions enhanced with cutting-edge technology.",
    image: "/images/about/future.svg"
  }
];

export default function HistoryPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Our Journey</h1>
      <div className="max-w-3xl mx-auto mb-12">
        <p className="text-lg text-gray-600 mb-6 text-center">
          xBeyond was born from decades of hands-on industry experience. Our founders, seasoned veterans in industrial operations, spent years developing and perfecting these tools within their own companies before deciding to share these battle-tested solutions with the world.
        </p>
      </div>
      
      <div className="grid gap-12">
        {timelineData.map((item, index) => (
          <TimelineItem 
            key={item.year}
            {...item}
            isEven={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  )
}

function TimelineItem({ year, title, description, image, isEven }: { 
  year: string
  title: string
  description: string
  image: string
  isEven: boolean
}) {
  return (
    <div className="flex gap-8 items-center group">
      <div className={`hidden md:block w-48 flex-shrink-0 perspective-1000 transition-transform duration-500 ${isEven ? 'group-hover:rotate-y-12' : 'group-hover:-rotate-y-12'}`}>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl transform -rotate-6"></div>
          <div className="relative bg-white rounded-2xl p-4 shadow-lg backdrop-blur-sm border border-gray-100/50">
            <Image
              src={image}
              alt={title}
              width={160}
              height={160}
              className={`timeline-image ${getImageClass(image)}`}
            />
          </div>
        </div>
      </div>
      <div className="flex-grow">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
          <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
            {year}
          </div>
          <h3 className="text-2xl font-semibold mb-3 text-gray-800">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}

const getImageClass = (image: string) => {
  const baseClass = "mx-auto transform transition-all duration-500";
  if (image.includes('founders')) return `${baseClass} timeline-image-founders`;
  if (image.includes('spark')) return `${baseClass} timeline-image-spark`;
  if (image.includes('smarttag')) return `${baseClass} timeline-image-smarttag`;
  if (image.includes('smartwave')) return `${baseClass} timeline-image-smartwave`;
  if (image.includes('expansion')) return `${baseClass} timeline-image-expansion`;
  if (image.includes('future')) return `${baseClass} timeline-image-future`;
  return baseClass;
};
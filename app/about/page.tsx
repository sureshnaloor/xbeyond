import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="grid gap-8 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-6">About xBeyond</h1>
          <p className="text-lg mb-4">
            xBeyond Corporation is a pioneering force in industrial asset management and supply chain solutions. We combine cutting-edge technology with deep industry expertise to transform how businesses manage their operations.
          </p>
          <p className="text-lg mb-4">
            With over a decade of experience serving the Oil & Gas, Petrochemical, and Power sectors, we've developed a comprehensive suite of smart solutions that drive efficiency, reduce costs, and enhance operational visibility.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/about/innovation.svg"
            alt="Innovation"
            width={400}
            height={400}
            priority
          />
        </div>
      </div>
    </div>
  )
}
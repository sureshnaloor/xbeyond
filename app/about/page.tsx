import Logo from "@/components/logo"

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-2xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        About xBeyond
      </h1>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="group">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Our Vision</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At xBeyond, we're revolutionizing how industries manage their assets, projects, and supply chains. Born from decades of hands-on industry experience, our solutions address real-world challenges with cutting-edge technology.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to empower businesses with intelligent, integrated solutions that drive efficiency, reduce costs, and promote sustainable growth in the digital age.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-3 text-gray-700">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span>Innovative Solutions</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span>Industry Expertise</span>
              </div>
            </div>
          </div>
        </div>

        <div className="group">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
            <div className="relative h-40 mb-6 overflow-hidden rounded-xl bg-gradient-to-r from-blue-500/5 to-purple-600/5 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="w-[96px] h-[96px] relative z-10">
                <Logo />
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-600">Global Presence</span>
                <span className="text-blue-600 font-semibold">8+ Countries</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-600">Industry Experience</span>
                <span className="text-purple-600 font-semibold">38+ Years</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-600">Client Satisfaction</span>
                <span className="text-emerald-600 font-semibold">98%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
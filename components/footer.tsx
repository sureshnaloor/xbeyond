export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">xBeyond</h3>
            <p className="text-gray-600">
              Empowering businesses with decades of industry expertise and innovative solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-600 hover:text-primary">About Us</a></li>
              <li><a href="/services" className="text-gray-600 hover:text-primary">Services</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-primary">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Email: info@xbeyond.com</li>
              <li>Phone: +1 234 567 890</li>
              <li>Address: Dubai, UAE</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-gray-600">
          <p>© {new Date().getFullYear()} xBeyond. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
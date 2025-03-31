import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPolicyPage() {
  return (
    <div className="container py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Data Collection and Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              xBeyond collects and processes business information necessary for providing construction and procurement management services. This includes:
            </p>
            <ul className="list-disc ml-6 mt-4 space-y-2 text-gray-600">
              <li>Company registration and contact information</li>
              <li>Project and asset management data</li>
              <li>Procurement and supply chain information</li>
              <li>User authentication and access logs</li>
              <li>System usage and performance metrics</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Data Protection</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              We implement industry-standard security measures to protect your business data:
            </p>
            <ul className="list-disc ml-6 mt-4 space-y-2 text-gray-600">
              <li>End-to-end encryption for data transmission</li>
              <li>Secure cloud infrastructure with regular backups</li>
              <li>Access control and authentication protocols</li>
              <li>Regular security audits and compliance checks</li>
              <li>Data retention policies aligned with industry standards</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Third-Party Sharing</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              We may share data with trusted third parties only when necessary for service delivery:
            </p>
            <ul className="list-disc ml-6 mt-4 space-y-2 text-gray-600">
              <li>Cloud service providers</li>
              <li>Payment processors</li>
              <li>Analytics services</li>
              <li>Professional service partners</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsOfServicePage() {
  return (
    <div className="container py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Service Agreement</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              By using xBeyond's services, you agree to:
            </p>
            <ul className="list-disc ml-6 mt-4 space-y-2 text-gray-600">
              <li>Provide accurate company and user information</li>
              <li>Maintain account security</li>
              <li>Use services in compliance with applicable laws</li>
              <li>Respect intellectual property rights</li>
              <li>Follow acceptable use policies</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Service Level Commitments</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Our commitment to service quality includes:
            </p>
            <ul className="list-disc ml-6 mt-4 space-y-2 text-gray-600">
              <li>99.9% platform uptime</li>
              <li>24/7 technical support</li>
              <li>Regular system updates and maintenance</li>
              <li>Data backup and recovery procedures</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Liability and Indemnification</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Key terms regarding liability:
            </p>
            <ul className="list-disc ml-6 mt-4 space-y-2 text-gray-600">
              <li>Limitation of liability for service disruptions</li>
              <li>User responsibility for data accuracy</li>
              <li>Compliance with local regulations</li>
              <li>Dispute resolution procedures</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Termination</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Terms regarding service termination:
            </p>
            <ul className="list-disc ml-6 mt-4 space-y-2 text-gray-600">
              <li>Notice period requirements</li>
              <li>Data retention and deletion policies</li>
              <li>Final payment terms</li>
              <li>Post-termination obligations</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
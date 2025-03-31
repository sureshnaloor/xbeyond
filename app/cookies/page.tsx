import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CookiePolicyPage() {
  return (
    <div className="container py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Cookie Policy</h1>
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Essential Cookies</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Required for basic platform functionality:
            </p>
            <ul className="list-disc ml-6 mt-4 space-y-2 text-gray-600">
              <li>Authentication and session management</li>
              <li>Security features</li>
              <li>Basic platform preferences</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Functional Cookies</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Enhance your experience with additional features:
            </p>
            <ul className="list-disc ml-6 mt-4 space-y-2 text-gray-600">
              <li>User interface customization</li>
              <li>Saved preferences</li>
              <li>Performance optimization</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Analytics Cookies</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Help us improve our services through:
            </p>
            <ul className="list-disc ml-6 mt-4 space-y-2 text-gray-600">
              <li>Usage patterns analysis</li>
              <li>Performance monitoring</li>
              <li>Error tracking</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
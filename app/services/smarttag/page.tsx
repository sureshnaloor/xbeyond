import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, MapPin, QrCode, Smartphone, Wrench, Bell, Users, Shield } from "lucide-react"

export default function AssetManagementPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="space-y-6">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Smart Asset Management</h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive asset tracking and management solution for modern enterprises
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={<QrCode className="h-8 w-8 text-primary" />}
            title="Smart Tagging"
            description="Track assets using NFC tags and QR codes for seamless identification and monitoring"
          />
          <FeatureCard
            icon={<MapPin className="h-8 w-8 text-primary" />}
            title="Geolocation Tracking"
            description="Real-time asset location tracking with geofencing capabilities for enhanced security"
          />
          <FeatureCard
            icon={<Users className="h-8 w-8 text-primary" />}
            title="Custodian Management"
            description="Track and manage asset custodians with automated handover processes"
          />
          <FeatureCard
            icon={<CheckCircle className="h-8 w-8 text-primary" />}
            title="Calibration Management"
            description="Monitor and schedule calibration activities for precision equipment"
          />
          <FeatureCard
            icon={<Wrench className="h-8 w-8 text-primary" />}
            title="Preventive Maintenance"
            description="Proactive maintenance scheduling and alerts to prevent equipment failure"
          />
          <FeatureCard
            icon={<Shield className="h-8 w-8 text-primary" />}
            title="Compliance & Reporting"
            description="Ensure regulatory compliance with detailed asset history and reports"
          />
        </div>

        {/* Key Benefits Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Operational Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>Reduced asset downtime</li>
                  <li>Improved maintenance scheduling</li>
                  <li>Enhanced asset utilization</li>
                  <li>Real-time asset visibility</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Cost Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>Lower maintenance costs</li>
                  <li>Reduced asset loss</li>
                  <li>Optimized inventory levels</li>
                  <li>Better resource allocation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Asset Management?</h3>
          <p className="mb-6">Contact us for a demonstration of our smart asset management solution</p>
          <div className="flex gap-4 justify-center">
            <Badge variant="outline" className="text-lg py-2 px-4">
              Request Demo
            </Badge>
            <Badge variant="outline" className="text-lg py-2 px-4">
              Contact Sales
            </Badge>
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-4">
          {icon}
          <CardTitle>{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  )
}
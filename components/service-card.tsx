import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import * as Icons from "lucide-react"

type ServiceCardProps = {
  title: string
  description: string
  icon: keyof typeof Icons
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const Icon = Icons[icon as keyof typeof Icons]

  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <div className="flex items-center space-x-2">
          {Icon && <Icon className="h-6 w-6 text-primary" />}
          <CardTitle>{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-gray-500">{description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" size="sm" className="w-full justify-between" asChild>
          <Link href={`/services/${title.toLowerCase().replace(/\s+/g, "-")}`}>
            Learn More <ChevronRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}


import { Construction } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function UnderConstruction({ title }: { title: string }) {
  return (
    <div className="flex-1 flex items-center justify-center py-16">
      <div className="text-center space-y-8">
        <Construction className="w-24 h-24 mx-auto text-primary" />
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-800">{title}</h1>
          <p className="text-gray-600 max-w-md mx-auto">
            We're working hard to bring you something amazing. This page is currently under construction.
          </p>
          <Button asChild>
            <Link href="/about">Back to About</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
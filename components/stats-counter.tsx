"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

type StatsCounterProps = {
  value: number
  label: string
  duration?: number
  className?: string
}

export default function StatsCounter({ value, label, duration = 2000, className }: StatsCounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const end = Math.min(value, 9999)
    const incrementTime = duration / end
    let timer: NodeJS.Timeout

    // Reset counter when value changes
    setCount(0)

    const updateCount = () => {
      start += 1
      setCount(start)

      if (start < end) {
        timer = setTimeout(updateCount, incrementTime)
      }
    }

    timer = setTimeout(updateCount, incrementTime)

    return () => clearTimeout(timer)
  }, [value, duration])

  return (
    <div className={cn("text-center", className)}>
      <div className="text-3xl md:text-4xl font-bold text-primary">{count}+</div>
      <div className="text-sm md:text-base text-gray-500 mt-2">{label}</div>
    </div>
  )
}


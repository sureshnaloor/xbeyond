'use client'

import React from "react"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import * as LucideIcons from "lucide-react"
import { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  title: string
  slogan: string
  description: string
  iconName: keyof typeof LucideIcons
  bgClass?: string
  tag?: string
}

export default function ServiceCard({ title, slogan, description, iconName, bgClass = "", tag }: ServiceCardProps) {
  const IconComponent = LucideIcons[iconName] as LucideIcon

  return (
    <Card className={`relative overflow-hidden group ${bgClass}`}>
      {tag && (
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5 bg-white/30 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)] border border-orange-400/50">
          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 7h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-sm font-extrabold text-white tracking-wider">{tag}</span>
        </div>
      )}
      <motion.div 
        className="absolute top-16 right-3 p-2 rounded-full bg-white/50 backdrop-blur-sm shadow-lg"
        whileHover={{ 
          rotate: 360,
          scale: 1.1,
        }}
        transition={{ duration: 0.5 }}
      >
        <IconComponent 
          size={20}
          className="h-5 w-5 stroke-[2.5px] text-white drop-shadow-md" 
        />
      </motion.div>
      <div className="p-6 pt-20">
        <h3 className="text-xl font-bold mb-1 pr-8 text-white">{title}</h3>
        <p className="text-sm text-white/90 font-medium mb-3 italic">{slogan}</p>
        <p className="text-sm text-white/80">{description}</p>
      </div>
    </Card>
  )
}


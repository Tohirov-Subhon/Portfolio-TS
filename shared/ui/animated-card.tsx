"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/shared/lib/utils"

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  hoverEffect?: boolean
}

export function AnimatedCard({ children, className, hoverEffect = true }: AnimatedCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={hoverEffect ? { y: -10, transition: { duration: 0.2 } } : undefined}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={cn(
        "bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-all duration-300",
        hoverEffect && "hover:shadow-xl",
        className,
      )}
    >
      {children}
    </motion.div>
  )
}

"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/shared/lib/utils"

interface AnimatedIconProps {
  icon: LucideIcon
  size?: number
  color?: string
  className?: string
  hoverEffect?: boolean
}

export function AnimatedIcon({ icon: Icon, size = 24, color, className, hoverEffect = true }: AnimatedIconProps) {
  return (
    <motion.div
      whileHover={hoverEffect ? { scale: 1.2, rotate: 5 } : undefined}
      whileTap={{ scale: 0.9 }}
      className={cn("inline-flex", className)}
    >
      <Icon size={size} color={color} />
    </motion.div>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/shared/lib/utils"

interface AnimatedButtonProps extends React.ComponentProps<typeof Button> {
  hoverScale?: number
}

export function AnimatedButton({ children, className, hoverScale = 1.05, ...props }: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      whileHover={{ scale: hoverScale }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Button className={cn("relative overflow-hidden", className)} {...props}>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-indigo-500/20 animated-gradient"
        />
        <span className="relative z-10">{children}</span>
      </Button>
    </motion.div>
  )
}

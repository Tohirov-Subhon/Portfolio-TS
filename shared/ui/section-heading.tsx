"use client"

import { motion } from "framer-motion"
import { cn } from "@/shared/lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
  gradientType?: 1 | 2 | 3
}

export function SectionHeading({ title, subtitle, className, gradientType = 1 }: SectionHeadingProps) {
  const gradientClass =
    gradientType === 1 ? "gradient-text" : gradientType === 2 ? "gradient-text-2" : "gradient-text-3"

  return (
    <div className={cn("text-center mb-12", className)}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className={cn("text-5xl font-bold mb-4", gradientClass)}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-gray-600 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}

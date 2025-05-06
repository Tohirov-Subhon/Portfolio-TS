"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { SectionHeading } from "@/shared/ui/section-heading"
import { AnimatedCard } from "@/shared/ui/animated-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AnimatedIcon } from "@/shared/ui/animated-icon"

import Logo from '../images/Group 1116606595 (5).png'
import Image from "next/image"

type Project = {
  id: number
  title: string
  description: string
  image: any 
  tags: string[]
  githubUrl: string
  liveUrl: string
  category: "web" | "mobile" | "design"
}

export function ProjectsSection() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Fastcart",
      description:
        "A modern e-commerce interface with advanced filtering, animations, and responsive product galleries.",
      image: {Logo},
      tags: ["React", "Tailwind CSS", "Mui"],
      githubUrl: "https://github.com/Tohirov-Subhon/clientSide-Store",
      liveUrl: "https://client-side-store-wt1m.vercel.app/",
      category: "web",
    },
    {
      id: 2,
      title: "Dashboard Interface",
      description: "A responsive admin dashboard with dark mode, data visualization, and interactive components.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
      githubUrl: "#",
      liveUrl: "#",
      category: "web",
    },
    {
      id: 3,
      title: "Mobile App UI",
      description: "A cross-platform mobile app interface with smooth transitions and gesture-based interactions.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React Native", "TypeScript", "Styled Components"],
      githubUrl: "#",
      liveUrl: "#",
      category: "mobile",
    }
  ]

  const [filter, setFilter] = useState<"all" | "web" | "mobile" | "design">("all")

  const filteredProjects = projects.filter((project) => filter === "all" || project.category === filter)

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading title="My Projects" subtitle="Check out some of my recent work" gradientType={1} />

       

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
               <AnimatedCard  className="overflow-hidden flex flex-col h-full">
                <div className="relative overflow-hidden group">
                  <Image
                    src={Logo}
                    alt='Fastcart'
                    className="w-[100%] h-[100px] "
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full flex justify-between items-center">
                      <a
                        href="https://github.com/Tohirov-Subhon/clientSide-Store"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-200 transition-colors"
                      >
                        <AnimatedIcon icon={Github} size={28} />
                      </a>
                      <a
                        href="https://client-side-store-wt1m.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-200 transition-colors"
                      >
                        <AnimatedIcon icon={ExternalLink} size={28} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-semibold mb-3 gradient-text">Fastcart</h3>
                  <p className="text-gray-600 mb-6 flex-grow text-lg">Fastcart is an online store with advanced filtering, animation and responsive product galleries.</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    
                      <Badge  variant="outline" className="bg-gray-100 text-base py-1 px-3">
                      React
                      </Badge>

                      <Badge  variant="outline" className="bg-gray-100 text-base py-1 px-3">
                      MUI
                      </Badge>

                      <Badge  variant="outline" className="bg-gray-100 text-base py-1 px-3">
                      Tailwind CSS
                      </Badge>

                      <Badge  variant="outline" className="bg-gray-100 text-base py-1 px-3">
                      and others
                      </Badge>
                  
                  </div>
                </div>
              </AnimatedCard>
            
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

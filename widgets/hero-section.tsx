"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react"
import { AnimatedText } from "@/shared/ui/animated-text"
import { AnimatedButton } from "@/shared/ui/animated-button"
import { AnimatedIcon } from "@/shared/ui/animated-icon"

import Person from '@/images/FOTO2.jpg'
import Image from "next/image"

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center pt-20 pb-12 px-6 bg-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
          className="absolute -top-[30%] -right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-violet-200 to-blue-200 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute -bottom-[30%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-amber-200 to-rose-200 blur-3xl"
        />
      </div>

      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-block"
        >
        
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-4"
        >
          <span className="px-6 py-2 bg-gray-100 rounded-full text-base font-medium text-gray-700">
            Front-End Developer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-6xl md:text-7xl font-bold mb-6 gradient-text animated-gradient"
        >
         Tohirov Subhon
        </motion.h1>

        <div className="max-w-3xl mx-auto mb-10">
          <AnimatedText
            text="I create beautiful, responsive, and interactive user interfaces with modern front-end technologies. Passionate about crafting pixel-perfect designs and smooth user experiences."
            className="text-2xl text-gray-600"
            delay={0.4}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6 mb-16"
        >
          <AnimatedButton
            size="lg"
            className="text-lg px-8 py-6 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700"
          >
            View Projects
          </AnimatedButton>
          <AnimatedButton size="lg" variant="outline" className="text-lg px-8 py-6">
            Contact Me
          </AnimatedButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex justify-center space-x-8 mb-16"
        >
          <a href="https://github.com/Tohirov-Subhon/clientSide-Store" className="text-gray-600 hover:text-gray-900 transition-colors">
            <AnimatedIcon icon={Github} size={32} />
          </a>
          <a href="https://www.linkedin.com/in/subhon-tohirov-5b9381364?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BDvoa1pM9T6i60R1b8nNcmw%3D%3D" className="text-gray-600 hover:text-gray-900 transition-colors">
            <AnimatedIcon icon={Linkedin} size={32} />
          </a>
          
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            repeatDelay: 0.5,
          }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="text-gray-400 w-8 h-8" />
        </motion.div>
      </div>
    </section>
  )
}

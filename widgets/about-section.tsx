"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/shared/ui/section-heading"
import { AnimatedText } from "@/shared/ui/animated-text"
import { Code, Lightbulb, Users } from "lucide-react"
import Image from "next/image"
import Person from '@/images/FOTO2.jpg'

export function AboutSection() {
  const features = [
    {
      icon: Code,
      title: "UI Specialist",
      description: "I create pixel-perfect interfaces with attention to detail and modern design principles.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: Lightbulb,
      title: "Creative Solutions",
      description: "I find innovative ways to implement complex UI/UX requirements with clean code.",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
    },
    {
      icon: Users,
      title: "User-Focused",
      description: "I prioritize accessibility, performance, and intuitive user experiences in everything I build.",
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
    },
  ]

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="About Me"
          subtitle="Get to know me better and what drives my passion for development"
          gradientType={1}
        />

        <div className="mt-16">
          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="relative">
                {/* Background decorative elements */}
                <div className="absolute -left-6 -top-6 w-24 h-24 rounded-full bg-blue-100 z-0"></div>
                <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-emerald-100 z-0"></div>
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-amber-100 opacity-50 z-0"></div>

                {/* Image with frame */}
                <div className="relative z-10 rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
                  <div className="aspect-[4/5]">
                    <Image
                      src={Person}
                      alt="About Me"
                      width={500}
                      height={600}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>


                

                {/* Experience badge */}
                <div className="absolute -right-6 -bottom-6 bg-white rounded-full p-2 shadow-xl border-2 border-blue-100 z-20">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-b from-blue-500 to-cyan-500 flex flex-col items-center justify-center text-white p-2">
                    <span className="text-2xl mt-[-15px]  font-bold">1</span>
                    <span className="text-xs  mt-[-5px] font-medium">Years</span>
                    <span className="text-xs  mt-[-5px] font-medium">Experience</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 space-y-8"
            >
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-100 shadow-sm">
                <AnimatedText
                  text="I'm a passionate Front-End Developer with over 1 years of experience crafting beautiful user interfaces. I specialize in React, Next.js, CSS/Tailwind, and modern front-end technologies."
                  className="text-xl text-gray-700 leading-relaxed"
                />
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-8 rounded-2xl border border-emerald-100 shadow-sm">
                <AnimatedText
                  text="My journey in front-end development started when I discovered my passion for creating visually appealing and interactive websites. I love bringing designs to life with clean code and smooth animations."
                  className="text-xl text-gray-700 leading-relaxed"
                  delay={0.1}
                />
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-8 rounded-2xl border border-amber-100 shadow-sm">
                <AnimatedText
                  text="I focus on creating responsive, accessible, and performant web applications with attention to detail and user experience at the forefront of everything I build."
                  className="text-xl text-gray-700 leading-relaxed"
                  delay={0.2}
                />
              </div>
            </motion.div>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`p-8 rounded-2xl shadow-sm border ${feature.borderColor} ${feature.bgColor} hover:shadow-md transition-all duration-300`}
              >
                <div className="flex items-center mb-6">
                  <div className={`p-4 rounded-xl ${feature.bgColor} border ${feature.borderColor}`}>
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className={`ml-4 text-2xl font-bold ${feature.color}`}>{feature.title}</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          
        </div>
      </div>
    </section>
  )
}

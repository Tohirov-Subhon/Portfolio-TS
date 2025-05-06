"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/shared/ui/section-heading"
import { AnimatedCard } from "@/shared/ui/animated-card"
import Image from "next/image"
import { Globe } from "lucide-react"


{/* <div class="tech-icons">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" width="40" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" width="40" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" width="40" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" width="40" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="Sass" width="40" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width="40" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" width="40" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="Redux" width="40" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="Tailwind" width="40" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" width="40" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" width="40" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" alt="Material UI" width="40" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/antdesign/antdesign-original.svg" alt="Ant Design" width="40" />
</div> */}

// Define skill categories
const skillCategories = [
  {
    title: "Languages",
    skills: [
      {
        name: "HTML & CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        icon2: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        color: "from-rose-500 to-orange-500",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        color: "from-yellow-500 to-amber-400",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        color: "from-blue-500 to-cyan-400",
      },
      {
        name: "Sass",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
        color: "from-pink-200 to-rose-500",
      },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      {
        name: "React.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        color: "from-cyan-500 to-blue-500",
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        color: "from-gray-700 to-gray-900",
      },
      {
        name: "Redux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        color: "from-purple-500 to-violet-500",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tailwindcss.svg",
        color: "from-cyan-400 to-blue-500",
      },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        color: "from-orange-500 to-amber-500",
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        color: "from-gray-300 to-gray-900",
      },
      {
        name: "Material UI",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
        color: "from-blue-100 to-blue-600",
      },
      {
        name: "Ant Design",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/antdesign/antdesign-original.svg",
        color: "from-blue-500 to-cyan-500",
      },
    ],
  },
]

// Language proficiency section data
const languages = [
  {
    name: "Tajik",
    level: "Native",
    percentage: 100,
    flag: "https://flagcdn.com/tj.svg",
    color: "from-green-500 to-red-500",
    description: "Mother tongue with perfect fluency in speaking, reading, and writing",
  },
  {
    name: "Russian",
    level: "Native",
    percentage: 80,
    flag: "https://flagcdn.com/ru.svg",
    color: "from-blue-600 to-red-500",
    description: "Bilingual proficiency with excellent command of the language",
  },
  {
    name: "English",
    level: "Professional",
    percentage: 40,
    flag: "https://flagcdn.com/gb.svg",
    color: "from-blue-500 to-red-500",
    description: "Professional working proficiency for technical and business communication",
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="My Skills"
          subtitle="Technologies I work with as a Front-End Developer"
          gradientType={3}
        />

        {/* Technical Skills */}
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-8 text-center gradient-text-2"
            >
              {category.title}
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                >
                  
                  <AnimatedCard className="h-full flex flex-col items-center justify-center py-10 px-6 text-center">
                    <div className={`mb-6 p-4 rounded-full bg-gradient-to-br ${skill.color} bg-opacity-10 shadow-lg`}>
                      <div className="w-12 h-12 relative gap-[40px]">
                        <Image
                          src={skill.icon || "/placeholder.svg"}
                          alt={skill.name}
                          fill
                          style={{ objectFit: "contain" }}
                        />

                        
                      </div>
                    </div>
                    <h3 className={`text-xl font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                      {skill.name}
                    </h3>
                  </AnimatedCard>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* Language Proficiency - Enhanced Design */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative mb-16"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl" />
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-10 border border-gray-100 shadow-xl">
              <div className="flex items-center justify-center mb-8">
                <Globe className="w-10 h-10 text-blue-500 mr-4" />
                <h3 className="text-4xl font-bold gradient-text">Languages I Speak</h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
                {languages.map((language, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl blur-sm" />
                    <div className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-lg overflow-hidden">
                      {/* Decorative background element */}
                      <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br opacity-10 rounded-full blur-xl" />

                      <div className="flex items-center mb-6">
                        <div className="relative w-16 h-16 mr-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                          <Image
                            src={language.flag || "/placeholder.svg"}
                            alt={`${language.name} flag`}
                            fill
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                        <div>
                          <h4
                            className={`text-2xl font-bold bg-gradient-to-r ${language.color} bg-clip-text text-transparent`}
                          >
                            {language.name}
                          </h4>
                          <p className="text-gray-600 font-medium">{language.level}</p>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-6 text-sm">{language.description}</p>

                      <div className="relative h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          className={`absolute top-0 left-0 h-full bg-gradient-to-r ${language.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${language.percentage}%` }}
                          transition={{ duration: 1.5, delay: 0.3 + index * 0.2 }}
                          viewport={{ once: true }}
                        />
                      </div>

                      <div className="flex justify-between mt-2 text-sm text-gray-500">
                        <span>Beginner</span>
                        <span>Advanced</span>
                        <span>Native</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

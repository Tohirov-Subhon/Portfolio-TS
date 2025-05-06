"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link href="#home">
                <div className="text-2xl font-bold gradient-text mb-4">Portfolio</div>
              </Link>
              <p className="text-gray-600 mb-4">Building modern web experiences with cutting-edge technologies.</p>
            </motion.div>
          </div>

          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#home" className="text-gray-600 hover:text-purple-600 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-gray-600 hover:text-purple-600 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#skills" className="text-gray-600 hover:text-purple-600 transition-colors">
                    Skills
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="text-gray-600 hover:text-purple-600 transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-600 hover:text-purple-600 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                    Web Development
                  </a>
                </li>
                
              </ul>
            </motion.div>
          </div>

          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-600">Dushanbe, Tajikistan</li>
                <li>
                  <a
                    href="mailto:contact@example.com"
                    className="text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    thrvss11@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+11234567890" className="text-gray-600 hover:text-purple-600 transition-colors">
                    +992 903 06 6969
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-600 mb-4 md:mb-0">© {currentYear} Portfolio. All rights reserved.</p>
          <p className="text-gray-600 flex items-center">
            Made with <Heart className="mx-1 text-red-500" size={16} /> using Next.js and Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

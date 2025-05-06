"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { SectionHeading } from "@/shared/ui/section-heading"
import { AnimatedCard } from "@/shared/ui/animated-card"
import { AnimatedIcon } from "@/shared/ui/animated-icon"
import { AnimatedButton } from "@/shared/ui/animated-button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

import axios from "axios";
import Image from "next/image";
import { useState } from "react";

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formState)
    // Reset form
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    // Show success message
    alert("Message sent successfully!")
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "thrvss11@gmail.com",
      link: "mailto:contact@example.com",
      color: "text-blue-500",
      bgColor: "bg-blue-100",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+992 903 06 69 69",
      link: "tel:+11234567890",
      color: "text-emerald-500",
      bgColor: "bg-emerald-100",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Dushanbe, Tajikistan",
      link: "https://maps.google.com/?q=San+Francisco,+CA",
      color: "text-amber-500",
      bgColor: "bg-amber-100",
    },
  ]




  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [subject,setSubject] = useState("")
  const [message,setMessage] = useState("")


  let chatId = '6779189379'
  let tokenBot = '8098466573:AAGArJw5J_POaKIAwmZbZ5qDhaN32RMWpw0'

  const sendToTelegram = async () => {
    
    const text = `
<b>📨 Новое сообщение:</b>  


<b>👤 Имя:</b> ${name}

<b>📧 Email:</b> ${email}

<b>📌 Тема:</b> ${subject}

<b>📝 Сообщение:</b> ${message} `;
   
   
    try {
      await axios.post(`https://api.telegram.org/bot${tokenBot}/sendMessage`,{
        chat_id:chatId,
        text : text,
        parse_mode : 'HTML'
      })
    } catch (error) {
      console.error('Error',error)
      throw error
    }
  }

 

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionHeading title="Get In Touch" subtitle="Have a project in mind? Let's talk about it." gradientType={1} />

        <div className="grid md:grid-cols-3 gap-10 mt-12">
          <div className="md:col-span-1 space-y-8">
            {contactInfo.map((item, index) => (
              <AnimatedCard key={index} className="flex items-start p-8">
                <div className={`mr-6 mt-1 p-4 rounded-full ${item.bgColor}`}>
                  <AnimatedIcon icon={item.icon} className={item.color} size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 gradient-text-3">{item.title}</h3>
                  <a href={item.link} className="text-lg text-gray-600 hover:text-blue-600 transition-colors">
                    {item.value}
                  </a>
                </div>
              </AnimatedCard>
            ))}

            
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <AnimatedCard className="p-10">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label htmlFor="name" className="text-lg">
                      Your Name
                    </Label>
                    <Input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                      className="text-lg py-6"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-lg">
                      Your Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="text-lg py-6"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <Label htmlFor="subject" className="text-lg">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Project Inquiry"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    className="text-lg py-6"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="message" className="text-lg">
                    Description
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="text-lg"
                  />
                </div>
                <AnimatedButton
                  onClick={sendToTelegram}
                  type="submit"
                  className="w-full text-lg py-6 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
                >
                  <Send className="mt-[10px] h-5 w-5" /> 
                  <p className="ml-[30px] mt-[-20px] ">Send Message</p>
                </AnimatedButton>
              </form>
            </AnimatedCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

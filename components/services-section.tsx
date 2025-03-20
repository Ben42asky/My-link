"use client"

import { motion } from "framer-motion"
import { Code, Layout, Database, Bot, Users, Briefcase } from "lucide-react"

const services = [
  {
    icon: <Code className="w-12 h-12 text-primary" />,
    title: "Full-Stack Development",
    description:
      "Building responsive, high-performance websites and applications using React, JavaScript, Node.js, Python, and MySQL.",
  },
  {
    icon: <Bot className="w-12 h-12 text-primary" />,
    title: "AI Integration",
    description:
      "Utilizing AI tools for code assistance, image, text, and sound generation to enhance educational and health content.",
  },
  {
    icon: <Layout className="w-12 h-12 text-primary" />,
    title: "Web Design & Development",
    description: "Designing and building websites for rural businesses, handling sales, UX/UI design, and development.",
  },
  {
    icon: <Briefcase className="w-12 h-12 text-primary" />,
    title: "Project Management",
    description:
      "Leading projects with structured management techniques, clearly communicating progress and managing expectations with stakeholders.",
  },
  {
    icon: <Users className="w-12 h-12 text-primary" />,
    title: "Technical Training",
    description:
      "Conducting workshops on research skills, financial management, and well-being for colleagues, helping upskill teams.",
  },
  {
    icon: <Database className="w-12 h-12 text-primary" />,
    title: "Database Management",
    description:
      "Designing and implementing database solutions using MySQL to support web applications and business operations.",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            I offer a range of services to help you build and grow your online presence. Here's how I can help you
            achieve your goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-foreground/70">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


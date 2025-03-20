"use client"

import { motion } from "framer-motion"
import { Code, Palette, Server, Bot, Users, Briefcase } from "lucide-react"
import Link from "next/link"
import SkillsCarousel from "./skills-carousel"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Self-taught Full-Stack Developer</h3>
            <p className="text-foreground/80 mb-6">
              I'm a self-taught Full-Stack Developer skilled in JavaScript, Python, React, Node.js, and MySQL, with
              expertise in AI integration, web development, and business solutions. I have a proven ability to build
              digital tools, streamline workflows, and drive innovation.
            </p>
            <p className="text-foreground/80 mb-8">
              With experience in sales, project management, and team leadership, I bring a strong work ethic and
              adaptability to every project. I'm passionate about bridging technology and user needs to create impactful
              solutions, I'm committed to continuous learning and growth and passionate about Cybersecurity.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <Code className="text-primary" />
                <span>Full-Stack Development</span>
              </div>
              <div className="flex items-center gap-3">
                <Bot className="text-primary" />
                <span>AI Integration</span>
              </div>
              <div className="flex items-center gap-3">
                <Palette className="text-primary" />
                <span>Web Design</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="text-primary" />
                <span>Team Collaboration</span>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase className="text-primary" />
                <span>Project Management</span>
              </div>
            </div>

            <div className="mt-8">
              <Link href="#resume" className="inline-flex items-center text-primary hover:underline">
                View Full Resume
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SkillsCarousel />
          </motion.div>
        </div>
      </div>
    </section>
  )
}


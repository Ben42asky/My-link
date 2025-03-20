"use client"

import { motion } from "framer-motion"
import { Download, Briefcase, Award, Heart } from "lucide-react"

export default function ResumeSection() {
  return (
    <section id="resume" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Resume</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            A detailed overview of my professional experience and skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="text-primary" size={24} />
                <h3 className="text-2xl font-semibold">Work Experience</h3>
              </div>

              <div className="space-y-8">
                <div className="bg-secondary/10 p-6 rounded-lg">
                  <div className="flex justify-between flex-wrap gap-2 mb-2">
                    <h4 className="text-xl font-semibold">Full Stack Engineer</h4>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">3/2023 - 2/2025</span>
                  </div>
                  <p className="text-primary font-medium mb-4">Fikia Company</p>
                  <ul className="list-disc list-inside space-y-2 text-foreground/80">
                    <li>
                      Designed and developed websites for rural businesses, managing sales, client consultation, UI/UX
                      design, and development using HTML, CSS, JavaScript, and AI tools.
                    </li>
                    <li>
                      Created AI-generated educational and health resources for schools and families, making complex
                      topics engaging and accessible while maintaining cultural relevance.
                    </li>
                    <li>
                      Built and maintained full-stack applications using React, JavaScript, Node.js, Python, and MySQL.
                    </li>
                    <li>
                      Developed and pitched new software tools, leading to the expansion of the company's tech
                      offerings.
                    </li>
                    <li>
                      Integrated AI-powered features via APIs, streamlining workflows and enhancing product
                      capabilities.
                    </li>
                    <li>
                      Educated business owners on the benefits of a website, effectively communicating value and
                      managing expectations.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Award className="text-primary" size={24} />
                <h3 className="text-2xl font-semibold">Technical Skills</h3>
              </div>

              <div className="bg-secondary/10 p-6 rounded-lg">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>
                      <strong>Languages:</strong> Python, JavaScript, HTML, CSS
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>
                      <strong>Frameworks/Libraries:</strong> React
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>
                      <strong>Tools:</strong> Git, VS Code, Figma
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>
                      <strong>Database:</strong> MySQL
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>
                      <strong>AI Tools:</strong> Midjourney, ChatGPT, Perplexity
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>
                      <strong>Office Tools:</strong> Google workspace, Office 365
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Award className="text-primary" size={24} />
                <h3 className="text-2xl font-semibold">Languages</h3>
              </div>

              <div className="bg-secondary/10 p-6 rounded-lg">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>English (Fluent)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Kiswahili (Fluent)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="text-primary" size={24} />
                <h3 className="text-2xl font-semibold">Values & Interests</h3>
              </div>

              <div className="bg-secondary/10 p-6 rounded-lg">
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Values</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Honesty</span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Humility</span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Hard work</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Interests</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Game development</span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Mechanics</span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Fitness</span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Agriculture</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Rural Business Websites",
    category: "Web Development",
    image: "/placeholder.svg?height=600&width=800",
    description:
      "Designed and developed websites for rural businesses, managing sales, client consultation, UI/UX design, and development.",
    technologies: ["HTML", "CSS", "JavaScript", "AI Tools"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 2,
    title: "AI Educational Content",
    category: "AI Development",
    image: "/placeholder.svg?height=600&width=800",
    description:
      "Created AI-generated educational and health resources for schools and families, making complex topics engaging and accessible.",
    technologies: ["AI Tools", "Content Creation", "Educational Design"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 3,
    title: "Full-Stack Applications",
    category: "Web Application",
    image: "/placeholder.svg?height=600&width=800",
    description: "Built and maintained full-stack applications using React, JavaScript, Node.js, Python, and MySQL.",
    technologies: ["React", "Node.js", "Python", "MySQL"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 4,
    title: "AI-Powered Features",
    category: "AI Integration",
    image: "/placeholder.svg?height=600&width=800",
    description: "Integrated AI-powered features via APIs, streamlining workflows and enhancing product capabilities.",
    technologies: ["API Integration", "AI Tools", "Workflow Automation"],
    liveLink: "#",
    githubLink: "#",
  },
]

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project represents my skills and expertise in different areas of
            web development, AI integration, and design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="relative overflow-hidden group h-64">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-primary p-3 rounded-full hover:bg-secondary transition-colors"
                      aria-label="View live project"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-primary p-3 rounded-full hover:bg-secondary transition-colors"
                      aria-label="View GitHub repository"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <span className="text-sm text-primary font-medium">{project.category}</span>
                <h3 className="text-xl font-semibold mt-2 mb-3">{project.title}</h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-secondary/50 text-sm px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
          >
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  )
}


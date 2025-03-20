"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import ProjectDetailModal from "./project-detail-modal"
import type { Project } from "@/types/project"

const projects: Project[] = [
  {
    id: 1,
    title: "Rural Business Websites",
    category: "Web Development",
    image: "/websites.png?height=600&width=800",
    description:
      "Designed and developed websites for rural businesses, managing sales, client consultation, UI/UX design, and development.",
    technologies: ["HTML", "CSS", "JavaScript", "AI Tools"],
    liveLink: "#",
    githubLink: "#",
    fullDescription:
      "This project involved creating custom websites for small businesses in rural areas. I managed the entire process from initial client consultations to final deployment. The websites were designed to be simple yet effective, focusing on clear communication of the businesses' services and contact information. I used AI tools to help generate content and optimize images, making the development process more efficient while maintaining high quality.",
    challenges:
      "The main challenge was working with clients who had limited technical knowledge and internet connectivity. I developed a streamlined consultation process and created educational materials to help clients understand the value of their website. I also built the sites to be extremely lightweight for areas with poor internet connections.",
    completedDate: "March-September 2023",
    role: "Web Developer & Consultant",
    client: "Various Rural Businesses",
  },
  {
    id: 2,
    title: "AI Educational Content",
    category: "AI Development",
    image: "/education.png?height=600&width=800",
    description:
      "Created AI-generated educational resources for schools, making complex topics engaging and accessible.",
    technologies: ["AI Tools", "Content Creation", "Educational Design"],
    liveLink: "#",
    githubLink: "#",
    fullDescription:
      "I worked with a team of seven to develop AI-generated educational lessons that aligned with the curriculum while making them more engaging and accessible for students and teachers. We designed a system that used AI to generate lesson plans based on curriculum requirements, refining prompts to ensure the output was relevant, easy to understand, and culturally appropriate.",
    challenges:
      "One major challenge was when the curriculum portal became inaccessible, making it difficult to retrieve official guidelines. To address this, we adapted our prompt engineering strategies, refining inputs to generate high-quality lessons that still adhered to curriculum standards. Another challenge was balancing automation with cultural sensitivity. We implemented a feedback loop where educators reviewed AI-generated content, ensuring its accuracy, relevance, and appropriateness for diverse student backgrounds. We also optimized the content generation process to efficiently handle large volumes of material.",
    completedDate: "September 2023- February 2024",
    role: "AI Content Developer",
    client: "Educational Institutions",
  },
  {
    id: 3,
    title: "Full-Stack Applications",
    category: "Web Application",
    image: "/react.png?height=600&width=800",
    description: "Built and maintained full-stack applications using React, JavaScript, Node.js, Python, and MySQL.",
    technologies: ["React", "Node.js", "Python", "MySQL"],
    liveLink: "#",
    githubLink: "#",
    fullDescription:
      "I worked alongside my teammate Joshua to develop game applications and tools based on mental health workbooks and worksheets. These games/tools were designed to be integrated into a larger mental education platform called Choosemore. Our focus was on transforming static workbook exercises into interactive, engaging games/tools that could help users practice mental wellness in a fun and accessible way. We used React for the frontend to ensure smooth and responsive interactions, Node.js and Python for backend logic, and MySQL for storing user progress and data. Throughout development, scalability and user experience were top priorities.",
    challenges:
      "The biggest challenge we faced was translating workbook content into engaging game ideas, along with designing clear logic for each activity. To overcome this, we brainstormed extensively with educators and mental health professionals, breaking down workbook exercises into key learning objectives and building game mechanics around them. We also created wireframes and prototypes to test concepts early, adjusting designs based on feedback before moving to full development. This process helped us bridge the gap between static educational material and dynamic, interactive digital experiences.",
    completedDate: "February 2024 - February 2025",
    role: "Full Stack Developer",
    client: "Fikia Company",
  },
]

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<number | null>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

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
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
              onClick={() => handleProjectClick(project)}
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
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-primary p-3 rounded-full hover:bg-secondary transition-colors"
                      aria-label="View GitHub repository"
                      onClick={(e) => e.stopPropagation()}
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

      {/* Project Detail Modal */}
      <ProjectDetailModal project={selectedProject} isOpen={isModalOpen} onClose={closeModal} />
    </section>
  )
}


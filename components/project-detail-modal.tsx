"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import Image from "next/image"
import type { Project } from "../types/project"

interface ProjectDetailModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export default function ProjectDetailModal({ project, isOpen, onClose }: ProjectDetailModalProps) {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
              {/* Header with close button */}
              <div className="flex justify-between items-center p-6 border-b">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="overflow-y-auto max-h-[calc(90vh-8rem)]">
                {/* Project image */}
                <div className="relative h-64 sm:h-80 md:h-96 w-full">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>

                {/* Project details */}
                <div className="p-6">
                  <div className="mb-6">
                    <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-2">
                      {project.category}
                    </span>
                    <p className="text-foreground/80 text-lg">{project.description}</p>
                  </div>

                  {/* Additional details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="bg-secondary/50 text-sm px-3 py-1 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Project Details</h4>
                      <ul className="list-disc list-inside text-foreground/80">
                        <li>Completed: {project.completedDate || "Ongoing"}</li>
                        <li>Role: {project.role || "Full Stack Developer"}</li>
                        <li>Client: {project.client || "Personal Project"}</li>
                      </ul>
                    </div>
                  </div>

                  {/* Full description */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2">Full Description</h4>
                    <p className="text-foreground/80">
                      {project.fullDescription ||
                        `${project.description} This project showcases my skills in ${project.technologies.join(
                          ", ",
                        )}. I was responsible for the entire development process from concept to deployment, ensuring high-quality code and excellent user experience.`}
                    </p>
                  </div>

                  {/* Challenges and solutions */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2">Challenges & Solutions</h4>
                    <p className="text-foreground/80">
                      {project.challenges ||
                        `One of the main challenges in this project was implementing responsive design across all devices while maintaining performance. I solved this by using a mobile-first approach and optimizing assets for different screen sizes.`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}


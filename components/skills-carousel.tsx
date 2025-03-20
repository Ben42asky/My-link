"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

interface Skill {
  name: string
  percentage: number
  color: string
}

const SKILLS: Skill[] = [
  { name: "JavaScript", percentage: 90, color: "#FF6384" },
  { name: "Python", percentage: 85, color: "#36A2EB" },
  { name: "React", percentage: 80, color: "#FFCE56" },
  { name: "Node.js", percentage: 75, color: "#4BC0C0" },
  { name: "HTML/CSS", percentage: 90, color: "#9966FF" },
  { name: "MySQL", percentage: 70, color: "#FF9F40" },
]

export default function SkillsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <div ref={containerRef} className="w-full overflow-hidden bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 20,
            ease: "linear",
          }}
        >
          {/* Double the skills to create a seamless loop */}
          {[...SKILLS, ...SKILLS].map((skill, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 p-4 rounded-lg"
              style={{ backgroundColor: `${skill.color}10` }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium" style={{ color: skill.color }}>
                  {skill.name}
                </span>
                <span className="font-bold" style={{ color: skill.color }}>
                  {skill.percentage}%
                </span>
              </div>
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: skill.color }}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.percentage}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
        {SKILLS.map((skill, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: skill.color }}></div>
            <span className="text-sm">
              {skill.name} ({skill.percentage}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}


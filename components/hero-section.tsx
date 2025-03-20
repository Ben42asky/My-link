"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="text-xl md:text-2xl font-medium text-primary mb-4">Hello, I'm</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Benjamin Otieno</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl md:text-3xl font-medium text-foreground/80 mb-8">
              <span className="typing-text">Full Stack Engineer</span>
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="#contact"
              className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="#projects"
              className="bg-secondary text-foreground px-6 py-3 rounded-md hover:bg-secondary/90 transition-colors"
            >
              View My Work
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <Link href="#about" aria-label="Scroll down">
          <ArrowDown className="text-primary w-8 h-8" />
        </Link>
      </motion.div>
    </section>
  )
}


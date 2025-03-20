"use client"

import { useState } from "react"
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts"
import { motion } from "framer-motion"

interface Skill {
  name: string
  value: number
  color: string
  percent?: number
}

const SKILLS_DATA: Skill[] = [
  { name: "JavaScript", value: 90, color: "#FF6384" }, // Pink
  { name: "Python", value: 85, color: "#36A2EB" }, // Blue
  { name: "React", value: 80, color: "#FFCE56" }, // Yellow
  { name: "Node.js", value: 75, color: "#4BC0C0" }, // Teal
  { name: "HTML/CSS", value: 90, color: "#9966FF" }, // Purple
  { name: "MySQL", value: 70, color: "#FF9F40" }, // Orange
]

// Calculate total and percentages
const totalValue = SKILLS_DATA.reduce((sum, skill) => sum + skill.value, 0)
const NORMALIZED_DATA = SKILLS_DATA.map((skill) => ({
  ...skill,
  percent: Math.round((skill.value / totalValue) * 100),
}))

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: {
  cx: number
  cy: number
  midAngle: number
  innerRadius: number
  outerRadius: number
  percent: number
  index: number
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text
      x={x}
      y={y}
      fill="#fff"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      fontSize={12}
      fontWeight="bold"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

export default function SkillsChart() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index)
  }

  const onPieLeave = () => {
    setActiveIndex(null)
  }

  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <defs>
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#000" floodOpacity="0.3" />
            </filter>
          </defs>
          <Pie
            data={NORMALIZED_DATA}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            dataKey="percent"
            onMouseEnter={onPieEnter}
            onMouseLeave={onPieLeave}
            filter="url(#shadow)"
          >
            {NORMALIZED_DATA.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                strokeWidth={activeIndex === index ? 2 : 0}
                stroke="#fff"
                style={{
                  transform: activeIndex === index ? "scale(1.05)" : "scale(1)",
                  transformOrigin: "center",
                  transition: "transform 0.2s",
                }}
              />
            ))}
          </Pie>
          <Tooltip
            formatter={(value, name) => [`${value}%`, name]}
            contentStyle={{
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              borderRadius: "0.5rem",
              border: "none",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            }}
          />
        </PieChart>
      </ResponsiveContainer>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
        {NORMALIZED_DATA.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-2"
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: skill.color }}></div>
            <span className="text-sm">
              {skill.name} ({skill.percent}%)
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}


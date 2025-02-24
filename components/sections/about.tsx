"use client"

import { motion } from 'framer-motion'
import { Code2, Database, Globe2, Laptop } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const skills = [
  {
    category: 'AI/ML Development',
    icon: Code2,
    items: ['TensorFlow', 'PyTorch', 'Python', 'Machine Learning', 'Generative AI'],
  },
  {
    category: 'Programming Languages',
    icon: Database,
    items: ['Python', 'Java', 'JavaScript', 'SQL', 'Data Structures'],
  },
  {
    category: 'Frameworks & Libraries',
    icon: Globe2,
    items: ['React.js', 'TensorFlow', 'PyTorch', 'Transformers', 'LSTM'],
  },
  {
    category: 'Tools & Technologies',
    icon: Laptop,
    items: ['Git', 'VS Code', 'Figma', 'MySQL', 'Linux'],
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-6 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About Me
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            🚀 Aspiring AI/ML Developer with expertise in Python, Machine Learning, and Data Science. 
            Passionate about building scalable and data-driven solutions using Generative AI and cutting-edge algorithms.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <Icon className="h-8 w-8 mb-2" />
                    <CardTitle>{skill.category}</CardTitle>
                    <CardDescription>Key Technologies</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-none space-y-2">
                      {skill.items.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-muted-foreground"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
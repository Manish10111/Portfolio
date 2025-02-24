"use client"

import { motion } from 'framer-motion'
import { Calendar, GraduationCap, Briefcase } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const experiences = [
  {
    title: 'AI/ML Intern',
    company: 'Google for Developers',
    location: 'Remote',
    period: 'July 2024 - Sep 2024',
    type: 'work',
    description: [
      'Fine-tuned GPT models for enhanced text generation and summarization',
      'Designed APIs for seamless Generative AI integration',
      'Researched and implemented advanced generative models for text-based AI applications',
    ],
  },
  {
    title: 'Generative AI Intern',
    company: 'Google Cloud',
    location: 'Remote',
    period: 'Jan 2024 - Mar 2024',
    type: 'work',
    description: [
      'Developed predictive ML models with optimized accuracy',
      'Conducted data preprocessing and feature engineering',
      'Deployed scalable ML pipelines and worked on NLP tasks',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'HackFest 2024',
    location: 'Remote',
    period: '2024',
    type: 'work',
    description: [
      'Created an interactive React.js dashboard for renewable energy metrics',
      'Improved UI/UX with reusable component libraries for enhanced user experience',
    ],
  },
]

const education = [
  {
    degree: 'Bachelor of Technology',
    institution: 'G.L. Bajaj Institute of Technology',
    specialization: 'Computer Science & Engineering (AI & ML)',
    location: 'Noida, Ghaziabad',
    period: 'Expected May 2025',
    description: [
      'Specializing in Artificial Intelligence & Machine Learning',
      'Relevant Coursework: Data Structures and Algorithms (Python), Probability & Statistics',
      'Additional Studies: DBMS, Linear Algebra, Machine Learning Practice (Python), Linux',
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-6 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Experience & Education
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            My professional journey and academic background
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="flex items-center gap-2 text-2xl font-semibold mb-6">
              <Briefcase className="h-6 w-6" />
              Work Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{exp.title}</CardTitle>
                    <CardDescription>
                      {exp.company} • {exp.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                    <ul className="list-disc list-inside space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="flex items-center gap-2 text-2xl font-semibold mb-6">
              <GraduationCap className="h-6 w-6" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{edu.degree}</CardTitle>
                    <CardDescription>
                      {edu.institution} • {edu.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Calendar className="h-4 w-4" />
                      {edu.period}
                    </div>
                    <p className="text-sm font-medium mb-2">{edu.specialization}</p>
                    <ul className="list-disc list-inside space-y-2">
                      {edu.description.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
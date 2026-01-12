'use client'

import React, { useState, useEffect } from 'react'
import ProjectsPage from './projects/page'

export default function HomePage() {
  const [currentTime, setCurrentTime] = useState<string>('')
  const [activeProjectTitle, setActiveProjectTitle] = useState<string | null>(null)

  /* ---------------- Time Update ---------------- */
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const timeString = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      })
      setCurrentTime(timeString)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  /* ---------------- Projects Data ---------------- */
  const myProjects = [
    {
      id: 'Al-Sheeraz',
      name: 'Al Sheeraz',
      title: 'Premium E-commerce Platform',
      description: 'Complete online shopping platform with advanced features.',
      image: '/projects/al-sheeraz.jpg',
      techStack: ['Next.js 14', 'TypeScript', 'Tailwind', 'MongoDB', 'Stripe'],
      completionDate: 'Dec 2024',
      progress: 100,
    },
    {
      id: 'portfolio-v2',
      name: 'Portfolio V2',
      title: 'Modern Portfolio Experience',
      description: 'My personal portfolio with 3D animations.',
      image: '/projects/portfolio.jpg',
      techStack: ['React', 'Three.js', 'Framer Motion', 'GSAP'],
      completionDate: 'Jan 2025',
      progress: 100,
    },
    {
      id: 'taskflow',
      name: 'Task Flow',
      title: 'AI Task Manager',
      description: 'Smart task management with AI suggestions.',
      image: '/projects/taskflow.jpg',
      techStack: ['Next.js', 'OpenAI', 'Prisma', 'PostgreSQL'],
      completionDate: 'Feb 2025',
      progress: 90,
    },
    {
      id: 'health-monitor',
      name: 'Health Monitor',
      title: 'Health Tracking Dashboard',
      description: 'Real-time health monitoring dashboard.',
      image: '/projects/health.jpg',
      techStack: ['React Native', 'Node.js', 'GraphQL', 'AWS'],
      completionDate: 'Mar 2025',
      progress: 75,
    },
    {
      id: 'finance-dash',
      name: 'Finance Dash',
      title: 'Financial Analytics Platform',
      description: 'Financial analytics and visualization tool.',
      image: '/projects/finance.jpg',
      techStack: ['Vue.js', 'D3.js', 'Express', 'MySQL'],
      completionDate: 'Apr 2025',
      progress: 60,
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-10">
      
      {/* ---------------- Header Section ---------------- */}
      <section className="md:flex justify-between items-center">
        
        {/* Name / Project Title */}
        <div>
          <h1 className="text-5xl md:text-9xl font-semibold tracking-tight transition-all duration-300">
           {activeProjectTitle ? (
    <span className="text-gray-100">
      {activeProjectTitle.split(' ').map((word, i) => (
        <React.Fragment key={i}>
          {word}
          <br />
        </React.Fragment>
      ))}
    </span>
  ) : (
    <>
      ANSAR <br />
      KHAN
    </>
  )}
          </h1>
        </div>

        
        <div className="hidden md:block">
          <p className="text-lg text-gray-400">Web Developer</p>
        </div>

        {/* Time */}
        <div className="text-right mt-6 md:mt-0">
          <div className="text-sm text-gray-400">Local Time</div>
          <div className="text-md md:text-xl font-mono mt-1">
            {currentTime}
          </div>
          <div className="text-xs text-gray-600 mt-1">
            Karachi, Pakistan
          </div>
        </div>
      </section>

      {/* ------------- Projects Section ------------- */}
      <section className="mt-12">
        <ProjectsPage
          mainTitle="MY PROJECTS"
          projects={myProjects}
          onProjectHover={setActiveProjectTitle}
        />
      </section>
    </div>
  )
}

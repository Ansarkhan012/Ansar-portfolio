'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { useSwipeable } from 'react-swipeable';

interface Project {
  id: string;
  name: string;
  slug: string; // URL-friendly identifier
  description: string;
  image: string;
  techStack: string[];
  completionDate: string;
  progress: number;
  title?: string;
}

interface ProjectsPageProps {
  mainTitle?: string;
  projects: Project[];
  onProjectHover?: (title: string | null) => void
}

export default function ProjectsPage({ mainTitle = "My Projects", projects, onProjectHover }: ProjectsPageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  // Mobile swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentIndex < projects.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    },
    onSwipedRight: () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    },
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const defaultProjects: Project[] = [
    {
      id: '1',
      name: 'Al-Sheeraz',
      slug: 'al-sheeraz',
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce platform with payment integration and admin dashboard.',
      image: '/images/pic.webp',
      techStack: ['Next.js', 'TypeScript', 'Tailwind', 'MongoDB', 'Stripe'],
      completionDate: 'Dec 2024',
      progress: 100
    },
    {
      id: '2',
      name: 'Portfolio Pro',
      slug: 'portfolio-pro',
      title: 'Creative Portfolio',
      description: 'Modern portfolio website with animations and dark mode.',
      image: '/projects/portfolio.jpg',
      techStack: ['React', 'Framer Motion', 'SCSS', 'GSAP'],
      completionDate: 'Nov 2024',
      progress: 100
    },
    {
      id: '3',
      name: 'Task Manager',
      slug: 'task-manager',
      title: 'Productivity App',
      description: 'AI-powered task management application with team collaboration.',
      image: '/projects/task-manager.jpg',
      techStack: ['Next.js', 'Prisma', 'PostgreSQL', 'OpenAI'],
      completionDate: 'Jan 2025',
      progress: 85
    },
    {
      id: '4',
      name: 'Health Track',
      slug: 'health-track',
      title: 'Health Monitoring',
      description: 'Health tracking app with real-time analytics and reports.',
      image: '/projects/health.jpg',
      techStack: ['React Native', 'Node.js', 'GraphQL', 'Firebase'],
      completionDate: 'Feb 2025',
      progress: 70
    },
    {
      id: '5',
      name: 'Finance Dashboard',
      slug: 'finance-dashboard',
      title: 'Financial Analytics',
      description: 'Interactive dashboard for financial data visualization.',
      image: '/projects/finance.jpg',
      techStack: ['Vue.js', 'D3.js', 'Express', 'MySQL'],
      completionDate: 'Mar 2025',
      progress: 60
    },
  ];

  const projectList = projects.length > 0 ? projects : defaultProjects;

  return (
    <div className="bg-black">
      {/* Mobile View */}
      <div className="md:hidden" {...swipeHandlers}>
        <div className="relative h-44">
          <div className="absolute inset-0 flex items-center justify-center">
            <Link
              href={`/projects/${projectList[currentIndex].slug}`}
              className="w-full max-w-sm bg-linear-to-br h-60 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="absolute -bottom-5 left-4">
                <p className='p-4 text-white'>{projectList[currentIndex].name}</p>
              </div>
            </Link>
          </div>
          
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {projectList.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-amber-500 w-6' 
                    : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 relative">
          {projectList.map((project, index) => (
            <div 
              key={project.id}
              onMouseEnter={() => {
                setHoveredProject(project.id)
                onProjectHover?.(project.name)
              }}
              onMouseLeave={() => {
                setHoveredProject(null)
                onProjectHover?.(null)
              }}
              className={`transition-all duration-500 ${
                hoveredProject && hoveredProject !== project.id 
                  ? 'blur-sm opacity-70' 
                  : 'blur-0 opacity-100'
              }`}
            >
              <Link
                href={`/projects/${project.slug}`}  // ← Use slug here
                className="group block w-56 h-36 bg-linear-to-b from-gray-900 to-black rounded-2xl overflow-hidden transition-all duration-500 transform hover:-translate-y-4"
              >
                <div className="relative h-28 bg-linear-to-r from-gray-800 to-gray-900">
                  {/* You can add actual images here */}
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-gray-400 text-sm">{project.name}</div>
                  </div>
                  
                  <div className="absolute bottom-2 left-3">
                    <div className="w-8 h-8 rounded-full bg-black/60 flex items-center justify-center border border-amber-500/30">
                      <span className="text-xs font-bold text-amber-400">{index + 1}</span>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-2 right-3">
                    <span className="text-xs px-2 py-1 bg-black/60 rounded border border-gray-700 text-gray-300">
                      {project.techStack[0]}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
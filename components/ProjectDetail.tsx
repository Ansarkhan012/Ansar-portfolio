'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
  id: string;
  name: string;
  title?: string;
  description: string;
  image: string;
  techStack: string[];
  completionDate: string;
  progress: number;
}

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Bar */}
      <div className="p-6 border-b border-gray-800">
        <Link 
          href="/projects" 
          className="text-amber-500 hover:text-amber-400 transition-colors"
        >
          ← Back to Projects
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row">
        {/* Left Side: Project Details */}
        <div className="lg:w-1/2 p-8 lg:p-16 space-y-8">
          <div className="space-y-4">
            <div className="inline-block px-4 py-1 bg-amber-500/20 border border-amber-500/30 rounded-full">
              <span className="text-amber-400 text-sm">Project</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold">
              {project.title || project.name}
            </h1>
            
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
              {project.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-full text-amber-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-gray-800">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-400">Completion</h3>
              <p className="text-2xl font-bold">{project.completionDate}</p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-400">Progress</h3>
              <div className="flex items-center gap-3">
                <div className="w-full bg-gray-800 rounded-full h-2.5">
                  <div 
                    className="bg-amber-500 h-2.5 rounded-full" 
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
                <span className="text-xl font-bold">{project.progress}%</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-400">Status</h3>
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${
                  project.progress === 100 ? 'bg-green-500' : 'bg-amber-500'
                }`}></div>
                <span className="text-xl font-bold">
                  {project.progress === 100 ? 'Completed' : 'In Progress'}
                </span>
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-400">Project ID</h3>
              <p className="text-xl font-mono text-gray-300">{project.id}</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <button className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-black font-bold rounded-full transition-colors duration-300">
              View Live Demo
            </button>
          </div>
        </div>

        {/* Right Side: Project Image */}
        <div className="lg:w-1/2 relative h-96 lg:h-screen">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
          <div className="absolute inset-0">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Overlay Info */}
          <div className="absolute bottom-8 left-8 z-20">
            <h2 className="text-3xl font-bold mb-2">{project.name}</h2>
            <p className="text-gray-300">Interactive showcase</p>
          </div>
        </div>
      </div>

      {/* Related Projects Section */}
      <div className="p-8 lg:p-16 border-t border-gray-800">
        <h2 className="text-3xl font-bold mb-8">More Projects</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* You can map through other projects here */}
          <div className="h-32 bg-gray-900 rounded-xl border border-gray-800"></div>
          <div className="h-32 bg-gray-900 rounded-xl border border-gray-800"></div>
          <div className="h-32 bg-gray-900 rounded-xl border border-gray-800"></div>
          <div className="h-32 bg-gray-900 rounded-xl border border-gray-800"></div>
        </div>
      </div>
    </div>
  );
}
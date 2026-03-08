'use client';

import React, { useState } from 'react';
import {
  Mail,
  Github,
  Linkedin,
  Code,
  Briefcase,
  GraduationCap,
  ChevronDown,
  ExternalLink,
} from 'lucide-react';

export default function Home() {
  const [expandedSkill, setExpandedSkill] = useState<number | null>(null);

  const skills = [
    {
      category: 'Programming Languages & Technologies',
      items: [
        { name: 'JavaScript', level: 'Intermediate' },
        { name: 'React.js', level: 'Intermediate' },
        { name: 'HTML5 & CSS3', level: 'Advanced' },
        { name: 'Node.js', level: 'Intermediate' },
        { name: 'Git & GitHub', level: 'Intermediate' },
      ],
    },
    {
      category: 'Tools & Frameworks',
      items: [
        { name: 'Next.js', level: 'Beginner' },
        { name: 'Tailwind CSS', level: 'Intermediate' },
        { name: 'VS Code', level: 'Advanced' },
        { name: 'Postman', level: 'Intermediate' },
      ],
    },
  ];

  const projects = [
    {
      title: 'Text Summarization using own trained model',
      description:
        'Built a text summarizer application using model traing ',
      tech: ['python','Huggingface','Flask'],
      
    },
    {
      title: 'Hand gestural mouse',
      description:
        'Using Open CV I did a finger  movement mouse',
      tech: ['Python', 'Open-cv'],
      
    },
    {
      title: 'Email spam-ham Agent',
      description:
        'User email spam/ham detection using Agentic Ai',
      tech: ['Python',"langchain"],
      
    },
  ];

  const toggleSkill = (index: number) => {
    setExpandedSkill(expandedSkill === index ? null : index);
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">Portfolio</h1>
            <div className="hidden md:flex gap-8">
              <a
                href="#about"
                className="text-gray-600 hover:text-gray-900 transition"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-gray-600 hover:text-gray-900 transition"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-gray-600 hover:text-gray-900 transition"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-gray-900 transition"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-5xl font-bold text-gray-800 mb-4">
              Hi, I am Debanjan Acharjee,
            </h2>
            <p className="text-xl text-gray-600 mb-2">
              Full Stack Web Developer || Agentic AI 
            </p>
            <p className="text-lg text-gray-500 mb-6">
              Fresher | Ready to Learn & Grow
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Passionate computer science graduate eager to start my career in
              web development. I have hands-on experience building responsive
              websites and web applications using modern technologies like
              React, JavaScript, and Next.js. I&apos;m a quick learner,
              detail-oriented, and excited to contribute to innovative projects
              while continuously improving my skills.
            </p>
            <button
              onClick={scrollToContact}
              className="bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition flex items-center gap-2"
            >
              <Mail size={20} />
              Contact Me
            </button>
          </div>
          <div className="flex-shrink-0">
            <div className="w-72 h-72 bg-yellow-400 rounded-full flex items-center justify-center">
              <svg viewBox="0 0 200 200" className="w-64 h-64">
                <circle cx="100" cy="100" r="80" fill="#1f2937" />
                <circle cx="100" cy="100" r="70" fill="#fbbf24" />
                <ellipse cx="100" cy="80" rx="60" ry="70" fill="#1f2937" />
                <circle cx="85" cy="75" r="3" fill="#fff" />
                <circle cx="115" cy="75" r="3" fill="#fff" />
                <path
                  d="M 80 90 Q 100 100 120 90"
                  stroke="#fff"
                  strokeWidth="2"
                  fill="none"
                />
                <rect x="95" y="120" width="10" height="20" fill="#fff" />
                <rect
                  x="80"
                  y="140"
                  width="40"
                  height="60"
                  fill="#fff"
                  rx="5"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="text-gray-800" size={32} />
            <h3 className="text-3xl font-bold text-gray-800">EDUCATION</h3>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Master of Computer Application
            </h4>
            <p className="text-gray-600 mb-1">Brainware University | 2023 - 2025</p>
            <p className="text-gray-600">CGPA: 8.46/10</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-8">
          <Code className="text-gray-800" size={32} />
          <h3 className="text-3xl font-bold text-gray-800">SKILL SETS</h3>
        </div>

        <div className="space-y-4">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleSkill(index)}
                className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition"
              >
                <span className="font-semibold text-gray-800">
                  {skillGroup.category}
                </span>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-500">
                    {skillGroup.items.length} skills
                  </span>
                  <ChevronDown
                    className={`transform transition-transform ${
                      expandedSkill === index ? 'rotate-180' : ''
                    }`}
                    size={20}
                  />
                </div>
              </button>

              {expandedSkill === index && (
                <div className="px-6 pb-4 space-y-3">
                  {skillGroup.items.map((skill, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center"
                    >
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="text-gray-800" size={32} />
            <h3 className="text-3xl font-bold text-gray-800">PROJECTS</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition group"
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h4>
                  <a
                    
                    className="text-gray-400 hover:text-gray-600 transition"
                    aria-label={`View ${project.title}`}
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-gray-800 mb-8">GET IN TOUCH</h3>
        <div className="flex flex-wrap gap-4">
          <a
          target="_blank"
            href="debanjanacharjee07@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition "
          >
            <Mail size={20} />
            Email Me at (debanjanacharjee07@gmail.com)
          </a>
          <a
            href="https://github.com/devdebanjan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
          >
            <Github size={20} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/debanjan-acharjee-9a4b5b214/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>© 2026 Debanjan;s Portfolio. Built with Next.js & React. </p>
        </div>
      </footer>
    </div>
  );
}

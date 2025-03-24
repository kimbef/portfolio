import { useState } from 'react'
import { motion } from 'framer-motion'

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubLink: string;
  demoLink: string;
}

const projects: Project[] = [
  {
    title: 'Blog Zwei',
    description: 'A modern blog platform built with React, featuring a clean and responsive design, dark mode support, and a seamless user experience. Implements modern web development practices and design principles.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
    tags: ['React', 'TypeScript', 'SCSS', 'Dark Mode', 'Responsive Design'],
    githubLink: 'https://github.com/kimbef/blog-zwei',
    demoLink: 'https://blog-zwei.vercel.app'
  },
  {
    title: 'My Developer Portfolio',
    description: 'A modern portfolio website showcasing my projects and skills. Features a responsive design with custom SCSS styling, dark/light mode toggle, smooth animations, and a mobile-first approach.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    tags: ['React', 'TypeScript', 'SCSS', 'Dark Mode', 'Responsive Design'],
    githubLink: 'https://github.com/kimbef/portfolio',
    demoLink: 'https://portfolio-kimbeff.vercel.app/'
  },
  {
    title: 'E-Commerce Online Store',
    description: 'A comprehensive e-commerce platform built with React and custom SCSS styling. Features include product catalog with filtering, shopping cart functionality, user authentication, and a responsive checkout process.',
    image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    tags: ['React', 'TypeScript', 'SCSS', 'Context API', 'E-commerce'],
    githubLink: 'https://github.com/kimbef/reakt2',
    demoLink: 'https://reakt2.vercel.app/'
  },
  {
    title: 'Weather App',
    description: 'An elegant weather application that provides real-time weather information using the OpenWeather API. Features include current weather conditions, 5-day forecast, location-based weather data, and beautiful weather animations.',
    image: 'https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    tags: ['React', 'TypeScript', 'Weather API', 'SCSS', 'Animations'],
    githubLink: 'https://github.com/kimbef/forecaster',
    demoLink: 'https://v0-weather-app-ui-rose.vercel.app/'
  }
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="projects-container">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="projects-content"
      >
        {/* Header Section */}
        <motion.div
          variants={itemVariants}
          className="projects-header"
        >
          <h2 className="section-title">My Projects</h2>
          <p className="section-description">
            A showcase of my best work, featuring web applications built with modern technologies
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              className="project-card"
            >
              <div className="project-card-image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className={`project-card-image ${hoveredProject === index ? 'hovered' : ''}`}
                />
                <div className={`project-card-overlay ${hoveredProject === index ? 'visible' : ''}`}>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="button button-primary">
                    <i className="fab fa-github"></i> Code
                  </a>
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="button button-outline">
                    <i className="fas fa-external-link-alt"></i> Demo
                  </a>
                </div>
              </div>
              <div className="project-card-content">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-description">{project.description}</p>
                <div className="project-card-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tech-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects; 
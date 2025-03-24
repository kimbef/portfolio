import '@fontsource/playfair-display/400.css';
import '@fontsource/playfair-display/700.css';
import '@fontsource/playfair-display/900.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';
import '@fontsource/press-start-2p/400.css';
import './styles/styles.scss';
import { motion } from 'framer-motion';
import Layout from './components/Layout';
import About from './pages/About';
import Contact from './pages/Contact';

const projects = [
  {
    title: "Blog Zwei",
    description: "A modern blog platform built with React and Material UI, featuring a clean and responsive design, dark mode support, and a seamless user experience.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    technologies: ["React", "TypeScript", "Material UI", "Dark Mode", "Responsive Design"],
    link: "https://blog-zwei.vercel.app"
  },
  {
    title: "My Developer Portfolio",
    description: "A modern portfolio website showcasing my projects and skills. Features a responsive design with Material UI components, dark/light mode toggle, and smooth animations.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    technologies: ["React", "TypeScript", "Material UI", "Dark Mode", "Responsive Design"],
    link: "https://portfolio-kimbeff.vercel.app/"
  },
  {
    title: "E-Commerce Online Store",
    description: "A comprehensive e-commerce platform built with React and Chakra UI. Features include product catalog with filtering, shopping cart functionality, and user authentication.",
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    technologies: ["React", "TypeScript", "Chakra UI", "Context API", "E-commerce"],
    link: "https://reakt2.vercel.app/"
  },
  {
    title: "Weather App",
    description: "An elegant weather application that provides real-time weather information using the OpenWeather API. Features include current weather conditions and beautiful weather animations.",
    image: "https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    technologies: ["React", "TypeScript", "Weather API", "Styled Components", "Animations"],
    link: "https://v0-weather-app-ui-rose.vercel.app/"
  }
];

const App = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-text"
            >
              <h1 className="hero-title">
                <span className="hero-title-part">FRONT</span>
                <span className="hero-title-part">END</span>
                <span className="hero-title-part">DEVELOPER</span>
              </h1>
              <div className="hero-description">
                <span className="hero-description-word">CRAFTING</span>
                <span className="hero-description-word">DIGITAL</span>
                <span className="hero-description-word">EXPERIENCES</span>
              </div>
              <div className="hero-buttons">
                <a href="#projects" className="button button-primary">View Projects</a>
                <a href="#contact" className="button button-outline">Contact Me</a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">My Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="project-card"
              >
                <div className="project-card-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-card-content">
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-description">
                    {project.description}
                  </p>
                  <div className="project-card-technologies">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <a href={project.link} className="button button-primary">View Project</a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </Layout>
  );
};

export default App;

import '@fontsource/playfair-display/400.css';
import '@fontsource/playfair-display/700.css';
import '@fontsource/playfair-display/900.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';
import '@fontsource/press-start-2p/400.css';
import { motion } from 'framer-motion';
import Layout from './components/Layout.tsx';
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';
import Projects from './pages/Projects.tsx';

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
      <section id="projects">
        <Projects />
      </section>

      {/* Contact Section */}
      <Contact />
    </Layout>
  );
};

export default App;

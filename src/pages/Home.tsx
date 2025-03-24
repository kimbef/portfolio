import { motion } from 'framer-motion'
import { useEffect } from 'react';

const Home = () => {
  // Function to scroll to section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Add class to buttons for animation when component mounts
  useEffect(() => {
    // Mark buttons as interactive for cursor effect
    const buttons = document.querySelectorAll('.hero-buttons .button');
    buttons.forEach(button => {
      button.classList.add('interactive-element');
      
      // Add tilt effect on hover
      button.addEventListener('mousemove', (e: Event) => {
        const mouseEvent = e as MouseEvent;
        const rect = button.getBoundingClientRect();
        const x = mouseEvent.clientX - rect.left;
        const y = mouseEvent.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const tiltX = (y - centerY) / 14;
        const tiltY = (centerX - x) / 14;
        
        (button as HTMLElement).style.transform = 
          `translateY(-5px) scale(1.05) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
      });
      
      // Reset on mouse leave
      button.addEventListener('mouseleave', () => {
        (button as HTMLElement).style.transform = '';
      });
    });
    
    return () => {
      // Clean up event listeners
      buttons.forEach(button => {
        button.removeEventListener('mousemove', () => {});
        button.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return (
    <div className="home">
      <section className="hero">
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
                <button 
                  className="button button-primary scroll-animate fade-up"
                  onClick={() => scrollToSection('projects')}
                >
                  View Projects
                </button>
                <button 
                  className="button button-outline scroll-animate fade-up"
                  onClick={() => scrollToSection('contact')}
                  style={{ animationDelay: '0.2s' }}
                >
                  Contact Me
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="skills">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            <div className="card">
              <div className="card-icon">💻</div>
              <h3 className="card-title">Frontend Development</h3>
              <p className="card-description">React, TypeScript, HTML5, CSS3</p>
            </div>
            <div className="card">
              <div className="card-icon">🎨</div>
              <h3 className="card-title">UI/UX Design</h3>
              <p className="card-description">Figma, Adobe XD, Responsive Design</p>
            </div>
            <div className="card">
              <div className="card-icon">🚀</div>
              <h3 className="card-title">Performance Optimization</h3>
              <p className="card-description">Code Splitting, Lazy Loading, Caching</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 
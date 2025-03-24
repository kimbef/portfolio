import { useState, useEffect, useRef } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

// Form feedback component interface
interface FormFeedbackProps {
  message: string;
  type: 'success' | 'error';
  visible: boolean;
  onClose: () => void;
}

// Form feedback component
const FormFeedback = ({ message, type, visible, onClose }: FormFeedbackProps) => {
  useEffect(() => {
    // Auto hide after 5 seconds
    const timer = setTimeout(() => {
      if (visible) {
        onClose();
      }
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [visible, onClose]);
  
  if (!visible) return null;
  
  return (
    <div className={`form-feedback ${type} ${visible ? 'visible' : ''}`}>
      <div className="feedback-icon">
        {type === 'success' ? '✓' : '✕'}
      </div>
      <div className="feedback-message">{message}</div>
      <button className="feedback-close" onClick={onClose}>✕</button>
    </div>
  );
};

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorTrailsRef = useRef<HTMLDivElement[]>([]);
  const trailsCount = 5; // Number of trailing elements
  
  // Form feedback state
  const [formFeedback, setFormFeedback] = useState({
    message: '',
    type: 'success' as 'success' | 'error',
    visible: false
  });

  // Function to show form feedback
  const showFormFeedback = (message: string, type: 'success' | 'error') => {
    setFormFeedback({
      message,
      type,
      visible: true
    });
  };

  // Function to hide form feedback
  const hideFormFeedback = () => {
    setFormFeedback(prev => ({
      ...prev,
      visible: false
    }));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  useEffect(() => {
    // Make form feedback function available globally
    window.showFormFeedback = showFormFeedback;

    // Create cursor trail elements
    for (let i = 0; i < trailsCount; i++) {
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      trail.style.opacity = `${0.6 - (i * 0.1)}`;
      document.body.appendChild(trail);
      cursorTrailsRef.current.push(trail);
    }

    // Handle cursor movements
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      // Immediately update main cursor position
      if (cursorRef.current) {
        cursorRef.current.style.left = `${clientX}px`;
        cursorRef.current.style.top = `${clientY}px`;
      }
      
      // Update trail elements with delay
      cursorTrailsRef.current.forEach((trail, index) => {
        setTimeout(() => {
          if (trail) {
            trail.style.left = `${clientX}px`;
            trail.style.top = `${clientY}px`;
          }
        }, (index + 1) * 40); // Staggered delay for trail effect
      });
    };

    // Handle cursor appearance for hover effects
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Text elements that should trigger the cursor effect
      const isTextElement = 
        target.tagName === 'H1' || 
        target.tagName === 'H2' || 
        target.tagName === 'H3' || 
        target.tagName === 'H4' || 
        target.tagName === 'H5' || 
        target.tagName === 'H6' || 
        target.tagName === 'P' || 
        target.tagName === 'SPAN' ||
        target.tagName === 'LABEL' ||
        target.tagName === 'DIV' ||
        target.tagName === 'LI';
      
      const isInteractive = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.tagName === 'INPUT' || 
        target.tagName === 'TEXTAREA' ||
        target.closest('.card') ||
        target.closest('.project-card') ||
        target.closest('.skill-category') ||
        target.closest('.experience-item') ||
        target.closest('.contact-card') ||
        target.closest('.logo') ||
        target.closest('.indicator-dot') ||
        target.closest('.scroll-to-top') ||
        target.closest('.button') ||
        target.classList.contains('button') ||
        (target.style.cursor && target.style.cursor !== 'auto' && target.style.cursor !== 'default');
      
      if (cursorRef.current) {
        if (isInteractive || isTextElement) {
          cursorRef.current.style.transform = 'translate(-50%, -50%) scale(1.5)';
          cursorRef.current.style.mixBlendMode = 'difference';
          cursorRef.current.style.background = 'var(--title-gradient)'; 
          cursorRef.current.style.backgroundSize = '200% 200%';
          cursorRef.current.style.animation = 'gradient-shift 2s ease infinite';
        } else {
          cursorRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
          cursorRef.current.style.mixBlendMode = 'difference';
          cursorRef.current.style.background = 'rgba(255, 255, 255, 0.75)';
          cursorRef.current.style.backgroundSize = 'initial';
          cursorRef.current.style.animation = 'none';
        }
      }
    };

    // Handle parallax scrolling effects
    const handleParallax = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Update background parallax
      document.body.style.setProperty(
        '--scroll-y', 
        `${scrollPosition / windowHeight}`
      );
      
      // Apply parallax to section backgrounds
      const sections = document.querySelectorAll('.hero, .about, .projects, .contact');
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const parallaxOffset = sectionTop * 0.15;
        
        if (section.classList.contains('hero')) {
          const beforeElement = section as HTMLElement;
          beforeElement.style.setProperty('--parallax-offset', `${parallaxOffset * 0.5}px`);
        } else {
          const beforeElement = section as HTMLElement;
          beforeElement.style.setProperty('--parallax-offset', `${parallaxOffset * 0.3}px`);
        }
      });
      
      // Apply parallax to cards and content
      const parallaxElements = document.querySelectorAll('.card, .project-card, .skill-category, .experience-item, .contact-card');
      parallaxElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementParallax = elementTop * 0.05;
        
        const el = element as HTMLElement;
        el.style.transform = `translateY(${elementParallax}px)`;
      });
    };

    // Handle scroll position for active section and scroll-to-top visibility
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;
      
      // Show scroll-to-top button when scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
      
      // Also apply parallax effects on scroll
      handleParallax();
    };

    // Handle section visibility
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });

    // Initialize parallax layers
    const setupParallaxLayers = () => {
      const mainContent = document.querySelector('.main') as HTMLElement;
      
      if (mainContent) {
        mainContent.classList.add('parallax-container');
        
        // Create parallax background layers
        for (let i = 1; i <= 3; i++) {
          const layer = document.createElement('div');
          layer.className = `parallax-layer parallax-layer-${i}`;
          mainContent.appendChild(layer);
        }
      }
    };

    // Setup scroll-triggered animations
    const setupScrollAnimations = () => {
      // Select all elements with scroll-animate class
      const animatedElements = document.querySelectorAll('.scroll-animate');
      
      // Set up staggered delay based on index
      animatedElements.forEach((element, index) => {
        (element as HTMLElement).style.setProperty('--stagger-index', index.toString());
      });
      
      // Initialize IntersectionObserver for scroll animations
      const animationObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              
              // If this is a skill progress bar, animate it
              const progressElements = entry.target.querySelectorAll('.skill-progress');
              progressElements.forEach(progressElement => {
                // Get the data-progress attribute or fall back to 0
                const progressValue = (progressElement as HTMLElement).dataset.progress || "0";
                (progressElement as HTMLElement).style.setProperty('--progress-value', progressValue);
                progressElement.classList.add('animated');
              });
            }
          });
        },
        {
          threshold: 0.2,
          rootMargin: '0px 0px -50px 0px'
        }
      );
      
      // Observe all scroll-animate elements
      animatedElements.forEach(element => {
        animationObserver.observe(element);
      });
      
      return animationObserver;
    };
    
    // Setup image fade-in effects
    const setupImageFadeEffects = () => {
      const images = document.querySelectorAll('img');
      
      images.forEach(img => {
        if (!img.complete) {
          img.classList.add('image-fade-in');
          
          img.addEventListener('load', () => {
            img.classList.add('loaded');
          });
        }
      });
    };
    
    // Setup 3D tilt effect for project cards
    const setupTiltEffect = () => {
      const tiltCards = document.querySelectorAll('.project-card.tilt');
      
      tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e: Event) => {
          const mouseEvent = e as MouseEvent;
          const cardElement = card as HTMLElement;
          const cardRect = cardElement.getBoundingClientRect();
          
          // Calculate mouse position relative to card
          const cardX = mouseEvent.clientX - cardRect.left;
          const cardY = mouseEvent.clientY - cardRect.top;
          
          // Calculate rotation (adjust multiplier for strength)
          const rotateY = ((cardX / cardRect.width) - 0.5) * 10; // -5 to 5 degrees
          const rotateX = ((cardY / cardRect.height) - 0.5) * -10; // 5 to -5 degrees (inverted)
          
          // Apply the rotation and a subtle scale effect
          cardElement.style.setProperty('--tilt-x', `${rotateX}deg`);
          cardElement.style.setProperty('--tilt-y', `${rotateY}deg`);
          cardElement.style.setProperty('--tilt-scale', '1.03');
        });
        
        // Reset transforms on mouse leave
        card.addEventListener('mouseleave', () => {
          const cardElement = card as HTMLElement;
          cardElement.style.setProperty('--tilt-x', '0deg');
          cardElement.style.setProperty('--tilt-y', '0deg');
          cardElement.style.setProperty('--tilt-scale', '1');
        });
      });
    };
    
    // Toggle expanded project details
    const setupExpandableDetails = () => {
      const expandButtons = document.querySelectorAll('.project-expand-btn');
      
      expandButtons.forEach(button => {
        button.addEventListener('click', (e) => {
          e.preventDefault();
          
          const buttonElement = button as HTMLElement;
          const cardElement = buttonElement.closest('.project-card');
          const detailsElement = cardElement?.querySelector('.project-details-expand');
          
          if (detailsElement) {
            detailsElement.classList.toggle('expanded');
            buttonElement.textContent = detailsElement.classList.contains('expanded') 
              ? 'Show Less' 
              : 'Show More';
          }
        });
      });
    };

    // Add an additional function to apply global cursor styles
    const setupGlobalCursorEffects = () => {
      // Apply cursor style to all interactive elements
      const interactiveSelectors = [
        'a', 'button', 'input', 'textarea', 'select',
        '.card', '.project-card', '.skill-category', 
        '.experience-item', '.contact-card', '.button',
        '.logo', '.indicator-dot', '.scroll-to-top'
      ];
      
      const styleTag = document.createElement('style');
      styleTag.textContent = `
        ${interactiveSelectors.join(', ')} {
          cursor: none !important;
        }
      `;
      document.head.appendChild(styleTag);
      
      // Apply cursor: none to body as fallback
      document.body.style.cursor = 'none';
    };

    // Initialize all animation effects
    const animationObserver = setupScrollAnimations();
    setupImageFadeEffects();
    setupTiltEffect();
    setupExpandableDetails();
    setupGlobalCursorEffects();
    
    // Setup initial parallax effects
    setupParallaxLayers();
    handleParallax();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleParallax);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleParallax);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      observer.disconnect();
      
      // Clean up trail elements
      cursorTrailsRef.current.forEach(trail => {
        if (trail && trail.parentNode) {
          trail.parentNode.removeChild(trail);
        }
      });
      
      // Clean up parallax layers
      const layers = document.querySelectorAll('.parallax-layer');
      layers.forEach(layer => {
        if (layer.parentNode) {
          layer.parentNode.removeChild(layer);
        }
      });
      
      // Clean up animation observers
      if (animationObserver) {
        animationObserver.disconnect();
      }
      
      // Clean up global function - safer approach
      window.showFormFeedback = () => {
        console.warn('Form feedback function is no longer available');
      };
      
      // Clean up custom cursor styles
      const styleElements = document.querySelectorAll('style');
      styleElements.forEach(style => {
        if (style.textContent?.includes('cursor: none')) {
          style.parentNode?.removeChild(style);
        }
      });
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const navLinks = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👤' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'contact', label: 'Contact', icon: '✉️' },
  ];

  return (
    <div className="layout">
      <header className="header">
        <div className="container">
          <div className="logo" onClick={() => scrollToSection('home')}>
            KP
          </div>
          <nav className="nav">
            <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    className={activeSection === link.id ? 'active' : ''}
                    onClick={() => scrollToSection(link.id)}
                  >
                    <span className="nav-icon">{link.icon}</span>
                    <span className="nav-text">{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
            <div className="nav-controls">
              <button
                className="theme-toggle"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {isDarkMode ? '☀️' : '🌙'}
              </button>
              <button
                className="menu-toggle"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? '✕' : '☰'}
              </button>
            </div>
          </nav>
        </div>
      </header>
      <main className="main">{children}</main>
      
      {/* Section indicator */}
      <div className="section-indicator">
        {navLinks.map((link) => (
          <div 
            key={link.id}
            className={`indicator-dot ${activeSection === link.id ? 'active' : ''}`}
            onClick={() => scrollToSection(link.id)}
            title={link.label}
          />
        ))}
      </div>

      {/* Scroll to top button */}
      <button 
        className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
        onClick={scrollToTop}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label="Scroll to top"
      >
        ↑
        {showTooltip && <span className="tooltip">Return to page 1</span>}
      </button>
      
      {/* Custom cursor */}
      <div ref={cursorRef} className="custom-cursor"></div>
      
      {/* Form feedback component */}
      <FormFeedback 
        message={formFeedback.message}
        type={formFeedback.type}
        visible={formFeedback.visible}
        onClose={hideFormFeedback}
      />
    </div>
  );
};

// Add the showFormFeedback method to the global Window interface
declare global {
  interface Window {
    showFormFeedback: (message: string, type: 'success' | 'error') => void;
  }
}

export default Layout;

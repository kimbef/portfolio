import { motion } from 'framer-motion'

const MotionDiv = motion.div

const About = () => {
  const skills = {
    frontend: [
      { name: 'React.js', level: 65 },
      { name: 'TypeScript.ts', level: 50 },
      { name: 'Angular.js', level: 65 },
      { name: 'Material UI', level: 60 },
      { name: 'Tailwind CSS', level: 50 },
    ],
    backend: [
      { name: 'Node.js', level: 60 },
      { name: 'Express.js', level: 60 },
      { name: 'Firebase', level: 90 },
      { name: 'MongoDB', level: 60 },
      { name: 'REST APIs', level: 50 },
    ],
    tools: [
      { name: 'Git', level: 40 },
      { name: 'Docker', level: 50 },
      { name: 'Windows Subsystem for Linux', level: 80 },
      { name: 'Mocha & Chai', level: 75 },
      { name: 'AI prompt engineering', level: 90 },
    ],
  }

  const experiences = [
    {
      period: '2025 jan - 2025 feb (1 month)',
      role: 'Technical Assistant(internship)',
      company: 'CRM Kraft.',
      description: 'Assisted in maintaining the functional stability of the CRM system, provided technical support to the sales team, and assisted with data entry and reporting.',
    },
    {
      period: '2021 - 2024',
      role: 'student(software engineering)',
      company: 'Software University.',
      description: 'Passed the full javascript path from basic to fundamentals, to advanced, to professional modules and worked on various projects and workshops.',
    },
  ]

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
    <div className="about">
      <div className="container">
        <MotionDiv 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="about-content"
        >
        {/* Header Section */}
          <MotionDiv 
            variants={itemVariants}
            className="section-header"
          >
            <h2 className="section-title">About Me</h2>
            <div className="section-divider"></div>
          </MotionDiv>

        {/* About Section */}
          <div className="about-grid">
            <MotionDiv 
              variants={itemVariants}
              className="about-image-container"
            >
              <div className="about-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800"
                  alt="Profile"
                  className="about-image"
                />
              </div>
            </MotionDiv>
            <MotionDiv variants={itemVariants} className="about-text">
              <h3 className="about-name">Hi, I'm Kliment Petrov</h3>
              <p className="about-description">
                I'm a passionate Frontend Developer with 3 years of experience with javascript in university and 1 year of freelance experience with js frameworks.   
                I specialize in React with Vite and Material UI/Chakra UI with TypeScript (prefer for styling).
              </p>
            </MotionDiv>
          </div>

        {/* Skills Section */}
          <MotionDiv variants={itemVariants} className="skills-section">
            <h3 className="section-subtitle">Skills</h3>
            <div className="skills-grid">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="skill-category">
                  <h4 className="skill-category-title">{category}</h4>
                  <div className="skill-list">
                    {skillList.map((skill, index) => (
                      <div key={index} className="skill-item">
                        <div className="skill-info">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-level">{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                          <div 
                            className="skill-progress"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </MotionDiv>

        {/* Experience Section */}
          <MotionDiv variants={itemVariants} className="experience-section">
            <h3 className="section-subtitle">Experience</h3>
            <div className="experience-list">
          {experiences.map((exp, index) => (
                <div key={index} className="experience-item">
                  <div className="experience-period">{exp.period}</div>
                  <div className="experience-content">
                    <h4 className="experience-role">{exp.role}</h4>
                    <div className="experience-company">{exp.company}</div>
                    <p className="experience-description">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </MotionDiv>
        </MotionDiv>
      </div>
    </div>
  )
}

export default About 
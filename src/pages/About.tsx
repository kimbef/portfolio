import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  Stack,
  useTheme,
  LinearProgress,
} from '@mui/material'
import {
  Code as CodeIcon,
  Storage as StorageIcon,
  Build as BuildIcon,
  Work as WorkIcon,
} from '@mui/icons-material'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)
const MotionPaper = motion(Paper)

const About = () => {
  const theme = useTheme()

  const gradientText = {
    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    WebkitTextFillColor: 'transparent'
  }

  const lightModeShadow = theme.palette.mode === 'light' ? '0 8px 32px rgba(0, 0, 0, 0.1)' : 'none'

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
    <Container maxWidth="lg">
      <MotionBox 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        sx={{ py: { xs: 4, md: 8 } }}
      >
        {/* Header Section */}
        <MotionBox 
          variants={itemVariants}
          sx={{ 
            textAlign: 'center', 
            mb: 12,
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: -20,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '100px',
              height: '4px',
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              borderRadius: '2px',
            }
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              fontFamily: '"Playfair Display", serif',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              mb: 3,
              position: 'relative',
              ...gradientText,
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: '-5%',
                width: '110%',
                height: '100%',
                backgroundColor: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.03)' : 'rgba(255, 215, 0, 0.1)',
                borderRadius: '8px',
                zIndex: -1,
              }
            }}
          >
            About Me
          </Typography>
        </MotionBox>

        {/* About Section */}
        <Grid container spacing={6} sx={{ mb: 12 }}>
          <Grid item xs={12} md={6}>
            <MotionBox 
              variants={itemVariants}
              sx={{ position: 'relative' }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: '10%',
                  left: '10%',
                  width: '80%',
                  height: '80%',
                  background: 'rgba(255, 215, 0, 0.1)',
                  filter: 'blur(40px)',
                  borderRadius: '50%',
                  zIndex: 0,
                }}
              />
              <MotionPaper
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  aspectRatio: '4/3',
                  bgcolor: theme.palette.mode === 'dark' ? 'grey.900' : 'white',
                  border: '1px solid',
                  borderColor: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 215, 0, 0.2)',
                  borderRadius: '20px',
                  boxShadow: lightModeShadow,
                }}
              >
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800"
                  alt="Profile"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                />
              </MotionPaper>
            </MotionBox>
          </Grid>
          <Grid item xs={12} md={6}>
            <MotionBox variants={itemVariants}>
              <Stack spacing={3}>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontWeight: 'bold',
                    fontFamily: '"Playfair Display", serif',
                    color: theme.palette.mode === 'dark' ? 'white' : '#1a1a1a'
                  }}
                >
                  Hi, I'm Kliment Petrov
                </Typography>
                <Typography 
                  sx={{ 
                    lineHeight: 1.8,
                    fontFamily: '"Inter", sans-serif',
                    color: theme.palette.mode === 'dark' ? 'white' : '#1a1a1a'
                  }}
                >
                  I'm a passionate Frontend Developer with 3 years of experience with javascript in university and 1 year of freelance experience with js frameworks.   
                  I specialize in React with Vite and Material UI/Chakra UI with TypeScript (prefer for styling).
                </Typography>
                
              </Stack>
            </MotionBox>
          </Grid>
        </Grid>

        {/* Skills Section */}
        <MotionBox variants={itemVariants}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 'bold',
              mb: 6,
              textAlign: 'center',
              position: 'relative',
              fontFamily: '"Playfair Display", serif',
              ...gradientText,
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: '25%',
                width: '50%',
                height: '100%',
                backgroundColor: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.03)' : 'rgba(255, 215, 0, 0.1)',
                borderRadius: '8px',
                zIndex: -1,
              }
            }}
          >
            Skills & Expertise
          </Typography>
          <Grid container spacing={4} sx={{ mb: 12 }}>
            <Grid item xs={12} md={4}>
              <MotionPaper
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                sx={{
                  p: 4,
                  bgcolor: theme.palette.mode === 'dark' ? 'grey.900' : 'white',
                  border: '1px solid',
                  borderColor: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 215, 0, 0.2)',
                  borderRadius: '20px',
                  height: '100%',
                  boxShadow: lightModeShadow,
                }}
              >
                <Box sx={{ color: '#FFD700', mb: 2 }}>
                  <CodeIcon fontSize="large" />
                </Box>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    mb: 3,
                    fontFamily: '"Playfair Display", serif',
                    ...gradientText
                  }}
                >
                  Frontend
                </Typography>
                <Stack spacing={2}>
                  {skills.frontend.map((skill) => (
                    <Box key={skill.name}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography sx={{ color: theme.palette.mode === 'dark' ? 'white' : '#1a1a1a' }}>{skill.name}</Typography>
                        <Typography sx={{ color: theme.palette.mode === 'dark' ? 'white' : '#1a1a1a' }}>{skill.level}%</Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={skill.level}
                        sx={{
                          bgcolor: 'grey.800',
                          '& .MuiLinearProgress-bar': {
                            background: '#FFD700',
                          },
                        }}
                      />
                    </Box>
                  ))}
                </Stack>
              </MotionPaper>
            </Grid>
            <Grid item xs={12} md={4}>
              <MotionPaper
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                sx={{
                  p: 4,
                  bgcolor: theme.palette.mode === 'dark' ? 'grey.900' : 'white',
                  border: '1px solid',
                  borderColor: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 215, 0, 0.2)',
                  borderRadius: '20px',
                  height: '100%',
                  boxShadow: lightModeShadow,
                }}
              >
                <Box sx={{ color: '#FFD700', mb: 2 }}>
                  <StorageIcon fontSize="large" />
                </Box>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    mb: 3,
                    fontFamily: '"Playfair Display", serif',
                    ...gradientText
                  }}
                >
                  Backend
                </Typography>
                <Stack spacing={2}>
                  {skills.backend.map((skill) => (
                    <Box key={skill.name}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography sx={{ color: theme.palette.mode === 'dark' ? 'white' : '#1a1a1a' }}>{skill.name}</Typography>
                        <Typography sx={{ color: theme.palette.mode === 'dark' ? 'white' : '#1a1a1a' }}>{skill.level}%</Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={skill.level}
                        sx={{
                          bgcolor: 'grey.800',
                          '& .MuiLinearProgress-bar': {
                            background: '#FFD700',
                          },
                        }}
                      />
                    </Box>
                  ))}
                </Stack>
              </MotionPaper>
            </Grid>
            <Grid item xs={12} md={4}>
              <MotionPaper
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                sx={{
                  p: 4,
                  bgcolor: theme.palette.mode === 'dark' ? 'grey.900' : 'white',
                  border: '1px solid',
                  borderColor: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 215, 0, 0.2)',
                  borderRadius: '20px',
                  height: '100%',
                  boxShadow: lightModeShadow,
                }}
              >
                <Box sx={{ color: '#FFD700', mb: 2 }}>
                  <BuildIcon fontSize="large" />
                </Box>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    mb: 3,
                    fontFamily: '"Playfair Display", serif',
                    ...gradientText
                  }}
                >
                  Tools & Others
                </Typography>
                <Stack spacing={2}>
                  {skills.tools.map((skill) => (
                    <Box key={skill.name}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography sx={{ color: theme.palette.mode === 'dark' ? 'white' : '#1a1a1a' }}>{skill.name}</Typography>
                        <Typography sx={{ color: theme.palette.mode === 'dark' ? 'white' : '#1a1a1a' }}>{skill.level}%</Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={skill.level}
                        sx={{
                          bgcolor: 'grey.800',
                          '& .MuiLinearProgress-bar': {
                            background: '#FFD700',
                          },
                        }}
                      />
                    </Box>
                  ))}
                </Stack>
              </MotionPaper>
            </Grid>
          </Grid>
        </MotionBox>

        {/* Experience Section */}
        <MotionBox variants={itemVariants}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 'bold',
              mb: 6,
              textAlign: 'center',
              position: 'relative',
              fontFamily: '"Playfair Display", serif',
              ...gradientText,
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: '25%',
                width: '50%',
                height: '100%',
                backgroundColor: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.03)' : 'rgba(255, 215, 0, 0.1)',
                borderRadius: '8px',
                zIndex: -1,
              }
            }}
          >
            Experience
          </Typography>
          <Stack spacing={3}>
            {experiences.map((exp, index) => (
              <MotionPaper
                key={index}
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
                sx={{
                  p: 4,
                  bgcolor: theme.palette.mode === 'dark' ? 'grey.900' : 'white',
                  border: '1px solid',
                  borderColor: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 215, 0, 0.2)',
                  borderRadius: '20px',
                  position: 'relative',
                  boxShadow: lightModeShadow,
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    left: -2,
                    top: 0,
                    height: '100%',
                    width: '4px',
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    borderRadius: '2px',
                  }
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} md={3}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                      <WorkIcon sx={{ ...gradientText }} />
                      <Typography sx={{ ...gradientText, fontWeight: 'bold' }}>
                        {exp.period}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        mb: 1,
                        fontFamily: '"Playfair Display", serif',
                        ...gradientText
                      }}
                    >
                      {exp.role}
                    </Typography>
                    <Typography 
                      sx={{ 
                        mb: 2,
                        fontFamily: '"Inter", sans-serif',
                        color: theme.palette.mode === 'dark' ? 'white' : '#1a1a1a'
                      }}
                    >
                      {exp.company}
                    </Typography>
                    <Typography 
                      sx={{ 
                        fontFamily: '"Inter", sans-serif',
                        color: theme.palette.mode === 'dark' ? 'white' : '#1a1a1a'
                      }}
                    >
                      {exp.description}
                    </Typography>
                  </Grid>
                </Grid>
              </MotionPaper>
            ))}
          </Stack>
        </MotionBox>
      </MotionBox>
    </Container>
  )
}

export default About 
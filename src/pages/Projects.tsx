import { useState } from 'react'
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Stack,
  useTheme,
} from '@mui/material'
import {
  GitHub as GitHubIcon,
  Launch as LaunchIcon,
} from '@mui/icons-material'
import { motion } from 'framer-motion'

const MotionCard = motion(Card)
const MotionBox = motion(Box)

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
    description: 'A modern blog platform built with React and Material UI, featuring a clean and responsive design, dark mode support, and a seamless user experience. Implements modern web development practices and design principles.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
    tags: ['React', 'TypeScript', 'Material UI', 'Dark Mode', 'Responsive Design'],
    githubLink: 'https://github.com/kimbef/blog-zwei',
    demoLink: 'https://blog-zwei.vercel.app'
  },
  {
    title: 'My Developer Portfolio',
    description: 'A modern portfolio website showcasing my projects and skills. Features a responsive design with Material UI components, dark/light mode toggle, smooth animations, and a mobile-first approach. Built with React and TypeScript for optimal performance.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    tags: ['React', 'TypeScript', 'Material UI', 'Dark Mode', 'Responsive Design'],
    githubLink: 'https://github.com/kimbef/portfolio',
    demoLink: 'https://portfolio-kimbeff.vercel.app/'
  },
  {
    title: 'E-Commerce Online Store',
    description: 'A comprehensive e-commerce platform built with React and Chakra UI. Features include product catalog with filtering, shopping cart functionality, user authentication, and a responsive checkout process. Implements Context API for state management and Chakra UI for a modern interface.',
    image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    tags: ['React', 'TypeScript', 'Chakra UI', 'Context API', 'E-commerce'],
    githubLink: 'https://github.com/kimbef/reakt2',
    demoLink: 'https://reakt2.vercel.app/'
  },
  {
    title: 'Weather App',
    description: 'An elegant weather application that provides real-time weather information using the OpenWeather API. Features include current weather conditions, 5-day forecast, location-based weather data, and beautiful weather animations. Built with React and styled-components for a polished UI.',
    image: 'https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    tags: ['React', 'TypeScript', 'Weather API', 'Styled Components', 'Animations'],
    githubLink: 'https://github.com/kimbef/forecaster',
    demoLink: 'https://v0-weather-app-ui-rose.vercel.app/'
  }
];

const Projects = () => {
  const theme = useTheme()
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
              background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
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
              color: '#FFD700',
              fontFamily: '"Playfair Display", serif',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              mb: 3,
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: '-5%',
                width: '110%',
                height: '100%',
                backgroundColor: 'rgba(255, 215, 0, 0.1)',
                borderRadius: '8px',
                zIndex: -1,
              }
            }}
          >
            My Projects
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: theme.palette.mode === 'dark' ? 'grey.400' : 'black',
              maxWidth: 800,
              mx: 'auto',
              fontFamily: '"Inter", sans-serif',
              lineHeight: 1.8,
            }}
          >
            A showcase of my best work, featuring web applications built with modern technologies
          </Typography>
        </MotionBox>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <MotionCard
                variants={itemVariants}
                onHoverStart={() => setHoveredProject(index)}
                onHoverEnd={() => setHoveredProject(null)}
                sx={{
                  height: '100%',
                  bgcolor: theme.palette.mode === 'dark' ? 'rgba(18, 18, 18, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid',
                  borderColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  boxShadow: theme.palette.mode === 'dark' 
                    ? '0 8px 32px rgba(0, 0, 0, 0.3)'
                    : '0 8px 32px rgba(0, 0, 0, 0.1)',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    borderColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                    boxShadow: theme.palette.mode === 'dark' 
                      ? '0 20px 40px rgba(0, 0, 0, 0.4)'
                      : '0 20px 40px rgba(0, 0, 0, 0.15)',
                  },
                }}
              >
                <Box sx={{ position: 'relative', overflow: 'hidden', pt: '56.25%' }}>
                  <CardMedia
                    component="img"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      transition: 'transform 0.3s ease',
                      transform: hoveredProject === index ? 'scale(1.1)' : 'scale(1)',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `linear-gradient(to bottom, transparent, ${theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.6)'})`,
                      opacity: hoveredProject === index ? 1 : 0,
                      transition: 'opacity 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <Button
                      component="a"
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="contained"
                      startIcon={<GitHubIcon />}
                      sx={{
                        bgcolor: 'white',
                        color: 'black',
                        '&:hover': {
                          bgcolor: 'grey.100',
                        },
                      }}
                    >
                      Code
                    </Button>
                    <Button
                      component="a"
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="contained"
                      startIcon={<LaunchIcon />}
                      sx={{
                        bgcolor: theme.palette.primary.main,
                        color: 'white',
                        '&:hover': {
                          bgcolor: theme.palette.primary.dark,
                        },
                      }}
                    >
                      Live Demo
                    </Button>
                  </Box>
                </Box>
                <CardContent sx={{ p: 4 }}>
                  <Stack spacing={2}>
                    <Box>
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{
                          fontFamily: '"Inter", sans-serif',
                          fontWeight: 600,
                          color: theme.palette.mode === 'dark' ? 'grey.100' : 'black',
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: '"Inter", sans-serif',
                          color: theme.palette.mode === 'dark' ? 'grey.400' : 'grey.700',
                          mb: 2,
                        }}
                      >
                        {project.description}
                      </Typography>
                    </Box>
                    <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                      {project.tags.map((tag, tagIndex) => (
                        <Chip
                          key={tagIndex}
                          label={tag}
                          size="small"
                          sx={{
                            bgcolor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                            color: theme.palette.mode === 'dark' ? 'grey.300' : 'black',
                            '&:hover': {
                              bgcolor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                            },
                          }}
                        />
                      ))}
                    </Stack>
                  </Stack>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>
      </MotionBox>
    </Container>
  )
}

export default Projects 
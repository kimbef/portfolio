import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
  Stack,
  useTheme,
} from '@mui/material'
import {
  GitHub as GitHubIcon,
  Launch as LaunchIcon,
} from '@mui/icons-material'

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

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: { xs: 4, md: 8 } }}>
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              color: theme.palette.mode === 'dark' ? 'grey.100' : 'black',
              '& .highlight': {
                background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                backgroundClip: 'text',
                color: 'transparent',
                display: 'inline-block',
              }
            }}
          >
            My <span className="highlight">Projects</span>
          </Typography>
          <Typography variant="h5" sx={{ color: theme.palette.mode === 'dark' ? 'grey.400' : 'black', maxWidth: 800, mx: 'auto', mb: 4 }}>
            A showcase of my best work, featuring web applications built with modern technologies
          </Typography>
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  bgcolor: theme.palette.mode === 'dark' ? 'grey.900' : 'white',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    borderColor: theme.palette.primary.main,
                    '& .project-image': {
                      transform: 'scale(1.1)',
                    },
                  },
                }}
              >
                <Box sx={{ position: 'relative', overflow: 'hidden', pt: '56.25%' }}>
                  <CardMedia
                    component="img"
                    image={project.image}
                    alt={project.title}
                    className="project-image"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      transition: 'transform 0.3s ease',
                    }}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="h2" gutterBottom sx={{ color: theme.palette.mode === 'dark' ? 'grey.100' : 'black' }}>
                    {project.title}
                  </Typography>
                  <Typography sx={{ color: theme.palette.mode === 'dark' ? 'grey.400' : 'black', mb: 2 }}>
                    {project.description}
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                    {project.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        sx={{
                          bgcolor: 'rgba(37, 99, 235, 0.1)',
                          color: theme.palette.primary.main,
                          borderRadius: '16px',
                          '&:hover': {
                            bgcolor: 'rgba(37, 99, 235, 0.2)',
                          },
                        }}
                      />
                    ))}
                  </Stack>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<GitHubIcon />}
                    sx={{
                      color: theme.palette.mode === 'dark' ? 'grey.300' : 'black',
                      '&:hover': {
                        color: theme.palette.primary.main,
                      },
                    }}
                  >
                    Code
                  </Button>
                  <Button
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<LaunchIcon />}
                    sx={{
                      color: theme.palette.mode === 'dark' ? 'grey.300' : 'black',
                      '&:hover': {
                        color: theme.palette.primary.main,
                      },
                    }}
                  >
                    Live Demo
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Projects; 
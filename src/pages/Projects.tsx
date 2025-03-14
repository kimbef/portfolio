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
    title: 'Modern Portfolio',
    description: 'A responsive portfolio website built with React, TypeScript, and Material UI. Features smooth animations, dark mode, and modern design principles.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800',
    tags: ['React', 'TypeScript', 'Material UI', 'Framer Motion'],
    githubLink: 'https://github.com/yourusername/portfolio',
    demoLink: 'https://your-portfolio.com'
  },
  {
    title: 'E-Commerce Dashboard',
    description: 'An admin dashboard for managing products, orders, and customers. Built with React and includes data visualization, real-time updates, and responsive design.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800',
    tags: ['React', 'TypeScript', 'Redux', 'Chart.js', 'Material UI'],
    githubLink: 'https://github.com/yourusername/dashboard',
    demoLink: 'https://your-dashboard.com'
  },
  {
    title: 'Weather App',
    description: 'A beautiful weather application with real-time updates, animations, and detailed forecasts. Features location-based weather data and interactive maps.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800',
    tags: ['React', 'TypeScript', 'API Integration', 'Styled Components'],
    githubLink: 'https://github.com/yourusername/weather-app',
    demoLink: 'https://your-weather-app.com'
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
              color: 'grey.100',
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
          <Typography variant="h5" sx={{ color: 'grey.400', maxWidth: 800, mx: 'auto', mb: 4 }}>
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
                  bgcolor: 'grey.900',
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
                  <Typography variant="h5" component="h2" gutterBottom sx={{ color: 'grey.100' }}>
                    {project.title}
                  </Typography>
                  <Typography sx={{ color: 'grey.400', mb: 2 }}>
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
                      color: 'grey.300',
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
                      color: 'grey.300',
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
import { Link } from 'react-router-dom'
import {
  Box,
  Button,
  Typography,
  useTheme,
  Stack,
  IconButton,
  Card,
  CardContent,
  Grid,
} from '@mui/material'
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Code as CodeIcon,
  LaptopMac as LaptopIcon,
  PhoneIphone as PhoneIcon,
  ArrowForward as ArrowForwardIcon
} from '@mui/icons-material'

const Home = () => {
  const theme = useTheme()
  
  const skills = [
    { icon: <CodeIcon fontSize="large" />, title: 'Frontend Development', desc: 'Building responsive web applications with React and TypeScript' },
    { icon: <LaptopIcon fontSize="large" />, title: 'UI/UX Design', desc: 'Creating intuitive and beautiful user interfaces' },
    { icon: <PhoneIcon fontSize="large" />, title: 'Mobile-First', desc: 'Ensuring great experience across all devices' },
  ]

  return (
    <Box sx={{ position: 'relative' }}>
      {/* Hero Section */}
      <Box sx={{ pt: { xs: 2, md: 4 }, mb: 8 }}>
        <Box sx={{ 
          maxWidth: 800,
          mx: 'auto',
          '& > *': {
            opacity: 1,
            animation: 'fadeIn 0.5s ease-out forwards',
          },
          '& > *:nth-of-type(1)': { animationDelay: '0.2s' },
          '& > *:nth-of-type(2)': { animationDelay: '0.4s' },
          '& > *:nth-of-type(3)': { animationDelay: '0.6s' },
        }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ 
            fontWeight: 'bold',
            color: theme.palette.mode === 'dark' ? 'white' : 'black',
            opacity: 1,
            '& .highlight': {
              background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              backgroundClip: 'text',
              color: 'transparent',
              display: 'inline-block',
            },
          }}>
            Hi, I'm <span className="highlight">Kliment Petrov</span>
          </Typography>
          
          <Typography variant="h5" sx={{ 
            color: theme.palette.mode === 'dark' ? 'white' : 'black',
            mb: 4 
          }}>
            A passionate Frontend Developer crafting beautiful web experiences with modern technologies.
            Specializing in React and TypeScript to build responsive, user-friendly applications.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button
              component={Link}
              to="/projects"
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                px: 4,
                py: 1.5,
                color: '#fff',
                '&:hover': {
                  background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              View My Work
            </Button>
            <Button
              component={Link}
              to="/contact"
              variant="outlined"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                borderWidth: 2,
                color: theme.palette.mode === 'dark' ? 'grey.300' : 'black',
                borderColor: theme.palette.mode === 'dark' ? 'grey.300' : 'black',
                '&:hover': {
                  borderWidth: 2,
                  transform: 'translateY(-2px)',
                  borderColor: theme.palette.primary.main,
                  color: theme.palette.primary.dark,
                },
                transition: 'all 0.3s ease',
              }}
            >
              Contact Me
            </Button>
          </Stack>
        </Box>
      </Box>

      {/* Fancy Text Section */}
      <Box sx={{ 
        py: 8,
        textAlign: 'center',
        background: 'rgba(37, 99, 235, 0.1)',
        position: 'relative',
      }}>
        <Typography 
          variant="h1" 
          sx={{
            fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
            fontWeight: 900,
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            backgroundClip: 'text',
            color: 'transparent',
            textTransform: 'uppercase',
            mb: 2,
          }}
        >
          Crafting Digital
        </Typography>
        <Typography 
          variant="h1" 
          sx={{
            fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
            fontWeight: 900,
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
            backgroundClip: 'text',
            color: 'transparent',
            textTransform: 'uppercase',
          }}
        >
          Experiences
        </Typography>
      </Box>

      {/* Skills Section */}
      <Box sx={{ pt: 6 }}>
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          sx={{
            position: 'relative',
            mb: 6,
            pb: 2,
            color: theme.palette.mode === 'dark' ? 'grey.100' : 'black',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '60px',
              height: '4px',
              background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            },
          }}
        >
          What I Do
        </Typography>

        <Grid container spacing={4}>
          {skills.map((skill, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  transition: 'all 0.3s ease',
                  bgcolor: theme.palette.mode === 'dark' ? 'grey.900' : 'white',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 12px 24px -10px ${theme.palette.primary.main}33`,
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      color: theme.palette.primary.main,
                      mb: 2,
                      transform: 'scale(1.2)',
                      transformOrigin: 'left',
                    }}
                  >
                    {skill.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom sx={{
                    color: theme.palette.mode === 'dark' ? 'grey.100' : 'black',
                  }}>
                    {skill.title}
                  </Typography>
                  <Typography variant="body1" sx={{
                    color: theme.palette.mode === 'dark' ? 'grey.400' : 'black',
                  }}>
                    {skill.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Social Links */}
      <Box sx={{ pt: 4, textAlign: 'center' }}>
        <Stack direction="row" spacing={3} justifyContent="center">
          <IconButton
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              p: 2,
              color: theme.palette.mode === 'dark' ? 'grey.300' : 'black',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                bgcolor: 'grey.800',
                color: theme.palette.primary.main,
              },
            }}
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
          <IconButton
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              p: 2,
              color: theme.palette.mode === 'dark' ? 'grey.300' : 'black',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                bgcolor: 'grey.800',
                color: theme.palette.primary.main,
              },
            }}
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  )
}

export default Home 
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
  Grid
} from '@mui/material'
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Code as CodeIcon,
  LaptopMac as LaptopIcon,
  PhoneIphone as PhoneIcon,
  ArrowForward as ArrowForwardIcon
} from '@mui/icons-material'
import { motion } from 'framer-motion'

// Wrap MUI components with motion
const MotionBox = motion(Box)
const MotionCard = motion(Card)

const Home = () => {
  const theme = useTheme()
  
  const skills = [
    { icon: <CodeIcon fontSize="large" />, title: 'Frontend Development', desc: 'Building responsive web applications with React and TypeScript' },
    { icon: <LaptopIcon fontSize="large" />, title: 'UI/UX Design', desc: 'Creating intuitive and beautiful user interfaces' },
    { icon: <PhoneIcon fontSize="large" />, title: 'Mobile-First', desc: 'Ensuring great experience across all devices' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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
    <MotionBox 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      sx={{ position: 'relative' }}
    >
      {/* Hero Section */}
      <Box sx={{ pt: { xs: 4, md: 6 }, mb: 12 }}>
        <Box sx={{ 
          maxWidth: 800,
          mx: 'auto',
          px: 3,
        }}>
          <motion.div variants={itemVariants}>
            <Typography 
              component="h1"
              sx={{ 
                fontWeight: 800,
                fontSize: { xs: '2rem', md: '3rem' },
                letterSpacing: '-0.02em',
                color: theme.palette.mode === 'dark' ? 'white' : 'black',
                mb: 3,
                fontFamily: '"Press Start 2P", cursive',
                '& .highlight': {
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  backgroundClip: 'text',
                  color: 'transparent',
                  display: 'inline-block',
                  position: 'relative',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: '100%',
                    height: '2px',
                    bottom: 0,
                    left: 0,
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    transform: 'scaleX(0)',
                    transition: 'transform 0.3s ease',
                  }
                },
                '&:hover .highlight::after': {
                  transform: 'scaleX(1)',
                }
              }}
            >
              Hi, I'm <Link to="/about" className="highlight">Kliment Petrov</Link>
            </Typography>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Typography 
              component="h2"
              sx={{ 
                color: theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                mb: 6,
                fontFamily: '"Inter", sans-serif',
                lineHeight: 1.8,
                fontSize: { xs: '1.1rem', md: '1.25rem' },
              }}
            >
              A passionate Frontend Developer crafting beautiful web experiences with modern technologies.
              Specializing in React and TypeScript to build responsive, user-friendly applications.
            </Typography>
          </motion.div>

          <Stack 
            component={motion.div}
            variants={itemVariants}
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={3}
          >
            <Button
              component={Link}
              to="/projects"
              variant="outlined"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                px: 6,
                py: 2,
                borderWidth: 2,
                borderRadius: '30px',
                fontFamily: '"Inter", sans-serif',
                fontWeight: 600,
                letterSpacing: '0.5px',
                color: theme.palette.mode === 'dark' ? 'grey.300' : 'black',
                borderColor: theme.palette.mode === 'dark' ? 'grey.300' : 'black',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  zIndex: -1,
                },
                '&:hover': {
                  borderWidth: 2,
                  borderColor: 'transparent',
                  color: '#fff',
                  '&::before': {
                    opacity: 1,
                  },
                  '& .MuiButton-endIcon': {
                    transform: 'translateX(4px)',
                    color: '#fff',
                  },
                },
                '& .MuiButton-endIcon': {
                  transition: 'transform 0.3s ease, color 0.3s ease',
                },
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
                px: 6,
                py: 2,
                borderWidth: 2,
                borderRadius: '30px',
                fontFamily: '"Inter", sans-serif',
                fontWeight: 600,
                letterSpacing: '0.5px',
                color: theme.palette.mode === 'dark' ? 'grey.300' : 'black',
                borderColor: theme.palette.mode === 'dark' ? 'grey.300' : 'black',
                '&:hover': {
                  borderWidth: 2,
                  borderColor: theme.palette.primary.main,
                  color: theme.palette.primary.main,
                },
              }}
            >
              Contact Me
            </Button>
          </Stack>
        </Box>
      </Box>

      {/* Fancy Text Section */}
      <MotionBox 
        variants={itemVariants}
        sx={{ 
          py: 12,
          textAlign: 'center',
          background: theme.palette.mode === 'dark' 
            ? 'linear-gradient(180deg, rgba(255, 215, 0, 0.1) 0%, rgba(255, 215, 0, 0) 100%)'
            : 'linear-gradient(180deg, rgba(255, 215, 0, 0.05) 0%, rgba(255, 215, 0, 0.02) 100%)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '1px',
            background: `linear-gradient(90deg, transparent, ${theme.palette.primary.main}33, transparent)`,
          }
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Typography 
            component="h2"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
              fontWeight: 900,
              fontFamily: '"Playfair Display", serif',
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography 
            component="h2"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
              fontWeight: 900,
              fontFamily: '"Playfair Display", serif',
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
        </motion.div>
      </MotionBox>

      {/* Skills Section */}
      <Box sx={{ pt: 12, pb: 8 }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Typography
            component="h2"
            sx={{
              position: 'relative',
              mb: 8,
              pb: 2,
              fontFamily: '"Playfair Display", serif',
              color: theme.palette.mode === 'dark' ? 'grey.100' : 'black',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '80px',
                height: '4px',
                background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              },
            }}
          >
            What I Do
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {skills.map((skill, index) => (
            <Grid item xs={12} md={4} key={index}>
              <MotionCard
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                sx={{
                  height: '100%',
                  bgcolor: theme.palette.mode === 'dark' ? 'grey.900' : 'white',
                  borderRadius: '20px',
                  boxShadow: theme.palette.mode === 'dark' 
                    ? '0 4px 20px rgba(0, 0, 0, 0.3)'
                    : '0 4px 20px rgba(0, 0, 0, 0.1)',
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      color: theme.palette.primary.main,
                      mb: 3,
                      transform: 'scale(1.2)',
                      transformOrigin: 'left',
                    }}
                  >
                    {skill.icon}
                  </Box>
                  <Typography 
                    variant="h6" 
                    gutterBottom 
                    sx={{
                      fontFamily: '"Inter", sans-serif',
                      fontWeight: 600,
                      color: theme.palette.mode === 'dark' ? 'grey.100' : 'black',
                    }}
                  >
                    {skill.title}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{
                      color: theme.palette.mode === 'dark' ? 'grey.400' : 'grey.700',
                      lineHeight: 1.7,
                      fontFamily: '"Inter", sans-serif',
                    }}
                  >
                    {skill.desc}
                  </Typography>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Social Links */}
      <Box sx={{ pt: 4, pb: 8, textAlign: 'center' }}>
        <Stack 
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          direction="row" 
          spacing={3} 
          justifyContent="center"
        >
          <IconButton
            component="a"
            href="https://github.com/kimbef"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              p: 2,
              color: theme.palette.mode === 'dark' ? 'grey.300' : 'black',
              '&:hover': {
                bgcolor: theme.palette.mode === 'dark' ? 'grey.800' : 'grey.100',
                color: theme.palette.primary.main,
              },
            }}
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
          <IconButton
            component="a"
            href="https://linkedin.com/in/kliment-petrov"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              p: 2,
              color: theme.palette.mode === 'dark' ? 'grey.300' : 'black',
              '&:hover': {
                bgcolor: theme.palette.mode === 'dark' ? 'grey.800' : 'grey.100',
                color: theme.palette.primary.main,
              },
            }}
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </Stack>
      </Box>
    </MotionBox>
  )
}

export default Home 
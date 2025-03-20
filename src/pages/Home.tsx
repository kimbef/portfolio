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
  Container
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
      <Box 
        sx={{ 
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          py: 12,
          textAlign: 'left',
          background: theme.palette.mode === 'dark' ? '#121212' : '#f5f5f5',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth={false}>
         

          <motion.div 
            variants={itemVariants}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              sx={{
                fontSize: { xs: '8vw', sm: '8vw', md: '8vw' },
                fontWeight: 500,
                lineHeight: 0.7,
                letterSpacing: '-0.02em',
                color: 'rgba(255,255,255,0.2)',
                mb: 2,
                fontFamily: '"Inter", sans-serif',
                textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
                transform: 'translateZ(0)',
              }}
            >
              FRONT
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '8vw', sm: '8vw', md: '8vw' },
                fontWeight: 500,
                lineHeight: 0.7,
                letterSpacing: '-0.02em',
                color: 'rgba(255,255,255,0.2)',
                mb: 2,
                fontFamily: '"Inter", sans-serif',
                textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
                transform: 'translateZ(0)',
              }}
            >
              END
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '8vw', sm: '8vw', md: '8vw' },
                fontWeight: 500,
                lineHeight: 0.7,
                letterSpacing: '-0.02em',
                color: 'rgba(255,255,255,0.2)',
                mb: 4,
                fontFamily: '"Inter", sans-serif',
                textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
                transform: 'translateZ(0)',
              }}
            >
              DEVELOPER
            </Typography>
          </motion.div>

          <Box sx={{ position: 'relative', zIndex: 2, maxWidth: '600px', mt: 8 }}>
            <motion.div 
              variants={itemVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Typography
                sx={{
                  color: theme.palette.mode === 'dark' ? 'white' : '#1a1a1a',
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  lineHeight: 1.8,
                  mb: 4,
                  opacity: 0.9,
                  textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                }}
              >
               Hi, I'm Kliment Petrov, a Frontend Developer passionate about creating beautiful and functional web applications.
              </Typography>

              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={3}
                sx={{ mt: { xs: 6, md: 4 } }}
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
                    color: theme.palette.mode === 'dark' ? 'white' : '#1a1a1a',
                    borderColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)',
                    transition: 'all 0.3s ease-in-out',
                    background: theme.palette.mode === 'dark' 
                      ? 'linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.05) 100%)'
                      : 'linear-gradient(45deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.05) 100%)',
                    '&:hover': {
                      borderColor: theme.palette.mode === 'dark' ? 'white' : '#1a1a1a',
                      backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
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
                    color: theme.palette.mode === 'dark' ? 'white' : '#1a1a1a',
                    borderColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)',
                    transition: 'all 0.3s ease-in-out',
                    background: theme.palette.mode === 'dark' 
                      ? 'linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.05) 100%)'
                      : 'linear-gradient(45deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.05) 100%)',
                    '&:hover': {
                      borderColor: theme.palette.mode === 'dark' ? 'white' : '#1a1a1a',
                      backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
                    },
                  }}
                >
                  Contact Me
                </Button>
              </Stack>
            </motion.div>
          </Box>
        </Container>
      </Box>

      {/* Fancy Text Section */}
      <MotionBox 
        variants={itemVariants}
        sx={{ 
          py: 12,
          textAlign: 'center',
          background: theme.palette.mode === 'dark' 
            ? 'white'
            : '#1a1a1a',
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
              color: theme.palette.mode === 'dark' ? '#1a1a1a' : 'white',
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
              color: theme.palette.mode === 'dark' ? '#1a1a1a' : 'white',
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
              color: theme.palette.mode === 'dark' ? 'white' : '#1a1a1a',
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
                whileHover={{ y: -10, boxShadow: theme.palette.mode === 'dark' 
                  ? '0 10px 30px rgba(0, 0, 0, 0.5)'
                  : '0 10px 30px rgba(0, 0, 0, 0.15)' }}
                sx={{
                  height: '100%',
                  bgcolor: theme.palette.mode === 'dark' ? 'grey.900' : 'white',
                  borderRadius: '20px',
                  boxShadow: theme.palette.mode === 'dark' 
                    ? '0 4px 20px rgba(0, 0, 0, 0.3)'
                    : '0 4px 20px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease-in-out',
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      color: '#9370DB',
                      mb: 3,
                      transform: 'scale(1.2)',
                      transformOrigin: 'left',
                      opacity: 0.9,
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.3)',
                        opacity: 1,
                      }
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
                      color: theme.palette.mode === 'dark' ? 'white' : '#1a1a1a',
                    }}
                  >
                    {skill.title}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{
                      color: theme.palette.mode === 'dark' ? 'white' : '#1a1a1a',
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
              color: theme.palette.mode === 'dark' ? 'white' : '#1a1a1a',
              '&:hover': {
                bgcolor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
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
              color: theme.palette.mode === 'dark' ? 'white' : '#1a1a1a',
              '&:hover': {
                bgcolor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
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
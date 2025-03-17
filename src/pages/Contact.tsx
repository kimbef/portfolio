import { useState, FormEvent } from 'react'
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Stack,
  useTheme,
  Paper,
  Grid,
} from '@mui/material'
import {
  Send as SendIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
  Phone as PhoneIcon,
} from '@mui/icons-material'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)
const MotionDiv = motion.div

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const theme = useTheme()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    ;(e.target as HTMLFormElement).reset()
  }

  const contactInfo = [
    {
      icon: <EmailIcon fontSize="large" />,
      title: 'Email',
      detail: 'face7onol@gmail.com',
      link: 'mailto: face7onol@gmail.com'
    },
    {
      icon: <LocationIcon fontSize="large" />,
      title: 'Location',
      detail: 'Vidin, Bulgaria',
      link: null
    },
    {
      icon: <PhoneIcon fontSize="large" />,
      title: 'Phone',
      detail: '+359 876 227 442',
      link: 'tel: 0876227442'
    }
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
            Let's Connect
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              color: theme.palette.mode === 'dark' ? 'grey.400' : 'black', 
              maxWidth: 600, 
              mx: 'auto',
              fontFamily: '"Inter", sans-serif',
              lineHeight: 1.8,
            }}
          >
            Have a question or want to work together? I'd love to hear from you.
          </Typography>
        </MotionBox>

        {/* Contact Info Cards */}
        <Grid container spacing={4} sx={{ mb: 12 }}>
          {contactInfo.map((info, index) => (
            <Grid item xs={12} md={4} key={index}>
              <MotionDiv
                variants={itemVariants}
                style={{
                  height: '100%',
                }}
              >
                <Paper
                  component={info.link ? 'a' : 'div'}
                  href={info.link || undefined}
                  target={info.link ? '_blank' : undefined}
                  rel={info.link ? 'noopener noreferrer' : undefined}
                  sx={{
                    p: 4,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    bgcolor: theme.palette.mode === 'dark' ? 'rgba(18, 18, 18, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(10px)',
                    cursor: info.link ? 'pointer' : 'default',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    border: '1px solid',
                    borderColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
                    borderRadius: '20px',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: theme.palette.mode === 'dark' 
                      ? '0 8px 32px rgba(0, 0, 0, 0.3)'
                      : '0 8px 32px rgba(0, 0, 0, 0.1)',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: `linear-gradient(45deg, ${theme.palette.primary.main}11, ${theme.palette.secondary.main}11)`,
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    },
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      borderColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                      boxShadow: theme.palette.mode === 'dark' 
                        ? '0 20px 40px rgba(0, 0, 0, 0.4)'
                        : '0 20px 40px rgba(0, 0, 0, 0.15)',
                      '&::before': {
                        opacity: 1,
                      },
                      '& .icon': {
                        transform: 'scale(1.2)',
                        color: '#FFD700',
                      }
                    },
                  }}
                >
                  <Box
                    className="icon"
                    sx={{
                      color: theme.palette.mode === 'dark' ? 'grey.300' : 'black',
                      mb: 3,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {info.icon}
                  </Box>
                  <Typography 
                    variant="h6" 
                    gutterBottom 
                    sx={{ 
                      color: theme.palette.mode === 'dark' ? 'grey.100' : 'black',
                      fontFamily: '"Inter", sans-serif',
                      fontWeight: 600,
                    }}
                  >
                    {info.title}
                  </Typography>
                  <Typography 
                    sx={{ 
                      color: theme.palette.mode === 'dark' ? 'grey.400' : 'black',
                      fontFamily: '"Inter", sans-serif',
                    }}
                  >
                    {info.detail}
                  </Typography>
                </Paper>
              </MotionDiv>
            </Grid>
          ))}
        </Grid>

        {/* Contact Form */}
        <MotionDiv
          variants={itemVariants}
        >
          <Paper
            component="form"
            onSubmit={handleSubmit}
            sx={{
              maxWidth: 800,
              mx: 'auto',
              p: { xs: 3, md: 6 },
              bgcolor: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: `linear-gradient(45deg, ${theme.palette.primary.main}11, ${theme.palette.secondary.main}11)`,
                opacity: 0,
                transition: 'opacity 0.3s ease',
              },
              '&:hover::before': {
                opacity: 1,
              },
            }}
          >
            <Stack spacing={4}>
              <TextField
                required
                label="Name"
                variant="outlined"
                fullWidth
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '10px',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '10px',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: theme.palette.primary.main,
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: theme.palette.mode === 'dark' ? 'grey.400' : 'black',
                  },
                  '& .MuiOutlinedInput-input': {
                    color: theme.palette.mode === 'dark' ? 'grey.100' : 'black',
                  },
                }}
              />
              <TextField
                required
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '10px',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '10px',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: theme.palette.primary.main,
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: theme.palette.mode === 'dark' ? 'grey.400' : 'black',
                  },
                  '& .MuiOutlinedInput-input': {
                    color: theme.palette.mode === 'dark' ? 'grey.100' : 'black',
                  },
                }}
              />
              <TextField
                required
                label="Message"
                multiline
                rows={6}
                variant="outlined"
                fullWidth
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '10px',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '10px',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: theme.palette.primary.main,
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: theme.palette.mode === 'dark' ? 'grey.400' : 'black',
                  },
                  '& .MuiOutlinedInput-input': {
                    color: theme.palette.mode === 'dark' ? 'grey.100' : 'black',
                  },
                }}
              />
              <Button
                type="submit"
                variant="outlined"
                size="large"
                disabled={isSubmitting}
                endIcon={<SendIcon />}
                sx={{
                  py: 2,
                  px: 6,
                  borderRadius: '30px',
                  borderWidth: 2,
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
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </Stack>
          </Paper>
        </MotionDiv>
      </MotionBox>
    </Container>
  )
}

export default Contact
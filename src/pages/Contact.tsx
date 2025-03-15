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
} from '@mui/material'
import {
  Send as SendIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
  Phone as PhoneIcon,
} from '@mui/icons-material'

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const theme = useTheme()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
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
            Let's <span className="highlight">Connect</span>
          </Typography>
          <Typography variant="h5" sx={{ color: theme.palette.mode === 'dark' ? 'grey.400' : 'black', maxWidth: 600, mx: 'auto' }}>
            Have a question or want to work together? I'd love to hear from you.
          </Typography>
        </Box>

        {/* Contact Info Cards */}
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          sx={{ mb: 8 }}
          justifyContent="center"
        >
          {contactInfo.map((info, index) => (
            <Paper
              key={index}
              component={info.link ? 'a' : 'div'}
              href={info.link || undefined}
              target={info.link ? '_blank' : undefined}
              rel={info.link ? 'noopener noreferrer' : undefined}
              sx={{
                p: 4,
                textAlign: 'center',
                bgcolor: theme.palette.mode === 'dark' ? 'grey.900' : 'white',
                flex: 1,
                cursor: info.link ? 'pointer' : 'default',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  bgcolor: theme.palette.mode === 'dark' ? 'grey.800' : 'grey.200',
                  borderColor: theme.palette.primary.main,
                  '& .icon': {
                    color: theme.palette.primary.main,
                  }
                },
              }}
            >
              <Box
                className="icon"
                sx={{
                  color: theme.palette.mode === 'dark' ? 'grey.300' : 'black',
                  mb: 2,
                  transition: 'color 0.3s ease',
                }}
              >
                {info.icon}
              </Box>
              <Typography variant="h6" gutterBottom sx={{ color: theme.palette.mode === 'dark' ? 'grey.100' : 'black' }}>
                {info.title}
              </Typography>
              <Typography sx={{ color: theme.palette.mode === 'dark' ? 'grey.400' : 'black' }}>
                {info.detail}
              </Typography>
            </Paper>
          ))}
        </Stack>

        {/* Contact Form */}
        <Paper
          component="form"
          onSubmit={handleSubmit}
          sx={{
            maxWidth: 600,
            mx: 'auto',
            p: { xs: 3, md: 6 },
            bgcolor: theme.palette.mode === 'dark' ? 'grey.900' : 'white',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <Stack spacing={3}>
            <TextField
              required
              label="Name"
              variant="outlined"
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.1)',
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
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.1)',
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
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.1)',
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
              variant="contained"
              size="large"
              disabled={isSubmitting}
              endIcon={<SendIcon />}
              sx={{
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                py: 1.5,
                '&:hover': {
                  background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </Stack>
        </Paper>
      </Box>
    </Container>
  )
}

export default Contact
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
              color: 'grey.100',
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
          <Typography variant="h5" sx={{ color: 'grey.400', maxWidth: 600, mx: 'auto' }}>
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
                bgcolor: 'grey.900',
                flex: 1,
                cursor: info.link ? 'pointer' : 'default',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  bgcolor: 'grey.800',
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
                  color: 'grey.300',
                  mb: 2,
                  transition: 'color 0.3s ease',
                }}
              >
                {info.icon}
              </Box>
              <Typography variant="h6" gutterBottom sx={{ color: 'grey.100' }}>
                {info.title}
              </Typography>
              <Typography sx={{ color: 'grey.400' }}>
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
            bgcolor: 'grey.900',
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
                  color: 'grey.400',
                },
                '& .MuiOutlinedInput-input': {
                  color: 'grey.100',
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
                  color: 'grey.400',
                },
                '& .MuiOutlinedInput-input': {
                  color: 'grey.100',
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
                  color: 'grey.400',
                },
                '& .MuiOutlinedInput-input': {
                  color: 'grey.100',
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
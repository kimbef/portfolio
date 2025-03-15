import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  useTheme,
  Stack,
  LinearProgress,
} from '@mui/material'
import {
  Code as CodeIcon,
  Storage as StorageIcon,
  Build as BuildIcon,
} from '@mui/icons-material'

const About = () => {
  const theme = useTheme()

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
      period: '2025 - 2025 (1 month)',
      role: 'Technical Assistant(internship)',
      company: 'CRM Kraft.',
      description: 'Managed and maintained the CRM system, provided technical support to the sales team, and assisted with data entry and reporting.',
    },
    {
      period: '2021 - 2024',
      role: 'student(software engineering)',
      company: 'Software University.',
      description: 'Passed the full javascript path from basic to fundamentals, to advanced, to professional modules and worked on various projects and workshops.',
    },
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
            About <span className="highlight">Me</span>
          </Typography>
          <Typography variant="h5" sx={{ color: theme.palette.mode === 'dark' ? 'grey.400' : 'black', maxWidth: 800, mx: 'auto', mb: 4 }}>
            Passionate about creating beautiful and functional web experiences
          </Typography>
        </Box>

        {/* About Section */}
        <Grid container spacing={6} sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative' }}>
              <Box
                sx={{
                  position: 'absolute',
                  top: '10%',
                  left: '10%',
                  width: '80%',
                  height: '80%',
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}40, ${theme.palette.secondary.main}40)`,
                  filter: 'blur(40px)',
                  borderRadius: '50%',
                  zIndex: 0,
                }}
              />
              <Paper
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  aspectRatio: '4/3',
                  bgcolor: theme.palette.mode === 'dark' ? 'grey.900' : 'white',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
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
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack spacing={3}>
              <Typography variant="h4" sx={{ color: theme.palette.mode === 'dark' ? 'grey.100' : 'black', fontWeight: 'bold' }}>
                Hi, I'm Kliment Petrov
              </Typography>
              <Typography sx={{ color: theme.palette.mode === 'dark' ? 'grey.400' : 'black', lineHeight: 1.8 }}>
                I'm a passionate Frontend Developer with over 5 years of experience in creating modern web applications. 
                I specialize in React, TypeScript, and modern frontend technologies.
              </Typography>
              <Typography sx={{ color: theme.palette.mode === 'dark' ? 'grey.400' : 'black', lineHeight: 1.8 }}>
                My journey in web development started with a curiosity for creating beautiful user interfaces. 
                Today, I focus on building scalable, performant applications that provide exceptional user experiences.
              </Typography>
              <Typography sx={{ color: theme.palette.mode === 'dark' ? 'grey.400' : 'black', lineHeight: 1.8 }}>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or sharing my knowledge through blog posts and tutorials.
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        {/* Skills Section */}
        <Typography
          variant="h3"
          sx={{
            color: theme.palette.mode === 'dark' ? 'grey.100' : 'black',
            fontWeight: 'bold',
            mb: 4,
            textAlign: 'center',
          }}
        >
          Skills & Expertise
        </Typography>
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} md={4}>
            <Paper
              sx={{
                p: 4,
                bgcolor: theme.palette.mode === 'dark' ? 'grey.900' : 'white',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                height: '100%',
              }}
            >
              <Box sx={{ color: theme.palette.primary.main, mb: 2 }}>
                <CodeIcon fontSize="large" />
              </Box>
              <Typography variant="h6" sx={{ color: theme.palette.mode === 'dark' ? 'grey.100' : 'black', mb: 3 }}>
                Frontend
              </Typography>
              <Stack spacing={2}>
                {skills.frontend.map((skill) => (
                  <Box key={skill.name}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography sx={{ color: theme.palette.mode === 'dark' ? 'grey.400' : 'black' }}>{skill.name}</Typography>
                      <Typography sx={{ color: theme.palette.mode === 'dark' ? 'grey.400' : 'black' }}>{skill.level}%</Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={skill.level}
                      sx={{
                        bgcolor: 'grey.800',
                        '& .MuiLinearProgress-bar': {
                          background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        },
                      }}
                    />
                  </Box>
                ))}
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              sx={{
                p: 4,
                bgcolor: theme.palette.mode === 'dark' ? 'grey.900' : 'white',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                height: '100%',
              }}
            >
              <Box sx={{ color: theme.palette.primary.main, mb: 2 }}>
                <StorageIcon fontSize="large" />
              </Box>
              <Typography variant="h6" sx={{ color: theme.palette.mode === 'dark' ? 'grey.100' : 'black', mb: 3 }}>
                Backend
              </Typography>
              <Stack spacing={2}>
                {skills.backend.map((skill) => (
                  <Box key={skill.name}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography sx={{ color: theme.palette.mode === 'dark' ? 'grey.400' : 'black' }}>{skill.name}</Typography>
                      <Typography sx={{ color: theme.palette.mode === 'dark' ? 'grey.400' : 'black' }}>{skill.level}%</Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={skill.level}
                      sx={{
                        bgcolor: 'grey.800',
                        '& .MuiLinearProgress-bar': {
                          background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        },
                      }}
                    />
                  </Box>
                ))}
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              sx={{
                p: 4,
                bgcolor: theme.palette.mode === 'dark' ? 'grey.900' : 'white',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                height: '100%',
              }}
            >
              <Box sx={{ color: theme.palette.primary.main, mb: 2 }}>
                <BuildIcon fontSize="large" />
              </Box>
              <Typography variant="h6" sx={{ color: theme.palette.mode === 'dark' ? 'grey.100' : 'black', mb: 3 }}>
                Tools & Others
              </Typography>
              <Stack spacing={2}>
                {skills.tools.map((skill) => (
                  <Box key={skill.name}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography sx={{ color: theme.palette.mode === 'dark' ? 'grey.400' : 'black' }}>{skill.name}</Typography>
                      <Typography sx={{ color: theme.palette.mode === 'dark' ? 'grey.400' : 'black' }}>{skill.level}%</Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={skill.level}
                      sx={{
                        bgcolor: 'grey.800',
                        '& .MuiLinearProgress-bar': {
                          background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        },
                      }}
                    />
                  </Box>
                ))}
              </Stack>
            </Paper>
          </Grid>
        </Grid>

        {/* Experience Section */}
        <Typography
          variant="h3"
          sx={{
            color: theme.palette.mode === 'dark' ? 'grey.100' : 'black',
            fontWeight: 'bold',
            mb: 4,
            textAlign: 'center',
          }}
        >
          Experience
        </Typography>
        <Stack spacing={3}>
          {experiences.map((exp, index) => (
            <Paper
              key={index}
              sx={{
                p: 4,
                bgcolor: theme.palette.mode === 'dark' ? 'grey.900' : 'white',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  borderColor: theme.palette.primary.main,
                },
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                  <Typography sx={{ color: theme.palette.primary.main, fontWeight: 'bold' }}>
                    {exp.period}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={9}>
                  <Typography variant="h6" sx={{ color: theme.palette.mode === 'dark' ? 'grey.100' : 'black', mb: 1 }}>
                    {exp.role}
                  </Typography>
                  <Typography sx={{ color: theme.palette.secondary.main, mb: 2 }}>
                    {exp.company}
                  </Typography>
                  <Typography sx={{ color: theme.palette.mode === 'dark' ? 'grey.400' : 'black' }}>
                    {exp.description}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          ))}
        </Stack>
      </Box>
    </Container>
  )
}

export default About 
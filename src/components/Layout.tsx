import { ReactNode, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useScrollTrigger,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Button
} from '@mui/material'
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon
} from '@mui/icons-material'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const location = useLocation()
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  const theme = createTheme({
    palette: {
      mode: isDark ? 'dark' : 'light',
      primary: {
        main: '#2563eb', // blue-600
      },
      secondary: {
        main: '#06b6d4', // cyan-500
      },
    },
    typography: {
      fontFamily: '"Poppins", sans-serif',
      h1: {
        fontWeight: 700,
      },
      h2: {
        fontWeight: 600,
      },
      button: {
        textTransform: 'none',
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: 'transparent',
            backgroundImage: 'none',
            boxShadow: 'none',
            transition: 'all 0.3s ease',
            '&.scrolled': {
              backgroundColor: isDark ? 'rgba(17, 24, 39, 0.8)' : 'rgba(105, 103, 103, 0.8)',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
            },
          },
        },
      },
    },
  })

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 20,
  })

  const isActive = (path: string) => location.pathname === path

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        minHeight: '100vh',
        bgcolor: isDark ? 'grey.900' : 'grey.50',
        transition: 'background-color 0.3s ease'
      }}>
        <AppBar position="fixed" className={trigger ? 'scrolled' : ''} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
              <Typography
                variant="h6"
                component={Link}
                to="/"
                sx={{
                  textDecoration: 'none',
                  background: 'linear-gradient(to right, #2563eb, #06b6d4)',
                  backgroundClip: 'text',
                  color: 'transparent',
                  fontWeight: 'bold',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                  transition: 'transform 0.3s ease',
                }}
              >
                Portfolio
              </Typography>

              {/* Desktop Navigation */}
              <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.path}
                    component={Link}
                    to={item.path}
                    color={isActive(item.path) ? 'primary' : 'inherit'}
                    sx={{
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: '0',
                        left: '50%',
                        width: isActive(item.path) ? '80%' : '0%',
                        height: '2px',
                        background: 'linear-gradient(to right, #2563eb, #06b6d4)',
                        transition: 'all 0.3s ease',
                        transform: 'translateX(-50%)',
                      },
                      '&:hover::after': {
                        width: '80%',
                      },
                    }}
                  >
                    {item.name}
                  </Button>
                ))}
                <IconButton
                  onClick={() => setIsDark(!isDark)}
                  color="inherit"
                  sx={{ ml: 1 }}
                >
                  {isDark ? <LightModeIcon /> : <DarkModeIcon />}
                </IconButton>
              </Box>

              {/* Mobile Menu Button */}
              <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
                <IconButton
                  onClick={() => setIsDark(!isDark)}
                  color="inherit"
                >
                  {isDark ? <LightModeIcon /> : <DarkModeIcon />}
                </IconButton>
                <IconButton
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  color="inherit"
                >
                  {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

        {/* Mobile Navigation Drawer */}
        <Drawer
          anchor="right"
          open={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          variant="temporary"
          slotProps={{
            paper: {
              sx: {
                width: 240,
                bgcolor: isDark ? 'grey.900' : 'grey.50',
                zIndex: (theme) => theme.zIndex.drawer
              }
            }
          }}
          ModalProps={{
            keepMounted: true // Better mobile performance
          }}
        >
          <List sx={{ pt: 8 }}>
            {navItems.map((item) => (
              <ListItem key={item.path} disablePadding>
                <ListItemButton
                  component={Link}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  selected={isActive(item.path)}
                  sx={{
                    '&.Mui-selected': {
                      bgcolor: isDark ? 'rgba(37, 99, 235, 0.1)' : 'rgba(37, 99, 235, 0.1)',
                      color: 'primary.main',
                    },
                  }}
                >
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>

        <Box component="main" sx={{ pt: 10, px: 2, minHeight: '100vh' }}>
          <Container maxWidth="lg">
            <Box className="page-transition">
              {children}
            </Box>
          </Container>
        </Box>

        <Box 
          component="footer" 
          sx={{ 
            mt: 5, 
            py: 4, 
            bgcolor: isDark ? 'grey.800' : 'white',
            color: isDark ? 'grey.300' : 'grey.600',
            transition: 'all 0.3s ease',
          }}
        >
          <Container maxWidth="lg">
            <Typography align="center">
              © {new Date().getFullYear()} Your Portfolio. All rights reserved.
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default Layout 
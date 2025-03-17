import { ReactNode, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  AppBar, Box, Container, IconButton, Toolbar, Typography, useScrollTrigger, 
  ThemeProvider, createTheme, CssBaseline, Drawer, List, ListItem, ListItemText
} from '@mui/material';
import { 
  DarkMode as DarkModeIcon, 
  LightMode as LightModeIcon,
  Menu as MenuIcon,
  Close as CloseIcon
} from '@mui/icons-material';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isDark, setIsDark] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Load theme mode from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
    }
  }, []);

  // Save theme mode to localStorage when toggled
  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const theme = createTheme({
    palette: {
      mode: isDark ? 'dark' : 'light',
      primary: { main: '#2563eb' }, // Blue for interactive elements
      secondary: { main: '#fff' }, // White for light mode
    },
  });

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 20,
  });

  const navigationLinks = [
    { text: 'Home', path: '/' },
    { text: 'Projects', path: '/projects' },
    { text: 'About', path: '/about' },
    { text: 'Contact', path: '/contact' },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        minHeight: '100vh', 
        bgcolor: isDark ? 'black' : 'white',
        color: isDark ? 'white' : 'black',
        transition: 'background-color 0.3s ease, color 0.3s ease'
      }}>
        <AppBar 
          position="fixed" 
          className={trigger ? 'scrolled' : ''} 
          elevation={0}
          sx={{ 
            bgcolor: isDark ? 'black' : 'white',
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters sx={{ 
              justifyContent: 'space-between',
              bgcolor: isDark ? 'black' : 'white',
            }}>
              <Typography 
                variant="h4" 
                component={Link} 
                to="/" 
                sx={{ 
                  textDecoration: 'none', 
                  color: '#2563eb', // Always blue
                  fontWeight: 'bold',
                  fontSize: '2rem',
                }}
              >
                Portfolio
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton onClick={() => setIsDark(!isDark)} sx={{ color: isDark ? 'white' : 'black' }}>
                  {isDark ? <LightModeIcon /> : <DarkModeIcon />}
                </IconButton>
                <IconButton 
                  onClick={() => setIsDrawerOpen(true)}
                  sx={{ 
                    color: isDark ? 'white' : 'black',
                    border: '1px solid',
                    borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

        {/* Navigation Drawer */}
        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          PaperProps={{
            sx: {
              width: 250,
              bgcolor: isDark ? '#1a1a1a' : 'white',
              color: isDark ? 'white' : 'black',
            }
          }}
        >
          <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <IconButton onClick={() => setIsDark(!isDark)} sx={{ color: isDark ? 'white' : 'black' }}>
              {isDark ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
            <IconButton 
              onClick={() => setIsDrawerOpen(false)}
              sx={{ color: isDark ? 'white' : 'black' }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {navigationLinks.map((link) => (
              <ListItem 
                key={link.path} 
                component={Link} 
                to={link.path}
                onClick={() => setIsDrawerOpen(false)}
                sx={{ 
                  color: isDark ? 'white' : 'black',
                  textDecoration: 'none',
                  '&:hover': {
                    bgcolor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                  }
                }}
              >
                <ListItemText 
                  primary={link.text} 
                  primaryTypographyProps={{
                    sx: { 
                      color: isDark ? 'white' : 'black',
                      '&:hover': { color: theme.palette.primary.main }
                    }
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Drawer>

        <Box component="main" sx={{ pt: 10, px: 2 }}>
          <Container maxWidth="lg">
            {children}
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Layout;

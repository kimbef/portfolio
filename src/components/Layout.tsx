import { ReactNode, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  AppBar, Box, Container, IconButton, Toolbar, Typography, useScrollTrigger, ThemeProvider, createTheme, CssBaseline
} from '@mui/material';
import { DarkMode as DarkModeIcon, LightMode as LightModeIcon } from '@mui/icons-material';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isDark, setIsDark] = useState(false);

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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        minHeight: '100vh', 
        bgcolor: isDark ? 'black' : 'white', // Black background in dark mode
        color: isDark ? 'white' : 'black', // White text in dark mode, black text in light mode
        transition: 'background-color 0.3s ease, color 0.3s ease' // Smooth transition
      }}>
        <AppBar position="fixed" className={trigger ? 'scrolled' : ''} sx={{ padding: 0 }}>
          <Container maxWidth="xl" sx={{ padding: 0 }}>
            <Toolbar disableGutters sx={{ 
              justifyContent: 'space-between', 
              bgcolor: isDark ? 'black' : 'white', // Set to black in dark mode
              border: isDark ? 'none' : '1px solid rgba(0, 0, 0, 0.1)', // Remove border in dark mode
              padding: 0,
            }}>
              <Typography 
                variant="h4" 
                component={Link} 
                to="/" 
                sx={{ 
                  textDecoration: 'none', 
                  color: theme.palette.mode === 'dark' ? 'white' : 'black', // Updated color condition
                  fontFamily: 'Arial, sans-serif', // Change to your desired font
                  fontWeight: 'bold',
                  fontSize: '2rem', // Make the title larger
                }}
              >
                Portfolio
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Link to="/" style={{ margin: '0 10px', color: theme.palette.mode === 'dark' ? 'white' : 'black', textDecoration: 'none' }}>
                  <Typography sx={{ transition: 'color 0.3s', '&:hover': { color: theme.palette.primary.main } }}>Home</Typography>
                </Link>
                <Link to="/projects" style={{ margin: '0 10px', color: theme.palette.mode === 'dark' ? 'white' : 'black', textDecoration: 'none' }}>
                  <Typography sx={{ transition: 'color 0.3s', '&:hover': { color: theme.palette.primary.main } }}>Projects</Typography>
                </Link>
                <Link to="/about" style={{ margin: '0 10px', color: theme.palette.mode === 'dark' ? 'white' : 'black', textDecoration: 'none' }}>
                  <Typography sx={{ transition: 'color 0.3s', '&:hover': { color: theme.palette.primary.main } }}>About</Typography>
                </Link>
                <Link to="/contact" style={{ margin: '0 10px', color: theme.palette.mode === 'dark' ? 'white' : 'black', textDecoration: 'none' }}>
                  <Typography sx={{ transition: 'color 0.3s', '&:hover': { color: theme.palette.primary.main } }}>Contact</Typography>
                </Link>
                <IconButton onClick={() => setIsDark(!isDark)} color="inherit">
                  {isDark ? <LightModeIcon sx={{ color: 'white' }} /> : <DarkModeIcon sx={{ color: 'black' }} />}
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
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

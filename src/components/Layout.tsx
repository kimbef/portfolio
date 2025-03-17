import { ReactNode, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  AppBar, Box, Container, IconButton, Toolbar, Typography, useScrollTrigger, 
  ThemeProvider, createTheme, CssBaseline, Drawer, List, ListItem, ListItemText,
  useTheme, useMediaQuery
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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

  const customTheme = createTheme({
    palette: {
      mode: isDark ? 'dark' : 'light',
      primary: { main: '#9370DB' },
      secondary: { main: '#fff' },
      text: {
        primary: isDark ? '#fff' : '#1a1a1a',
        secondary: isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)'
      }
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

  const NavigationLinks = () => (
    <>
      {navigationLinks.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          style={{
            margin: '0 10px',
            textDecoration: 'none',
            position: 'relative',
          }}
        >
          <Typography
            sx={{
              transition: 'all 0.3s ease',
              '&:hover': { 
                color: '#1E90FF',
                transform: 'translateY(-2px)'
              },
              fontWeight: link.path === window.location.pathname ? 'bold' : 'normal',
              color: theme => theme.palette.mode === 'dark' ? 'white' : '#1a1a1a',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -2,
                left: 0,
                width: '100%',
                height: '2px',
                background: '#1E90FF',
                transform: 'scaleX(0)',
                transformOrigin: 'right',
                transition: 'transform 0.3s ease',
              },
              '&:hover::after': {
                transform: 'scaleX(1)',
                transformOrigin: 'left',
              },
            }}
          >
            {link.text}
          </Typography>
        </Link>
      ))}
    </>
  );

  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Box sx={{ 
        minHeight: '100vh', 
        bgcolor: isDark ? 'black' : 'white',
        color: isDark ? 'white' : 'black',
        transition: 'background-color 0.3s ease, color 0.3s ease',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: theme => `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)'}'%3E%3Ctext x='25%25' y='15%25' font-family='monospace' font-size='10'%3E10110%3C/text%3E%3Ctext x='75%25' y='35%25' font-family='monospace' font-size='10'%3E01001%3C/text%3E%3Ctext x='15%25' y='55%25' font-family='monospace' font-size='10'%3E11010%3C/text%3E%3Ctext x='65%25' y='75%25' font-family='monospace' font-size='10'%3E00101%3C/text%3E%3Ctext x='35%25' y='95%25' font-family='monospace' font-size='10'%3E10011%3C/text%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.7,
          zIndex: 0,
          animation: 'matrix 20s linear infinite',
        },
        '@keyframes matrix': {
          '0%': {
            backgroundPosition: '0 0'
          },
          '100%': {
            backgroundPosition: '200px 200px'
          }
        },
        '& > *': {
          position: 'relative',
          zIndex: 1,
        }
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
                  color: '#9370DB',
                  fontWeight: 'bold',
                  fontSize: '2rem',
                }}
              >
                Portfolio
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {/* Show navigation links on desktop */}
                {!isMobile && (
                  <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
                    <NavigationLinks />
                  </Box>
                )}
                
                <IconButton 
                  onClick={() => setIsDark(!isDark)} 
                  sx={{ color: isDark ? 'white' : 'black' }}
                >
                  {isDark ? <LightModeIcon /> : <DarkModeIcon />}
                </IconButton>

                {/* Only show hamburger menu on mobile */}
                {isMobile && (
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
                )}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

        {/* Navigation Drawer (only for mobile) */}
        <Drawer
          anchor="right"
          open={isDrawerOpen && isMobile}
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
            <IconButton 
              onClick={() => setIsDark(!isDark)} 
              sx={{ color: isDark ? 'white' : 'black' }}
            >
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
                  bgcolor: link.path === window.location.pathname ? 
                    (isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)') : 'transparent',
                  '&:hover': {
                    bgcolor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                  }
                }}
              >
                <ListItemText 
                  primary={link.text} 
                  primaryTypographyProps={{
                    sx: { 
                      color: link.path === window.location.pathname ? 
                        customTheme.palette.primary.main : 
                        (isDark ? 'white' : 'black'),
                      fontWeight: link.path === window.location.pathname ? 'bold' : 'normal',
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

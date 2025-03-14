import { createTheme } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark' as PaletteMode,
    primary: {
      main: '#2563eb', // blue-600
      light: '#3b82f6',
      dark: '#1d4ed8',
    },
    secondary: {
      main: '#06b6d4', // cyan-500
      light: '#22d3ee',
      dark: '#0891b2',
    },
    background: {
      default: '#111827', // gray-900
      paper: '#1f2937', // gray-800
    },
    text: {
      primary: '#f3f4f6', // gray-100
      secondary: '#9ca3af', // gray-400
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
    h3: {
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
            backgroundColor: 'rgba(17, 24, 39, 0.8)', // gray-900 with opacity
            backdropFilter: 'blur(8px)',
            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          backgroundColor: '#1f2937', // gray-800
        },
      },
    },
  },
});

export default theme; 
// App.js
import { Container } from '@mui/material';
import { blueGrey, deepOrange, grey, orange } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from "react";
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import Main from './components/layouts/Main';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: blueGrey[500],
    },
    secondary: {
      main: grey[500],
    },
    text: {
      primary: grey[900], // Dark text on light background
      secondary: grey[700],
    },
    background: {
      default: '#f5f5f5', // Light grey background
      paper: '#ffffff', // White paper
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#303f9f', // Dark blue
    },
    secondary: {
      main: '#e0e0e0', // Light grey
    },
    text: {
      primary: '#ffffff', // White text on dark background
      secondary: '#b0bec5', // Lighter grey text
    },
    background: {
      default: '#121212', // Dark background
      paper: '#1e1e1e', // Slightly lighter paper
    },
  },
});

const highContrastTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000000', // Black
    },
    secondary: {
      main: '#ffffff', // White
    },
    text: {
      primary: '#000000', // Black text on white background
      secondary: '#000000', // Black text on white background
    },
    background: {
      default: '#ffffff', // White background
      paper: '#f5f5f5', // Slightly off-white paper
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

const retroTheme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: deepOrange[500],
    },
    text: {
      primary: '#000000', // Black text on vibrant background
      secondary: '#ffffff', // White text if needed
    },
    background: {
      default: '#ffe0b2', // Light orange
      paper: '#ffcc80', // Slightly darker orange
    },
  },
  typography: {
    fontFamily: '"Permanent Marker", cursive',
  },
});

const modernTheme = createTheme({
  palette: {
    primary: {
      main: '#00695c', // Teal
    },
    secondary: {
      main: '#607d8b', // Blue Grey
    },
    text: {
      primary: '#ffffff', // White text on dark teal
      secondary: '#b0bec5', // Light grey text
    },
    background: {
      default: '#004d40', // Dark teal
      paper: '#00796b', // Slightly lighter teal
    },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
  },
});

const funTheme = createTheme({
  palette: {
    primary: {
      main: '#f44336', // Red
    },
    secondary: {
      main: '#ffeb3b', // Yellow
    },
    text: {
      primary: '#000000', // Black text on bright background
      secondary: '#000000', // Black text on bright background
    },
    background: {
      default: '#ffeb3b', // Yellow background
      paper: '#f44336', // Red paper
    },
  },
  typography: {
    fontFamily: '"Comic Neue", cursive',
  },
});

export default function App() {
  const getInitialTheme = () => {
    const savedTheme = Cookies.get('theme');
    switch (savedTheme) {
      case 'dark':
        return darkTheme;
      case 'highContrast':
        return highContrastTheme;
      case 'retro':
        return retroTheme;
      case 'modern':
        return modernTheme;
      case 'fun':
        return funTheme;
      default:
        return lightTheme;
    }
  };
  const [currentTheme, setCurrentTheme] = useState(getInitialTheme);

  const handleThemeChange = (theme) => {
    switch (theme) {
      case 'light':
        setCurrentTheme(lightTheme);
        Cookies.set('theme', 'light', { expires: 365 });
        break;
      case 'dark':
        setCurrentTheme(darkTheme);
        Cookies.set('theme', 'dark', { expires: 365 });
        break;
      case 'highContrast':
        setCurrentTheme(highContrastTheme);
        Cookies.set('theme', 'highContrast', { expires: 365 });
        break;
      case 'retro':
        setCurrentTheme(retroTheme);
        Cookies.set('theme', 'retro', { expires: 365 });
        break;
      case 'modern':
        setCurrentTheme(modernTheme);
        Cookies.set('theme', 'modern', { expires: 365 });
        break;
      case 'fun':
        setCurrentTheme(funTheme);
        Cookies.set('theme', 'fun', { expires: 365 });
        break;
      default:
        setCurrentTheme(lightTheme);
        Cookies.set('theme', 'light', { expires: 365 });
    }
  };

  useEffect(() => {
    const savedTheme = Cookies.get('theme');
    if (savedTheme) {
      handleThemeChange(savedTheme);
    }
  }, []);


  return (

    <ThemeProvider theme={currentTheme}>
      <Header onThemeChange={handleThemeChange} />
      <Container maxWidth="lg" sx={{ marginTop: 2, marginBottom: 2 }}>
        <Main onThemeChange={handleThemeChange} />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
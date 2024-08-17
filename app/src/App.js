// App.js
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { blueGrey, deepOrange, grey, orange } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useState } from "react";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Sidebar from "./components/layouts/SideBar";

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: blueGrey[500],
    },
    secondary: {
      main: grey[500],
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
  },
});

const highContrastTheme = createTheme({
  palette: {
    mode: 'light', // High contrast usually works better on a light background
    primary: {
      main: '#000000', // Black
    },
    secondary: {
      main: '#ffffff', // White
    },
    text: {
      primary: '#ffffff', // White text on dark background
      secondary: '#000000', // Black text on light background
    },
    background: {
      default: '#ffffff', // White background
      paper: '#f5f5f5', // Slightly off-white paper
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif', // Choose a clear, easy-to-read font
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
  },
  typography: {
    fontFamily: '"Permanent Marker", cursive', // A fun, retro-style font
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
  },
  typography: {
    fontFamily: '"Roboto", sans-serif', // A clean, modern font
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
  },
  typography: {
    fontFamily: '"Comic Neue", cursive', // A playful font
  },
});

const Content = () => (
  <Paper elevation={3}>
    <Box p={2}>
      <Typography variant="h5">Content</Typography>
    </Box>
  </Paper>
);

export default function App() {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  const handleThemeChange = (event) => {
    const selectedTheme = event.target.value;
    switch (selectedTheme) {
      case 'light':
        setCurrentTheme(lightTheme);
        break;
      case 'dark':
        setCurrentTheme(darkTheme);
        break;
      case 'highContrast':
        setCurrentTheme(highContrastTheme);
        break;
      case 'retro':
        setCurrentTheme(retroTheme);
        break;
      case 'modern':
        setCurrentTheme(modernTheme);
        break;
      case 'fun':
        setCurrentTheme(funTheme);
        break;
      default:
        setCurrentTheme(lightTheme);
    }
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <Header onThemeChange={handleThemeChange} />
      <Container maxWidth="lg" sx={{ marginTop: 2, marginBottom: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Sidebar />
          </Grid>
          <Grid item xs={9}>
            <Content />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
// components/layouts/Header.jsx
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header({ onThemeChange }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={NavLink} to="/" sx={{ flexGrow: 1, textDecoration: "none" }}>
          HS Chat
        </Typography>

        <nav> {/* Navigation links */}
          <Button color="inherit" component={NavLink} to="/dashboard">Dashboard</Button>
          <Button color="inherit" component={NavLink} to="/bookings">Book An Appointment</Button>
          <Button color="inherit" component={NavLink} to="/requests">Request Custom Order</Button>
          <Button color="inherit" component={NavLink} to="/settings">Settings</Button>
          <Button color="inherit" component={NavLink} to="/chat">Chat</Button>
        </nav>

        {/* Theme selection */}
        <select onChange={onThemeChange}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="highContrast">High Contrast</option>
          <option value="retro">Retro</option>
          <option value="modern">Modern</option>
          <option value="fun">Fun</option>
        </select>
      </Toolbar>
    </AppBar>
  );
}
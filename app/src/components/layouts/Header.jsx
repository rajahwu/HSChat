// components/layouts/Header.jsx
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function Header({ onThemeChange }) {
  const { user } = useAuth();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={NavLink} to="/" sx={{ flexGrow: 1, textDecoration: "none" }}>
          HS Chat
        </Typography>

      {user ? (
        <nav> {/* Navigation links */}
          <Button color="inherit" component={NavLink} to={`${user.displayName}/dashboard`}>Dashboard</Button>
          <Button color="inherit" component={NavLink} to={`${user.displayName}/bookings`}>Book An Appointment</Button>
          <Button color="inherit" component={NavLink} to={`${user.displayName}/requests`}>Request Custom Order</Button>
          <Button color="inherit" component={NavLink} to={`${user.displayName}/settings`}>Settings</Button>
          <Button color="inherit" component={NavLink} to={`${user.displayName}/chat`}>Chat</Button>
          <Button color="inherit" component={NavLink} to={`${user.displayName}/signout`}>Sign Out</Button>
        </nav>
      ) : (
        <nav>
          <Button color="inherit" component={NavLink} to="/login">Login</Button>
          <Button color="inherit" component={NavLink} to="/register">Sign Up</Button>
        </nav>
      )}

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
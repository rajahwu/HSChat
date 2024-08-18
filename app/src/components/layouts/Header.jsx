// components/layouts/Header.jsx
import ContrastIcon from '@mui/icons-material/Contrast';
import { AppBar, Box, Button, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function Header({ onThemeChange }) {
  const { user } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleThemeChange = (theme) => {
    onThemeChange(theme);
    handleClose();
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={NavLink} to="/" sx={{ flexGrow: 1, textDecoration: "none" }}>
          <img src="/assets/chat.png" alt="logo" style={{ width: "30px", height: "30px", marginRight: "10px" }} />
        </Typography>

        {user ? (
          <nav> {/* Navigation links */}
            <Button color="inherit" component={NavLink} to={`${user.displayName}/dashboard`}>Dashboard</Button>
            <Button color="inherit" component={NavLink} to={`${user.displayName}/bookings`}>Book An Appointment</Button>
            <Button color="inherit" component={NavLink} to={`${user.displayName}/requests`}>Request Custom Order</Button>
            <Button color="inherit" component={NavLink} to={`${user.displayName}/chat`}>Chat</Button>
            <Button color="inherit" component={NavLink} to={`${user.displayName}/settings`}>Settings</Button>
            <Button color="inherit" component={NavLink} to={`${user.displayName}/signout`}>Sign Out</Button>
          </nav>
        ) : (
          <nav>
            <Button color="inherit" component={NavLink} to="/login">Login</Button>
            <Button color="inherit" component={NavLink} to="/register">Sign Up</Button>
          </nav>
        )}

        {/* Theme selection */}
        <Button
          color="inherit"
          aria-controls={open ? 'theme-menu' : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
          <ContrastIcon />
          </Box>

        </Button>
        <Menu
          id="theme-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={() => handleThemeChange('light')}>Light</MenuItem>
          <MenuItem onClick={() => handleThemeChange('dark')}>Dark</MenuItem>
          <MenuItem onClick={() => handleThemeChange('highContrast')}>High Contrast</MenuItem>
          <MenuItem onClick={() => handleThemeChange('retro')}>Retro</MenuItem>
          <MenuItem onClick={() => handleThemeChange('modern')}>Modern</MenuItem>
          <MenuItem onClick={() => handleThemeChange('fun')}>Fun</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

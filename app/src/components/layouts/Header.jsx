// components/layouts/Header.jsx
import { Box, Typography } from '@mui/material';
import React from 'react';

export default function Header({ onThemeChange }) {
    return (
        <Box bgcolor="primary.main" color="primary.contrastText" p={2}>
            <Typography variant="h4">Header</Typography>
            <select onChange={onThemeChange}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="highContrast">High Contrast</option>
                <option value="retro">Retro</option>
                <option value="modern">Modern</option>
                <option value="fun">Fun</option>
            </select>
        </Box>
    );
}
// components/layouts/Footer.jsx
import { Box, Typography } from '@mui/material';
import React from 'react';

export default function Footer() {
  return (
    <Box bgcolor="primary.main" color="primary.contrastText" p={2}>
      <Typography variant="h4">Footer</Typography>
    </Box>
  );
}
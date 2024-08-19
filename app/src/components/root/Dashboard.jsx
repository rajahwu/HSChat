// src/pages/Dashboard.jsx
import { Box, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const Dashboard = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        {/* Example Card 1 */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Card Title 1</Typography>
            <Typography variant="body1">Some content for card 1.</Typography>
          </Paper>
        </Grid>
        {/* Example Card 2 */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Card Title 2</Typography>
            <Typography variant="body1">Some content for card 2.</Typography>
          </Paper>
        </Grid>
        {/* Example Card 3 */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Card Title 3</Typography>
            <Typography variant="body1">Some content for card 3.</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;

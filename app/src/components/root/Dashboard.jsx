// src/pages/Dashboard.jsx
import { Box, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();
  const { nextAppointment, timeRemaining } = useLoaderData();
  console.log(timeRemaining);

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        {/* Card 1 - User Info */}
        <Grid item xs={12} sm={6}>
          <Paper
            sx={(theme) => ({
              padding: 2,
              textAlign: 'center',
              backgroundColor: theme.palette.background.paper,
              color: theme.palette.text.primary,
            })}
          >
            <Box
              component="section"
              sx={{
                textAlign: "center",
                p: 2,
                borderRadius: "8px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {user ? (
                <>
                  <img
                    src={user.photoURL}
                    alt="User Avatar"
                    style={{
                      borderRadius: "50%",
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                      marginBottom: "8px",
                    }}
                  />
                  <Typography variant="h6">{user.displayName}</Typography>
                </>
              ) : (
                <Typography variant="body1">No user signed in</Typography>
              )}
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper
                sx={(theme) => ({
                  padding: 2,
                  backgroundColor: theme.palette.background.paper,
                  color: theme.palette.text.primary,
                })}
              >
                <Typography variant="h6">Next Appointment: {nextAppointment.date.toLocaleString()}</Typography>
                <Typography variant="h6">{nextAppointment.name}: {nextAppointment.duration} minutes</Typography>
                <Typography variant="body1">Meeting in: {timeRemaining}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper
                sx={(theme) => ({
                  padding: 2,
                  backgroundColor: theme.palette.background.paper,
                  color: theme.palette.text.primary,
                })}
              >
                <Typography variant="h6">Orders</Typography>
                <Typography variant="body1">Go to store</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;

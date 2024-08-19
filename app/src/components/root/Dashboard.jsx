// src/pages/Dashboard.jsx
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

dayjs.extend(relativeTime);

const Dashboard = () => {
  const { user } = useAuth();
  const { nextAppointment } = useLoaderData();

  const appointmentDetails = nextAppointment ? (
    <>
      <Typography variant="h6">Next Appointment</Typography>
      <Typography variant="h6">{dayjs(nextAppointment.date).fromNow()}</Typography>
      <Typography variant="body1">for {nextAppointment.name}: {nextAppointment.type}</Typography>
      <Typography variant="body1">on {dayjs(nextAppointment.date).format('dddd, MMMM, D')}</Typography>
      <Typography variant="body1"> at {dayjs(nextAppointment.date).format('h:mm A')}</Typography>
    </>
  ) : (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <Typography variant="body1">No upcoming appointments</Typography>
      <Button variant="contained" color="primary" component={Link} to={`/${user.displayName}/bookings`}>Book an appointment</Button>
    </Box>
  );

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
                {appointmentDetails}
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

// src/pages/BookAppointment.jsx
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const BookAppointment = () => {
  const [appointmentDetails, setAppointmentDetails] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointmentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle booking logic here, e.g., send details to Firestore
    console.log('Booking details:', appointmentDetails);
  };

  return (
    <Container sx={{ padding: '2em' }}>
      <Typography variant="h4" gutterBottom>
        Book an Appointment
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={appointmentDetails.name}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={appointmentDetails.email}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Date"
              name="date"
              type="date"
              value={appointmentDetails.date}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Time"
              name="time"
              type="time"
              value={appointmentDetails.time}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Additional Notes"
              name="notes"
              multiline
              rows={4}
              value={appointmentDetails.notes}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Book Appointment
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default BookAppointment;

// src/pages/BookAppointment.jsx
import { Button, Container, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Form } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const BookAppointment = () => {
  const { user } = useAuth();
  const [appointmentDetails, setAppointmentDetails] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    notes: '',
    duration: '',
  });

  const durationOptions = [];
  for (let i = 1; i <= 8; i++) { // 8 blocks of 15 minutes
    const durationInMinutes = i * 15;
    durationOptions.push({
      value: durationInMinutes,
      label: `${durationInMinutes} minutes`,
    });
  }

  const appointmentTypes = [
    { value: 'consult', label: 'Consultation' },
    { value: 'cut', label: 'Cut' },
    { value: 'extension', label: 'Extension' },
    { value: 'perm', label: 'Perm' },
    { value: 'color', label: 'Color' },
    { value: 'special', label: 'Special' },
  ];


  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointmentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

  return (
    <Container sx={{ padding: '2em' }}>
      <Typography variant="h4" gutterBottom>
        Book an Appointment
      </Typography>
      <Form method="post">
        {user && <input type="hidden" name="userId" value={user.id} />}
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
          <Grid item xs={12} sm={6}>
            <InputLabel id="duration-label">Duration</InputLabel>
            <Select
              labelId="duration-label"
              name="duration"
              value={appointmentDetails.duration || ''}
              onChange={handleChange}
              required
              fullWidth
            >
              {durationOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel id="appointment-type-label">Appointment Type</InputLabel>
            <Select
              labelId="appointment-type-label"
              name="type"
              value={appointmentDetails.type || ''}
              onChange={handleChange}
              required
              fullWidth
            >
              {appointmentTypes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
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
      </Form>
    </Container>
  );
};

export default BookAppointment;

import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

export default function CustomOrder() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    itemType: '',
    size: '',
    color: '',
    designDetails: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend)
    console.log('Form submitted:', formData);
  };

  return (
    <Container maxWidth="md" sx={{ padding: '2em 0' }}>
      <Typography variant="h4" gutterBottom>
        Request a Custom Order
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Item Type (Clothing or Sneakers)"
              name="itemType"
              value={formData.itemType}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Size"
              name="size"
              value={formData.size}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Color"
              name="color"
              value={formData.color}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Design Details"
              name="designDetails"
              value={formData.designDetails}
              onChange={handleChange}
              multiline
              rows={4}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit Custom Order Request
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

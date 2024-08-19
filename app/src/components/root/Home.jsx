import { Box, Button, Paper, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Home = () => {
    const { user } = useAuth();

    return (
        <Paper
            elevation={3}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: 3,
            }}
        >
            {user ? (
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        padding: 3,
                    }}
                >
                    <Typography variant="h3" gutterBottom>
                        Welcome to Custom Creations
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        Your one-stop shop for custom clothing and sneakers.
                    </Typography>
                    <Box sx={{ mt: 4 }}>
                        <Button
                            component={Link}
                            to={`${user.displayName}/dashboard`}
                            variant="contained"
                            color="primary"
                            sx={{ m: 1 }}
                        >
                            Go to Dashboard
                        </Button>
                        <Button
                            component={Link}
                            to="/book-appointment"
                            variant="outlined"
                            color="secondary"
                            sx={{ m: 1 }}
                        >
                            Book an Appointment
                        </Button>
                        <Button
                            component={Link}
                            variant="outlined"
                            to="/request-custom-order"
                            color="secondary"
                            sx={{ m: 1 }}
                        >
                            Request a Custom Order
                        </Button>
                    </Box>
                </Box>
            ) : (
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        padding: 3,
                    }}
                >
                    <Typography variant="h3" gutterBottom>
                        Welcome to Custom Creations
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        Your one-stop shop for custom clothing and sneakers.
                    </Typography>
                    <Box sx={{ mt: 4 }}>
                        <Button
                            component={Link}
                            to="/login"
                            variant="contained"
                            color="primary"
                            sx={{ m: 1 }}
                        >
                            Login
                        </Button>
                        <Button
                            component={Link}
                            to="/register"
                            variant="outlined"
                            color="secondary"
                            sx={{ m: 1 }}
                        >
                            Sign Up
                        </Button>
                    </Box>
                </Box>
            )}
        </Paper>
    );
};

export default Home;

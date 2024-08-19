import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Sidebar from './SideBar';

export default function Main() {
    const { user } = useAuth();
    const location = useLocation();

    // Extract the pathname and split into segments
    const pathSegments = location.pathname.split('/').filter(Boolean);
    // Get the last segment safely
    let pageTitle = pathSegments[pathSegments.length - 1] || '';

    // Check if the last segment looks like an ID (modify regex as needed)
    if (pageTitle && (pageTitle.length === 20 || pageTitle.length === 28)) {
        // It's likely an ID; use the previous segment as the page title
        pageTitle = pathSegments[pathSegments.length - 2] || 'Home'; // Default to 'Home' if there's no previous segment
    }

    // Define the sidebar links
    let links = [
        { text: 'Dashboard', href: '/dashboard' },
        { text: 'Bookings', href: '/bookings' },
        { text: 'Custom Orders', href: '/custom-orders' },
        { text: 'Chat', href: '/chat' },
    ];

    const dashboardSidebarLinks = [
        { text: 'Profile', href: 'profile' },
        { text: 'Settings', href: 'settings' },
    ];

    const bookingsSidebarLinks = [
        { text: 'Available Dates', href: '/bookings/available-dates' },
        { text: 'Booked Appointments', href: '/bookings/booked-appointments' },
    ];

    const customOrdersSidebarLinks = [
        { text: 'Order Types', href: '/custom-orders/order-types' },
        { text: 'Past Orders', href: '/custom-orders/past-orders' },
    ];

    switch (pageTitle.toLowerCase()) {
        case 'dashboard':
            links = dashboardSidebarLinks;
            break;
        case 'bookings':
            links = bookingsSidebarLinks;
            break;
        case 'custom-orders':
            links = customOrdersSidebarLinks;
            break;
        default:
            links = [];
    }
    console.log('pageTitle:', pageTitle);
    return (
        <Container sx={{ padding: '2em' }}>
            <Grid container spacing={2}
                sx={{
                    backgroundImage: pageTitle === "" ? `url(/assets/home.jpg)` : "", // Set the background image
                    backgroundSize: 'cover', // Cover the entire Box
                    backgroundPosition: 'center', // Center the image
                }}
            >
                <Grid item xs={3}>
                    {pageTitle.toLowerCase() === '' ? (
                        <Box
                            sx={{
                                backgroundImage: `url(/assets/home.jpg)`, // Set the background image
                                backgroundSize: 'cover', // Cover the entire Box
                                backgroundPosition: 'center', // Center the image
                                height: '52vh', // Make it take up full viewport height (adjust as needed)
                            }}
                        />
                    ) : (

                        <Sidebar
                            title={pageTitle}
                            links={links}
                        />
                    )}
                </Grid>
                <Grid item xs={9}>
                    <Outlet />
                </Grid>
            </Grid>
        </Container>
    );
}

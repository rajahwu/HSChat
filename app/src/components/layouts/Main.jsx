import { Container, Grid } from '@mui/material';
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
    const links = [
        { text: 'Dashboard', href: '/dashboard' },
        { text: 'Bookings', href: '/bookings' },
        { text: 'Requests', href: '/requests' },
        { text: 'Chat', href: '/chat' },
        { text: 'Settings', href: '/settings' }
    ];

    return (
        <Container sx={{ padding: '2em' }}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Sidebar
                        title={pageTitle}
                        links={links}
                    />
                </Grid>
                <Grid item xs={9}>
                    <Outlet />
                </Grid>
            </Grid>
        </Container>
    );
}

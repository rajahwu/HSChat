import { Grid } from '@mui/material';
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Sidebar from './SideBar';

export default function Main() {
    const { user } = useAuth();
    const location = useLocation();
    const page = location.pathname.split('/').slice(-1)[0];

    // Define the sidebar links
    const links = [
        { text: 'Dashboard', href: '/dashboard' },
        { text: 'Bookings', href: '/bookings' },
        { text: 'Requests', href: '/requests' },
        { text: 'Chat', href: '/chat' },
        { text: 'Settings', href: '/settings' }
    ];

    return (
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <Sidebar
                    title={page}
                    links={links}
                />
            </Grid>
            <Grid item xs={9}>
                <Outlet />
            </Grid>
        </Grid>
    );
}

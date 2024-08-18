import { Grid } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Sidebar from './SideBar';

export default function Main() {
    const { user } = useAuth();
    console.log(user);
    return (
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <Sidebar
                    title="Navigation"
                >
                    <ul style={{ listStyle: "none"}}>
                        <li>
                            <a href="/dashboard">Dashboard</a>
                        </li>
                        <li>
                            <a href="/bookings">Bookings</a>
                        </li>
                        <li>
                            <a href="/requests">Requests</a>
                        </li>
                        <li>
                            <a href="/chat">Chat</a>
                        </li>
                        <li>
                            <a href="/settings">Settings</a>
                        </li>
                    </ul>
                </Sidebar>
            </Grid>
            <Grid item xs={9}>
                <Outlet />
            </Grid>
        </Grid>
    )
}
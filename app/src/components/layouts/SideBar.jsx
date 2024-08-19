import { List, ListItem, ListItemText, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { fetchChatSessions } from '../../services/chat/fetchChatSessions';
import { Appointment } from '../../models/Appointment';
import { formatTimestamp } from '../../utils/formatTimestamp';

export default function Sidebar({ title, links }) {
    const [chatSessions, setChatSessions] = useState([]);
    const [appointments, setAppointments] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        if (user) {
            if (title.toLowerCase() === 'bookings') {
                Appointment.fetchByUserId(user.uid)
                    .then(appointments => {
                        setAppointments(appointments);
                    })
                    .catch(error => {
                        console.error('Error fetching appointments:', error);
                        // Handle the error appropriately (e.g., show an error message)
                    });
            } else if (title.toLowerCase() === 'chat') {
                fetchChatSessions(user.uid)
                    .then((sessions) => {
                        setChatSessions(sessions);
                    })
                    .catch((error) => {
                        console.error('Error fetching chat sessions:', error);
                    });
            }
        }
    }, [title, user]);

    return (
        <div>
            <Typography variant="h6" gutterBottom>
                {title}
            </Typography>
            <List>
                {title.toLowerCase() === 'bookings' && (
                    appointments.length > 0 ? (
                        appointments.map(appointment => (
                            <ListItem key={appointment.id}>
                                <ListItemText
                                    primary={`${appointment.name} - ${appointment.date.toLocaleDateString()} ${appointment.time}`}
                                    secondary={appointment.type}
                                />
                            </ListItem>
                        ))
                    ) : (
                        <Typography>No booked appointments</Typography>
                    )
                )}

                {title.toLowerCase() === 'chat' && (
                    chatSessions.length > 0 ? (
                        chatSessions.map((session) => (
                            <ListItem key={session.id} component={Link} to={`${user.displayName}/chat/${session.id}`}>
                                <ListItemText primary={session.title || formatTimestamp(session.timestamp) || `Session ${session.id}`} />
                            </ListItem>
                        ))
                    ) : (
                        <Typography>No chat sessions available</Typography>
                    )
                )}

                {title.toLowerCase() !== 'bookings' && title.toLowerCase() !== 'chat' && (
                    links.map((link) => (
                        <ListItem key={link.text} component={Link} to={`${user ? user.displayName : ""}/${link.href}`}>
                            <ListItemText primary={link.text} />
                        </ListItem>
                    ))
                )}
            </List>
        </div>
    );
};
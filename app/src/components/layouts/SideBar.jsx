import { List, ListItem, ListItemText, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { fetchChatSessions } from '../../services/chat/fetchChatSessions';

const Sidebar = ({ title, links }) => {
    const [chatSessions, setChatSessions] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        if (title.toLowerCase() === 'chat' && user) {
            console.log('Fetching chat sessions for user:', user.uid);
            fetchChatSessions(user.uid).then((sessions) => {
                console.log('Fetched sessions:', sessions);
                setChatSessions(sessions);
            }).catch((error) => {
                console.error('Error fetching chat sessions:', error);
            });
        }
    }, [title, user]);

    return (
        <div>
            <Typography variant="h6" gutterBottom>
                {title}
            </Typography>
            <List>
                {title.toLowerCase() === 'chat' ? (
                    chatSessions.length > 0 ? (
                        chatSessions.map((session) => (
                            <ListItem key={session.id} component={Link} to={`${user.displayName}/chat/${session.id}`}>
                                <ListItemText primary={session.title || `Session ${session.id}`} />
                            </ListItem>
                        ))
                    ) : (
                        <Typography>No chat sessions available</Typography>
                    )
                ) : (
                    links.map((link) => (
                        <ListItem key={link.text} component={Link} to={link.href} button>
                            <ListItemText primary={link.text} />
                        </ListItem>
                    ))
                )}
            </List>
        </div>
    );
};

export default Sidebar;

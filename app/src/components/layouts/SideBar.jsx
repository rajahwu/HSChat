// components/loyouts/SidBar
import { Box, List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar({ title, links }) {
    return (
        <Paper elevation={3}>
            <Box p={2}>
                {title && <Typography variant="h5">{title}</Typography>}
                <List>
                    {links.map((link) => (
                        <ListItem component={Link} to={link.href} key={link.text}>
                            <ListItemText primary={link.text} />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Paper>
    );
}

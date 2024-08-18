// components/loyouts/SidBar
import { Box, Paper, Typography } from "@mui/material";
import React from "react";

export default function SideBar({ title, children }) {
    return (
        <Paper elevation={3}>
            <Box p={2}>
                {title && <Typography variant="h5">{title}</Typography>}
                {children}
            </Box>
        </Paper>
    );
}
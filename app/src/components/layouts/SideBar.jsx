// components/loyouts/SidBar
import { Box, Paper, Typography } from "@mui/material";
import React from "react";

export default function SideBar() {
    return (
        <Paper elevation={3}>
        <Box p={2}>
            <Typography variant="h5">Sidebar</Typography>
        </Box>
        </Paper>
    );
}
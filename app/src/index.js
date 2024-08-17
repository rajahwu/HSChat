// index.js
import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";


const Content = ({ children }) => (
    <Paper elevation={3}>
        <Box p={2}>
            <Typography variant="h5">{children}</Typography>
        </Box>
    </Paper>
);

const Home = () => <Content>Home</Content>;
const Dashboard = () => <Content>Dashboard</Content>;
const Bookings = () => <Content>Bookings</Content>;
const Requests = () => <Content>Requests</Content>;
const Chat = () => <Content>Chat</Content>;
const Settings = () => <Content>Settings</Content>;

const domNode = document.getElementById("root");
const root = createRoot(domNode);

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: "dashboard", element: <Dashboard /> },
            { path: "bookings", element: <Bookings /> },
            { path: "requests", element: <Requests /> },
            { path: "settings", element: <Settings /> },
            { path: "chat", element: <Chat /> },

        ]
    }
]);

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
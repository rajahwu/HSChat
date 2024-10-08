// index.js
import { Box, Paper, Typography } from "@mui/material";
import { getAuth } from "firebase/auth";
import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import SignOut from "./components/auth/SignOut";
import Chat from "./components/chatbot/Chat";
import ChatSession from "./components/chatbot/ChatSession";
import Booking from "./components/root/Booking";
import CustomOrder from "./components/root/CustomOrder";
import Dashboard from "./components/root/Dashboard";
import Home from "./components/root/Home";
import Profile from "./components/root/Profile";
import Settings from "./components/root/Settings";
import { AuthProvider } from "./context/AuthContext";
import { action as LoginAction } from "./router/actions/auth/login";
import { action as RegisterAction } from "./router/actions/auth/register";
import { action as SignOutAction } from "./router/actions/auth/signout";
import { action as bookingsAction } from "./router/actions/bookings";
import { action as sendMessageAction } from "./router/actions/chatbot/sendMessage";
import { loader as chatLoader } from "./router/loaders/chatbot/chat";
import { loader as chatSessionLoader } from "./router/loaders/chatbot/session";
import { loader as dashboardLoader } from "./router/loaders/dashboard";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

const auth = getAuth();
const user = auth.currentUser;

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: "register", element: <Register />, action: RegisterAction },
            { path: "login", element: <Login />, action: LoginAction },
            {
                path: ":username", children: [
                    {
                        path: "dashboard",
                        element: <Dashboard />,
                        loader: async ({ params }) => {
                            const username = params.username;
                            return dashboardLoader({ username });
                        },
                    },
                    { path: "bookings", element: <Booking />, action: bookingsAction },
                    { path: "custom-orders", element: <CustomOrder /> },
                    { path: "settings", element: <Settings /> },
                    { path: "profile", element: <Profile /> },
                    { path: "chat", element: <Chat />, loader: chatLoader, action: sendMessageAction },
                    { path: "chat/:sessionId", element: <ChatSession />, loader: chatSessionLoader, action: sendMessageAction },
                    { path: "signout", element: <SignOut />, action: SignOutAction },
                ]
            },

        ]
    }
]);

root.render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>
);
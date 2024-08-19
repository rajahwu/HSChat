// components/chatbot/ChatSession.jsx
import { Typography } from "@mui/material";
import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import ChatWindow from "./ChatWindow";

export default function ChatSession() {
    const { user } = useAuth();
    const { sessionId } = useParams();
    const { messages } = useLoaderData();
    const date = new Date(messages[0].timestamp).toLocaleString();
    return (
        <div>
            <Typography variant="h6">{user && user.displayName} | Chat Session | {date || sessionId}</Typography>
            <ChatWindow messages={messages} />
        </div>
    );
}

// components/chatbot/ChatSession.jsx
import { Typography } from "@mui/material";
import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ChatWindow from "./ChatWindow";

export default function ChatSession() {
    const { sessionId } = useParams();
    const { messages } = useLoaderData();

    return (
        <div>
            <Typography variant="h6">Chat Session {sessionId}</Typography>
            <ChatWindow messages={messages} />
        </div>
    );
}

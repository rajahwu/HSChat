import { Box } from '@mui/material';
import React, { useState } from 'react';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';

export default function ChatWindow() {
    const [messages, setMessages] = useState([]);

    const handleSendMessage = (newMessage) => {
        // Add the user's message to the chat
        setMessages((prevMessages) => [
            ...prevMessages,
            { text: newMessage, sender: "user" }
        ]);

        // Simulate a bot response after a short delay
        setTimeout(() => {
            let botResponse = "";

            switch (newMessage.toLowerCase()) {
                case "hello":
                    botResponse = "Hello! How can I assist you?";
                    break;
                case "how are you?":
                    botResponse = "I'm just a bot, but I'm here to help!";
                    break;
                case "what can you do?":
                    botResponse = "I can help you with your bookings, requests, and more.";
                    break;
                default:
                    botResponse = "I'm not sure how to respond to that. Can you ask something else?";
            }

            // Add the bot's response to the chat
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: botResponse, sender: "bot" }
            ]);
        }, 1000); // Delay the bot's response by 1 second
    };

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'space-between',
            p: 2
        }}>
            <Box sx={{
                flexGrow: 1,
                overflowY: 'auto',
                mb: 2,
                borderRadius: 2,
                border: '1px solid grey'
            }}>
                {messages.map((message, index) => (
                    <ChatMessage key={index} message={message} />
                ))}
            </Box>
            <ChatInput onSendMessage={handleSendMessage} />
        </Box>
    );
}

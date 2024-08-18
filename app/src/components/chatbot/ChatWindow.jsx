import { Box } from '@mui/material';
import React, { useState } from 'react';
import { chatbotModel } from '../../services/gemini'; // Adjust the path as needed
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';

export default function ChatWindow() {
    const [messages, setMessages] = useState([]);

    const handleSendMessage = async (newMessage) => {
        // Add the user's message to the chat
        setMessages((prevMessages) => [
            ...prevMessages,
            { text: newMessage, sender: "user" }
        ]);

        try {
            // Fetch the bot's response from the AI model
            const result = await chatbotModel.generateContent(newMessage);
            console.log('AI response:', result); // Log the full response

            // Access the nested response object
            const response = result.response;
            if (
                response &&
                response.candidates &&
                response.candidates[0] &&
                response.candidates[0].content &&
                response.candidates[0].content.parts[0]
            ) {
                const botResponse = response.candidates[0].content.parts[0].text || "Sorry, I didn't understand that.";
                // Add the bot's response to the chat
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { text: botResponse, sender: "bot" }
                ]);
            } else {
                console.error('Unexpected response format:', response);
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { text: "Sorry, I didn't understand that.", sender: "bot" }
                ]);
            }
        } catch (error) {
            console.error("Error fetching bot response:", error);
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: "There was an error processing your request.", sender: "bot" }
            ]);
        }
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

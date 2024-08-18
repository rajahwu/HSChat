import React from "react";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import ChatWindow from "./ChatWindow";

const Chat = () => {
    const [messages, setMessages] = React.useState([]);

    const handleSendMessage = (message) => {
        setMessages([...messages, { text: message, sender: "user" }]);

        // Simulate bot response after a short delay
        setTimeout(() => {
            let botResponse = "";
            switch (message.toLowerCase()) {
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

            setMessages((prevMessages) => [
                ...prevMessages,
                { text: botResponse, sender: "bot" }
            ]);
        }, 200);
    };

    return (
        <ChatWindow>
            {messages.map((msg, index) => (
                <ChatMessage key={index} message={msg} />
            ))}
            <ChatInput onSendMessage={handleSendMessage} />
        </ChatWindow>
    );
};

export default Chat;

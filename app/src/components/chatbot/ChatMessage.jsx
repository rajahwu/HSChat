import { Box, Typography } from "@mui/material";
import React from "react";

const ChatMessage = ({ message }) => {
  console.log(message);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: message.sender === "user" ? "flex-end" : "flex-start",
        mb: 1
      }}
    >
      <Box
        sx={{
          backgroundColor: message.sender === "user" ? "#1976d2" : "#e0e0e0",
          color: message.sender === "user" ? "#fff" : "#000",
          borderRadius: "10px",
          padding: "10px",
          maxWidth: "60%"
        }}
      >
        <Typography variant="body1">{message.text || "No message content"}</Typography>
      </Box>
    </Box>
  );
};

export default ChatMessage;

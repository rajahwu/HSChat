// ChatInput.jsx
import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";

const ChatInput = ({ onSendMessage }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSendMessage(inputValue);
      setInputValue("");
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2, display: "flex" }}>
      <TextField
        fullWidth
        variant="outlined"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type a message..."
        sx={{ mr: 1 }}
      />
      <Button type="submit" variant="contained" color="primary">
        Send
      </Button>
    </Box>
  );
};

export default ChatInput;

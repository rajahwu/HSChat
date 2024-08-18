import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { Form } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const ChatInput = () => {
  const { user } = useAuth();
  const userId = user ? user.uid : "";
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <Box component={Form} method="post" sx={{ mt: 2, display: "flex" }}>
      <input type="hidden" name="userId" value={userId} />
      <TextField
        fullWidth
        name="message"
        variant="outlined"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type a message..."
        sx={{ mr: 1 }}
      />
      <Button type="submit" variant="contained" color="primary" disabled={!inputValue.trim()}>
        Send
      </Button>
    </Box>
  );
};

export default ChatInput;

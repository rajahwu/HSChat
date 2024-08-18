import { Box } from '@mui/material';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';

export default function ChatWindow() {
  const { user } = useAuth();
  const userId = user ? user.uid : null;
  const { messages } = useLoaderData();

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
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message}
            isUserMessage={message.senderId === userId}
          />
        ))}
      </Box>
      <ChatInput chatSessionId={messages[0]?.chatSessionId || null} />
    </Box>
  );
}

import { json, redirect } from 'react-router-dom';
import { ChatSession } from '../../../models/ChatSession';
import { Message } from '../../../models/Message';
import { auth } from '../../../services/firebase';
import { chatbotModel } from '../../../services/gemini';

export async function action({ request }) {
    const user = auth.currentUser;
    if (!user) {
        return json({ error: 'User not authenticated' }, { status: 401 });
    }
    try {
        const formData = await request.formData();
        const userMessage = formData.get('message');
        const userId = formData.get('userId');
        let chatSessionId = formData.get('chatSessionId');

        if (!chatSessionId) {
            // If no chatSessionId, create a new session
            const chatSession = await ChatSession.create(userId);
            chatSessionId = chatSession.id;
        }

        // Save the user's message to Firestore
        const userMessageObj = await Message.create(userMessage, userId, chatSessionId);

        // Send the message to the AI and get a response
        const chat = chatbotModel.startChat({ history: [{ role: "user", parts: [{ text: userMessage }] }] });
        const result = await chat.sendMessage(userMessage);
        const botResponse = result.response.text();

        // Save the bot's response to Firestore
        const botMessageObj = await Message.create(botResponse, 'bot', chatSessionId);

        // Redirect to the chat session page
        return redirect(`/${user.displayName}/chat/${chatSessionId}`);

    } catch (error) {
        console.error("Error handling chat action: ", error.message);
        return json({ error: error.message }, { status: 500 });
    }
}

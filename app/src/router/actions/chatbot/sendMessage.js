import { json, redirect } from 'react-router-dom';
import { ChatSession } from '../../../models/ChatSession';
import { Message } from '../../../models/Message';
import { chatbotModel } from '../../../services/gemini';
import { auth } from '../../../services/firebase';
export async function action({ request }) {
    const user = auth.currentUser;
    try {
        const formData = await request.formData();
        const userMessage = formData.get('message');
        const userId = formData.get('userId'); // Assuming you pass userId in the form data

        // Check if there's an active chat session for this user or create a new one
        let chatSessionId = formData.get('chatSessionId');
        if (!chatSessionId) {
            const chatSession = await ChatSession.create(userId);
            chatSessionId = chatSession.id;
        }

        // Save user's message to Firestore with chatSessionId
        const userMessageObj = await Message.create(userMessage, userId, chatSessionId);

        // Send the message to the AI and get a response
        const chat = chatbotModel.startChat({ history: [{ role: "user", parts: [{ text: userMessage }] }] });
        const result = await chat.sendMessage(userMessage);
        const botResponse = result.response.text();

        // Save the bot's message to Firestore with the same chatSessionId
        const botMessageObj = await Message.create(botResponse, 'bot', chatSessionId);

        return redirect(`${user.uid}/chat/${chatSessionId}`);
        // return json({ userMessage: userMessageObj, botMessage: botMessageObj, chatSessionId });

    } catch (error) {
        console.error("Error handling chat action: ", error.message);
        return json({ error: error.message }, { status: 500 });
    }
}

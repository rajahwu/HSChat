// router/loaders/chatbot/chatSession.js
import { Message } from '../../../models/Message';

export async function loader({ params }) {
    const { sessionId } = params;
    const messages = await Message.fetchByChatSessionId(sessionId);
    return { messages };
}

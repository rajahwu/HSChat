import { Message } from '../../../models/Message';
import { auth } from '../../../services/firebase';

export async function loader({ params }) {
  const userId = auth.currentUser ? auth.currentUser.uid : null;
  const sessionId = params.sessionId || null; // assuming sessionId is passed as a route parameter

  if (userId && sessionId) {
    const messagesFromFirestore = await Message.fetchBySessionId(sessionId);
    return { messages: messagesFromFirestore };
  }
  
  return { messages: [] };
}

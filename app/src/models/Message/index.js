import { addDoc, collection, deleteDoc, doc, getDocs, orderBy, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase';

class Message {
  constructor(id, text, senderId, chatSessionId, timestamp) {
    this.id = id;
    this.text = text;
    this.senderId = senderId;
    this.chatSessionId = chatSessionId;
    this.timestamp = timestamp;
    this.sender = senderId === 'bot' ? 'bot' : 'user';
  }

  // Create a new message in Firestore
  static async create(text, senderId, chatSessionId) {
    try {
      const timestamp = new Date();
      const messagesRef = collection(db, 'messages');
      const docRef = await addDoc(messagesRef, { text, senderId, chatSessionId, timestamp });
      return new Message(docRef.id, text, senderId, chatSessionId, timestamp);
    } catch (error) {
      console.error("Error creating message: ", error.message);
      throw new Error('Failed to create message');
    }
  }

  // Fetch all messages for a specific chat session
  static async fetchByChatSessionId(chatSessionId) {
    try {
      const messagesRef = collection(db, 'messages');
      const q = query(messagesRef, where('chatSessionId', '==', chatSessionId), orderBy('timestamp'));
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => new Message(
        doc.id,
        doc.data().text,
        doc.data().senderId,
        doc.data().chatSessionId,
        doc.data().timestamp.toDate()
      ));
    } catch (error) {
      console.error("Error fetching messages: ", error.message);
      throw new Error('Failed to fetch messages');
    }
  }

  // Delete a message by ID
  static async deleteById(id) {
    try {
      const docRef = doc(db, 'messages', id);
      await deleteDoc(docRef);
    } catch (error) {
      console.error("Error deleting message: ", error.message);
      throw new Error('Failed to delete message');
    }
  }
}

export { Message };

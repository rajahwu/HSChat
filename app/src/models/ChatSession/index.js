import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../services/firebase';

class ChatSession {
  constructor(id, userId, timestamp) {
    this.id = id;
    this.userId = userId;
    this.timestamp = timestamp;
  }

  // Create a new chat session
  static async create(userId) {
    try {
      const timestamp = new Date();
      const sessionsRef = collection(db, 'chatSessions');
      const docRef = await addDoc(sessionsRef, { userId, timestamp });
      return new ChatSession(docRef.id, userId, timestamp);
    } catch (error) {
      console.error("Error creating chat session: ", error.message);
      throw new Error('Failed to create chat session');
    }
  }

  // Get a chat session by ID
  static async getById(id) {
    try {
      const docRef = doc(db, 'chatSessions', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        return new ChatSession(docSnap.id, data.userId, data.timestamp.toDate());
      } else {
        throw new Error('Chat session not found');
      }
    } catch (error) {
      console.error("Error getting chat session: ", error.message);
      throw new Error('Failed to get chat session');
    }
  }

  // Update a chat session (e.g., to add message IDs)
  static async update(id, updates) {
    try {
      const docRef = doc(db, 'chatSessions', id);
      await updateDoc(docRef, updates);
    } catch (error) {
      console.error("Error updating chat session: ", error.message);
      throw new Error('Failed to update chat session');
    }
  }
}

export { ChatSession };

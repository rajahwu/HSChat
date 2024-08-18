import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase';

export async function fetchChatSessions(userId) {
    const sessionsRef = collection(db, 'chatSessions'); // Assuming 'chatSessions' is your collection
    const q = query(sessionsRef, where('userId', '==', userId));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

// src/models/Appointment/index.js
import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase';

class Appointment {
  constructor(id, name, email, date, time, notes, userId, duration, type) { // Add duration and type
    this.id = id;
    this.name = name;
    this.email = email;
    this.date = date;
    this.time = time;
    this.notes = notes;
    this.userId = userId;
    this.duration = duration;
    this.type = type;
  }

  // Create a new appointment in Firestore
  static async create(name, email, date, time, notes, userId, duration, type) { // Add duration and type
    try {
      const appointmentsRef = collection(db, 'appointments');
      const docRef = await addDoc(appointmentsRef, {
        name,
        email,
        date,
        time,
        notes,
        userId,
        duration,
        type
      });
      return new Appointment(docRef.id, name, email, date, time, notes, userId, duration, type);
    } catch (error) {
      console.error("Error creating appointment: ", error.message);
      throw new Error('Failed to create appointment');
    }
  }

  // Fetch all appointments for a specific user (you can adjust the query as needed)
  static async fetchByUserId(userId) {
    try {
      const appointmentsRef = collection(db, 'appointments');
      const q = query(appointmentsRef, where('userId', '==', userId));
      const querySnapshot = await getDocs(q);

      return querySnapshot.docs.map(doc => new Appointment(
        doc.id,
        doc.data().name,
        doc.data().email,
        doc.data().date.toDate(),
        doc.data().time,
        doc.data().notes,
        doc.data().userId,
        doc.data().duration, // Include duration
        doc.data().type      // Include type
      ));
    } catch (error) {
      console.error("Error fetching appointments: ", error.message);
      throw new Error('Failed to fetch appointments');
    }
  }

  // Delete an appointment by ID
  static async deleteById(id) {
    try {
      const docRef = doc(db, 'appointments', id);
      await deleteDoc(docRef);
    } catch (error) {
      console.error("Error deleting appointment: ", error.message);
      throw new Error('Failed to delete appointment');
    }
  }
}

export { Appointment };

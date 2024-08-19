import { Appointment } from "../../../models/Appointment";
import { auth } from "../../../services/firebase";

export async function action({ request }) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    if (auth.currentUser) {
        data.userId = auth.currentUser.uid;
    } else {
        return { status: 401 };
    }

    try {
        // Create the appointment using the updated model
        await Appointment.create(
            data.name,
            data.email,
            new Date(data.date),
            data.time,
            data.notes,
            data.userId,
            data.duration,
            data.type
        );

    } catch (error) {
        console.error('Error booking appointment:', error);
    }

    return null;
}
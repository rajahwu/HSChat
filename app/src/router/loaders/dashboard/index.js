import { json } from 'react-router-dom'; // Import the json function
import { Appointment } from '../../../models/Appointment';
import { User } from '../../../models/User';

export async function loader({ username }) {
    const user = await User.getByUsername(username);

    if (!user) {
        // Handle the case where the user is not authenticated
        return json({ error: 'User not authenticated' }, { status: 401 }); // Or redirect to login
    }

    try {
        const appointments = await Appointment.fetchByUserId(user.id);

        // Filter for future appointments and sort by date/time
        const futureAppointments = appointments.filter(appointment => {
            const appointmentDateTime = new Date(appointment.date); // This is in UTC
            appointmentDateTime.setHours(appointment.time.split(':')[0]);
            appointmentDateTime.setMinutes(appointment.time.split(':')[1]);

            const now = new Date(); // This is in your local timezone (EDT)

            // Convert 'now' to UTC for accurate comparison
            const nowUTC = new Date(now.getTime() + now.getTimezoneOffset() * 60000);

            return appointmentDateTime > nowUTC;
        });

        const nextAppointment = futureAppointments[0];

        if (nextAppointment) {
            return json({
                nextAppointment,
            });
        } else {
            return json({ nextAppointment: null }); // No upcoming appointments
        }

    } catch (error) {
        console.error("Error fetching appointments:", error);
        return json({ error: 'Failed to fetch appointments' }, { status: 500 });
    }
}
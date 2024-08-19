import { json } from 'react-router-dom'; // Import the json function
import { Appointment } from '../../../models/Appointment';
import { User } from '../../../models/User';

export async function loader({ username }) {
    console.log('Dashboard loader');
    const user = await User.getByUsername(username);
    console.log('User:', user);

    if (!user) {
        // Handle the case where the user is not authenticated
        return json({ error: 'User not authenticated' }, { status: 401 }); // Or redirect to login
    }

    try {
        const appointments = await Appointment.fetchByUserId(user.id);
        console.log('Appointments:', appointments);

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

        console.log('Future appointments:', futureAppointments);

        const nextAppointment = futureAppointments[0]; // Get the first (soonest) appointment

        console.log('Next appointment:', nextAppointment);
        if (nextAppointment) {
            // Calculate time remaining until the appointment
            const now = new Date();
            const appointmentDateTime = new Date(nextAppointment.date);
            appointmentDateTime.setHours(nextAppointment.time.split(':')[0]);
            appointmentDateTime.setMinutes(nextAppointment.time.split(':')[1]);
            const timeRemaining = appointmentDateTime - now;

            return json({
                nextAppointment,
                timeRemaining,
            });
        } else {
            return json({ nextAppointment: null }); // No upcoming appointments
        }

    } catch (error) {
        console.error("Error fetching appointments:", error);
        return json({ error: 'Failed to fetch appointments' }, { status: 500 });
    }
}
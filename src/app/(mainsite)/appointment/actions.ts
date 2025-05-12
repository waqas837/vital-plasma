'use server'

import db from '@/lib/db' // assuming this exports your mysql2 pool

export async function submitAppointmentRequest(
    name: string,
    email: string,
    date: any,
    time: any
) {
    try {
        const query = `
      INSERT INTO appointment_requests (name, email, appointment_date, appointment_time)
      VALUES (?, ?, ?, ?)
    `; 
       console.log("date", date)

        const values = [name, email, date, time];

        await db.execute(query, values); // db is your mysql2 pool (with promise support)

        return { success: true, message: 'Appointment submitted successfully.' };
    } catch (err: any) {
        console.error('Error inserting appointment:', err);
        return { success: false, message: 'Server error.' };
    }
}

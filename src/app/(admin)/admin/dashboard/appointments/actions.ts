'use server'

import db from '@/lib/db'; // assuming this exports your mysql2 pool

// Get all appointment requests
export async function getAppointmentRequests() {
    try {
        const query = `SELECT * FROM appointment_requests`;
        let [rows] = await db.execute(query); // db is your mysql2 pool (with promise support)
        return { success: true, appointments: rows, message: 'Appointments fetched successfully.' };
    } catch (err: any) {
        console.error('Error fetching appointments:', err);
        return { success: false, message: 'Server error.' };
    }
}

// Submit a message for a specific appointment
export async function submitMessage(id: number, message: string) {
    try {
        const query = `UPDATE appointment_requests SET message = ? WHERE id = ?`;
        await db.execute(query, [message, id]);
        return { success: true, message: 'Message submitted successfully.' };
    } catch (err: any) {
        console.error('Error submitting message:', err);
        return { success: false, message: 'Failed to submit message.' };
    }
}

// Confirm an appointment (set is_confirmed = 1)
export async function confirmAppointment(id: number, confirmValue: number) {
    try {
        const query = `UPDATE appointment_requests SET is_confirmed = ? WHERE id = ?`;
        await db.execute(query, [confirmValue, id]);
        return { success: true, message: 'Appointment status changed successfully.' };
    } catch (err: any) {
        console.error('Error confirming appointment:', err);
        return { success: false, message: 'Failed to confirm appointment.' };
    }
}

// Confirm an appointment (set donation_done = 1)
export async function have_donated_done(id: number, donation_done: number) {
    try {
        const query = `UPDATE appointment_requests SET donation_done = ? WHERE id = ?`;
        await db.execute(query, [donation_done, id]);
        return { success: true, message: 'Appointment status changed successfully.' };
    } catch (err: any) {
        console.error('Error confirming appointment:', err);
        return { success: false, message: 'Failed to confirm appointment.' };
    }
}

// Delete an appointment
export async function deleteAppointment(id: number) {
    try {
        const query = `DELETE FROM appointment_requests WHERE id = ?`;
        await db.execute(query, [id]);
        return { success: true, message: 'Appointment deleted successfully.' };
    } catch (err: any) {
        console.error('Error deleting appointment:', err);
        return { success: false, message: 'Failed to delete appointment.' };
    }
}

export async function getUserAppointments(userEmail: string) {
    try {
        const query = `SELECT * FROM appointment_requests WHERE email = ? ORDER BY appointment_date DESC`;
        const [rows] = await db.execute(query, [userEmail]);
        return rows;
    } catch (err) {
        console.error('Error fetching appointments:', err);
        return [];
    }
}
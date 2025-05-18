'use server';

import db from '@/lib/db';

export async function get_donation_history() {
    try {
        const query = `SELECT * FROM appointment_requests WHERE donation_done = 1`;
        const [rows] = await db.execute(query);
        return { success: true, rows, message: 'Donation history fetched.' };
    } catch (err: any) {
        console.error('Error fetching donation history:', err);
        return { success: false, message: 'Server error.' };
    }
}



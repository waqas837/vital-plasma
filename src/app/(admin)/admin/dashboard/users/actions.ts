'use server'

import db from '@/lib/db'; // assuming this exports your mysql2 pool

// Get all appointment requests
export async function getAllUsers() {
    try {
        const query = `SELECT * FROM users`;
        let [rows] = await db.execute(query); // db is your mysql2 pool (with promise support)
        return { success: true, users: rows, message: 'users fetched successfully.' };
    } catch (err: any) {
        console.error('Error fetching users:', err);
        return { success: false, message: 'Server error.' };
    }
}


export async function deleteSingleUser(id: any) {
    try {
        const query = `DELETE FROM users WHERE id=?`;
        let [rows] = await db.execute(query, [id]); // db is your mysql2 pool (with promise support)
        return { success: true, message: 'users deleted successfully.' };
    } catch (err: any) {
        console.error('Error while deleting users:', err);
        return { success: false, message: 'Server error.' };
    }
}



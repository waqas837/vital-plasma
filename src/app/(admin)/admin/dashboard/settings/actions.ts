'use server';

import db from '@/lib/db'; // Adjust import to your DB connection file

// Fetch admin info by email (assuming only one admin for now)
export async function getAdminInfo(email: string) {
    try {
        const [rows] = await db.execute('SELECT id, email FROM admin WHERE email = ?', [email]);
        const admin = (rows as any)[0];
        if (!admin) return { success: false, message: 'Admin not found' };
        return { success: true, admin };
    } catch (error) {
        console.error('Error fetching admin info:', error);
        return { success: false, message: 'DB error' };
    }
}

// Update admin info (name and email)
export async function updateAdminInfo(id: number, email: string) {
    try {
        // Assuming the table has only email and password, no 'name' column. Adjust if you have name.
        await db.execute('UPDATE admin SET email = ? WHERE id = ?', [email, id]);
        return { success: true };
    } catch (error) {
        console.error('Error updating admin info:', error);
        return { success: false, message: 'DB error' };
    }
}

// Change admin password (hash before saving)
export async function changeAdminPassword(id: number, newPassword: string) {
    try {
        await db.execute('UPDATE admin SET password = ? WHERE id = ?', [newPassword, id]);
        return { success: true };
    } catch (error) {
        console.error('Error updating password:', error);
        return { success: false, message: 'DB error' };
    }
}

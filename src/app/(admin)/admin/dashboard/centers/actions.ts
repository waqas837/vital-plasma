'use server';

import db from '@/lib/db';

// Hospital CRUD

export async function insertHospital(name: string, location: string) {
    try {
        const query = `INSERT INTO hospitals (name, location) VALUES (?, ?)`;
        const [result] = await db.execute(query, [name, location]);
        return { success: true, message: 'Hospital inserted successfully.' };
    } catch (err: any) {
        console.error('Error inserting hospital:', err);
        return { success: false, message: 'Database error.' };
    }
}



export async function getHospitals() {
    try {
        const query = `SELECT id, name, location FROM hospitals`;
        const [rows] = await db.execute(query);
        return { success: true, hospitals: rows as any[] };
    } catch (err: any) {
        console.error('Error fetching hospitals:', err);
        return { success: false, hospitals: [], message: 'Database error.' };
    }
}


export async function deleteHospital(id: number) {
    try {
        const query = `DELETE FROM hospitals WHERE id = ?`;
        await db.execute(query, [id]);
        return { success: true, message: 'Hospital deleted successfully.' };
    } catch (err: any) {
        console.error('Error deleting hospital:', err);
        return { success: false, message: 'Database error.' };
    }
}


export async function updateHospital(id: number, name: string, location: string) {
    try {
        const query = `UPDATE hospitals SET name = ?, location = ? WHERE id = ?`;
        await db.execute(query, [name, location, id]);
        return { success: true, message: 'Hospital updated successfully.' };
    } catch (err: any) {
        console.error('Error updating hospital:', err);
        return { success: false, message: 'Database error.' };
    }
}
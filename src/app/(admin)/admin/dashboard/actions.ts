'use server';

import db from '@/lib/db'; // Your MySQL connection pool

export async function getDashboardCounts() {
    try {
        // Query total users
        const [usersResult] = await db.execute('SELECT COUNT(*) as totalUsers FROM users');
        const totalUsers = (usersResult as any)[0].totalUsers;

        // Query total appointments (is_confirmed = 1)
        const [appointmentsResult] = await db.execute(
            'SELECT COUNT(*) as totalAppointments FROM appointment_requests WHERE is_confirmed = 1'
        );
        const totalAppointments = (appointmentsResult as any)[0].totalAppointments;

        // Query total donations (is_confirmed = 1 AND donation_done = 1)
        const [donationsResult] = await db.execute(
            'SELECT COUNT(*) as totalDonations FROM appointment_requests WHERE is_confirmed = 1 AND donation_done = 1'
        );
        const totalDonations = (donationsResult as any)[0].totalDonations;

        return {
            success: true,
            data: { totalUsers, totalAppointments, totalDonations },
        };
    } catch (error) {
        console.error('Error fetching dashboard counts:', error);
        return { success: false, data: null, message: 'Database error.' };
    }
}

'use server'

// import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'  // Import the jsonwebtoken library
import db from '@/lib/db'

// Secret key for signing JWT - you should store this in an environment variable
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'
// loginAction
export async function adminLoginAction(
    email: string,
    password: string
) {


    try {
        // Check if the user exists in the database
        const [rows] = await db.query('SELECT * FROM admin WHERE email = ?', [email])

        // If no user found, return an error message
        if ((rows as any[]).length === 0) {
            return { success: false, message: 'User not found.' }
        }

        const user = (rows as any[])[0]

        // Compare the provided password with the stored hashed password
        const passwordMatch = password === user.password

        if (!passwordMatch) {
            return { success: false, message: 'Incorrect password.' }
        }

        // Generate a JWT token
        const token: any = jwt.sign({ email: user.email, id: user.id }, JWT_SECRET, { expiresIn: '1h' })

        return { success: true, message: 'Login successful.', token }
    } catch (err) {
        console.error(err)
        return { success: false, message: 'Server error.' }
    }
}

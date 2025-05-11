'use server'

import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'  // Import the jsonwebtoken library
import db from '@/lib/db'

// Secret key for signing JWT - you should store this in an environment variable
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

// signupAction 
export async function signupAction(formData: {
    name: string
    email: string
    password: string
}): Promise<{ success: boolean; message: string; token?: string }> {
    const { name, email, password } = formData

    try {
        // Check if the user already exists
        const [rows] = await db.query('SELECT id FROM users WHERE email = ?', [email])
        if ((rows as any[]).length > 0) {
            return { success: false, message: 'Email already registered.' }
        }

        // Hash the user's password
        const hashedPassword = await bcrypt.hash(password, 10)

        // Insert the new user into the database
        await db.execute(
            'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
            [name, email, hashedPassword]
        )

        // Generate a JWT token after successful signup
        const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '1h' })

        // Return success message along with the token
        return { success: true, message: 'Account created successfully.', token }
    } catch (err) {
        console.error(err)
        return { success: false, message: 'Server error.' }
    }
}


// loginAction
export async function loginAction(formData: {
    email: string
    password: string
}): Promise<{ success: boolean; message: string; token?: string }> {
    const { email, password } = formData

    try {
        // Check if the user exists in the database
        const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email])

        // If no user found, return an error message
        if ((rows as any[]).length === 0) {
            return { success: false, message: 'User not found.' }
        }

        const user = (rows as any[])[0]

        // Compare the provided password with the stored hashed password
        const passwordMatch = await bcrypt.compare(password, user.password)

        if (!passwordMatch) {
            return { success: false, message: 'Incorrect password.' }
        }

        // Generate a JWT token
        const token = jwt.sign({ email: user.email, id: user.id }, JWT_SECRET, { expiresIn: '1h' })

        return { success: true, message: 'Login successful.', token }
    } catch (err) {
        console.error(err)
        return { success: false, message: 'Server error.' }
    }
}

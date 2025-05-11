'use client'

import { useState, FormEvent, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { signupAction } from './actions'

const SignupPage = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [isPending, startTransition] = useTransition()
    const router = useRouter()

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        setError('')
        setSuccess('')

        if (!name || !email || !password || !confirmPassword) {
            setError('Please fill in all fields.')
            return
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match.')
            return
        }

        startTransition(async () => {
            const res: any = await signupAction({ name, email, password })

            if (res.success) {
                setSuccess(res.message)
                setName('')
                setEmail('')
                setPassword('')
                setConfirmPassword('')

                // Store the token in localStorage (or cookies, for security)
                localStorage.setItem('authToken', res.token!)

                // Redirect user to the profile page after successful signup
                router.push('/profile')
            } else {
                setError(res.message)
            }
        })
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-[#FA812F] to-[#FA812F] p-6 md:p-8 flex items-center justify-center">
            <div className="relative max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8">
                <h1 className="text-3xl font-extrabold text-[#FA812F] text-center mb-6">
                    Create a New Account
                </h1>

                {error && <p className="text-red-600 text-center mb-4">{error}</p>}
                {success && <p className="text-green-600 text-center mb-4">{success}</p>}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-4 rounded-xl border-2 border-[#FA812F] shadow-lg"
                    />
                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-4 rounded-xl border-2 border-[#FA812F] shadow-lg"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-4 rounded-xl border-2 border-[#FA812F] shadow-lg"
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full p-4 rounded-xl border-2 border-[#FA812F] shadow-lg"
                    />

                    <button
                        type="submit"
                        disabled={isPending}
                        className="w-full p-4 rounded-full bg-[#FA812F] text-white text-xl font-semibold shadow-xl"
                    >
                        {isPending ? 'Signing up...' : 'Sign Up'}
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-sm text-[#FA812F]">
                        Already have an account?{' '}
                        <a href="/login" className="font-semibold text-[#FA812F] hover:underline">
                            Login
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SignupPage

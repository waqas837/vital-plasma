"use client"
import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

const SignupPage = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [error, setError] = useState<string>("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!name || !email || !password || !confirmPassword) {
            setError("Please fill in all fields.");
        } else if (password !== confirmPassword) {
            setError("Passwords do not match.");
        } else {
            setError("");
            // Handle successful signup (redirect, API call, etc.)
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-emerald-100 to-emerald-200 p-6 md:p-8 flex items-center justify-center">
            <motion.div
                className="relative max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
            >
                <motion.h1
                    className="text-3xl font-extrabold text-emerald-800 text-center mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    Create a New Account
                </motion.h1>

                {error && (
                    <motion.div
                        className="text-red-600 text-center mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p>{error}</p>
                    </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.input
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full p-4 rounded-xl border-2 border-emerald-300 shadow-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none transition"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    />

                    <motion.input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full p-4 rounded-xl border-2 border-emerald-300 shadow-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none transition"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    />

                    <motion.input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full p-4 rounded-xl border-2 border-emerald-300 shadow-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none transition"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    />

                    <motion.input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        className="w-full p-4 rounded-xl border-2 border-emerald-300 shadow-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none transition"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                    />

                    <motion.button
                        type="submit"
                        className="w-full p-4 rounded-full bg-emerald-600 text-white text-xl font-semibold shadow-xl hover:bg-emerald-700 transition duration-200 ease-in-out"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.8, type: "spring" }}
                    >
                        Sign Up
                    </motion.button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-sm text-emerald-600">
                        Already have an account?{" "}
                        <a href="/login" className="font-semibold text-emerald-700 hover:underline">
                            Login
                        </a>
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default SignupPage;

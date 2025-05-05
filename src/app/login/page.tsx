"use client"
import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

const LoginPage = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Add your login logic here
        if (!email || !password) {
            setError("Please fill in all fields.");
        } else {
            setError("");
            // Handle successful login (redirect, API call, etc.)
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-[#FA812F] to-[#FA812F] p-6 md:p-8 flex items-center justify-center">
            <motion.div
                className="relative max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
            >
                <motion.h1
                    className="text-3xl font-extrabold text-[#FA812F] text-center mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    Login to Your Account
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
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full p-4 rounded-xl border-2 border-[#FA812F] shadow-lg focus:ring-2 focus:ring-[#FA812F] focus:outline-none transition"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    />

                    <motion.input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full p-4 rounded-xl border-2 border-[#FA812F] shadow-lg focus:ring-2 focus:ring-[#FA812F] focus:outline-none transition"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    />

                    <motion.button
                        type="submit"
                        className="w-full p-4 rounded-full bg-[#FA812F] text-white text-xl font-semibold shadow-xl hover:bg-[#FA812F] transition duration-200 ease-in-out"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.6, type: "spring" }}
                    >
                        Login
                    </motion.button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-sm text-[#FA812F]">
                        Do not have an account?{" "}
                        <a href="/signup" className="font-semibold text-[#FA812F] hover:underline">
                            Sign Up
                        </a>
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default LoginPage;

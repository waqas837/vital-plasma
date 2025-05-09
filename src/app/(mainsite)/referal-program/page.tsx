'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ReferralProgramPage() {
    return (
        <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden min-h-screen">
            {/* Decorative Background Orbs */}
            <motion.div
                initial={{ top: "-20%", left: "-20%", opacity: 0 }}
                animate={{ top: "-20%", left: "-20%", opacity: 0.3 }}
                transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }}
                className="absolute w-96 h-96 bg-[#FA812F] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"
            />
            <motion.div
                initial={{ bottom: "-20%", right: "-20%", opacity: 0 }}
                animate={{ bottom: "-20%", right: "-20%", opacity: 0.3 }}
                transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }}
                className="absolute w-96 h-96 bg-[#AF1B31] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"
            />

            <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-32 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-5xl md:text-6xl font-bold text-gray-900"
                >
                    Earn $100 for Every New Referral
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
                >
                    Share your unique referral code and earn a $100 bonus for each new donor who completes their first donation.
                </motion.p>

                <div className="mt-12 grid md:grid-cols-2 gap-8 text-left">
                    {/* How It Works */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold text-[#FA812F] mb-4">How It Works</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li>• Log in to your donor account to find your unique referral code.</li>
                            <li>• Share your code with local friends and family.</li>
                            <li>• Referrals must enter your code when scheduling their appointment.</li>
                            <li>• Earn a $100 bonus for each new referral after their first donation.</li>
                            <li>• Bonus payments are available 7-14 days after the referral’s first donation.</li>
                            <li>• Track your referrals in your donor account.</li>
                        </ul>
                    </div>

                    {/* Eligibility */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold text-[#AF1B31] mb-4">Eligibility</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li>• You must be a qualified donor to participate.</li>
                            <li>• Referrals must live within a 30-mile radius of a Vital Plasma donation center.</li>
                            <li>• Employees of Vital Plasma and its affiliates are not eligible for referral bonuses.</li>
                        </ul>
                    </div>
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="mt-10 flex flex-col sm:flex-row gap-5 justify-center"
                >
                    <Link href="/appointment">
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(250, 129, 47, 0.5)' }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-[#FA812F] to-[#AF1B31] hover:from-[#AF1B31] hover:to-[#FA812F] text-white font-medium px-8 py-3.5 rounded-lg shadow-md transition-all duration-300"
                        >
                            Schedule an Appointment
                        </motion.button>
                    </Link>

                    <Link href="/login" className="text-[#AF1B31] hover:text-[#FA812F] font-medium underline transition-colors text-lg flex items-center">
                        Log In to Your Account
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

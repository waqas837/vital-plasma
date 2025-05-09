'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function DonationProcessPage() {
    return (
        <section className="relative bg-gradient-to-br from-[#f7f7f7] to-[#e1e1e1] overflow-hidden min-h-screen pb-16">
            {/* Decorative Background Orbs */}
            <motion.div
                initial={{ top: "-20%", left: "-20%", opacity: 0 }}
                animate={{ top: "-20%", left: "-20%", opacity: 0.3 }}
                transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }}
                className="absolute w-96 h-96 bg-[#FA812F] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
            />
            <motion.div
                initial={{ bottom: "-20%", right: "-20%", opacity: 0 }}
                animate={{ bottom: "-20%", right: "-20%", opacity: 0.3 }}
                transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }}
                className="absolute w-96 h-96 bg-[#AF1B31] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-5xl md:text-6xl font-semibold text-gray-800"
                >
                    How to Donate Plasma
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
                >
                    Plasma donation is a simple process that saves lives. Here's what you can expect during your visit.
                </motion.p>

                {/* Donation Process Steps */}
                <div className="mt-16 space-y-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                        <h2 className="text-4xl font-semibold text-[#FA812F] mb-6">Step 1: Pre-Donation Screening</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Before donating, you’ll undergo a quick screening to ensure you're healthy and eligible. This includes a physical checkup and medical history review.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                        <h2 className="text-4xl font-semibold text-[#AF1B31] mb-6">Step 2: Donation Process</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Once cleared, we begin the donation. You’ll be reclined comfortably while blood is drawn. The plasma is separated, and the remaining blood components are returned to your body.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                        <h2 className="text-4xl font-semibold text-[#FA812F] mb-6">Step 3: Post-Donation Recovery</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            After your donation, we’ll monitor you for a short time. Make sure to rest and hydrate before leaving the donation center.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.9 }}
                        className="bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                        <h2 className="text-4xl font-semibold text-[#AF1B31] mb-6">Step 4: Receive Compensation</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Your generosity will be rewarded! Receive compensation for your donation via direct deposit or prepaid card within 7-14 days after your donation.
                        </p>
                    </motion.div>
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="mt-12 flex flex-col sm:flex-row gap-5 justify-center"
                >
                    <Link href="/appointment">
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(250, 129, 47, 0.5)' }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-[#FA812F] to-[#AF1B31] hover:from-[#AF1B31] hover:to-[#FA812F] text-white font-medium px-8 py-4 rounded-lg shadow-lg transition-all duration-300"
                        >
                            Schedule Your Donation
                        </motion.button>
                    </Link>

                    <Link href="/faq" className="text-[#AF1B31] hover:text-[#FA812F] font-medium underline transition-colors text-lg flex items-center">
                        Learn More
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

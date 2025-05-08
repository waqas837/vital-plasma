'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function GetPaidPage() {
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
                    Get Paid to Save Lives
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
                >
                    Earn up to <span className="font-semibold text-[#AF1B31]">$710</span> in 8 weeks as a new plasma donor, and even more as a platelet donor.
                </motion.p>

                {/* Compensation Breakdown */}
                <div className="mt-12 grid md:grid-cols-2 gap-8 text-left">
                    {/* New Donors */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold text-[#FA812F] mb-4">New Plasma Donors</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li>• 1st Donation: $50</li>
                            <li>• 2nd Donation: $50</li>
                            <li>• Bonus (if 1st & 2nd donations completed within 30 days): +$50</li>
                            <li>• 3rd to 8th Donations: $60 each</li>
                            <li>• Dependable Donor Bonus (after 8 donations within 56 days): +$200</li>
                            <li className="font-bold mt-2">Total: $710 over 8 weeks</li>
                        </ul>
                    </div>

                    {/* Platelet Donors */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold text-[#AF1B31] mb-4">Platelet Donors</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li>• Complete 2 approved plasma donations</li>
                            <li>• Qualification period: 14-19 days</li>
                            <li>• 3rd to 5th Donations (Platelet): $240 each</li>
                            <li className="font-bold mt-2">Total: $870 over 8 weeks</li>
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
                            Schedule Appointment
                        </motion.button>
                    </Link>

                    <Link href="/faq" className="text-[#AF1B31] hover:text-[#FA812F] font-medium underline transition-colors text-lg flex items-center">
                        Learn More
                    </Link>
                </motion.div>

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.8 }}
                    className="mt-16 flex justify-center"
                >
                    <div className="relative w-80 h-80 md:w-96 md:h-96">
                        <Image
                            src="/get-paid.jpg" // Ensure this image exists in your public directory
                            alt="Donor receiving compensation"
                            fill
                            className="rounded-2xl object-cover shadow-lg"
                            priority
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

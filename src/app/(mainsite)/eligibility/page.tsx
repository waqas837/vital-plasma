'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function EligibilityPage() {
    return (
        <section className="relative bg-gradient-to-br from-white to-gray-100 overflow-hidden min-h-screen pb-16">
            {/* Decorative Background Orbs */}
            <motion.div
                initial={{ top: "-20%", left: "-20%", opacity: 0 }}
                animate={{ top: "-20%", left: "-20%", opacity: 0.2 }}
                transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }}
                className="absolute w-96 h-96 bg-[#FA812F] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
            />
            <motion.div
                initial={{ bottom: "-20%", right: "-20%", opacity: 0 }}
                animate={{ bottom: "-20%", right: "-20%", opacity: 0.2 }}
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
                    Plasma Donation Eligibility
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
                >
                    Ensure you meet the following criteria before donating plasma. Your safety and the safety of recipients are our top priorities.
                </motion.p>

                {/* Eligibility Criteria */}
                <div className="mt-16 space-y-10 text-left max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="bg-white p-8 rounded-xl shadow-lg"
                    >
                        <h2 className="text-2xl font-semibold text-[#FA812F] mb-4">Basic Requirements</h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>Be at least 18 years old.</li>
                            <li>Weigh at least 110 pounds (50 kilograms).</li>
                            <li>Be in good general health.</li>
                            <li>Pass a medical examination.</li>
                            <li>Complete an extensive medical history screening.</li>
                            <li>Test negative for transmissible viruses including hepatitis and HIV.</li>
                            <li>Follow a recommended diet including 50 to 80 grams of daily protein.</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="bg-white p-8 rounded-xl shadow-lg"
                    >
                        <h2 className="text-2xl font-semibold text-[#AF1B31] mb-4">Temporary Deferrals</h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>Recent tattoos or piercings (within the last 4 months).</li>
                            <li>Recent travel to certain countries.</li>
                            <li>Recent vaccinations.</li>
                            <li>Cold, flu, or other acute illnesses.</li>
                            <li>Pregnancy or recent childbirth.</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="bg-white p-8 rounded-xl shadow-lg"
                    >
                        <h2 className="text-2xl font-semibold text-[#FA812F] mb-4">Permanent Disqualifications</h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>Positive test for HIV, hepatitis B, or hepatitis C.</li>
                            <li>History of certain cancers.</li>
                            <li>Chronic illnesses affecting the heart, lungs, liver, or kidneys.</li>
                            <li>Organ or bone marrow transplant recipients.</li>
                            <li>Use of non-prescribed injectable drugs.</li>
                        </ul>
                    </motion.div>
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.9 }}
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

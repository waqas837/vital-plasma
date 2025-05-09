'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function YourImpactPage() {
    return (
        <section className="relative bg-white overflow-hidden min-h-screen pb-16">
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
                    Your Impact as a Plasma Donor
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
                >
                    Every plasma donation you make contributes to life-saving treatments for individuals battling various health conditions. Here's how your generosity makes a difference.
                </motion.p>

                {/* Impact Statistics */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="bg-white p-8 rounded-xl shadow-lg"
                    >
                        <h2 className="text-4xl font-bold text-[#FA812F] mb-4">50+</h2>
                        <p className="text-lg text-gray-700">
                            Plasma-derived medicines are used to treat over 50 different diseases, including immune deficiencies and bleeding disorders.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="bg-white p-8 rounded-xl shadow-lg"
                    >
                        <h2 className="text-4xl font-bold text-[#AF1B31] mb-4">17,000+</h2>
                        <p className="text-lg text-gray-700">
                            In England alone, over 17,000 people rely on medicines made from donated plasma each year.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="bg-white p-8 rounded-xl shadow-lg"
                    >
                        <h2 className="text-4xl font-bold text-[#FA812F] mb-4">1 Donation</h2>
                        <p className="text-lg text-gray-700">
                            A single plasma donation can provide enough plasma to create multiple treatments, potentially saving several lives.
                        </p>
                    </motion.div>
                </div>

                {/* Donor Story */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.9 }}
                    className="mt-20 max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg text-left"
                >
                    <h2 className="text-2xl font-semibold text-[#AF1B31] mb-4">Donor Spotlight: Shaun Brennan</h2>
                    <p className="text-lg text-gray-700 mb-4">
                        Shaun Brennan, an Army veteran from Memphis, Tennessee, has made over 500 donations of blood, platelets, and plasma since 1985. His dedication has not only saved countless lives but also earned him recognition, including the Presidential Award for Excellence from the American Red Cross.
                    </p>
                    <p className="text-lg text-gray-700">
                        Shaun's story exemplifies the profound impact one individual can have through consistent plasma donations.
                    </p>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.1 }}
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

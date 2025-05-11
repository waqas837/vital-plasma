'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
    HeartHandshake,
    Thermometer,
    Syringe,
    HandCoins,
} from 'lucide-react';

const steps = [
    {
        title: 'Pre-Donation Screening',
        description:
            'A quick health screening ensures you’re eligible to donate. This includes a check-up and health history review.',
        icon: <Thermometer className="w-8 h-8 text-[#FA812F]" />,
    },
    {
        title: 'Donation Process',
        description:
            'You relax while blood is drawn and plasma is separated. Remaining components are returned to your body.',
        icon: <Syringe className="w-8 h-8 text-[#AF1B31]" />,
    },
    {
        title: 'Post-Donation Recovery',
        description:
            'After your donation, you’ll be monitored briefly and encouraged to rest and hydrate.',
        icon: <HeartHandshake className="w-8 h-8 text-[#FA812F]" />,
    },
    {
        title: 'Receive Compensation',
        description:
            'Get rewarded! Compensation is sent via prepaid card or direct deposit within 7–14 days.',
        icon: <HandCoins className="w-8 h-8 text-[#AF1B31]" />,
    },
];

export default function DonationProcessPage() {
    return (
        <section className="min-h-screen bg-white px-6 py-16 md:px-20">
            <div className="max-w-5xl mx-auto text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FA812F] to-[#AF1B31]"
                >
                    How to Donate Plasma
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto"
                >
                    Donating plasma is simple and life-saving. Here’s what you can expect during the process:
                </motion.p>

                <div className="mt-14 grid gap-8 md:grid-cols-2">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.3 + index * 0.15 }}
                            className="flex items-start gap-5 p-6 bg-white border border-gray-100 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                        >
                            <div className="flex-shrink-0">{step.icon}</div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-gray-600">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="mt-14 flex flex-col sm:flex-row justify-center items-center gap-6"
                >
                    <Link href="/appointment">
                        <button className="bg-gradient-to-r from-[#FA812F] to-[#AF1B31] text-white font-medium px-8 py-3 rounded-lg hover:opacity-90 transition-all duration-300">
                            Schedule Your Donation
                        </button>
                    </Link>

                    <Link
                        href="/faq"
                        className="text-[#AF1B31] hover:text-[#FA812F] font-medium underline transition-colors text-base"
                    >
                        Learn More
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import {
    Clock,
    HeartHandshake,
    Wallet,
} from "lucide-react";

const DonationSteps = () => {
    const controls = useAnimation();

    useEffect(() => {
        controls.start("visible");
    }, [controls]);

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const stepItem = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    };

    const pulseCircle = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.6,
                type: "spring",
                damping: 8,
                stiffness: 100,
            },
        },
        hover: {
            scale: 1.05,
            boxShadow: "0 0 20px rgba(215, 31, 58, 0.4)",
            transition: { duration: 0.3 },
        },
    };

    const zigzagPath = (index: number) => ({
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeInOut",
                delay: 0.2 + index * 0.3,
            },
        },
    });

    const steps = [
        {
            number: 1,
            title: "Schedule",
            description: "Book your convenient donation slot in minutes",
            icon: <Clock className="h-10 w-10 text-[#FA812F]" />,
        },
        {
            number: 2,
            title: "Donate",
            description: "Quick, safe, and comfortable process",
            icon: <HeartHandshake className="h-10 w-10 text-[#FA812F]" />,
        },
        {
            number: 3,
            title: "Get Paid",
            description: "Receive compensation for your valuable donation",
            icon: <Wallet className="h-10 w-10 text-[#FA812F]" />,
        },
    ];

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] p-4 md:p-8">
            {/* Background glow */}
            <motion.div
                initial={{ x: -100, y: -100, rotate: 0 }}
                animate={{ x: 0, y: 0, rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[#FA812F]/10 blur-[120px]"
            />
            <motion.div
                initial={{ x: 100, y: 100, rotate: 0 }}
                animate={{ x: 0, y: 0, rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                className="absolute -right-40 bottom-1/3 h-96 w-96 rounded-full bg-[#FA812F]/10 blur-[120px]"
            />

            <motion.div
                initial="hidden"
                animate="visible"
                variants={container}
                className="relative mx-auto flex max-w-5xl flex-col items-center justify-center gap-12 rounded-3xl bg-white p-8 md:p-12 shadow-xl border border-white/10"
            >
                <motion.div
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
                    className="text-center space-y-3"
                >
                    <h1 className="text-3xl font-bold text-[#FA812F] md:text-4xl lg:text-5xl">
                        Simple Donation Process
                    </h1>
                    <p className="text-gray-600 max-w-lg mx-auto">
                        Join thousands of donors helping save lives every day
                    </p>
                </motion.div>

                <div className="relative w-full">
                    <div className="relative z-10 grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                variants={stepItem}
                                className="relative flex flex-col items-center gap-6"
                            >
                                {/* Icon */}
                                <div className="flex items-center justify-center">{step.icon}</div>

                                {/* Number circle */}
                                <motion.div
                                    variants={pulseCircle}
                                    animate="visible"
                                    whileHover="hover"
                                    className="z-10 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#FA812F] to-[#AF1B31] text-lg font-bold text-white shadow-md"
                                >
                                    {step.number}
                                </motion.div>

                                {/* Text */}
                                <div className="text-center space-y-2">
                                    <h3 className="text-xl font-semibold text-[#FA812F] md:text-2xl">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm md:text-base flex justify-center items-center gap-1">
                                        {step.number === 3 && (
                                            <motion.span
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ type: "spring", delay: 0.6 }}
                                                className="text-lg font-bold text-[#FA812F]"
                                            >
                                                $60
                                            </motion.span>
                                        )}
                                        {step.description}
                                    </p>
                                </div>

                                {/* Arrows (desktop) */}
                                {index < 2 && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.6 }}
                                        className="absolute -right-6 top-10 hidden h-16 w-16 md:block"
                                    >
                                        <svg
                                            width="100%"
                                            height="100%"
                                            viewBox="0 0 80 64"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <motion.path
                                                d="M0 32 H50 L30 12 M50 32 L30 52"
                                                stroke="url(#arrowGradient)"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                variants={zigzagPath(index)}
                                                initial="hidden"
                                                animate="visible"
                                            />
                                            <defs>
                                                <linearGradient
                                                    id="arrowGradient"
                                                    x1="0%"
                                                    y1="0%"
                                                    x2="100%"
                                                    y2="0%"
                                                >
                                                    <stop offset="0%" stopColor="#FA812F" stopOpacity="0.8" />
                                                    <stop offset="100%" stopColor="#AF1B31" stopOpacity="0.8" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* Arrows (mobile) */}
                    <div className="mt-2 md:hidden">
                        <div className="flex flex-col items-center">
                            {[0, 1].map((index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 + index * 0.6 }}
                                    className="h-16 w-16 -mt-4 -mb-8"
                                >
                                    <svg
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 64 64"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <motion.path
                                            d="M32 0 V40 L26 34 M32 40 L38 34"
                                            stroke="url(#arrowGradient)"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            variants={zigzagPath(index)}
                                            initial="hidden"
                                            animate="visible"
                                        />
                                    </svg>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA Button */}
                <motion.button
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.8, type: "spring", stiffness: 200 }}
                    whileHover={{
                        scale: 1.03,
                        boxShadow: "0 10px 25px -5px rgba(215, 31, 58, 0.4)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-8 rounded-full bg-gradient-to-r from-[#FA812F] to-[#AF1B31] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all md:px-10 md:py-4 md:text-xl"
                >
                    Start Donating Now
                    <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: 4 }}
                        className="ml-2 inline-block"
                    >
                        →
                    </motion.span>
                </motion.button>
            </motion.div>
        </div>
    );
};

export default DonationSteps;

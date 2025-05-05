"use client"
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const DonationSteps = () => {
    const controls = useAnimation();

    useEffect(() => {
        controls.start("visible");
    }, [controls]);

    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const stepItem = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    };

    const zigzagPath = (index: number) => ({
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                duration: 1.2,
                ease: "easeInOut",
                delay: 0.3 + index * 0.5,
            },
        },
    });

    const pulseCircle = {
        hidden: { scale: 0.5, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.8,
                type: "spring",
                damping: 10,
                stiffness: 100,
            },
        },
        hover: {
            scale: 1.1,
            boxShadow: "0 0 20px rgba(16, 185, 129, 0.6)",
            transition: { duration: 0.4 },
        },
    };

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#FA812F]to-[#FA812F]/80 p-4 md:p-8">
            {/* Background decorative elements */}
            <motion.div
                initial={{ x: -100, y: -100, rotate: 0 }}
                animate={{ x: 0, y: 0, rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[#FA812F]/30 blur-[100px]"
            ></motion.div>
            <motion.div
                initial={{ x: 100, y: 100, rotate: 0 }}
                animate={{ x: 0, y: 0, rotate: -360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                className="absolute -right-40 bottom-1/3 h-96 w-96 rounded-full bg-[#FA812F]/30 blur-[100px]"
            ></motion.div>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={container}
                className="relative mx-auto flex max-w-5xl flex-col items-center justify-center gap-12 rounded-3xl bg-white/90 p-8 md:p-12 shadow-xl backdrop-blur-sm border border-white/20"
            >
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                    className="text-center space-y-2"
                >
                    <h1 className="text-3xl font-bold text-[#FA812F] md:text-4xl lg:text-5xl">
                        Simple Donation Process
                    </h1>
                    <p className="text-[#FA812F]/80 max-w-lg mx-auto">
                        Join thousands of donors helping save lives every day
                    </p>
                </motion.div>

                <div className="relative w-full">
                    {/* Steps container */}
                    <div className="relative z-10 grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-8">
                        {/* Step 1 */}
                        <motion.div
                            variants={stepItem}
                            className="relative flex flex-col items-center gap-6"
                        >
                            <motion.div
                                variants={pulseCircle}
                                animate="visible"
                                whileHover="hover"
                                className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#FA812F] to-[#FA812F] text-2xl font-bold text-white shadow-lg"
                            >
                                1
                            </motion.div>
                            <div className="flex flex-col items-center text-center space-y-3">
                                <motion.h3
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-xl font-semibold text-[#FA812F] md:text-2xl"
                                >
                                    Schedule
                                </motion.h3>
                                <motion.p
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                    className="text-[#FA812F]/80 text-sm md:text-base"
                                >
                                    Book your convenient donation slot in minutes
                                </motion.p>
                            </div>

                            {/* Desktop arrow */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
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
                                        variants={zigzagPath(0)}
                                        initial="hidden"
                                        animate="visible"
                                    />
                                    <defs>
                                        <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                                            <stop offset="100%" stopColor="#059669" stopOpacity="0.8" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </motion.div>
                        </motion.div>

                        {/* Step 2 */}
                        <motion.div
                            variants={stepItem}
                            className="relative flex flex-col items-center gap-6"
                        >
                            <motion.div
                                variants={pulseCircle}
                                animate="visible"
                                whileHover="hover"
                                className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#FA812F] to-[#FA812F] text-2xl font-bold text-white shadow-lg"
                            >
                                2
                            </motion.div>
                            <div className="flex flex-col items-center text-center space-y-3">
                                <motion.h3
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-xl font-semibold text-[#FA812F] md:text-2xl"
                                >
                                    Donate
                                </motion.h3>
                                <motion.p
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                    className="text-[#FA812F]/80 text-sm md:text-base"
                                >
                                    Quick, safe, and comfortable process
                                </motion.p>
                            </div>

                            {/* Desktop arrow */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.3 }}
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
                                        variants={zigzagPath(1)}
                                        initial="hidden"
                                        animate="visible"
                                    />
                                </svg>
                            </motion.div>
                        </motion.div>

                        {/* Step 3 */}
                        <motion.div
                            variants={stepItem}
                            className="relative flex flex-col items-center gap-6"
                        >
                            <motion.div
                                variants={pulseCircle}
                                animate="visible"
                                whileHover="hover"
                                className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#FA812F] to-[#FA812F] text-2xl font-bold text-white shadow-lg"
                            >
                                3
                            </motion.div>
                            <div className="flex flex-col items-center text-center space-y-3">
                                <motion.h3
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-xl font-semibold text-[#FA812F] md:text-2xl"
                                >
                                    Get Paid
                                </motion.h3>
                                <motion.p
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                    className="flex items-center gap-2 text-[#FA812F]/80 text-sm md:text-base"
                                >
                                    <motion.span
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", delay: 0.8 }}
                                        className="text-xl font-bold text-[#FA812F]"
                                    >
                                        $60
                                    </motion.span>
                                    per donation
                                </motion.p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Mobile arrows - now properly spaced between steps */}
                    <div className="mt-2 md:hidden">
                        <div className="flex flex-col items-center">
                            {/* Arrow after step 1 */}
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1 }}
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
                                        variants={zigzagPath(0)}
                                        initial="hidden"
                                        animate="visible"
                                    />
                                </svg>
                            </motion.div>

                            {/* Arrow after step 2 */}
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.8 }}
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
                                        variants={zigzagPath(1)}
                                        initial="hidden"
                                        animate="visible"
                                    />
                                </svg>
                            </motion.div>
                        </div>
                    </div>
                </div>

                <motion.button
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 2.5, type: "spring", stiffness: 200 }}
                    whileHover={{
                        scale: 1.05,
                        background: "linear-gradient(to right, #059669, #10b981)",
                        boxShadow: "0 10px 25px -5px rgba(5, 150, 105, 0.4)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-8 rounded-full bg-gradient-to-r from-[#d71f3a] to-[#d71f3a] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:shadow-[#d71f3a]/50 md:px-10 md:py-4 md:text-xl"
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
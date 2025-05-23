"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function MainHero() {
    return (
        <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
            {/* Gradient Blur Background Orbs */}
            <motion.div
                initial={{ top: "-32%", left: "-32%", opacity: 0 }}
                animate={{ top: "-32%", left: "-32%", opacity: 0.3 }}
                transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }}
                className="absolute w-96 h-96 bg-[#FA812F] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"
            ></motion.div>

            <motion.div
                initial={{ bottom: "-32%", right: "-32%", opacity: 0 }}
                animate={{ bottom: "-32%", right: "-32%", opacity: 0.3 }}
                transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }}
                className="absolute w-96 h-96 bg-[#AF1B31] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"
            ></motion.div>

            <motion.div
                initial={{ top: "50%", left: "50%", opacity: 0 }}
                animate={{ top: "50%", left: "50%", opacity: 0.2 }}
                transition={{ duration: 5, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }}
                className="absolute w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
            ></motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="relative max-w-7xl mx-auto px-6 py-20 md:py-32 flex flex-col-reverse md:flex-row items-center justify-between gap-12 z-10"
            >
                {/* Left Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="-mt-20 text-center md:text-left md:w-1/2 space-y-8"
                >
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
                        <span className="text-gray-900">Give </span>
                        <span className="bg-gradient-to-r from-[#FA812F] to-[#AF1B31] bg-clip-text text-transparent font-serif italic">
                            Life.
                        </span>{" "}
                        <span className="text-gray-900">Get </span>
                        <span className="bg-gradient-to-r from-[#FA812F] to-[#AF1B31] bg-clip-text text-transparent font-serif italic">
                            Paid.
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 max-w-lg mx-auto md:mx-0 leading-relaxed">
                        Transform lives with <span className="font-semibold text-gray-800">VitalPlasma</span>. Earn while making a meaningful difference in your community.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-5 justify-center md:justify-start">
                        <Link href="/appointment">
                            <motion.div
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 10px 25px -5px rgba(250, 129, 47, 0.5)",
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-[#FA812F] to-[#AF1B31] hover:from-[#AF1B31] hover:to-[#FA812F] text-white font-medium px-8 py-3.5 rounded-lg shadow-md transition-all duration-300 inline-block"
                            >
                                Schedule Appointment
                            </motion.div>
                        </Link>

                        <Link
                            href={"/login"}
                            className="text-[#AF1B31] hover:text-[#FA812F] font-medium transition-colors flex items-center gap-2"
                        >
                            <span>Existing donor?</span>
                            <span className="underline">Sign in</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </Link>
                    </div>
                </motion.div>

                {/* Right Hero Image */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1 }}
                    className="mb-8 md:mb-0 md:w-1/2 flex justify-center z-10 -mt-10"
                >
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FA812F] to-[#AF1B31] rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300 -z-10 animate-pulse-slow"></div>
                        <div className="rounded-full overflow-hidden w-72 h-72 relative border-4 border-gradient-to-br from-[#FA812F] to-[#AF1B31] shadow-xl group-hover:shadow-2xl transition-all duration-300">
                            <Image
                                src="/hero.jpg"
                                alt="Happy plasma donor"
                                layout="fill"
                                objectFit="cover"
                                priority
                                className="group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}

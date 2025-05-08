"use client"
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const DonorTestimonials = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    // Auto-rotate testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "Regular Donor, 3 years",
            quote: "The staff is always so friendly and the process is quick. I'm in and out in under an hour, and the compensation helps with my bills!",
            avatar: "/api/placeholder/150/150",
            image: "/api/placeholder/600/400",
        },
        {
            id: 2,
            name: "Michael Chen",
            role: "New Donor",
            quote: "I was nervous about donating for the first time, but everyone made me feel comfortable. The facility is clean and modern, and I'll definitely be back.",
            avatar: "/api/placeholder/150/150",
            image: "/api/placeholder/600/400",
        },
        {
            id: 3,
            name: "Jessica Williams",
            role: "Regular Donor, 1 year",
            quote: "Donating has become part of my routine. It's an easy way to help others while earning some extra money. The online scheduling system is super convenient!",
            avatar: "/api/placeholder/150/150",
            image: "/api/placeholder/600/400",
        },
    ];

    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    const scaleIn = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    return (
        <div className="relative bg-gradient-to-br from-[#FA812F]/10 to-[#FA812F]/5 py-20">
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <svg
                    className="absolute -top-24 -right-24 h-64 w-64 text-[#FA812F]/10"
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill="currentColor"
                        d="M41.8,-71.7C52.4,-62.9,58.1,-47.8,64.6,-33.5C71.1,-19.3,78.4,-6,78.1,7.2C77.9,20.4,70.1,33.5,61.2,46.3C52.3,59.1,42.3,71.6,29,78.5C15.7,85.4,-0.8,86.6,-16.8,83.5C-32.8,80.4,-48.2,73,-59.1,61.2C-70,49.4,-76.3,33.3,-79.1,16.8C-81.9,0.2,-81.2,-16.6,-75.6,-31.4C-70,-46.2,-59.5,-58.9,-46.3,-66.8C-33.1,-74.6,-17.1,-77.6,-0.9,-76.2C15.4,-74.8,31.2,-80.5,41.8,-71.7Z"
                        transform="translate(100 100)"
                    />
                </svg>
                <svg
                    className="absolute -bottom-20 -left-20 h-64 w-64 text-[#FA812F]/10"
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill="currentColor"
                        d="M45.3,-76.5C59.9,-71.1,73.5,-60.4,81.2,-46.5C88.9,-32.6,90.7,-16.3,87.6,-1.8C84.6,12.7,76.7,25.5,69.4,39.6C62.1,53.7,55.4,69.1,43.9,77.3C32.4,85.5,16.2,86.4,0.6,85.5C-15,84.5,-30,81.7,-43.9,74.9C-57.8,68.1,-70.7,57.4,-77.7,43.9C-84.7,30.5,-85.9,15.2,-84.7,0.7C-83.4,-13.9,-79.7,-27.8,-72.6,-40.9C-65.6,-54.1,-55.1,-66.4,-42.1,-72.6C-29.1,-78.7,-14.6,-78.7,0.6,-79.8C15.8,-80.8,31.7,-82.8,45.3,-76.5Z"
                        transform="translate(100 100)"
                    />
                </svg>
            </div>

            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-4 text-3xl font-bold text-[#FA812F] md:text-4xl lg:text-5xl">
                        Donor Stories
                    </h2>
                    <p className="mx-auto max-w-2xl text-[#FA812F]/80">
                        Hear from our community of donors about their experiences
                    </p>
                </motion.div>

                <div className="mx-auto max-w-6xl">
                    {/* Testimonial section */}
                    <div className="relative">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={testimonial.id}
                                className={`${activeTestimonial === index ? "block" : "hidden"}`}
                            >
                                <div className="grid grid-cols-1 gap-10 rounded-2xl bg-white p-6 shadow-xl md:grid-cols-2 md:p-10">
                                    <motion.div
                                        key={`image-${index}`}
                                        initial="hidden"
                                        animate={activeTestimonial === index ? "visible" : "hidden"}
                                        variants={scaleIn}
                                        className="relative h-64 overflow-hidden rounded-xl md:h-96"
                                    >
                                        <img
                                            src={testimonial.image}
                                            alt={`${testimonial.name}'s story`}
                                            className="h-full w-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    </motion.div>

                                    <motion.div
                                        key={`content-${index}`}
                                        initial="hidden"
                                        animate={activeTestimonial === index ? "visible" : "hidden"}
                                        variants={fadeIn}
                                        className="flex flex-col justify-center"
                                    >
                                        <div className="mb-6 flex items-center">
                                            <div className="mr-4 h-16 w-16 overflow-hidden rounded-full border-4 border-[#FA812F]/20">
                                                <img
                                                    src={testimonial.avatar}
                                                    alt={testimonial.name}
                                                    className="h-full w-full object-cover"
                                                />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-[#FA812F]">{testimonial.name}</h3>
                                                <p className="text-[#FA812F]/70">{testimonial.role}</p>
                                            </div>
                                        </div>

                                        <div className="mb-6">
                                            <svg
                                                className="h-8 w-8 text-[#FA812F]/30"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.51.88-3.995 3.356-3.995 5.849h4v10h-10zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.511.88-3.996 3.356-3.996 5.849h4v10h-10z" />
                                            </svg>
                                        </div>

                                        <p className="mb-8 text-lg text-[#FA812F]/80 italic">{testimonial.quote}</p>


                                    </motion.div>
                                </div>
                            </div>
                        ))}

                        {/* Testimonial navigation */}
                        <div className="mt-8 flex justify-center space-x-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveTestimonial(index)}
                                    className={`h-3 w-3 rounded-full transition-all ${activeTestimonial === index
                                        ? "bg-[#FA812F] scale-125"
                                        : "bg-[#FA812F]/30 hover:bg-[#FA812F]/50"
                                        }`}
                                    aria-label={`View testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Join the community CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-16 text-center"
                    >
                        <h3 className="mb-4 text-2xl font-bold text-[#FA812F]">
                            Join Our Donor Community Today
                        </h3>
                        <p className="mb-8 mx-auto max-w-2xl text-[#FA812F]/80">
                            Become part of our growing community of donors making a difference while earning extra income.
                        </p>
                        <a
                            href="#join"
                            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-lg font-semibold text-[#FA812F] shadow-lg transition-all border-2 border-[#FA812F] hover:bg-[#FA812F] hover:text-white cursor-pointer relative z-10"
                        >
                            Join Now
                        </a>

                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default DonorTestimonials;
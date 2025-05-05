"use client"

import { Phone, CalendarCheck, LogIn, UserCheck, HeartHandshake, DollarSign, Info, MapPin, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

// TopBar Component
const TopBar = () => {
    return (
        <div className="bg-[#FA812F] text-white">
            <div className="container mx-auto flex flex-col sm:flex-row justify-center sm:justify-end items-stretch sm:items-center gap-2 sm:gap-6 px-4 py-3">
                <Link
                    href="tel:224-332-3870"
                    className="flex items-center justify-center text-lg font-medium text-white hover:text-[#FA812F] transition-colors px-4 py-2 sm:py-0"
                >
                    <Phone className="size-5 mr-2" />
                    Call 224-332-3870
                </Link>

                <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                    <Link
                        href="/appointment"
                        className="flex items-center justify-center rounded-lg border-2 border-white bg-white px-5 py-3 sm:py-2 text-lg font-medium text-[#FA812F] transition-all hover:bg-[#FA812F]hover:shadow-md duration-300 w-full sm:w-auto"
                    >
                        <CalendarCheck className="size-5 mr-2" />
                        Schedule Appointment
                    </Link>

                    <Link
                        href="/login"
                        className="flex items-center justify-center rounded-lg border-2 border-[#FA812F] bg-[#FA812F] px-5 py-3 sm:py-2 text-lg font-medium text-[#FA812F] transition-all hover:bg-white hover:shadow-md duration-300 w-full sm:w-auto"
                    >
                        <LogIn className="size-5 mr-2" />
                        Log In
                    </Link>
                </div>
            </div>
        </div>
    );
}

type DropdownItem = {
    href: string;
    label: string;
    icon?: React.ReactNode;
};

type NavItem = {
    href?: string;
    label: string;
    icon?: React.ReactNode;
    dropdown?: DropdownItem[];
};

const navItems: NavItem[] = [
    {
        label: "Who it's for",
        icon: <UserCheck className="size-5" />,
        dropdown: [
            { href: "/eligibility", label: "Eligibility", icon: <UserCheck className="size-4" /> },
            { href: "/requirements", label: "Requirements", icon: <UserCheck className="size-4" /> },
        ],
    },
    {
        label: "Give Life",
        icon: <HeartHandshake className="size-5" />,
        dropdown: [
            { href: "/donation-process", label: "Donation Process", icon: <HeartHandshake className="size-4" /> },
            { href: "/impact", label: "Your Impact", icon: <HeartHandshake className="size-4" /> },
        ],
    },
    {
        href: "/get-paid",
        label: "Get Paid",
        icon: <DollarSign className="size-5" />
    },
    {
        href: "/about-us",
        label: "About Us",
        icon: <Info className="size-5" />
    },
    {
        href: "/locations",
        label: "Locations",
        icon: <MapPin className="size-5" />
    },
];

const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <TopBar />
            <nav className="border-b border-gray-200 bg-white shadow-sm">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <Link href="/" className="flex items-center">
                            <img src="/logo.png" alt="Vital Plasma Logo" className="h-12 w-auto" />
                        </Link>


                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-8">
                            {navItems.map((item) => (
                                <motion.div
                                    key={item.label}
                                    className="relative group"
                                    onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="flex items-center gap-2">
                                        {item.href ? (
                                            <Link
                                                href={item.href}
                                                className="flex items-center gap-2 py-2 text-lg font-medium text-gray-700 hover:text-[#FA812F] transition-colors"
                                            >
                                                {item.icon}
                                                {item.label}
                                            </Link>
                                        ) : (
                                            <button
                                                className="flex items-center gap-2 py-2 text-lg font-medium text-gray-700 hover:text-[#FA812F] transition-colors"
                                            >
                                                {item.icon}
                                                {item.label}
                                                <ChevronDown className={`size-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                                            </button>
                                        )}
                                    </div>

                                    {item.dropdown && activeDropdown === item.label && (
                                        <motion.div
                                            className="absolute left-0 top-full z-50 mt-1 w-56 rounded-lg bg-white py-2 shadow-xl ring-1 ring-gray-200"
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {item.dropdown.map((dropdownItem) => (
                                                <Link
                                                    key={dropdownItem.href}
                                                    href={dropdownItem.href}
                                                    className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-[#FA812F]transition-colors"
                                                >
                                                    {dropdownItem.icon}
                                                    {dropdownItem.label}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden p-2 text-gray-700 hover:text-[#FA812F] rounded-md hover:bg-gray-100"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {mobileMenuOpen && (
                        <motion.div
                            className="lg:hidden mt-4 space-y-1"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {navItems.map((item) => (
                                <div key={item.label} className="border-t border-gray-100 first:border-t-0">
                                    <div className="flex flex-col">
                                        {item.href ? (
                                            <Link
                                                href={item.href}
                                                className="flex items-center gap-3 px-4 py-4 text-lg font-medium text-gray-800 hover:text-[#FA812F] hover:bg-[#FA812F]rounded-lg"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                {item.icon}
                                                {item.label}
                                            </Link>
                                        ) : (
                                            <>
                                                <button
                                                    className="flex items-center justify-between gap-3 px-4 py-4 text-lg font-medium text-gray-800 hover:text-[#FA812F] hover:bg-[#FA812F]rounded-lg"
                                                    onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                                                >
                                                    <div className="flex items-center gap-3">
                                                        {item.icon}
                                                        {item.label}
                                                    </div>
                                                    <ChevronDown className={`size-5 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                                                </button>
                                                {item.dropdown && activeDropdown === item.label && (
                                                    <motion.div
                                                        className="ml-8 space-y-1 py-1"
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        exit={{ opacity: 0 }}
                                                        transition={{ duration: 0.2 }}
                                                    >
                                                        {item.dropdown.map((dropdownItem) => (
                                                            <Link
                                                                key={dropdownItem.href}
                                                                href={dropdownItem.href}
                                                                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-[#FA812F] hover:bg-[#FA812F]rounded-lg"
                                                                onClick={() => setMobileMenuOpen(false)}
                                                            >
                                                                {dropdownItem.icon}
                                                                {dropdownItem.label}
                                                            </Link>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </div>
            </nav>
        </>
    );
};

export default Navbar;

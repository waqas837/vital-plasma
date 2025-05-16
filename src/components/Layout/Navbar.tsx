'use client';

import { Phone, CalendarCheck, LogIn, UserCheck, HeartHandshake, DollarSign, Info, MapPin, ChevronDown, Menu, X, LogOut } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";

// TopBar Component
const TopBar = ({ isLoggedIn, setIsLoggedIn }: { isLoggedIn: boolean, setIsLoggedIn: (value: boolean) => void }) => {
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        setIsLoggedIn(!!localStorage.getItem('authToken'));
    }, [pathname, setIsLoggedIn]);

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        setIsLoggedIn(false);
        router.push('/login');
    };

    return (
        <div className="bg-[#FA812F] text-white">
            <div className="container mx-auto flex flex-col sm:flex-row justify-center sm:justify-end items-stretch sm:items-center gap-2 sm:gap-6 px-4 py-3">
                <Link
                    href="tel:(844) 908-4825"
                    className="flex items-center justify-center text-lg font-medium text-white hover:text-white transition-colors px-4 py-2 sm:py-0"
                >
                    <Phone className="size-5 mr-2" />
                    Call (844) 908-4825
                </Link>

                <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                    <Link
                        href="/appointment"
                        className="flex items-center justify-center rounded-lg bg-gradient-to-br from-[#FA812F] to-[#AF1B31] text-white px-5 py-3 sm:py-2 text-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
                    >
                        <CalendarCheck className="size-5 mr-2" />
                        Schedule Appointment
                    </Link>

                    {isLoggedIn ? (
                        <button
                            onClick={handleLogout}
                            className="flex items-center justify-center rounded-lg bg-[#FA812F] text-white border-2 border-[#FA812F] px-5 py-3 sm:py-2 text-lg font-medium hover:bg-white hover:text-[#FA812F] hover:shadow-md transition-all duration-300"
                        >
                            <LogOut className="size-5 mr-2" />
                            Log Out
                        </button>
                    ) : (
                        <Link
                            href="/login"
                            className="flex items-center justify-center rounded-lg bg-[#FA812F] text-white border-2 border-[#FA812F] px-5 py-3 sm:py-2 text-lg font-medium hover:bg-white hover:text-[#FA812F] hover:shadow-md transition-all duration-300"
                        >
                            <LogIn className="size-5 mr-2" />
                            Log In
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    // Check auth status on mount and when route changes
    useEffect(() => {
        setIsLoggedIn(!!localStorage.getItem('authToken'));
    }, [pathname]);

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        setIsLoggedIn(false);
        router.push('/login');
    };

    const navItems = [
        {
            label: "Who it's for",
            icon: <UserCheck className="size-5" />,
            dropdown: [
                { href: "/eligibility", label: "Eligibility", icon: <UserCheck className="size-4" /> },
                { href: "/referal-program", label: "Referral Program", icon: <UserCheck className="size-4" /> },
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

    return (
        <>
            <TopBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <nav className="border-b-2 border-transparent bg-white shadow-sm" style={{ borderImage: 'linear-gradient(to right, #FA812F, #AF1B31)', borderImageSlice: 1 }}>
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
                                                className="flex items-center gap-2 py-2 px-4 text-lg font-medium text-gray-700 rounded-md transition-all duration-300 hover:text-white hover:bg-gradient-to-br from-[#FA812F] to-[#AF1B31] shadow-sm hover:shadow-md"
                                            >
                                                {item.icon}
                                                {item.label}
                                            </Link>
                                        ) : (
                                            <button
                                                className="flex items-center gap-2 py-2 px-4 text-lg font-medium text-gray-700 rounded-md transition-all duration-300 hover:text-white hover:bg-gradient-to-br from-[#FA812F] to-[#AF1B31] shadow-sm hover:shadow-md"
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
                                                    className="flex items-center gap-3 px-4 py-3 text-gray-700 rounded-md hover:text-white hover:bg-gradient-to-br from-[#FA812F] to-[#AF1B31] transition-all duration-300"
                                                >
                                                    {dropdownItem.icon}
                                                    {dropdownItem.label}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </motion.div>
                            ))}

                            {/* {isLoggedIn && (
                                <button
                                    onClick={handleLogout}
                                    className="flex items-center gap-2 py-2 px-4 text-lg font-medium text-gray-700 rounded-md transition-all duration-300 hover:text-white hover:bg-gradient-to-br from-[#FA812F] to-[#AF1B31] shadow-sm hover:shadow-md"
                                >
                                    <LogOut className="size-5" />
                                    Log Out
                                </button>
                            )} */}
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
                                                className="flex items-center gap-3 px-4 py-4 text-lg font-medium text-gray-800 hover:text-white hover:bg-[#FA812F] hover:bg-opacity-80 rounded-lg"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                {item.icon}
                                                {item.label}
                                            </Link>
                                        ) : (
                                            <>
                                                <button
                                                    className="flex items-center justify-between gap-3 px-4 py-4 text-lg font-medium text-gray-800 hover:text-white hover:bg-[#FA812F] hover:bg-opacity-80 rounded-lg"
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
                                                                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-white hover:bg-[#FA812F] hover:bg-opacity-80 rounded-lg"
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

                            {isLoggedIn && (
                                <button
                                    onClick={handleLogout}
                                    className="flex items-center gap-3 px-4 py-4 text-lg font-medium text-gray-800 hover:text-white hover:bg-[#FA812F] hover:bg-opacity-80 rounded-lg w-full"
                                >
                                    <LogOut className="size-5" />
                                    Log Out
                                </button>
                            )}
                        </motion.div>
                    )}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
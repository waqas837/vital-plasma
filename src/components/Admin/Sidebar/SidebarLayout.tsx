"use client";

import { useState, useEffect, ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import {
    Menu,
    X,
    ChevronLeft,
    ChevronRight,
    LayoutDashboard,
    CalendarCheck,
    Users,
    Droplet,
    Building,
    MessageCircle,
    Settings,
    LogOut,
} from "lucide-react";

interface SidebarLayoutProps {
    children: ReactNode;
}

export default function SidebarLayout({ children }: SidebarLayoutProps) {
    const [collapsed, setCollapsed] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const handleResize = () => {
            if (typeof window !== "undefined") {
                if (window.innerWidth < 768) {
                    setIsMobile(true);
                    setCollapsed(true);
                } else {
                    setIsMobile(false);
                    setCollapsed(false);
                }
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("adminToken");
        router.push("/admin/login");
    };

    const navItems = [
        { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
        { label: "Appointment Requests", href: "/admin/dashboard/appointments", icon: CalendarCheck },
        { label: "All Users", href: "/admin/dashboard/users", icon: Users },
        { label: "Donation History", href: "/admin/dashboard/donations", icon: Droplet },
        { label: "Hospitals / Centers", href: "/admin/dashboard/centers", icon: Building },
        { label: "Notifications", href: "/admin/dashboard/notifications", icon: MessageCircle },
        { label: "Settings", href: "/admin/dashboard/settings", icon: Settings },
    ];

    const toggleSidebar = () => setCollapsed(!collapsed);

    return (
        <div className="flex min-h-screen bg-neutral-50 font-sans">
            {isMobile && !collapsed && (
                <div
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
                    onClick={toggleSidebar}
                    aria-hidden="true"
                />
            )}

            <aside
                className={`
        fixed md:relative z-40 min-h-screen bg-white shadow-lg overflow-hidden
        transition-[width,transform] duration-300 ease-in-out
        ${isMobile
                        ? collapsed
                            ? "-translate-x-full w-0"
                            : "translate-x-0 w-4/5 max-w-xs"
                        : collapsed
                            ? "w-20"
                            : "w-72"
                    }
    `}
            >

                <div className="flex flex-col h-full">
                    {/* Sidebar Header */}
                    <div className="flex items-center justify-between p-4">
                        {!collapsed && (
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-orange-500 rounded-md flex items-center justify-center">
                                    <span className="text-white font-bold text-xl">A</span>
                                </div>
                                <h2 className="text-2xl font-bold text-orange-500">Admin Panel</h2>
                            </div>
                        )}

                        {collapsed && !isMobile && (
                            <div className="w-full flex justify-center">
                                <div className="w-10 h-10 bg-orange-500 rounded-md flex items-center justify-center">
                                    <span className="text-white font-bold text-xl">A</span>
                                </div>
                            </div>
                        )}

                        {!isMobile && (
                            <button
                                onClick={toggleSidebar}
                                className="p-1 rounded-md text-gray-500 hover:bg-gray-100"
                            >
                                {collapsed ? (
                                    <ChevronRight className="w-6 h-6" />
                                ) : (
                                    <ChevronLeft className="w-6 h-6" />
                                )}
                            </button>
                        )}

                        {isMobile && !collapsed && (
                            <button
                                onClick={toggleSidebar}
                                className="p-1 rounded-md text-gray-500 hover:bg-gray-100"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        )}
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 overflow-y-auto p-3">
                        <ul className="space-y-3">
                            {navItems.map(({ label, href, icon: Icon }) => {
                                const isActive = pathname === href;
                                return (
                                    <li key={label}>
                                        <Link
                                            href={href}
                                            onClick={() => isMobile && setCollapsed(true)}
                                            className={`flex items-center p-3 rounded-lg transition-all group
                                                ${isActive
                                                    ? "bg-orange-500 text-white"
                                                    : "hover:bg-orange-500 hover:text-white"
                                                }
                                                ${collapsed && !isMobile ? "justify-center" : ""}`}
                                        >
                                            <Icon
                                                className={`w-6 h-6 ${isActive
                                                    ? "text-white"
                                                    : "text-orange-500"
                                                    } group-hover:text-white`}
                                            />
                                            {(!collapsed || isMobile) && (
                                                <span className="ml-3 text-[15px] font-medium">{label}</span>
                                            )}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    {/* Logout */}
                    <div className={`p-3 mt-auto ${isMobile && collapsed ? "hidden" : ""}`}>
                        <button
                            onClick={() => {
                                handleLogout();
                                if (isMobile) setCollapsed(true);
                            }}
                            className={`flex items-center w-full p-3 rounded-lg transition-all hover:bg-orange-500 hover:text-white group ${collapsed && !isMobile ? "justify-center" : ""}`}
                        >
                            <LogOut className="w-6 h-6 text-orange-500 group-hover:text-white" />
                            {(!collapsed || isMobile) && (
                                <span className="ml-3 text-[15px] font-medium">Logout</span>
                            )}
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main
                className="flex flex-col flex-1 min-h-screen transition-all duration-300"
            >

                {isMobile && collapsed && (
                    <div className="sticky top-0 z-20 bg-white shadow-sm p-4 flex items-center">
                        <button
                            onClick={toggleSidebar}
                            className="p-2 bg-orange-500 text-white rounded-md shadow-md"
                            aria-label="Toggle Menu"
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                        <div className="ml-4 flex items-center space-x-3">
                            <div className="w-10 h-10 bg-orange-500 rounded-md flex items-center justify-center">
                                <span className="text-white font-bold text-xl">A</span>
                            </div>
                            <h2 className="text-2xl font-bold text-orange-500">Admin Panel</h2>
                        </div>
                    </div>
                )}

                <div className="p-6">{children}</div>
            </main>
        </div>
    );
}

"use client";
import SidebarLayout from "@/components/Admin/Sidebar/SidebarLayout";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isAuthenticated, setisAuthenticated] = useState(false);

  useEffect(() => {
    let token =
      typeof window !== "undefined" && localStorage.getItem("adminToken");
    if (!token) {
      setisAuthenticated(false);
      redirect("/admin/login");
    } else {
      setisAuthenticated(true);
    }
  }, []);

  if (!isAuthenticated) {
    return (
      <p style={{ color: "black" }}>
        Unauthorized access is strict! Redirecting...
      </p>
    );
  }

  return (
    <>
      <SidebarLayout>{children}</SidebarLayout>
    </>
  );
}

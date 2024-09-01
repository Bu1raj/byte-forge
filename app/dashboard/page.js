"use client"
import StandardNavbar from "@/components/Navbars/StandardNavbar";
import React from "react";
import StudentDashboard from "@/components/Dashboard-Widgets/StudentDashboard";
import { useAuth } from "@/contexts/AuthContext";
import StaffDashboard from "@/components/Dashboard-Widgets/StaffDashboard";

export default function DashboardPage() {
  const {currentUser, userData, logout, loading} = useAuth();

  if (loading || !currentUser) {
    return (
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Loading...</h1>
      </div>
    );
  }

  if (!loading && !currentUser) {
    return (
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">You're not logged in</h1>
      </div>
    );
  }

  let children = <StudentDashboard />

  console.log(userData);
  if (userData.role === "staff") {
    children = <StaffDashboard />
  }

  return (
    <>
      <StandardNavbar handleLogout={logout}/>
      <div className="w-full h-[calc(100vh-5rem)] flex flex-col items-center justify-center relative pb-8">
        {children}
      </div>
    </>
  );
}

"use client"
import StaffDashboard from "@/components/Dashboard-Widgets/StaffDashboard";
import StudentDashboard from "@/components/Dashboard-Widgets/StudentDashboard";
import StandardNavbar from "@/components/Navbars/StandardNavbar";
import { useAuth } from "@/contexts/AuthContext";

export default function DashboardPage() {
  const {currentUser, userData, logout, loading} = useAuth();
  if (loading) {
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
  
  if (userData.role === 'staff') {
    children = <StaffDashboard />
  }

  return (
    <>
      <StandardNavbar handleLogout={logout}/>
      <div className="w-full h-[calc(100vh-5rem)] flex flex-col items-center justify-center relative">
        {children}
      </div>
    </>
  );
}

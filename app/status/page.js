"use client";
import Navbar from "@/components/Navbars/CodingPageNavbar";
import { useAuth } from "@/contexts/AuthContext";
import StudentStatus from "./StudentStatus";
import StaffStatus from "./StaffStatus";
import { labData } from "../consts";

export default function StatusPage() {
  const { userData, loading } = useAuth();

  if (loading) {
    return (
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      {userData.role == "student" ? (
        <StudentStatus userData={userData} labData={labData} />
      ) : (
        <StaffStatus userData={userData} labData={labData} />
      )}
    </>
  );
}

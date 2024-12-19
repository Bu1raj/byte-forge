"use client";
import Navbar from "@/components/Navbars/CodingPageNavbar";
import { useAuth } from "@/contexts/AuthContext";
import StudentStatus from "./StudentStatus";
import { labData } from "../consts";

function StatusPageContent() {
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
      <StudentStatus userData={userData} labData={labData} />
    </>
  );
}
export default function StatusPage() {
  return <StatusPageContent />;
}

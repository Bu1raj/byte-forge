"use client";
import { useAuth } from "@/contexts/AuthContext";
import {
  StudentDataProvider,
  useStudentDataContext,
} from "@/contexts/StudentDataContext";
import React from "react";
import StaffStatus from "./StaffStatus";
import { useRouter } from "next/navigation";
import NavbarTemplate from "@/components/Navbars/NavbarTemplate";
import { FaAngleLeft } from "react-icons/fa6";

function StaffSideStudentStatusContent() {
  const router = useRouter();
  const { userData, loading } = useAuth();
  const { studentData, studentDataLoading } = useStudentDataContext();

  if (loading || studentDataLoading || !studentData) {
    return (
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Loading...</h1>
      </div>
    );
  }

  if (!loading && userData.role === "student") {
    return (
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">
          You are not authorized to view this page
        </h1>
      </div>
    );
  }

  const handleBackButtonClick = () => {
    if(window.history.length > 1) {
      console.log(window.history.length)
      router.back();
    } else {
      console.log(window.history.length)
      router.push("/dashboard");
    }
  }

  const navBarData = {
    buttonList: [
      {
        isIcon: true,
        text: "Back",
        color: "secondary",
        onClick: handleBackButtonClick,
        Icon: FaAngleLeft,
      },
    ],
    linksList: [
    ],
  };

  return (
    <>
      <NavbarTemplate {...navBarData} />
      <StaffStatus userData={userData} studentData={studentData} />
    </>
  );
}

export default function StaffSideStudentStatus() {
  return (
    <StudentDataProvider>
      <StaffSideStudentStatusContent />
    </StudentDataProvider>
  );
}


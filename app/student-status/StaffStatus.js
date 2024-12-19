"use client";
import { IoTerminal } from "react-icons/io5";
import StaffStatusTable from "@/components/status-page-widgets/StaffStatusTable";

function LabProfile({ userData }) {
  return (
    <div className="flex items-center px-20 py-6 justify-between">
      <div className="flex items-center gap-4">
        <IoTerminal size={100} className="text-tertiary" />
        <p className="text-5xl">Programming in C</p>
      </div>
      <div className="bg-slate-900 bg-opacity-80 p-5 rounded-[10px] flex items-start justify-center gap-4 text-sm text-slate-200">
        <div className="flex flex-col gap-2 justify-start">
          <p>Lab Instructor</p>
          <p>Number of experiments</p>
          <p>Number of students</p>
          <p>Total marks</p>
        </div>

        <div className="flex flex-col gap-2 justify-start">
          <p>:</p>
          <p>:</p>
          <p>:</p>
          <p>:</p>
        </div>

        <div className="flex flex-col gap-2 justify-start">
          <p>{userData.name}</p>
          <p>{10}</p>
          <p>{24}</p>
          <p>{50}</p>
        </div>
      </div>
    </div>
  );
}

export default function StaffStatus({ userData, studentData }) {
  return (
    <div className="w-full">
      <LabProfile userData={userData} />
      <StaffStatusTable studentData={studentData} />
    </div>
  );
}


// import { PiChalkboardTeacherFill } from "react-icons/pi";
// import { FaMicrochip } from "react-icons/fa6";
// import { PiStudentFill } from "react-icons/pi";
// import { BsFileEarmarkSpreadsheet } from "react-icons/bs";

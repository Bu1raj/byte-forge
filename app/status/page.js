"use client"
import Navbar from "@/components/Navbars/CodingPageNavbar";
import { useAuth } from "@/contexts/AuthContext";
import StudentStatus from "./studentStatus";
import StaffStatus from "./staffStatus";

export default function StatusPage() {
    const {userData} = useAuth();
    const {labData} = labData;

    return(
        <>
            <Navbar />
            {userData.role=="student" ? <StudentStatus userData={userData} labData={labData}/> : <StaffStatus userData={userData} labData={labData}/>}
        </>
    )
}

"use client"
import Navbar from "@/components/Navbars/CodingPageNavbar";
import { useAuth } from "@/contexts/AuthContext";
import StudentStatus from "./StudentStatus";
import StaffStatus from "./StaffStatus";
import { labData } from "../consts";

export default function StatusPage() {
    const {userData} = useAuth();
    

    return(
        <>
            <Navbar />
            {userData.role=="student" ? <StudentStatus userData={userData} labData={labData}/> : <StaffStatus userData={userData} labData={labData}/>}
        </>
    )
}

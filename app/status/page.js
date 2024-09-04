"use client"
import { labData } from "@/app/consts";
import Navbar from "@/components/Navbars/CodingPageNavbar";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";

const {noStudentsInLab, experimentsList} = labData;

const StatusProfile = () => {
    const {userData} = useAuth();
    return(
        <div>
            <div className="flex items-center p-4 shadow-lg rounded-lg">
                <CgProfile className="w-32 h-32 text-gray-500 mr-6" />
                <div className="w-full">
                    <h2 className="text-2xl font-semibold">{userData.name}</h2>
                    <p className="text-lg text-gray-600">{userData.usn}</p>
                    <p className="text-lg text-gray-600">{userData.email}</p>
                </div>
            </div>
        </div>
    )
}

const StatusProfileStaff = () => {
    const {userData} = useAuth();
    return(
        <div>
            <div className="flex items-center p-4 shadow-lg rounded-lg">
                <CgProfile className="w-32 h-32 text-gray-500 mr-6" />
                <div className="w-full">
                    <h2 className="text-2xl font-semibold">{userData.name}</h2>
                    <p className="text-lg text-gray-600">{userData.staffId}</p>
                    <p className="text-lg text-gray-600">{userData.email}</p>
                </div>
            </div>
        </div>
    )
}

const StatusPageTable = () => {
    return (
        <div>
            <h3 style={{ fontWeight: 'bold', fontSize: '22px' }}>&nbsp;&nbsp;&nbsp;&nbsp;Progress</h3><br/>
            <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead className="text-center">Sl. No.</TableHead>
                    <TableHead className="w-[400px]">Experiment</TableHead>
                    <TableHead className="text-center">Completion</TableHead>
                    <TableHead className="text-center">Execution Score</TableHead>
                    <TableHead className="text-center">Viva Score</TableHead>
                    <TableHead className="text-center">Total</TableHead>
                    </TableRow>
                </TableHeader>
                {experimentsList.map((experiment, index) => (
                    <TableBody>
                        <TableRow>
                        <TableCell className="text-center">{index+1}</TableCell>
                        <TableCell>{experiment.title}</TableCell>
                        <TableCell className="flex justify-center">{experiment.completed?<TiTick />:<RxCross2 />}</TableCell>
                        <TableCell className="text-center">0</TableCell>
                        <TableCell className="text-center">0</TableCell>
                        <TableCell className="text-center">0</TableCell>
                        </TableRow>
                    </TableBody>
                ))}
            </Table>
        </div>
    )
}

const StatusPageTableStaff = () => {
    const {userData} = useAuth();
    return (
        <div>
            <h3 style={{ fontWeight: 'bold', fontSize: '22px' }}>&nbsp;&nbsp;Student Progress</h3><br/>
            <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead className="text-center">Sl. No.</TableHead>
                    <TableHead className="w-[400px] whitespace-nowrap overflow-hidden text-ellipsis">Student Name</TableHead>
                    <TableHead className="text-center border-r border-gray-10">USN</TableHead>
                        {experimentsList.map((experiment, i) => (
                        <>
                            <TableHead className="text-center">E{i + 1}</TableHead>
                            <TableHead className="text-center">V{i + 1}</TableHead>
                            <TableHead className="text-center border-r border-gray-10">T{i + 1}</TableHead>
                        </>
                        ))}
                    <TableHead className="text-center">Execution Score</TableHead>
                    <TableHead className="text-center">Viva Score</TableHead>
                    <TableHead className="text-center">Total</TableHead>
                    </TableRow>
                </TableHeader>

                    <TableBody>
                        <TableRow>
                            <TableCell className="text-center">{1}</TableCell>
                            <TableCell >{userData.name}</TableCell>
                            <TableCell className="text-center border-r border-gray-10">1RV21CS000</TableCell>
                            {[...Array(10)].map((_, i) => (
                                <>
                                    <TableCell className="text-center">0</TableCell>
                                    <TableCell className="text-center">0</TableCell>
                                    <TableCell className="text-center border-r border-gray-10">0</TableCell>
                                </>
                            ))}
                            <TableCell className="text-center">0</TableCell>
                            <TableCell className="text-center">0</TableCell>
                            <TableCell className="text-center">0</TableCell>
                        </TableRow>
                    </TableBody>
            </Table>
        </div>
    )
}

export default function StatusPage() {
    useEffect(() => {
        console.log("client-side");
      }, []);
    const {userData} = useAuth();
    if (userData.role=="student"){
        return(
            <div>
                <Navbar/><br/>
                <StatusProfile /><br/><br/>
                <StatusPageTable />
            </div>
        )
    }
    else{
        return(
            <div>
                <Navbar/><br/>
                <StatusProfileStaff /><br/><br/>
                <StatusPageTableStaff />
            </div>
        )
    }
}

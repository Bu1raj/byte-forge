"use client"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import { useAuth } from "@/contexts/AuthContext";
import { CgProfile } from "react-icons/cg";

const StatusProfile = (userData) => {
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

const StatusPageTable = ({userData, experimentsList}) => {
    return (
        <div>
            <h3 style={{ fontWeight: 'bold', fontSize: '22px' }}>&nbsp;&nbsp;&nbsp;&nbsp;Progress</h3><br/>
            <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead className="text-center">Sl. No.</TableHead>
                    <TableHead className="w-[400px]">Experiment</TableHead>
                    <TableHead className="text-center">Status</TableHead>
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
                        <TableCell className="flex justify-center">{experiment.completed?"Completed":"Missing"}</TableCell>
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

export default function StudentStatus({userData, labData}) {
    const {experimentsList} = labData
    return(
        <>
            <StatusProfile userData={userData}/>
            <StatusPageTable userData={userData} experimentsList={experimentsList}/>
        </>

    )
}

"use client"
import StaffDashboard from "@/components/Dashboard-Widgets/StaffDashboard";
import StudentDashboard from "@/components/Dashboard-Widgets/StudentDashboard";
import NavbarTemplate from "@/components/Navbars/NavbarTemplate";
import { useAuth } from "@/contexts/AuthContext";
import { useLDC } from "@/contexts/LabDataContext";
import { useRouter } from "next/navigation";
import { CgLogOut } from "react-icons/cg";
import { FaUser } from "react-icons/fa6";


export default function DashboardPage() {
  const {currentUser, userData, logout, loading} = useAuth();
  const {labLoading} = useLDC();
  const router = useRouter();
  
  const handleLogout = () => {
    logout();
    router.push("/");
  }

  function handleGoBack(){
    logout();
    router.back();
  }

  if (loading || labLoading) {
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

  if (!loading && (Object.keys(userData).length === 0 || userData === null)) {
    return (
      <div className="w-screen h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold">You don't have access to this page</h1>
        <p className="text-xl font-normal text-slate-300">Check the role you chose while logging in</p>
        <button onClick={handleGoBack} className="bg-[#FDFFE2] h-10 border duration-500 border-[#FDFFE2] rounded py-1 px-3 flex justify-center items-center gap-2 text-black font-semibold ease-in-out hover:text-[#FDFFE2] hover:bg-transparent">Go back</button>
      </div>
    );
  }

  let children = <StudentDashboard />

  if (userData.role === 'staff') {
    children = <StaffDashboard />
  }

  const navbarData = {
    buttonList : [
      {
        isIcon: true,
        text: 'Logout',
        color: 'secondary',
        onClick: handleLogout,
        Icon: CgLogOut,
      }
    ],

    linksList : [
      {
        href: userData.role === 'staff' ? '/student-status' : '/status',
        text: 'Status',
        color: 'tertiary',
        Icon: FaUser,
      }
    ]
  }

  return (
    <>
      <NavbarTemplate {...navbarData} />
      <div className="w-full h-[calc(100vh-5rem)] flex flex-col items-center justify-center relative">
        {children}
      </div>
    </>
  );
}

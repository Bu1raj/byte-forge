import React from "react";
import Image from "next/image";
import RVCELogo from "../../public/RVCE-logo.png";
import ByteForgeLogo from "../../public/ByteForge-logo.png";
import { CgLogOut } from "react-icons/cg";
import { FaUser } from "react-icons/fa6";
import Link from "next/link";

export default function StandardNavbar(props) {
  
  const { handleLogout } = props;
  return (
    <div className="w-full relative h-20 flex justify-between items-center shadow-inner hover:shadow-innerOnHover">
      <Image className="ml-6" src={RVCELogo} alt="RVCE logo" width={55} />
      <Image
        className="absolute left-[calc(50%-60px)]"
        src={ByteForgeLogo}
        alt="ByteForge logo"
        width={120}
      />
      <nav className="h-full flex p-2 mr-5 items-center gap-8">
          <Link 
            href={"/status"}
            className="bg-[#FDFFE2] border border-[#FDFFE2] rounded py-1 px-3 flex items-center gap-2 text-black font-medium transition duration-300 ease-in-out hover:text-[#FDFFE2] hover:bg-transparent">
            <FaUser fill="currentColor" />
            Status
          </Link>

        <button
          onClick={handleLogout}
          className="bg-[#83B4FF] border border-[#83B4FF] rounded py-1 px-3 flex items-center gap-1 text-black font-medium transition duration-300 ease-in-out hover:text-[#83B4FF] hover:bg-transparent"
        >
          <CgLogOut fill="currentColor" size={20} />
          Logout
        </button>
      </nav>
    </div>
  );
}

import Image from 'next/image';
import React from 'react';
import ByteForgeLogo from "../../public/ByteForge-logo.png";
import CompleteProfileForm from '@/components/CompleteProfileForm';

export default function CompleteProfilePage() {
  return (
    <div className="h-screen w-screen flex items-center justify-center gap-32">
      <div
        className={
          "login-card-wrapper flex flex-col w-[350px] h-[450px]"
        }
      >
        <div className="login-card-content flex flex-col items-center justify-center gap-12">
          <CompleteProfileForm />
        </div>
      </div>
      <Image
        className="relative top-[-30px] animate-float"
        src={ByteForgeLogo}
        alt="Byte Forge Logo"
      />
    </div>
  )
}

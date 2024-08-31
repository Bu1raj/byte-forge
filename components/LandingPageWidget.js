"use client";
import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignInForm from "./SignUpForm";
import Image from "next/image";
import ByteForgeLogo from "../public/ByteForge-logo.png";

export default function LandingPageWidget() {
  const [isLogin, setIsLogin] = useState(true);

  let children = <LoginForm />;

  if (!isLogin) {
    children = <SignInForm />;
  }
  
  return (
    <div className="h-full w-full flex items-center justify-center gap-32">
      <div
        className={
          "login-card-wrapper flex flex-col w-[350px] " +
          (isLogin ? "h-[400px]" : "h-[480px]")
        }
      >
        <div className="login-card-content flex flex-col items-center justify-center gap-12">
          {children}
          <div className="animate-in slide-in-from-bottom-56 duration-1000 flex flex-col w-full items-center ">
            <p className="text-sm font-semibold text-[#5f646e]">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
            </p>
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-[#83B4FF] underline hover:text-[#83B4FF]"
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </div>
        </div>
      </div>
      <Image
        className="relative top-[-30px] animate-float"
        src={ByteForgeLogo}
        alt="Byte Forge Logo"
      />
    </div>
  );
}

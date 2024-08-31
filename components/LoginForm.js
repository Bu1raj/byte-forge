"use client"
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import React, { useState } from "react";


export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const {login} = useAuth();

  async function handleLogin(e){
    e.preventDefault();
    if(!email || !password){
      alert("Please fill all the fields");
      return;
    }

    setIsAuthenticating(true);
    try{
      console.log("Logging in...");
      await login(email, password);
      router.push("/dashboard");
    }catch(err){
      console.error(err);
    }finally{
      setIsAuthenticating(false);
    }
  }


  return (
    <form className="flex flex-col h-1/2 w-72 justify-center animate-in slide-in-from-bottom-14 duration-1000">
      <p className="mb-4 font-normal text-3xl text-[#FDFFE2]">
        Hi, there
      </p>
      <input
        className="h-12 p-3 mb-6 text-white rounded outline-none bg-[#1a2130]"
        type="text"
        name="username"
        placeholder="Username"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        className="h-12 p-3 mb-6 text-white rounded outline-none bg-[#1a2130]"
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button
        onClick={isAuthenticating ? null : handleLogin}
        className="bg-[#FDFFE2] h-10 border duration-500 border-[#FDFFE2] rounded py-1 px-3 flex justify-center items-center gap-2 text-black font-semibold ease-in-out hover:text-[#FDFFE2] hover:bg-transparent"
        type="button"
      >
        {isAuthenticating ? "Logging in..." : "Log in"}
      </button>
    </form>
  );
}

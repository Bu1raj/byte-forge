"use client";
import { useAuth } from "@/contexts/AuthContext";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const { login } = useAuth();

  async function handleLogin(e) {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill all the fields");
      return;
    }

    setIsAuthenticating(true);
    try {
      console.log("Logging in...");
      await login(email, password, role);
      router.push("/dashboard");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <form className="flex flex-col h-fit w-72 justify-center animate-in slide-in-from-bottom-14 duration-1000">
      <p className="mb-4 font-normal text-3xl text-[#FDFFE2]">Hi, there</p>
      <p className="mb-1 font-light text-sm text-secondary-muted opacity-60">
        Select your role
      </p>
      <Tabs
        defaultValue="student"
        onValueChange={(value) => {
          setRole(value);
        }}
      >
        <TabsList className="mb-4">
          <TabsTrigger value="student" className="rounded w-[50%]">
            Student
          </TabsTrigger>
          <TabsTrigger value="staff" className="rounded w-[50%]">
            Staff
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <input
        className="h-12 p-3 mb-4 text-white rounded outline-none bg-[#1a2130]"
        type="text"
        name="username"
        placeholder="Username"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        className="h-12 p-3 mb-4  text-white rounded outline-none bg-[#1a2130]"
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

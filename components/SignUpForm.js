"use client";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SignInForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const { signUp } = useAuth();

  async function handleSignUp() {
    if (!email || !password || !confirmPassword) {
      alert("Please fill all the fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setIsAuthenticating(true);
    try {
      console.log("Signing up...");
      await signUp(email, password);
      router.push("/complete-profile");
    } catch (err) {
      console.error(err);
    } finally {
      setIsAuthenticating(false);
    }
  }

  return (
    <form className="flex flex-col w-72 justify-center animate-in slide-in-from-bottom-14 duration-1000">
      <p className="mb-4 font-normal text-3xl text-[#FDFFE2]">Hi, there</p>
      <input
        className="h-12 p-3 mb-6 text-white rounded outline-none bg-[#1a2130]"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="h-12 p-3 mb-6 text-white rounded outline-none bg-[#1a2130]"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        className="h-12 p-3 mb-6 text-white rounded outline-none bg-[#1a2130]"
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button
        onClick={isAuthenticating ? null : handleSignUp}
        className="bg-[#FDFFE2] h-10 border border-[#FDFFE2] duration-500 rounded py-1 px-3 flex justify-center items-center gap-2 text-black font-semibold ease-in-out hover:text-[#FDFFE2] hover:bg-transparent"
        type="button"
      >
        {isAuthenticating ? "Signing up..." : "Sign Up"}
      </button>
    </form>
  );
}

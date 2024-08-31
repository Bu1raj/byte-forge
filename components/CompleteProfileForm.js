"use client"
import { useAuth } from "@/contexts/AuthContext";
import { db } from "@/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function CompleteProfileForm() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [usn, setUsn] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {currentUser, setUserData} = useAuth();

  async function handleSubmit() {
    setIsSubmitting(true);
    try{
      const docRef = doc(db, "users", currentUser.uid);
      const userData = {
        'name': fullName,
        'usn': usn,
        'email': currentUser.email,
        'experimentsStatus': {
          'expt01' : false,
          'expt02' : false,
          'expt03' : false,
          'expt04' : false,
          'expt05' : false,
          'expt06' : false,
          'expt07' : false,
          'expt08' : false,
          'expt09' : false,
          'expt10' : false,
        }
      }

      await setDoc(docRef, userData);
      setUserData(userData);
      console.log("Created user document ", userData);
      router.push("/dashboard");
    }catch(e){
      console.error("ERROR:", e);
    }finally{
      setIsSubmitting(false);
    }
  }
  return (
    <form className="flex flex-col w-72 justify-center animate-in slide-in-from-bottom-14 duration-1000">
      <p className="mb-4 font-normal text-3xl text-[#FDFFE2]">You're one step away</p>
      <input
        className="h-12 p-3 mb-6 text-white rounded outline-none bg-[#1a2130]"
        placeholder="Full name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <input
        className="h-12 p-3 mb-6 text-white rounded outline-none bg-[#1a2130]"
        placeholder="USN"
        value={usn}
        onChange={(e) => setUsn(e.target.value)}
      />
      <button
        onClick={isSubmitting ? null : handleSubmit}
        className="bg-[#FDFFE2] h-10 border border-[#FDFFE2] duration-500 rounded py-1 px-3 flex justify-center items-center gap-2 text-black font-semibold ease-in-out hover:text-[#FDFFE2] hover:bg-transparent"
        type="button"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}

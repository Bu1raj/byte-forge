"use client";
import { useAuth } from "@/contexts/AuthContext";
import { db } from "@/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export default function CompleteProfileForm() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [usn, setUsn] = useState("");
  const [staffId, setStaffId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { currentUser, setUserData } = useAuth();
  const [role, setRole] = useState("student");

  async function handleSubmit() {
    setIsSubmitting(true);
    try {
      let docRef = null;
      let userData = {};

      if (role === "student") {
        docRef = doc(db, "studentsData", currentUser.uid);
        if (!fullName || !usn) {
          alert("Please fill all the fields");
          return;
        }
        userData = {
          name: fullName,
          usn: usn,
          role: role,
          email: currentUser.email,
          enrolledLabs: [
            {
              labName: "Programming in C",
              labId: "PICLAB2024",
              status: [
                {
                  id: "expt01",
                  completed: false,
                  experimentMarks: 5,
                  vivaMarks: 4,
                  code: null,
                  numberOfSubmissions: 0,
                  vivaAns: {
                    q1: null,
                    q2: null,
                    q3: null,
                    q4: null,
                  },
                },
                {
                  id: "expt02",
                  completed: false,
                  experimentMarks: 6,
                  vivaMarks: 4,
                  code: null,
                  numberOfSubmissions: 0,
                  vivaAns: {
                    q1: null,
                    q2: null,
                    q3: null,
                    q4: null,
                  },
                },
                {
                  id: "expt03",
                  completed: false,
                  experimentMarks: 4,
                  vivaMarks: 4,
                  code: null,
                  numberOfSubmissions: 0,
                  vivaAns: {
                    q1: null,
                    q2: null,
                    q3: null,
                    q4: null,
                  },
                },
                {
                  id: "expt04",
                  completed: false,
                  experimentMarks: 6,
                  vivaMarks: 3,
                  code: null,
                  numberOfSubmissions: 0,
                  vivaAns: {
                    q1: null,
                    q2: null,
                    q3: null,
                    q4: null,
                  },
                },
                {
                  id: "expt05",
                  completed: false,
                  experimentMarks: 6,
                  vivaMarks: 2,
                  code: null,
                  numberOfSubmissions: 0,
                  vivaAns: {
                    q1: null,
                    q2: null,
                    q3: null,
                    q4: null,
                  },
                },
                {
                  id: "expt06",
                  completed: false,
                  experimentMarks: 6,
                  vivaMarks: 1,
                  code: null,
                  numberOfSubmissions: 0,
                  vivaAns: {
                    q1: null,
                    q2: null,
                    q3: null,
                    q4: null,
                  },
                },
                {
                  id: "expt07",
                  completed: false,
                  experimentMarks: 5,
                  vivaMarks: 3,
                  code: null,
                  numberOfSubmissions: 0,
                  vivaAns: {
                    q1: null,
                    q2: null,
                    q3: null,
                    q4: null,
                  },
                },
                {
                  id: "expt08",
                  completed: false,
                  experimentMarks: 4,
                  vivaMarks: 2,
                  code: null,
                  numberOfSubmissions: 0,
                  vivaAns: {
                    q1: null,
                    q2: null,
                    q3: null,
                    q4: null,
                  },
                },
                {
                  id: "expt09",
                  completed: false,
                  experimentMarks: 6,
                  vivaMarks: 4,
                  code: null,
                  numberOfSubmissions: 0,
                  vivaAns: {
                    q1: null,
                    q2: null,
                    q3: null,
                    q4: null,
                  },
                },
                {
                  id: "expt10",
                  completed: false,
                  experimentMarks: 5,
                  vivaMarks: 2,
                  code: null,
                  numberOfSubmissions: 0,
                  vivaAns: {
                    q1: null,
                    q2: null,
                    q3: null,
                    q4: null,
                  },
                },
              ],
            },
          ],
        };
      } else if (role === "staff") {
        docRef = doc(db, "staffData", currentUser.uid);
        if (!fullName || !staffId) {
          alert("Please fill all the fields");
          return;
        }
        userData = {
          name: fullName,
          staffId: staffId,
          role: role,
          email: currentUser.email,
          labsHandled: [
            {
              labName: "Programming in C",
              labId: "PICLAB2024",
            },
          ],
        };
      }

      if (docRef) {
        await setDoc(docRef, userData);
        setUserData(userData);
        console.log("Created user document ", userData);
        router.push("/dashboard");
      }else{
        console.error("docRef is null");
      }
    } catch (e) {
      console.error("ERROR:", e);
    }
  }

  // async function getExperimentsOfALab(labId) {
  //   const docRef = doc(db, "labData", labId);
  //   const docSnap = await docRef.get();
  //   if (docSnap.exists()) {
  //     console.log("Document data:", docSnap.data());
  //   } else {
  //     // doc.data() will be undefined in this case
  //     console.log("No such document!");
  //   }
  // }

  return (
    <form className="flex flex-col w-72 justify-center animate-in slide-in-from-bottom-14 duration-1000">
      <p className="mb-8 font-normal text-3xl text-foreground">
        You're one step away!
      </p>

      <p className="mb-1 font-normal text-sm text-secondary-muted opacity-60">
        Choose your role
      </p>
      <Tabs
        defaultValue="student"
        className=""
        onValueChange={(value) => setRole(value)}
      >
        <TabsList className="mb-3">
          <TabsTrigger className="rounded w-[50%]" value="student">
            Student
          </TabsTrigger>
          <TabsTrigger className="rounded w-[50%]" value="staff">
            Staff
          </TabsTrigger>
        </TabsList>
        <TabsContent value="student" key="student">
          <input
            className="h-12 w-full p-3 mb-3 text-white rounded outline-none bg-[#1a2130]"
            placeholder="Full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            className="h-12 w-full p-3 mb-8 text-white rounded outline-none bg-[#1a2130]"
            placeholder="USN"
            value={usn}
            onChange={(e) => setUsn(e.target.value)}
          />
        </TabsContent>
        <TabsContent value="staff" key="staff">
          <input
            className="h-12 w-full p-3 mb-3 text-white rounded outline-none bg-[#1a2130]"
            placeholder="Full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            className="h-12 w-full p-3 mb-8 text-white rounded outline-none bg-[#1a2130]"
            placeholder="Staff ID"
            value={staffId}
            onChange={(e) => setStaffId(e.target.value)}
          />
        </TabsContent>
      </Tabs>
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

// experimentsStatus: {
//   expt01: {

//   },
//   expt02: null,
//   expt03: null,
//   expt04: null,
//   expt05: null,
//   expt06: null,
//   expt07: null,
//   expt08: null,
//   expt09: null,
//   expt10: null,
// },

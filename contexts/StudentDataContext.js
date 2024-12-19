import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";

const StudentDataContext = createContext();

export function useStudentDataContext() {
  return useContext(StudentDataContext);
}

export function StudentDataProvider({ children }) {
  const [studentData, setStudentData] = useState(null);
  const [studentDataLoading, setStudentDataLoading] = useState(false);
  const { currentUser } = useAuth();

  async function fetchStudentData() {
    console.log("Fetching student data...");
    setStudentDataLoading(true);
    try {
      const collectionRef = collection(db, "studentsData");
      const querySnapShot = await getDocs(collectionRef);

      const firebaseStudentData = querySnapShot.docs.map((doc) => {
        return {
          uid: doc.id,
          ...doc.data(),
        };
      });
      setStudentData(firebaseStudentData);
      console.log("Student data fetched", firebaseStudentData);
    } catch (e) {
      console.error("Error fetching student data", e);
    }
    setStudentDataLoading(false);
  }

  useEffect(() => {
    if (currentUser) {
      fetchStudentData();
    }
  }, [currentUser]);

  const value = {
    studentData,
    studentDataLoading,
  };
  return (
    <StudentDataContext.Provider value={value}>
      {children}
    </StudentDataContext.Provider>
  );
}

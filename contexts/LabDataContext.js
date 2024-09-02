"use client"
import { db } from "@/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

const LabDataContext = React.createContext();

export function useLDC() {
  return useContext(LabDataContext);
}

export default function LabDataProvider({ children }) {
  const { currentUser } = useAuth();
  const [labData, setLabData] = useState(null);
  const [labLoading, setLabLoading] = useState(true);

  async function fetchLabData() {
    setLabLoading(true);
    try {
      const docRef = doc(db, "labData", "PICLAB2024");
      const docSnap = await getDoc(docRef);
      let firebaseData = {};

      if (docSnap.exists()) {
        console.log("Lab data found");
        firebaseData = docSnap.data();
        console.log(firebaseData);
      }
      setLabData(firebaseData);
    } catch (e) {
      console.error(e);
    } finally {
      setLabLoading(false);
    }
  }

  async function lockUnlockExperiment(isLock, exptID) {
    if (!labData) {
      console.error("still loading lab data");
      return;
    }

    console.log("Locking/Unlocking experiment with id:", exptID);
    const {noStudentsInLab, experimentsList} = labData;

    const updatedExperimentsList = experimentsList.map((expt) => {
      if (expt.id == exptID){
        if(isLock){
          return { ...expt, locked : true };
        }else{
          return { ...expt, locked : false };
        }
      }
      return expt;
    });

    const updatedLabData = {
      noStudentsInLab,
      experimentsList: updatedExperimentsList,
    };

    try{
      const docRef = doc(db, "labData", "PICLAB2024");
      await setDoc(docRef, updatedLabData);
      setLabData(updatedLabData);
      console.log("Experiment locked successfully");
    }catch(e){
      console.error(e);
      console.log("Error locking experiment");
    }
  }

  useEffect(() => {
    if (currentUser) {
      fetchLabData();
    }
  }, [currentUser]);

  const value = {
    labData,
    fetchLabData,
    labLoading,
    lockUnlockExperiment,
  };
  return (
    <LabDataContext.Provider value={value}>{children}</LabDataContext.Provider>
  );
}

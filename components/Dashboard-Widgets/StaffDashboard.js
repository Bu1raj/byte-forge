"use client";
import React, { useState } from "react";
import StaffExptCard from "../StaffExptCard";
import { useLDC } from "@/contexts/LabDataContext";
import ProblemOverlay from "../ProblemOverlay";
import VivaVoceOverlay from "../VivaVoceOverlay";

export default function StaffDashboard() {
  const { labData, lockUnlockExperiment } = useLDC();
  const { experimentsList } = labData;

  const [isProblemModalOpen, setIsProblemModalOpen] = useState(false);
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);
  const [selectedExpt, setSelectedExpt] = useState(null);

  function handleViewProblemClick(expt) {
    setSelectedExpt(expt);
    setIsProblemModalOpen(true);
  }

  function handleVivaVoceClick(expt){
    setSelectedExpt(expt);
    setIsQuizModalOpen(true);
  }

  async function handleLockClick(id, lockOrUnclock) {
    console.log("Lock/Unlock experiment with id:", id);
    await lockUnlockExperiment(lockOrUnclock, id);
  }

  return (
    <>
      <div className="h-full w-full flex flex-1 flex-col items-center pt-16 overflow-auto">
        <div className="w-[75%]">
          <p className="text-5xl mb-16">Programming in C</p>
          <p className="text-2xl mb-6 ml-2">Experiments</p>
        </div>
        {experimentsList.map((experiment, index) => (
          <StaffExptCard
            experiment={experiment}
            key={index}
            isLocked={experiment.locked}
            handleLockClick={handleLockClick}
            handleViewProblemClick={handleViewProblemClick}
            handleVivaVoceClick={handleVivaVoceClick}
          />
        ))}
      </div>
      {isProblemModalOpen && <ProblemOverlay title={selectedExpt.title} description={selectedExpt.description} testCases={selectedExpt.problem.testCases} constraints={selectedExpt.problem.constraints} setIsModalOpen={setIsProblemModalOpen}/>}
      {isQuizModalOpen && <VivaVoceOverlay questions={selectedExpt.quiz.questions} setIsModalOpen={setIsQuizModalOpen}/>}
    </>
  );
}

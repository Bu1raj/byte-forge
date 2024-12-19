"use client";
import React, { useState } from "react";
import StaffExptCard from "../StaffExptCard";
import { useLDC } from "@/contexts/LabDataContext";
import ProblemOverlay from "../ProblemOverlay";
import VivaVoceOverlay from "../VivaVoceOverlay";
import { IoTerminal } from "react-icons/io5";

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

  function handleVivaVoceClick(expt) {
    setSelectedExpt(expt);
    setIsQuizModalOpen(true);
  }

  async function handleLockClick(id, lockOrUnclock) {
    console.log("Lock/Unlock experiment with id:", id);
    await lockUnlockExperiment(lockOrUnclock, id);
  }

  return (
    <>
      <div className="h-full w-full flex flex-1 flex-col items-center pt-8 overflow-auto">
          <div className="w-[75%]">
          <div className="flex items-center gap-4 mb-10">
            <IoTerminal size={70} className="text-tertiary" />
            <p className="text-5xl">Programming in C</p>
          </div>
          <p className="text-2xl text-neutral-300 mb-6 ml-2">Experiments</p>
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
      {isProblemModalOpen && (
        <ProblemOverlay
          title={selectedExpt.title}
          description={selectedExpt.description}
          testCases={selectedExpt.problem.testCases}
          constraints={selectedExpt.problem.constraints}
          setIsModalOpen={setIsProblemModalOpen}
        />
      )}
      {isQuizModalOpen && (
        <VivaVoceOverlay
          questions={selectedExpt.quiz.questions}
          setIsModalOpen={setIsQuizModalOpen}
        />
      )}
    </>
  );
}

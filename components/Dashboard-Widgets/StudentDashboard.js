"use client";
import React, { useEffect, useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { useRouter } from "next/navigation";
import { useLDC } from "@/contexts/LabDataContext";
import { IoIosLock } from "react-icons/io";
import { CiLock } from "react-icons/ci";

export default function StudentDashboard() {
  const router = useRouter();
  const { labData } = useLDC();
  const [completedCount, setCompletedCount] = useState("--");
  const [remainingCount, setRemainingCount] = useState("--");

  const { noStudentsInLab, experimentsList } = labData;

  useEffect(() => {
    // Calculate the number of completed and remaining experiments
    const numberOfExperiments = experimentsList.length;
    const completedExperiments = experimentsList.filter(
      (experiment) => experiment.completed
    ).length;
    setCompletedCount(completedExperiments.toString());
    setRemainingCount((numberOfExperiments - completedExperiments).toString());
  }, []);

  // When user clicks on "Solve problem" button
  function handleSolveProblem(experiment) {
    // Navigate to the coding page with the questionId passed as a query parameter
    router.push(`/solve-problem?questionId=${experiment.id}`);
  }

  function handleVivaVoceClick(experiment) {
    router.push(`/instruction?questionId=${experiment.id}`);
  }
  return (
    <>
      <div className="w-[calc(100vw-15rem)] h-32 border border-secondary border-opacity-30 rounded-xl mt-8 mb-8 p-8 flex flex-col justify-between bg-background">
        <h1 className="text-5xl font-bold">Programming in C</h1>
        {/* <div className="flex gap-8 ml-auto text-xl">
          <p>Completed {completedCount}</p>
          <p>Remaining {remainingCount}</p>
        </div> */}
      </div>
      <div className="h-full w-[calc(100vw-15rem)] grid grid-cols-5 gap-10 pb-8">
        {experimentsList.map((experiment, index) => (
          <div
            key={index}
            className="p-6 flex flex-col gap-10 text-background rounded-xl bg-gradient-to-b from-[#020817] to-[#83b4ff1a] border border-secondary border-opacity-30"
          >
            <div className="relative group">
              <h1 className="text-xl text-white font-semibold truncate">
                {experiment.title.length > 15
                  ? experiment.title.slice(0, 15) + "..."
                  : experiment.title}
                {experiment.title.length >= 15 && (
                  <div className="absolute z-10 invisible group-hover:visible bg-slate-800 text-white text-sm font-normal rounded py-2 px-4 left-1 -top-10 shadow-xl">
                    {experiment.title}
                  </div>
                )}
              </h1>
            </div>
            {experiment.locked ? (
              <div className="w-full flex justify-center mt-[-10px]">
                <CiLock size={60} className="text-tertiary drop-shadow-2xl" />
              </div>
            ) : (
              <div className="flex flex-col gap-2 text-sm font-medium items-start">
                <button
                  onClick={() => handleSolveProblem(experiment)}
                  className="bg-tertiary border border-tertiary px-2 py-1 rounded shadow-2xl flex items-center gap-2 duration-300 hover:bg-transparent hover:text-tertiary"
                >
                  Solve problem
                  <IoMdArrowDropright fill="currentColor" />
                </button>
                <button
                  onClick={() => handleVivaVoceClick(experiment)}
                  className="bg-tertiary border border-tertiary px-2 py-1 rounded shadow-2xl flex items-center gap-2 duration-300 hover:bg-transparent hover:text-tertiary"
                >
                  Viva Voce
                  <IoMdArrowDropright fill="currentColor" />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
